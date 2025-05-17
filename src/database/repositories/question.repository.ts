import { QuizQuestion } from '../../../generated/prisma';
import { prisma } from '../config';

type PagingObj = {
  limit?: number;
  page?: number;
};

type QueryObj = {
  [key: string]: any;
};

// Get all with pagination, filtering, sorting
const getAll = async (condition: QueryObj = {}, paging: PagingObj = {}, query: QueryObj = {}) => {
  const page = paging.page || 1;
  const limit = paging.limit || 10;
  const skip = (page - 1) * limit;

  const where: any = {
    ...condition,
    ...(query.search
      ? {
          name: {
            contains: query.search,
            mode: 'insensitive',
          },
        }
      : {}),
  };

  const [items, total] = await Promise.all([
    prisma.quizQuestion.findMany({
      where,
      skip,
      take: limit,
      orderBy: query.sort ? { [query.sort]: query.order === 'asc' ? 'asc' : 'desc' } : undefined,
    }),
    prisma.quizQuestion.count({ where }),
  ]);

  return {
    docs: items,
    totalDocs: total,
    limit,
    page,
    totalPages: Math.ceil(total / limit),
    hasNextPage: page * limit < total,
    hasPrevPage: page > 1,
  };
};

const getById = async (id: string, select: object = {}) => {
  return prisma.quizQuestion.findUnique({
    where: { id },
    select: Object.keys(select).length ? select : undefined,
  });
};

const getByOrder = async (quizId: string, order: number) => {
  const question = await prisma.quizQuestion.findFirst({
    where: {
      quizId,
      order,
    },
    include: {
      options: true,
    },
  });

  if (!question) return null;

  // Remove isCorrect before returning
  const safeOptions = question.options.map(({ id, text, questionId }) => ({
    id,
    text,
    questionId,
  }));

  return {
    id: question.id,
    text: question.text,
    timeLimit: question.timeLimit,
    order: question.order,
    type: question.type,
    questionScore: question.questionScore,
    quizId: question.quizId,
    options: safeOptions,
  };
};

const getByQuery = async (where: QueryObj, select: object = {}) => {
  return prisma.quizQuestion.findMany({
    where,
    select: Object.keys(select).length ? select : undefined,
  });
};

const getOneByQuery = async (where: QueryObj, select: object = {}) => {
  return prisma.quizQuestion.findFirst({
    where,
    select: Object.keys(select).length ? select : undefined,
  });
};

const create = async (data: QuizQuestion) => {
  return prisma.quizQuestion.create({ data });
};

const edit = async (id: string, data: QuizQuestion) => {
  return prisma.quizQuestion.update({
    where: { id },
    data,
  });
};

const remove = async (id: string) => {
  return prisma.quizQuestion.delete({ where: { id } });
};

export default {
  getAll,
  getById,
  getByOrder,
  getByQuery,
  getOneByQuery,
  create,
  edit,
  remove,
};

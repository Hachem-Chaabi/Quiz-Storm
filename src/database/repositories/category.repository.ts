import { QuizCategory } from '../../../generated/prisma';
import { pagingObj } from '../../types/pagination';
import { prisma } from '../config';

type ConditionObj = {
  [K in keyof QuizCategory]?: QuizCategory[K];
};

type QueryObj = {
  search?: string;
  sort?: string;
  order?: 'asc' | 'desc';
};

// Get all with pagination, filtering, sorting
const getAll = async (paging: pagingObj, query: QueryObj) => {
  const page = paging.page || 1;
  const limit = paging.limit || 10;
  const skip = (page - 1) * limit;

  const where: any = {
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
    prisma.quizCategory.findMany({
      where,
      skip,
      take: limit,
      orderBy: query.sort ? { [query.sort]: query.order } : undefined,
    }),
    prisma.quizCategory.count({ where }),
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
  return prisma.quizCategory.findUnique({
    where: { id },
    select: Object.keys(select).length ? select : undefined,
  });
};

const getByQuery = async (where: ConditionObj, select: object = {}) => {
  return prisma.quizCategory.findMany({
    where,
    select: Object.keys(select).length ? select : undefined,
  });
};

const getOneByQuery = async (where: ConditionObj, select: object = {}) => {
  return prisma.quizCategory.findFirst({
    where,
    select: Object.keys(select).length ? select : undefined,
  });
};

const create = async (data: QuizCategory) => {
  return prisma.quizCategory.create({ data });
};

const edit = async (id: string, data: QuizCategory) => {
  return prisma.quizCategory.update({
    where: { id },
    data,
  });
};

const remove = async (id: string) => {
  return prisma.quizCategory.delete({ where: { id } });
};

export default {
  getAll,
  getById,
  getByQuery,
  getOneByQuery,
  create,
  edit,
  remove,
};

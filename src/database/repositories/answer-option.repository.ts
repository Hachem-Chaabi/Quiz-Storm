import { QuestionAnswerOption } from '../../../generated/prisma';
import { prisma } from '../config';

type PagingObj = {
  limit?: number;
  page?: number;
};

type QueryObj = {
  [key: string]: any;
};

// Get all randomly with pagination, filtering, sorting
const getAll = async (condition: QueryObj = {}, paging: PagingObj = {}, query: QueryObj = {}) => {
  const page = paging.page || 1;
  const limit = paging.limit || 10;
  const skip = (page - 1) * limit;

  const whereConditions: string[] = [];

  if (condition.questionId) {
    whereConditions.push(`"questionId" = '${condition.questionId}'`);
  }

  if (query.search) {
    whereConditions.push(`LOWER("text") LIKE LOWER('%${query.search}%')`);
  }

  const whereClause = whereConditions.length ? `WHERE ${whereConditions.join(' AND ')}` : '';

  const items = await prisma.$queryRawUnsafe(`
    SELECT "id", "text", "questionId"
    FROM "QuestionAnswerOption"
    ${whereClause}
    ORDER BY RANDOM()
    LIMIT ${limit}
    OFFSET ${skip};
  `);

  const countResult = await prisma.$queryRawUnsafe(`
    SELECT COUNT(*) as count FROM "QuestionAnswerOption" ${whereClause};
  `);

  const total = Number((countResult as any)[0].count);

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
  return prisma.questionAnswerOption.findUnique({
    where: { id },
    select: Object.keys(select).length ? select : undefined,
  });
};

const getByQuery = async (where: QueryObj, select: object = {}) => {
  return prisma.questionAnswerOption.findMany({
    where,
    select: Object.keys(select).length ? select : undefined,
  });
};

const getOneByQuery = async (where: QueryObj, select: object = {}) => {
  return prisma.questionAnswerOption.findFirst({
    where,
    select: Object.keys(select).length ? select : undefined,
  });
};

const create = async (data: QuestionAnswerOption) => {
  return prisma.questionAnswerOption.create({ data });
};

const edit = async (id: string, data: QuestionAnswerOption) => {
  return prisma.questionAnswerOption.update({
    where: { id },
    data,
  });
};

const remove = async (id: string) => {
  return prisma.questionAnswerOption.delete({ where: { id } });
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

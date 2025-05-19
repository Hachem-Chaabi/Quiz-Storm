import { Quiz } from '../../../generated/prisma';
import { pagingObj } from '../../types/pagination';
import { prisma } from '../config';

type ConditionObj = {
  [K in keyof Quiz]?: Quiz[K];
};

type QueryObj = {
  search?: string;
  sort?: string;
  order?: 'asc' | 'desc';
};

// Get all with pagination, filtering, sorting
const getAll = async (condition: ConditionObj, paging: pagingObj, query: QueryObj) => {
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
    prisma.quiz.findMany({
      where,
      skip,
      take: limit,
      orderBy: query.sort ? { [query.sort]: query.order } : undefined,
    }),
    prisma.quiz.count({ where }),
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
  return prisma.quiz.findUnique({
    where: { id },
    select: Object.keys(select).length ? select : undefined,
  });
};

const getByQuery = async (where: ConditionObj, select: object = {}) => {
  return prisma.quiz.findMany({
    where,
    select: Object.keys(select).length ? select : undefined,
  });
};

const getOneByQuery = async (where: ConditionObj, select: object = {}) => {
  return prisma.quiz.findFirst({
    where,
    select: Object.keys(select).length ? select : undefined,
  });
};

const create = async (data: Quiz) => {
  return prisma.quiz.create({ data });
};

const edit = async (id: string, data: Quiz) => {
  return prisma.quiz.update({
    where: { id },
    data,
  });
};

const remove = async (id: string) => {
  return prisma.quiz.delete({ where: { id } });
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

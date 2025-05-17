import { SessionInvitation } from '../../../generated/prisma';
import { prisma } from '../config';

type PagingObj = {
  limit?: number;
  page?: number;
};

type QueryObj = {
  [key: string]: any;
};

// Get all with pagination, filtering, sorting
const getAll = async (condition: QueryObj, paging: PagingObj = {}, query: QueryObj = {}) => {
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
    prisma.sessionInvitation.findMany({
      where,
      skip,
      take: limit,
      orderBy: query.sort ? { [query.sort]: query.order === 'asc' ? 'asc' : 'desc' } : undefined,
    }),
    prisma.sessionInvitation.count({ where }),
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

const send = async (data: SessionInvitation) => {
  return prisma.sessionInvitation.create({ data });
};

const accept = async (id: string, email: string) => {
  return prisma.sessionInvitation.update({
    where: { sessionId_email: { sessionId: id, email } },
    data: { accepted: true },
  });
};

const getById = async (id: string, select: object = {}) => {
  return prisma.sessionInvitation.findUnique({
    where: { id },
    select: Object.keys(select).length ? select : undefined,
  });
};

const getByQuery = async (where: QueryObj, select: object = {}) => {
  return prisma.sessionInvitation.findMany({
    where,
    select: Object.keys(select).length ? select : undefined,
  });
};

const getOneByQuery = async (where: QueryObj, select: object = {}) => {
  return prisma.sessionInvitation.findFirst({
    where,
    select: Object.keys(select).length ? select : undefined,
  });
};

const create = async (data: SessionInvitation) => {
  return prisma.sessionInvitation.create({ data });
};

const edit = async (id: string, data: SessionInvitation) => {
  return prisma.sessionInvitation.update({
    where: { id },
    data,
  });
};

const remove = async (id: string) => {
  return prisma.sessionInvitation.delete({ where: { id } });
};

export default {
  getAll,
  send,
  accept,
  getById,
  getByQuery,
  getOneByQuery,
  create,
  edit,
  remove,
};

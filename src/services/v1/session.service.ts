import { QuizSession } from '../../../generated/prisma';
import { ErrorHandler } from '../../utils/errorHandler';
import { HttpCode } from '../../utils/httpCode';

import SessionRepository from '../../database/repositories/session.repository';
import generateSessionCode from '../../utils/generateSessionCode';

const getAll = async (name: string, page: number, pageSize: number) => {
  const options = {
    page,
    limit: pageSize,
  };

  const {
    docs,
    totalDocs,
    limit,
    page: currentPage,
    totalPages,
    hasNextPage,
    hasPrevPage,
  } = await SessionRepository.getAll(options, { search: name });

  const meta = {
    totalDocs,
    page: currentPage,
    limit,
    totalPages,
    hasNextPage,
    hasPrevPage,
  };

  return { docs, meta };
};

const getById = async (id: string) => {
  const session = await SessionRepository.getById(id);

  if (!session) {
    throw new ErrorHandler('Session not found!', HttpCode.NOT_FOUND);
  }

  return session;
};

const create = async (quizId: string, userId: string, item: QuizSession) => {
  const sessionCode = generateSessionCode();
  const createdQuestion = await SessionRepository.create({
    ...item,
    quizId,
    hostId: userId,
    code: sessionCode,
  });

  return createdQuestion;
};

const edit = async (id: string, item: QuizSession) => {
  const session = (await SessionRepository.getById(id)) as QuizSession | null;

  if (!session) {
    throw new ErrorHandler('Session not found!', HttpCode.NOT_FOUND);
  }

  const updatedSession = await SessionRepository.edit(id, item);

  return updatedSession;
};

const remove = async (id: string) => {
  const session = await SessionRepository.getById(id);

  if (!session) {
    throw new ErrorHandler('Session not found!', HttpCode.NOT_FOUND);
  }

  await SessionRepository.remove(id);

  return session;
};

export default {
  getAll,
  getById,
  create,
  edit,
  remove,
};

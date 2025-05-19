import { Quiz } from '../../../generated/prisma';
import { ErrorHandler } from '../../utils/errorHandler';
import { HttpCode } from '../../utils/httpCode';

import QuizRepository from '../../database/repositories/quiz.repository';

const getAll = async (name: string, page: number, pageSize: number, userId?: string) => {
  // create options object to filter data
  const options = {
    page,
    limit: pageSize,
  };

  // get docs and meta
  const {
    docs,
    totalDocs,
    limit,
    totalPages,
    hasNextPage,
    hasPrevPage,
  } = await QuizRepository.getAll({ createdById: userId }, options, { search: name });

  const meta = {
    totalDocs,
    page,
    limit,
    totalPages,
    hasNextPage,
    hasPrevPage,
  };

  // return data
  return { docs, meta };
};

const getById = async (userId: string, id: string) => {
  // get item by options
  const quiz = await QuizRepository.getById(id);

  // throw error if item not found
  if (!quiz) {
    throw new ErrorHandler('Quiz not found!', HttpCode.NOT_FOUND);
  }

  // return data
  return quiz;
};

const create = async (userId: string, item: Quiz) => {
  // set current authenticated userId to item
  const createdQuiz = await QuizRepository.create({ ...item, createdById: userId });

  // return data
  return createdQuiz;
};

const edit = async (id: string, item: Quiz, userId: string) => {
  // get item by options
  const quiz = (await QuizRepository.getById(id)) as Quiz | null;

  // throw error if item not found
  if (!quiz) {
    throw new ErrorHandler('Quiz not found!', HttpCode.NOT_FOUND);
  }

  // update item
  const updatedQuiz = await QuizRepository.edit(id, item);

  // return data
  return updatedQuiz;
};

const remove = async (id: string) => {
  // get item by options
  const quiz = await QuizRepository.getById(id);

  // throw error if item not found
  if (!quiz) {
    throw new ErrorHandler('Quiz not found!', HttpCode.NOT_FOUND);
  }

  // remove item
  await QuizRepository.remove(id);

  // return data
  return quiz;
};

export default {
  getAll,
  getById,
  create,
  edit,
  remove,
};

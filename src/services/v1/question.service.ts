import { QuizQuestion } from '../../../generated/prisma';
import { ErrorHandler } from '../../utils/errorHandler';
import { HttpCode } from '../../utils/httpCode';

import QuestionRepository from '../../database/repositories/question.repository';

const getAll = async (quizId: string, name: string, page: number, pageSize: number) => {
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
  } = await QuestionRepository.getAll({ quizId }, options, { search: name });

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
  const question = await QuestionRepository.getById(id);

  if (!question) {
    throw new ErrorHandler('Question not found!', HttpCode.NOT_FOUND);
  }

  return question;
};

const getByOrder = async (quizId: string, order: number) => {
  const question = await QuestionRepository.getByOrder(quizId, order);

  if (!question) {
    throw new ErrorHandler('Question not found!', HttpCode.NOT_FOUND);
  }

  return question;
};

const create = async (quizId: string, item: QuizQuestion) => {
  const createdQuestion = await QuestionRepository.create({ ...item, quizId });

  return createdQuestion;
};

const edit = async (id: string, item: QuizQuestion) => {
  const question = (await QuestionRepository.getById(id)) as QuizQuestion | null;

  if (!question) {
    throw new ErrorHandler('Question not found!', HttpCode.NOT_FOUND);
  }

  const updatedQuestion = await QuestionRepository.edit(id, item);

  return updatedQuestion;
};

const remove = async (id: string) => {
  const question = await QuestionRepository.getById(id);

  if (!question) {
    throw new ErrorHandler('Question not found!', HttpCode.NOT_FOUND);
  }

  await QuestionRepository.remove(id);

  return question;
};

export default {
  getAll,
  getById,
  getByOrder,
  create,
  edit,
  remove,
};

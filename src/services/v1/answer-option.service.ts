import { QuestionAnswerOption } from '../../../generated/prisma';
import { ErrorHandler } from '../../utils/errorHandler';
import { HttpCode } from '../../utils/httpCode';

import AnswerOptionRepository from '../../database/repositories/answer-option.repository';

const getAll = async (questionId: string, name: string, page: number, pageSize: number) => {
  const options = {
    page,
    limit: pageSize,
  };

  const { docs, totalDocs, limit, totalPages, hasNextPage, hasPrevPage } =
    await AnswerOptionRepository.getAll({ questionId }, options, { search: name });

  const meta = {
    totalDocs,
    page,
    limit,
    totalPages,
    hasNextPage,
    hasPrevPage,
  };

  return { docs, meta };
};

const getById = async (id: string) => {
  const answerOption = await AnswerOptionRepository.getById(id);

  if (!answerOption) {
    throw new ErrorHandler('Answer option not found!', HttpCode.NOT_FOUND);
  }

  return answerOption;
};

const create = async (questionId: string, item: QuestionAnswerOption) => {
  const createdAnswerOption = await AnswerOptionRepository.create({ ...item, questionId });

  return createdAnswerOption;
};

const edit = async (id: string, item: QuestionAnswerOption) => {
  const answerOption = (await AnswerOptionRepository.getById(id)) as QuestionAnswerOption | null;

  if (!answerOption) {
    throw new ErrorHandler('Answer option not found!', HttpCode.NOT_FOUND);
  }

  const updatedAnswerOption = await AnswerOptionRepository.edit(id, item);

  return updatedAnswerOption;
};

const remove = async (id: string) => {
  const answerOption = await AnswerOptionRepository.getById(id);

  if (!answerOption) {
    throw new ErrorHandler('Answer option not found!', HttpCode.NOT_FOUND);
  }

  await AnswerOptionRepository.remove(id);

  return answerOption;
};

export default {
  getAll,
  getById,
  create,
  edit,
  remove,
};

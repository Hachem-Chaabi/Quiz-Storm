import { QuizCategory } from '../../../generated/prisma';
import { ErrorHandler } from '../../utils/errorHandler';
import { HttpCode } from '../../utils/httpCode';

import CategoryRepository from '../../database/repositories/category.repository';

const getAll = async (name: string, page: number, pageSize: number) => {
  const options = {
    page,
    limit: pageSize,
  };

  const {
    docs,
    totalDocs,
    limit,
    totalPages,
    hasNextPage,
    hasPrevPage,
  } = await CategoryRepository.getAll(options, { search: name });

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
  const category = await CategoryRepository.getById(id);

  if (!category) {
    throw new ErrorHandler('Category not found!', HttpCode.NOT_FOUND);
  }

  return category;
};

const create = async (item: QuizCategory) => {
  const createdCategory = await CategoryRepository.create(item);

  return createdCategory;
};

const edit = async (id: string, item: QuizCategory) => {
  const category = (await CategoryRepository.getById(id)) as QuizCategory | null;

  if (!category) {
    throw new ErrorHandler('Category not found!', HttpCode.NOT_FOUND);
  }

  const updatedCategory = await CategoryRepository.edit(id, item);

  return updatedCategory;
};

const remove = async (id: string) => {
  const category = await CategoryRepository.getById(id);

  if (!category) {
    throw new ErrorHandler('Category not found!', HttpCode.NOT_FOUND);
  }

  await CategoryRepository.remove(id);

  return category;
};

export default {
  getAll,
  getById,
  create,
  edit,
  remove,
};

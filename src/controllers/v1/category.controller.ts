import { DEFAULT_CURRENT_PAGE, DEFAULT_PAGE_SIZE } from '../../constants/constants';
import { Response, Request, RequestHandler } from 'express';
import { HttpCode } from '../../utils/httpCode';

import AsyncHandler from 'express-async-handler';
import CategoryService from '../../services/v1/category.service';

// @desc    Get All
// @route   GET /api/categories
// @access  Private
const getAll: RequestHandler = AsyncHandler(async (req: Request, res: Response): Promise<void> => {
  const { name, page, pageSize } = req?.query;
  const result = await CategoryService.getAll(
    String(name || ''),
    Number(page || DEFAULT_CURRENT_PAGE),
    Number(pageSize || DEFAULT_PAGE_SIZE),
  );
  res.status(HttpCode.OK).json({ success: true, message: '', data: result });
});

// @desc    Get By Id
// @route   GET /api/categories/:id
// @access  Private
const getById: RequestHandler = AsyncHandler(async (req: Request, res: Response): Promise<void> => {
  const { id } = req?.params;
  const result = await CategoryService.getById(id);
  res.status(HttpCode.OK).json({ success: true, message: '', data: result });
});

// @desc    Create
// @route   POST /api/categories
// @access  Private
const create: RequestHandler = AsyncHandler(async (req: Request, res: Response): Promise<void> => {
  const result = await CategoryService.create(req?.body);
  res.status(HttpCode.CREATED).json({
    success: true,
    message: 'Category created successfully',
    data: result,
  });
});

// @desc    Update
// @route   PUT /api/categories/:id
// @access  Private
const edit: RequestHandler = AsyncHandler(async (req: Request, res: Response): Promise<void> => {
  const { id } = req?.params;
  const result = await CategoryService.edit(id, req?.body);
  res.status(HttpCode.OK).json({
    success: true,
    message: 'Category updated successfully',
    data: result,
  });
});

// @desc    Delete
// @route   DELETE /api/categories/:id
// @access  Private
const remove: RequestHandler = AsyncHandler(async (req: Request, res: Response): Promise<void> => {
  const { id } = req?.params;
  const result = await CategoryService.remove(id);
  res.status(HttpCode.OK).json({
    success: true,
    message: 'Category deleted successfully',
    data: result,
  });
});

export default {
  getAll,
  getById,
  create,
  edit,
  remove,
};

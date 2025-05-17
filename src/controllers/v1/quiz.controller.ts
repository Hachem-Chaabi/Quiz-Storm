import { DEFAULT_CURRENT_PAGE, DEFAULT_PAGE_SIZE } from '../../constants/constants';
import { Response, Request, RequestHandler } from 'express';
import { HttpCode } from '../../utils/httpCode';

import AsyncHandler from 'express-async-handler';
import QuizService from '../../services/v1/quiz.service';

// @desc    Get User All
// @route   GET /api/tasks
// @access  Private
const getUserAll: RequestHandler = AsyncHandler(async (req: Request, res: Response): Promise<void> => {
  const { name, page, pageSize } = req?.query;
  const result = await QuizService.getAll(
    String(name || ''),
    Number(page || DEFAULT_CURRENT_PAGE),
    Number(pageSize || DEFAULT_PAGE_SIZE),
    req?.user?.id,
  );
  res.status(HttpCode.OK).json({ success: true, message: '', data: result });
});

// @desc    Get All
// @route   GET /api/tasks
// @access  Private
const getAll: RequestHandler = AsyncHandler(async (req: Request, res: Response): Promise<void> => {
  const { name, page, pageSize } = req?.query;
  const result = await QuizService.getAll(
    String(name || ''),
    Number(page || DEFAULT_CURRENT_PAGE),
    Number(pageSize || DEFAULT_PAGE_SIZE),
  );
  res.status(HttpCode.OK).json({ success: true, message: '', data: result });
});

// @desc    Get By Id
// @route   GET /api/tasks/:id
// @access  Private
const getById: RequestHandler = AsyncHandler(async (req: Request, res: Response): Promise<void> => {
  const { id } = req?.params;
  const result = await QuizService.getById(req?.user?.id, id);
  res.status(HttpCode.OK).json({ success: true, message: '', data: result });
});

// @desc    Create
// @route   POST /api/tasks
// @access  Private
const create: RequestHandler = AsyncHandler(async (req: Request, res: Response): Promise<void> => {
  const result = await QuizService.create(req?.user?.id, req?.body);
  res.status(HttpCode.CREATED).json({
    success: true,
    message: 'Quiz created successfully',
    data: result,
  });
});

// @desc    Update
// @route   PUT /api/tasks/:id
// @access  Private
const edit: RequestHandler = AsyncHandler(async (req: Request, res: Response): Promise<void> => {
  const { id } = req?.params;
  const result = await QuizService.edit(id, req?.body, req?.user?.id);
  res.status(HttpCode.OK).json({
    success: true,
    message: 'Quiz updated successfully',
    data: result,
  });
});

// @desc    Delete
// @route   DELETE /api/tasks/:id
// @access  Private
const remove: RequestHandler = AsyncHandler(async (req: Request, res: Response): Promise<void> => {
  const { id } = req?.params;
  const result = await QuizService.remove(id);
  res.status(HttpCode.OK).json({
    success: true,
    message: 'Quiz deleted successfully',
    data: result,
  });
});

export default {
  getAll,
  getById,
  create,
  edit,
  remove,
  getUserAll
};

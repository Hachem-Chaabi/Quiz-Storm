import { DEFAULT_CURRENT_PAGE, DEFAULT_PAGE_SIZE } from '../../constants/constants';
import { Response, Request, RequestHandler } from 'express';
import { HttpCode } from '../../utils/httpCode';

import AsyncHandler from 'express-async-handler';
import SessionsService from '../../services/v1/session.service';

// @desc    Get All
// @route   GET /api/quizzes/:quizId/sessions
// @access  Private
const getAll: RequestHandler = AsyncHandler(async (req: Request, res: Response): Promise<void> => {
  const { name, page, pageSize } = req?.query;
  const result = await SessionsService.getAll(
    String(name || ''),
    Number(page || DEFAULT_CURRENT_PAGE),
    Number(pageSize || DEFAULT_PAGE_SIZE),
  );
  res.status(HttpCode.OK).json({ success: true, message: '', data: result });
});

// @desc    Get By Id
// @route   GET /api/sessions/:id
// @access  Private
const getById: RequestHandler = AsyncHandler(async (req: Request, res: Response): Promise<void> => {
  const { id } = req?.params;
  const result = await SessionsService.getById(id);
  res.status(HttpCode.OK).json({ success: true, message: '', data: result });
});

// @desc    Create
// @route   POST /api/quizzes/:quizId/sessions
// @access  Private
const create: RequestHandler = AsyncHandler(async (req: Request, res: Response): Promise<void> => {
  const { quizId } = req.params;
  const result = await SessionsService.create(quizId, req?.user?.id, req?.body);
  res.status(HttpCode.CREATED).json({
    success: true,
    message: 'Session created successfully',
    data: result,
  });
});

// @desc    Update
// @route   PUT /api/sessions/:id
// @access  Private
const edit: RequestHandler = AsyncHandler(async (req: Request, res: Response): Promise<void> => {
  const { id } = req?.params;
  const result = await SessionsService.edit(id, req?.body);
  res.status(HttpCode.OK).json({
    success: true,
    message: 'Session updated successfully',
    data: result,
  });
});

// @desc    Delete
// @route   DELETE /api/sessions/:id
// @access  Private
const remove: RequestHandler = AsyncHandler(async (req: Request, res: Response): Promise<void> => {
  const { id } = req?.params;
  const result = await SessionsService.remove(id);
  res.status(HttpCode.OK).json({
    success: true,
    message: 'Session deleted successfully',
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

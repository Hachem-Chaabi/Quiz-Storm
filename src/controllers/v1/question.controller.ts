import { DEFAULT_CURRENT_PAGE, DEFAULT_PAGE_SIZE } from '../../constants/constants';
import { Response, Request, RequestHandler } from 'express';
import { HttpCode } from '../../utils/httpCode';

import AsyncHandler from 'express-async-handler';
import QuestionService from '../../services/v1/question.service';

// @desc    Get All
// @route   GET /api/quizzes/:quizId/questions
// @access  Private
const getAll: RequestHandler = AsyncHandler(async (req: Request, res: Response): Promise<void> => {
  const { name, page, pageSize } = req?.query;
  const { quizId } = req?.params;
  const result = await QuestionService.getAll(
    quizId,
    String(name || ''),
    Number(page || DEFAULT_CURRENT_PAGE),
    Number(pageSize || DEFAULT_PAGE_SIZE),
  );
  res.status(HttpCode.OK).json({ success: true, message: '', data: result });
});

// @desc    Get By Id
// @route   GET /api/questions/:id
// @access  Private
const getById: RequestHandler = AsyncHandler(async (req: Request, res: Response): Promise<void> => {
  const { id } = req?.params;
  const result = await QuestionService.getById(id);
  res.status(HttpCode.OK).json({ success: true, message: '', data: result });
});

// @desc    Get By Id
// @route   GET /api/quizzes/:quizId/questions/:order
// @access  Private
const getByOrder: RequestHandler = AsyncHandler(async (req: Request, res: Response): Promise<void> => {
  const { quizId, order } = req?.params;
  const result = await QuestionService.getByOrder(quizId, Number(order));
  res.status(HttpCode.OK).json({ success: true, message: '', data: result });
});

// @desc    Create
// @route   POST /api/quizzes/:quizId/questions
// @access  Private
const create: RequestHandler = AsyncHandler(async (req: Request, res: Response): Promise<void> => {
  const { quizId } = req?.params;
  const result = await QuestionService.create(quizId, req?.body);
  res.status(HttpCode.CREATED).json({
    success: true,
    message: 'Question created successfully',
    data: result,
  });
});

// @desc    Update
// @route   PUT /api/questions/:id
// @access  Private
const edit: RequestHandler = AsyncHandler(async (req: Request, res: Response): Promise<void> => {
  const { id } = req?.params;
  const result = await QuestionService.edit(id, req?.body);
  res.status(HttpCode.OK).json({
    success: true,
    message: 'Question updated successfully',
    data: result,
  });
});

// @desc    Delete
// @route   DELETE /api/questions/:id
// @access  Private
const remove: RequestHandler = AsyncHandler(async (req: Request, res: Response): Promise<void> => {
  const { id } = req?.params;
  const result = await QuestionService.remove(id);
  res.status(HttpCode.OK).json({
    success: true,
    message: 'Question deleted successfully',
    data: result,
  });
});

export default {
  getAll,
  getById,
  getByOrder,
  create,
  edit,
  remove,
};

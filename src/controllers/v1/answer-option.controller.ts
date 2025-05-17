import { DEFAULT_CURRENT_PAGE, DEFAULT_PAGE_SIZE } from '../../constants/constants';
import { Response, Request, RequestHandler } from 'express';
import { HttpCode } from '../../utils/httpCode';

import AsyncHandler from 'express-async-handler';
import AnswerOptionService from '../../services/v1/answer-option.service';

// @desc    Get All
// @route   GET /api/questions/:questionId/options
// @access  Private
const getAll: RequestHandler = AsyncHandler(async (req: Request, res: Response): Promise<void> => {
  const { name, page, pageSize } = req?.query;
  const { questionId } = req?.params;
  const result = await AnswerOptionService.getAll(
    questionId,
    String(name || ''),
    Number(page || DEFAULT_CURRENT_PAGE),
    Number(pageSize || DEFAULT_PAGE_SIZE),
  );
  res.status(HttpCode.OK).json({ success: true, message: '', data: result });
});

// @desc    Get By Id
// @route   GET /api/options/:id
// @access  Private
const getById: RequestHandler = AsyncHandler(async (req: Request, res: Response): Promise<void> => {
  const { id } = req?.params;
  const result = await AnswerOptionService.getById(id);
  res.status(HttpCode.OK).json({ success: true, message: '', data: result });
});

// @desc    Create
// @route   POST /api/questions/:questionId/options
// @access  Private
const create: RequestHandler = AsyncHandler(async (req: Request, res: Response): Promise<void> => {
  const { questionId } = req?.params;
  const result = await AnswerOptionService.create(questionId, req?.body);
  res.status(HttpCode.CREATED).json({
    success: true,
    message: 'Answer option created successfully',
    data: result,
  });
});

// @desc    Update
// @route   PUT /api/options/:id
// @access  Private
const edit: RequestHandler = AsyncHandler(async (req: Request, res: Response): Promise<void> => {
  const { id } = req?.params;
  const result = await AnswerOptionService.edit(id, req?.body);
  res.status(HttpCode.OK).json({
    success: true,
    message: 'Answer option updated successfully',
    data: result,
  });
});

// @desc    Delete
// @route   DELETE /api/options/:id
// @access  Private
const remove: RequestHandler = AsyncHandler(async (req: Request, res: Response): Promise<void> => {
  const { id } = req?.params;
  const result = await AnswerOptionService.remove(id);
  res.status(HttpCode.OK).json({
    success: true,
    message: 'Answer option deleted successfully',
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

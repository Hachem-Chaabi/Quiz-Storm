import { DEFAULT_CURRENT_PAGE, DEFAULT_PAGE_SIZE } from '../../constants/constants';
import { Response, Request, RequestHandler } from 'express';
import { HttpCode } from '../../utils/httpCode';

import AsyncHandler from 'express-async-handler';
import ParticipantService from '../../services/v1/participant.service';

// @desc    Get All
// @route   GET /api/sessions/:sessionId/participants
// @access  Private
const getAll: RequestHandler = AsyncHandler(async (req: Request, res: Response): Promise<void> => {
  const { name, page, pageSize } = req?.query;
  const { sessionId } = req?.params;
  const result = await ParticipantService.getAll(
    String(name || ''),
    Number(page || DEFAULT_CURRENT_PAGE),
    Number(pageSize || DEFAULT_PAGE_SIZE),
    sessionId,
  );
  res.status(HttpCode.OK).json({ success: true, message: '', data: result });
});

// @desc    Get By Id
// @route   GET /api/participants/:id
// @access  Private
const getById: RequestHandler = AsyncHandler(async (req: Request, res: Response): Promise<void> => {
  const { id } = req?.params;
  const result = await ParticipantService.getById(id);
  res.status(HttpCode.OK).json({ success: true, message: '', data: result });
});

// @desc    Create
// @route   POST /api/sessions/join
// @access  Private
const create: RequestHandler = AsyncHandler(async (req: Request, res: Response): Promise<void> => {
  const { id } = req.session;
  const result = await ParticipantService.create(id, req?.user?.id);
  res.status(HttpCode.CREATED).json({
    success: true,
    message: 'Participant created successfully',
    data: result,
  });
});

// @desc    Update
// @route   PUT /api/participants/:id
// @access  Private
const edit: RequestHandler = AsyncHandler(async (req: Request, res: Response): Promise<void> => {
  const { id } = req?.params;
  const result = await ParticipantService.edit(id, req?.body);
  res.status(HttpCode.OK).json({
    success: true,
    message: 'Participant updated successfully',
    data: result,
  });
});

// @desc    Delete
// @route   DELETE /api/participants/:id
// @access  Private
const remove: RequestHandler = AsyncHandler(async (req: Request, res: Response): Promise<void> => {
  const { id } = req?.params;
  const result = await ParticipantService.remove(id);
  res.status(HttpCode.OK).json({
    success: true,
    message: 'Participant deleted successfully',
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

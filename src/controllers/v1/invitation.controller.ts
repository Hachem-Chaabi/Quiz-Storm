import { DEFAULT_CURRENT_PAGE, DEFAULT_PAGE_SIZE } from '../../constants/constants';
import { Response, Request, RequestHandler } from 'express';
import { HttpCode } from '../../utils/httpCode';

import AsyncHandler from 'express-async-handler';
import InvitationService from '../../services/v1/invitation.service';

// @desc    Get All
// @route   GET /api/sessions/:sessionId/invitations
// @access  Private
const getAll: RequestHandler = AsyncHandler(async (req: Request, res: Response): Promise<void> => {
  const { name, page, pageSize } = req?.query;
  const { sessionId } = req?.params;
  const result = await InvitationService.getAll(
    String(name || ''),
    Number(page || DEFAULT_CURRENT_PAGE),
    Number(pageSize || DEFAULT_PAGE_SIZE),
    sessionId,
  );
  res.status(HttpCode.OK).json({ success: true, message: '', data: result });
});

// @desc    Send Invitation
// @route   POST /api/sessions/:sessionId/invite
// @access  Private
const send: RequestHandler = AsyncHandler(async (req: Request, res: Response): Promise<void> => {
  const { sessionId } = req.params;
  const result = await InvitationService.send(sessionId, req?.body);
  res.status(HttpCode.CREATED).json({
    success: true,
    message: 'Invitation created successfully',
    data: result,
  });
});

// @desc    Accept Invitation
// @route   PUT /api/sessions/:sessionId/accept
// @access  Private
const accept: RequestHandler = AsyncHandler(async (req: Request, res: Response): Promise<void> => {
  const { sessionId } = req?.params;
  const { email } = req?.user;
  const result = await InvitationService.accept(sessionId, email);
  res.status(HttpCode.OK).json({
    success: true,
    message: 'Invitation updated successfully',
    data: result,
  });
});

// @desc    Get By Id
// @route   GET /api/invitations/:id
// @access  Private
const getById: RequestHandler = AsyncHandler(async (req: Request, res: Response): Promise<void> => {
  const { id } = req?.params;
  const result = await InvitationService.getById(id);
  res.status(HttpCode.OK).json({ success: true, message: '', data: result });
});

// @desc    Delete
// @route   DELETE /api/invitations/:id
// @access  Private
const remove: RequestHandler = AsyncHandler(async (req: Request, res: Response): Promise<void> => {
  const { id } = req?.params;
  const result = await InvitationService.remove(id);
  res.status(HttpCode.OK).json({
    success: true,
    message: 'Invitation deleted successfully',
    data: result,
  });
});

export default {
  getAll,
  send,
  accept,
  getById,
  remove,
};

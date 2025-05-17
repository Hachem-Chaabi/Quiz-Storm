import { DEFAULT_CURRENT_PAGE, DEFAULT_PAGE_SIZE } from '../../constants/constants';
import { Response, Request, RequestHandler } from 'express';
import { HttpCode } from '../../utils/httpCode';

import AsyncHandler from 'express-async-handler';
import LeaderboardService from '../../services/v1/leaderboard.service';

// @desc    Get All
// @route   GET /api/leaderboards/global
// @access  Private
const getAll: RequestHandler = AsyncHandler(async (req: Request, res: Response): Promise<void> => {
  const { page, pageSize } = req?.query;
  const result = await LeaderboardService.getAll(
    Number(page || DEFAULT_CURRENT_PAGE),
    Number(pageSize || DEFAULT_PAGE_SIZE),
  );
  res.status(HttpCode.OK).json({ success: true, message: '', data: result });
});

// @desc    Get All By Quiz Id
// @route   GET /api/leaderboards/:quizId
// @access  Private
const getAllByQuizId: RequestHandler = AsyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const { page, pageSize } = req?.query;
    const { quizId } = req.params;
    const result = await LeaderboardService.getAllByQuizId(
      Number(page || DEFAULT_CURRENT_PAGE),
      Number(pageSize || DEFAULT_PAGE_SIZE),
      quizId,
    );
    res.status(HttpCode.OK).json({ success: true, message: '', data: result });
  },
);

// @desc    Create
// @route   POST /api/leaderboards/global
// @access  Private
const create: RequestHandler = AsyncHandler(async (req: Request, res: Response): Promise<void> => {
  const result = await LeaderboardService.create(req.body);
  res.status(HttpCode.CREATED).json({
    success: true,
    message: 'Players created successfully',
    data: result,
  });
});

export default {
  getAll,
  getAllByQuizId,
  create,
};

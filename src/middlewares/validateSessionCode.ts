import { Request, Response, NextFunction } from 'express';
import { prisma } from '../database/config';
import { SessionStatus } from '../../generated/prisma';
import { HttpCode } from '../utils/httpCode';
import { ErrorHandler } from '../utils/errorHandler';

export const validateSessionCode = async (req: Request, res: Response, next: NextFunction) => {
  const { code } = req.body;
  const userId = req.user?.id;

  if (!code || typeof code !== 'string') {
    return next(new ErrorHandler('Session code is required.', HttpCode.BAD_REQUEST));
  }

  if (!userId) {
    return next(new ErrorHandler('Unauthorized', HttpCode.UNAUTHORIZED));
  }

  // Find session
  const session = await prisma.quizSession.findUnique({
    where: { code },
    include: {
      participants: {
        where: { userId },
        select: { id: true },
      },
    },
  });

  if (!session) {
    return next(new ErrorHandler('Invalid session code.', HttpCode.NOT_FOUND));
  }

  // Check session is in WAITING status
  if (session.status !== SessionStatus.WAITING) {
    return next(
      new ErrorHandler(
        'Cannot join a session that has already started or finished.',
        HttpCode.FORBIDDEN,
      ),
    );
  }

  // Check if user is already a participant
  if (session.participants.length > 0) {
    return next(
      new ErrorHandler('You are already a participant in this session.', HttpCode.CONFLICT),
    );
  }

  // Attach session to request for use in controller
  req.session = session;

  next();
};

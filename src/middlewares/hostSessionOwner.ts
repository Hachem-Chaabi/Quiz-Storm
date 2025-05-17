import { Request, Response, NextFunction } from 'express';
import { prisma } from '../database/config';
import { HttpCode } from '../utils/httpCode';
import { ErrorHandler } from '../utils/errorHandler';
import { RolesEnum } from '../constants/constants';

const hostSessionOwner = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = req.user?.id;
    const userRole = req.user?.role;

    if (userRole === RolesEnum.host) {
      if (!userId) {
        return next(new ErrorHandler('User ID is missing.', HttpCode.BAD_REQUEST));
      }

      const session = await prisma.quizSession.findFirst({
        where: { hostId: userId },
      });

      if (!session) {
        return next(new ErrorHandler('Session not found.', HttpCode.NOT_FOUND));
      }

      if (session.hostId !== userId) {
        return next(new ErrorHandler('Access denied. Not your session.', HttpCode.FORBIDDEN));
      }

      next();
    } else {
      next();
    }
  } catch (error) {
    console.error('hostSessionOwner error:', error);
    return next(new ErrorHandler('Internal server error.', HttpCode.INTERNAL_SERVER_ERROR));
  }
};

export default hostSessionOwner;

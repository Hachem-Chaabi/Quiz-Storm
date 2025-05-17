import { Request, Response, NextFunction } from 'express';
import { prisma } from '../database/config';
import { HttpCode } from '../utils/httpCode';
import { ErrorHandler } from '../utils/errorHandler';
import { RolesEnum } from '../constants/constants';

const hostQuizOwner = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const quizId = req.params?.id;
    const userId = req.user?.id;
    const userRole = req.user?.role;

    if (userRole === RolesEnum.host) {
      if (!quizId || !userId) {
        return next(new ErrorHandler('Quiz ID or User ID is missing.', HttpCode.BAD_REQUEST));
      }

      const quiz = await prisma.quiz.findUnique({
        where: { id: quizId },
        select: { createdById: true },
      });

      if (!quiz) {
        return next(new ErrorHandler('Quiz not found.', HttpCode.NOT_FOUND));
      }

      if (quiz.createdById !== userId) {
        return next(new ErrorHandler('Access denied. Not your quiz.', HttpCode.FORBIDDEN));
      }

      next();
    } else {
      next();
    }
  } catch (error) {
    console.error('isQuizOwner error:', error);
    return next(new ErrorHandler('Internal server error.', HttpCode.INTERNAL_SERVER_ERROR));
  }
};

export default hostQuizOwner;

import { QuestionResponse, QuizQuestion, SessionParticipant } from '../../../generated/prisma';
import { ErrorHandler } from '../../utils/errorHandler';
import { HttpCode } from '../../utils/httpCode';
import { prisma } from '../../database/config';

import QuestionResponseRepository from '../../database/repositories/question-response.repository';
import QuestionService from './question.service';

const getAll = async (
  name: string,
  page: number,
  pageSize: number,
  participantId: string,
  questionId: string,
) => {
  const options = {
    page,
    limit: pageSize,
  };

  const {
    docs,
    totalDocs,
    limit,
    page: currentPage,
    totalPages,
    hasNextPage,
    hasPrevPage,
  } = await QuestionResponseRepository.getAll({ participantId, questionId }, options, { search: name });

  const meta = {
    totalDocs,
    page: currentPage,
    limit,
    totalPages,
    hasNextPage,
    hasPrevPage,
  };

  return { docs, meta };
};

const create = async (
  userId: string,
  item: { selectedId: string; questionId: string; sessionId: string },
) => {
  const { selectedId, questionId, sessionId } = item;

  if (!selectedId) {
    return new ErrorHandler('Selected answer ID is missing.', HttpCode.BAD_REQUEST);
  }

  const answerOption = await prisma.questionAnswerOption.findFirst({
    where: { id: selectedId },
    select: { isCorrect: true },
  });

  if (!answerOption) {
    return new ErrorHandler('Answer option not found.', HttpCode.NOT_FOUND);
  }

  const isCorrect = answerOption.isCorrect;
  let scoreIncrement = 0;

  if (isCorrect) {
    const question = (await QuestionService.getById(questionId)) as QuizQuestion;
    scoreIncrement = question.questionScore;
  }

  const participant = await prisma.sessionParticipant.update({
    where: {
      userId_sessionId: {
        userId,
        sessionId,
      },
    },
    data: scoreIncrement ? { score: { increment: scoreIncrement } } : {},
  });

  const createdQuestionResponse = await QuestionResponseRepository.create({
    selectedId,
    questionId,
    participantId: participant.id,
    isCorrect,
  } as QuestionResponse);

  return createdQuestionResponse;
};

export default {
  getAll,
  create,
};

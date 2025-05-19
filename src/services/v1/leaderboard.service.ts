import { QuizLeaderboard } from '../../../generated/prisma';

import LeaderboardRepository from '../../database/repositories/leaderboard.repository';

const getAll = async (page: number, pageSize: number) => {
  const options = {
    page,
    limit: pageSize,
  };

  const {
    docs,
    totalDocs,
    limit,
    totalPages,
    hasNextPage,
    hasPrevPage,
  } = await LeaderboardRepository.getAll(options, { sort: 'score', order: 'desc' });

  const meta = {
    totalDocs,
    page,
    limit,
    totalPages,
    hasNextPage,
    hasPrevPage,
  };

  return { docs, meta };
};

const getAllByQuizId = async (page: number, pageSize: number, quizId: string) => {
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
  } = await LeaderboardRepository.getAllByQuizId({ quizId }, options, {
    sort: 'score',
    order: 'desc',
  });

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

const create = async (items: Omit<QuizLeaderboard, 'id'>[]) => {
  const createdLeaderboard = await LeaderboardRepository.create(items);

  return createdLeaderboard;
};

export default {
  getAll,
  getAllByQuizId,
  create,
};

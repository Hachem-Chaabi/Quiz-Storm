import { SessionParticipant } from '../../../generated/prisma';
import { ErrorHandler } from '../../utils/errorHandler';
import { HttpCode } from '../../utils/httpCode';

import ParticipantRepository from '../../database/repositories/participant.repository';

const getAll = async (name: string, page: number, pageSize: number, sessionId: string) => {
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
  } = await ParticipantRepository.getAll({ sessionId }, options, { search: name });

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

const getById = async (id: string) => {
  const participant = await ParticipantRepository.getById(id);

  if (!participant) {
    throw new ErrorHandler('Participant not found!', HttpCode.NOT_FOUND);
  }

  return participant;
};

const create = async (sessionId: string, userId: string) => {
  const createdParticipant = await ParticipantRepository.create({ sessionId, userId });

  return createdParticipant;
};

const edit = async (id: string, item: SessionParticipant) => {
  const participant = (await ParticipantRepository.getById(id)) as SessionParticipant | null;

  if (!participant) {
    throw new ErrorHandler('Participant not found!', HttpCode.NOT_FOUND);
  }

  const updatedParticipant = await ParticipantRepository.edit(id, item);

  return updatedParticipant;
};

const remove = async (id: string) => {
  const participant = await ParticipantRepository.getById(id);

  if (!participant) {
    throw new ErrorHandler('Participant not found!', HttpCode.NOT_FOUND);
  }

  await ParticipantRepository.remove(id);

  return participant;
};

export default {
  getAll,
  getById,
  create,
  edit,
  remove,
};

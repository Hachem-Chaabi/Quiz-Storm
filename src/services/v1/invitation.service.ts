import { SessionInvitation } from '../../../generated/prisma';
import { ErrorHandler } from '../../utils/errorHandler';
import { prisma } from '../../database/config';
import { HttpCode } from '../../utils/httpCode';

import InvitationRepository from '../../database/repositories/invitation.repository';

const getAll = async (name: string, page: number, pageSize: number, sessionId: string) => {
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
  } = await InvitationRepository.getAll({ sessionId }, options, { search: name });

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

const getById = async (id: string) => {
  const invitation = await InvitationRepository.getById(id);

  if (!invitation) {
    throw new ErrorHandler('Invitation not found!', HttpCode.NOT_FOUND);
  }

  return invitation;
};

const send = async (sessionId: string, item: SessionInvitation) => {
  const invitedPlayer = await prisma.user.findFirst({
    where: {
      email: item.email,
    },
  });

  if (!invitedPlayer) {
    throw new ErrorHandler('Invited player not found!', HttpCode.NOT_FOUND);
  }

  const createdInvitation = await InvitationRepository.send({
    ...item,
    sessionId,
    userId: invitedPlayer?.id,
  });

  return createdInvitation;
};

const accept = async (sessionId: string, email: string) => {
  console.log(sessionId, email);

  const invitation = (await InvitationRepository.getOneByQuery({
    sessionId,
    email,
  })) as SessionInvitation | null;

  if (!invitation) {
    throw new ErrorHandler('Invitation not found!', HttpCode.NOT_FOUND);
  }

  const updatedInvitation = await InvitationRepository.accept(sessionId, email);

  return updatedInvitation;
};

const remove = async (id: string) => {
  const invitation = await InvitationRepository.getById(id);

  if (!invitation) {
    throw new ErrorHandler('Invitation not found!', HttpCode.NOT_FOUND);
  }

  await InvitationRepository.remove(id);

  return invitation;
};

export default {
  getAll,
  send,
  accept,
  getById,
  remove,
};

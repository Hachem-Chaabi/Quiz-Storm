import { prisma } from '../config';
import { DAY_IN_MILLISECOND } from '../../constants/constants';

const createSession = async (userId: string) => {
  const session = await prisma.authSession.create({
    data: {
      userId,
      expiresAt: new Date(
        Date.now() + Number(process.env.COOKIE_EXPIRES_TIME) * DAY_IN_MILLISECOND,
      ),
    },
  });

  return session;
};

const getSession = async (id: string) => {
  const session = await prisma.authSession.findFirst({
    where: { id, expiresAt: { gt: new Date() } },
  });

  return session;
};

const deleteSession = async (options: object) => {
  await prisma.authSession.deleteMany({ where: options });
};

export default {
  createSession,
  getSession,
  deleteSession
};

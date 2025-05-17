import { ErrorHandler } from '../../utils/errorHandler';
import { HttpCode } from '../../utils/httpCode';
import { TokenEnum } from '../../constants/constants';
import { User } from '../../../generated/prisma';

import JwtHelper from '../../utils/jwtHelper';
import userRepository from '../../database/repositories/user.repository';
import authSessionRepository from '../../database/repositories/authSession.repository';

const login = async (email: string, password: string) => {
  const user = await userRepository.getOneByQuery({ email });

  if (!user) {
    throw new ErrorHandler('No user found', HttpCode.NOT_FOUND);
  }

  const matched = await JwtHelper.PasswordCompare(password, user.password);

  if (!matched) {
    throw new ErrorHandler('Invalid credentials', HttpCode.BAD_REQUEST);
  }

  await authSessionRepository.deleteSession({ userId: user?.id });

  const session = await authSessionRepository.createSession(user.id);

  const payload: TokenData = {
    userId: user.id,
    sessionId: session?.id,
  };

  const refreshToken = JwtHelper.GenerateToken(payload, TokenEnum.refresh);

  const accessToken = JwtHelper.GenerateToken(payload, TokenEnum.access);

  user.password = undefined;

  return {
    user,
    token: accessToken,
    refreshToken: refreshToken,
  };
};

const register = async (username: string, email: string, password: string) => {
  const exists = await userRepository.getOneByQuery({ email });

  if (exists) {
    throw new ErrorHandler('User already exists!', HttpCode.FORBIDDEN);
  }

  // Hash the password
  const hashedPassword = await JwtHelper.PasswordHashing(password);

  // Create the user
  const user = await userRepository.create({
    username,
    email,
    password: hashedPassword
  } as User);

  const session = await authSessionRepository.createSession(user.id);

  const payload: TokenData = {
    userId: user.id,
    sessionId: session.id,
  };

  const refreshToken = JwtHelper.GenerateToken(payload, TokenEnum.refresh);

  const accessToken = JwtHelper.GenerateToken(payload, TokenEnum.access);

  user.password = undefined;

  return {
    user,
    token: accessToken,
    refreshToken,
  };
};

const refreshToken = async (refreshToken: string) => {
  const decoded = JwtHelper.ExtractToken(refreshToken, TokenEnum.refresh);

  if (!decoded) {
    throw new ErrorHandler('Invalid Token!', HttpCode.UNAUTHORIZED);
  }

  const session = await authSessionRepository.getSession(decoded.sessionId);

  if (!session) {
    throw new ErrorHandler('Invalid session!', HttpCode.UNAUTHORIZED);
  }

  await authSessionRepository.deleteSession({ userId: decoded?.userId });

  const newSession = await authSessionRepository.createSession(decoded.userId);

  const payload: TokenData = { userId: decoded?.userId, sessionId: newSession?.id };

  const newRefreshToken = JwtHelper.GenerateToken(payload, TokenEnum.refresh);

  const token = JwtHelper.GenerateToken(payload, TokenEnum.access);

  return { token, refreshToken: newRefreshToken };
};

const deleteSession = async (userId: string) => {
  await authSessionRepository.deleteSession({ userId });
};

const getUserProfile = async (id: string) => {
  const user = await userRepository.getById(id);

  if (!user) {
    throw new ErrorHandler('User not found!', HttpCode.NOT_FOUND);
  }

  return user;
};

const updateProfile = async (id: string, username: string, email: string) => {
  const user = await userRepository.getById(id);

  if (!user) {
    throw new ErrorHandler('User not found!', HttpCode.NOT_FOUND);
  }

  if (username) user.username = username;
  if (email) user.email = email;

  const updatedUser = await userRepository.edit(id, { username, email });

  user.password = undefined;

  return updatedUser;
};

const getAllUsers = async () => {
  const users = await userRepository.getAll();

  return users;
};

const getUserById = async (id: string) => {
  const user = await userRepository.getById(id);

  if (!user) {
    throw new ErrorHandler('User not found!', HttpCode.NOT_FOUND);
  }

  return user;
};

const updateUser = async (id: string, item: User) => {
  const user = await userRepository.getById(id);

  if (!user) {
    throw new ErrorHandler('User not found!', HttpCode.NOT_FOUND);
  }

  const updatedUser = await userRepository.edit(id, item);

  return updatedUser;
};

const deleteUser = async (id: string) => {
  const user = await userRepository.getById(id);

  if (!user) {
    throw new ErrorHandler('User not found!', HttpCode.NOT_FOUND);
  }

  await userRepository.remove(id);

  return user;
};

export default {
  login,
  register,
  refreshToken,
  getUserProfile,
  updateProfile,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  deleteSession,
};

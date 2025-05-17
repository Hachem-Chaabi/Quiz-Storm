import { z } from 'zod';

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(20),
});

const registerSchema = z.object({
  username: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(8).max(20),
});

const updateProfile = z.object({
  username: z.string().min(3),
  email: z.string().email(),
});

export default {
  loginSchema,
  registerSchema,
  updateProfile,
};

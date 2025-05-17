import { z } from 'zod';

export const quizSessionSchema = z.object({
  startedAt: z.string(),
});

export default { quizSessionSchema };

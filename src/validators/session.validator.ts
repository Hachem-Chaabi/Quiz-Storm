import { z } from 'zod';
import { QuizSession } from '../../generated/prisma';

export const quizSessionSchema: z.ZodType<Partial<QuizSession>> = z.object({
  startedAt: z.date(),
});

export default { quizSessionSchema };

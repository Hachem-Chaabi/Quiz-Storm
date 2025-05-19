import { z } from 'zod';
import { QuizQuestion } from '../../generated/prisma';

export const questionSchema: z.ZodType<Partial<QuizQuestion>> = z.object({
  text: z.string().min(3),
  type: z.enum(['MULTIPLE_CHOICE', 'TRUE_FALSE']),
  questionScore: z.number(),
  timeLimit: z.number(),
  order: z.number(),
});

export const getQuestionByOrderSchema: z.ZodType<Partial<QuizQuestion>> = z.object({
  order: z.number(),
});

export default { questionSchema, getQuestionByOrderSchema };

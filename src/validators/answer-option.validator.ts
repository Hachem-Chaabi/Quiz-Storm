import { z } from 'zod';
import { QuestionAnswerOption } from '../../generated/prisma';

export const answerOptionSchema: z.ZodType<Partial<QuestionAnswerOption>> = z.object({
  text: z.string().min(3),
  isCorrect: z.boolean(),
});

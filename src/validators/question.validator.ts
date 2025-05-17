import { z } from 'zod';

export const questionSchema = z.object({
  text: z.string().min(3),
  type: z.enum(['MULTIPLE_CHOICE', 'TRUE_FALSE']),
  questionScore: z.number(),
  timeLimit: z.number(),
  order: z.number(),
});

export const getQuestionByOrderSchema = z.object({
  order: z.number(),
});

export default { questionSchema, getQuestionByOrderSchema };

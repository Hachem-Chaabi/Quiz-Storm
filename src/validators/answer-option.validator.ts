import { z } from 'zod';

export const answerOptionSchema = z.object({
  text: z.string().min(3),
  isCorrect: z.boolean(),
});

export default { answerOptionSchema };

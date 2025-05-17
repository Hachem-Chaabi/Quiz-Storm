import { z } from 'zod';

export const quizSchema = z.object({
  title: z.string().min(3),
  description: z.string().optional(),
  categoryId: z.string().uuid(),
  type: z.enum(['PUBLIC', 'PRIVATE']),
});

export default { quizSchema };

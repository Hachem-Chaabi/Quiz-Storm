import { z } from 'zod';
import { Quiz } from '../../generated/prisma';

export const quizSchema: z.ZodType<Partial<Quiz>> = z.object({
  title: z.string().min(3),
  description: z.string().optional(),
  categoryId: z.string().uuid(),
  type: z.enum(['PUBLIC', 'PRIVATE']),
});

export default { quizSchema };

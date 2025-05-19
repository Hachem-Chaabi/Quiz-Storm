import { z } from 'zod';
import { QuizCategory } from '../../generated/prisma';

export const categorySchema: z.ZodType<Partial<QuizCategory>> = z.object({
  name: z.string().min(3),
});

export default { categorySchema };

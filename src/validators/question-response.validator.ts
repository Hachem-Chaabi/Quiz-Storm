import { z } from 'zod';
import { QuestionResponse } from '../../generated/prisma';

export const submitSchema: z.ZodType<Partial<QuestionResponse>> = z.object({
  questionId: z.string().uuid(),
  selectedId: z.string().uuid(),
});

export default { submitSchema };

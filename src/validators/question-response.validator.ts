import { z } from 'zod';

export const submitSchema = z.object({
  questionId: z.string().uuid(),
  selectedId: z.string().uuid(),
});

export default { submitSchema };

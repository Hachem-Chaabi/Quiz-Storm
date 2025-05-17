import { z } from 'zod';

export const joinSchema = z.object({
  code: z.string().length(6),
});

export default { joinSchema };

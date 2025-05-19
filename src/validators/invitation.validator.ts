import { z } from 'zod';
import { SessionInvitation } from '../../generated/prisma';

export const invitationSchema: z.ZodType<Partial<SessionInvitation>> = z.object({
  email: z.string().email(),
});

export default { invitationSchema };

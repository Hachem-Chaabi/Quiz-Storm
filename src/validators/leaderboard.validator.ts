import { z } from 'zod';

export const leaderboardSchema = z.array(
  z.object({
    userId: z.string().uuid(),
    quizId: z.string().uuid(),
    score: z.number().int().min(0),
    accuracy: z.number().int().min(0),
    attempts: z.number().int().min(0),
  })
);

export default { leaderboardSchema };

import express from 'express';
import userRoutes from './v1/user.route';
import quizRoutes from './v1/quiz.route';
import quizQuestionsRoutes from './v1/question.route';
import answerOptionsRoutes from './v1/answer-option.route';
import sessionsRoutes from './v1/session.route';
import participantsRoutes from './v1/participant.route';
import QuestionResponsesRoutes from './v1/question-response.route';
import LeaderboardRoutes from './v1/leaderboard.route';
import CategoryRoutes from './v1/category.route';
import InvitationRoutes from './v1/invitation.route';

const router = express.Router();

router.use(
  '/',
  userRoutes,
  quizRoutes,
  quizQuestionsRoutes,
  answerOptionsRoutes,
  sessionsRoutes,
  participantsRoutes,
  QuestionResponsesRoutes,
  LeaderboardRoutes,
  CategoryRoutes,
  InvitationRoutes
);

export default router;

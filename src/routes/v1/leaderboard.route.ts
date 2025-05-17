import express from 'express';
const router = express.Router();

import { RolesEnum } from '../../constants/constants';

import validator from '../../validators';
import Authorization from '../../middlewares/auth';
import AuthorizeRole from '../../middlewares/authorizeRole';
import LeaderboardValidator from '../../validators/leaderboard.validator';
import LeaderboardController from '../../controllers/v1/leaderboard.controller';

// get global leaderboard
router
  .route('/leaderboards/global')
  .get(
    Authorization.Authenticated,
    AuthorizeRole.AuthorizeRole([RolesEnum.admin, RolesEnum.player, RolesEnum.host]),
    LeaderboardController.getAll,
  )
  .post(
    Authorization.Authenticated,
    AuthorizeRole.AuthorizeRole([RolesEnum.admin, RolesEnum.host]),
    validator(LeaderboardValidator.leaderboardSchema),
    LeaderboardController.create,
  );

router
  .route('/leaderboards/:quizId')
  .get(
    Authorization.Authenticated,
    AuthorizeRole.AuthorizeRole([RolesEnum.admin, RolesEnum.player, RolesEnum.host]),
    LeaderboardController.getAllByQuizId,
  );

export default router;

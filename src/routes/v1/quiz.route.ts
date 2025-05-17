import express from 'express';
const router = express.Router();

import { RolesEnum } from '../../constants/constants';

import validator from '../../validators';
import Authorization from '../../middlewares/auth';
import AuthorizeRole from '../../middlewares/authorizeRole';
import QuizController from '../../controllers/v1/quiz.controller';
import hostQuizOwner from '../../middlewares/hostQuizOwner';
import QuizValidator from '../../validators/quiz.validator';

// get quizzes by user id
router
  .route('/user-quizzes')
  .get(
    Authorization.Authenticated,
    AuthorizeRole.AuthorizeRole([RolesEnum.admin, RolesEnum.host]),
    QuizController.getUserAll,
  );

// get all quizzes
router
  .route('/quizzes')
  .get(
    Authorization.Authenticated,
    AuthorizeRole.AuthorizeRole([RolesEnum.admin, RolesEnum.player, RolesEnum.host]),
    QuizController.getAll,
  )
  .post(
    Authorization.Authenticated,
    AuthorizeRole.AuthorizeRole([RolesEnum.admin, RolesEnum.host]),
    validator(QuizValidator.quizSchema),
    QuizController.create,
  );

router
  .route('/quizzes/:id')
  .get(
    Authorization.Authenticated,
    AuthorizeRole.AuthorizeRole([RolesEnum.admin, RolesEnum.player, RolesEnum.host]),
    QuizController.getById,
  )
  .put(
    Authorization.Authenticated,
    AuthorizeRole.AuthorizeRole([RolesEnum.admin, RolesEnum.host]),
    hostQuizOwner,
    QuizController.edit,
  )
  .delete(
    Authorization.Authenticated,
    AuthorizeRole.AuthorizeRole([RolesEnum.admin, RolesEnum.host]),
    hostQuizOwner,
    QuizController.remove,
  );

export default router;

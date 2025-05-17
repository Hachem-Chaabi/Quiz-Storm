import express from 'express';
const router = express.Router();

import { RolesEnum } from '../../constants/constants';

import validator from '../../validators';
import Authorization from '../../middlewares/auth';
import AuthorizeRole from '../../middlewares/authorizeRole';
import QuestionController from '../../controllers/v1/question.controller';
import QuestionValidator from '../../validators/question.validator';

router
  .route('/quizzes/:quizId/questions')
  .get(
    Authorization.Authenticated,
    AuthorizeRole.AuthorizeRole([RolesEnum.admin, RolesEnum.host]),
    QuestionController.getAll,
  )
  .post(
    Authorization.Authenticated,
    AuthorizeRole.AuthorizeRole([RolesEnum.admin, RolesEnum.host]),
    validator(QuestionValidator.questionSchema),
    QuestionController.create,
  );

// get question by quiz id and order
router
  .route('/quizzes/:quizId/questions/:order')
  .get(
    Authorization.Authenticated,
    AuthorizeRole.AuthorizeRole([RolesEnum.admin, RolesEnum.player, RolesEnum.host]),
    QuestionController.getByOrder,
  );

router
  .route('/questions/:id')
  .get(
    Authorization.Authenticated,
    AuthorizeRole.AuthorizeRole([RolesEnum.admin, RolesEnum.player, RolesEnum.host]),
    QuestionController.getById,
  )
  .put(
    Authorization.Authenticated,
    AuthorizeRole.AuthorizeRole([RolesEnum.admin, RolesEnum.host]),
    QuestionController.edit,
  )
  .delete(
    Authorization.Authenticated,
    AuthorizeRole.AuthorizeRole([RolesEnum.admin, RolesEnum.host]),
    QuestionController.remove,
  );

export default router;

import express from 'express';
const router = express.Router();

import { RolesEnum } from '../../constants/constants';

import validator from '../../validators';
import Authorization from '../../middlewares/auth';
import AuthorizeRole from '../../middlewares/authorizeRole';
import AnswerOptionController from '../../controllers/v1/answer-option.controller';
import AnswerOptionValidator from '../../validators/answer-option.validator';

router
  .route('/questions/:questionId/options')
  .get(
    Authorization.Authenticated,
    AuthorizeRole.AuthorizeRole([RolesEnum.admin, RolesEnum.player, RolesEnum.host]),
    AnswerOptionController.getAll,
  )
  .post(
    Authorization.Authenticated,
    AuthorizeRole.AuthorizeRole([RolesEnum.admin, RolesEnum.host]),
    validator(AnswerOptionValidator.answerOptionSchema),
    AnswerOptionController.create,
  );

router
  .route('/options/:id')
  .get(
    Authorization.Authenticated,
    AuthorizeRole.AuthorizeRole([RolesEnum.admin, RolesEnum.player, RolesEnum.host]),
    AnswerOptionController.getById,
  )
  .put(
    Authorization.Authenticated,
    AuthorizeRole.AuthorizeRole([RolesEnum.admin, RolesEnum.host]),
    AnswerOptionController.edit,
  )
  .delete(
    Authorization.Authenticated,
    AuthorizeRole.AuthorizeRole([RolesEnum.admin, RolesEnum.host]),
    AnswerOptionController.remove,
  );

export default router;

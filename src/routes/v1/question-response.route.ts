import express from 'express';
const router = express.Router();

import { RolesEnum } from '../../constants/constants';

import validator from '../../validators';
import Authorization from '../../middlewares/auth';
import AuthorizeRole from '../../middlewares/authorizeRole';
import QuestionResponseController from '../../controllers/v1/question-response.controller';
import QuestionResponseValidator from '../../validators/question-response.validator';

// get all responses by question id and participant id
router
  .route('/questions-responses/:participantId/:questionId')
  .get(
    Authorization.Authenticated,
    AuthorizeRole.AuthorizeRole([RolesEnum.admin, RolesEnum.host]),
    QuestionResponseController.getAll,
  );

// player submit a response
router
  .route('/question-response/submit')
  .post(
    Authorization.Authenticated,
    AuthorizeRole.AuthorizeRole([RolesEnum.player]),
    validator(QuestionResponseValidator.submitSchema),
    QuestionResponseController.create,
  );

export default router;

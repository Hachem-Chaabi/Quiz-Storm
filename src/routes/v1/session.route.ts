import express from 'express';
const router = express.Router();

import { RolesEnum } from '../../constants/constants';

import validator from '../../validators';
import Authorization from '../../middlewares/auth';
import AuthorizeRole from '../../middlewares/authorizeRole';
import SessionController from '../../controllers/v1/session.controller';
import SessionValidator from '../../validators/session.validator';
import hostSessionOwner from '../../middlewares/hostSessionOwner';

router
  .route('/quizzes/:quizId/sessions')
  .get(
    Authorization.Authenticated,
    AuthorizeRole.AuthorizeRole([RolesEnum.admin, RolesEnum.player, RolesEnum.host]),
    SessionController.getAll,
  )
  .post(
    Authorization.Authenticated,
    AuthorizeRole.AuthorizeRole([RolesEnum.admin, RolesEnum.host]),
    validator(SessionValidator.quizSessionSchema),
    SessionController.create,
  );

router
  .route('/sessions/:id')
  .get(
    Authorization.Authenticated,
    AuthorizeRole.AuthorizeRole([RolesEnum.admin, RolesEnum.player, RolesEnum.host]),
    SessionController.getById,
  )
  .put(
    Authorization.Authenticated,
    AuthorizeRole.AuthorizeRole([RolesEnum.admin, RolesEnum.host]),
    hostSessionOwner,
    SessionController.edit,
  )
  .delete(
    Authorization.Authenticated,
    AuthorizeRole.AuthorizeRole([RolesEnum.admin, RolesEnum.host]),
    hostSessionOwner,
    SessionController.remove,
  );

export default router;

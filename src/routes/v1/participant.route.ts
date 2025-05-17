import express from 'express';
const router = express.Router();

import { RolesEnum } from '../../constants/constants';

import validator from '../../validators';
import Authorization from '../../middlewares/auth';
import AuthorizeRole from '../../middlewares/authorizeRole';
import ParticipantController from '../../controllers/v1/participant.controller';
import ParticipantValidator from '../../validators/participant.validator';
import { validateSessionCode } from '../../middlewares/validateSessionCode';

// get participants by session id
router
  .route('/sessions/:sessionId/participants')
  .get(
    Authorization.Authenticated,
    AuthorizeRole.AuthorizeRole([RolesEnum.admin, RolesEnum.host]),
    ParticipantController.getAll,
  );

// player join a session
router
  .route('/sessions/join')
  .post(
    Authorization.Authenticated,
    AuthorizeRole.AuthorizeRole([RolesEnum.player]),
    validator(ParticipantValidator.joinSchema),
    validateSessionCode,
    ParticipantController.create,
  );

// get and delete participants
router
  .route('/participants/:id')
  .get(
    Authorization.Authenticated,
    AuthorizeRole.AuthorizeRole([RolesEnum.admin, RolesEnum.host]),
    ParticipantController.getById,
  )
  .delete(
    Authorization.Authenticated,
    AuthorizeRole.AuthorizeRole([RolesEnum.admin, RolesEnum.host]),
    ParticipantController.remove,
  );

export default router;

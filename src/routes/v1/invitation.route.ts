import express from 'express';
const router = express.Router();

import { RolesEnum } from '../../constants/constants';

import validator from '../../validators';
import Authorization from '../../middlewares/auth';
import AuthorizeRole from '../../middlewares/authorizeRole';
import InvitationController from '../../controllers/v1/invitation.controller';
import InvitationValidator from '../../validators/invitation.validator';
import hostSessionOwner from '../../middlewares/hostSessionOwner';

// get all invitations by session id
router
  .route('/sessions/:sessionId/invitations')
  .get(
    Authorization.Authenticated,
    AuthorizeRole.AuthorizeRole([RolesEnum.admin, RolesEnum.host]),
    InvitationController.getAll,
  );

// send invitation
router
  .route('/sessions/:sessionId/invite')
  .post(
    Authorization.Authenticated,
    AuthorizeRole.AuthorizeRole([RolesEnum.admin, RolesEnum.host]),
    hostSessionOwner,
    validator(InvitationValidator.invitationSchema),
    InvitationController.send,
  );

// accept invitation
router
  .route('/sessions/:sessionId/accept')
  .put(
    Authorization.Authenticated,
    AuthorizeRole.AuthorizeRole([RolesEnum.player]),
    InvitationController.accept,
  );

router
  .route('/invitations/:id')
  .get(
    Authorization.Authenticated,
    AuthorizeRole.AuthorizeRole([RolesEnum.admin, RolesEnum.host]),
    hostSessionOwner,
    InvitationController.getById,
  )
  .delete(
    Authorization.Authenticated,
    AuthorizeRole.AuthorizeRole([RolesEnum.admin, RolesEnum.host]),
    hostSessionOwner,
    InvitationController.remove,
  );

export default router;

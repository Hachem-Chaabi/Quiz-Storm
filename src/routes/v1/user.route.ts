import express from 'express';
const router = express.Router();

import { RolesEnum } from '../../constants/constants';

import Authorization from '../../middlewares/auth';
import AuthorizeRole from '../../middlewares/authorizeRole';
import UserValidator from '../../validators/user.validator';
import validator from '../../validators';
import UserController from '../../controllers/v1/user.controller';

router.post('/login', validator(UserValidator.loginSchema), UserController.login);

router.post('/register', validator(UserValidator.registerSchema), UserController.register);

router.get('/logout', Authorization.Authenticated, UserController.logout);

router.post('/refresh-token', UserController.refreshToken);

router.get('/profile', Authorization.Authenticated, UserController.getProfile);

router
  .route('/admin/users')
  .get(
    Authorization.Authenticated,
    AuthorizeRole.AuthorizeRole([RolesEnum.admin]),
    UserController.getAllUsers,
  )

router
  .route('/admin/users/:id')
  .get(
    Authorization.Authenticated,
    AuthorizeRole.AuthorizeRole([RolesEnum.admin]),
    UserController.getUserById,
  )
  .put(
    Authorization.Authenticated,
    AuthorizeRole.AuthorizeRole([RolesEnum.admin]),
    UserController.updateUser,
  )
  .delete(
    Authorization.Authenticated,
    AuthorizeRole.AuthorizeRole([RolesEnum.admin]),
    UserController.deleteUser,
  );

export default router;

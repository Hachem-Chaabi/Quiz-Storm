import express from 'express';
const router = express.Router();

import { RolesEnum } from '../../constants/constants';

import validator from '../../validators';
import Authorization from '../../middlewares/auth';
import AuthorizeRole from '../../middlewares/authorizeRole';
import CategoryController from '../../controllers/v1/category.controller';
import CategoryValidator from '../../validators/category.validator';

router
  .route('/categories')
  .get(
    Authorization.Authenticated,
    AuthorizeRole.AuthorizeRole([RolesEnum.admin]),
    CategoryController.getAll,
  )
  .post(
    Authorization.Authenticated,
    AuthorizeRole.AuthorizeRole([RolesEnum.admin]),
    validator(CategoryValidator.categorySchema),
    CategoryController.create,
  );

router
  .route('/categories/:id')
  .get(
    Authorization.Authenticated,
    AuthorizeRole.AuthorizeRole([RolesEnum.admin]),
    CategoryController.getById,
  )
  .put(
    Authorization.Authenticated,
    AuthorizeRole.AuthorizeRole([RolesEnum.admin]),
    CategoryController.edit,
  )
  .delete(
    Authorization.Authenticated,
    AuthorizeRole.AuthorizeRole([RolesEnum.admin]),
    CategoryController.remove,
  );

export default router;

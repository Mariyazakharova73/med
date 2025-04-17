import { RouteProps } from 'react-router-dom';

import { CreateUserPage, EditUserPage, HomePage, NotFoundPage, UserDetailPage } from '../pages';

export enum AppRoutes {
  USERS = 'users',
  CREATE_USER = 'create_user',
  USER_DETAIL = 'user_detail',
  EDIT_USER = 'edit_user',
  NOT_FOUND = 'not_found'
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.USERS]: '/',
  [AppRoutes.CREATE_USER]: '/users/new',
  [AppRoutes.USER_DETAIL]: '/users/:id',
  [AppRoutes.EDIT_USER]: '/users/:id/edit',
  [AppRoutes.NOT_FOUND]: '*'
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.USERS]: {
    path: RoutePath[AppRoutes.USERS],
    element: <HomePage />
  },

  [AppRoutes.CREATE_USER]: {
    path: RoutePath[AppRoutes.CREATE_USER],
    element: <CreateUserPage />
  },

  [AppRoutes.USER_DETAIL]: {
    path: RoutePath[AppRoutes.USER_DETAIL],
    element: <UserDetailPage />
  },

  [AppRoutes.EDIT_USER]: {
    path: RoutePath[AppRoutes.EDIT_USER],
    element: <EditUserPage />
  },

  [AppRoutes.NOT_FOUND]: {
    path: RoutePath[AppRoutes.NOT_FOUND],
    element: <NotFoundPage />
  }
};

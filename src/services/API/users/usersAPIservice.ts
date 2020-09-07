import { useFetch } from 'useHooks';
import {
  User,
  UserId,
  UserResp,
  UsersCollectResp,
  CreateUserBody,
  CreatedUserResp,
  UpdUserEntireBody,
  UpdUserPartialyBody,
} from 'models';
import { stringifyObjectSearchParams } from 'services/queryString';
import { usersEndpoints } from './endpoints';

export const UsersAPIservice = (baseURL: string) => {
  const { get, post, put, patch, del } = useFetch(baseURL);

  return {


    //* get unique user by its id
    //* GET 	/users/id
    getUserById(id: UserId, controller: AbortController) {
      const path = usersEndpoints.getUserById(id);

      return get<UserResp>(path, controller);
    },
    //* get all or by such param as id or postId
    //* GET  /users || /users?id=1 ||
    //* /users?name=test ... ||
    //* {id: 1, arr: ['a', 'b', 'c'],
    //* address: {
    //*   geo: {
    //*     lat: '-31.8129',
    //*     lng: '62.5342',
    //*  },
    //* }}
    getUsersByParams(
      controller: AbortController,
      searchParams?: string | UserResp
    ) {
      let path = usersEndpoints.root;

      if (searchParams) {
        path = `${path}?${typeof searchParams === 'string'
          ? path
          : stringifyObjectSearchParams<UserResp>(searchParams)
          }`;
      }

      return get<UsersCollectResp>(path, controller);
    },

    //* create a new user by username and email
    //* POST
    createUser(body: CreateUserBody, controller: AbortController) {
      return post<CreatedUserResp>(usersEndpoints.root, body, controller);
    },

    //* update user entire
    //* PUT
    updateUserEntire(
      id: UserId,
      body: UpdUserEntireBody,
      controller: AbortController
    ) {
      return put<User>(usersEndpoints.getUserById(id), body, controller);
    },

    //* update user partialy
    //* PATCH
    updateUserPartialy(
      id: UserId,
      body: UpdUserPartialyBody,
      controller: AbortController
    ) {
      return patch<UserResp>(usersEndpoints.getUserById(id), body, controller);
    },

    //* delete user
    //* DELETE
    deleteUser(id: UserId, controller: AbortController) {
      return del<object>(usersEndpoints.getUserById(id), controller);
    },
  };
};



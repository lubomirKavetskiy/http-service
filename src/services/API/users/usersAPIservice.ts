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
    getUserById(id: UserId, signal: AbortSignal) {
      const path = usersEndpoints.getUserById(id);

      return get<UserResp>(path, signal);
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
      signal: AbortSignal,
      searchParams?: string | UserResp
    ) {
      let path = usersEndpoints.root;

      if (searchParams) {
        path = `${path}?${typeof searchParams === 'string'
          ? path
          : stringifyObjectSearchParams<UserResp>(searchParams)
          }`;
      }

      return get<UsersCollectResp>(path, signal);
    },

    //* create a new user by username and email
    //* POST
    createUser(body: CreateUserBody, signal: AbortSignal) {
      return post<CreatedUserResp>(usersEndpoints.root, body, signal);
    },

    //* update user entire
    //* PUT
    updateUserEntire(
      id: UserId,
      body: UpdUserEntireBody,
      signal: AbortSignal
    ) {
      return put<User>(usersEndpoints.getUserById(id), body, signal);
    },

    //* update user partialy
    //* PATCH
    updateUserPartialy(
      id: UserId,
      body: UpdUserPartialyBody,
      signal: AbortSignal
    ) {
      return patch<UserResp>(usersEndpoints.getUserById(id), body, signal);
    },

    //* delete user
    //* DELETE
    deleteUser(id: UserId, signal: AbortSignal) {
      return del<object>(usersEndpoints.getUserById(id), signal);
    },
  };
};



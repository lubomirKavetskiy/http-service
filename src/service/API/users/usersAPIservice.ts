import {useFetch} from 'useHooks';
import {UserId, UserResp, UsersCollectResp, CreateUserBody} from 'models';
import {Params, stringifyObjectSearchParams} from 'service/queryString';
import {usersEndpoints} from './endpoints';

export const UsersAPIservice = (baseURL: string, token?: string) => {
  const {get, post} = useFetch(baseURL, token);

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
      searchParams?: string | Params
    ) {
      let path = usersEndpoints.root;

      if (searchParams) {
        path = `${path}?${
          typeof searchParams === 'string'
            ? path
            : stringifyObjectSearchParams(searchParams)
        }`;
      }

      return get<UsersCollectResp>(path, controller);
    },

    //* create a new user
    //* POST
    createUser(body: CreateUserBody, controller: AbortController) {
      return post<Partial<UserResp>>(usersEndpoints.root, body, controller);
    },
  };
};

// export class CommentsAPIservice extends MainAPI {
//   constructor(public baseURL: string, public authToken?: string) {
//     super(baseURL, authToken);
//   }

//   // get unique post by its id
//   //GET 	/comments/id
//   getCommentById(id: TCommentId) {
//     return this.get<ICommentResp>(commentsEndpoints.getCommentById(id));
//   }

//   // get all or by such param as id or postId
//   //GET  /comments || /comments?id=1 || /comments?postId=1
//   getComments(params?: ICommentParams) {
//     return super.get<ICommentsCollectResp>(commentsEndpoints.root, params);
//   }

//   createComment(body: ICreateCommentBody) {
//     return this.post<any>(commentsEndpoints.root, body);
//   }

//   updateCommentEntire(id: TCommentId, body: IEntireUpdCommentBoby) {
//     return this.put<ICommentResp>(commentsEndpoints.getCommentById(id), body);
//   }

//   updateCommentPartialy(id: TCommentId, body: IPartialyUpdCommentBoby) {
//     return this.patch<ICommentResp>(commentsEndpoints.getCommentById(id), body);
//   }

//   deleteCommentById(id: TCommentId) {
//     return this.delete<ICommentResp>(commentsEndpoints.getCommentById(id));
//   }
// }

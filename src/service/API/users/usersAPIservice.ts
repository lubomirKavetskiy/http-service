import {useFetch} from 'useHooks';
import {TUserId, IUserResp, IUsersCollectResp, TCreateUserBody} from 'models';
import {usersEndpoints} from './endpoints';

export const UsersAPIservice = (baseURL: string, token?: string) => {
  const {get, post} = useFetch(baseURL, token);

  return {
    // get unique user by its id
    //GET 	/users/id
    getUserById(id: TUserId, controller: AbortController) {
      const path = usersEndpoints.getUserById(id);

      return get<IUserResp>(path, controller);
    },

    // get all or by such param as id or postId
    //GET  /users || /users?id=1 || /users?name=test ...
    getUsersByParams(
      controller: AbortController,
      searchParams?: undefined | string | object
    ) {
      let path = usersEndpoints.root;

      if (searchParams) {
        if (
          typeof searchParams === 'object' &&
          Object.keys(searchParams).length
        ) {
          // e.g. {searchParamA: '100', searchParamB: '[200, 300, 400]'} ||
          // [['searchParamA', '100'], ['searchParamB', '200']]
          const searchParamsToString = new URLSearchParams(
            searchParams as {[x: string]: string}
          ).toString();

          path = `${path}?${searchParamsToString}`;
        }
        if (typeof searchParams === 'string') {
          // e.g. "?searchParamA=100&searchParamB=200"
          path = `${path}${searchParams}`;
        }
      }

      return get<IUsersCollectResp>(path, controller);
    },

    // create a new user
    // POST
    createUser(body: TCreateUserBody, controller: AbortController) {
      return post<Partial<IUserResp>>(usersEndpoints.root, body, controller);
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

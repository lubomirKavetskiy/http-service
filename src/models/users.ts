export type UserId = number | string;

// export interface ICommentParams {
//   id?: TCommentId;
//   postId?: TPostId;
// }

export interface UserResp {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export interface User extends Partial<UserResp> {}

// TCreateUserBody can be replaced with interface ICreateUserBody extends Partial<Omit<IUserResp, 'id'>> {}
export type CreateUserBody = {
  [key in keyof Omit<UserResp, 'id'>]?: UserResp[key];
};
export interface UsersCollectResp extends Array<Partial<UserResp>> {}

// export interface ICreateCommentBody extends Omit<ICommentResp, 'id'> {}

// export interface IEntireUpdCommentBoby extends ICreateCommentBody {}
// //@TODO atleast one key of object
// export interface IPartialyUpdCommentBoby extends Partial<ICreateCommentBody> {}

export type TUserId = number | string;

// export interface ICommentParams {
//   id?: TCommentId;
//   postId?: TPostId;
// }

export interface IUserResp {
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

export interface IUser extends Partial<IUserResp> {}

// TCreateUserBody can be replaced with interface ICreateUserBody extends Partial<Omit<IUserResp, 'id'>> {}
export type TCreateUserBody = {
  [key in keyof Omit<IUserResp, 'id'>]?: IUserResp[key];
};
export interface IUsersCollectResp extends Array<Partial<IUserResp>> {}

// export interface ICreateCommentBody extends Omit<ICommentResp, 'id'> {}

// export interface IEntireUpdCommentBoby extends ICreateCommentBody {}
// //@TODO atleast one key of object
// export interface IPartialyUpdCommentBoby extends Partial<ICreateCommentBody> {}

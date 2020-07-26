type TPostId = number | string;

export type TCommentId = number | string;

export interface ICommentParams {
  id?: TCommentId;
  postId?: TPostId;
}

export interface ICommentResp {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
}

export interface ICommentsCollectResp extends Array<ICommentResp> {}

export interface ICreateCommentBody extends Omit<ICommentResp, 'id'> {}

export interface IEntireUpdCommentBoby extends ICreateCommentBody {}
//@TODO atleast one key of object
export interface IPartialyUpdCommentBoby extends Partial<ICreateCommentBody> {}

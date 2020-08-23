type PostId = number | string;

export type CommentId = number | string;

export interface CommentParams {
  id?: CommentId;
  postId?: PostId;
}

export interface CommentResp {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
}

export interface CommentsCollectResp extends Array<CommentResp> {}

export interface CreateCommentBody extends Omit<CommentResp, 'id'> {}

export interface EntireUpdCommentBoby extends CreateCommentBody {}
//@TODO atleast one key of object
export interface PartialyUpdCommentBoby extends Partial<CreateCommentBody> {}

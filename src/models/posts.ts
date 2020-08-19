type TUserId = number | string;

export type TPostId = number | string;

export type TPostParams = {
  id: TPostId;
  userId: TUserId;
};

export type TPostResp = {
  id: Omit<TPostId, string>;
  userId: Exclude<TUserId, string>;
  title: string;
  body: string;
};

export type TPostsCollectResp = TPostResp[];

export type TCreatePostBody = Omit<TPostResp, 'id'>;

//@TODO for why this here '& {}' ?
export type TEntireUpdPostBody = TCreatePostBody & {};

//@TODO for why this here '& {}' ?
export type TPartialyUpdPostBoby = Partial<TCreatePostBody> & {};

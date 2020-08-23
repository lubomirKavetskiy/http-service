type UserId = number | string;

export type PostId = number | string;

export type PostParams = {
  id: PostId;
  userId: UserId;
};

export type PostResp = {
  id: Omit<PostId, string>;
  userId: Exclude<UserId, string>;
  title: string;
  body: string;
};

export type PostsCollectResp = PostResp[];

export type CreatePostBody = Omit<PostResp, 'id'>;

export type EntireUpdPostBody = CreatePostBody;

export type PartialyUpdPostBoby = Partial<CreatePostBody>;

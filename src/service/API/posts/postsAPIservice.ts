import {MainAPI} from 'service';
import {
  TPostId,
  TPostParams,
  TPostResp,
  TPostsCollectResp,
  TCreatePostBody,
  TEntireUpdPostBody,
  TPartialyUpdPostBoby,
} from 'models';
import {postsEndpoints} from './endpoints';

type TBody = Omit<TPostResp, 'id'>;

export class PostsAPIservice extends MainAPI {
  constructor(public baseURL: string, public authToken?: string) {
    super(baseURL, authToken);
  }

  // get unique post by its id
  //GET 	/posts/id
  getPostById(id: TPostId) {
    //use this without super ???
    return this.get<TPostResp>(postsEndpoints.getPostById(id));
  }

  // get all or by such param as id or userId
  //GET  /posts || /posts?id=1 || /posts?userId=1
  getPosts(params?: Partial<TPostParams>) {
    return this.get<TPostsCollectResp>(postsEndpoints.root, params);
  }

  createPost(body: TCreatePostBody) {
    return this.post<TPostResp>(postsEndpoints.root, body);
  }

  updatePostEntire(id: TPostId, body: TEntireUpdPostBody) {
    return this.put<TPostResp>(postsEndpoints.getPostById(id), body);
  }

  updatePostPartialy(id: TPostId, body: TPartialyUpdPostBoby) {
    return this.patch<TPostResp>(postsEndpoints.getPostById(id), body);
  }

  deletePostById(id: TPostId) {
    return this.delete<TPostResp>(postsEndpoints.getPostById(id));
  }
}

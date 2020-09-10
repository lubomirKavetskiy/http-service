import { MainAPI } from 'services';
import {
  PostId,
  PostParams,
  PostResp,
  PostsCollectResp,
  CreatePostBody,
  EntireUpdPostBody,
  PartialyUpdPostBoby,
} from 'models';
import { postsEndpoints } from './endpoints';

export class PostsAPIservice extends MainAPI {
  //* it's not necessary to assign the constructor but
  //* if we want to add this.newProp = newProp we will need to assign this constructor
  constructor(public baseURL: string) {
    super(baseURL);
  }

  //* get unique post by its id
  //* GET 	/posts/id
  getPostById(id: PostId) {
    //* use this without super ???
    return this.get<PostResp>(postsEndpoints.getPostById(id));
  }

  //* get all or by such param as id or userId
  //* GET  /posts || /posts?id=1 || /posts?userId=1
  getPosts(params?: Partial<PostParams>, config?: object) {
    return this.get<PostsCollectResp>(postsEndpoints.root, params, config);
  }

  createPost(body: CreatePostBody) {
    return this.post<PostResp>(postsEndpoints.root, body);
  }

  updatePostEntire(id: PostId, body: EntireUpdPostBody) {
    return this.put<PostResp>(postsEndpoints.getPostById(id), body);
  }

  updatePostPartialy(id: PostId, body: PartialyUpdPostBoby) {
    return this.patch<PostResp>(postsEndpoints.getPostById(id), body);
  }

  deletePostById(id: PostId) {
    return this.delete<object>(postsEndpoints.getPostById(id));
  }
}

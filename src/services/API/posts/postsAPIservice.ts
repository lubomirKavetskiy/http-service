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
  getPostById(id: PostId, config?: object) {
    return this.get<PostResp>(postsEndpoints.getPostById(id), config);
  }

  //* get all or by such param as id or userId
  //* GET  /posts || /posts?id=1 || /posts?userId=1
  getPosts(params: Partial<PostParams>, config?: object) {
    return this.get<PostsCollectResp>(postsEndpoints.root, params, config);
  }

  //* POST
  createPost(body: CreatePostBody, config?: object) {
    return this.post<PostResp>(postsEndpoints.root, body, config);
  }

  //* PUT
  updatePostEntire(id: PostId, body: EntireUpdPostBody, config?: object) {
    return this.put<PostResp>(postsEndpoints.getPostById(id), body, config);
  }

  //* PATCH
  updatePostPartialy(id: PostId, body: PartialyUpdPostBoby, config?: object) {
    return this.patch<PostResp>(postsEndpoints.getPostById(id), body, config);
  }

  //* DELETE
  deletePostById(id: PostId, config?: object) {
    return this.delete<object>(postsEndpoints.getPostById(id), config);
  }
}

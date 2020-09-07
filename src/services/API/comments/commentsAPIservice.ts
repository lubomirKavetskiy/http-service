import {MainAPI} from 'services';
import {
  CommentId,
  CommentParams,
  CommentResp,
  CommentsCollectResp,
  CreateCommentBody,
  EntireUpdCommentBoby,
  PartialyUpdCommentBoby,
} from 'models';
import {commentsEndpoints} from './endpoints';

export class CommentsAPIservice extends MainAPI {
  //it's not necessary to assign the constructor but
  //if we want to add this.newProp = newProp we will need to assign this constructor
  constructor(public baseURL: string) {
    super(baseURL);
  }

  // get unique post by its id
  //GET 	/comments/id
  getCommentById(id: CommentId) {
    return this.get<CommentResp>(commentsEndpoints.getCommentById(id));
  }

  // get all or by such param as id or postId
  //GET  /comments || /comments?id=1 || /comments?postId=1
  getComments(params?: CommentParams) {
    return super.get<CommentsCollectResp>(commentsEndpoints.root, params);
  }

  createComment(body: CreateCommentBody) {
    return this.post<CommentResp>(commentsEndpoints.root, body);
  }

  updateCommentEntire(id: CommentId, body: EntireUpdCommentBoby) {
    return this.put<CommentResp>(commentsEndpoints.getCommentById(id), body);
  }

  updateCommentPartialy(id: CommentId, body: PartialyUpdCommentBoby) {
    return this.patch<CommentResp>(commentsEndpoints.getCommentById(id), body);
  }

  deleteCommentById(id: CommentId) {
    return this.delete<object>(commentsEndpoints.getCommentById(id));
  }
}

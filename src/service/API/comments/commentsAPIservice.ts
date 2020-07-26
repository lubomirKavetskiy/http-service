import {MainAPI} from 'service';
import {
  TCommentId,
  ICommentParams,
  ICommentResp,
  ICommentsCollectResp,
  ICreateCommentBody,
  IEntireUpdCommentBoby,
  IPartialyUpdCommentBoby,
} from 'models';
import {commentsEndpoints} from './endpoints';

export class CommentsAPIservice extends MainAPI {
  constructor(public baseURL: string, public authToken?: string) {
    super(baseURL, authToken);
  }

  // get unique post by its id
  //GET 	/comments/id
  getCommentById(id: TCommentId) {
    return this.get<ICommentResp>(commentsEndpoints.getCommentById(id));
  }

  // get all or by such param as id or postId
  //GET  /comments || /comments?id=1 || /comments?postId=1
  getComments(params?: ICommentParams) {
    return super.get<ICommentsCollectResp>(commentsEndpoints.root, params);
  }

  createComment(body: ICreateCommentBody) {
    return this.post<any>(commentsEndpoints.root, body);
  }

  updateCommentEntire(id: TCommentId, body: IEntireUpdCommentBoby) {
    return this.put<ICommentResp>(commentsEndpoints.getCommentById(id), body);
  }

  updateCommentPartialy(id: TCommentId, body: IPartialyUpdCommentBoby) {
    return this.patch<ICommentResp>(commentsEndpoints.getCommentById(id), body);
  }

  deleteCommentById(id: TCommentId) {
    return this.delete<ICommentResp>(commentsEndpoints.getCommentById(id));
  }
}

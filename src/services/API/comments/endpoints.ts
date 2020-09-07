export const commentsEndpoints = {
  root: "/comments",
  getCommentById(id: number | string): string {
    return `/comments/${id}`;
  }
};

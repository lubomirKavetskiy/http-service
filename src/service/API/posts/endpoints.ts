export const postsEndpoints = {
  root: "/posts",
  getPostById(id: number | string): string {
    return `/posts/${id}`;
  }
};

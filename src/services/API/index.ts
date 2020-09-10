import { PostsAPIservice } from './posts';
import { CommentsAPIservice } from './comments';

const API_URL = 'https://jsonplaceholder.typicode.com';

const posts = new PostsAPIservice(API_URL);
const comments = new CommentsAPIservice(API_URL);

export const api = { posts, comments };

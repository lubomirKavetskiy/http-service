import { UsersAPIservice } from './users';

const API_URL = 'https://jsonplaceh5656older.typicode.com';
const users = UsersAPIservice(API_URL);

export const api = { users };

import { UsersAPIservice } from './users';

const API_URL = 'https://jsonplaceholder.typicode.com';
const users = UsersAPIservice(API_URL);

export const api = { users };

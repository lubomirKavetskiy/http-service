import { UsersAPIservice } from './users';

const API_URL = 'https://gorest.co.in/public-api';

const users = UsersAPIservice(API_URL);

export const api = { users };

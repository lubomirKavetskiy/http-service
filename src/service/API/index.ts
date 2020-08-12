import {UsersAPIservice} from './users';

// const API_URL = 'https://gorest.co.in/public-api';
const API_URL = 'https://jsonplaceholder.typicode.com';

//const TOKEN = 'OKMiKDWt0QOe3e7L69eYKrsnqSu9M_dJ81Ns';

//const users = UsersAPIservice(API_URL, TOKEN);
const users = UsersAPIservice(API_URL);
export const api = {users};

import { UserId } from 'models';

const root = '/users';

export const usersEndpoints = {
  root,
  getUserById(id: UserId): string {
    return `${root}/${id}`;
  },
};

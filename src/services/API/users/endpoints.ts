import { UserId } from 'models';

const root = '/userstt';

export const usersEndpoints = {
  root,
  getUserById(id: UserId): string {
    return `${root}/${id}`;
  },
};

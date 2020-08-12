import {TUserId} from 'models';

const root = '/users';

export const usersEndpoints = {
  root,
  getUserById(id: TUserId): string {
    return `${root}/${id}`;
  },
};

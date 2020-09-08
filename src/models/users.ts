export type UserId = number | string;

export interface User {
  id: UserId;
  username: string;
  email: string;
  name: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export type UserResp = RecursivePartial<User>;
export interface UsersCollectResp extends Array<RecursivePartial<User>> { }
export interface CreateUserBody extends Pick<User, 'username' | 'email'> { }
export interface CreatedUserResp extends CreateUserBody {
  id: UserId;
}
export interface UpdUserEntireBody extends Omit<User, 'id'> { }
export interface UpdUserPartialyBody extends Omit<UserResp, 'id'> { }
type RecursivePartial<T> = {
  [P in keyof T]?: RecursivePartial<T[P]>;
};

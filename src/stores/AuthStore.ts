import { makeAutoObservable } from 'mobx';

const DEFAULT_UUID =
  process.env.EXPO_PUBLIC_DEFAULT_USER_UUID ??
  '550e8400-e29b-41d4-a716-446655440000';

export class AuthStore {
  token: string = DEFAULT_UUID;

  constructor() {
    makeAutoObservable(this);
  }

  setToken(token: string) {
    this.token = token;
  }
}

import { makeAutoObservable, runInAction } from 'mobx';

import { User } from '../types/types';

import { api } from './api';

class UserDetailsStore {
  user: User | null = null;
  isLoading = false;
  error: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  async fetchUser(id: number) {
    this.isLoading = true;
    this.error = null;

    try {
      const response = await api
        .get(`users/${id}`)
        .json<{ data: User }>();

      runInAction(() => {
        this.user = response.data;
      });
    } catch (e) {
      runInAction(() => {
        this.error = 'Ошибка при загрузке пользователя';
      });
      console.error(this.error, e);
    } finally {
      runInAction(() => {
        this.isLoading = false;
      });
    }
  }

  clearUser() {
    this.user = null;
    this.error = null;
  }
}

export const userDetailsStore = new UserDetailsStore();

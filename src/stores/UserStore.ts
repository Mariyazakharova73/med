import { makeAutoObservable, runInAction } from 'mobx';

import { User } from '../types/types';

import { userFilterStore } from './UserFilterStore';
import { api } from './api';

class UserStore {
  users: User[] = [];
  selectedUser: User | null = null;
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  async fetchUsers() {
    this.isLoading = true;
    try {
      const params = new URLSearchParams(userFilterStore.queryParams as Record<string, string>);

      const response = await api
        .get(`users?${params.toString()}`)
        .json<{ data: { items: User[] } }>();

      runInAction(() => {
        this.users = response.data.items;
      });
    } catch (e) {
      console.error('Ошибка при загрузке пользователей', e);
    } finally {
      runInAction(() => {
        this.isLoading = false;
      });
    }
  }

  async addUser(userData: Record<string, string>) {
    try {
      const response = await api
        .post('users', {
          json: { ...userData, is_simple_digital_sign_enabled: false }
        })
        .json<User>();

      runInAction(() => {
        this.users.push(response);
      });
    } catch (e) {
      console.error('Ошибка при добавлении пользователя', e);
    }
  }

  async deleteUser(id: number) {
    try {
      await api.delete(`users/${id}`);
      runInAction(() => {
        this.users = this.users.filter(user => user.id !== id);
      });
    } catch (e) {
      console.error('Ошибка при удалении пользователя', e);
    }
  }

  async updateUser(id: number, userData: Record<string, string>) {
    try {
      await api.put(`users/${id}`, { json: userData });
      runInAction(() => {
        this.users = this.users.map(user => (user.id === id ? { ...user, ...userData } : user));
      });
    } catch (e) {
      console.error('Ошибка при обновлении пользователя', e);
    }
  }

  setSelectedUser(user: User | null) {
    this.selectedUser = user;
  }
}

export const userStore = new UserStore();

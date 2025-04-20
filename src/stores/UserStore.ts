import ky from 'ky';
import { makeAutoObservable, runInAction } from 'mobx';

import { userFilterStore } from './UserFilterStore';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type User = any;

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
      const params = new URLSearchParams();

      if (userFilterStore.name) params.append('filter[name]', userFilterStore.name);
      if (userFilterStore.surname) params.append('filter[surname]', userFilterStore.surname);
      if (userFilterStore.patronymic)
        params.append('filter[patronymic]', userFilterStore.patronymic);
      if (userFilterStore.sortField) params.append('sort', userFilterStore.sortField);

      const response = await ky
        .get(`https://api.mock.sb21.ru/api/v1/users?${params.toString()}`)
        .json<{ data: { items: User[] } }>();

      console.log(response);

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

  async addUser(userData: Omit<User, 'id'>) {
    try {
      const response = await ky
        .post('https://api.mock.sb21.ru/api/v1/users', {
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
      await ky.delete(`https://api.mock.sb21.ru/api/v1/users/${id}`);
      runInAction(() => {
        this.users = this.users.filter(user => user.id !== id);
      });
    } catch (e) {
      console.error('Ошибка при удалении пользователя', e);
    }
  }

  async updateUser(id: number, userData: Omit<User, 'id'>) {
    try {
      await ky.put(`https://api.mock.sb21.ru/api/v1/users/${id}`, { json: userData });
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

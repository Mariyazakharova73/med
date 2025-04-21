import { makeAutoObservable, runInAction } from 'mobx';

class UserFilterStore {
  name = '';
  surname = '';
  patronymic = '';
  sortField: string[] = [];
  isReady = false;

  constructor() {
    makeAutoObservable(this);
    this.loadFromLocalStorage();
  }

  get queryParams() {
    const filters = {
      ...(this.name && { 'filter[name]': this.name }),
      ...(this.surname && { 'filter[surname]': this.surname }),
      ...(this.patronymic && { 'filter[patronymic]': this.patronymic })
    };

    const validSort = this.sortField.filter(Boolean);
    const sort = validSort.length > 0 ? { sort: validSort.join(',') } : {};

    return {
      ...filters,
      ...sort
    };
  }

  setFilters(filters: Partial<Pick<this, 'name' | 'surname' | 'patronymic'>>) {
    Object.assign(this, filters);
    this.saveToLocalStorage();
  }

  setSortField(fields: string[]) {
    this.sortField = fields.filter(Boolean); 
    this.saveToLocalStorage();
  }

  saveToLocalStorage() {
    const data = {
      name: this.name,
      surname: this.surname,
      patronymic: this.patronymic,
      sortField: this.sortField
    };
    localStorage.setItem('userFilters', JSON.stringify(data));
  }

  loadFromLocalStorage() {
    const raw = localStorage.getItem('userFilters');
    if (raw) {
      try {
        const parsed = JSON.parse(raw);
        runInAction(() => {
          this.name = parsed.name || '';
          this.surname = parsed.surname || '';
          this.patronymic = parsed.patronymic || '';
          this.sortField = Array.isArray(parsed.sortField)
            ? parsed.sortField.filter(Boolean)
            : parsed.sortField
              ? [parsed.sortField]
              : [];
          this.isReady = true;
        });
      } catch (e) {
        console.error('Ошибка при загрузке фильтров', e);
        this.isReady = true;
      }
    } else {
      this.isReady = true;
    }
  }

  clear() {
    this.name = '';
    this.surname = '';
    this.patronymic = '';
    this.sortField = [];
    localStorage.removeItem('userFilters');
  }
}

export const userFilterStore = new UserFilterStore();

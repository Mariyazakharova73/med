import { makeAutoObservable, runInAction } from "mobx";

class UserFilterStore {
  name = "";
  surname = "";
  patronymic = "";
  sortField: string = "id";
  isReady = false;

  constructor() {
    makeAutoObservable(this);
    this.loadFromLocalStorage();
  }

  setFilters(filters: Partial<Pick<this, 'name' | 'surname' | 'patronymic'>>) {
    Object.assign(this, filters);
    this.saveToLocalStorage();
  }

  setSortField(field: string) {
    this.sortField = field;
    this.saveToLocalStorage();
  }

  saveToLocalStorage() {
    const data = {
      name: this.name,
      surname: this.surname,
      patronymic: this.patronymic,
      sortField: this.sortField
    };
    localStorage.setItem("userFilters", JSON.stringify(data));
  }

  loadFromLocalStorage() {
    const raw = localStorage.getItem("userFilters");
    if (raw) {
      try {
        const parsed = JSON.parse(raw);
        runInAction(() => {
          this.name = parsed.name || "";
          this.surname = parsed.surname || "";
          this.patronymic = parsed.patronymic || "";
          this.sortField = parsed.sortField || "id";
          this.isReady = true;
        });
      } catch (e) {
        console.error("Ошибка при загрузке фильтров", e);
        this.isReady = true;
      }
    } else {
      this.isReady = true;
    }
  }

  clear() {
    this.name = "";
    this.surname = "";
    this.patronymic = "";
    this.sortField = "id";
    localStorage.removeItem("userFilters");
  }
}

export const userFilterStore = new UserFilterStore();

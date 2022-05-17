import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private storage: Storage;
  private keyName: string = 'BD';

  constructor() {
    this.storage = window.localStorage;
  }

  getKeyName(): string {
    return this.keyName;
  }

  localStorageExist(): boolean {
    return this.storage[this.getKeyName()];
  }

  set(value: any): boolean {
    if (this.storage) {
      this.storage.setItem(this.keyName, JSON.stringify(value));
      return true;
    }
    return false;
  }

  get(): any {
    if (this.localStorageExist()) {
      return JSON.parse(this.storage.getItem(this.keyName) || '');
    }
    return null;
  }

  clear(): void {
    if (this.localStorageExist()) {
      this.storage.removeItem(this.keyName);
    }
  }
}

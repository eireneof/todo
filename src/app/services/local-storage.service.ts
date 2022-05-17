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

  set(value: any): boolean {
    if (this.storage) {
      this.storage.setItem(this.keyName, JSON.stringify(value));
      return true;
    }
    return false;
  }

  get(): any {
    if (this.storage) {
      return JSON.parse(this.storage.getItem(this.keyName) || '');
    }
    return null;
  }
}

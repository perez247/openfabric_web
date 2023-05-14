import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  getItem(name: string): string | null {
    return localStorage.getItem(name);
  }

  saveItem(name: string, value: string): void {
    localStorage.setItem(name, value);
  }

  clearItem(name: string): void {
    localStorage.removeItem(name);
  }

  clearAll(): void {
    localStorage.clear();
  }
}

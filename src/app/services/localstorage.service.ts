import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  set(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  get(key: string): any {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  }

  remove(key: string): void {
    localStorage.removeItem(key);
  }

  clearAll(): void {
    localStorage.clear();
  }
}


// constructor(private localStorageService: LocalStorageService) {}

// submitLoginForm() {
//   // Después de un inicio de sesión exitoso
//   const user = { id: 1, name: 'John Doe' };
//   this.localStorageService.set('user', user);
// }

// constructor(private localStorageService: LocalStorageService) {
//   this.user = this.localStorageService.get('user');
// }


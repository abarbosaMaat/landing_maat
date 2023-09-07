import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})

/**
 * Servicio para gestionar el localstorage
 *
 * @export
 * @class LocalStorageService
 */
export default class LocalStorageService {
  constructor() {}

  setItem(key: string, value: any): void {
    try {
      const stringValue = JSON.stringify(value);
      localStorage.setItem(key, stringValue);
    } catch (error) {
      console.error("Error al guardar en localStorage:", error);
    }
  }

  getItem<T>(key: string): T | null {
    try {
      const item = localStorage.getItem(key);
      if (item) {
        return JSON.parse(item) as T;
      }
      return null;
    } catch (error) {
      console.error("Error al leer de localStorage:", error);
      return null;
    }
  }

  updateItem(key: string, value: any): void {
    this.setItem(key, value);
  }

  removeItem(key: string): void {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error("Error al eliminar de localStorage:", error);
    }
  }

  clearAll(): void {
    try {
      localStorage.clear();
    } catch (error) {
      console.error("Error al limpiar el localStorage:", error);
    }
  }
}

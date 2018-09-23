import { IStorage } from "./istorage";

export class LocalStorage implements IStorage {

    public constructor(){ }

    public retrieveKey(key: string): string {
        return window.localStorage.getItem(key).toString();
    }

    public storeKey(key: string, value: string): void {
        window.localStorage.setItem(key, value);
    }

    public deleteKey(key: string): void {
        window.localStorage.removeItem(key);
    }
}
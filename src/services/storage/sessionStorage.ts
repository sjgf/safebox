import {IStorage} from "./istorage";

export class SessionStorage implements IStorage {

    public constructor() { }

    public retrieveKey(key: string): string {
        return window.sessionStorage.getItem(key);
    }

    public storeKey(key: string, value: string): void {
        window.sessionStorage.setItem(key, value);
    }

    public deleteKey(key: string): void {
        window.sessionStorage.removeItem(key);
    }
}
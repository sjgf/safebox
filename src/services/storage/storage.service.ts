import { IStorage } from "./istorage";

export class StorageService {

    private static _self : StorageService = new StorageService();

    private service : IStorage;

    private constructor() { }

    public static getInstance() : StorageService {
        return StorageService._self;
    }

    public setStorageService(storageService : IStorage) : StorageService {
        this.service = storageService;
        return this;
    }

    public retrieveKey(key: string): string {
        return this.service.retrieveKey(key);
    }

    public storeKey(key: string, value: string): void {
        this.service.storeKey(key, value);
    }

    public deleteKey(key: string): void {
        this.service.deleteKey(key);
    }

}
export interface IStorage {
    retrieveKey(key : string): string;
    storeKey(key : string, value : string) : void;
    deleteKey(key : string) : void;
}
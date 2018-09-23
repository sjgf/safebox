import { User } from "../../clasess/User";
import {IStorage} from "../storage/istorage";
import {Login} from "../../components/login/login.component";

export class AuthenticationService {
    private static _self : AuthenticationService = new AuthenticationService();

    private _authenticated : boolean;

    private constructor(){
        this._authenticated = false;
    }

    public static getInstance() : AuthenticationService {
        return AuthenticationService._self;
    }

    public isAuthenticated(storageService : IStorage): boolean {
        let user : string = storageService.retrieveKey(Login.USER_KEY);

        if(user){
            let theUser: User = JSON.parse(user);

            this._authenticated = (theUser !== undefined);
        }

        return this._authenticated;
    }

    public authenticate(username : string, password : string) : Promise<User> {

        return new Promise<User>((resolve, reject) => {
            if(username === 'root' && password === 'toor'){

                this._authenticated = true;

                resolve(new User("root", "toor"));

            } else {

                this._authenticated = false;
                reject(null);

            }
        });
    }
}
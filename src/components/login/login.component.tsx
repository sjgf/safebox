/// <reference path="../../../node_modules/@types/react/global.d.ts" />
/// <reference path="../../../node_modules/@types/react/index.d.ts" />

import * as React from 'react';
import { MDCTextField } from '@material/textfield';

import '../login/login.component.scss';
import {AuthenticationService} from "../../services/auth/authentication.service";
import {User} from "../../clasess/User";
import {SessionStorage} from "../../services/storage/sessionStorage";
import {StorageService} from "../../services/storage/storage.service";
import {SyntheticEvent} from "react";

export class Login extends React.Component<any, any> {

    public static USER_KEY : string = "USER";

    private username : HTMLInputElement = null;
    private password : HTMLInputElement = null;

    private usernameBox : HTMLDivElement = null;
    private passwordBox : HTMLDivElement = null;

    private usernameBoxBtn : MDCTextField = null;
    private passwordBoxBtn : MDCTextField = null;

    constructor(props: any){
        super(props);
    }

    public render(){

        return (
            <div>
                <section className="header">
                    <h1>safebox</h1>
                </section>
                <form action="#">
                    <div ref={(el) => this.usernameBox = el } className="mdc-text-field mdc-text-field--box username">
                        <input ref={(el) => this.username = el } type="text" className="mdc-text-field__input" name="username"
                               required/>
                        <label className="mdc-floating-label" htmlFor="username-input">Username</label>
                        <div className="mdc-line-ripple"></div>
                    </div>
                    <div ref={(el) => this.passwordBox = el } className="mdc-text-field mdc-text-field--box password">
                        <input ref={(el) => this.password = el } type="password" className="mdc-text-field__input"
                               name="password" required/>
                        <label className="mdc-floating-label" htmlFor="password-input">Password</label>
                        <div className="mdc-line-ripple"></div>
                    </div>
                    <div className="button-container">
                        <button className="mdc-button mdc-button--raised" onClick={ (event : SyntheticEvent) => { this.handleOnClick(event); } }>
                            Sign in
                        </button>
                    </div>
                </form>
            </div>
        );
    }

    public componentDidMount() : void {

        this.usernameBoxBtn = new MDCTextField(this.usernameBox);
        this.passwordBoxBtn = new MDCTextField(this.passwordBox);

        console.log("ComponenentDidMount() was called");

    }

    public handleOnClick(event : SyntheticEvent) : void {
        event.preventDefault();
        event.stopPropagation();

        let username : string = this.username.value;
        let password : string = this.password.value;

        console.log(username + " : " + password);

        AuthenticationService.getInstance()
            .authenticate(username, password)
            .then((user : User) => {

                StorageService.getInstance()
                    .setStorageService(new SessionStorage())
                    .storeKey(Login.USER_KEY, JSON.stringify(user));

                console.log(StorageService.getInstance().retrieveKey(Login.USER_KEY).toString());
                // TODO: Implement transition to Home Screen

            })
            .catch((reason : any) => {

                if(reason === null){
                    console.log("User was not found.");
                } else {
                    console.log(reason);
                }

            });
    }
}
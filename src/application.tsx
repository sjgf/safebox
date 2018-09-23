/// <reference path="../node_modules/@types/react/global.d.ts" />
/// <reference path="../node_modules/@types/react/index.d.ts" />

import * as React from 'react';
import * as DOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './styles/app.scss';
import { Login } from './components/login/login.component';
import { Home } from './components/home/home.component';
import { AuthenticatedRoute } from "./components/authentication/authenticatedRoute.component";
import {AuthenticationService} from "./services/auth/authentication.service";
import {SessionStorage} from "./services/storage/sessionStorage";
import {IStorage} from "./services/storage/istorage";

const root = document.getElementById('app');

class Application extends React.Component<any, any> {

    private storageService: IStorage;

    constructor(props: any){
        super(props);

        // Specify the storage service where the user credentials are being stored
        this.storageService = new SessionStorage();
    }

    public render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <AuthenticatedRoute exact path="/home" authed={ AuthenticationService.getInstance().isAuthenticated(this.storageService) } component={Home} />
                    <AuthenticatedRoute exact path="/accounts/:id" authed={ AuthenticationService.getInstance().isAuthenticated(this.storageService) } component={Home} />
                </Switch>
            </BrowserRouter>
        );
    }
}

DOM.render(<Application />, root);
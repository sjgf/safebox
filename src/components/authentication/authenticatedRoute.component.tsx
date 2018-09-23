/// <reference path="../../../node_modules/@types/react/global.d.ts" />
/// <reference path="../../../node_modules/@types/react/index.d.ts" />

import * as React from 'react';
import {Component, ComponentClass} from "react";

import { Route, Redirect } from "react-router-dom";

interface IAuthenticatedRouteProps {
    exact : boolean,
    path : string,
    authed : boolean,
    component : ComponentClass
}

export class AuthenticatedRoute extends Component<IAuthenticatedRouteProps, any> {

    public props : IAuthenticatedRouteProps;

    public constructor(props : IAuthenticatedRouteProps){
        super(props);

        this.props = props;
    }

    public render(){

        const { component : Component, ...rest } = this.props;

        return (
            <Route
                { ...rest }
                render={
                    (props) => {
                        return (this.props.authed)? (<Component {...props} />) : (<Redirect to="/" />);
                    }
                }
            />
        );
    }

}
/// <reference path="../../../node_modules/@types/react/global.d.ts" />
/// <reference path="../../../node_modules/@types/react/index.d.ts" />

import * as React from 'react';

import "./home.component.scss";

import {Login} from "../login/login.component";
import {AccountCard} from "../account/card.component";
import {SessionStorage} from "../../services/storage/sessionStorage";
import {StorageService} from "../../services/storage/storage.service";
import {ReactDOM, SyntheticEvent} from "react";

export class Home extends React.Component<any, any> {

    public constructor(props){
        super(props);
    }

    public render() {
        return (
            <div>
                <header className="mdc-top-app-bar mdc-top-app-bar--fixed">
                    <div className="mdc-top-app-bar__row">
                        <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
                            <a href="#" className="material-icons mdc-top-app-bar__navigation-icon">menu</a>
                            <span className="mdc-top-app-bar__title">Safebox</span>
                        </section>
                        <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" role="toolbar">
                            <a href="#" className="mdc-top-app-bar__action-item" aria-label="Authenticated User">_sjgf_</a>
                            <a href="#" className="material-icons mdc-top-app-bar__action-item" aria-label="Settings">settings</a>
                            <a href="#" className="material-icons mdc-top-app-bar__action-item" aria-label="Sign out" onClick={ (event : SyntheticEvent) => { this.handleOnClick(event); } }>exit_to_app</a>
                        </section>
                    </div>
                </header>
                <div className="page__content page__flex-element">
                    <nav className="mdc-drawer mdc-drawer--permanent mdc-typography">
                        <div className="mdc-drawer__content">
                            <h3 className="drawer-heading">Collections
                                <i className="test material-icons">add_circle_outline</i>
                            </h3>
                            <h4 className="drawer-heading">
                                Personal
                            </h4>
                            <ul className="">
                                <li className="drawer-list__item">
                                    <a className="drawer-link mdc-ripple-upgraded" href="/components/web/catalog/animation/">
                                        Paypal
                                    </a>
                                </li>
                            </ul>
                            <h4 className="drawer-heading">
                                Work
                            </h4>
                            <ul>
                                <li className="drawer-list__item">
                                    <a className="drawer-link mdc-ripple-upgraded" href="/components/web/catalog/buttons/floating-action-buttons/">
                                        ASES sgonzalez
                                    </a>
                                </li>
                                <li className="drawer-list__item">
                                    <a className="drawer-link mdc-ripple-upgraded" href="/components/web/catalog/buttons/icon-buttons/">
                                        HIA Test
                                    </a>
                                </li>
                                <li className="drawer-list__item">
                                    <a className="drawer-link mdc-ripple-upgraded" href="/components/web/catalog/buttons/icon-toggle-buttons/">
                                        HIA Prod
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <article>
                        <div className="mdc-layout-grid">
                            <div className="mdc-layout-grid__inner">
                                <div className="mdc-layout-grid__cell"><AccountCard /></div>
                                <div className="mdc-layout-grid__cell"><AccountCard /></div>
                                <div className="mdc-layout-grid__cell"><AccountCard /></div>
                                <div className="mdc-layout-grid__cell"><AccountCard /></div>
                                <div className="mdc-layout-grid__cell"><AccountCard /></div>
                                <div className="mdc-layout-grid__cell"><AccountCard /></div>
                                <div className="mdc-layout-grid__cell"><AccountCard /></div>
                                <div className="mdc-layout-grid__cell"><AccountCard /></div>
                                <div className="mdc-layout-grid__cell"><AccountCard /></div>
                                <div className="mdc-layout-grid__cell"><AccountCard /></div>
                                <div className="mdc-layout-grid__cell"><AccountCard /></div>
                                <div className="mdc-layout-grid__cell"><AccountCard /></div>

                            </div>
                        </div>
                    </article>
                </div>
            </div>
        );
    }


    public componentDidMount(): void {


    }

    public handleOnClick(event : SyntheticEvent) : void {
        event.preventDefault();
        event.stopPropagation();

        StorageService.getInstance()
            .setStorageService(new SessionStorage())
            .deleteKey(Login.USER_KEY);

        // TODO: Implement transition to login screen

    }
}
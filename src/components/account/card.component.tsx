/// <reference path="../../../node_modules/@types/react/global.d.ts" />
/// <reference path="../../../node_modules/@types/react/index.d.ts" />

import * as React from 'react';

import "./card.component.scss";

export class AccountCard extends React.Component<any, any> {

    public props: any;
    public state: any;

    public constructor(props: any, state: any) {
        super(props, state);
    }

    public render() {
        return (
            <div className="mdc-card demo-card">
                <div className="mdc-card__primary-action mdc-ripple-upgraded mdc-ripple-upgraded--foreground-activation"
                     >
                    <div className="demo-card__primary">
                        <h2 className="demo-card__title mdc-typography--headline6">Paypal</h2>
                        <h3 className="demo-card__subtitle mdc-typography--subtitle2">Personal</h3>
                    </div>
                    <div className="demo-card__secondary mdc-typography--body2">
                        Paypal personal account credentials.
                    </div>
                </div>
                <div className="mdc-card__actions">
                    <div className="mdc-card__action-buttons">

                    </div>
                    <div className="mdc-card__action-icons">
                        <button className="mdc-button mdc-card__action mdc-card__action--button mdc-ripple-upgraded mdc-button--raised">
                            View
                        </button>
                        <button
                            className="mdc-icon-button material-icons mdc-card__action mdc-card__action--icon mdc-ripple-upgraded--unbounded mdc-ripple-upgraded"
                            aria-pressed="false" aria-label="Delete account" title="Delete account"
                            data-toggle-on-content="delete" data-toggle-on-label="Delete account"
                            data-toggle-off-content="delete_border" data-toggle-off-label="Delete account">

                            delete
                        </button>
                    </div>
                </div>
            </div>
        );
    }


    public componentDidMount(): void {


    }
}


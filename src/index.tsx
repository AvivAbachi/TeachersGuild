import React from 'react';
// import ReactDOM from 'react-dom';
import {hydrate, render} from "react-dom";
import {Provider, useStaticRendering} from "mobx-react";
import './index.module.scss';
import App from './App';
import GlobalStore from './GlobalStore';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

const staticRendering = navigator.userAgent === "ReactSnap";
if (staticRendering) {
    console.log("MobX: static rendering");
    useStaticRendering(true);
}

const store = new GlobalStore();

const rootElement: HTMLElement | null = document.getElementById('root');
if (rootElement && rootElement.hasChildNodes()) {
    hydrate(<Provider GlobalStore={store}>
        <App/>
    </Provider>, rootElement);
} else {
    render(<Provider GlobalStore={store}>
        <App/>
    </Provider>, rootElement);
}

// navigator.userAgent != "ReactSnap"

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

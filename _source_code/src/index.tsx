import React from 'react';
// import ReactDOM from 'react-dom';
import { hydrate, render } from "react-dom";

import './index.module.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

const rootElement:HTMLElement | null = document.getElementById("root");
if (rootElement && rootElement.hasChildNodes()) {
    hydrate(<App />, rootElement);
} else {
    render(<App />, rootElement);
}

// navigator.userAgent != "ReactSnap"

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
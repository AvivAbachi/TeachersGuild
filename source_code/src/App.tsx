import React from 'react';
import {HashRouter } from "react-router-dom";
import './App.module.scss';
import styles from './App.module.scss';
import AppRoutes from "./App.Routes";
import GlobalData from './Services/GlobalData';


const App : React.FC = (props) => {
    return (
        <div className={styles.App}>
            <HashRouter basename='/TeachersGuild'>
                <AppRoutes/>
            </HashRouter >
        </div>
    );
};
export default App;
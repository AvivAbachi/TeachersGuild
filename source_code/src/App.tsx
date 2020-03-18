import React from 'react';
import {BrowserRouter} from "react-router-dom";
import './App.module.scss';
import styles from './App.module.scss';
import AppRoutes from "./App.Routes";


const App : React.FC = (props) => {
    return (
        <div className={styles.App}>
            <BrowserRouter basename={"/TeachersGuild/"}>
                <AppRoutes/>
            </BrowserRouter>
        </div>
    );
};
export default App;
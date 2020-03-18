import React from 'react';
import {BrowserRouter  } from "react-router-dom";
import './App.module.scss';
import styles from './App.module.scss';
import AppRoutes from "./App.Routes";
import GlobalData from './Services/GlobalData';


const App : React.FC = (props) => {
    return (
        <div className={styles.App}>
            <BrowserRouter  basename={GlobalData.baseRoute}>
                <AppRoutes/>
            </BrowserRouter  >
        </div>
    );
};
export default App;
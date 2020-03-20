import React, { Fragment } from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import './App.module.scss';
import styles from './App.module.scss';
import AppRoutes from './App.Routes';
import GlobalData from './Services/GlobalData';

const App: React.FC = (props) => {
    return (
        <div className={styles.App}>
            <Router basename={GlobalData.baseRoute}>
                <AppRoutes/>
            </Router>
        </div>
    );
};
export default App;
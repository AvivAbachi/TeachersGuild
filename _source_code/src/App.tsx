import React from 'react';
import {BrowserRouter} from "react-router-dom";
import './App.module.scss';
import styles from './App.module.scss';
import AppRoutes from "./App.Routes";
import MenuComponent from "./Components/Menu/Menu";
import FooterComponent from "./Components/Footer/footer";
import GlobalData from "./Services/GlobalData";




const App : React.FC = (props) => {
    return (
        <div className={styles.App}>
            <BrowserRouter basename={GlobalData.baseRoute}>
                <MenuComponent/>
                <AppRoutes/>
                <FooterComponent/>
            </BrowserRouter>
        </div>
    );
};
export default App;
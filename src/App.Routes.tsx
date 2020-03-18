import React, {Component} from 'react';

import {Redirect, Route, Switch} from "react-router-dom";

import HomePageView from "./Pages/HomePage/HomePage";
import AboutView from "./Pages/About/About";
import NotFound from './Pages/NotFound/NotFound'

import MenuComponent from "./Components/Menu/Menu";
import FooterComponent from "./Components/Footer/footer";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";

export default class AppRoutes extends Component {

    render() {

        return (
            <div>
                <MenuComponent/>
                <Switch>
                    <Route path={"/"} exact component={HomePageView}/>
                    <Route path={"/About"} component={AboutView}/>
                    <Route path={"/404"} component={NotFound}/>
                    <Route component={() => <Redirect to={"/404"}/>}/>

                </Switch>
                <FooterComponent ref={'footer'}/>
                <ScrollToTop/>
            </div>
        )
    }
}

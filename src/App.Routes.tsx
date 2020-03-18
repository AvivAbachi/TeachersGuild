import React, {Component} from 'react';

import {Redirect, Route, Switch} from "react-router-dom";
import HomePageView from "./Pages/HomePage/HomePage";
import AboutView from "./Pages/About/About";
import NotFound from './Pages/NotFound/NotFound'

import MenuComponent from "./Components/Menu/Menu";
import FooterComponent from "./Components/Footer/footer";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import MyAlert from "./Components/MyAlert/MyAlert";

interface iState {
    isMobile : boolean
}

export default class AppRoutes extends Component < {},
iState > {
    constructor(props : any) {
        super(props);
        this.state = {
            isMobile: (window.innerWidth <= 980 || window.screen.width <= 980)
        }

    }
    componentWillMount() {
        this.UpdateMenuType();
        window.addEventListener('resize', this.UpdateMenuType.bind(this))
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.UpdateMenuType.bind(this))
    }

    UpdateMenuType = () => {
        this.setState({
            isMobile: (window.innerWidth <= 980 || window.screen.width <= 980)
        })
    };

    render() {

        return (
            <div>
                <MenuComponent isMobile={this.state.isMobile}/>
                <Switch>
                    <Route path={"/"} exact>
                        <HomePageView isMobile={this.state.isMobile}/>
                    </Route>
                    <Route path={"/About"} component={AboutView}/>
                    <Route path={"/404"} component={NotFound}/>
                    <Route component={() => <Redirect to={"/404"}/>}/>
                </Switch>
                <FooterComponent ref={'footer'}/>
                <ScrollToTop/> {/* <MyAlert/> */}
            </div>
        )
    }
}

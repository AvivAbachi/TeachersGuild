import React, {Component} from 'react';
import {Link ,withRouter} from "react-router-dom";

import styles from './Menu.module.scss';

import MenuMobileView from './MenuMobileBtn';
import MenuDesktopView from './MenuDesktop';
import Pog from './MenuPograms'
import Mobile from './MenuMobile'

import TGLogo from "./TGLogo.png";

interface IState {
    isMobile: boolean;
    mobileSub: boolean;
    ProSub: boolean;
    menuIcon: string;
}

export default class MenuView extends Component <{},
    IState> {

    constructor(props: any) {
        super(props);
        this.state = {
            isMobile: false,
            mobileSub: false,
            ProSub: false,
            menuIcon: "fas fa-angle-down"
        };
    }

    componentDidMount() {
        this.View();
        window.addEventListener('resize', this.View.bind(this))
    }
    componentDidUpdate() {
        // this.View();
    }

    componentWillUnmount(): void {
        window.removeEventListener('resize', this.View.bind(this))
    }


    View = () => {
        if (window.innerWidth <= 980 || window.screen.width <= 980) {

            this.setState({isMobile: true, ProSub: false, menuIcon: "fas fa-angle-down"})
        } else {
            this.setState({isMobile: false, mobileSub: false})
        }

    };

    CheckedM = () => {
        this.setState({
            mobileSub: (!this.state.mobileSub)
        })
    };
    CheckedP = () => {
        let checked = !this.state.ProSub;
        this.setState({
            ProSub: checked,
            menuIcon: checked
                ? "fas fa-angle-up"
                : "fas fa-angle-down"
        });

        return false;
    };

    render() {
        let baseRoute = (navigator.userAgent === "ReactSnap")
            ? ""
            : "";


        return (

            <div>
                <nav>
                    <Link to={baseRoute + "/"}><img src={TGLogo} alt="Logo" height="34px"/></Link>
                    <div>
                        {this.state.isMobile
                            ? <MenuMobileView clickCallback={this.CheckedM}/>
                            : <MenuDesktopView clickCallback={this.CheckedP} mIcon={this.state.menuIcon}/>}
                        <div className={styles.login}>
                            <Link to="#!">SIGN UP<br/>
                                <small>or</small> LOGIN</Link>
                        </div>
                    </div>
                </nav>
                {this.state.mobileSub
                    ? <Mobile/>
                    : null}
                {this.state.ProSub
                    ? <Pog/>
                    : null}
            </div>

        )
    }
}

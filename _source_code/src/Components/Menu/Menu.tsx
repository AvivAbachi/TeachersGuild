import React, {Component} from 'react';
import {Link} from "react-router-dom";

import styles from './Menu.module.scss';

import MenuMobileView from './MenuMobileBtn';
import MenuDesktopView from './MenuDesktop';
import MenuPograms from './MenuPograms'
import MenuMobile from './MenuMobile'

import TGLogo from "./TGLogo.png";
import GlobalData from '../../Services/GlobalData';

interface Istate {
    isMobile : boolean;
    mobileSub : boolean;
    programSub : boolean;
    btnColor : string;
    menuIcon : string
}

export default class MenuView extends Component < {},
Istate > {

    constructor(props : any) {
        super(props);
        this.state = {
            isMobile: false,
            mobileSub: false,
            programSub: false,
            btnColor: "",
            menuIcon : "fas fa-angle-down"
        }

    }

    componentDidMount() {
        this.View();
        window.addEventListener('resize', this.View.bind(this))
    } // componentDidUpdate() { //     this.View(); // }
    componentWillUnmount() {
        window.removeEventListener('resize', this.View.bind(this))
    }

    View = () => {
        if (window.innerWidth <= 980 || window.screen.width <= 980) {

            this.setState({isMobile: true})
        } else {
            this.setState({isMobile: false})
        }
        this.closeSubs()
    };
    openMobileSub = () => {
        this.setState({
            mobileSub: !this.state.mobileSub})
        this.state.mobileSub
            ? this.setState({btnColor: ""})
            : this.setState({btnColor: "white"})
    };
    openProgramSub = () => {
        this.setState({
            programSub: !this.state.programSub})
            this.state.programSub
            ? this.setState({menuIcon: "fas fa-angle-down"})
            : this.setState({menuIcon: "fas fa-angle-up"});
    };
    closeSubs = () => {
        this.setState({programSub: false, mobileSub: false,menuIcon: "fas fa-angle-down",btnColor:""});
        
    };

    render() {
        return (
            <div>
                <nav>
                    <Link to={"/"}><img src={TGLogo} alt="Logo" height="34px"/></Link>
                    <div>{this.state.isMobile
                            ? <MenuMobileView
                                    btnColor={this.state.btnColor}
                                    clickCallback={this.openMobileSub}
                                    mobileSub={this.state.mobileSub}
                                    CallClose={this.closeSubs}/>
                            : <MenuDesktopView
                            menuIcon={this.state.menuIcon}
                                clickCallback={this.openProgramSub}
                                programSub={this.state.programSub}
                                CallClose={this.closeSubs}/>}
                        <div className={styles.login}>
                            <a href={GlobalData.noLink}>SIGN UP<br/>
                                <small>or</small>
                                LOGIN</a>
                        </div>
                    </div>
                </nav>
                {this.state.mobileSub
                    ? <MenuMobile CallClose={this.closeSubs}/>
                    : null}
                {this.state.programSub
                    ? <MenuPograms CallClose={this.closeSubs}/>
                    : null}
            </div>

        )
    }
}

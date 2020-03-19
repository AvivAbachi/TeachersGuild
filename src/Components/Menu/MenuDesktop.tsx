import React, {Component} from 'react';
import menuStyles from './Menu.module.scss';
import styles from './MenuDesktop.module.scss';
import {NavLink} from 'react-router-dom';
import GlobalData from "../../Services/GlobalData";
import TGLogo from "./TGLogo.png";
import MenuPrograms from "./MenuPrograms"

interface iProps {}

interface IState {
    showProgramsSubmenu : boolean;
    menuIcon : string;
}

export default class Desktop extends Component < iProps,
IState > {
    constructor(props : iProps) {
        super(props);
        this.state = {
            showProgramsSubmenu: false,
            menuIcon: "fas fa-angle-down"
        };
    }

    toggleProgramSub = (value?: boolean) => {
        let show = (value != null
            ? value
            : !this.state.showProgramsSubmenu);
        this.setState({
            showProgramsSubmenu: show,
            menuIcon: show
                ? "fas fa-angle-up"
                : "fas fa-angle-down"
        });
    };

    render() {

        return (
            <div className={menuStyles.menuStyle}>
                <nav>
                    <NavLink to={"/"}><img
                        src={TGLogo}
                        alt="Logo"
                        height="34px"
                        onClick={e => this.toggleProgramSub(false)}/>
                    </NavLink>
                    <ul className={styles.menu}>
                        <li onClick={e => this.toggleProgramSub()}>
                            <p>Programs<i className={this.state.menuIcon}/>
                            </p>
                        </li>
                        <li>
                            <a href={GlobalData.noLink} onClick={e => this.toggleProgramSub(false)}>Approach</a>
                        </li>
                        <li>
                            <a href={GlobalData.noLink} onClick={e => this.toggleProgramSub(false)}>Solutions</a>
                        </li>
                        <li>
                            <NavLink
                                activeClassName={styles.active}
                                to="/About"
                                onClick={e => this.toggleProgramSub(false)}>About US</NavLink>
                        </li>
                        <li>
                            <a href={GlobalData.noLink} onClick={e => this.toggleProgramSub(false)}>Work With Us</a>
                        </li>
                    </ul>
                    <div className={menuStyles.login}>
                        <a href={GlobalData.noLink}>
                            SIGN UP<br/>
                            <small>
                                or
                            </small>
                            LOGIN
                        </a>
                    </div>
                </nav>
                {this.state.showProgramsSubmenu
                    ? <MenuPrograms CallClose={() => this.toggleProgramSub(false)}/>
                    : null}
            </div>
        )
    }
}
import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import styles from './MenuMobile.module.scss';
import menuStyles from './Menu.module.scss';
import GlobalData from "../../Services/GlobalData";
import TGLogo from "./TGLogo.png";
import {Button} from 'reactstrap';

interface IProps {}
interface IState {
    isExpanded : boolean;
}

export default class Mobile extends Component < IProps,
IState > {
    constructor(props : IProps) {
        super(props);
        this.state = {
            isExpanded: false
        };
    }

    toggleMenu = (value?: boolean) => {
        this.setState({
            isExpanded: (value != null
                ? value
                : !this.state.isExpanded)
        });
    };

    render() {
        return (
            <div className={menuStyles.menuStyle}>

                <nav>
                    <Button className={styles.btn} onClick={e => this.toggleMenu()}>
                        <i
                            key={'dsa'}
                            className={"fas fa-bars fa-2x"}
                            style={{
                            color: this.state.isExpanded
                                ? "white"
                                : ""
                        }}/>

                    </Button>
                    <NavLink to={"/"}><img
                        src={TGLogo}
                        alt="Logo"
                        height="34px"
                        onClick={e => this.toggleMenu(false)}/></NavLink>
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
                {this.state.isExpanded
                    ? <div className={styles.mBG} onClick={e => this.toggleMenu(false)}>
                            <div className={styles.mNav}>
                                <a href={GlobalData.noLink}>Programs</a>
                                <a href={GlobalData.noLink}>Collaborations</a>
                                <a href={GlobalData.noLink}>Chapters</a>
                                <a href={GlobalData.noLink}>Approach</a>
                                <NavLink
                                    activeClassName={styles.active}
                                    to="/About"
                                    onClick={e => this.toggleMenu(false)}>About US</NavLink>
                                <a href={GlobalData.noLink}>Work With Us</a>
                            </div>
                        </div>
                    : null}
            </div>
        );
    }
}

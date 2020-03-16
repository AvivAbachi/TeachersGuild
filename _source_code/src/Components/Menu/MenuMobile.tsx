import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import styles from './MenuMobile.module.scss';
import menuStyles from './Menu.module.scss';
import GlobalData from "../../Services/GlobalData";
import {ICallCloseProps} from '../../Models/interfaces'
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
        const disabledLink = {
            pointerEvents: "none",
            //  cursor:"default"
        } as any;

        return (
            <div className={menuStyles.menuStyle}>

                <nav>
                    <Button
                        style={{
                        cursor: "pointer"
                    }}
                        onClick={e => this.toggleMenu()}>
                        <i
                            key={'dsa'}
                            className={"fas fa-bars fa-2x"}
                            style={{
                            color: this.state.isExpanded
                                ? "black"
                                : "white"
                        }}/>
                    </Button>
                    {this.state.isExpanded
                        ? <div className={styles.mNav} onClick={e => this.toggleMenu(false)}>
                                <a href={GlobalData.noLink} style={disabledLink}>Programs</a>
                                <a href={GlobalData.noLink} style={disabledLink}>Collaborations</a>
                                <a href={GlobalData.noLink} style={disabledLink}>Chapters</a>
                                <a href={GlobalData.noLink} style={disabledLink}>Approach</a>
                                <NavLink
                                    activeClassName={styles.active}
                                    to="/About"
                                    onClick={e => this.toggleMenu(false)}>About US</NavLink>
                                <a href={GlobalData.noLink} style={disabledLink}>Work With Us</a>
                            </div>
                        : null}
                    <NavLink to={"/"}><img src={TGLogo} alt="Logo" height="34px" onClick={e => this.toggleMenu(false)}/></NavLink>
                    <div>
                        <div className={styles.login}>
                            <a href={GlobalData.noLink} style={disabledLink}>SIGN UP<br/>
                                <small>or</small>
                                LOGIN</a>
                        </div>
                    </div>
                </nav>

            </div>
        );
    }
}

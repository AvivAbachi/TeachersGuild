import React, {Component, Fragment} from 'react';
import {NavLink} from 'react-router-dom';
import styles from './MenuMobile.module.scss';
import menuStyles from './Menu.module.scss';
import GlobalData from "../../Services/GlobalData";
import Logo from './tgfooterlogo.png'
import LogoScroll from './TGLogo.png'
import {Button} from 'reactstrap';

interface IProps {
    scroll : number;

}

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
        let isScroll : boolean = this.props.scroll > 0.5;
        let isClass : any = isScroll
            ? styles.scroll
            : styles.notScroll;

        return (
            <Fragment>
                <nav
                    style={{
                    background: `rgba(255,196,12,${ !this.state.isExpanded
                        ? this.props.scroll
                        : 1})`
                }}>
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
                        src={(this.state.isExpanded || isScroll
                ? LogoScroll
                : Logo)}
                        alt="Logo"
                        width='240px'
                        onClick={e => this.toggleMenu(false)}/></NavLink>
                    <div className={menuStyles.login}>
                        <a href={GlobalData.noLink} className={!this.state.isExpanded && !isScroll
                ?menuStyles.notScroll:''}>
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
            </Fragment>
        );
    }
}

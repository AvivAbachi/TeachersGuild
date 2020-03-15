import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import styles from './MenuMobile.module.scss';
import GlobalData from "../../Services/GlobalData";
import {ICallCloseProps} from '../../Models/interfaces'


export default class Mobile extends Component<ICallCloseProps,{}> {
    render() {
        return (
            <div className={styles.mNav}>
                <a href={GlobalData.noLink} onClick={this.props.CallClose}>Programs</a>
                <a href={GlobalData.noLink} onClick={this.props.CallClose}>Collaborations</a>
                <a href={GlobalData.noLink} onClick={this.props.CallClose}>Chapters</a>
                <a href={GlobalData.noLink} onClick={this.props.CallClose}>Approach</a>
                <NavLink activeClassName={styles.active} to="/About" onClick={this.props.CallClose}>About US</NavLink>
                <a href={GlobalData.noLink} onClick={this.props.CallClose}>Work With Us</a>
            </div>
        );
    }
}

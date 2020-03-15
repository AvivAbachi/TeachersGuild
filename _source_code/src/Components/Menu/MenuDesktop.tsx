import React, {Component} from 'react';
import styles from './MenuDesktop.module.scss';
import {NavLink} from 'react-router-dom';
import GlobalData from "../../Services/GlobalData";
import {ICallbackActionProps, ICallCloseProps} from '../../Models/interfaces'

interface Iprops extends ICallbackActionProps , ICallCloseProps {
    programSub : boolean;
    menuIcon? : string;

}

export default class Desktop extends Component < Iprops,
{} > {
    constructor(props : Iprops) {
        super(props);
        this.state = {
           
        };
    }


    render() {
        return (
            <ul className={styles.menu}>
                <li>
                    <p  onClick={this.props.CallClose}>Programs<i className={this.props.menuIcon}/>
                    </p>
                </li>
                <li>
                    <a href={GlobalData.noLink} onClick={this.props.CallClose}>Approach</a>
                </li>
                <li> 
                    <a href={GlobalData.noLink} onClick={this.props.CallClose}>Solutions</a>
                </li>
                <li>
                    <NavLink activeClassName={styles.active} to="/About" onClick={this.props.CallClose}>About US</NavLink>
                </li>
                <li>
                    <a href={GlobalData.noLink} onClick={this.props.CallClose}>Work With Us</a>
                </li>
            </ul>

        )
    }
}
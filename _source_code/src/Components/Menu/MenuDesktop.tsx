import React, {Component} from 'react';
import styles from './MenuDesktop.module.scss';
import {NavLink} from 'react-router-dom';
import {ICallbackActionProps} from "../../Models/interfaces";

interface IProps extends ICallbackActionProps {
    mIcon : string;
}

export default class Desktop extends Component <IProps , {} > {

    constructor(props : IProps) {
        super(props);
        this.state = {};
    }

    componentDidMount() {}

    componentWillUnmount() {}

    render() {

        return (

            <ul className={styles.menu}>
                <li>
                    <p onClick={this.props.clickCallback}>Programs<i className={this.props.mIcon}/>
                    </p>
                </li>
                <li>
                    <a href="#!">Approach</a>
                </li>
                <li>
                    <a href="#!">Solutions</a>
                </li>
                <li>
                    <NavLink activeClassName={styles.active} to="/About">About US</NavLink>
                </li>
                <li>
                    <a href="#!">Work With Us</a>
                </li>
            </ul>

        )
    }
}
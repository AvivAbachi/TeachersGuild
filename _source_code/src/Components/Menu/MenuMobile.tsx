import React, {Component} from 'react';
import { NavLink} from "reactstrap";
import styles from './MenuMobile.module.scss';

export default class Mobile extends Component {
    render() {
        return (
            <div className={styles.mNav}>
                <NavLink link={"#!"}>Programs</NavLink>
                <NavLink link={"#!"}>Collaborations</NavLink>
                <NavLink link={"#!"}>Chapters</NavLink>
                <NavLink link={"#!"}>Approach</NavLink>
                <NavLink link="/about">About US</NavLink>
                <NavLink link={"#!"}>Work With Us</NavLink>
            </div>
        );
    }
}

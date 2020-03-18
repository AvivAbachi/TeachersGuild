import React, {Component} from 'react'
import styles from './Button.module.scss';
import appStyles from '../../App.module.scss';
// import {NavLink} from 'react-router-dom';
import GlobalData from "../../Services/GlobalData";
type aligments = ("center-div" | "left-align-div" | "right-align-div");

interface IProps {
    link?: string;
    label? : string;
    aligment? : aligments;
    disable?:boolean;
}

interface IState {
    link : string;
    aligment : aligments;

}

export default class Button extends Component < IProps,
IState > {

    constructor(props : any) {
        super(props);
        this.state = {
            link :(!props.disable && props.link? props.link:"#!"),
            aligment :  ( props.aligment == null? "center-div" : props.aligment)
        };
    }
    render() {
        return (
            <a
                href={this.state.link}
                className={styles.btn + " " + appStyles[this.state.aligment]  + " " +(this.props.disable?styles.btnDisabled:"") }>
                {this.props.label}
            </a>
        )
    }
}

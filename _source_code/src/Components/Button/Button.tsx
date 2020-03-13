import React, {Component} from 'react'
import styles from './Button.module.scss';
import appStyles from '../../App.module.scss';
import {Link} from 'react-router-dom';

type aligments = ("center-div" | "left-align-div" | "right-align-div");

interface IProps {
    link : string;
    label : string;
    aligment : aligments;
}

interface IState {
    link : string;
    label : string;
    aligment : aligments;
}

export default class Button extends Component < IProps, IState > {
    constructor(props : any) {
        super(props);
        this.state = {
            link: props.link,
            label: props.label,
            aligment :props.aligment
        };
    }
    render() {
        return (
            
            <a href={this.state.link} className={styles.btn +" "+appStyles[this.state.aligment]}>
                {this.state.label}
            </a>
        )
    }
}

import React, {Component} from 'react'
import styles from './MyAlert.module.scss';
import {UncontrolledAlert} from 'reactstrap';
// import {NavLink} from 'react-router-dom'; import GlobalData from
// "../../Services/GlobalData";

interface IProps {
}

interface IState {
}

export default class Button extends Component <IProps,
    IState> {

    constructor(props: any) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <UncontrolledAlert color="info" isOpen className={styles.MyAlert}>
                Hello! this is rebuild page whit React.<a href="https://www.teachersguild.org/">original website</a>
                <br/>
                Only 2 page work (Home Page, About).
            </UncontrolledAlert>
        )
    }
}

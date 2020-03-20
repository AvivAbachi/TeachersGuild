import React, {Component, Fragment} from 'react'
import styles from './MyAlert.module.scss';
import {UncontrolledAlert, Container, Col, Row} from 'reactstrap';;
// import {NavLink} from 'react-router-dom'; import GlobalData from
// "../../Services/GlobalData";
interface IProps {
    CallClose : any
}

interface IState {}

export default class Button extends Component < IProps,
IState > {

    constructor(props : any) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        setTimeout(() => {
               this.props.CallClose()
        }, 10000);
    }

    render() {
        return (
            <div className={styles.Fluid}>
                <div className={styles.Contain}>
                    <UncontrolledAlert className={styles.body}>
                        Hello! this is rebuild page whit React and Bootstrap.
                        <a href="https://www.teachersguild.org/">
                            original website
                        </a>
                        <br/>
                        Only 2 page work (Home Page, About).
                    </UncontrolledAlert>
                </div>
            </div>
        )
    }
}

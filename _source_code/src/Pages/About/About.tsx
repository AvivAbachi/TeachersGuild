import React, {Component} from 'react';
// import ReactDOM from 'react-dom';
// import styles from './About.module.scss';
// import appStyles from '../../App.module.scss';
// import {Col, Container, Row} from "reactstrap";
import Helmet from "react-helmet";

export default class AboutView extends Component {

    constructor(props : any) {
        super(props);
        this.state = {};
    }

    componentDidMount() {}

    componentWillUnmount() {}

    render() {
        return (
            <div>
                <Helmet>
                    <title>{"The Teachers Guild"}</title>
                    <meta name="description" content={"The Teachers Guild"}/>
                </Helmet>
                <h1>hfdghf</h1>

            </div>
        )
    }
}
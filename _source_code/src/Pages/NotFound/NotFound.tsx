import React, {Component} from 'react';
import Helmet from "react-helmet";

import GlobalData from "../../Services/GlobalData";

import styles from './NotFound.module.scss';

interface Istate {
    high : any;
}
export default class NotFoundView extends Component < {},
Istate > {
    constructor(props : any) {
        super(props);
        this.state = {
            high: 200
        };
    }
    componentDidMount() {
        this.handelHigh()
        window.addEventListener('resize', this.handelHigh.bind(this))
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.handelHigh.bind(this))
    }

    handelHigh = () => {
        let x : number = document.getElementsByTagName('nav')[0].clientHeight;
        let y : number = document.getElementsByTagName('Footer')[0].clientHeight;
        this.setState({
            high: window.innerHeight  - (x + y)
        });
    };
    render() {
        return (
            <div
                className={styles.page + " " + styles.e404}
                style={{
                height: this.state.high
            }}>
                <Helmet>
                    <title>Error 404</title>
                    <meta name="description" content=" Error 404"/>
                </Helmet>
                <div>
                    <h1>We couldn't find that page.</h1>
                    <h2>Error 404</h2>
                </div>
            </div>
        )
    }
}
import React, {Component} from 'react';
import Helmet from "react-helmet";
import {Redirect} from "react-router-dom";
import styles from './NotFound.module.scss';

interface Istate {
    high : any;
    redirect : boolean;
}
export default class NotFoundView extends Component < {},
Istate > {
    constructor(props : any) {
        super(props);
        this.state = {
            high: 500,
            redirect: false
        };
    }
    componentDidMount() {
        this.handelHigh();
        window.addEventListener('resize', this.handelHigh.bind(this));
        this.counter()
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.handelHigh.bind(this));
    }
    counter = () => {
        setTimeout(() => {
            console.log('fdas')
            this.setState({redirect: true})
        }, 2000);

    }
    handelHigh = () => {
        let x : number = document.getElementsByTagName('nav')[0].clientHeight;
        let y : number = document.getElementsByTagName('Footer')[0].clientHeight;
        this.setState({
            high: window.innerHeight - (x + y)
        });
    };
    render() {

        return (
            <div
                className={styles.page + " " + styles.e404}
                style={{
                height: this.state.high
            }}>
                {this.state.redirect
                    ? <Redirect to={'/'}/>
                    : null}
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
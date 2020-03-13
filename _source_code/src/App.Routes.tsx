import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import appStyles from './App.module.scss';

import {Container, Col, Row} from "reactstrap";
import {Link, Redirect, Route, Switch} from "react-router-dom";

import Helmet from "react-helmet";

import HomePageView from "./Pages/HomePage/HomePage";
import AboutView from "./Pages/About/About";

import _ from 'lodash';

const NotFound = () => <div className={appStyles.page}>
    <Helmet>
        <title>שגיאה 404</title>
        <meta name="description" content="שגיאה 404"/>
    </Helmet>
    <div className={appStyles["page-content"]}>
        <Container fluid={true}>
            <Row>
                <Col className={appStyles["center-div"]}>
                    <span>שגיאה 404 , הדף לא נמצא</span>
                </Col>
            </Row>
        </Container>
    </div>
</div>;

export default class AppRoutes extends Component {
    render() {
        // let baseRoute = (navigator.userAgent === "ReactSnap")
        //     ? ""
        //     : ""; //github pages support: "/app";
        let baseRoute ="";
        return (
            <Row>
                <Col>
                    <Switch>
                        <Route path={baseRoute + "/"} exact component={HomePageView}/>

                        <Route path={baseRoute + "/About"} component={AboutView}/>
                        <Route path={baseRoute + "/404"} component={NotFound}/>
                        <Route component={() => <Redirect to={baseRoute + "/404"}/>}/>
                    </Switch>
                </Col>
            </Row>
        )
    }
}

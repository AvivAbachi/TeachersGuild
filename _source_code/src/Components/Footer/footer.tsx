import React, {Component} from 'react';
import {Link} from "react-router-dom";
import styles from "./footer.module.scss";
import {Row, Col} from 'reactstrap'
import GlobalData from "../../Services/GlobalData";

import TGLogo from "./tgfooterlogo.png";
import riverdale from "./riverdale-logo.png";
import IDEO from "./IDEO_logo_2.png";

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <Row className={styles.row} >
                    <Col md="5" xs={"12"} className={styles.about}>
                        <img src={TGLogo} alt="" width="189"/>
                        <p>A non-profit initiative of PLUSSED at Riverdale Country School and IDEO's
                            Design for Learning Studio.</p>
                    </Col>
                    <Col md="4" xs={"12"} className={styles.links}>
                        <h5>CONTACT US</h5>
                        <a href={GlobalData.noLink}>TERMS & CONDITIONS</a>
                        <a href={GlobalData.noLink}>PRIVACY POLICY</a>
                        <a href={GlobalData.noLink}>COOKIES POLICY</a>
                    </Col >
                    <Col md="12" xs={"12"}>
                        <h6>SUPPORTED BY</h6>
                        <div className={styles.support}>
                            <a href={GlobalData.noLink}><img src={riverdale} alt="" width="101"/></a>
                            <a href={GlobalData.noLink}><img src={IDEO} alt="" width="101"/></a>
                        </div>
                    </Col>
                </Row>

            </footer>
        )
    }
}

import React, {Component} from 'react';
import Helmet from "react-helmet";
import {Container, Row, Col} from 'reactstrap'

import GlobalData from "../../Services/GlobalData";

import styles from './About.module.scss';
import StyleBtn from '../../Components/Button/Button.module.scss';
import appStyles from '../../App.module.scss';

import Button from '../../Components/Button/Button';
import Strip from '../../Components/Strip/Strip';
import Card from '../../Components/Card/Card';

import workerJSON from './worker.json'

import StripIMG from '../../images/chapter-kickoff.png';
import supIMG1 from '../../images/support/robbins_family.png';
import supIMG2 from '../../images/support/carnegie-corporation.png';
import supIMG3 from '../../images/support/centerbridge.png';
import supIMG4 from '../../images/support/marty.png';
import supIMG5 from '../../images/support/koshland.png';

interface Istate {
    btnDisable : boolean;
    err : boolean;
}

export default class AboutView extends Component < {},
Istate > {
    constructor(props : any) {
        super(props);
        this.state = {
            err: false,
            btnDisable: false
        };
    }
    cheakEmail = (event : any) => {
        this.setState({err: true})
    }
    handelSub = (e : any) => {
        this.setState({btnDisable: true});
        e.preventDefault();
    }
    render() {
        return (
            <div>
                <Helmet>
                    <title>{"The Teachers Guild"}</title>
                    <meta name="description" content={"The Teachers Guild"}/>
                </Helmet>
                <div className={styles.homePage + ' ' + appStyles["page-content"]}>
                    <Strip
                        bgImg={StripIMG}
                        height={780}
                        caption={`Educators — They’re just like us! Teams from New York, Georgia, and California celebrate the kick-off of Chapters.`}>
                        <Row className={styles.stripRow}>
                            <Col className={styles.wellcome}>
                                <div>
                                    <h1>Transforming Teaching Into A Creative Force</h1>
                                    <p>
                                        From classrooms across the nation, The Teachers Guild is catalyzing teachers’
                                        creative leadership to prepare our students to be the problem-solvers of
                                        tomorrow. In this time of great innovation and deep divides, our schools are at
                                        the heart of it all. As our communities are shifting, teachers are designing
                                        better ways to keep pace with the unique and dynamic needs of our students. The
                                        time for teachers is now.
                                    </p>
                                </div>
                            </Col >
                            <Col className={styles.impact}>
                                <div>
                                    <h1>SEE OUR IMPACT</h1>
                                    <div className={styles.impactIMG}>
                                        <p >2016-2017</p>
                                        <h2>Impact
                                            <br/>Report</h2>
                                    </div>
                                    <form onSubmit={this.handelSub} method="none">
                                        <p>
                                            Enter your email to download our Impact Report and read stories about teachers
                                            who are creating change for their students and schools.
                                        </p>
                                        <div>
                                            {!this.state.btnDisable
                                                ? <label>
                                                        <h3>
                                                            Email Address
                                                            <span>*</span><br/>
                                                        </h3>
                                                        <input
                                                            type="email"
                                                            name="EMAIL"
                                                            id="idEmail"
                                                            className={this.state.err?styles.err:styles.InputEmail}
                                                            required={true}
                                                            onInvalid ={this.cheakEmail}
                                                            onBlur ={this.cheakEmail}
                                                            />
                                                    </label>
                                                : null}
                                            {this.state.btnDisable
                                                ? <h4 className={styles.Send}>Thank you for subscribing!</h4>
                                                : null}
                                            <input
                                                id="subBtn"
                                                type="submit"
                                                value="Download Report"
                                                name="subscribe"
                                                className={StyleBtn.btn + " " + [this.state.btnDisable
                                                    ? StyleBtn.btnDisabled
                                                    : null]}/>
                                        </div>
                                    </form>
                                </div>
                            </Col>
                        </Row>
                    </Strip>
                    <Container fluid={true} className={styles.team}>
                        <div className={styles.teamContainer}>
                            <div className={styles.box}>
                                <h1>Our team is at the intersection of education and design.</h1>
                                <p>The Teachers Guild is a non-profit initiative of Plussed at Riverdale Country
                                    School, that is being incubated by IDEO’s Design for Learning Studio. We first
                                    collaborated on the creation of the Design Thinking for Educators Toolkit.</p>
                                <Button label={"CONTACT US"}/>
                            </div>
                            <Row noGutters={true} className={styles.worker}>
                                       {
                                    (workerJSON as Array<object>).map((item : any, index : number) => <Card
                                        cardIMG={item.cardIMG}
                                        job={item.job}
                                        name={item.name}
                                        text={item.text}
                                        key={index}/>)}
                            </Row>
                        </div>
                    </Container>
                </div>
                <Container fluid={true} className={styles.support}>
                    <Container fluid={false}>
                        <h1>
                            Thank you to our partners who support The Guild.
                        </h1>
                        <Row noGutters={false} md={3}>
                            <Col>
                                <a href={GlobalData.noLink}><img src={supIMG1} alt="" width="180"/></a>
                            </Col>
                            <Col>
                                <a href={GlobalData.noLink}><img src={supIMG2} alt="" width="180"/></a>
                            </Col>
                            <Col>
                                <a href={GlobalData.noLink}><img src={supIMG3} alt="" width="180"/></a>
                            </Col>
                            <Col>
                                <a href={GlobalData.noLink}><img src={supIMG4} alt="" width="180"/></a>
                            </Col>
                            <Col>
                                <a href={GlobalData.noLink}><img src={supIMG5} alt="" width="180"/></a>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </div>
        )
    }
}
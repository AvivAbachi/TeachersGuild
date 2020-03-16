import React, {Component} from 'react';
import GlobalData from "../../Services/GlobalData";
import appStyles from '../../App.module.scss';
import styles from './HomePage.module.scss';

import Button from '../../Components/Button/Button';
import Strip from '../../Components/Strip/Strip'
import {Col, Container, Row} from "reactstrap";
import Helmet from "react-helmet";

import LogoPrimary from '../../images/TheTeachersGuild_Logo_Primary.png'
import StripIMG from '../../images/o.png'
import iCatrina from '../../images/Screen Shot 2018-12-07 at 1.28.54 PM.png'

export default class HomePageView extends Component {

    constructor(props : any) {
        super(props);
    }

    componentDidMount() {}

    componentWillUnmount() {}

    render() {
        return (
            <div className={appStyles.page}>
                <Helmet>
                    <title>{"The Teachers Guild"}</title>
                    <meta name="description" content={"The Teachers Guild"}/>
                </Helmet>
                <div className={styles.homePage + ' ' + appStyles["page-content"]}>
                    <Container fluid={true} className={styles.hero}>
                        <Row>
                            <Col >
                                <div className={appStyles["center-div"]}>
                                    <img width="54" src={LogoPrimary} alt=""/>
                                    <h1>Teachers are the innovators education has been waiting for.</h1>
                                    <p>Preparing our students to be the problem solvers of tomorrow
                                    </p>
                                    <div>
                                        <Button link={GlobalData.noLink} label={"JOIN US"} aligment={"center-div"}/>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                    <Strip
                        bgImg={StripIMG}
                        height={680}
                        caption={`Teachers getting to know each other at the Making It Real prototyping workshop.`}>
                        <div className={styles.wellcome}>
                            <h1>Welcome to The Teachers Guild</h1>
                            <p>
                                We are a professional community that activates teachers' creativity to solve the
                                biggest challenges in education today. In our collaborative learning programs we
                                use Design Thinking, a learner-centered approach to problem solving. Teachers
                                tap into their inner designer by trying new ideas and discovering what works and
                                why for their students and schools.
                            </p>
                            <Button
                                link={GlobalData.noLink}
                                label={"LEARN DESIGN THINKING"}
                                aligment={"left-align-div"}/>
                        </div>
                    </Strip>

                    <Container fluid={true} className={styles.content + " center-div"}>
                        <h2>FEATURED CONTENT</h2>
                        <div className={styles.list}>
                            <div>
                                <h5>RECENT ARTICLE</h5>
                                <h4>
                                    <a href={GlobalData.noLink}>Teachers are Civic Leaders</a>
                                </h4>
                                Teaching can be a force to unlock students’ inherent creativity and civic
                                leadership.<br/>
                                <a href={GlobalData.noLink}>Here’s how.</a>
                            </div>
                            <div>
                                <h5>ONGOING EVENT
                                </h5>
                                <h4>Local Chapter Impact Showcases</h4>

                                Celebrate the end of our year-long design-journey and hear from teachers about
                                their impactful ideas!<br/>
                                <a href={GlobalData.noLink}>Lakeland Community College, OH | April 25</a><br/>
                                <a href={GlobalData.noLink}>St. Vrain, CO | April 30</a><br/>
                                <a href={GlobalData.noLink}>Gwinnett, GA | May 2
                                </a><br/>
                                <a href={GlobalData.noLink}>Vista, CA | May 8</a><br/>
                                <a href={GlobalData.noLink}>Oakland, CA | May 9</a><br/>
                                <a href={GlobalData.noLink}>New York, NY | May 14</a><br/>
                                Fremont, CA | May 15 (Event Page In Progress)
                            </div>
                            <div>
                                <h5>FEATURED CONTRIBUTOR</h5>
                                <div>
                                    <span>
                                        <h4>
                                            <a href={GlobalData.noLink}>Catrina Estrada</a>
                                        </h4>
                                        Assistant Principal
                                        <br/>Erie, Colorado
                                    </span>
                                    <img src={iCatrina} alt="" width="100px" height="100px"/>
                                </div>
                            </div>
                        </div>
                    </Container>
                    <Container fluid={true} className={styles.creating + " center-div"}>

                        <h1>Start Creating!</h1>
                        <h5>Be inspired by the creativity of our community.</h5>

                        <div className={styles.card}>
                            <div>
                                <h2>Collaborations</h2>
                                <p>Contribute your ideas to open, online challenges and develop best-in-class
                                    solutions.</p>
                                <Button
                                    link={GlobalData.noLink}
                                    label={"COLLABORATE"}
                                    aligment={"left-align-div"}/>
                            </div>
                            <div>
                                <h6>MOST RECENT COLLABORATION
                                </h6>
                                <a href={GlobalData.noLink}>
                                    <h2>
                                        How might we strengthen communication and trust between families and teachers to
                                        better support students’ success?
                                    </h2>
                                </a>
                            </div>
                        </div>
                        <div className={styles.list2}>
                            <a href={GlobalData.noLink}>
                                <div className={styles.Limg}></div>
                                <div className={styles.Ltext}>
                                    <h2>Chapters</h2>
                                    <p>Activate and sustain a culture of creativity throughout your district or region.</p>
                                </div>
                            </a>

                            <a href={GlobalData.noLink}>
                                <div className={styles.Limg}></div>
                                <div className={styles.Ltext}>
                                    <h2>Toolkit</h2>
                                    <p>Discover Design Thinking methods and mindsets to create learner-centered
                                        solutions.</p>
                                </div>
                            </a>
                        </div>
                    </Container>
                    <Container fluid={true} className={styles.quart + " center-div"}>
                        <div>
                            <h1>We are a community of 10,000 teachers nationwide, and over 100,000 toolkit
                                users across the globe.</h1>
                        </div>

                    </Container>
                    <Container fluid={true} className={styles.quart2 + " center-div"}>
                        <div>
                            <h1>"There is shared belief among educators today that the status quo is not
                                okay, and we're in the position to do something about it."</h1>
                            <h4>- ANA OZA, 7TH GRADE ENGLISH TEACHER
                            </h4>
                            <Button link={GlobalData.noLink} label={"JOIN US"} aligment={"center-div"}/>
                        </div>
                    </Container>
                </div>
            </div>
        )
    }
}
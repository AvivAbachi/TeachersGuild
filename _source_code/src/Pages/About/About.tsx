import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import styles from './About.module.scss';
import Button from '../../Components/Button/Button';
import StyleBtn from '../../Components/Button/Button.module.scss';
import Strip from '../../Components/Strip/Strip';
import StripIMG from '../../images/chapter-kickoff.png';
import Helmet from "react-helmet";
import appStyles from '../../App.module.scss';
import GlobalData from "../../Services/GlobalData";
import {Container, Row, Col} from 'reactstrap'

interface Istate {
    btnDisable : boolean;
    err : string;
}

export default class AboutView extends Component < {},
Istate > {
    constructor(props : any) {
        super(props);
        this.state = {
            err: "",
            btnDisable: false
        };
    }
    cheakEmail = (event : any) => {
        let x : boolean = (event.target.value == "")
            ? false
            : true;

        this.setState({
            err: x
                ? ""
                : styles.error
        })
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
                        <div className={styles.wellcome}>
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
                        <div className={styles.impact}>
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
                                                <h5>
                                                    Email Address<span >
                                                        *</span><br/>
                                                </h5>
                                                <input
                                                    type="email"
                                                    name="EMAIL"
                                                    id="idEmail"
                                                    className={styles.InputEmail + " " + this.state.err}
                                                    onChange={this.cheakEmail}
                                                    onError={this.cheakEmail}
                                                    required={true}/>
                                            </label>
                                        : null}
                                    {this.state.btnDisable
                                        ? <h5 className={styles.Send}>Thank you for subscribing!</h5>
                                        : null}
                                    <input
                                        id="subBtn"
                                        type="submit"
                                        value="Download Report"
                                        name="subscribe"
                                        disabled={this.state.btnDisable}
                                        className={StyleBtn.btn + " " + styles.btn}/>
                                </div>
                            </form>
                        </div>

                    </Strip>
                    <Container fluid={true} className={styles.team}>
                        <Container fluid={false}>
                            <div>
                                <h1>Our team is at the intersection of education and design.</h1>
                                <p>The Teachers Guild is a non-profit initiative of Plussed at Riverdale Country
                                    School, that is being incubated by IDEO’s Design for Learning Studio. We first
                                    collaborated on the creation of the Design Thinking for Educators Toolkit.</p>
                                <Button label={"CONTACT US"} link={GlobalData.noLink} aligment={"center-div"}/>
                            </div>
                        </Container>
                    </Container>
                </div>

            </div>
        )
    }
}
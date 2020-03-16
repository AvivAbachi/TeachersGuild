import React, {Component} from 'react';
// import ReactDOM from 'react-dom';
import styles from './About.module.scss';
import Button from '../../Components/Button/Button';
import StyleBtn from '../../Components/Button/Button.module.scss';
import Strip from '../../Components/Strip/Strip';
import StripIMG from '../../images/chapter-kickoff.png';
import Helmet from "react-helmet";
import appStyles from '../../App.module.scss';
import GlobalData from "../../Services/GlobalData";
export default class AboutView extends Component {

    constructor(props : any) {
        super(props);
        this.state = {};
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
                                <h4 >Impact Report</h4>
                            </div>

                            <form action="" method="post">
                                <p>
                                    Enter your email to download our Impact Report and read stories about teachers
                                    who are creating change for their students and schools.
                                </p>
                                <div>
                                    <h2>Subscribe to our mailing list</h2>
                                    <label>
                                        Email Address<span >*</span><br/>
                                        <input type="email" name="EMAIL" required={false}/>
                                    </label>
                                    <div
                                        id="EmailSub"
                                        style={{
                                        display: "block"
                                    }}></div>
                                    <div
                                        style={{
                                        display: "block"
                                    }}>Thank you for subscribing!</div>
                                    <input
                                        type="submit"
                                        value="Download Report"
                                        name="subscribe"
                                        className={StyleBtn.btn}/>
                                </div>
                            </form>

                        </div>
                    </Strip>

                </div>

            </div>
        )
    }
}
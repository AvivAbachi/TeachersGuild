import React, {Component} from 'react'
import styles from './MenuPograms.module.scss';
import {Link} from 'react-router-dom';

export default class Pograms extends Component {
    render() {
        return (
            <div className={styles.program}>
                <div className={styles.submenu}>
                    <Link to="/programs/collaborations">
                        <h2>Collaborations</h2>
                        <p>Contribute your ideas to online challenges and develop best-in-class solutions.</p>
                    </Link>
                </div>
                <div className={styles.submenu}>
                    <Link to="/programs/chapters">
                        <h2>Chapters</h2>
                        <p>Activate and sustain a culture of creative leadership throughout your
                            district or region.</p>
                    </Link>
                </div>
            </div>
        )
    }
}

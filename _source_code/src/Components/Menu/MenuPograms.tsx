import React, {Component} from 'react'
import styles from './MenuPograms.module.scss';
import GlobalData from "../../Services/GlobalData";
import {ICallCloseProps} from '../../Models/interfaces'

export default class Pograms extends Component <ICallCloseProps,{}>{
    render() {

        const disabledLink={
            pointerEvents: "none",
          //  cursor:"default"
        } as any;
        
        
        return (
            <div className={styles.program}>
                <div className={styles.submenu}>
                    <a href={GlobalData.noLink} onClick={this.props.CallClose} >
                        <h2>Collaborations</h2>
                        <p>Contribute your ideas to online challenges and develop best-in-class solutions.</p>
                    </a>
                </div>
                <div className={styles.submenu}>
                    <a href={GlobalData.noLink} onClick={this.props.CallClose}>
                        <h2>Chapters</h2>
                        <p>Activate and sustain a culture of creative leadership throughout your
                            district or region.</p>
                    </a>
                </div>
            </div>
        )
    }
}

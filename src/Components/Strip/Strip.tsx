import React, {Component} from 'react'
import styles from './Strip.module.scss'

interface IProps {
    bgImg: string;
    caption: string;
    height: number;
    children: any;
}

interface IState {
}

export default class Strip extends Component <IProps,
    IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <div
                    className={styles.Strip}
                    style={{
                        backgroundImage: `url('` + this.props.bgImg + `')`,
                        height: this.props.height
                    }}>
                    <div className={styles.caption}>
                        {this.props.caption}</div>
                </div>
                <div className={styles.insideDIV}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}
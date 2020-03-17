import React, {Component} from 'react'
import styles from './Card.module.scss';

interface IProps {
    cardIMG : string
    job : string
    name : string
    text : string
}

interface IState {
    cardIMG : string
    job : string
    name : string
    text : string
}

export default class Card extends Component < IProps,
IState > {
    constructor(props : any) {
        super(props);
        this.state = {
            cardIMG: this.props.cardIMG,
            job: this.props.job,
            name: this.props.name,
            text: this.props.text
        };
    }
    componentDidMount() {}

    render() {
        return (
            <div className={styles.Card}>
                <div
                    className={styles.cardIMG}
                    style={{
                    backgroundImage: this.state.cardIMG
                }}/>
                <div className={styles.CardBody}>
                    <h4>{this.state.job}</h4>
                    <h2>{this.state.name}</h2>
                    <p>{this.state.text}</p>
                </div>
            </div>
        )
    }
}

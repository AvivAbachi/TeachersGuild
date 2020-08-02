import React, {Component} from 'react';
import styles from './Card.module.scss';
import {Col} from 'reactstrap';

interface IProps {
  cardIMG: string;
  job: string;
  name: string;
  text: string;
}

interface IState {
  cardIMG: string;
  job: string;
  name: string;
  text: string;
}

export default class Card extends Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      cardIMG: this.props.cardIMG,
      job: this.props.job,
      name: this.props.name,
      text: this.props.text,
    };
  }

  componentDidMount() {}

  render() {
    return (
      <Col md={4} sm={6} xs={12}>
        <div className={styles.Card}>
          <div
            className={styles.cardIMG}
            style={{
              backgroundImage: `url( ${this.props.cardIMG} )`,
            }}
          />
          <div className={styles.CardBody}>
            <h5>{this.props.job}</h5>
            <h2>{this.props.name}</h2>
            <p>{this.props.text}</p>
          </div>
        </div>
      </Col>
    );
  }
}

import React, {Component} from 'react';
import styles from './CardLink.module.scss';
import GlobalData from '../../Services/GlobalData';
import {Col} from 'reactstrap';

interface IProps {
  src?: string;
  title?: string;
  text?: string;
}

interface IState {
  src?: string;
  title?: string;
  text?: string;
}

export default class Card extends Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      src: this.props.src ? `url(${this.props.src})` : '#fff',
      title: this.props.title ? this.props.title : 'Title',
      text: this.props.text ? this.props.text : 'text',
    };
  }

  render() {
    return (
      <Col>
        <a href={GlobalData.noLink} className={styles.CardBody}>
          <div className={styles.CardOver}>
            <div className={styles.CardIMG} style={{background: this.state.src}} />
          </div>
          <div className={styles.CardText}>
            <h2>{this.state.title}</h2>
            <p>{this.state.text}</p>
          </div>
        </a>
      </Col>
    );
  }
}

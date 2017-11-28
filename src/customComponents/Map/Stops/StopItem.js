/*eslint-disable*/
import React, { Component } from 'react';

import styles from "./StopItem.css";


export default class StopItem extends Component {
  handleOnClick = () => {
    this.props.store.removeStop(this.props.stop.id);
  }
  render() {
    return (
      <div className={styles.stopItem} onClick={this.handleOnClick}>
        {this.props.stop.name}
      </div>
    );
  }
}
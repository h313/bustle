import React, { Component } from 'react';
import {observer} from 'mobx-react';

import StopItem from './StopItem';

import styles from './StopList.css';

@observer
export default class StopList extends Component {
  render() {
    return (
      <div className={styles.stopList}>
        <h1>bus stops:</h1>
        {this.props.stops.map(stop =>
          <StopItem stop={stop} key={stop.id} />
        )}
      </div>
    );
  }
}

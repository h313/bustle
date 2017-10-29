import React, { Component } from 'react';
import {observer} from 'mobx-react';

import StopItem from './StopItem';

import styles from './StopList.css';

@observer
export default class StopList extends Component {
  render() {
    const store = this.props.store;
    return (      
      <div className={styles.stopList}>
        <h1>bus stops:</h1>
        {store.stops.map(stop =>
          <StopItem stop={stop} store={store} key={stop.id} />
        )}
      </div>
    );
  }
}

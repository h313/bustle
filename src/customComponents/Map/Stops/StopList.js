import React, { Component } from 'react';

import StopItem from './StopItem';

import styles from './StopList.css';

export default class StopList extends Component {
  render() {
    const store = this.props.store;
    return (      
      <div className={styles.stopList}>
        <h1>Bus Stops:</h1>
        {store.stops.map(stop =>
          <StopItem stop={stop} store={store} key={stop.id} />
        )}
      </div>
    );
  }
}

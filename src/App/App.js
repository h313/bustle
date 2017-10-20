import React, { Component } from 'react';
import {observer} from 'mobx-react';

import Map from './components/Map/Map';

import styles from './App.css';

@observer
class App extends Component {
  render() {
    const store = this.props.store
    return (
      <div>
        <Map view={store.view}/>
        <div className={styles.info}>
          <p>LAT: {store.view.lat}</p>
          <p>LON: {store.view.lng}</p>
          <p>ZOOM: {store.view.zoom}</p>
        </div>
      </div>
    );
  }
}

export default App;

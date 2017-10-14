import React, { Component } from 'react';
import {observer} from 'mobx-react';
import ReactMapGL from 'react-map-gl';

import styles from './App.css';

@observer
class App extends Component {
  render() {
    return (
      <div>
        <ReactMapGL
          width={400}
          height={400}
          latitude={this.props.store.latitude}
          longitude={this.props.store.longitude}
          zoom={this.props.store.zoom}
          onViewportChange={(viewport) => {
            const {latitude, longitude, zoom} = viewport;
            this.props.store.setView(latitude, longitude, zoom);
          }}
        />
        <div className={styles.info}>
          <p>lat: {this.props.store.latitude}</p>
          <p>lon: {this.props.store.longitude}</p>
          <p>zoom: {this.props.store.zoom}</p>
        </div>
      </div>
    );
  }
}

export default App;

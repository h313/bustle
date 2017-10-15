import React, { Component } from 'react';
import {observer} from 'mobx-react';
import ReactMapGL from 'react-map-gl';

import streetStyle from './map-style.json';
import styles from './App.css';

@observer
class App extends Component {
  componentDidMount() {
    window.addEventListener('resize', this._resize);
    this._resize();
  }

  _resize = () => {
    this.props.store.setSize(
      window.innerWidth,
      window.innerHeight
    )
  };
  render() {
    return (
      <div>
        <ReactMapGL
          mapStyle={streetStyle}
          width={this.props.store.width}
          height={this.props.store.height}
          latitude={this.props.store.latitude}
          longitude={this.props.store.longitude}
          zoom={this.props.store.zoom}
          onViewportChange={(viewport) => {
            const {latitude, longitude, zoom} = viewport;
            this.props.store.setView(latitude, longitude, zoom);
          }}
        />
        <div className={styles.info}>
          <p>LAT: {this.props.store.latitude.toFixed(2)}</p>
          <p>LON: {this.props.store.longitude.toFixed(2)}</p>
          <p>ZOOM: {this.props.store.zoom.toFixed(2)}</p>
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import {observer} from 'mobx-react';
import mapboxgl from 'mapbox-gl';

import styles from './Map.css';

@observer
export default class Map extends Component {
  componentDidMount() {
    const view = this.props.view;
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [view.lng, view.lat],
      zoom: view.zoom
    });

    map.on('move', () => {
      const { lng, lat } = map.getCenter();
      const zoom = map.getZoom();

      view.setView(lng.toFixed(4), lat.toFixed(4), zoom.toFixed(2));
    });
  }

  componentWillUnmount() {
    this.map.remove();
  }

  render() {
    return (
      <div
        ref={el => this.mapContainer = el}
        className={styles.map}
      />
    );
  }
}

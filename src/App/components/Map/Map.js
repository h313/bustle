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
      style: 'mapbox://styles/mapbox/streets-v9?optimize=true',
      center: [view.lng, view.lat],
      zoom: view.zoom
    });

    map.on('move', () => {
      const { lng, lat } = map.getCenter();
      const zoom = map.getZoom();

      view.setView(lng.toFixed(4), lat.toFixed(4), zoom.toFixed(2));
    });

    map.on('load', function () {
      map.addLayer({
        "id": "route",
        "type": "line",
        "source": {
          "type": "geojson",
          "data": {
            "type": "Feature",
            "properties": {},
            "geometry": {
              "type": "LineString",
              "coordinates": [
                [-75.5624, 39.7419],
                [-75.5619, 39.7426],
                [-75.5604, 39.7427],
                [-75.5603, 39.7429],
                [-75.5601, 39.7432],
                [-75.5612, 39.7437],
                [-75.5608, 39.7443],
                [-75.5619, 39.7447],
                [-75.5616, 39.7451],
                [-75.5605, 39.7447],
                [-75.5603, 39.7450],
                [-75.5614, 39.7454],
                [-75.5625, 39.7459],
                [-75.5653, 39.7471],
                [-75.5662, 39.7457],
                [-75.5653, 39.7454],
                [-75.5660, 39.7443],
                [-75.5652, 39.7439],
              ]
            }
          }
        },
        "layout": {
            "line-join": "round",
            "line-cap": "round"
        },
        "paint": {
            "line-color": "#4286f4",
            "line-width": 8
        }
      });
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

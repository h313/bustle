/* eslint-disable no-undef */
import React, { Component } from 'react';
import {observer} from 'mobx-react';

import { Marker } from 'react-google-maps';

@observer
export default class Markers extends Component {
  render() {
    const stops = this.props.store.stops;
    return stops.map(stop =>
      <Marker
        position={{
          lat: stop.location.lat,
          lng: stop.location.lng
        }}
        key={stop.id}
      />
    );
  }
}

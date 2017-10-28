import React, { Component } from 'react';
import {observer} from 'mobx-react';

import { Marker } from 'react-google-maps';

@observer
export default class Markers extends Component {
  render() {
    return this.props.stops.map(stop =>
      <Marker position={{lat: stop.lat, lng: stop.lng}} key={stop.id}/>
    );
  }
}

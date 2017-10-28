import React, { Component } from 'react';
import {observer} from 'mobx-react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
} from 'react-google-maps';

import Markers from "./Markers";
import Search from "./Search";
import StopList from "./Stops/StopList";

@observer
@withScriptjs
@withGoogleMap
export default class Map extends Component {
  onClick = (e) => {
    const lat = e.latLng.lat();
    const lng = e.latLng.lng();
    this.props.store.pushStop(lat, lng);
  }

  render() {
    return (
      <GoogleMap
        defaultZoom={11}
        defaultCenter={{lat: 39.659, lng: -75.566}}
        onClick={this.onClick}
      >
        <Search store={this.props.store} />
        <StopList stops={this.props.store.stops} />
        <Markers stops={this.props.store.stops} />
      </GoogleMap>
    );
  }
}

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
import Directions from "./Directions";

@observer
@withScriptjs
@withGoogleMap
export default class Map extends Component {
  render() {
    return (
      <GoogleMap
        defaultZoom={11}
        defaultCenter={{lat: 39.659, lng: -75.566}}
      >
        <Search store={this.props.store} />
        <StopList store={this.props.store} />
        <Markers store={this.props.store} />
        <Directions store={this.props.store} />
      </GoogleMap>
    );
  }
}

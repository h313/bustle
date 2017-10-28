import React, { Component } from 'react';
import {observer} from 'mobx-react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
} from 'react-google-maps';


@observer
@withScriptjs
@withGoogleMap
export default class Map extends Component {
  onClick = (e) => {
    const lat = e.latLng.lat();
    const lng = e.latLng.lng();
    console.log({lat, lng});
    this.props.store.pushStop(lat, lng);
  }

  render() {
    return (
      <GoogleMap
        defaultZoom={11}
        defaultCenter={{lat: 39.659, lng: -75.566}}
        onClick={this.onClick}
      >
        {this.props.children}
      </GoogleMap>
    );
  }
}

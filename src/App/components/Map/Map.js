/* eslint-disable no-undef */
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
  handleClick = (e) => {
    const store = this.props.store;
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({'location': e.latLng},
      (results, status) => {
        if (status === 'OK') {
          const place = results[0];
          store.pushStop({
            id: place.place_id,
            name: place.formatted_address,
            location: {
              lat: place.geometry.location.lat(),
              lng: place.geometry.location.lng()
            }
          })   
        }
      }
    )
  }
  render() {
    return (
      <GoogleMap
        defaultZoom={11}
        defaultCenter={{lat: 39.659, lng: -75.566}}
        onClick={this.handleClick}
      >
        <Search store={this.props.store} />
        <StopList store={this.props.store} />
        <Markers store={this.props.store} />
        <Directions store={this.props.store} />
      </GoogleMap>
    );
  }
}

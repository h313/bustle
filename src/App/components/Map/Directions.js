/* eslint-disable no-undef */
import React, { Component } from 'react';
import {observer} from 'mobx-react';

import { DirectionsRenderer } from 'react-google-maps';

@observer
export default class Markers extends Component {
  constructor() {
    super();
    this.state = {
      directions: null
    }
  }
  render() {
    const stops = this.props.store.stops;

    if (stops.length <= 1) {
      return null;
    }

    const DirectionsService = new google.maps.DirectionsService();
    DirectionsService.route({
      origin: stops[0].location,
      waypoints: stops.slice(1, -1).map(stop => ({location: stop.location})),
      destination: stops[stops.length - 1].location,
      travelMode: google.maps.TravelMode.DRIVING,
    },
    (result, status) => {
      if (status === google.maps.DirectionsStatus.OK) {
        this.setState({directions: result});
      } else {
        console.error(`error fetching directions ${result}`);
      }
    });
    return (
      this.state.directions &&
      <DirectionsRenderer
        directions={this.state.directions}
      />
    );
  }
}

/* eslint-disable */
import React, { Component } from 'react';
import { toJS } from 'mobx';

import { DirectionsRenderer } from 'react-google-maps';

export default class Markers extends Component {
  render() {
    const store = this.props.store;
    return (
      store.stops.length >= 2 &&
      <DirectionsRenderer directions={toJS(store.directions)} />
    );
  }
}
/* eslint-disable no-undef */
import React, { Component } from 'react';
import {observer} from 'mobx-react';
import { toJS } from 'mobx';

import { DirectionsRenderer } from 'react-google-maps';

@observer
export default class Markers extends Component {
  render() {
    const store = this.props.store;
    return (
      store.stops.length >= 2 &&
      <DirectionsRenderer directions={toJS(store.directions)} />
    );
  }
}


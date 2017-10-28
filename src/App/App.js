import React, { Component } from 'react';
import {observer} from 'mobx-react';
import { Marker } from 'react-google-maps';

import Map from './components/Map/Map';


@observer
class App extends Component {
  render() {
    return (
      <Map
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyDKDSuafvrYU87Yp5NUzFw_8allS4GRT5k"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100vh` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        store={this.props.store}
      >
        {this.props.store.stops.map((stop) =>
          <Marker position={{lat: stop.lat, lng: stop.lng}} key={stop.id}/>
        )}
      </Map>
    );
  }
}

export default App;

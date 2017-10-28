import React, { Component } from 'react';
import {observer} from 'mobx-react';

import Map from './components/Map/Map';


@observer
class App extends Component {
  render() {
    return (
      <Map
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=places&key=AIzaSyDKDSuafvrYU87Yp5NUzFw_8allS4GRT5k"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100vh` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        store={this.props.store}
      />
    );
  }
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { useStrict, observable, action } from 'mobx';

useStrict(true);

const appState = observable({
  latitude: 37.7577,
  longitude: -122.4376,
  zoom: 8,
});

appState.setView = action(function(lat, lon, zoom) {
  this.latitude = lat;
  this.longitude = lon;
  this.zoom = zoom;
});

ReactDOM.render(<App store={appState} />, document.getElementById('root'));
registerServiceWorker();

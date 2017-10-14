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
  width: window.innerWidth,
  height: window.innerHeight
});

appState.setView = action(function(lat, lon, zoom) {
  this.latitude = lat;
  this.longitude = lon;
  this.zoom = zoom;
});

appState.setSize = action(function(width, height) {
  this.width = width;
  this.height = height;
});

ReactDOM.render(<App store={appState} />, document.getElementById('root'));
registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import registerServiceWorker from './registerServiceWorker';
import { useStrict, observable, action } from 'mobx';
import mapboxgl from 'mapbox-gl';

useStrict(true);
mapboxgl.accessToken = 'pk.eyJ1IjoidmVnZ2llZGVmZW5kZXIiLCJhIjoiY2o4ajJhenA4MTl0OTMybDliaGJ4ODQzZiJ9.NZW7Mbl82OFrTOK9l9nN8Q'

const appState = observable({
  view: {
    lat: 39.7444,
    lng: -75.5690,
    zoom: 12.95
  }
});

appState.view.setView = action(function(lng, lat, zoom) {
  this.lng = lng;
  this.lat = lat;
  this.zoom = zoom;
});

ReactDOM.render(<App store={appState} />, document.getElementById('root'));
registerServiceWorker();

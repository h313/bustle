/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import registerServiceWorker from './registerServiceWorker';
import { useStrict, reaction, observable, action } from 'mobx';

useStrict(true);

const appState = observable({
  stops: [],
  directions: {}
});

appState.pushStop = action(function(stop) {
  this.stops.push(stop);
});

appState.removeStop = action(function(id) {
  this.stops = this.stops.filter(stop => stop.id !== id);
});

appState.setDirections = action(function(directions) {
  this.directions = directions;
});

// eslint-disable-next-line
const getDirections = reaction(
  () => appState.stops.map((stop) => ({
    lat: stop.location.lat,
    lng: stop.location.lng
  })),
  (locations) => {
    if (locations.length < 2) {
      return;
    }
    const DirectionsService = new google.maps.DirectionsService();
    const query = {
      origin: locations[0],
      destination: locations[locations.length - 1],
      waypoints: locations.slice(1, -1).map(stop => ({location: stop})),
      optimizeWaypoints: true,
      travelMode: google.maps.TravelMode.DRIVING,
    }

    DirectionsService.route(query, (result, status) => {
      if (status === google.maps.DirectionsStatus.OK) {
        appState.setDirections(observable(result));
      }
    });
  }
);

ReactDOM.render(<App store={appState} />, document.getElementById('root'));
registerServiceWorker();

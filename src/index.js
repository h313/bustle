import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import registerServiceWorker from './registerServiceWorker';
import { useStrict, observable, action } from 'mobx';

useStrict(true);

const appState = observable({
  stops: [
    {
      id: 0,
      lat: -34.397,
      lng: 150.644
    }
  ]
});

appState.pushStop = action(function(lat, lng) {
  this.stops.push({
    id: this.stops.length,
    lat: lat,
    lng: lng
  });
});

ReactDOM.render(<App store={appState} />, document.getElementById('root'));
registerServiceWorker();

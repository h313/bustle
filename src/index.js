import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import registerServiceWorker from './registerServiceWorker';
import { useStrict, observable, action } from 'mobx';

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

ReactDOM.render(<App store={appState} />, document.getElementById('root'));
registerServiceWorker();

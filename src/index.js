import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {observable, action} from 'mobx';

const appState = observable({
  timer: 0,
});

appState.resetTimer = action(() => appState.timer = 0);

setInterval(action(() =>
  appState.timer += 1
), 1000);

ReactDOM.render(<App appState={appState} />, document.getElementById('root'));
registerServiceWorker();

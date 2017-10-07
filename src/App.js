import React, { Component } from 'react';
import {observer} from 'mobx-react';

import styles from './App.css';

const App = observer(class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <p>Seconds passed: {this.props.appState.timer}</p>
        <button onClick={this.onReset.bind(this)}>reset</button>
      </div>
    );
  }

  onReset() {
    this.props.appState.resetTimer();
  }
});

export default App;

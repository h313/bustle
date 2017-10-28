import React, { Component } from 'react';
import {observer} from 'mobx-react';


@observer
export default class StopItem extends Component {
  render() {
    return (
      <div>
        {this.props.stop.name}
      </div>
    );
  }
}

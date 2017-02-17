import React, { Component } from 'react';
import ColorAndSize from './ColorAndSize';
import {Test} from './ColorAndSize';

console.log(Test);

export default class App extends Component {
  render() {
    return (
      <div>
        <div>{Test}</div>
        <ColorAndSize color="red" size="40px"></ColorAndSize>
      </div>
    );
  }
}

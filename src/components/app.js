import React from 'react';
import { Component } from 'react';
import Board from './board';

export default class App extends Component {
  render() {
    return (
      <div>
        <Board rookPosition={[0, 0]} />
      </div>
    );
  }
}

import React, { Component } from 'react';

export default class EmptyCell extends Component {
  render() {
    return (
      <span style={{
          fontSize: 25,
          fontWeight: 'bold'
        }}>
        O
      </span>
    );
  }
}

import React, { Component, PropTypes } from 'react';
import Square from './square';
import Rook from './rook';
import EmptyCell from './empty_cell';
import { canMoveRook, moveRook } from './game';

export default class Board extends Component {
  renderSquare(i) {
    const x = i % 8;
    const y = Math.floor(i / 8);
    const black = (x + y) % 2 === 1;

    const [rookX, rookY] = this.props.rookPosition;
    const piece = (x === rookX && y === rookY) ? <Rook /> : <EmptyCell />;

    return (
      <div key={i} style={{ width: '12.5%', height: '12.5%' }}
        onClick={() => this.handleSquareClick(x, y)}>
        <Square black={black}>
          {piece}
        </Square>
      </div>
    )
  }

  handleSquareClick(toX, toY) {
    if (canMoveRook(toX, toY)) {
      moveRook(toX, toY);
    }
  }

  render() {
    const squares = [];
    for (let i=0; i<64; i++) {
      squares.push(this.renderSquare(i));
    }

    return (
      <div style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexWrap: 'wrap'
      }}>
        {squares}
      </div>
    );
  }
}

Board.propTypes = {
  rookPosition: PropTypes.arrayOf(
    PropTypes.number.isRequired
  ).isRequired
};

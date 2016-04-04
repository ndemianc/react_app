import React, { Component, PropTypes } from 'react';
import Square from './square';
import Rook from './rook';
import EmptyCell from './empty_cell';
import { canMoveRook, moveRook } from './game';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import BoardSquare from './board_square';

class Board extends Component {
  renderSquare(i) {
    const x = i % 8;
    const y = Math.floor(i / 8);

    return (
      <div key={i} style={{ width: '12.5%', height: '12.5%' }}>
        <BoardSquare x={x}
          y={y}>
          {this.renderPiece(x, y)}
        </BoardSquare>
      </div>
    );
  }

  renderPiece(x, y) {
    const [rookX, rookY] = this.props.rookPosition;
    if (x === rookX && y === rookY) {
      return <Rook />;
    } else {
      return <EmptyCell />;
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

export default DragDropContext(HTML5Backend)(Board);

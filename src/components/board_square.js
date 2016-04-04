import React, { Component, PropTypes} from 'react';
import Square from './square';
import { canMoveRook, moveRook } from './game';
import { ItemTypes } from '../constants/items_types';
import { DropTarget } from 'react-dnd';

class BoardSquare extends Component {
  render() {
    const { x, y, connectDropTarget, isOver } = this.props;
    const black = (x + y) % 2 === 1;

    return connectDropTarget(
      <div style={{
          position: 'relative',
          width: '100%',
          height: '100%'
        }}>
        <Square black={black}>
          {this.props.children}
        </Square>
        {isOver &&
          <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              height: '100%',
              width: '100%',
              zIndex: 1,
              opacity: 0.5,
              backgroundColor: 'yellow'
            }}/>
        }
      </div>
    );
  }
}

const squareTarget = {
  drop(props, monitor) {
    moveRook(props.x, props.y);
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  }
}

BoardSquare.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  isOver: PropTypes.bool.isRequired
}

export default DropTarget(ItemTypes.ROOK, squareTarget, collect)(BoardSquare);

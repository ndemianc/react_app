let rookPosition = [0, 0];
let observer = null;

function emitChange() {
  observer(rookPosition);
}

export function observe(o) {
  if (observer) {
    throw new Error('Multiple observers not implemented.');
  }

  observer = o;
  emitChange();
}

export function moveRook(toX, toY) {
  rookPosition = [toX, toY];
  emitChange();
}

export function canMoveRook(toX, toY) {
  const [x ,y] = rookPosition;
  const dx = toX - x;
  const dy = toY - y;

  return (Math.abs(dx) > 0 && dy === 0) || (dx === 0 && Math.abs(dy) > 0);
}

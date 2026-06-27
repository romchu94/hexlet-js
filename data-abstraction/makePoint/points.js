const makePoint = (x, y) => {
  const point = {
    angle: Math.atan2(y, x),
    radius: Math.sqrt(x ** 2 + y ** 2),
  };

  return point;
};

// BEGIN (write your solution here)
const getX = (point) => Math.round(point.radius * Math.cos(point.angle));
const getY = (point) => Math.round(point.radius * Math.sin(point.angle));
// END

const myPoint = makePoint(4, 8);
console.log(getX(myPoint));
console.log(getY(myPoint));

export { makePoint, getX, getY };

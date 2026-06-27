const getMidPoint = (point1, point2) => {
  return {
    x: (point1.x + point2.x) / 2,
    y: (point1.y + point2.y) / 2,
  };
};

export default getMidPoint;

console.log(getMidPoint({ x: 0, y: 0 }, { x: 4, y: 4 }));

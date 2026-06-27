const calculateDistance = (point1, point2) => {
  return Math.sqrt((point2[0] - point1[0]) ** 2 + (point2[1] - point1[1]) ** 2);
};

console.log(calculateDistance([0, 0], [3, 4]));

export default calculateDistance;

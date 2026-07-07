function Segment(beginPoint, endPoint) {
  this.beginPoint = beginPoint;
  this.endPoint = endPoint;
}

Segment.prototype.getBeginPoint = function () {
  return this.beginPoint;
};
Segment.prototype.getEndPoint = function () {
  return this.endPoint;
};

export default Segment;

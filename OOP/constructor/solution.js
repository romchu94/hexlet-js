import Point from "./point.js";
import Segment from "./segment.js";

const reverse = (segment) => {
  const startPoint = segment.getBeginPoint();
  const endPoint = segment.getEndPoint();

  const startX = startPoint.getX();
  const startY = startPoint.getY();

  const endX = endPoint.getX();
  const endY = endPoint.getY();

  const newStartPoint = new Point(endX, endY);
  const newEndPoint = new Point(startX, startY);

  return new Segment(newStartPoint, newEndPoint);
};

export default reverse;

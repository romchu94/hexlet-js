import { makeDecartPoint, getX, getY } from "./points.js";

const makeSegment = (point1, point2) => {
  return {
    beginPoint: point1,
    endPoint: point2,
  };
};

const getBeginPoint = (segment) => segment.beginPoint;
const getEndPoint = (segment) => segment.endPoint;

const getMidpointOfSegment = (segment) => {
  const start = getBeginPoint(segment);
  const end = getEndPoint(segment);

  const midX = (getX(start) + getX(end)) / 2;
  const midY = (getY(start) + getY(end)) / 2;

  return makeDecartPoint(midX, midY);
};

export { makeSegment, getBeginPoint, getEndPoint, getMidpointOfSegment };

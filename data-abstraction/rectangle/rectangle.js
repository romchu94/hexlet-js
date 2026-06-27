// @ts-check
// eslint-disable-next-line
import { makeDecartPoint, getX, getY, getQuadrant } from "./points.js";

// BEGIN (write your solution here)

const makeRectangle = (point, width, height) => {
  return {
    startPoint: point,
    width: width,
    height: height,
  };
};
const getStartPoint = (rectangle) => rectangle.startPoint;
const getWidth = (rectangle) => rectangle.width;
const getHeight = (rectangle) => rectangle.height;

const containsOrigin = (rectangle) => {
  // Получаем верхнюю левую точку через селектор прямоугольника
  const startPoint = getStartPoint(rectangle);
  // Получаем x и y этой точки через селекторы точки
  const x1 = getX(startPoint);
  const y1 = getY(startPoint);
  // Вычисляем противоположные границы
  const x2 = x1 + getWidth(rectangle);
  const y2 = y1 - getHeight(rectangle);
  // Проверяем, находится ли 0 внутри этих границ
  return x1 < 0 && x2 > 0 && y2 < 0 && y1 > 0;
};

const p = makeDecartPoint(-4, 3);
const rectangle = makeRectangle(p, 4, 5);
console.log(getWidth(rectangle));
console.log(getHeight(rectangle));
console.log(containsOrigin(rectangle));

export { makeRectangle, getStartPoint, getWidth, getHeight, containsOrigin };

// END

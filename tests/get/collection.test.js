import getFunction from "./functions.js";

const get = getFunction();

if (get({ hello: "world" }, "hello") !== "world") {
  throw new Error("Функция сломалась на обычном ключе");
}

if (get({ hello: "world" }, "hello", "kitty") !== "world") {
  throw new Error("дефолт переписал существующее значение ключа");
}

if (get({}, "hello", "kitty") !== "kitty") {
  throw new Error("Функция не вернула дефолтное значение для пустого объекта");
}

console.log("Все тесты локально прошли успешно!");

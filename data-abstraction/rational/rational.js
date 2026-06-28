import getGcd from "./utils.js";

// Конструктор makeRational() - принимает на вход числитель и знаменатель, возвращает дробь в виде объекта.
// Селектор getNumer() - возвращает числитель
// Селектор getDenom() - возвращает знаменатель
// Сложение add() - складывает переданные дроби
// Вычитание sub() - находит разность между двумя дробями

// BEGIN (write your solution here)
const makeRational = (numer, denom) => {
  const gcd = getGcd(numer, denom);
  const finalNumer = denom < 0 ? -numer / gcd : numer / gcd;
  const finalDenom = denom < 0 ? -denom / gcd : denom / gcd;
  return {
    numer: finalNumer,
    denom: finalDenom,
  };
};

const getNumer = (rat) => rat.numer;
const getDenom = (rat) => rat.denom;

const add = (rat1, rat2) => {
  const num = getNumer(rat1) * getDenom(rat2) + getDenom(rat1) * getNumer(rat2);
  const den = getDenom(rat1) * getDenom(rat2);
  return makeRational(num, den);
};

const sub = (rat1, rat2) => {
  const num = getNumer(rat1) * getDenom(rat2) - getDenom(rat1) * getNumer(rat2);
  const den = getDenom(rat1) * getDenom(rat2);
  return makeRational(num, den);
};

// END

const ratToString = (rat) => `${getNumer(rat)}/${getDenom(rat)}`;

console.log(makeRational(3, 9));

export { makeRational, getNumer, getDenom, add, sub, ratToString };

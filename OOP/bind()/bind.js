const bind = (obj, fn) => {
  return (...args) => {
    return fn.apply(obj, args);
  };
};

const user = { name: "Roma" };
const greet = function (greeting, punctuation) {
  return `${greeting}, ${this.name}${punctuation}`;
};
const boundGreet = bind(user, greet);

console.log(boundGreet("Hello", "!"));

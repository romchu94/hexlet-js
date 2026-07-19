const solution = (arg) => {
  const obj = {
    value: arg,
  };

  obj.toString = function () {
    return `Value is ${this.value}`;
  };
  return obj;
};

export default solution;

console.log(solution(1) + "");
console.log(solution("some text") + "");

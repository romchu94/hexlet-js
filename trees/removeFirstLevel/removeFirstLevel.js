// const removeFirstLevel = (arr) => {
//   const resArr = [];
//   for (const arrElement of arr) {
//     if (Array.isArray(arrElement)) {
//       resArr.push(arrElement);
//     }
//   }
//   return resArr.flat();
// };

const removeFirstLevel = (arr) => arr.filter(Array.isArray).flat();

console.log(removeFirstLevel([1, 2, [3, 5], [[4, 3], 2]]));

export default removeFirstLevel;

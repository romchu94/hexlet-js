const students = [
  { name: "Tirion", class: "B", mark: 3 },
  { name: "Keit", class: "A", mark: 3 },
  { name: "Ramsey", class: "A", mark: 4 },
];

const groupBy = (students, property) => {
  return students.reduce((acc, item) => {
    const keyGroup = item[property];
    if (acc[keyGroup] === undefined) {
      acc[keyGroup] = [];
    }
    acc[keyGroup].push(item);
    return acc;
  }, {});
};

console.log(groupBy(students, "mark"));

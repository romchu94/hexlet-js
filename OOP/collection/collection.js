const each = (objects, callback) => {
  for (const items of objects) {
    callback.call(items);
  }
};

const objects = [{ name: "Karl" }, { name: "Mia" }];
each(objects, function callback() {
  this.name = this.name.split("").reverse().join("");
});

console.log(objects);

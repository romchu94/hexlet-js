import { sum } from "es-toolkit";
import * as fsTrees from "@hexlet/immutable-fs-trees";

const calculateDirSize = (tree) => {
  if (fsTrees.isFile(tree)) {
    return fsTrees.getMeta(tree).size;
  }
  const children = fsTrees.getChildren(tree);
  const sizes = children.map(calculateDirSize);
  return sum(sizes);
};

const du = (tree) => {
  const children = fsTrees.getChildren(tree);

  return children
    .map((child) => {
      const name = fsTrees.getName(child);
      const size = calculateDirSize(child);
      return [name, size];
    })
    .sort((a, b) => b[1] - a[1]);
};

export default du;

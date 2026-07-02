import { sum } from "es-toolkit";
import * as fsTrees from "@hexlet/immutable-fs-trees";

const getHiddenFilesCount = (tree) => {
  if (fsTrees.isFile(tree)) {
    return fsTrees.getName(tree).startsWith(".") ? 1 : 0;
  }

  const children = fsTrees.getChildren(tree);
  const descendantCounts = children.map(getHiddenFilesCount);
  return sum(descendantCounts);
};

export default getHiddenFilesCount;

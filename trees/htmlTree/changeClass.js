const changeClass = (tree, oldName, newName) => {
  const newTree = { ...tree };

  if (Object.hasOwn(tree, "className")) {
    newTree.className = tree.className === oldName ? newName : tree.className;
  }

  if (Object.hasOwn(tree, "children")) {
    newTree.children = tree.children.map((child) =>
      changeClass(child, oldName, newName),
    );
  }
  return newTree;
};

export default changeClass;

const findFilesByName = (tree, str) => {
  const iter = (node, currentpath) => {
    const name = fsTrees.getName(node); // первый вызов равен имени корня
    if (fsTrees.isFile(node)) {
      if (name.includes(str)) {
        const fullPath = ["", ...currentpath, name].join("/");
        return [fullPath];
      }
      return [];
    }

    const isRoot = fsTrees.getName(node) === "/";
    const newPath = isRoot ? currentpath : [...currentpath, name];

    const children = fsTrees.getChildren(node);

    return children.map((child) => iter(child, newPath)).flat();
  };
  return iter(tree, []);
};

export default findFilesByName;

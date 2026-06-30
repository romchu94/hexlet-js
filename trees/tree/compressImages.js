import { cloneDeep } from "es-toolkit/compat";

const compressImages = (tree) => {
  const children = fsTrees.getChildren(tree);

  const newChildren = children.map((child) => {
    if (fsTrees.isFile(child) && fsTrees.getName(child).endsWith(".jpg")) {
      const meta = fsTrees.getMeta(child);
      const newMeta = JSON.parse(JSON.stringify(meta));
      newMeta.size = meta.size / 2;
      return fsTrees.mkfile(fsTrees.getName(child), newMeta);
    }
    return child;
  });
  return fsTrees.mkdir(fsTrees.getName(tree), newChildren, {
    ...fsTrees.getMeta(tree),
  });
};

export default compressImages;

const tree = fsTrees.mkdir("my documents", [
  fsTrees.mkfile("avatar.jpg", { size: 100 }),
  fsTrees.mkfile("passport.jpg", { size: 200 }),
  fsTrees.mkfile("family.jpg", { size: 150 }),
  fsTrees.mkfile("addresses", { size: 125 }),
  fsTrees.mkdir("presentations"),
]);

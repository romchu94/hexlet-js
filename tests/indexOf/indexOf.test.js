import { strict as assert } from "assert";
import getFunction from "./functions.js";

const indexOf = getFunction();

assert.strictEqual(indexOf([2, 1], 2), 0);
assert.strictEqual(indexOf([1, 2, 1, 2], 2, 2), 3);
assert.strictEqual(indexOf([2, "one", "cat", false], 8), -1);
assert.strictEqual(indexOf([], 2), -1);
assert.strictEqual(indexOf([1, 2, 3], 1, 1), -1);

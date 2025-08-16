import { assert, map, number, string } from "../../src";
import { test } from "..";

test<Map<string, number>>((x) => {
  assert(x, map(string(), number()));
  return x;
});

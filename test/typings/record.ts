import { assert, number, record, string } from "../../src";
import { test } from "..";

test<Record<string, number>>((x) => {
  assert(x, record(string(), number()));
  return x;
});

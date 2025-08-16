import { assert, number, type } from "../../src";
import { test } from "..";

test<{ a: number }>((x) => {
  assert(x, type({ a: number() }));
  return x;
});

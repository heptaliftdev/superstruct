import { assert, number, object } from "../../src";
import { test } from "..";

test<{ a?: number }>((x) => {
  assert(x, object({ a: number() }));
  return x;
});

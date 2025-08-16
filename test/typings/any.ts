import { any, assert } from "../../src";
import { test } from "..";

test<any>((x) => {
  assert(x, any());
  return x;
});

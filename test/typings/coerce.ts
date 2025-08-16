import { assert, coerce, number, string } from "../../src";
import { test } from "..";

test<number>((x) => {
  assert(
    x,
    coerce(number(), string(), (x) => parseFloat(x))
  );
  return x;
});

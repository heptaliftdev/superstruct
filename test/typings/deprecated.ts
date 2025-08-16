import { any, assert, type Context, deprecated, object } from "../../src";
import { test } from "..";

test<unknown>((x) => {
  const log = (_value: unknown, _ctx: Context) => {};
  assert(x, deprecated(any(), log));
  return x;
});

test<{ a?: unknown }>((x) => {
  const log = (_value: unknown, _ctx: Context) => {};
  assert(x, object({ a: deprecated(any(), log) }));
  return x;
});

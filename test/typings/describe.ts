import {
  any,
  array,
  boolean,
  type Describe,
  date,
  empty,
  enums,
  func,
  integer,
  intersection,
  literal,
  map,
  max,
  min,
  never,
  nullable,
  number,
  object,
  optional,
  pattern,
  record,
  regexp,
  set,
  size,
  string,
  tuple,
  union,
  unknown,
} from "../../src";
import { test } from "..";

test<Describe<any>>((_x) => {
  return any();
});

test<Describe<Array<string>>>((_x) => {
  return array(string());
});

test<Describe<boolean>>((_x) => {
  return boolean();
});

test<Describe<Date>>((_x) => {
  return date();
});

test<Describe<string>>((_x) => {
  return empty(string());
});

test<Describe<"a" | "b" | "c">>((_x) => {
  return enums(["a", "b", "c"]);
});

test<Describe<1 | 2 | 3>>((_x) => {
  return enums([1, 2, 3]);
});

test<Describe<Function>>((_x) => {
  return func();
});

test<Describe<number>>((_x) => {
  return integer();
});

test<Describe<string & number>>((_x) => {
  return intersection([string(), number()]);
});

test<Describe<false>>((_x) => {
  return literal(false);
});

test<Describe<42>>((_x) => {
  return literal(42);
});

test<Describe<"test">>((_x) => {
  return literal("test");
});

test<Describe<Map<string, number>>>((_x) => {
  return map(string(), number());
});

test<Describe<number>>((_x) => {
  return max(integer(), 0);
});

test<Describe<number>>((_x) => {
  return min(integer(), 0);
});

test<Describe<never>>((_x) => {
  return never();
});

test<Describe<string | null>>((_x) => {
  return nullable(string());
});

test<Describe<number>>((_x) => {
  return number();
});

test<Describe<{ name: string }>>((_x) => {
  return object({ name: string() });
});

test<Describe<{ name?: string }>>((_x) => {
  return object({ name: optional(string()) });
});

test<Describe<string | undefined>>((_x) => {
  return optional(string());
});

test<Describe<string>>((_x) => {
  return pattern(string(), /\d+/);
});

test<Describe<Record<string, number>>>((_x) => {
  return record(string(), number());
});

test<Describe<RegExp>>((_x) => {
  return regexp();
});

test<Describe<Set<number>>>((_x) => {
  return set(number());
});

test<Describe<string>>((_x) => {
  return size(string(), 1, 100);
});

test<Describe<string>>((_x) => {
  return string();
});

test<Describe<[string]>>((_x) => {
  return tuple([string()]);
});

test<Describe<[string, number]>>((_x) => {
  return tuple([string(), number()]);
});

test<Describe<string | number>>((_x) => {
  return union([string(), number()]);
});

test<Describe<unknown>>((_x) => {
  return unknown();
});

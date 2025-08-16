import { number, partial, string } from "../../../src";

export const Struct = partial({
  name: string(),
  age: number(),
});

export const data = {
  name: "john",
  age: 42,
};

export const output = {
  name: "john",
  age: 42,
};

import { any, deprecated, number, type } from "../../../src";

export const Struct = type({
  name: deprecated(any(), () => {}),
  age: number(),
});

export const data = {
  age: 42,
};

export const output = {
  age: 42,
};

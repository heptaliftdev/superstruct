import { defaulted, number, string, union } from "../../../src";

const A = defaulted(string(), "foo");
const B = number();

export const Struct = union([A, B]);

export const data = undefined;

export const output = "foo";

export const create = true;

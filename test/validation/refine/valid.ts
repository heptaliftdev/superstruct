import isEmail from "is-email";
import { refine, string } from "../../../src";

export const Struct = refine(string(), "email", isEmail);

export const data = "name@example.com";

export const output = "name@example.com";

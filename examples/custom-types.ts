import {
  assert,
  define,
  type Infer,
  object,
  optional,
  string,
} from "@haiyami/hyperstruct";
import isEmail from "is-email";
import isUrl from "is-url";
import isUuid from "is-uuid";

// Define custom structs with validation functions.
const Uuid = define("Uuid", (value: unknown): value is string => {
  return typeof value === "string" && isUuid.v4(value);
});

const Url = define("Url", (value: unknown): value is string => {
  return typeof value === "string" && isUrl(value) && value.length < 2048;
});

const Email = define("Email", (value: unknown) => {
  if (typeof value !== "string") {
    return { code: "not_string" };
  }
  if (!isEmail(value)) {
    return { code: "not_email" };
  } else if (value.length >= 256) {
    return { code: "too_long" };
  } else {
    return true;
  }
});

// Define a struct to validate with.
const User = object({
  id: Uuid,
  name: string(),
  email: Email,
  website: optional(Url),
});

// TypeScript type inference
type UserType = Infer<typeof User>;

// Define data to be validated.
const data: unknown = {
  id: "c8d63140-a1f7-45e0-bfc6-df72973fea86",
  name: "Jane Smith",
  email: "jane@example.com",
  website: "https://jane.example.com",
};

// Validate the data. In this case the data is valid, so it won't throw.
assert(data, User);

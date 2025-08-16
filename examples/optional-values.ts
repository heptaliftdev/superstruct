import {
  assert,
  boolean,
  type Infer,
  object,
  optional,
  string,
} from "@haiyami/hyperstruct";

// Define a struct to validate with.
const User = object({
  name: string(),
  email: string(),
  is_admin: optional(boolean()),
});

type UserType = Infer<typeof User>;

// Define data to be validated.
const data: unknown = {
  name: "Jane Smith",
  email: "jane@example.com",
};

// Validate the data. In this case `is_admin` is optional, so it won't throw.
assert(data, User);

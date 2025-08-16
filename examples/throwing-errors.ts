import {
  assert,
  type Infer,
  number,
  object,
  string,
} from "@haiyami/hyperstruct";

// Define a struct to validate with.
const User = object({
  id: number(),
  name: string(),
  email: string(),
});

type UserType = Infer<typeof User>;

// Define data to be validated.
const data: unknown = {
  id: 1,
  name: true,
  email: "jane@example.com",
};

// Validate the data with the `validate` method. In this case the `name`
// property is invalid, so an error will be thrown.
assert(data, User);

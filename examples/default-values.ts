import {
  boolean,
  create,
  date,
  defaulted,
  type Infer,
  number,
  object,
  string,
} from "@haiyami/hyperstruct";

// Define an auto-incrementing unique id.
let uid: number = 1;

// Define a struct, with properties with default values.
const User = object({
  id: defaulted(number(), () => uid++),
  name: string(),
  email: string(),
  is_admin: defaulted(boolean(), false),
  created_at: defaulted(date(), () => new Date()),
});

// TypeScript type inference
type UserType = Infer<typeof User>;

// Define data to be validated.
const data: unknown = {
  name: "Jane Smith",
  email: "jane@example.com",
};

// Coerce the data during validation, using the struct's default values.
const user: UserType = create(data, User);
// {
//   id: 1,
//   name: 'Jane Smith',
//   email: 'jan@example.com',
//   age: 42,
//   is_admin: false,
//   created_at: Date,
// }

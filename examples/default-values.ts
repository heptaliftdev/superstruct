import * as h from "@haiyami/hyperstruct";

// Define an auto-incrementing unique id.
let uid: number = 1;

// Define a struct, with properties with default values.
const User = h.object({
  id: h.defaulted(h.number(), () => uid++),
  name: h.string(),
  email: h.string(),
  is_admin: h.defaulted(h.boolean(), false),
  created_at: h.defaulted(h.date(), () => new Date()),
});

// TypeScript type inference
type UserType = h.Infer<typeof User>;

// Define data to be validated.
const data: unknown = {
  name: "Jane Smith",
  email: "jane@example.com",
};

// Coerce the data during validation, using the struct's default values.
const user: UserType = h.create(data, User);
// {
//   id: 1,
//   name: 'Jane Smith',
//   email: 'jan@example.com',
//   age: 42,
//   is_admin: false,
//   created_at: Date,
// }

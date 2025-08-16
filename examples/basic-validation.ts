import * as h from "@haiyami/hyperstruct";

// Define a struct to validate with.
const User = h.object({
  id: h.number(),
  name: h.string(),
  email: h.string(),
  age: h.number(),
  departments: h.array(h.string()),
  is_admin: h.optional(h.boolean()),
});

// TypeScript type inference
type UserType = h.Infer<typeof User>;

// Define data to be validated.
const data: unknown = {
  id: 1,
  name: "Jane Smith",
  email: "jane@example.com",
  age: 42,
  departments: ["engineering", "product"],
};

// Validate the data. In this case, the data is valid, so it won't throw.
h.assert(data, User);

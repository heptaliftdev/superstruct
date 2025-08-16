import * as h from "@haiyami/hyperstruct";

// Define a struct to validate with.
const User = h.object({
  name: h.string(),
  email: h.string(),
  is_admin: h.optional(h.boolean()),
});

type UserType = h.Infer<typeof User>;

// Define data to be validated.
const data: unknown = {
  name: "Jane Smith",
  email: "jane@example.com",
};

// Validate the data. In this case `is_admin` is optional, so it won't throw.
h.assert(data, User);

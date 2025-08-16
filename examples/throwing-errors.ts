import * as h from "@haiyami/hyperstruct";

// Define a struct to validate with.
const User = h.object({
  id: h.number(),
  name: h.string(),
  email: h.string(),
});

type UserType = h.Infer<typeof User>;

// Define data to be validated.
const data: unknown = {
  id: 1,
  name: true,
  email: "jane@example.com",
};

// Validate the data with the `validate` method. In this case the `name`
// property is invalid, so an error will be thrown.
h.assert(data, User);

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
// property is invalid, so an error will be returned.
const [error, user] = h.validate(data, User);
// [
//   StructError: 'Expected a value of type "string" for `name` but received `false`.' {
//     type: 'string',
//     value: false,
//     path: ['name'],
//     branch: [{...}, false],
//     failures: [...],
//   },
//   undefined
// ]

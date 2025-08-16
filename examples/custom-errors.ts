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

// Validate the data. In this case the `name` property is invalid, so an error
// will be thrown that you can catch and customize to your needs.
try {
  h.assert(data, User);
} catch (e) {
  if (e instanceof h.StructError) {
    const { key, value, type } = e;

    if (value === undefined) {
      const error = new Error(`user_${key}_required`) as Error & {
        attribute: any;
      };
      error.attribute = key;
      throw error;
    }

    if (type === "never") {
      const error = new Error(`user_attribute_unknown`) as Error & {
        attribute: any;
      };
      error.attribute = key;
      throw error;
    }

    const error = new Error(`user_${key}_invalid`) as Error & {
      attribute: any;
      value: any;
    };
    error.attribute = key;
    error.value = value;
    throw error;
  }

  throw e;
}

// Error: 'user_name_invalid' {
//   attribute: 'name',
//   value: true,
// }

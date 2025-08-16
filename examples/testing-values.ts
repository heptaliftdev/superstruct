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

// Test that the data is valid with the `is` helper.
if (h.is(data, User)) {
  doSomethingWith(data);

  // If you're using TypeScript, the compiler will automatically know that
  // inside this block the `data` object has a shape of:
  //
  // {
  //   id: number
  //   name: string
  //   email: string
  // }
}

// Example function to demonstrate type safety
function doSomethingWith(user: UserType): void {
  console.log(`User: ${user.name} (${user.email})`);
}

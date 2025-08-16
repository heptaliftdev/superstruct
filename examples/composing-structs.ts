import {
  assert,
  date,
  type Infer,
  number,
  object,
  string,
} from "@haiyami/hyperstruct";

// Define a `User` struct.
const User = object({
  id: number(),
  name: string(),
});

type UserType = Infer<typeof User>;

// Define an `Article` struct, composing the `User` struct in the article's
// `author` property.
const Article = object({
  id: number(),
  title: string(),
  published_at: date(),
  author: User,
});

type ArticleType = Infer<typeof Article>;

// Define data to be validated.
const data: unknown = {
  id: 1,
  title: "Hello, World!",
  published_at: new Date(),
  author: {
    id: 1,
    name: "Jane Smith",
  },
};

// Validate the data. In this case, the data is valid, so it won't throw.
assert(data, Article);

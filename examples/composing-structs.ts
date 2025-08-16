import * as h from "@haiyami/hyperstruct";

// Define a `User` struct.
const User = h.object({
  id: h.number(),
  name: h.string(),
});

type UserType = h.Infer<typeof User>;

// Define an `Article` struct, composing the `User` struct in the article's
// `author` property.
const Article = h.object({
  id: h.number(),
  title: h.string(),
  published_at: h.date(),
  author: User,
});

type ArticleType = h.Infer<typeof Article>;

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
h.assert(data, Article);

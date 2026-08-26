export interface PathEntry {
  name: string;
  url: string;
}

const paths = {
  root: { name: "Home", url: "" },
  about: { name: "About", url: "about" },
  posts: { name: "Posts", url: "posts" },
} as const satisfies Record<string, PathEntry>;

export default paths;

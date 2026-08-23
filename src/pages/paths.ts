export interface PathEntry {
  name: string;
  url: string;
}

const paths = {
  posts: { name: "Posts", url: "posts" },
} as const satisfies Record<string, PathEntry>;

export default paths;

export interface PathEntry {
  name: string;
  url: string;
}

const paths = {
  root: { name: "Home", url: "" },
  posts: { name: "Posts", url: "posts" },
  tag: { name: "Tag", url: "tag" },
  tags: { name: "All Tags", url: "tags" },
} as const satisfies Record<string, PathEntry>;

export default paths;

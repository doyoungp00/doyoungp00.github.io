import { getCollection } from "astro:content";
import paths from "./paths";

type Tag = {
  name: string;
  count: number;
};

export async function getAllTags(): Promise<Tag[]> {
  const posts = await getCollection(paths.posts.url);
  const counts = new Map<string, number>();

  for (const post of posts) {
    for (const tag of post.data.tags ?? []) {
      counts.set(tag, (counts.get(tag) ?? 0) + 1);
    }
  }

  return [...counts]
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
}

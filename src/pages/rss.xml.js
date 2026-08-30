import { SITE_DESCRIPTION, SITE_TITLE } from "@/consts";
import paths from "@/utils/paths";
import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const posts = await getCollection(paths.posts.url);
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: posts.map((post) => ({
      ...post.data,
      link: `/${paths.posts.url}/${post.id}/`,
    })),
  });
}

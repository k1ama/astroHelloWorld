import rss, { pagesGlobToRssItems } from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection("blog");
return rss({
    title: 'Astro Explorer | Yapping',
    description: 'My exploring logs into Astro universe',
    site: context.site,
    items: posts.map((post) => ({
        title: post.data.title,
        pubDate: post.data.PubDate,
        description: post.data.description,
        link: `/posts/${post.id}`,
    })),
    customData: `<language>en-us</language>`,
  });
}
import { glob } from 'astro/loaders';
import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    date: z.coerce.date(),
    title: z.string(),
    description: z.string().optional(),
  }),
});

export const collections = {
  blog: blogCollection,
};

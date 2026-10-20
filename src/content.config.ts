import { glob } from 'astro/loaders';
import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';

const blogCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    date: z.coerce.date(),
    title: z.string(),
    description: z.string(),
  }),
});

export const collections = {
  blog: blogCollection,
};

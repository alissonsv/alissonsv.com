import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    date: z.coerce.date(),
    title: z.string(),
    description: z.string().optional(),
  }),
});

export const collections = {
  blog: blogCollection,
};

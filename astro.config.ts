import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import mdx from '@astrojs/mdx';
import vercelStatic from '@astrojs/vercel/static';

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), icon()],
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
    },
  },
  // vercel properties
  output: 'static',
  adapter: vercelStatic({
    webAnalytics: {
      enabled: true,
    },
  }),
});

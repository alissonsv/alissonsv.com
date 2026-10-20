import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import mdx from '@astrojs/mdx';
import { unified } from '@astrojs/markdown-remark';
import vercel from '@astrojs/vercel';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://alissonsv.com',
  integrations: [mdx(), icon(), sitemap()],
  markdown: {
    processor: unified({
      remarkRehype: {
        footnoteLabel: 'Referências:',
        footnoteBackLabel: 'Voltar',
      },
    }),
    shikiConfig: {
      theme: 'github-dark',
    },
  },
  // vercel properties
  output: 'static',
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
});

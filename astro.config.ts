import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import mdx from '@astrojs/mdx';
import vercel from '@astrojs/vercel';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://alissonsv.com',
  integrations: [mdx(), icon(), sitemap()],
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
    },
    remarkRehype: {
      footnoteLabel: 'Referências:',
      footnoteBackLabel: 'Voltar'
    }
  },
  // vercel properties
  output: 'static',
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
});
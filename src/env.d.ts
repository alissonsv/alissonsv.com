/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_DISQUS_SHORTNAME?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}


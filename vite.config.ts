import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';

import Vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import Unfonts from 'unplugin-fonts';
import Markdown from 'vite-plugin-md';
import MarkdownItAnchor from 'markdown-it-anchor';
import MarkdownItAttrs from 'markdown-it-attrs';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue({
      include: [/\.vue$/, /\.component\.md$/]
    }),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true
      },
      workbox: {
        navigateFallback: 'index.html',
        navigateFallbackDenylist: [/.*\.(jpg|png|svg|json|js)$/]
      }
    }),
    Components({
      dts: true,
      deep: true,
      dirs: ['src/components'],
      include: [/\.vue$/, /\.vue\?vue/]
    }),
    Markdown({
      markdownItOptions: {
        breaks: true,
        html: true,
        linkify: true,
        typographer: true
      },
      markdownItSetup(md) {
        md.use(MarkdownItAnchor);
        md.use(MarkdownItAttrs);
      },
      wrapperClasses: 'article'
    }),
    Unfonts.vite({
      google: {
        preconnect: true,
        display: 'swap',
        families: [
          {
            name: 'Lato',
            styles: 'wght@100;400;700;900'
          },
          {
            name: 'Noto Sans TC',
            styles: 'wght@100;400;700'
          }
        ]
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
});

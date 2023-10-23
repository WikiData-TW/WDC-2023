import { ViteSSG, type ViteSSGContext } from 'vite-ssg';

import App from './App.vue';
import { routerOptions } from './router';

import 'unfonts.css';

export const createApp: () => Promise<ViteSSGContext<true>> = ViteSSG(
  App,
  routerOptions
);

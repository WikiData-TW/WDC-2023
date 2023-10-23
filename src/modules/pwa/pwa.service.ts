/// <reference types="vite-plugin-pwa/client" />

import type { InjectionKey } from 'vue';

import { createModuleSetup } from '@/modules/utils/module-factory';

import type { Context } from '@/modules/utils/context/context.model';

const PROVIDE_KEY: InjectionKey<void> = Symbol('PwaRegister');

const $useRegisterSW = (ctx: Context) => {
  if (!ctx.isClient) {
    return;
  }

  ctx.router?.isReady().then(async () => {
    const { registerSW } = await import('virtual:pwa-register');
    registerSW({
      onRegistered(r) {
        if (!r) return;
        r.update();
        setInterval(() => {
          r.update();
        }, 60 * 60 * 1000);
      }
    });
  });
};

export const setup = createModuleSetup(PROVIDE_KEY, $useRegisterSW);

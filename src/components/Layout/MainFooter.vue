<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue';
import { useElementSize, usePreferredLanguages } from '@vueuse/core';
import { get, first } from 'lodash-es';

import { signal } from '@/shared/libs/signal';


const langs = usePreferredLanguages();

const i18n = {
  'zh-TW': defineAsyncComponent(
    () => import('@/../locale/zh-TW/footer.component.md')
  ),
  en: defineAsyncComponent(
    () => import('@/../locale/en/footer.component.md')
  )
};

const content = signal(get(i18n, first(langs.value) ?? 'en') ?? i18n.en);
</script>

<template>
  <div>
    <footer>
      <div class="left">
        <a href="/" class="logo">
          <img class="logo" src="/LOGO_w_RGB.svg" alt="logo">
        </a>
        <div class="icons">
          <i class="fa-solid fa-envelope"></i>
        </div>
      </div>
      <div class="right">

      </div>
    </footer>
  </div>
</template>
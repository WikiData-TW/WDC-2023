<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue';
import { useElementSize, usePreferredLanguages } from '@vueuse/core';
import { get, first } from 'lodash-es';

import { signal } from '@/shared/libs/signal';

const wrapperRef$ = ref<HTMLElement>();
const { width, height } = useElementSize(wrapperRef$);
const langs = usePreferredLanguages();

const i18n = {
  'zh-TW': defineAsyncComponent(
    () => import('@/../locale/zh-TW/CFP-banner.component.md')
  ),
  en: defineAsyncComponent(
    () => import('@/../locale/en/CFP-banner.component.md')
  )
};

const content = signal(get(i18n, first(langs.value) ?? 'en') ?? i18n.en);
</script>

<template>
  <div ref="wrapperRef$" :class="$style['banner-container']">
    <PatternMaterial :height="height" :width="width" />
    <div :class="$style['banner-wrapper']">
      <div :class="$style['banner-header']">
        <MainLogo />
      </div>
      <Suspense>
        <component :class="$style['banner-content']" :is="content()" />
      </Suspense>
    </div>
  </div>
</template>

<style module lang="scss" scoped>
@use '@/assets/styles/scss/modules/banner.module' as banner;
</style>

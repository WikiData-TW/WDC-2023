<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
import { useBreakpoints, usePreferredLanguages } from '@vueuse/core';
import { signal } from '@/shared/libs/signal';
import { first, get } from 'lodash-es';

const breakpoints = useBreakpoints({
  mobile: 600,
  tablet: 900,
  laptop: 1024,
  desktop: 1280
});

const isMobile = breakpoints.smaller('tablet');
const langs = usePreferredLanguages();

const i18n = {
  'zh-TW': defineAsyncComponent(
    () => import('@/../locale/zh-TW/CFP.component.md')
  ),
  en: defineAsyncComponent(() => import('@/../locale/en/CFP.component.md'))
};

const content = signal(get(i18n, first(langs.value) ?? 'en') ?? i18n.en);
</script>

<template>
  <div>
    <MainBanner
      :col="isMobile ? (breakpoints.smallerOrEqual('mobile') ? 3 : 6) : 3"
      :row="isMobile ? 9 : 2"
      :scale="isMobile ? (breakpoints.smallerOrEqual('mobile') ? 1 : 1) : 3"
      :isMobile="isMobile"
    />
    <main class="main-viewport">
      <Suspense>
        <component :is="content()" />
      </Suspense>
    </main>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/scss/modules/theme.module.scss' as theme;

.main-viewport {
  --text-color: #{theme.$primary-text-color};

  margin: 4em 2em;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 480px) {
    margin: 2em 1em;
  }

  .article {
    max-width: 768px;
  }
}
</style>

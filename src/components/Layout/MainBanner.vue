<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue';
import { useElementSize, usePreferredLanguages } from '@vueuse/core';
import { get, first } from 'lodash-es';

import { signal } from '@/shared/libs/signal';

const props = withDefaults(
  defineProps<{
    scale?: number;
    col?: number;
    row?: number;
    isMobile?: boolean;
  }>(),
  {
    scale: 3,
    col: 3,
    row: 2
  }
);

const wrapperRef$ = ref<HTMLElement>();
const { width, height } = useElementSize(wrapperRef$);
const langs = usePreferredLanguages();

const i18n = {
  'zh-TW': defineAsyncComponent(
    () => import('@/../locale/zh-TW/homepage-banner.component.md')
  ),
  en: defineAsyncComponent(
    () => import('@/../locale/en/homepage-banner.component.md')
  )
};

const content = signal(get(i18n, first(langs.value) ?? 'en') ?? i18n.en);
</script>

<template>
  <div ref="wrapperRef$" :class="$style['banner-container']">
    <PatternMaterial
      :height="height"
      :width="width"
      :scale="props.scale"
      :col="props.col"
      :row="props.row"
    />
    <div :class="$style['banner-wrapper']">
      <div :class="$style['banner-header']">
        <MainLogo :isMobile="props.isMobile" />
      </div>
      <Suspense>
        <component :class="$style['banner-content']" :is="content()" />
      </Suspense>
    </div>
  </div>
</template>

<style module lang="scss" scoped>
@use '@/assets/styles/scss/modules/banner.module' as banner;

.banner {
  &-wrapper {
    --pattern-scale: v-bind('props.scale');
    --pattern-col: v-bind('props.col');
    --pattern-row: v-bind('props.row');
  }
}
</style>

<style lang="scss">
.btn-banner {
  &:hover {
    color: black;
  }
}
</style>

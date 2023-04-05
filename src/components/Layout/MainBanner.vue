<script setup lang="ts">
import { ref } from 'vue';
import { useElementSize } from '@vueuse/core';

const wrapperRef$ = ref<HTMLElement>();
const { width, height } = useElementSize(wrapperRef$);
</script>

<template>
  <div ref="wrapperRef$" :class="$style['banner-container']">
    <PatternMaterial :height="height" :width="width" />
    <div :class="$style['banner-wrapper']">
      <MainLogo />
    </div>
  </div>
</template>

<style module lang="scss" scoped>
@use '@/assets/styles/scss/modules/banner.module' as banner;
</style>

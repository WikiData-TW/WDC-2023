<script setup lang="ts">
import { ref } from 'vue';
import { useElementSize } from '@vueuse/core';

const wrapperRef$ = ref<HTMLElement>();
const { width, height } = useElementSize(wrapperRef$);
</script>

<template>
  <div ref="wrapperRef$" :class="$style['banner-container']">
    <PatternMaterial :height="height" :width="width" />
  </div>
</template>

<style module lang="scss" scoped>
.banner {
  &-container {
    position: relative;
    width: 100%;
    height: 100vh;
  }
}
</style>

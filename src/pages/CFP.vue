<script setup lang="ts">
import { useBreakpoints } from '@vueuse/core';

const breakpoints = useBreakpoints({
  mobile: 600,
  tablet: 900,
  laptop: 1024,
  desktop: 1280
});

const isMobile = breakpoints.smaller('tablet');
</script>

<template>
  <div>
    <MainBanner
      :col="isMobile ? (breakpoints.smallerOrEqual('mobile') ? 3 : 6) : 3"
      :row="isMobile ? 9 : 2"
      :scale="isMobile ? (breakpoints.smallerOrEqual('mobile') ? 1 : 1) : 3"
      :isMobile="isMobile"
    />
  </div>
</template>

<style scoped></style>

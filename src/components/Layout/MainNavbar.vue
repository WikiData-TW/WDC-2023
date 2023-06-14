<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue';
import { useElementSize, usePreferredLanguages } from '@vueuse/core';
import { get, first } from 'lodash-es';

import { signal } from '@/shared/libs/signal';


const langs = usePreferredLanguages();

const i18n = {
  'zh-TW': defineAsyncComponent(
    () => import('@/../locale/zh-TW/navbar.component.md')
  ),
  en: defineAsyncComponent(
    () => import('@/../locale/en/navbar.component.md')
  )
};

const content = signal(get(i18n, first(langs.value) ?? 'en') ?? i18n.en);
</script>

<template>
  <div>
    <nav class="navbar">
      <a href="/" class="logo">
        <img class="logo" src="/LOGO_w_RGB.svg" alt="logo">
      </a>
      <Suspense>
        <component :is="content()" />
      </Suspense>
    </nav>
  </div>
</template>

<style lang="scss" scoped>

.navbar {
  position: fixed;
  top: 0;
  height: 65px;
  width: 100%;
  padding: 0 10%;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  box-shadow: 0 5px 3px rgba($color: black, $alpha: 0.2);

  a {
    &.logo {
      width: auto;
      height: 55px;
    }

    .logo {
      height: 100%;
      padding: 0.2rem 0;
    }
  }
}

</style>

<style lang="scss">

@keyframes anim {
  0%{transform: rotate(0deg);}
  100%{transform: rotate(270deg);}
}

.article {

  width: 40%;

  .navbar-list {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: space-between;

    .list {
      margin: 0;
      width: 100%;
      display: flex;
      justify-content: center;

      a {
        display: flex;
        align-items: center;
        color: black;
        text-decoration: none;

        &:hover {
          &::before {
            content: url("/flower_red.png");
            display: flex;
            padding: 0 5px;
            width: 25px;
            height: 25px;
            animation: anim 1s linear infinite alternate;
          }
        }
      }
    }
  }
}

</style>
<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
import { usePreferredLanguages } from '@vueuse/core';
import { get, first } from 'lodash-es';

import { signal } from '@/shared/libs/signal';

const langs = usePreferredLanguages();

const i18n = {
  'zh-TW': defineAsyncComponent(
    () => import('@/../locale/zh-TW/footer.component.md')
  ),
  en: defineAsyncComponent(() => import('@/../locale/en/footer.component.md'))
};

const content = signal(get(i18n, first(langs.value) ?? 'en') ?? i18n.en);
</script>

<template>
  <MainNavbar />
  <div class="partner-info">
    <Suspense>
      <component :is="content()" />
    </Suspense>
  </div>
  <MainFooter />
</template>

<style lang="scss">
.partner-info {
  padding-top: 70px;
  width: 100vw;
  // height: 100vh;
  display: flex;
  justify-content: center;

  .article {
    width: 768px;
    display: flex;
    flex-direction: column;
    align-items: center;

    h4 {
      font-size: 3.125em;
    }

    .partner-list {
      list-style: none;
      padding: 0px;

      a, .partner-community {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: black;
        text-decoration: none;
        height: 40%;
        font-size: 1.4em;

      }

      .partner-img {
        display: block;
        height: 400px;
        width: 400px;
        transform: translateY(-10%);

        &-taiwan {
          scale: 0.75;
          transform: translateY(-20%);
        }

        &-wikidata {
          scale: 0.75;
          transform: translateY(-20%);
        }
      }
    }
  }
}
</style>
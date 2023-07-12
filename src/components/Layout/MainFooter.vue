<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
import { usePreferredLanguages } from '@vueuse/core';
import { get, first } from 'lodash-es';

import { signal } from '@/shared/libs/signal';
import { Icon } from '@iconify/vue';

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
  <footer>
    <div class="left">
      <a href="/" class="logo">
        <img class="logo" src="/LOGO_w_RGB.svg" alt="logo" />
      </a>
      <div class="icons">
        <a href="https://www.facebook.com/WikidataTW"
          ><Icon icon="fa-brands:facebook"
        /></a>
        <a href="https://github.com/WikiData-TW/WDC-2023"
          ><Icon icon="fa-brands:github"
        /></a>
        <a href="https://liker.social/@wikidatatw"
          ><Icon icon="fa-brands:mastodon"
        /></a>
        <a href="mailto:contact@wikidatacon.org"
          ><Icon icon="fluent:mail-24-filled"
        /></a>
      </div>
      <div class="coc">
        <a
          href="https://meta.wikimedia.org/wiki/Wikimedia_Taiwan/Wikidata_Taiwan/Code_of_Conduct_Wikidata_Taiwan"
          >Taiwan Call of Conduct</a
        >
      </div>
    </div>
    <div class="right">
      <Suspense>
        <component :is="content()" />
      </Suspense>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@keyframes anim-color {
  0% {
    color: #8a1e22;
  }
  50% {
    color: #358e62;
  }
  100% {
    color: #155e8b;
  }
}

footer {
  height: 300px;
  padding: 20px 10%;
  background-color: #d9d9d9;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  .left,
  .right {
    width: 30%;
    height: 100%;
    min-width: min-content;
    display: flex;
    flex-direction: column;
    align-items: center;

    a {
      color: black;
      text-decoration: none;

      &:hover {
        animation: anim-color 2s linear infinite alternate;
      }

      &.logo {
        height: 60%;
        display: flex;
        justify-content: center;
      }
    }

    .icons {
      width: 300px;
      height: 20%;
      display: flex;
      justify-content: space-between;

      a {
        width: 100%;
        display: flex;
        align-items: center;

        // &:hover {
        //   animation: anim 2s linear infinite alternate;
        // }

        .iconify {
          width: 100%;
          height: 80%;
        }
      }
    }

    .coc {
      width: 300px;
      height: 20%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>

<style lang="scss">
@keyframes anim-color {
  0% {
    color: #8a1e22;
  }
  50% {
    color: #358e62;
  }
  100% {
    color: #155e8b;
  }
}

.right {
  .article {
    height: 100%;

    .partner-title {
      margin-bottom: 10px;
    }

    .partner-list {
      list-style: none;
      height: 25%;
      margin: 0;

      .partner {
        height: 100%;
        line-height: 1.5;
        display: flex;
        align-items: center;

        .partner-img {
          height: 100%;
          margin-left: 20px;
        }
      }

      &.host {
        height: 40%;

        .partner {
          height: 50%;

          a {
            color: black;
            text-decoration: none;
            height: 100%;
            display: flex;
            align-items: center;

            &:hover {
              animation: anim-color 2s linear infinite alternate;
            }
          }
        }
      }
    }
  }
}
</style>

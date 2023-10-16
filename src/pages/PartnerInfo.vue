<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
import { usePreferredLanguages } from '@vueuse/core';
import { get, first, has } from 'lodash-es';

import { signal } from '@/shared/libs/signal';

const langs = usePreferredLanguages();

const i18n = {
  'zh-TW': defineAsyncComponent(
    () => import('@/../locale/zh-TW/footer.component.md')
  ),
  en: defineAsyncComponent(() => import('@/../locale/en/footer.component.md'))
};

const content = signal(get(i18n, first(langs.value) ?? 'en') ?? i18n.en);

// interface IOrganizer {
//   name: string,
//   icon: string,
//   link: string
// }

interface ICollaboration {
  name: string,
  icon?: string
}

// const Organizers: IOrganizer[] = [
//   {
//     name: '台灣維基媒體協會',
//     icon: 'https://upload.wikimedia.org/wikipedia/commons/c/c4/Wikimedia_Taiwan.svg',
//     link: 'https://www.facebook.com/wikimedia.tw'
//   },
//   {
//     name: '德國維基媒體協會',
//     icon: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Wikimedia_Deutschland-Logo.svg',
//     link: 'https://social.wikimedia.de/@wikimediaDE'
//   }
// ]

const Collaboration: ICollaboration[] = [
  {
    name: 'Wikidata Taiwan 臺灣維基數據社群',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/7/79/Wikidata-logo-rgb-withtaiwan.svg'
  },
  {
    name: '開放文化基金會 Open Culture Foundation, OCF'
  },
  {
    name: '中華民國軟體自由協會 SLAT'
  },
  {
    name: '樹冠影響力投資 Canopi'
  },
  {
    name: 'Wikimedian: Iyumu (台語翻譯)'
  },
  {
    name: '開放文化基金會 Open Culture Foundation, OCF'
  },
  {
    name: '國立臺北大學 National Taipei University '
  },
  {
    name: '海山學研究中心 Center for Haishan Research'
  },
  {
    name: '國立成功大學開放知識社'
  },
  {
    name: '書福咖啡'
  },
  {
    name: '幸將手作坊'
  },
  {
    name: '古蹟燒'
  },
  {
    name: '夢想之都工作室'
  },
  {
    name: '山海咖啡'
  }
]
</script>

<template>
  <MainNavbar />
  <div class="partner-info">
    <div class="article">
      <h1 class="partner-title" id="%E4%B8%BB%E8%BE%A6%E5%96%AE%E4%BD%8D" tabindex="-1">主辦單位</h1>
      <ul class="partner-list host">
        <li class="partner">
          <a href="https://www.facebook.com/wikimedia.tw"><img
              src="https://upload.wikimedia.org/wikipedia/commons/c/c4/Wikimedia_Taiwan.svg" alt=""
              class="partner-img partner-img-taiwan">
              <h2>台灣維基媒體協會</h2>
          </a>
        </li>
        <li class="partner">
          <a href="https://social.wikimedia.de/@wikimediaDE"><img
              src="https://upload.wikimedia.org/wikipedia/commons/e/e8/Wikimedia_Deutschland-Logo.svg" alt=""
              class="partner-img">
              <h2>德國維基媒體協會</h2>
          </a>
        </li>
      </ul>
      <h1 class="partner-title" id="%E7%A4%BE%E7%BE%A4%E5%8D%94%E5%8A%9B" tabindex="-1">社群協力</h1>
      <ul class="partner-list">
        <li v-for="col in Collaboration" class="partner partner-community">
          <img
            :src="col.icon ?? '/LOGO_w_RGB.svg'" :style="{ scale: (col.icon) ? '' : '0.8'}" alt=""
            class="partner-img partner-img-wikidata">
            <h2>{{ col.name }}</h2>
        </li>
      </ul>
    </div>
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

    h1 {
      font-size: 3.125em;

      // &::before {
      //   content: "";
      //   background-image: url("/flower_red.png");
      //   background-size: contain;
      //   display: flex;
      //   margin: 0 5px;
      //   width: 3.125em;
      //   height: 3.125em;
      //   animation: anim 1s linear infinite alternate;
      // }
    }

    .partner-list {
      list-style: none;
      padding: 0px;
      transform: translateY(-15%);

      a {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: black;
        text-decoration: none;
        // height: 40%;
        font-size: 1.4em;

        h2 {
          margin: 0px;
          font-size: 1.3em;
        }

        .partner-img {
          display: block;
          height: 400px;
          width: 400px;
          transform: translateY(15%);

          &-taiwan {
            scale: 0.75;
          }
        }
      }

      &:nth-of-type(2) {
        transform: translateY(0%);
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        
      }
      .partner-community {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        height: 100px;
        padding: 0px;
        margin: 0px 10px;

        .partner-img {
            display: inline;
            height: 80px;
            width: 80px;
            margin-right: 10px;
          }

          h2 {
            display: inline;
            font-size: 0.9em;
          }
      }
    }
  }
}</style>
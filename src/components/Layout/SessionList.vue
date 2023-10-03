<script setup lang="ts">
import { computed } from 'vue';
import { useDateFormat } from '@vueuse/core';
import { create, get, sortBy } from 'lodash-es';
import { useRoute } from 'vue-router'

import sessionsRawData from '@/assets/wikidatacon2023_sessions.json'
import breakRawData from '@/assets/wikidatacon2023_break.json'
import SessionInfo from './SessionInfo.vue';

const route = useRoute()

type Iday = 'Day 1' | 'Day 2' | 'Day 1.5' | 'Day 2.5'

interface ISessions {
  'Day 1': any[],
  'Day 1.5': any[],
  'Day 2': any[],
  'Day 2.5': any[],
  'others': any[]
}

const daytimes: Iday[] = ['Day 1', 'Day 2']
const nighttimes: Iday[] = ['Day 1.5', 'Day 2.5']
const programID = route.params.programID as string

const sessions = computed(() => {
  let _sessions: ISessions = {
    'Day 1': [],
    'Day 1.5': [],
    'Day 2': [],
    'Day 2.5': [],
    'others': []
  }
  sessionsRawData.forEach(session => {
    let type = get(session, 'Room.en') ?? 'others'
    if (type == 'others') {
      _sessions['others'].push(create(session))
    }
    else if (type == 'Day 1') {
      _sessions['Day 1'].push(create(session))
    }
    else if (type == 'Day 1.5') {
      _sessions['Day 1.5'].push(create(session))
    }
    else if (type == 'Day 2') {
      _sessions['Day 2'].push(create(session))
    }
    else {
      _sessions['Day 2.5'].push(create(session))
    }
  })

  breakRawData.forEach(session => {
    // let type = (session['Room'])['en'] ?? 'others'
    let type = get(session, 'Room.en') ?? 'others'
    if (type == 'others') {
      _sessions['others'].push(create(session))
    }
    else if (type == 'Day 1') {
      _sessions['Day 1'].push(create(session))
    }
    else if (type == 'Day 1.5') {
      _sessions['Day 1.5'].push(create(session))
    }
    else if (type == 'Day 2') {
      _sessions['Day 2'].push(create(session))
    }
    else {
      _sessions['Day 2.5'].push(create(session))
    }
  })
  _sessions['Day 1'] = sortBy(_sessions['Day 1'], s => new Date(s['Start']))
  _sessions['Day 1.5'] = sortBy(_sessions['Day 1.5'], s => new Date(s['Start']))
  _sessions['Day 2'] = sortBy(_sessions['Day 2'], s => new Date(s['Start']))
  _sessions['Day 2.5'] = sortBy(_sessions['Day 2.5'], s => new Date(s['Start']))

  console.log(_sessions)
  return _sessions
})

const day1timeStamps = computed(() => {
  return [
    ...new Set(
      [...sessions.value['Day 1'].map(({ Start }) => useDateFormat(Start, 'HHmm').value),
      ...sessions.value['Day 1'].map(({ End }) => useDateFormat(End, 'HHmm').value)]
    )
  ].sort()
})

const day2timeStamps = computed(() => {
  return [
    ...new Set(
      [...sessions.value['Day 2'].map(({ Start }) => useDateFormat(Start, 'HHmm').value),
      ...sessions.value['Day 2'].map(({ End }) => useDateFormat(End, 'HHmm').value)]
    )
  ].sort()
})

const daytimeStamps = computed(() => {
  return [
    ...new Set(
      [...day1timeStamps.value,
      ...day2timeStamps.value]
    )
  ].sort()
})

const night1timeStamps = computed(() => {
  return [
    ...new Set(
      [...sessions.value['Day 1.5'].map(({ Start }) => useDateFormat(Start, 'HHmm').value),
      ...sessions.value['Day 1.5'].map(({ End }) => useDateFormat(End, 'HHmm').value)]
    )
  ].sort()
})

const night2timeStamps = computed(() => {
  return [
    ...new Set(
      [...sessions.value['Day 2.5'].map(({ Start }) => useDateFormat(Start, 'HHmm').value),
      ...sessions.value['Day 2.5'].map(({ End }) => useDateFormat(End, 'HHmm').value)]
    )
  ].sort()
})

const nighttimeStamps = computed(() => {

  return [
    ...new Set(
      [...night1timeStamps.value,
      ...night2timeStamps.value]
    )
  ].sort((a, b) => {
    // console.log(`String: a:${a} b:${b}`)
    let na = Number(a)
    let nb = Number(b)
    // console.log(`Before: a:${na} b:${nb}`)
    na = (na > 1200) ? na : na + 2400
    nb = (nb > 1200) ? nb : nb + 2400
    // console.log(`After: a:${na} b:${nb}`)
    return na - nb
  })
})

const gridDaytimeTemplateColumns = computed(() => {
  let day = ['[Day_1]', '[Day_2]']
  let s = ['[_time1]', 'auto', day.join(' 1fr ') + ' 1fr', '[_time2]', 'auto','[_end]'].join(' ')
  console.log(s)
  return s
})

const gridDaytimeTemplateRows = computed(() => {
  let res = daytimeStamps.value.map(t => `[_${t}]`)
  let s = ['[_day]', '[_daytime]', ['[decoration-line-start]'], ...res, '[_end]'].join(' auto ')
  return s
})

const gridNighttimeTemplateColumns = computed(() => {
  let day = ['[Day_1_5]', '[Day_2_5]']
  let s = ['[_time1]', 'auto', day.join(' 1fr ') + ' 1fr', '[_time2]', 'auto', '[_end]'].join(' ')
  console.log(`NIght: ${s}`)
  return s
})

const gridNighttimeTemplateRows = computed(() => {
  let res = nighttimeStamps.value.map(t => `[_${t}]`)
  let s = ['[_night]', '[_nighttime]', ['[decoration-line-start]'], ...res, '[_end]'].join(' auto ')
  return s
})

</script>

<template>
  <div class="session article">
    <div class="session-list sesssion-daytime">
      <div class="session-grid" :style="{
        gridTemplateColumns: gridDaytimeTemplateColumns,
        gridTemplateRows: gridDaytimeTemplateRows
      }">
        <div class="session-day" v-for="day in daytimes" :key="day" :style="{ gridRowStart: `_day`, gridColumnStart: day.replace(' ', '_') }">
          <h2>{{ day }}</h2>
        </div>
        <div class="session-daynight" :style="{gridRowStart: `_daytime`, gridColumn: 'Day_1 / _time2'}">
          <h2>Day Time</h2>
        </div>
        <div class="session-time-item" v-for="dt in day1timeStamps" :key="dt" :style="{gridRowStart: `_${dt}`, gridColumnStart: '_time1'}">
          <div class="session-time-item-content"> {{ dt.slice(0,2) + ':' + dt.slice(2) }} </div>
        </div>
        <div class="session-time-item" v-for="dt in day2timeStamps" :key="dt" :style="{gridRowStart: `_${dt}`, gridColumnStart: '_time2'}">
          <div class="session-time-item-content"> {{ dt.slice(0,2) + ':' + dt.slice(2) }} </div>
        </div>
        <template v-for="day in daytimes" :key="day">
          <SessionInfo v-for="session in sessions[day]" :key="session" :session="session" :programID="programID"/>
        </template>
      </div>
    </div>

    <div class="session-list sesssion-nighttime">
      <div class="session-grid" :style="{
        gridTemplateColumns: gridNighttimeTemplateColumns,
        gridTemplateRows: gridNighttimeTemplateRows
      }">
        <div class="session-day" v-for="day in nighttimes" :key="day" :style="{ gridRowStart: `_night`, gridColumnStart: day.replace(' ', '_').replace('.', '_') }">
          <h2>{{ day }}</h2>
        </div>
        <div class="session-daynight" :style="{gridRowStart: `_nighttime`, gridColumn: 'Day_1_5 / _time2'}">
          <h2>Night Time</h2>
        </div>
        <div class="session-time-item" v-for="nt in night1timeStamps" :key="nt" :style="{gridRowStart: `_${nt}`, gridColumnStart: '_time1'}">
          <div class="session-time-item-content"> {{ nt.slice(0,2) + ':' + nt.slice(2) }} </div>
        </div>
        <div class="session-time-item" v-for="nt in night2timeStamps" :key="nt" :style="{gridRowStart: `_${nt}`, gridColumnStart: '_time2'}">
          <div class="session-time-item-content"> {{ nt.slice(0,2) + ':' + nt.slice(2) }} </div>
        </div>
        <template v-for="day in nighttimes" :key="day">
          <SessionInfo v-for="session in sessions[day]" :key="session" :session="session" :programID="programID"/>
        </template>
      </div>
    </div>
  </div>
</template>

<!-- <style lang="scss">
.session {

  &-list {
    table-layout: fixed;
    width: 100%;
  }

  &-grid {
      display: grid;
      gap: 3px;
      // padding: 8px;
      span, p, h3, h2 {
        margin: 0;
      }

      h3 {
        font-size: 18px;
      }

      span, p {
        font-size: 14px;
      }
  }
  &-day {
    display: flex;
    align-items: center;
    justify-content: center;

    border: 1px #999 solid;
    border-radius: 10px;
    margin: 0;
  }

  &-daynight {
    display: flex;
    align-items: center;
    justify-content: center;

    border: 1px #999 solid;
    border-radius: 10px;
    margin: 0;
  }

  &-time-item {

    &-content {
      border: 1px #AAA solid;
      border-radius: 5px;
      color: #383838;
      padding: 0 12px;
      transform: translateY(-50%);
    }
  }

  &-item {
    border: 1px #999 solid;
    border-radius: 10px;
    padding: 8px 20px;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &-break {
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style> -->
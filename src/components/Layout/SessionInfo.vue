<script lang="ts" setup>
import { ref, onBeforeMount, type PropType, reactive } from 'vue';
import { useDateFormat } from '@vueuse/core';
import { get } from 'lodash-es';
import { useRouter } from 'vue-router'

interface ISession {
  Room: object | string,
  Start: string,
  End: string,
  'Proposal title': string,
  'Speaker names': string[],
  'Description': string,
  'Abstract': string,
  ID: string
}
const router = useRouter()

const props = defineProps({
    session: {
        type: Object as PropType<ISession>,
        required: true
    },
    programID: {
        required: true
    }
})

// const session = props.session
// const programID = props.programID
// const { session, programID } = toRefs(props)
const { session, programID } = reactive(props)
const showInfo = ref(false)

function parseSessionStyle(session: ISession) {
  // console.log(`${session['Start']} / ${session['End']}`)
  let start = useDateFormat(session['Start'], '_HHmm')
  let end = useDateFormat(session['End'], '_HHmm')
  let day = get(session, 'Room.en') ?? 'Day 1'
  // console.log(`${start.value} / ${end.value}`)
  return ({
    'grid-column-start': day.replace(' ', '_').replace('.', '_'),
    'grid-row': `${start.value} / ${end.value}`
  })
}

function getSpeaker(session: ISession) {
  let speakers = session['Speaker names'] ?? ['']
  return speakers.join('、')
}

function isBreakTime(session: ISession) {
  return (session['Proposal title'] === 'break')
}

function toggleShowInfo(session: ISession) {
    if(infoShowable(session)) {
        // showInfo.value = !showInfo.value
        if(showInfo.value === false) {
            showInfo.value = !showInfo.value
            router.push(`/program/${session.ID}`)
        }
        else {
            showInfo.value = !showInfo.value
            router.push('/program')
        }
    }
}

function duration(session: ISession) {
  let _start = useDateFormat(session['Start'], 'HH:mm')
  let _end = useDateFormat(session['End'], 'HH:mm')
  return `${_start.value}~${_end.value}`
}

function infoShowable(session: ISession) {
    return (session['Description'] !== 'break' && session['Description'] !== '') || session['Abstract'] !== ''
}


onBeforeMount(() => {
    if(programID === session.ID && session.ID !== undefined) {
        console.log('TOGGLE!')
        toggleShowInfo(session)
    }
})
</script>

<template>
    <div class="session-item"  :style="parseSessionStyle(session)" :class="{ 'session-break': isBreakTime(session), 'info-showable': infoShowable(session), 'info-unshowable': !infoShowable(session)}" @click="toggleShowInfo(session)">
        <div class="session-item-content">
            <div class="session-item-content-title">
                <h3 v-if="!isBreakTime(session)">{{ session['Proposal title'] }}</h3>
                <p class="session-break" v-else>{{ session['Proposal title'] }}</p>
            </div>
            <!-- <span>{{ join(session['Speaker names'], '、') }}</span> -->
            <div class="session-item-content-speaker" v-if="!isBreakTime(session)">
                <span class="session-item-content-time">{{ getSpeaker(session) }}</span>
            </div>
        </div>
        <div class="session-item-info" v-if="showInfo === true" @click.stop="">
            <div class="session-item-info-wrapper">
                <div class="info-close" @click.stop="toggleShowInfo(session)">
                    <h1>
                        <svg viewBox="0 0 352 512" width="1.2em" height="1.2em"><path fill="currentColor" d="m242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28L75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256L9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg>
                    </h1>
                </div>
                <div class="info-item">
                    <h1>{{ session['Proposal title'] }}</h1>
                    <p class="font-size--m">{{ getSpeaker(session) }}</p>
                    <p class="font-size--m">{{ duration(session) }}</p>
                    <br>
                    <template v-if="session['Abstract'] !== ''">
                        <h2>Abstract</h2>
                        <p class="font-size--m" style="font-size: 1.15em">{{ session['Abstract'] }}</p>
                        <br>
                    </template>
                    <template v-if="session['Description'] !== ''">
                        <h2>Description</h2>
                        <p class="font-size--m" style="font-size: 1.15em">{{ session['Description'] }}</p>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>
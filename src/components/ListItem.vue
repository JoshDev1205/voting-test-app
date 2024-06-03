<template>
  <div
    :style="bgImageStyle"
    class="list-container bg-no-repeat bg-contain grid"
  >
    <div>
      <div
        :class="bgThummbsClass"
        class="p-2 inline-block justify-center items-center"
      >
        <Positive v-if="statusValue === 'positive'" />
        <Negative v-else />
      </div>
    </div>
    <div>
      <div class="text-white pl-8 pt-2">
        <p class="text-3xl text-nowrap text-ellipsis overflow-hidden listitem-text">
          {{ content.name }}
        </p>
        <p class="pt-2 line-clamp-2">
          {{ content.description }}
        </p>
      </div>
    </div>
    <div class="grid-bar pr-3 pt-2">
      <ActionBar
        :message="`${props.content.readableDate} in ${props.content.category}`"
        @send="sendVote"
      />
    </div>
    <div class="grid-gauge">
      <GaugeBar :percentages="content.percentages" />
    </div>
  </div>
</template>

<script setup>
import { defineProps, computed } from 'vue'
import Positive from './Icons/Positive.vue'
import Negative from './Icons/Negative.vue'
import { useVotesStore } from '../stores/votes'
import GaugeBar from './GaugeBar.vue'
import ActionBar from './ActionBar.vue'

const useVotes = useVotesStore()

const props = defineProps({
  content: {
    type: Object,
    default: {},
  },
})

const bgImageStyle = computed(() => {
  return {
    'background-image': `url('img/${props.content.picture}')`,
  }
})

const statusValue = computed(() =>
  props.content.votes.positive >= props.content.votes.negative ? 'positive' : 'negative'
)

const bgThummbsClass = computed(() => {
  return statusValue.value === 'positive' ? 'bg-thumbs-teal' : 'bg-thumbs-yellow'
})

const sendVote = (value) => {
  useVotes.setVote({ id: props.content.id, ...value })
}
</script>

<style>
.list-container {
  height: 142px;
  background-size: 220px;
  background-position-y: center;
  grid-template-rows: 1fr auto;
  grid-template-columns: 1fr 3fr;
  box-shadow: inset -600px 0 100px 0 #888888;
  width: 763px;
}

.grid-gauge {
  grid-row: 2/3;
  grid-column: 1/4;
}

.grid-bar {
  grid-column: 3/4;
}

.listitem-text {
  max-width: 320px;
}
</style>

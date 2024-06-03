<template>
  <div
    class="card-container bg-no-repeat bg-center bg-cover mr-3"
    :style="bgImageStyle"
  >
    <div class="flex flex-col justify-end h-full">
      <!-- text -->
      <div class="text-white pr-9 w-full pb-3">
        <div class="pt-1 flex items-end">
          <div
            :class="bgThummbsClass"
            class="p-2 flex justify-center items-center"
          >
            <Positive v-if="statusValue === 'positive'" />
            <Negative v-else />
          </div>
          <p class="text-3xl line-clamp-2">{{ content.name }}</p>
        </div>
        <div class="text-white">
          <p class="pl-8 pt-2 line-clamp-2">
            {{ content.description }}
          </p>
        </div>
      </div>

      <div class="flex w-full justify-center pb-4">
        <ActionBar
          :message="`${props.content.readableDate} in ${props.content.category}`"
          @send="sendVote"
        />
      </div>

      <!-- status bar -->
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
.card-container {
  height: 300px;
  width: 300px;

  @media screen and (width >= 768px) {
    height: 351px;
    width: 351px;
  }
}
</style>

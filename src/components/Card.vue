<template>
  <div
    class="card-container bg-no-repeat bg-center bg-cover mr-3"
    :style="bgImageStyle"
  >
    <div class="flex flex-col justify-end h-full">
      <!-- text -->
      <div class="flex pr-9 w-full pb-3">
        <div class="pt-1">
          <div
            :class="bgThummbsClass"
            class="h-7 w-7 flex justify-center items-center"
          >
            <Positive v-if="statusValue === 'positive'" />
            <Negative v-else />
          </div>
        </div>
        <div class="text-white">
          <p class="text-3xl pb-2">{{ content.name }}</p>
          <p class="line-clamp-2">
            {{ content.description }}
          </p>
          <p class="text-xs text-right py-3">{{ statusMessage }}</p>
          <!-- actions bar -->
          <div class="flex items-center justify-center">
            <div
              v-if="!isVotedActive"
              class="flex items-center"
            >
              <input
                type="radio"
                class="invisible card-radio"
                id="positive"
                value="positive"
                name="status"
                v-model="voteSelection"
              />
              <label
                class="bg-thumbs-teal h-7 w-7 flex justify-center items-center cursor-pointer"
                for="positive"
              >
                <Positive />
              </label>
            </div>

            <div
              v-if="!isVotedActive"
              class="flex items-center"
            >
              <input
                type="radio"
                class="invisible card-radio"
                id="negative"
                value="negative"
                name="status"
                v-model="voteSelection"
              />
              <label
                for="negative"
                class="bg-thumbs-yellow h-7 w-7 flex justify-center items-center mr-2 cursor-pointer"
              >
                <Negative />
              </label>
            </div>

            <button
              v-if="!isVotedActive"
              class="text-white card-action border border-solid border-white"
              @click="sendVote"
            >
              Vote Now
            </button>
            <button
              v-if="isVotedActive"
              class="text-white card-action border border-solid border-white"
              @click="resetVote"
            >
              Vote Again
            </button>
          </div>
        </div>
      </div>

      <!-- status bar -->
      <div class="card-status flex">
        <div
          :style="{ width: content.percentages.positive + '%' }"
          class="w-1/2 card-status-positive flex items-center pl-3"
        >
          <Positive />
          <p class="pl-1 text-white text-lg">{{ content.percentages.positive }}%</p>
        </div>
        <div
          :style="{ width: content.percentages.negative + '%' }"
          class="card-status-negative flex items-center justify-end pr-3"
        >
          <p class="pr-1 text-white text-lg">{{ content.percentages.negative }}%</p>
          <Negative />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, computed, ref, defineModel } from 'vue'
import Positive from './Icons/Positive.vue'
import Negative from './Icons/Negative.vue'
import { useVotesStore } from '../stores/votes'

const useVotes = useVotesStore()

const props = defineProps({
  content: {
    type: Object,
    default: {},
  },
})

const voted = ref(false)
const voteSelection = defineModel()

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

const updateVoted = (status) => {
  voted.value = status
}

const sendVote = () => {
  if (!voteSelection.value) return

  useVotes.setVote({ id: props.content.id, voteType: voteSelection.value })

  updateVoted(true)
}

const resetVote = () => {
  updateVoted(false)
  voteSelection.value = ''
}

const isVotedActive = computed(() => {
  return !!voted.value
})

const statusMessage = computed(() => {
  return isVotedActive.value
    ? 'Thank you for your vote!'
    : `${props.content.readableDate} in ${props.content.category}`
})
</script>

<style>
.card-container {
  height: 300px;
  width: 300px;
}

.card-action {
  width: 107px;
  height: 38px;
  background: rgba(0, 0, 0, 0.6);
}

.card-status {
  height: 36px;
}

.card-status-positive {
  background: rgba(60, 187, 180, 0.6);
}

.card-status-negative {
  background: rgba(249, 173, 29, 0.6);
}

.card-status p {
  padding-top: 1px;
}

.card-radio:checked + label {
  border: 2px solid white;
}
</style>

<template>
  <div class="text-white">
    <p class="text-xs text-right pb-3">{{ statusMessage }}</p>
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
</template>

<script setup>
import { defineProps, defineEmits, computed, ref } from 'vue'
import Positive from './Icons/Positive.vue'
import Negative from './Icons/Negative.vue'

const props = defineProps({
  message: {
    type: String,
  },
})

const emits = defineEmits(['send'])

const voted = ref(false)
const voteSelection = defineModel()

const isVotedActive = computed(() => {
  return !!voted.value
})

const statusMessage = computed(() => {
  return isVotedActive.value ? 'Thank you for your vote!' : props.message
})

const updateVoted = (status) => {
  voted.value = status
}

const resetVote = () => {
  updateVoted(false)
  voteSelection.value = ''
}

const sendVote = () => {
  if (!voteSelection.value) return

  emits('send', { voteType: voteSelection.value })
  updateVoted(true)
}
</script>

<style>
.card-action {
  width: 107px;
  height: 38px;
  background: rgba(0, 0, 0, 0.6);
}

.card-radio:checked + label {
  border: 2px solid white;
}
</style>

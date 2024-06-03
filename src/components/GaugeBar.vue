<template>
  <div class="card-status flex">
    <div
      :style="{ width: percentages.positive + '%' }"
      class="w-1/2 card-status-positive flex items-center pl-3"
    >
      <Positive />
      <p class="pl-1 text-white text-lg">{{ percentages.positive }}%</p>
    </div>
    <div
      :style="{ width: percentages.negative + '%' }"
      class="card-status-negative flex items-center justify-end pr-3"
    >
      <p class="pr-1 text-white text-lg">{{ percentages.negative }}%</p>
      <Negative />
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import Positive from './Icons/Positive.vue'
import Negative from './Icons/Negative.vue'

const props = defineProps({
  percentages: {
    type: Object,
    default: {},
  },
})
</script>

<style>
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
</style>

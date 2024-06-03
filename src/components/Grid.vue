<template>
  <div
    class="grid grid-flow-col md:grid-flow-row grid-container overflow-x-scroll md:overflow-x-hidden"
  >
    <Card
      v-for="card in cards"
      :content="card"
    />
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import Card from './Card.vue'

const props = defineProps({
  cards: {
    type: Array,
  },
})
</script>
<style>
@media screen and (width >= 768px) {
  .grid-container {
    grid-template-columns: repeat(auto-fit, minmax(100px, 360px));
    gap: 21px;
  }
}
</style>

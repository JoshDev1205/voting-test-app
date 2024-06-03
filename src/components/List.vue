<template>
  <div class="grid gap-5">
    <ListItem
      v-for="card in cards"
      :content="card"
    />
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import ListItem from './ListItem.vue'

const props = defineProps({
  cards: {
    type: Array,
  },
})
</script>
<style></style>

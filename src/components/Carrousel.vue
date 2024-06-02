<template>
  <div class="grid grid-flow-col overflow-x-scroll">
    <Card
      v-for="vote in useVotes.votes"
      :content="vote"
    />
  </div>
</template>

<script setup>
import Card from './Card.vue'
import { useVotesStore } from '../stores/votes'

const useVotes = useVotesStore()
</script>

<style lang="scss" scoped></style>

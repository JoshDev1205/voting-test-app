<template>
  <main class="pt-6 px-3">
    <!-- banner-top -->
    <div class="bg-banner-top p-3 flex">
      <div class="flex flex-col justify-center pr-3 text-nowrap">
        <p class="font-light">Speak out. Be heard.</p>
        <p class="font-bold text-2xl">Be counted</p>
      </div>
      <div class="">
        <p class="font-light">
          Rule of Thumb is a crowd sourced court of public opinion where anyone and everyone can
          speak out and speak freely. It’s easy: You share your opinion, we analyze and put the data
          in a public report.
        </p>
      </div>
    </div>

    <div class="py-6">
      <div class="flex justify-between">
        <p class="pb-6 text-2xl font-light">Previous Rulings</p>
        <div class="pr-6 hidden md:block">
          <select
            name="view"
            id="view"
            class="list-view text-center"
            v-model="listView"
          >
            <option value="list">List</option>
            <option value="grid">Grid</option>
          </select>
        </div>
      </div>
      <div class="hidden md:block">
        <Grid
          v-if="listView === 'grid'"
          :cards="useVotes.votes"
        />
        <List
          v-else
          :cards="useVotes.votes"
        />
      </div>
      <div class="block md:hidden">
        <Grid :cards="useVotes.votes" />
      </div>
    </div>

    <!-- banner-bottom -->
    <div class="bg-banner-bottom">
      <div
        class="backdrop-banner-bottom py-3 px-9 md:px-6 w-full h-full flex flex-col items-center md:flex-row md:justify-around md:items-baseline"
      >
        <p class="text-2xl md:text-xl text-center pb-3">
          Is there anyone else you would want us to add?
        </p>
        <button class="border-2 border-black border-solid banner-button">Submit a name</button>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import Grid from './Grid.vue'
import List from './List.vue'

const listView = ref('list')

import { useVotesStore } from '../stores/votes'

const useVotes = useVotesStore()
</script>

<style>
.bg-banner-top {
  background: rgba(235, 235, 235, 1);
}

.bg-banner-bottom {
  background-image: url('img/bg-people.png');
}

.banner-button {
  width: 279px;
  height: 48px;
}

.backdrop-banner-bottom {
  background-color: rgba(255, 255, 255, 0.8);
}

.list-view {
  width: 173px;
  height: 36px;
  border: 2px solid #333333;
}

@media screen and (width >= 768px) {
  .banner-button {
    width: 224px;
  }
}
</style>

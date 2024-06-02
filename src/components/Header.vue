<template>
  <header class="bg-img-header bg-no-repeat bg-center bg-cover">
    <!-- Navigation -->
    <div class="nav-container flex justify-between items-center pt-6 pl-3 pr-6 pb-2">
      <h1 class="text-2xl text-white">Rule of thumb</h1>
      <div>
        <Hamburger />
      </div>
    </div>

    <!-- Featured Card -->
    <div class="pl-3 featured-card-container pb-6">
      <div class="pl-3 pt-3 pr-2 text-white featured-card-bg">
        <p class="text-xs font-light">What’s your opinion on</p>
        <h1 class="text-4xl">Pope Francis?</h1>
        <p class="font-light pt-3">
          He’s talking tough on clergy sexual abuse, or is he just another pervert protector?
          (thumbs down) or a true pedophile punishing pontiff? (thumbs up)
        </p>
        <p class="font-bold py-3">What’s Your Veredict?</p>
      </div>
      <div class="flex h-8">
        <div class="w-1/2 bg-thumbs-teal flex items-center justify-center">
          <Positive />
        </div>
        <div class="w-1/2 bg-thumbs-yellow flex items-center justify-center">
          <Negative />
        </div>
      </div>
    </div>

    <!-- closing bar -->
    <div class="flex h-9 w-full">
      <div class="pl-10 pr-2 closing-container flex items-center">
        <p class="text-white uppercase text-xs font-light">closing in</p>
      </div>
      <div class="pl-4 day-container flex-grow flex items-center">
        <p class="text-lg text-black">
          22
          <span class="font-light">days</span>
        </p>
      </div>
    </div>
  </header>
</template>

<script setup>
import Hamburger from './Icons/Hamburger.vue'
import Positive from './Icons/Positive.vue'
import Negative from './Icons/Negative.vue'
</script>

<style>
.nav-container {
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.698864) 0%, rgba(0, 0, 0, 0.0001) 100%);
}

.featured-card-container {
  width: 220px;
}

.featured-card-bg {
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(16px);
}

.closing-container {
  background-color: rgba(0, 0, 0, 0.4);
}

.day-container {
  background: rgba(255, 255, 255, 0.4);
}

.bg-img-header {
  background-image: url('img/pope-francis.png');
}
</style>

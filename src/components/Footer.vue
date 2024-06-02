<template>
  <footer class="px-3 py-4">
    <div class="border-dashed border-t-2 flex border-color-top">
      <div class="w-1/2">
        <ul>
          <li class="pt-4"><a href="#">Terms and Conditions</a></li>
          <li class="pt-4"><a href="#">Privacy Policy</a></li>
          <li class="pt-4"><a href="#">Contact Us</a></li>
        </ul>
      </div>
      <div class="w-1/2 flex justify-end items-end">
        <div>
          <p>Follow us</p>
          <div class="flex pb-1 justify-between">
            <FbIcon />
            <TwitterIcon />
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import FbIcon from './Icons/Fb.vue'
import TwitterIcon from './Icons/Twitter.vue'
</script>

<style>
.border-color-top {
  border-color: rgba(70, 70, 70, 1);
}
</style>

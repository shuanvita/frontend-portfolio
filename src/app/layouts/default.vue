<script setup lang="ts">
import TheHeader from '@/widgets/TheHeader/ui/TheHeader.vue';
import TheFooter from '@/widgets/TheFooter/ui/TheFooter.vue';
</script>

<template>
  <div class="p-[15px] xl:p-[69px]">
    <div class="border-1 border-1-line rounded-[8px]">
      <TheHeader />
      <main>
        <NuxtPage />
      </main>
      <TheFooter />
    </div>
  </div>
</template>

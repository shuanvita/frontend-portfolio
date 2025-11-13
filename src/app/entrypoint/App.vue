<script setup lang="ts">
import { TheHeader } from '@/widgets/TheHeader'
</script>

<template>
  <div
    class="min-h-[calc(100vh-30px)] rounded-lg border border-slate-700 bg-slate-900 xl:min-h-full"
  >
    <TheHeader />
    <main>
      <RouterView />
    </main>
    <footer>Footer</footer>
  </div>
</template>

<script setup lang="ts">
import { TheHeader } from '@/widgets/TheHeader'
</script>

<template>
  <div class="rounded-lg border border-slate-700 bg-slate-900">
    <TheHeader />
    <main>
      <RouterView />
    </main>
    <footer>Footer</footer>
  </div>
</template>

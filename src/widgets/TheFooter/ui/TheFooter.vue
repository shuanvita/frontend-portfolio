<script setup lang="ts">
import { globalData } from '@/shared/data'
</script>

<template>
  <footer
    class="grid grid-cols-[auto_1fr_auto] items-center border-t border-slate-700 text-base/normal text-slate-400"
  >
    <div class="px-6">{{ globalData.footer.text }}</div>
    <ul class="flex">
      <li
        class="border-l border-slate-700 last:border-r"
        v-for="(item, idx) in globalData.footer.socials"
        :key="`footer-social-${idx}`"
      >
        <router-link class="flex p-4 duration-200 hover:text-slate-50" :to="item.href">
          <v-svg :name="item.icon" />
        </router-link>
      </li>
    </ul>
    <router-link
      class="flex h-full items-center gap-2 border-l border-slate-700 px-8 duration-200 hover:text-slate-50"
      :to="globalData.footer.git.href"
    >
      <span>{{ globalData.footer.git.username }}</span>
      <v-svg name="git" />
    </router-link>
  </footer>
</template>

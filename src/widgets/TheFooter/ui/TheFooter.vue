<script setup lang="ts">
import { globalData } from '@/shared/data'
</script>

<template>
  <footer
    class="grid grid-cols-[auto_1fr_auto] items-center border-t border-slate-700 pt-px text-base/normal text-slate-400 xl:pt-0"
  >
    <div class="pr-11 pb-0.5 pl-6 xl:px-[23px] xl:pb-0">
      {{ globalData.footer.text }}
    </div>
    <ul class="flex">
      <li
        class="h-full border-l border-slate-700 last:border-r-0 xl:last:hidden xl:nth-last-of-type-2:border-r"
        v-for="(item, idx) in globalData.footer.socials"
        :key="`footer-social-${idx}`"
      >
        <router-link
          class="flex p-[14px_15px_16px_16px] duration-200 hover:text-slate-50 xl:p-[15px_15px_15px_16px]"
          :to="item.href"
        >
          <v-svg :name="item.icon" />
        </router-link>
      </li>
    </ul>
    <router-link
      class="hidden h-full items-center gap-[9px] border-l border-slate-700 px-[31px] duration-200 hover:text-slate-50 xl:flex"
      :to="globalData.footer.git.href"
    >
      <span>{{ globalData.footer.git.username }}</span>
      <v-svg name="git" />
    </router-link>
  </footer>
</template>

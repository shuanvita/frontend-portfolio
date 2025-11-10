<script setup lang="ts">
import { globalData } from '@/shared/data'
</script>

<template>
  <header
    class="text-step-2 grid grid-cols-[auto_1fr] items-center gap-[153px] border-b border-slate-700 pl-[23px] text-slate-400"
  >
    <router-link :to="globalData.header.logo.to"> {{ globalData.header.logo.name }}</router-link>
    <nav>
      <ul class="flex gap-px">
        <li
          class="border-r border-slate-700 first:border-l last:ml-auto last:justify-self-end last:border-r-0 last:border-l"
          v-for="item in globalData.header.navigation"
          :key="item.text"
        >
          <router-link
            class="flex px-[31px] py-[15px_12px] duration-200 hover:text-slate-50"
            active-class="text-slate-50 border-b-3 border-orange-300"
            :to="item.to"
            >{{ item.text }}</router-link
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

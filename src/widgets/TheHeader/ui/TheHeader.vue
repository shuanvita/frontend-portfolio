<script setup lang="ts">
import { ref } from 'vue'
import { globalData } from '@/shared/data'
import { useRouter } from 'vue-router'

const isMenuOpen = ref(false)
const router = useRouter()

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

router.afterEach(() => {
  isMenuOpen.value = false
})
</script>

<template>
  <header
    class="text-step-2 grid grid-cols-[auto_1fr] items-center border-b border-slate-700 pt-4 pr-4 pb-[15px] pl-6 text-slate-400 xl:gap-[153px] xl:py-0 xl:pr-0 xl:pl-[23px]"
  >
    <router-link :to="globalData.header.logo.to"> {{ globalData.header.logo.name }}</router-link>
    <button class="justify-self-end xl:hidden" @click="toggleMenu">
      <v-svg :name="isMenuOpen ? 'close' : 'burger'" />
    </button>
    <nav class="hidden xl:block">
      <ul class="flex gap-px">
        <li
          class="border-r border-slate-700 first:border-l last:ml-auto last:justify-self-end last:border-r-0 last:border-l"
          v-for="(item, idx) in globalData.header.navigation"
          :key="`nav-item-${idx}`"
        >
          <router-link
            class="flex border-b-3 border-transparent px-[31px] py-[15px_12px] duration-200 hover:text-slate-50"
            active-class="text-slate-50 border-orange-300!"
            :to="item.to"
            >{{ item.text }}</router-link
          >
        </li>
      </ul>
    </nav>
  </header>
  <div
    v-if="isMenuOpen"
    class="text-step-2 fixed inset-x-4 top-0 z-50 flex min-h-[calc(100vh-140px)] flex-col overflow-y-auto rounded-b-lg border border-slate-700 bg-slate-900 text-slate-50"
  >
    <div class="border-b border-slate-700 pt-[23px] pb-[9px] pl-6 text-slate-400">
      {{ globalData.header.mobileHint }}
    </div>
    <ul class="flex flex-col">
      <li
        class="border-b border-slate-700"
        v-for="(item, idx) in globalData.header.navigation"
        :key="`nav-item-mobile-${idx}`"
      >
        <router-link
          class="flex px-6 pt-[11px] pb-[9px]"
          active-class="text-orange-300"
          :to="item.to"
          >{{ item.text }}</router-link
        >
      </li>
    </ul>
  </div>
</template>

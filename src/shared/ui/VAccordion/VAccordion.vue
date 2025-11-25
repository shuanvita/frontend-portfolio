<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(false)

const toggle = () => {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <div class="text-base/normal">
    <div
      class="flex h-12 cursor-pointer items-center gap-3 border-b border-slate-700 px-[23px] duration-200 hover:text-slate-50"
      :class="isOpen ? 'text-slate-50' : 'text-slate-400'"
      @click="toggle"
    >
      <v-svg
        class="transition-transform duration-200"
        name="solid/arrow-down"
        size="16"
        :class="{ '-rotate-90': !isOpen }"
      />
      <slot name="header" />
    </div>
    <transition
      enter-active-class="transition-all duration-200 ease-out"
      leave-active-class="transition-all duration-150 ease-in"
      enter-from-class="max-h-0 opacity-0"
      enter-to-class="max-h-screen opacity-100"
      leave-from-class="max-h-screen opacity-100"
      leave-to-class="max-h-0 opacity-0"
    >
      <div class="px-[23px] py-3" v-show="isOpen">
        <slot name="content"></slot>
      </div>
    </transition>
  </div>
</template>

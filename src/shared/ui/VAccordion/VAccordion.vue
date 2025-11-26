<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: 'Title',
  },
  fullSize: {
    type: Boolean,
    default: false,
  },
})

const isOpen = ref(true)

const toggle = () => {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <div class="text-base/normal">
    <div :class="['max-h-12 border-b border-slate-700', isOpen ? 'border-b' : 'border-b-0']">
      <div
        :class="[
          'h-12 cursor-pointer items-center gap-3 px-[23px] duration-200 hover:text-slate-50',
          isOpen ? 'text-slate-50' : 'text-slate-400',
          props.fullSize ? 'flex' : 'inline-flex',
        ]"
        @click="toggle"
      >
        <v-svg
          class="transition-transform duration-200"
          name="solid/arrow-down"
          size="16"
          :class="{ '-rotate-90': !isOpen }"
        />
        <span>{{ props.title }}</span>
      </div>
    </div>
    <transition
      enter-active-class="transition-all duration-200 ease-out"
      leave-active-class="transition-all duration-150 ease-in"
      enter-from-class="max-h-0 opacity-0"
      enter-to-class="max-h-screen opacity-100"
      leave-from-class="max-h-screen opacity-100"
      leave-to-class="max-h-0 opacity-0"
    >
      <div class="px-[23px] pt-3 pb-[11px]" v-show="isOpen">
        <slot />
      </div>
    </transition>
  </div>
</template>

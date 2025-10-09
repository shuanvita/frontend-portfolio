<script setup lang="ts">
const props = defineProps({
  to: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['click-action'])
</script>

<template>
  <nuxt-link
    v-if="props.to"
    class="text-[16px] font-[450] text-secondary-1 hover:text-secondary-4"
    :to="props.to"
    @click="emit('click-action')"
  >
    <slot />
  </nuxt-link>
  <button
    v-else
    class="bg-black text-[14px] hover:bg-black/80 uppercase font-medium cursor-pointer h-[50px] text-white py-1 px-6"
    @click="emit('click-action')"
  >
    <slot />
  </button>
</template>

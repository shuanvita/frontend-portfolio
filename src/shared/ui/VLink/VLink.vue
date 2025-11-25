<script setup lang="ts">
import { defineProps } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  to: {
    type: [String, Object],
    required: true,
  },
  iconBefore: {
    type: String,
    default: '',
  },
  iconAfter: {
    type: String,
    default: '',
  },
  iconSize: {
    type: String,
    default: '16',
  },
  className: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <RouterLink :to="props.to" :class="['inline-flex items-center gap-2', props.className]">
    <v-svg v-if="props.iconBefore" :name="props.iconBefore" :size="props.iconSize" />
    <slot />
    <v-svg v-if="props.iconAfter" :name="props.iconAfter" :size="props.iconSize" />
  </RouterLink>
</template>

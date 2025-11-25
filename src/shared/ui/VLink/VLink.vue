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
  className: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <RouterLink :to="props.to" :class="['inline-flex items-center gap-3', props.className]">
    <v-svg v-if="props.iconBefore" :name="props.iconBefore" size="16" />
    <slot />
    <v-svg v-if="props.iconAfter" :name="props.iconAfter" size="16" />
  </RouterLink>
</template>

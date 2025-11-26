<script setup lang="ts">
import { defineProps } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  to: {
    type: [String, Object],
    required: true,
  },
  href: {
    type: String,
    default: '',
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
  <a
    v-if="props.href"
    :href="props.href"
    :class="[
      'inline-flex items-center gap-2 text-slate-400 duration-200 hover:text-slate-50',
      props.className,
    ]"
    target="_blank"
  >
    <v-svg v-if="props.iconBefore" :name="props.iconBefore" :size="props.iconSize" />
    <slot />
    <v-svg v-if="props.iconAfter" :name="props.iconAfter" :size="props.iconSize" />
  </a>
  <RouterLink
    v-if="props.to"
    :to="props.to"
    :class="['inline-flex items-center gap-2', props.className]"
  >
    <v-svg v-if="props.iconBefore" :name="props.iconBefore" :size="props.iconSize" />
    <slot />
    <v-svg v-if="props.iconAfter" :name="props.iconAfter" :size="props.iconSize" />
  </RouterLink>
</template>

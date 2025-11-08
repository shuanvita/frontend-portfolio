<script setup lang="ts">
const props = defineProps({
  size: {
    type: String,
    default: 'medium',
    validator: (value: string) => ['small', 'medium', 'large'].includes(value),
  },
})

const sizes = {
  small: 'text-[14px]/[1.4]',
  medium: 'text-[16px]/[1.5]',
  large: 'text-[18px]/[1.5]',
}
</script>

<template>
  <p :class="sizes[props.size as keyof typeof sizes]">
    <slot />
  </p>
</template>

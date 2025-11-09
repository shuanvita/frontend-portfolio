<script setup lang="ts">
const props = defineProps({
  variant: {
    type: String,
    default: 'default',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})

const variants = {
  default: 'bg-slate-600 text-slate-50 hover:bg-slate-500',
  primary: 'bg-orange-300 text-slate-950 hover:bg-orange-200',
  ghost: 'bg-gray-950 text-slate-50 hover:bg-slate-800',
  success: 'bg-green-500 text-slate-950 hover:bg-green-400',
  error: 'bg-red-500 text-slate-950 hover:bg-red-400',
  warning: 'bg-yellow-500 text-slate-950 hover:bg-yellow-400',
  link: 'p-0! text-rose-300 hover:text-rose-200 underline',
}
</script>

<template>
  <button
    :class="[
      'text-1 flex max-h-10 cursor-pointer items-center justify-center rounded-lg px-3 py-2.5 duration-200',
      props.disabled
        ? 'pointer-events-none bg-slate-700 text-slate-500'
        : [variants[props.variant as keyof typeof variants]],
    ]"
    :disabled="props.disabled"
  >
    <slot></slot>
  </button>
</template>

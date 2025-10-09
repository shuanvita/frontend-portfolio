<script setup lang="ts">
import type { INavigationItem } from '@/shared/data/types/global.type'

const props = defineProps({
  list: {
    type: Array as PropType<INavigationItem[]>,
    default: () => [],
  },
})
</script>

<template>
  <nav>
    <ul class="grid grid-cols-[max-content_max-content_max-content_1fr]">
      <li
        v-for="(item, idx) in props.list"
        :key="`nav-item-${idx}`"
        class="px-[31px] py-[17px] border-r-1 first:border-l-1 border-1-line last:border-r-0 last:justify-self-end last:border-l-1"
      >
        <ui-action :to="item.to">{{ item.text }}</ui-action>
      </li>
    </ul>
  </nav>
</template>

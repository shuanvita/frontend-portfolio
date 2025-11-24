<script lang="ts" setup></script>

<template>
  <div class="grid grid-cols-[311px_1fr]">
    <aside class="border-r border-slate-700">
      <slot name="aside" />
    </aside>
    <main>
      <div class="h-[48px] border-b border-slate-700 p-3">
        <slot name="topPanel" />
      </div>
      <slot />
    </main>
  </div>
</template>

<script lang="ts" setup>
import PageLayout from '@/app/layouts/PageLayout.vue'
</script>

<template>
  <PageLayout>
    <template #aside> Боковая панель </template>
    <template #topPanel>
      <div>Верхняя панель</div>
    </template>
    <div>
      <div>Тут форма</div>
      <div>Тут код при заполнении формы</div>
    </div>
  </PageLayout>
</template>

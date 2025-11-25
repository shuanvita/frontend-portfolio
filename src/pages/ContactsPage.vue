<script lang="ts" setup>
import PageLayout from '@/app/layouts/PageLayout.vue'
import { contactsData } from '@/shared/data'
</script>

<template>
  <PageLayout>
    <template #aside>
      <v-accordion title="contacts">
        <div class="flex flex-col gap-2">
          <v-link
            v-for="(item, idx) in contactsData.aside.contacts"
            :key="`contacts-item-${idx}`"
            class="text-slate-400 duration-200 hover:text-slate-50"
            :to="item.href"
            :iconBefore="item.icon"
            >{{ item.text }}</v-link
          >
        </div>
      </v-accordion>
      <v-accordion title="find-me-also-in" class="border-t border-slate-700">
        <div class="flex flex-col gap-2">
          <v-link
            v-for="(item, idx) in contactsData.aside.findMe"
            :key="`find-me-item-${idx}`"
            class="text-slate-400 duration-200 hover:text-slate-50"
            :to="item.href"
            :iconBefore="item.icon"
            >{{ item.text }}</v-link
          >
        </div>
      </v-accordion>
    </template>
    <template #topPanel> </template>
    <div>
      <div>Тут форма</div>
      <div>Тут код при заполнении формы</div>
    </div>
  </PageLayout>
</template>

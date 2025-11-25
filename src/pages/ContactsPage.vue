<script lang="ts" setup>
import PageLayout from '@/app/layouts/PageLayout.vue'
</script>

<template>
  <PageLayout>
    <template #aside>
      <v-accordion>
        <template #header>contacts</template>
        <template #content>
          <v-link
            class="mb-2 text-slate-400 duration-200 hover:text-slate-50"
            to="/about"
            iconBefore="solid/email"
            >user@gmail.com</v-link
          >
          <v-link
            class="text-slate-400 duration-200 hover:text-slate-50"
            to="/about"
            iconBefore="solid/phone"
            >+3598246359</v-link
          >
        </template>
      </v-accordion>
      <v-accordion>
        <template #header>find-me-also-in</template>
        <template #content>
          <div class="flex flex-col gap-1">
            <v-link
              class="text-slate-400 duration-200 hover:text-slate-50"
              to="/about"
              iconBefore="outline/link"
              >YouTube</v-link
            >
            <v-link
              class="text-slate-400 duration-200 hover:text-slate-50"
              to="/about"
              iconBefore="outline/link"
              >dev.to</v-link
            >
            <v-link
              class="text-slate-400 duration-200 hover:text-slate-50"
              to="/about"
              iconBefore="outline/link"
              >Instagram</v-link
            >
            <v-link
              class="text-slate-400 duration-200 hover:text-slate-50"
              to="/about"
              iconBefore="outline/link"
              >Twich</v-link
            >
          </div>
        </template>
      </v-accordion>
    </template>
    <template #topPanel> </template>
    <div>
      <div>Тут форма</div>
      <div>Тут код при заполнении формы</div>
    </div>
  </PageLayout>
</template>

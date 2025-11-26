<script lang="ts" setup>
import PageLayout from '@/app/layouts/PageLayout.vue'
import { contactsData } from '@/shared/data'
</script>

<template>
  <PageLayout>
    <template #aside>
      <v-accordion title="contacts">
        <div class="inline-flex flex-col gap-2">
          <v-link
            v-for="(item, idx) in contactsData.aside.contacts"
            :key="`contacts-item-${idx}`"
            :href="item.href"
            :iconBefore="item.icon"
            >{{ item.text }}</v-link
          >
        </div>
      </v-accordion>
      <v-accordion title="find-me-also-in" class="border-t border-slate-700">
        <div class="inline-flex flex-col gap-2">
          <v-link
            v-for="(item, idx) in contactsData.aside.findMe"
            :key="`find-me-item-${idx}`"
            :href="item.href"
            :iconBefore="item.icon"
            >{{ item.text }}</v-link
          >
        </div>
      </v-accordion>
    </template>
    <div class="grid min-h-[calc(100%-48px)] grid-cols-[632px_1fr]">
      <div class="grid place-content-center border-r-2 border-slate-700">
        <div class="max-w-[372px]">
          <FormKit type="form">
            <FormKit
              name="name"
              label-class="flex mb-[7px] text-slate-400 text-[16px]/[1.5]"
              label="_name:"
              validation="required"
              inner-class="border border-slate-700 rounded-lg"
              outer-class="mb-5"
              input-class="p-3 bg-slate-950 text-slate-400 rounded-lg"
              type="text"
              placeholder="Jonathan Davis"
            />
            <FormKit
              name="email"
              label="_email:"
              validation="required"
              type="email"
              placeholder="jonathan_davis@gmail.com"
            />
            <FormKit
              name="message"
              label="_message"
              type="textarea"
              validation="required"
              placeholder="your message here..."
            />
          </FormKit>
        </div>
      </div>
      <div>Тут код при заполнении формы</div>
    </div>
  </PageLayout>
</template>

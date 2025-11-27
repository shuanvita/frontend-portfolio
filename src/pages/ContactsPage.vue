<script lang="ts" setup>
import PageLayout from '@/app/layouts/PageLayout.vue'
import { contactsData } from '@/shared/data'
import { computed, ref } from 'vue'

const formData = ref({
  name: '',
  email: '',
  message: '',
})

const classesForm = {
  inner: 'border border-slate-700 rounded-lg',
  outer: 'mb-[22px]',
  input:
    'p-3 bg-slate-950 w-full max-h-[120px] text-slate-400 rounded-lg text-[16px]/[1.5] resize-none',
  label: 'flex mb-[7px] text-slate-400 text-[16px]/[1.5]',
  validation: 'text-red-500 mt-1 text-xs',
}

const classesTextarea = {
  inner: 'border border-slate-700 h-[120px] rounded-lg',
  outer: 'mb-[23px]',
  input:
    'p-3 bg-slate-950 h-full w-full max-h-[120px] text-slate-400 rounded-lg text-[16px]/[1.5] resize-none',
  label: 'flex mb-[7px] text-slate-400 text-[16px]/[1.5]',
  validation: 'text-red-500 mt-1 text-xs',
}

const codeString = computed(() => {
  return `const button = document.querySelector('#sendBtn');

const message = {
 name: "${formData.value.name}",
 email: "${formData.value.email}",
 message: "${formData.value.message}",
 date: "${new Date().toLocaleString('en-US', {
   day: '2-digit',
   month: '2-digit',
   year: 'numeric',
 })}"
}

button.addEventListener('click', () => {
 form.send(message);
})
`
})

const codeLines = computed(() => codeString.value.split('\n'))
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
    <div class="grid min-h-[calc(100%-48px)] xl:grid-cols-[632px_1fr]">
      <div class="grid place-content-center border-r-2 border-slate-700">
        <div class="w-screen max-w-[372px] pt-[130px] pb-[239px]">
          <FormKit type="form" v-model="formData" :actions="false" v-slot="{ invalid }">
            <FormKit
              name="name"
              label="_name:"
              validation="required"
              :classes="classesForm"
              :validation-messages="{ required: 'Name is required' }"
              type="text"
              placeholder="Jonathan Davis"
            />
            <FormKit
              name="email"
              label="_email:"
              validation="required"
              :validation-messages="{ required: 'Name is required' }"
              :classes="classesForm"
              type="email"
              placeholder="jonathan_davis@gmail.com"
            />
            <FormKit
              name="message"
              label="_message"
              type="textarea"
              :classes="classesTextarea"
              validation="required"
              placeholder="your message here..."
            />
            <FormKit
              type="submit"
              :disabled="Boolean(invalid)"
              label="submit-message"
              :classes="{
                input:
                  'bg-orange-300 text-slate-950 hover:bg-orange-200 text-[14px]/[1.4] flex max-h-10 cursor-pointer items-center justify-center rounded-lg px-3 py-2.5 duration-200',
              }"
            />
          </FormKit>
        </div>
      </div>

      <div
        class="flex gap-[29px] overflow-hidden rounded-lg bg-slate-900 pt-[13px] pl-[50px] text-slate-400"
      >
        <div class="flex flex-col">
          <span v-for="(line, index) in codeLines" :key="index">{{ index + 1 }}</span>
        </div>
        <highlightjs language="javascript" :code="codeString" />
      </div>
    </div>
  </PageLayout>
</template>

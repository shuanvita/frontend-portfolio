<script lang="ts" setup>
import { homeData } from '@/shared/data'
</script>

<template>
  <div
    class="relative z-10 mx-auto flex h-full max-w-[1210px] items-center gap-[146px] px-6 pb-7 xl:px-0 xl:pb-0"
  >
    <div class="z-10 text-slate-400">
      <div class="mb-[3px] text-lg/normal">{{ homeData.overTitle }}</div>
      <h1 class="mb-2 text-[48px]/[1.2] text-slate-50 xl:text-[60px]/[1.1]">
        {{ homeData.title }}
      </h1>
      <h2 class="mb-[75px] text-xl/normal text-indigo-500 xl:text-[30px]/[1.4]">
        {{ homeData.subtitle }}
      </h2>
      <div
        class="mb-2.5 text-[14px]/[1.4] xl:mb-2 xl:text-base/normal"
        v-for="(item, idx) in homeData.descriptions"
        :key="`home-description-${idx}`"
      >
        {{ item }}
      </div>
      <!-- TODO: сделать компонент с возможностью стилизовать текст из данных {tagStart} - {tagEnd} -->
      <div class="text-[14px]/[1.4] text-slate-50 xl:text-base/normal">
        <span class="text-indigo-500">const</span> <span class="text-teal-400">githubLink</span> =
        <router-link
          class="border-b border-rose-300 text-rose-300 hover:border-b-0 hover:text-rose-200"
          to="https://github.com/example/url"
          >“https://github.com/example/url”</router-link
        >
      </div>
    </div>
    <img class="z-10 hidden xl:block" src="/images/code-snippets.png" alt="code-snippets" />
    <!-- <img
      class="absolute top-[0px] -right-[285px] z-0 hidden xl:block"
      src="/images/home-blurs.png"
      alt=""
    />
    <img
      class="absolute -top-[30px] right-0 z-0 xl:hidden"
      src="/images/home-blurs-mobile.png"
      alt=""
    /> -->
  </div>
</template>

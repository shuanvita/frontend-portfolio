<script lang="ts" setup>
import { homeData } from '@/shared/data'
</script>

<template>
  <div
    class="relative z-10 mx-auto flex h-full max-w-[1210px] items-center gap-[146px] px-[24px] pb-[28px] xl:px-0 xl:pb-0"
  >
    <div class="relative z-10 text-slate-400">
      <div class="text-step-3 mb-[3px]">{{ homeData.overTitle }}</div>
      <h1 class="title-h2 xl:title-h1 mb-2 text-slate-50">{{ homeData.title }}</h1>
      <h2 class="title-h6 xl:title-h4 mb-[75px] text-indigo-500">{{ homeData.subtitle }}</h2>
      <div
        class="text-step-1 xl:text-step-2 mb-[10px] xl:mb-2"
        v-for="(item, idx) in homeData.descriptions"
        :key="`home-description-${idx}`"
      >
        {{ item }}
      </div>
      <!-- TODO: сделать компонент с возможностью стилизовать текст из данных {tagStart} - {tagEnd} -->
      <div class="text-step-1 xl:text-step-2 text-slate-50">
        <span class="text-indigo-500">const</span> <span class="text-teal-400">githubLink</span> =
        <router-link
          class="border-b border-rose-300 text-rose-300 hover:border-b-0 hover:text-rose-200"
          to="https://github.com/example/url"
          >“https://github.com/example/url”</router-link
        >
      </div>
    </div>
    <img class="z-10 hidden xl:block" src="/images/code-snippets.png" alt="code-snippets" />
    <img
      class="absolute top-[70px] right-[70px] z-0 hidden xl:block"
      src="/images/home-blurs.png"
      alt=""
    />
    <img
      class="absolute -top-[30px] right-[0px] z-0 xl:hidden"
      src="/images/home-blurs-mobile.png"
      alt=""
    />
  </div>
</template>

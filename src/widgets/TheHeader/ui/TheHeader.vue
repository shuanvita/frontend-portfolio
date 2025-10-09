<script setup lang="ts">
import { globalData } from '@/shared/data/index'
import NavigationMenu from '@/shared/custom/NavigationMenu/NavigationMenu.vue'
</script>

<template>
  <header class="grid grid-cols-[290px_1fr] items-center px-[21px] border-b-1 border-1-line">
    <ui-action class="text-[18px] font-[450]" :to="globalData.header.logo.to">
      {{ globalData.header.logo.name }}
    </ui-action>
    <NavigationMenu :list="globalData.header.navigation" />
    <!-- <nav>
      <ul class="grid grid-cols-[max-content_max-content_max-content_1fr]">
        <li>
          <nuxt-link class="px-[31px] py-[17px] block border-l-1 border-r-1 border-1-line hover:text-secondary-4" to="/"
            >_hello</nuxt-link
          >
        </li>
        <li>
          <nuxt-link class="px-[31px] py-[17px] block border-r-1 border-1-line" to="/about">_about-me</nuxt-link>
        </li>
        <li>
          <nuxt-link class="px-[31px] py-[17px] block border-r-1 border-1-line" to="/projects">_projects</nuxt-link>
        </li>
        <li class="justify-self-end">
          <nuxt-link class="px-[31px] py-[17px] block border-l-1 border-1-line" to="/contacts">_contact-me</nuxt-link>
        </li>
      </ul>
    </nav> -->
  </header>
</template>

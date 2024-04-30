<script setup lang="ts">
const props = defineProps<{
  title?: string
  subtitle?: string
  features?: {
    title?: string
    content: string
    image: string
    darkImage?: string
  }[]
}>()
</script>

<template>
  <div class="section">
    <div class="container">
      <!--Title-->
      <div v-if="props.title || props.subtitle" class="section-title has-text-centered">
        <h2 v-if="props.title" class="title is-2">
          {{ props.title }}
        </h2>
        <h4 v-if="props.subtitle">
          {{ props.subtitle }}
        </h4>
      </div>

      <!-- Feature -->
      <div
        v-for="(item, idx) in props.features"
        :key="idx"
        class="columns is-vcentered side-feature"
      >
        <template v-if="idx % 2 === 0">
          <div class="column is-6 has-text-centered">
            <img
              class="light-image featured-image"
              :src="item.image"
              alt=""
            >
            <img
              class="dark-image featured-image"
              :src="item.darkImage ?? item.image"
              alt=""
            >
          </div>
          <div class="column is-5">
            <h2 class="title m-b-10 is-centered-tablet-portrait">
              {{ item.title }}
            </h2>
            <p class="section-feature-description is-centered-tablet-portrait">
              <slot name="content" v-bind="{ item, idx }">
                {{ item.content }}
              </slot>
            </p>
          </div>
        </template>
        <template v-else>
          <div
            class="column is-6 has-text-centered h-hidden-desktop h-hidden-tablet-p h-hidden-tablet-l"
          >
            <img
              class="light-image featured-image"
              src="/images/illustrations/landing/feature-2.svg"
              alt=""
            >
            <img
              class="dark-image featured-image"
              src="/images/illustrations/landing/feature-2-dark.svg"
              alt=""
            >
          </div>
          <div class="column is-5 is-offset-1">
            <h2 class="title m-b-10 is-centered-tablet-portrait">
              {{ item.title }}
            </h2>
            <p class="section-feature-description is-centered-tablet-portrait">
              <slot name="content" v-bind="{ item, idx }">
                {{ item.content }}
              </slot>
            </p>
          </div>
          <div class="column is-6 has-text-centered h-hidden-mobile">
            <img
              class="light-image featured-image"
              :src="item.image"
              alt=""
            >
            <img
              class="dark-image featured-image"
              :src="item.darkImage ?? item.image"
              alt=""
            >
          </div>
        </template>
      </div>

      <slot />
    </div>
  </div>
</template>

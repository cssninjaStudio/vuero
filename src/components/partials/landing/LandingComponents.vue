<script setup lang="ts">
import type { PropType } from 'vue'
import { defineProps } from 'vue'
import {
  elements,
  components,
  forms,
  plugins,
} from '/@src/data/landing/components'

defineProps({
  activeTab: {
    type: String as PropType<'elements' | 'components' | 'forms' | 'plugins'>,
    default: 'elements',
  },
})
</script>

<template>
  <div
    id="demo-elements"
    :class="[activeTab === 'elements' && 'is-active']"
    class="tab-content has-text-left"
  >
    <div class="columns is-multiline">
      <div v-for="item in elements" :key="item.id" class="column is-3">
        <RouterLink :to="{ name: item.link }" class="component-box">
          <div class="component">
            <img
              class="light-image-l"
              :src="item.media.light"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-l"
              :src="item.media.dark"
              alt=""
              loading="lazy"
            />
          </div>
          <div class="component-title">{{ item.name }}</div>
        </RouterLink>
      </div>
    </div>
  </div>

  <!--Components-->
  <div
    id="demo-components"
    :class="[activeTab === 'components' && 'is-active']"
    class="tab-content has-text-left"
  >
    <div class="columns is-multiline">
      <!--Item-->
      <div v-for="item in components" :key="item.id" class="column is-3">
        <RouterLink :to="{ name: item.link }" class="component-box">
          <div class="component">
            <img
              class="light-image-l"
              :src="item.media.light"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-l"
              :src="item.media.dark"
              alt=""
              loading="lazy"
            />
          </div>
          <div class="component-title">{{ item.name }}</div>
        </RouterLink>
      </div>
    </div>
  </div>

  <!--Forms-->
  <div
    id="demo-forms"
    :class="[activeTab === 'forms' && 'is-active']"
    class="tab-content has-text-left"
  >
    <div class="columns is-multiline">
      <div v-for="item in forms" :key="item.id" class="column is-3">
        <RouterLink :to="{ name: item.link }" class="component-box">
          <div class="component">
            <img
              class="light-image-l"
              :src="item.media.light"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-l"
              :src="item.media.dark"
              alt=""
              loading="lazy"
            />
          </div>
          <div class="component-title">{{ item.name }}</div>
        </RouterLink>
      </div>
    </div>
  </div>

  <!--Sections-->
  <div
    id="plugins-sections"
    :class="[activeTab === 'plugins' && 'is-active']"
    class="tab-content has-text-left"
  >
    <div class="columns is-multiline">
      <div v-for="item in plugins" :key="item.id" class="column is-3">
        <RouterLink :to="{ name: item.link }" class="component-box">
          <div class="component">
            <img
              class="light-image-l"
              :src="item.media.light"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-l"
              :src="item.media.dark"
              alt=""
              loading="lazy"
            />
          </div>
          <div class="component-title">{{ item.name }}</div>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

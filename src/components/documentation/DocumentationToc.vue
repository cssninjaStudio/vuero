<script setup lang="ts">
import type { PropType } from 'vue'
import { computed, defineProps, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import VueScrollTo from 'vue-scrollto'

type TocItem = {
  id: string
  title: string
  level: number
}

const route = useRoute()

const props = defineProps({
  toc: {
    type: Array as PropType<TocItem[]>,
  },
})

const isActiveAnchor = computed(() => {
  return (id: string) => {
    if (`#${id}` === route.hash) {
      return true
    }
    return false
  }
})

const onTocClick = (id?: string) => {
  VueScrollTo.scrollTo(id ? `#${id}` : '#app', 500, { offset: -30 })
}

onMounted(() => {
  if (route.hash) {
    VueScrollTo.scrollTo(route.hash, 0, { offset: -30 })
  } else {
    VueScrollTo.scrollTo('#app', 0, { offset: -30 })
  }
})
</script>

<template>
  <div class="toc">
    <strong class="toc-title">Table of content</strong>
    <ul>
      <li
        v-for="item of toc"
        :key="item.id"
        :class="[`toc-level-${item.level}`]"
      >
        <a
          :href="`#${item.id}`"
          :class="[isActiveAnchor(item.id) && 'is-active']"
          @click="() => onTocClick(item.id)"
          >{{ item.title }}</a
        >
      </li>
      <li>
        <a href="#" @click="() => onTocClick()"
          ><span class="iconify" data-icon="ic:baseline-arrow-upward"></span>
          top</a
        >
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@import '../../assets/scss/abstracts/_variables.scss';
@import '../../assets/scss/abstracts/_mixins.scss';

.toc {
  position: fixed;
  transition: opacity 0.3s ease;
  opacity: 0.6;

  &:hover,
  &:focus-within {
    opacity: 1;
  }
}

.toc-title {
  color: $muted-grey;
  padding-bottom: 4px;
  display: block;
}

.toc-level-4 {
  padding-left: 14px;
}

.toc-level-5 {
  padding-left: 24px;
}

a {
  color: $title-grey;

  &.is-active,
  &:focus,
  &:hover {
    color: $primary;
  }
}

.is-dark {
  .toc-title {
    color: $dark-dark-text;
  }
}
</style>

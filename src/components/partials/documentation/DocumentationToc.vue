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

defineProps({
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
  if (route.hash && !route.hash.startsWith('#&')) {
    VueScrollTo.scrollTo(route.hash, 0, { offset: -30 })
  } else {
    VueScrollTo.scrollTo('#app', 0, { offset: -30 })
  }
})
</script>

<template>
  <div class="toc">
    <strong class="toc-title">Contents</strong>
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
        <a class="back-to-top" href="#" @click="() => onTocClick()">
          <span>Back To Top</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@import '../../../scss/abstracts/_variables.scss';
@import '../../../scss/abstracts/_mixins.scss';

.toc {
  position: fixed;
  display: block;
  padding-left: 2rem;
  transition: opacity 0.3s ease;
  opacity: 0.6;

  &:hover,
  &:focus-within {
    opacity: 1;
  }
}

.toc-title {
  font-family: $font-alt;
  font-size: 0.9rem;
  text-transform: uppercase;
  color: $dark-text;
  padding-bottom: 4px;
  margin-bottom: 1.25rem;
  display: block;
}

ul {
  border-left: 1px solid darken($fade-grey, 6%);

  li {
    padding: 0.25rem 0;

    a {
      position: relative;
      left: -2px;
      font-family: $font;
      border-left: 3px solid transparent;
      padding: 0.5rem 1.25rem;

      &.is-active {
        font-weight: 500;
        border-color: $primary;
      }
    }
  }
}

.toc-level-4 {
  padding-left: 14px;

  + .toc-level-3 {
    padding-top: 4px;
  }
}

.toc-level-5 {
  padding-left: 24px;
}

a {
  color: $light-text;

  &.is-active {
    color: $primary;
  }

  &:focus:not(.is-active),
  &:hover:not(.is-active) {
    color: $dark-text;
  }
}

.back-to-top {
  font-size: 0.75rem;
  text-transform: uppercase;
}

.is-dark {
  .toc-title {
    color: $dark-dark-text;
  }

  ul {
    border-color: lighten($dark-sidebar, 22%);
  }

  a {
    &:focus:not(.is-active),
    &:hover:not(.is-active) {
      color: $white;
    }
  }
}
</style>

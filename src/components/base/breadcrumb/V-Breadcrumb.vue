<script setup lang="ts">
import type { PropType } from 'vue'
import { defineProps } from 'vue'

type BreadcrumbSeparator = undefined | 'arrow' | 'bullet' | 'dot' | 'succeeds'
type BreadcrumbAlign = undefined | 'center' | 'right'
type BreadcrumbItem = {
  label: string
  hideLabel?: boolean
  icon?: string
  link?: string
  to?: any
}

const props = defineProps({
  items: {
    type: Array as PropType<BreadcrumbItem[]>,
    required: true,
  },
  separator: {
    type: String as PropType<BreadcrumbSeparator>,
    default: undefined,
    validator: (value: BreadcrumbSeparator) => {
      // The value must match one of these strings
      if (
        [undefined, 'arrow', 'bullet', 'dot', 'succeeds'].indexOf(value) === -1
      ) {
        console.warn(
          `V-Breadcrumb: invalid "${value}" separator. Should be arrow, bullet, dot, succeeds or undefined`
        )
        return false
      }

      return true
    },
  },
  align: {
    type: String as PropType<BreadcrumbAlign>,
    default: undefined,
    validator: (value: BreadcrumbAlign) => {
      // The value must match one of these strings
      if ([undefined, 'center', 'right'].indexOf(value) === -1) {
        console.warn(
          `V-Breadcrumb: invalid "${value}" align. Should be center, right or undefined`
        )
        return false
      }

      return true
    },
  },
  withIcons: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <nav
    role="navigation"
    class="breadcrumb"
    aria-label="breadcrumbs"
    itemscope
    itemtype="https://schema.org/BreadcrumbList"
    :class="[`has-${separator}-separator`, align && `is-${align}`]"
  >
    <ul>
      <li
        v-for="(item, key) in items"
        :key="key"
        :aria-current="key === items.length - 1 ? 'page' : ''"
        itemprop="itemListElement"
        itemscope
        itemtype="https://schema.org/ListItem"
      >
        <RouterLink
          v-if="item.to"
          class="breadcrumb-item"
          itemprop="item"
          :to="item.to"
        >
          <span
            v-if="withIcons && !!item.icon"
            class="icon is-small"
            :class="[item.hideLabel && withIcons && !!item.icon && 'is-solo']"
          >
            <i class="iconify" :data-icon="item.icon"></i>
          </span>
          <meta
            v-if="item.hideLabel && withIcons && !!item.icon"
            itemprop="name"
            :content="item.label"
          />
          <span v-else itemprop="name">{{ item.label }}</span>

          <meta itemprop="position" :content="key + 1" />
        </RouterLink>
        <a
          v-else-if="item.link"
          class="breadcrumb-item"
          itemprop="item"
          :href="item.link"
        >
          <span
            v-if="withIcons && !!item.icon"
            class="icon is-small"
            :class="[item.hideLabel && withIcons && !!item.icon && 'is-solo']"
          >
            <i class="iconify" :data-icon="item.icon"></i>
          </span>
          <meta
            v-if="item.hideLabel && withIcons && !!item.icon"
            itemprop="name"
            :content="item.label"
          />
          <span v-else itemprop="name">{{ item.label }}</span>

          <meta itemprop="position" :content="key + 1" />
        </a>
        <span v-else class="breadcrumb-item">
          <span
            v-if="withIcons && !!item.icon"
            class="icon is-small"
            :class="[item.hideLabel && withIcons && !!item.icon && 'is-solo']"
          >
            <i class="iconify" :data-icon="item.icon"></i>
          </span>
          <meta
            v-if="item.hideLabel && withIcons && item.icon"
            itemprop="name"
            :content="item.label"
          />
          <span v-else itemprop="name">{{ item.label }}</span>

          <meta itemprop="position" :content="key + 1" />
        </span>
      </li>
    </ul>
  </nav>
</template>

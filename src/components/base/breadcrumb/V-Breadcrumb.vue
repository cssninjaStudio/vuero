<script setup lang="ts">
export type BreadcrumbSeparator = 'arrow' | 'bullet' | 'dot' | 'succeeds'
export type BreadcrumbAlign = 'center' | 'right'
export type BreadcrumbItem = {
  label: string
  hideLabel?: boolean
  icon?: string
  link?: string
  to?: any
}

const props = withDefaults(
  defineProps<{
    items: BreadcrumbItem[]
    separator?: BreadcrumbSeparator
    align?: BreadcrumbAlign
    withIcons?: boolean
  }>(),
  {
    separator: undefined,
    align: undefined,
  }
)
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
            <i aria-hidden="true" class="iconify" :data-icon="item.icon"></i>
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
            <i aria-hidden="true" class="iconify" :data-icon="item.icon"></i>
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
            <i aria-hidden="true" class="iconify" :data-icon="item.icon"></i>
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

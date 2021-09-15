<script setup lang="ts">
export type VBreadcrumbSeparator = 'arrow' | 'bullet' | 'dot' | 'succeeds'
export type VBreadcrumbAlign = 'center' | 'right'
export interface VBreadcrumbItem {
  label: string
  hideLabel?: boolean
  icon?: string
  link?: string
  to?: any
}
export interface VBreadcrumbsProps {
  items: VBreadcrumbItem[]
  separator?: VBreadcrumbSeparator
  align?: VBreadcrumbAlign
  withIcons?: boolean
}

const props = withDefaults(defineProps<VBreadcrumbsProps>(), {
  separator: undefined,
  align: undefined,
})
</script>

<template>
  <nav
    role="navigation"
    class="breadcrumb"
    aria-label="breadcrumbs"
    itemscope
    itemtype="https://schema.org/BreadcrumbList"
    :class="[
      `has-${props.separator}-separator`,
      props.align && `is-${props.align}`,
    ]"
  >
    <ul>
      <li
        v-for="(item, key) in props.items"
        :key="key"
        :aria-current="key === items.length - 1 ? 'page' : undefined"
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
            v-if="props.withIcons && !!item.icon"
            class="icon is-small"
            :class="[
              item.hideLabel && props.withIcons && !!item.icon && 'is-solo',
            ]"
          >
            <i aria-hidden="true" class="iconify" :data-icon="item.icon"></i>
          </span>
          <meta
            v-if="item.hideLabel && props.withIcons && !!item.icon"
            itemprop="name"
            :content="item.label"
          />
          <span v-else itemprop="name">{{ item.label }}</span>

          <meta itemprop="position" :content="`${key + 1}`" />
        </RouterLink>
        <a
          v-else-if="item.link"
          class="breadcrumb-item"
          itemprop="item"
          :href="item.link"
        >
          <span
            v-if="props.withIcons && !!item.icon"
            class="icon is-small"
            :class="[
              item.hideLabel && props.withIcons && !!item.icon && 'is-solo',
            ]"
          >
            <i aria-hidden="true" class="iconify" :data-icon="item.icon"></i>
          </span>
          <meta
            v-if="item.hideLabel && props.withIcons && !!item.icon"
            itemprop="name"
            :content="item.label"
          />
          <span v-else itemprop="name">{{ item.label }}</span>

          <meta itemprop="position" :content="`${key + 1}`" />
        </a>
        <span v-else class="breadcrumb-item">
          <span
            v-if="props.withIcons && !!item.icon"
            class="icon is-small"
            :class="[
              item.hideLabel && props.withIcons && !!item.icon && 'is-solo',
            ]"
          >
            <i aria-hidden="true" class="iconify" :data-icon="item.icon"></i>
          </span>
          <meta
            v-if="item.hideLabel && props.withIcons && item.icon"
            itemprop="name"
            :content="item.label"
          />
          <span v-else itemprop="name">{{ item.label }}</span>

          <meta itemprop="position" :content="`${key + 1}`" />
        </span>
      </li>
    </ul>
  </nav>
</template>

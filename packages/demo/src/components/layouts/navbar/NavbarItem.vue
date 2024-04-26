<script setup lang="ts">
import type { NavbarItem, NavbarItemMegamenu, NavbarItemAction } from './navbar.types'
import { useNavbarLayoutContext } from './navbar.context'

const props = defineProps<{
  link: NavbarItem
}>()

const { activeSubnavId, toggleSubnav } = useNavbarLayoutContext()
</script>

<template>
  <NavbarDropdown
    v-if="props.link.type === 'dropdown'"
    :key="`dropdown-${props.link.id}`"
    :link="props.link"
  />
  <a
    v-if="props.link.type === 'megamenu'"
    :key="`megamenu-${props.link.id}`"
    :class="[
      activeSubnavId === props.link.id && 'is-active',
    ]"
    class="centered-link centered-link-toggle"
    tabindex="0"
    role="button"
    @keydown.enter.prevent="toggleSubnav((props.link as NavbarItemMegamenu).id)"
    @click="toggleSubnav((props.link as NavbarItemMegamenu).id)"
  >
    <VIcon
      v-if="props.link.icon"

      :icon="props.link.icon"
    />
    <span v-if="props.link.label">{{ props.link.label }}</span>
  </a>
  <a
    v-else-if="props.link.type === 'action'"
    :key="`action-${props.link.label}`"
    class="centered-link centered-link-search"
    tabindex="0"
    role="button"
    @keydown.enter.prevent="(props.link as NavbarItemAction).onClick"
    @click="(props.link as NavbarItemAction).onClick"
  >
    <VIcon
      v-if="props.link.icon"

      :icon="props.link.icon"
    />
    <span v-if="props.link.label">{{ props.link.label }}</span>
  </a>
  <VLink
    v-else-if="props.link.type === 'link'"
    :key="`link-${props.link.label}`"
    class="centered-link centered-link-search"
    :to="props.link.to"
  >
    <VIcon
      v-if="props.link.icon"

      :icon="props.link.icon"
    />
    <span v-if="props.link.label">{{ props.link.label }}</span>
  </VLink>
</template>

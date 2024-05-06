<script setup lang="ts">
import type { NavbarItem, NavbarItemDropdown, NavbarItemMegamenu, NavbarItemAction } from './navbar.types'
import { useNavbarLayoutContext } from './navbar.context'

const props = defineProps<{
  link: NavbarItem
}>()

const { activeMobileSubsidebarId, toggleMobileSubnav } = useNavbarLayoutContext()
</script>

<template>
  <li>
    <a
      v-if="props.link.type === 'dropdown'"
      :class="[activeMobileSubsidebarId === props.link.id && 'is-active']"
      tabindex="0"
      role="button"
      @keydown.enter.prevent="toggleMobileSubnav((props.link as NavbarItemDropdown).id)"
      @click="toggleMobileSubnav((props.link as NavbarItemDropdown).id)"
    >
      <VIcon
        :icon="props.link.icon"
      />
    </a>
    <a
      v-if="props.link.type === 'megamenu'"
      :class="[activeMobileSubsidebarId === props.link.id && 'is-active']"
      tabindex="0"
      role="button"
      @keydown.enter.prevent="toggleMobileSubnav((props.link as NavbarItemMegamenu).id)"
      @click="toggleMobileSubnav((props.link as NavbarItemMegamenu).id)"
    >
      <VIcon
        :icon="props.link.icon"
      />
    </a>
    <a
      v-else-if="props.link.type === 'action'"
      tabindex="0"
      role="button"
      @keydown.enter.prevent="(props.link as NavbarItemAction).onClick"
      @click="(props.link as NavbarItemAction).onClick"
    >
      <VIcon
        :icon="props.link.icon"
      />
    </a>
    <VLink
      v-else-if="props.link.type === 'link'"
      :to="props.link.to"
    >
      <VIcon
        :icon="props.link.icon"
      />
    </VLink>
  </li>
</template>

<script setup lang="ts">
import type { NavbarItemDropdown } from './navbar.types'
import { useNavbarLayoutContext } from './navbar.context'

const props = defineProps<{
  link: NavbarItemDropdown
}>()

const tippyRef = ref<any>()

const {
  activeSubnavId,
  toggleSubnav,
} = useNavbarLayoutContext()

watch(activeSubnavId, () => {
  if (activeSubnavId.value === props.link.id) {
    tippyRef.value?.show()
  }
  else {
    tippyRef.value?.hide()
  }
})

function onHidden() {
  if (activeSubnavId.value === props.link.id) {
    activeSubnavId.value = undefined
  }
}
</script>

<template>
  <div class="is-flex">
    <Tippy
      ref="tippyRef"
      :key="`dropdown-${props.link.id}`"
      trigger="manual"
      class="is-flex mx-1"
      content-class="content-tet"
      interactive
      :offset="[0, 10]"
      :duration="[150, 100]"
      @hidden="onHidden"
    >
      <a
        :class="[
          activeSubnavId === props.link.id && 'is-active',
        ]"
        class="centered-link centered-link-toggle"
        tabindex="0"
        role="button"
        @keydown.enter.prevent="toggleSubnav(props.link.id)"
        @click="toggleSubnav(props.link.id)"
      >
        <VIcon
          v-if="props.link.icon"

          :icon="props.link.icon"
        />
        <span>{{ props.link.label }}</span>
      </a>

      <template #content>
        <ul class="centered-link-dropdown has-slimscroll">
          <li v-for="item of props.link.children" :key="item.to">
            <VLink :to="item.to">
              <VIcon
                v-if="item.icon"

                :icon="item.icon"
              />
              <span>{{ item.label }}</span>
            </VLink>
          </li>
        </ul>
      </template>
    </Tippy>
  </div>
</template>

<style scoped lang="scss">
.centered-link-dropdown {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-height: 300px;
  padding: 1rem 0;

  a {
    display: flex;
    padding: 0 4rem 0 1rem;
    align-items: center;
    gap: 1rem;
    border-radius: 0.5rem;
    transition: background-color 0.2s;
    font-family: var(--font);
    font-size: 0.9rem;
    color: color-mix(in oklab, var(--light-text), black 5%);

    &:focus,
    &:hover {
      color: var(--primary);
    }

    .iconify {
      font-size: 1.2rem;
      opacity: 0.5;
    }
  }
}
</style>

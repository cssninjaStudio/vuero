<script setup lang="ts">
import { withoutTrailingSlash } from 'ufo'

const props = defineProps<{
  links: {
    label: string
    to: string
    icon?: string
    tag?: string | number
  }[]
}>()

const route = useRoute()
const isOpen = ref(false)

onMounted(() => {
  if (props.links.some(link => withoutTrailingSlash(link.to) === withoutTrailingSlash(route.path))) {
    isOpen.value = true
  }
})

function toggle() {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <li class="collapse-links has-children" :class="[isOpen && 'active']">
    <div class="collapse-wrap">
      <a
        role="button"
        tabindex="0"
        class="parent-link"
        @click.prevent="() => toggle()"
        @keydown.enter.prevent="() => toggle()"
      >
        <slot />
        <VIcon
          class="rtl-hidden"
          icon="lucide:chevron-right"
        />
        <VIcon
          class="ltr-hidden"
          icon="lucide:chevron-left"
        />
      </a>
    </div>
    <Transition
      name="collapse-links-transition"
      mode="out-in"
    >
      <ul v-if="isOpen" class="collapse-content">
        <li
          v-for="child of props.links"
          :key="child.to"
        >
          <VLink
            class="is-submenu"
            :to="child.to"
          >
            <VIcon
              v-if="child.icon"
              :icon="child.icon"
            />
            <span>{{ child.label }}</span>
            <VTag
              v-if="child.tag"
              :label="child.tag"
              color="primary"
              outlined
              curved
            />
          </VLink>
        </li>
      </ul>
    </Transition>
  </li>
</template>

<style lang="scss" scoped>
.collapse-links {
  overflow: hidden;
  user-select: none;
}

.collapse-links-transition-enter-active,
.collapse-links-transition-leave-active {
  opacity: 1;
  transform: translateY(0) scaleY(1);
  transform-origin: center top;
}

.collapse-links-transition-enter-active {
  transition:
    opacity 0.2s ease-in,
    transform 0.1s ease-in;
}

.collapse-links-transition-leave-active {
  transition:
    opacity 0.2s ease-out,
    transform 0.1s ease-out;
}

.collapse-links-transition-enter-from,
.collapse-links-transition-leave-to {
  transform: translateY(-10px) scaleY(0.2);
  opacity: 0;
}

@media (prefers-reduced-motion: reduce) {
  .collapse-links-transition-enter-active,
  .collapse-links-transition-leave-active {
    transition: none;
  }
}
</style>

<script setup lang="ts">
import { ref } from 'vue'

export interface VAccordionItem {
  title: string
  content: string
}
export interface VAccordionProps {
  items: VAccordionItem[]
  openItems?: number[]
  exclusive?: boolean
}

const props = withDefaults(defineProps<VAccordionProps>(), {
  items: () => [],
  openItems: () => [],
})

const internalOpenItems = ref(props.openItems)
const toggle = (key: number) => {
  const wasOpen = internalOpenItems.value.includes(key)

  if (props.exclusive) {
    internalOpenItems.value.splice(0, internalOpenItems.value.length)

    if (!wasOpen) {
      internalOpenItems.value.push(key)
    }

    return
  }

  if (wasOpen) {
    internalOpenItems.value.splice(internalOpenItems.value.indexOf(key), 1)
  } else {
    internalOpenItems.value.push(key)
  }
}
</script>

<template>
  <div class="single-accordion" :class="[exclusive && 'is-exclusive']">
    <details
      v-for="(item, key) in items"
      :key="key"
      class="accordion-item"
      :open="internalOpenItems?.includes(key) ?? undefined"
      :class="[internalOpenItems?.includes(key) && 'is-active']"
    >
      <slot name="accordion-item" :item="item" :index="key" :toggle="toggle">
        <summary
          class="accordion-header"
          tabindex="0"
          @keydown.space.prevent="() => toggle(key)"
          @click.prevent="() => toggle(key)"
        >
          <slot name="accordion-item-summary" :item="item" :index="key" :toggle="toggle">
            {{ item.title }}
          </slot>
        </summary>
        <div class="accordion-content">
          <slot name="accordion-item-content" :item="item" :index="key" :toggle="toggle">
            {{ item.content }}
          </slot>
        </div>
      </slot>
    </details>
  </div>
</template>

<style lang="scss">
.single-accordion {
  background: var(--white);
  margin: 0 auto;
  box-shadow: var(--light-box-shadow);
  border-radius: var(--radius-large);
  overflow: hidden;

  .accordion-item {
    &.is-active {
      .accordion-header {
        &::before {
          background-color: var(--primary);
        }
      }

      .accordion-content {
        display: block;
      }
    }
  }

  .accordion-header {
    border-bottom: 1px solid #dde0e7;
    color: var(--dark-text);
    cursor: pointer;
    font-weight: 600;
    font-size: 0.95rem;
    font-family: var(--font-alt);
    padding: 1.5rem;
    display: block;

    &:hover,
    &:focus {
      background: #f6f7f9;
    }

    &::before {
      content: '';
      vertical-align: middle;
      display: inline-block;
      width: 0.75rem;
      height: 0.75rem;
      border-radius: var(--radius-rounded);
      background-color: #b1b5be;
      margin-right: 0.75rem;
    }
  }

  .accordion-content {
    display: none;
    border-bottom: 1px solid #dde0e7;
    background: #f6f7f9;
    padding: 1.5rem;
    color: var(--light-text);
    font-family: var(--font);
  }
}

.is-dark {
  .single-accordion {
    background: var(--dark-sidebar-light-4);
    border-color: var(--dark-sidebar-light-12);

    .accordion-header {
      color: var(--dark-dark-text);
      border-color: var(--dark-sidebar-light-12);

      &:hover,
      &:focus {
        background: var(--dark-sidebar-light-6);
      }

      &::before {
        background: var(--dark-sidebar);
      }

      &.is-active {
        &::before {
          background-color: var(--primary);
        }
      }
    }

    .accordion-content {
      background: var(--dark-sidebar);
      border-color: var(--dark-sidebar-light-8);
    }
  }
}
</style>

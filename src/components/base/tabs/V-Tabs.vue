<script setup lang="ts">
import type { PropType } from 'vue'
import { computed, ref, defineProps } from 'vue'

type TabItem = {
  label: string
  value: string
  icon?: string
}
type TabsType = undefined | 'boxed' | 'toggle' | 'rounded'
type TabsAlign = undefined | 'centered' | 'right'

const props = defineProps({
  tabs: {
    type: Array as PropType<TabItem[]>,
    required: true,
  },
  selected: {
    type: String,
    default: undefined,
  },
  type: {
    type: String as PropType<TabsType>,
    default: undefined,
    validator: (value: TabsType) => {
      // The value must match one of these strings
      if ([undefined, 'boxed', 'toggle', 'rounded'].indexOf(value) === -1) {
        console.warn(
          `V-Tabs: invalid "${value}" type. Should be boxed, toggle, rounded or undefined`
        )
        return false
      }

      return true
    },
  },
  align: {
    type: String as PropType<TabsAlign>,
    default: undefined,
    validator: (value: TabsType) => {
      // The value must match one of these strings
      if ([undefined, 'centered', 'right'].indexOf(value) === -1) {
        console.warn(
          `V-Tabs: invalid "${value}" align. Should be centered, right or undefined`
        )
        return false
      }

      return true
    },
  },
  slider: {
    type: Boolean,
    default: false,
  },
  slow: {
    type: Boolean,
    default: false,
  },
})

const activeValue = ref(props.selected)
const sliderClass = computed(() => {
  if (!props.slider) {
    return ''
  }

  if (props.type === 'rounded') {
    if (props.tabs.length === 3) {
      return 'is-triple-slider'
    }
    if (props.tabs.length === 2) {
      return 'is-slider'
    }

    return ''
  }

  if (!props.type) {
    if (props.tabs.length === 3) {
      return 'is-squared is-triple-slider'
    }
    if (props.tabs.length === 2) {
      return 'is-squared is-slider'
    }
  }

  return ''
})
</script>

<template>
  <div class="tabs-wrapper" :class="[sliderClass]">
    <div class="tabs-inner">
      <div
        class="tabs"
        :class="[
          props.align === 'centered' && 'is-centered',
          props.align === 'right' && 'is-right',
          props.type === 'rounded' &&
            !props.slider &&
            'is-toggle is-toggle-rounded',
          props.type === 'toggle' && 'is-toggle',
          props.type === 'boxed' && 'is-boxed',
        ]"
      >
        <ul>
          <li
            v-for="(tab, key) in tabs"
            :key="key"
            :class="[activeValue === tab.value && 'is-active']"
          >
            <a @click="activeValue = tab.value">
              <V-Icon v-if="tab.icon" :icon="tab.icon" />
              <span>{{ tab.label }}</span>
            </a>
          </li>
          <li v-if="sliderClass" class="tab-naver"></li>
        </ul>
      </div>
    </div>

    <div class="tab-content is-active">
      <transition :name="props.slow ? 'fade-slow' : 'fade-fast'" mode="out-in">
        <slot name="tab" :activeValue="activeValue"></slot>
      </transition>
    </div>
  </div>
</template>

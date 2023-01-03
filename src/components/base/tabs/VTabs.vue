<script setup lang="ts">
import type { RouteLocationAsString } from 'unplugin-vue-router'

export type VTabsType = 'boxed' | 'toggle' | 'rounded'
export type VTabsAlign = 'centered' | 'right'
export interface VTabsItem {
  label: string
  value: string
  icon?: string
  to?: RouteLocationAsString
}
export interface VTabsProps {
  tabs: VTabsItem[]
  selected?: string
  type?: VTabsType
  align?: VTabsAlign
  slider?: boolean
  slow?: boolean
}

const emit = defineEmits<{
  (e: 'update:selected', value: any): void
}>()
const props = withDefaults(defineProps<VTabsProps>(), {
  selected: undefined,
  type: undefined,
  align: undefined,
})

const activeValue = ref(props.selected || props.tabs?.[0]?.value)
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

function toggle(value: string) {
  activeValue.value = value
}

watch(
  () => props.selected,
  (value) => {
    activeValue.value = value ?? ''
  }
)

watch(activeValue, (value) => {
  emit('update:selected', value)
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
          props.type === 'rounded' && !props.slider && 'is-toggle is-toggle-rounded',
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
            <slot
              name="tab-link"
              v-bind="{
                activeValue,
                tab,
                key,
                toggle,
              }"
            >
              <a
                :href="tab.to ?? '#'"
                @keydown.prevent.enter="() => toggle(tab.value)"
                @click.prevent="() => toggle(tab.value)"
              >
                <VIcon v-if="tab.icon" :icon="tab.icon" />
                <span>
                  <slot
                    name="tab-link-label"
                    v-bind="{
                      activeValue,
                      tab,
                      key,
                      toggle,
                    }"
                  >
                    {{ tab.label }}
                  </slot>
                </span>
              </a>
            </slot>
          </li>
          <li v-if="sliderClass" class="tab-naver"></li>
        </ul>
      </div>
    </div>

    <div class="tab-content is-active">
      <Transition :name="props.slow ? 'fade-slow' : 'fade-fast'" mode="out-in">
        <slot
          name="tab"
          v-bind="{
            activeValue,
          }"
        ></slot>
      </Transition>
    </div>
  </div>
</template>

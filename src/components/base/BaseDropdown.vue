<script setup lang="ts">
import { defineProps } from 'vue'
import useDropdown from '/@src/composition/use/useDropdown'

const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  up: {
    type: Boolean,
    default: false,
  },
  right: {
    type: Boolean,
    default: false,
  },
  dots: {
    type: Boolean,
    default: false,
  },
  modern: {
    type: Boolean,
    default: false,
  },
  spaced: {
    type: Boolean,
    default: false,
  }
})

const {
  dropdownElement,
  open,
  close,
  toggle,
  isOpen,
} = useDropdown()
</script>

<template inherit-attrs="false">
  <div
    ref="dropdownElement"
    :class="[
      isOpen && 'is-active',
      right && 'is-right',
      up && 'is-up',
      dots && 'is-dots',
      modern && 'is-modern',
      spaced && 'is-spaced',
    ]"
    class="dropdown dropdown-trigger"
  >
    <slot
      name="button"
      :title="title"
      :open="open"
      :close="close"
      :toggle="toggle"
      :is-open="isOpen"
    >
      <button v-bind="$attrs" class="is-trigger button" @click="toggle">
        <span v-if="title">{{ title }}</span>
        <span :class="[!modern && 'icon is-small', modern && 'caret']">
          <Icon v-if="!isOpen" icon="fa:angle-down" />
          <Icon v-else icon="fa:angle-up" />
        </span>
      </button>
    </slot>

    <div class="dropdown-menu" role="menu">
      <div class="dropdown-content">
        <slot name="content">
          <a href="#" class="dropdown-item"> Dropdown item </a>
          <a href="#" class="dropdown-item"> Other dropdown item </a>
          <a href="#" class="dropdown-item is-active"> Active dropdown item </a>
          <a href="#" class="dropdown-item"> Other dropdown item </a>
          <hr class="dropdown-divider" />
          <a href="#" class="dropdown-item"> With a divider </a>
        </slot>
      </div>
    </div>
  </div>
</template>
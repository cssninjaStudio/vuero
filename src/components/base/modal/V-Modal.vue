<script setup lang="ts">
import type { PropType } from 'vue'
import { tryOnUnmounted } from '@vueuse/core'
import { ref, defineProps, defineEmit, watchEffect } from 'vue'

type ModalSize = undefined | 'small' | 'medium' | 'large' | 'big'
type ModalAction = undefined | 'center' | 'right'

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  size: {
    type: String as PropType<ModalSize>,
    default: undefined,
    validator: (value: ModalAction) => {
      // The value must match one of these strings
      if (
        [undefined, 'small', 'medium', 'large', 'big'].indexOf(value) === -1
      ) {
        console.warn(
          `V-Modal: invalid "${value}" size. Should be small, medium, large, big or undefined`
        )
        return false
      }

      return true
    },
  },
  actions: {
    type: String as PropType<ModalAction>,
    default: undefined,
    validator: (value: ModalAction) => {
      // The value must match one of these strings
      if ([undefined, 'center', 'right'].indexOf(value) === -1) {
        console.warn(
          `V-Modal: invalid "${value}" actions. Should be center, right or undefined`
        )
        return false
      }

      return true
    },
  },
  open: {
    type: Boolean,
    default: false,
  },
  rounded: {
    type: Boolean,
    default: false,
  },
  noscroll: {
    type: Boolean,
    default: false,
  },
  noclose: {
    type: Boolean,
    default: false,
  },
})
const emit = defineEmit(['close'])

// const route = useRoute()
const wasOpen = ref(false)

const checkScroll = () => {
  if (props.noscroll && props.open) {
    document.documentElement.classList.add('no-scroll')
    wasOpen.value = true
  } else if (wasOpen.value && props.noscroll && !props.open) {
    document.documentElement.classList.remove('no-scroll')
    wasOpen.value = false
  }
}

watchEffect(checkScroll)
tryOnUnmounted(() => {
  document.documentElement.classList.remove('no-scroll')
})
</script>

<template>
  <teleport to="body">
    <div
      :class="[open && 'is-active', size && `is-${size}`]"
      class="modal v-modal"
    >
      <div
        class="modal-background v-modal-close"
        @click="() => noclose === false && emit('close')"
      ></div>
      <div class="modal-content">
        <div class="modal-card">
          <header class="modal-card-head">
            <h3>{{ title }}</h3>
            <button
              class="v-modal-close ml-auto"
              aria-label="close"
              @click="emit('close')"
            >
              <i class="iconify" data-icon="feather:x"></i>
            </button>
          </header>
          <div class="modal-card-body">
            <div class="inner-content">
              <slot name="content"></slot>
            </div>
          </div>
          <div
            class="modal-card-foot"
            :class="[
              actions === 'center' && 'is-centered',
              actions === 'right' && 'is-end',
            ]"
          >
            <slot name="cancel">
              <a
                class="button v-button v-modal-close"
                :class="[rounded && 'is-rounded']"
                @click="emit('close')"
                >Cancel</a
              >
            </slot>
            <slot name="action"></slot>
          </div>
        </div>
      </div>
    </div>
  </teleport>
</template>

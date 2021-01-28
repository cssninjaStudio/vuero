<script setup lang="ts">
import { watch, onMounted, ref, defineProps, defineEmit } from 'vue'
// import { useRoute } from 'vue-router'

const props = defineProps({
  open: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    default: 'Modal title',
  },
  actions: {
    type: String,
    default: '',
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
defineEmit(['close'])

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

onMounted(checkScroll)
watch(() => props.open, checkScroll)
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
              actions === '' && '',
              actions === 'center' && 'is-centered',
              actions === 'right' && 'is-end',
            ]"
          >
            <a
              class="button v-button v-modal-close"
              :class="[rounded && 'is-rounded']"
              @click="emit('close')"
              >Cancel</a
            >
            <slot name="action"></slot>
          </div>
        </div>
      </div>
    </div>
  </teleport>
</template>

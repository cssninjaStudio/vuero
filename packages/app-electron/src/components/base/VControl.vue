<script setup lang="ts">
import VLabel from '/@src/components/base/VLabel.vue'

const props = defineProps({
  id: {
    type: String,
    default: undefined,
  },
  icon: {
    type: String,
    default: undefined,
  },
  isValid: {
    type: Boolean,
    default: undefined,
  },
  hasError: {
    type: Boolean,
    default: undefined,
  },
  loading: {
    type: Boolean,
    default: undefined,
  },
  expanded: {
    type: Boolean,
    default: undefined,
  },
  fullwidth: {
    type: Boolean,
    default: undefined,
  },
  textaddon: {
    type: Boolean,
    default: undefined,
  },
  nogrow: {
    type: Boolean,
    default: undefined,
  },
  subcontrol: {
    type: Boolean,
    default: undefined,
  },
  raw: {
    type: Boolean,
    default: undefined,
  },
})

const { field, id } = useVFieldContext({
  id: props.id,
  inherit: !props.subcontrol,
})

const isValid = computed(() => props.isValid)
const hasError = computed(() =>
  field?.value ? Boolean(field?.value?.errorMessage?.value) : props.hasError,
)

const controlClasees = computed(() => {
  if (props.raw) return []

  return [
    'control',
    props.icon && 'has-icon',
    props.loading && 'is-loading',
    props.expanded && 'is-expanded',
    props.fullwidth && 'is-fullwidth',
    props.nogrow && 'is-nogrow',
    props.textaddon && 'is-textarea-addon',
    isValid.value && 'has-validation has-success',
    hasError.value && 'has-validation has-error',
    props.subcontrol && 'subcontrol',
  ]
})
</script>

<template>
  <div :class="controlClasees">
    <slot v-bind="{ field, id }" />

    <VIcon
      v-if="props.icon"
      :icon="props.icon"
      class="form-icon"
    />

    <VLabel
      v-if="isValid"
      class="validation-icon is-success"
    >
      <VIcon icon="lucide:check" />
    </VLabel>
    <a
      v-else-if="hasError"
      class="validation-icon is-error"
      role="button"
      tabindex="0"
      @click.prevent="() => field?.resetField?.()"
      @keydown.enter.prevent="() => field?.resetField?.()"
    >
      <VIcon icon="lucide:x" />
    </a>

    <slot
      v-bind="{ field, id }"
      name="extra"
    />
  </div>
</template>

<style lang="scss" scoped>
.is-nogrow {
  flex-grow: 0 !important;
}

.is-fullwidth {
  width: 100%;
}
</style>

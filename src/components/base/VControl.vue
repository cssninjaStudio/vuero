<script setup lang="ts">
import VLabel from '/@src/components/base/VLabel.vue'
import { useVFieldContext } from '/@src/composable/useVFieldContext'

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

const isIconify = computed(() => {
  return props.icon && props.icon.indexOf(':') !== -1
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

    <template v-if="props.icon">
      <VLabel
        v-if="isIconify"
        class="form-icon"
      >
        <i
          aria-hidden="true"
          :data-icon="props.icon"
          class="iconify"
        />
      </VLabel>
      <VLabel
        v-else
        class="form-icon"
      >
        <i
          aria-hidden="true"
          :class="props.icon"
        />
      </VLabel>
    </template>

    <VLabel
      v-if="isValid"
      class="validation-icon is-success"
    >
      <i
        aria-hidden="true"
        data-icon="feather:check"
        class="iconify"
      />
    </VLabel>
    <a
      v-else-if="hasError"
      class="validation-icon is-error"
      role="button"
      tabindex="0"
      @click.prevent="() => field?.resetField?.()"
      @keyup.enter.prevent="() => field?.resetField?.()"
    >
      <i
        aria-hidden="true"
        data-icon="feather:x"
        class="iconify"
      />
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

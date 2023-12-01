<script setup lang="ts">
import { useVFieldContext } from '/@src/composable/useVFieldContext'

const modelValue = defineModel<number | undefined>({
  default: undefined,
})
const props = withDefaults(
  defineProps<{
    id?: string
    max?: number
    label?: string
    size?: 'small' | 'base' | 'medium' | 'large' | 'xlarge'
    readonly?: boolean
    disabled?: boolean
  }>(),
  {
    id: undefined,
    max: 5,
    size: 'base',
    label: undefined,
    readonly: undefined,
  },
)

const { field, id } = useVFieldContext({
  help: 'VRangeRating',
  id: props.id,
})

const hasValue = computed(
  () => field?.value !== undefined || modelValue.value !== undefined,
)
const active = computed(() => !props.readonly && hasValue.value)

const internal = computed({
  get() {
    if (field?.value) {
      return field.value.value ?? 0
    }
    else {
      return modelValue.value ?? 0
    }
  },
  set(value: any) {
    if (field?.value) {
      field.value.setValue(value)
    }
    modelValue.value = value
  },
})

const sizeStyle = computed(() => {
  switch (props.size) {
    case 'small':
      return 'is-size-6'
    case 'base':
      return 'is-size-5'
    case 'medium':
      return 'is-size-4'
    case 'large':
      return 'is-size-3'
    case 'xlarge':
      return 'is-size-2'
  }
})

const radiogroup = ref()
function focus() {
  if (props.readonly) return
  if (props.disabled) return
  if (radiogroup.value) {
    radiogroup.value.focus()
  }
}

const wrapper = ref()
const { focused } = useFocusWithin(wrapper)
onKeyStroke('ArrowLeft', (e) => {
  if (!focused.value) return
  if (props.disabled) return

  e.preventDefault()

  if (internal.value > 0) {
    internal.value = internal.value - 1
  }
})
onKeyStroke('ArrowRight', (e) => {
  if (!focused.value) return
  if (props.disabled) return

  e.preventDefault()

  if (internal.value < props.max) {
    internal.value = internal.value + 1
  }
})

const highlighted = ref<number>()
function highlightIndex(index: number) {
  if (props.readonly) return
  highlighted.value = index + 1
}
function unhighlight() {
  highlighted.value = undefined
}

function selectIndex(index: number) {
  if (props.readonly) return
  if (props.disabled) return
  internal.value = index + 1
}

function isStarSelected(index: number) {
  if (!hasValue.value) return 0

  if (highlighted.value !== undefined) {
    return highlighted.value - index > 0
  }

  return internal.value - index > 0
}
</script>

<template>
  <div
    ref="wrapper"
    class="rating-wrap"
  >
    <div
      v-if="props.label || 'label' in $slots"
      class="rating-label"
    >
      <slot name="label">
        <!-- eslint-disable-next-line vuejs-accessibility/no-static-element-interactions -->
        <label
          :id="`${id}-label`"
          :for="id"
          @click="focus"
          @keydown.enter="focus"
        >
          {{ props.label }}
        </label>
      </slot>
    </div>
    <div
      :id="id"
      ref="radiogroup"
      class="rating"
      :class="{
        'is-active': active,
        'is-highlighted': highlighted,
        [sizeStyle]: true,
      }"
      :aria-labelledby="
        props.label || ('label' in $slots && active) ? `${id}-label` : undefined
      "
      :tabindex="active ? 0 : undefined"
      :role="active ? 'radiogroup' : undefined"
    >
      <span
        v-for="(star, index) in props.max"
        :key="index"
        :role="active ? 'radio' : undefined"
        :aria-label="String(index + 1)"
        :aria-checked="active ? internal - index > 0 : undefined"
        aria-hidden="true"
        class="rating-star"
        :class="{
          'is-rating-star-selected': isStarSelected(index),
        }"
        @pointerenter.passive="() => highlightIndex(index)"
        @pointerleave.passive="() => unhighlight()"
        @click.passive="() => selectIndex(index)"
      >
        <slot
          v-bind="{
            value: index + 1,
            isSelected: isStarSelected(index),
            isHighlighted: index + 1 === highlighted,
          }"
        >
          <VIcon icon="ph:star-fill" />
        </slot>
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.rating-wrap {
  text-align: inset-inline-end;

  .rating-label {
    color: var(--light-text);
  }

  .rating {
    display: inline-flex;

    .rating-star {
      color: var(--widget-grey-dark-8);

      &.is-rating-star-selected {
        color: var(--yellow) !important;
      }
    }

    &.is-active {
      [role='radio'] {
        cursor: pointer;
      }
    }
  }
}

.is-dark .rating-wrap {
  .rating {
    .rating-star {
      color: var(--dark-sidebar-light-22);
    }
  }
}
</style>

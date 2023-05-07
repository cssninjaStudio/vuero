<script setup lang="ts">
import { ColorPicker } from 'vue-accessible-color-picker'

export type AvailableColors =
  // states
  | 'primary'
  | 'secondary'
  | 'dark'
  | 'link'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  // colors
  | 'purple'
  | 'blue'
  | 'red'
  | 'orange'
  | 'yellow'
  | 'green'
  | 'pink'
  | 'light-blue'
  // states
  | 'primary-grey'
  | 'smoke-white'
  | 'placeholder'

const props = withDefaults(
  defineProps<{
    color: AvailableColors
  }>(),
  {}
)
const colorVarName = computed(() => `--${props.color}`)
const colorHueVarName = computed(() => `--${props.color}-h`)
const colorSaturationVarName = computed(() => `--${props.color}-s`)
const colorLuminanceVarName = computed(() => `--${props.color}-l`)

const colorVar = useCssVar(colorVarName.value)
const colorHueVar = useCssVar(colorHueVarName.value)
const colorSaturationVar = useCssVar(colorSaturationVarName.value)
const colorLuminanceVar = useCssVar(colorLuminanceVarName.value)
const colorHslCss = computed(
  () =>
    `hsl(${colorHueVar.value}, ${colorSaturationVar.value}, ${colorLuminanceVar.value})`
)
const colorSnippet = computed(
  () =>
    `@include colorHsl('${props.color}', ${colorHueVar.value}, ${colorSaturationVar.value}, ${colorLuminanceVar.value});`
)

const { text, copy, copied } = useClipboard()

const isOpen = ref(false)
const toggle = () => {
  isOpen.value = !isOpen.value
}
function updateColor({ colors }: any) {
  const { h, s, l } = colors.hsl
  colorHueVar.value = `${Math.round(h * 360)}`
  colorSaturationVar.value = `${Math.round(s * 100)}%`
  colorLuminanceVar.value = `${Math.round(l * 100)}%`
}
</script>

<template>
  <div class="color-card">
    <div class="color-card-header">
      <div class="color-dot is-primary"></div>
      <div class="meta">
        <span>var({{ colorVarName }})</span>
        <span>{{ colorVar }}</span>
      </div>
      <div class="actions">
        <VAction tabindex="0" @keydown.space.prevent="toggle" @click="toggle">
          <span v-if="isOpen">Close</span>
          <span v-else>Customize</span>
        </VAction>
      </div>
    </div>
    <div v-if="isOpen">
      <div class="is-divider"></div>
      <div class="color-picker">
        <ColorPicker
          :id="props.color"
          class="hide-alpha hide-copy"
          :color="`hsl(${colorHueVar}, ${colorSaturationVar}, ${colorLuminanceVar})`"
          @color-change="updateColor"
        >
          <template #hue-range-input-label>
            <span class="sr-only">Hue</span>
          </template>

          <template #alpha-range-input-label>
            <span class="sr-only">Alpha</span>
          </template>
          <template #format-switch-button>
            <span class="sr-only">Switch format</span>

            <i
              class="iconify rem-120 is-clickable"
              aria-hidden="true"
              data-icon="fluent:chevron-up-down-20-filled"
            />
          </template>
        </ColorPicker>
      </div>
      <div class="is-divider"></div>
      <dl>
        <dt>
          <span>Hue</span>
          <small>var({{ colorHueVarName }})</small>
        </dt>
        <dd>{{ colorHueVar }}</dd>
      </dl>
      <dl>
        <dt>
          <span>Saturation</span>
          <small>var({{ colorSaturationVarName }})</small>
        </dt>
        <dd>{{ colorSaturationVar }}</dd>
      </dl>
      <dl>
        <dt>
          <span>Luminance</span>
          <small>var({{ colorLuminanceVarName }})</small>
        </dt>
        <dd>{{ colorLuminanceVar }}</dd>
      </dl>
      <div>
        <VButton
          fullwidth
          tabindex="0"
          @keydown.space.prevent="copy(colorSnippet)"
          @click="copy(colorSnippet)"
        >
          <Transition name="fade-fast" mode="out-in">
            <span v-if="copied && text === colorSnippet" class="is-copied">
              Copied!
            </span>
            <span v-else> Copy snippet color </span>
          </Transition>
        </VButton>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '/@src/scss/abstracts/all';

.color-picker {
  margin: 0 auto;
}

.color-card {
  @include vuero-s-card;

  .color-card-header {
    display: flex;
    align-items: center;
  }

  .is-divider {
    border-top-color: var(--widget-grey-dark-8);
  }

  dl {
    font: var(--font);
    display: flex;
    justify-content: space-between;
    align-items: center;

    &:not(:last-child) {
      border-bottom: solid 1px var(--widget-grey-dark-4);
      padding-bottom: 0.5rem;
      margin-bottom: 0.5rem;
    }
  }

  dd {
    font: var(--font-alt);
  }

  dt {
    display: flex;
    flex-direction: column;
  }

  .color-dot {
    height: 40px;
    width: 40px;
    border-radius: var(--radius-rounded);
    background-color: v-bind(colorHslCss);
  }

  .meta {
    margin-inline-start: 12px;
    flex-grow: 1;

    span {
      display: block;
      font-family: var(--font-alt);

      &:first-child {
        color: var(--dark-text);
        font-weight: 600;
      }

      &:nth-child(2) {
        font-size: 0.9rem;
        color: var(--light-text);
      }
    }
  }
}

.is-dark {
  .color-card {
    @include vuero-card--dark;

    .is-divider {
      border-top-color: var(--dark-sidebar-light-12);
    }

    dl {
      &:not(:last-child) {
        border-bottom: solid 1px var(--dark-sidebar-light-16);
      }
    }

    .meta {
      span {
        &:first-child {
          color: var(--dark-dark-text);
        }
      }
    }
  }
}
</style>

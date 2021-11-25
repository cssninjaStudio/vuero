<script setup lang="ts">
import { computed } from 'vue'

export type VRadioColor = 'primary' | 'info' | 'success' | 'warning' | 'danger'
export interface VRadioEmits {
  (e: 'update:modelValue', value: string | number): void
}
export interface VRadioProps {
  value: string | number
  modelValue?: string | number
  name: string
  label?: string
  color?: VRadioColor
  square?: boolean
  solid?: boolean
  paddingless?: boolean
}

const emit = defineEmits<VRadioEmits>()
const props = withDefaults(defineProps<VRadioProps>(), {
  modelValue: undefined,
  label: undefined,
  color: undefined,
  paddingless: false,
})

const checked = computed(() => props.value === props.modelValue)

function change() {
  emit('update:modelValue', props.value)
}
</script>

<template>
  <label
    class="radio"
    :class="[
      props.solid ? 'is-solid' : 'is-outlined',
      props.square && 'is-square',
      props.color && `is-${props.color}`,
      props.paddingless && 'is-paddingless',
    ]"
  >
    <input
      type="radio"
      :checked="checked"
      :value="props.value"
      :name="props.name"
      v-bind="$attrs"
      @change="change"
    />
    <span></span>
    <slot>{{ props.label }}</slot>
  </label>
</template>

<style lang="scss">
%controller {
  position: relative;
  font-family: var(--font);
  cursor: pointer;
  padding: 1em;

  &::selection {
    background: transparent;
  }

  input + span {
    position: relative;
    top: -1px;
    background: var(--white);
    content: '';
    display: inline-block;
    margin: 0 0.5em 0 0;
    padding: 0;
    vertical-align: middle;
    width: 1.4em;
    height: 1.4em;
    border: 1px solid var(--fade-grey-dark-8);
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;

    &::after {
      content: '';
      display: block;
      transform: scale(0);
      transition: transform 0.2s;
    }
  }

  @media screen and (min-width: 768px) {
    &:hover input + span {
      box-shadow: 0 2px 4px rgba(#000, 0.15);
    }
  }

  input:active + span {
    box-shadow: 0 4px 8px rgba(#000, 0.15);
  }

  input:checked + span::after {
    transform: translate(-50%, -50%) scale(1) !important;
  }

  input {
    position: absolute;
    cursor: pointer;
    opacity: 0;
    transition: all 0.3s; // transition-all test
  }
}

.radio {
  @extend %controller;

  color: var(--light-text);

  + .radio {
    margin-left: 0 !important;
  }

  &:hover {
    color: var(--light-text);
  }

  &.is-paddingless {
    padding: 0 !important;
  }

  &.is-square {
    input + span {
      border-radius: var(--radius);
    }
  }

  &.is-solid {
    input + span {
      background: var(--fade-grey-light-3);
    }

    &.is-primary {
      input + span {
        border-color: var(--primary);
        background: var(--primary);

        &::after {
          color: var(--white);
        }
      }
    }

    &.is-success {
      input + span {
        border-color: var(--success);
        background: var(--success);

        &::after {
          color: var(--white);
        }
      }
    }

    &.is-info {
      input + span {
        border-color: var(--info);
        background: var(--info);

        &::after {
          color: var(--white);
        }
      }
    }

    &.is-warning {
      input + span {
        border-color: var(--warning);
        background: var(--warning);

        &::after {
          color: var(--white);
        }
      }
    }

    &.is-danger {
      input + span {
        border-color: var(--danger);
        background: var(--danger);

        &::after {
          color: var(--white);
        }
      }
    }
  }

  &.is-outlined {
    &.is-primary {
      input:checked + span {
        border-color: var(--primary);
      }

      input + span {
        &::after {
          color: var(--primary);
        }
      }
    }

    &.is-success {
      input:checked + span {
        border-color: var(--success);
      }

      input + span {
        &::after {
          color: var(--success);
        }
      }
    }

    &.is-info {
      input:checked + span {
        border-color: var(--info);
      }

      input + span {
        &::after {
          color: var(--info);
        }
      }
    }

    &.is-warning {
      input:checked + span {
        border-color: var(--warning);
      }

      input + span {
        &::after {
          color: var(--warning);
        }
      }
    }

    &.is-danger {
      input:checked + span {
        border-color: var(--danger);
      }

      input + span {
        &::after {
          color: var(--danger);
        }
      }
    }
  }

  input + span {
    border-radius: 100%;

    &::after {
      background-size: contain;
      position: absolute;
      top: 49%;
      left: 50%;
      transform: translate(-50%, -50%) scale(0);
      content: '\f111';
      font-family: 'Font Awesome\ 5 Free';
      font-weight: 900;
      font-size: 0.6rem;
    }
  }

  input:focus + span,
  input:active + span {
    outline-offset: var(--accessibility-focus-outline-offset);
    outline-width: var(--accessibility-focus-outline-width);
    outline-color: var(--accessibility-focus-outline-color);
    outline-style: var(--accessibility-focus-outline-style);
  }
}

.is-dark {
  %controller {
    input + span {
      background-color: var(--dark-sidebar-light-2);
      border-color: var(--dark-sidebar-light-4);

      &::after {
        color: var(--dark-dark-text);
      }
    }

    input + span {
      border-color: var(--dark-sidebar-light-16);
    }
  }

  .radio {
    &.is-solid.is-primary {
      input + span {
        background-color: var(--primary) !important;
        border-color: var(--primary) !important;
      }
    }

    &.is-outlined.is-primary {
      input:checked + span {
        border-color: var(--primary) !important;

        &::after {
          color: var(--primary) !important;
        }
      }
    }
  }
}
</style>

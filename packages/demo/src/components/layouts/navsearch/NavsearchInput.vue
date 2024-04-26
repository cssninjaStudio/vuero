<script setup lang="ts" generic="T">
const props = withDefaults(defineProps<{
  suggestions?: T[]
}>(), {
  suggestions: () => [],
})
const emits = defineEmits<{
  select: [item: T]
}>()

const modelValue = defineModel<string>()
</script>

<template>
  <div class="centered-search">
    <div class="field">
      <div class="control has-icon">
        <input
          v-model="modelValue"
          type="text"
          class="input search-input"
          placeholder="Search records..."
        >
        <div class="form-icon">
          <VIcon
            icon="lucide:search"
          />
        </div>
        <div
          v-if="modelValue"
          class="form-icon is-right"
          tabindex="0"
          role="button"
          @keydown.enter.prevent="modelValue = ''"
          @click="modelValue = ''"
        >
          <VIcon
            icon="lucide:x"
          />
        </div>
        <div
          v-if="props.suggestions.length"
          class="search-results has-slimscroll is-active"
        >
          <a
            v-for="(item, key) in props.suggestions"
            :key="key"
            role="button"
            tabindex="0"
            class="search-result"
            @click="() => emits('select', item)"
            @keydown.enter.prevent="() => emits('select', item)"
          >
            <slot v-bind="{ item }" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.centered-search {
  width: 100%;

  .field {
    margin-bottom: 0;

    .control {
      .input {
        border-radius: 0.5rem;
      }

      .form-icon {
        &.is-right {
          inset-inline-start: unset !important;
          inset-inline-end: 6px;
          cursor: pointer;
        }
      }

      .search-results {
        top: 48px;
      }
    }
  }
}
</style>

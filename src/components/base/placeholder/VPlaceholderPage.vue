<script setup lang="ts">
export interface VPlaceholderPageProps {
  title: string
  subtitle?: string
  larger?: boolean
}

const props = withDefaults(defineProps<VPlaceholderPageProps>(), {
  subtitle: undefined,
})
</script>

<template>
  <div class="page-placeholder">
    <div class="placeholder-content">
      <slot name="image"></slot>
      <h3 class="dark-inverted">{{ props.title }}</h3>
      <p v-if="props.subtitle" :class="[props.larger && 'is-larger']">
        {{ props.subtitle }}
      </p>
      <slot name="action"></slot>
    </div>
  </div>
</template>

<style lang="scss">
.page-placeholder {
  min-height: 400px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;

  &.is-wider {
    .placeholder-content {
      > p {
        font-size: 1rem;
        max-width: 420px;
      }
    }
  }

  .placeholder-content {
    text-align: center;

    img {
      display: block;
      max-width: 340px;
      margin: 0 auto 12px;

      &.is-larger {
        max-width: 440px;
      }
    }

    h3 {
      font-size: 1.3rem;
      font-weight: 600;
      font-family: var(--font-alt);
      color: var(--dark-text);
    }

    p {
      font-size: 1.1rem;
      max-width: 440px;
      margin: 0 auto 12px;
      color: var(--light-text);

      &.is-larger {
        max-width: 620px;
      }
    }

    .btn {
      margin-bottom: 8px;
    }
  }
}

.is-dark {
  .page-placeholder {
    .placeholder-content {
      h3 {
        color: var(--dark-dark-text);
      }
    }
  }
}

@media (max-width: 767px) {
  .page-placeholder {
    .placeholder-content {
      img {
        max-width: 280px;
      }
    }
  }
}
</style>

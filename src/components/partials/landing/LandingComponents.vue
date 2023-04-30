<script setup lang="ts">
import { elements, components, forms, plugins } from '/@src/data/landing/components'

const props = withDefaults(
  defineProps<{
    activeTab?: 'elements' | 'components' | 'forms' | 'plugins'
  }>(),
  {
    activeTab: 'elements',
  }
)
</script>

<template>
  <div
    id="demo-elements"
    :class="[props.activeTab === 'elements' && 'is-active']"
    class="tab-content has-text-left"
  >
    <div class="columns is-multiline">
      <div v-for="item in elements" :key="item.id" class="column is-3">
        <RouterLink :to="item.link" class="component-box">
          <div class="component">
            <img class="light-image-l" :src="item.media.light" alt="" loading="lazy" />
            <img class="dark-image-l" :src="item.media.dark" alt="" loading="lazy" />
          </div>
          <div class="component-title">{{ item.name }}</div>
        </RouterLink>
      </div>
    </div>
  </div>

  <!--Components-->
  <div
    id="demo-components"
    :class="[props.activeTab === 'components' && 'is-active']"
    class="tab-content has-text-left"
  >
    <div class="columns is-multiline">
      <!--Item-->
      <div v-for="item in components" :key="item.id" class="column is-3">
        <RouterLink :to="item.link" class="component-box">
          <div class="component">
            <img class="light-image-l" :src="item.media.light" alt="" loading="lazy" />
            <img class="dark-image-l" :src="item.media.dark" alt="" loading="lazy" />
          </div>
          <div class="component-title">{{ item.name }}</div>
        </RouterLink>
      </div>
    </div>
  </div>

  <!--Forms-->
  <div
    id="demo-forms"
    :class="[props.activeTab === 'forms' && 'is-active']"
    class="tab-content has-text-left"
  >
    <div class="columns is-multiline">
      <div v-for="item in forms" :key="item.id" class="column is-3">
        <RouterLink :to="item.link" class="component-box">
          <div class="component">
            <img class="light-image-l" :src="item.media.light" alt="" loading="lazy" />
            <img class="dark-image-l" :src="item.media.dark" alt="" loading="lazy" />
          </div>
          <div class="component-title">{{ item.name }}</div>
        </RouterLink>
      </div>
    </div>
  </div>

  <!--Sections-->
  <div
    id="plugins-sections"
    :class="[props.activeTab === 'plugins' && 'is-active']"
    class="tab-content has-text-left"
  >
    <div class="columns is-multiline">
      <div v-for="item in plugins" :key="item.id" class="column is-3">
        <RouterLink :to="item.link" class="component-box">
          <div class="component">
            <img class="light-image-l" :src="item.media.light" alt="" loading="lazy" />
            <img class="dark-image-l" :src="item.media.dark" alt="" loading="lazy" />
          </div>
          <div class="component-title">{{ item.name }}</div>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.landing-page-wrapper {
  .component-box {
    display: block;
    text-align: center;
    background: var(--white);
    border: 1px solid var(--fade-grey-dark-3);
    padding: 20px;
    border-radius: 8px;
    margin-bottom: 0;
    transition: transform 0.3s, box-shadow 0.3s, border-color 0.3s;
    cursor: pointer;

    &:hover,
    &:focus {
      transform: translateY(-5px);
      box-shadow: var(--light-box-shadow);
      border-color: var(--primary);

      .component {
        img {
          filter: grayscale(0);
          opacity: 1;
        }
      }

      .component-title {
        color: var(--dark-text);
      }
    }

    .component {
      img {
        display: block;
        filter: grayscale(1);
        opacity: 0.6;
        max-height: 80px;
        transition: all 0.3s; // transition-all test
      }
    }

    .component-title {
      font-family: var(--font-alt);
      font-size: 1rem;
      padding-top: 6px;
      color: var(--light-text);
      transition: color 0.3s;
    }
  }
}

.is-dark {
  .landing-page-wrapper {
    .component-box {
      background: var(--landing-yyy-dark-6);
      border-color: var(--landing-yyy-light-2);

      &:hover,
      &:focus {
        border-color: var(--primary);

        .component-title {
          color: var(--primary);
        }
      }
    }
  }
}
</style>

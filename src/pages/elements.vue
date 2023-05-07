<script setup lang="ts">
import { useLayoutSwitcher } from '/@src/stores/layoutSwitcher'
const layoutSwitcher = useLayoutSwitcher()
</script>

<template>
  <SidebarLayout
    :theme="layoutSwitcher.sidebarLayoutTheme"
    open-on-mounted
    default-sidebar="elements"
  >
    <!-- Content Wrapper -->
    <RouterView v-slot="{ Component }">
      <Transition name="translate-page-y" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
  </SidebarLayout>
</template>

<style lang="scss">
.demo-s-card,
.demo-r-card,
.demo-l-card {
  .title {
    margin-bottom: 6px;
  }
}

.demo-spacer {
  padding-bottom: 100px;
}

.demo-editor-container {
  max-width: 740px;
  margin: 0 auto;
}

.helper-table {
  .category,
  th {
    width: 25%;
    font-family: var(--font-alt);
    font-weight: 600;
    font-size: 1.05rem;
  }

  .name {
    width: 25%;
  }

  .description {
    width: 50%;
  }
}

.demo-table {
  .table {
    th {
      font-family: var(--font-alt);
      font-weight: 600;
      font-size: 0.9rem;
    }
  }
}

.demo-field {
  max-width: 340px;
}

@media only screen and (width >= 1024px) and (orientation: portrait) {
  .landing-page-wrapper .hero .navbar {
    &:not(.is-docked) {
      .navbar-menu {
        padding-top: 0 !important;
        padding-bottom: 0 !important;
        border: none !important;

        .navbar-item {
          &.is-theme-toggle {
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
      }
    }

    .navbar-brand {
      width: auto !important;
    }

    .navbar-menu {
      width: auto;
      position: static;

      .navbar-end {
        margin-inline-end: -28px;
      }
    }
  }
}
</style>

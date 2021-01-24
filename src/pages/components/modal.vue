<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { onMounted, ref } from 'vue'

import {
  activeSidebar,
  toggleSidebar,
} from '/@src/composition/state/ui/activeSidebarState'

onMounted(() => {
  activeSidebar.value = 'components'
})

const leftActionsOpen = ref(false)
const centeredActionsOpen = ref(false)
const rightActionsOpen = ref(false)
const smallOpen = ref(false)
const standardOpen = ref(false)
const mediumOpen = ref(false)
const largeOpen = ref(false)
const bigOpen = ref(false)
const smallFormOpen = ref(false)
const standardFormOpen = ref(false)
const mediumFormOpen = ref(false)
const largeFormOpen = ref(false)
const bigFormOpen = ref(false)

useHead({
  title: 'Components - Modal - Vuero',
})
</script>

<template>
  <div>
    <div class="page-title has-text-centered">
      <!-- Sidebar Trigger -->
      <div
        class="huro-hamburger nav-trigger push-resize"
        @click="toggleSidebar('components')"
      >
        <span class="menu-toggle has-chevron">
          <span
            :class="[activeSidebar !== 'none' && 'active']"
            class="icon-box-toggle"
          >
            <span class="rotate">
              <i class="icon-line-top"></i>
              <i class="icon-line-center"></i>
              <i class="icon-line-bottom"></i>
            </span>
          </span>
        </span>
      </div>

      <div class="title-wrap">
        <h1 class="title is-4">Modals</h1>
      </div>

      <Toolbar />
    </div>

    <div class="page-content-inner">
      <nav class="breadcrumb has-bullet-separator" aria-label="breadcrumbs">
        <ul>
          <li>
            <RouterLink :to="{ name: 'index' }">
              <span class="icon is-small is-solo">
                <i class="iconify" data-icon="feather:home"></i>
              </span>
            </RouterLink>
          </li>
          <li>
            <RouterLink :to="{ name: 'elements' }">
              <span>Components</span>
            </RouterLink>
          </li>
          <li>
            <a>
              <span>Modal</span>
            </a>
          </li>
        </ul>
      </nav>

      <div class="columns is-multiline">
        <div class="column is-12">
          <!--H Modal-->
          <div class="demo-card">
            <div class="demo-title">
              <h3 class="title is-thin is-5">H Modal</h3>
              <p>
                Vuero provides a custom modal implementation. Use the existing
                modal markup and paste it into your page to try it. Use the
                <code>is-start</code>, <code>is-centered</code>,
                <code>is-end</code> classes on the
                <code>modal-card-foot</code> element to change the actions
                alignment.
              </p>
              <a class="code-trigger">
                <i class="iconify open" data-icon="feather:code"></i>
                <i class="iconify close" data-icon="feather:x"></i>
              </a>
            </div>
            <div class="card-inner">
              <div class="buttons">
                <a
                  class="button v-button is-rounded h-modal-trigger"
                  @click="leftActionsOpen = true"
                  >Left Actions</a
                >
                <a
                  class="button v-button is-rounded h-modal-trigger"
                  @click="centeredActionsOpen = true"
                  >Centered Actions</a
                >
                <a
                  class="button v-button is-rounded h-modal-trigger"
                  @click="rightActionsOpen = true"
                  >Right Actions</a
                >
              </div>

              <div class="highlight highlight-block">
                <pre><code class="code-highlight">
&#x3C;a class=&#x22;button v-button is-rounded h-modal-trigger&#x22; data-modal=&#x22;demo-right-actions-modal&#x22;&#x3E;Right Actions&#x3C;/a&#x3E;

&#x3C;div id=&#x22;demo-right-actions-modal&#x22; class=&#x22;modal h-modal&#x22;&#x3E;
    &#x3C;div class=&#x22;modal-background  h-modal-close&#x22;&#x3E;&#x3C;/div&#x3E;
    &#x3C;div class=&#x22;modal-content&#x22;&#x3E;
        &#x3C;div class=&#x22;modal-card&#x22;&#x3E;
            &#x3C;header class=&#x22;modal-card-head&#x22;&#x3E;
                &#x3C;h3&#x3E;Did you know?&#x3C;/h3&#x3E;
                &#x3C;button class=&#x22;h-modal-close ml-auto&#x22; aria-label=&#x22;close&#x22;&#x3E;
                    &#x3C;i data-feather=&#x22;x&#x22;&#x3E;&#x3C;/i&#x3E;
                &#x3C;/button&#x3E;
            &#x3C;/header&#x3E;
            &#x3C;div class=&#x22;modal-card-body&#x22;&#x3E;
                &#x3C;div class=&#x22;inner-content&#x22;&#x3E;
                    &#x3C;div class=&#x22;section-placeholder&#x22;&#x3E;
                        &#x3C;div class=&#x22;placeholder-content&#x22;&#x3E;
                            &#x3C;img src=&#x22;assets/img/placeholders/huro-1.svg&#x22; alt=&#x22;&#x22;&#x3E;
                            &#x3C;h3 class=&#x22;dark-inverted&#x22;&#x3E;Go Premium&#x3C;/h3&#x3E;
                            &#x3C;p&#x3E;Unlock more features and business tools by going premium&#x3C;/p&#x3E;
                        &#x3C;/div&#x3E;
                    &#x3C;/div&#x3E;
                &#x3C;/div&#x3E;
            &#x3C;/div&#x3E;
            &#x3C;div class=&#x22;modal-card-foot is-end&#x22;&#x3E;
                &#x3C;a class=&#x22;button v-button is-rounded h-modal-close&#x22;&#x3E;Cancel&#x3C;/a&#x3E;
                &#x3C;a class=&#x22;button v-button is-primary is-raised is-rounded&#x22;&#x3E;Confirm&#x3C;/a&#x3E;
            &#x3C;/div&#x3E;
        &#x3C;/div&#x3E;
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre>
              </div>
            </div>
          </div>

          <!--H Modal Sizes-->
          <div class="demo-card">
            <div class="demo-title">
              <h3 class="title is-thin is-5">Modal Sizes</h3>
              <p>
                Vuero provides a custom modal implementation. Use the existing
                modal markup and paste it into your page to try it. Use the
                <code>is-small</code>, <code>is-medium</code>,
                <code>is-large</code> and <code>is-big</code> classes on the
                <code>h-modal</code> element to change the size of the modal.
              </p>
            </div>
            <div class="card-inner">
              <div class="buttons">
                <a
                  class="button v-button is-rounded h-modal-trigger"
                  @click="smallOpen = true"
                  >Small Modal</a
                >
                <a
                  class="button v-button is-rounded h-modal-trigger"
                  @click="standardOpen = true"
                  >Standard Modal</a
                >
                <a
                  class="button v-button is-rounded h-modal-trigger"
                  @click="mediumOpen = true"
                  >Medium Modal</a
                >
                <a
                  class="button v-button is-rounded h-modal-trigger"
                  @click="largeOpen = true"
                  >Large Modal</a
                >
                <a
                  class="button v-button is-rounded h-modal-trigger"
                  @click="bigOpen = true"
                  >Big Modal</a
                >
              </div>
            </div>
          </div>

          <!--H Modal Forms-->
          <div class="demo-card">
            <div class="demo-title">
              <h3 class="title is-thin is-5">Modal Forms</h3>
              <p>
                Vuero provides a custom modal implementation. Use the existing
                modal markup and paste it into your page to try it. Modals work
                pretty well with form elements. Check the below examples to get
                some inspiration about how you can build beautiful modal forms.
              </p>
            </div>
            <div class="card-inner">
              <div class="buttons">
                <a
                  class="button v-button is-rounded h-modal-trigger"
                  @click="smallFormOpen = true"
                  >Small Modal</a
                >
                <a
                  class="button v-button is-rounded h-modal-trigger"
                  @click="standardFormOpen = true"
                  >Standard Modal</a
                >
                <a
                  class="button v-button is-rounded h-modal-trigger"
                  @click="mediumFormOpen = true"
                  >Medium Modal</a
                >
                <a
                  class="button v-button is-rounded h-modal-trigger"
                  @click="largeFormOpen = true"
                  >Large Modal</a
                >
                <a
                  class="button v-button is-rounded h-modal-trigger"
                  @click="bigFormOpen = true"
                  >Big Modal</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <LeftActionsModal
      :open="leftActionsOpen"
      @close="leftActionsOpen = false"
    />
    <CenteredActionsModal
      :open="centeredActionsOpen"
      @close="centeredActionsOpen = false"
    />
    <RightActionsModal
      :open="rightActionsOpen"
      @close="rightActionsOpen = false"
    />

    <SmallModal :open="smallOpen" @close="smallOpen = false" />
    <StandardModal :open="standardOpen" @close="standardOpen = false" />
    <MediumModal :open="mediumOpen" @close="mediumOpen = false" />
    <LargeModal :open="largeOpen" @close="largeOpen = false" />
    <BigModal :open="bigOpen" @close="bigOpen = false" />

    <SmallFormModal :open="smallFormOpen" @close="smallFormOpen = false" />
    <StandardFormModal
      :open="standardFormOpen"
      @close="standardFormOpen = false"
    />
    <MediumFormModal :open="mediumFormOpen" @close="mediumFormOpen = false" />
    <LargeFormModal :open="largeFormOpen" @close="largeFormOpen = false" />
    <BigFormModal :open="bigFormOpen" @close="bigFormOpen = false" />
  </div>
</template>

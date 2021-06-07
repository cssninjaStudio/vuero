<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/sidebarLayoutState'

pageTitle.value = 'Colors'
useHead({
  title: 'Colors - Elements - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <V-Breadcrumb
      with-icons
      separator="bullet"
      :items="[
        {
          label: 'Vuero',
          hideLabel: true,
          icon: 'feather:home',
          to: { name: 'index' },
        },
        {
          label: 'Elements',
          to: { name: 'elements' },
        },
        {
          label: 'Colors',
          to: { name: 'elements-colors' },
        },
      ]"
    />

    <div class="columns is-multiline">
      <div class="column is-12">
        <!--Theme Colors-->
        <ColorsDocumentation />

        <div class="columns is-multiline">
          <div class="column is-4">
            <div class="color-card">
              <div class="color-dot is-primary"></div>
              <div class="meta">
                <span>$primary</span>
                <span>#41b883</span>
              </div>
            </div>
          </div>
          <div class="column is-4">
            <div class="color-card">
              <div class="color-dot is-accent"></div>
              <div class="meta">
                <span>$accent</span>
                <span>#41b883</span>
              </div>
            </div>
          </div>
          <div class="column is-4">
            <div class="color-card">
              <div class="color-dot is-info"></div>
              <div class="meta">
                <span>$info</span>
                <span>#039BE5</span>
              </div>
            </div>
          </div>
          <div class="column is-4">
            <div class="color-card">
              <div class="color-dot is-success"></div>
              <div class="meta">
                <span>$success</span>
                <span>#06d6a0</span>
              </div>
            </div>
          </div>
          <div class="column is-4">
            <div class="color-card">
              <div class="color-dot is-warning"></div>
              <div class="meta">
                <span>$warning</span>
                <span>#faae42</span>
              </div>
            </div>
          </div>
          <div class="column is-4">
            <div class="color-card">
              <div class="color-dot is-danger"></div>
              <div class="meta">
                <span>$danger</span>
                <span>#e62965</span>
              </div>
            </div>
          </div>

          <div class="column is-4">
            <div class="color-card">
              <div class="color-dot is-h-purple"></div>
              <div class="meta">
                <span>$h-purple</span>
                <span>#8269B2</span>
              </div>
            </div>
          </div>

          <div class="column is-4">
            <div class="color-card">
              <div class="color-dot is-h-blue"></div>
              <div class="meta">
                <span>$h-blue</span>
                <span>#37C3FF</span>
              </div>
            </div>
          </div>

          <div class="column is-4">
            <div class="color-card">
              <div class="color-dot is-h-green"></div>
              <div class="meta">
                <span>$h-green</span>
                <span>#93E088</span>
              </div>
            </div>
          </div>

          <div class="column is-4">
            <div class="color-card">
              <div class="color-dot is-h-orange"></div>
              <div class="meta">
                <span>$h-orange</span>
                <span>#FFA981</span>
              </div>
            </div>
          </div>

          <div class="column is-4">
            <div class="color-card">
              <div class="color-dot is-h-red"></div>
              <div class="meta">
                <span>$h-red</span>
                <span>#F92B60</span>
              </div>
            </div>
          </div>

          <div class="column is-4">
            <div class="color-card">
              <div class="color-dot is-h-yellow"></div>
              <div class="meta">
                <span>$h-yellow</span>
                <span>#FFD66E</span>
              </div>
            </div>
          </div>

          <div class="column is-4">
            <div class="color-card">
              <div class="color-dot is-fade-grey"></div>
              <div class="meta">
                <span>$fade-grey</span>
                <span>#ededed</span>
              </div>
            </div>
          </div>

          <div class="column is-4">
            <div class="color-card">
              <div class="color-dot is-dark-text"></div>
              <div class="meta">
                <span>$dark-text</span>
                <span>#283252</span>
              </div>
            </div>
          </div>

          <div class="column is-4">
            <div class="color-card">
              <div class="color-dot is-light-text"></div>
              <div class="meta">
                <span>$light-text</span>
                <span>#a2a5b9</span>
              </div>
            </div>
          </div>

          <div class="column is-4">
            <div class="color-card">
              <div class="color-dot is-muted-grey"></div>
              <div class="meta">
                <span>$muted-grey</span>
                <span>#999</span>
              </div>
            </div>
          </div>

          <div class="column is-4">
            <div class="color-card">
              <div class="color-dot is-placeholder"></div>
              <div class="meta">
                <span>$placeholder</span>
                <span>#cecece</span>
              </div>
            </div>
          </div>

          <div class="column is-4">
            <div class="color-card">
              <div class="color-dot is-dark"></div>
              <div class="meta">
                <span>$dark-sidebar</span>
                <span>#232326</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

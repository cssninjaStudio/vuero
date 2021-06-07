<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/sidebarLayoutState'

pageTitle.value = 'Iconify Icons'
useHead({
  title: 'Iconify Icons - Elements - Vuero',
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
          label: 'Icons',
        },
        {
          label: 'Iconify',
          to: { name: 'elements-icons-iconify' },
        },
      ]"
    />

    <div class="columns">
      <div class="column is-12">
        <!--Iconify Icons-->
        <IconsIconifyDocumentation />

        <div class="demo-card">
          <div class="card-inner">
            <ul class="demo-icon-list">
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:activity"
                ></i>
                <p class="textFilter-match">activity</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:airplay"
                ></i>
                <p class="textFilter-match">airplay</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:alert-circle"
                ></i>
                <p class="textFilter-match">alert-circle</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:alert-octagon"
                ></i>
                <p class="textFilter-match">alert-octagon</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:alert-triangle"
                ></i>
                <p class="textFilter-match">alert-triangle</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:align-center"
                ></i>
                <p class="textFilter-match">align-center</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:align-justify"
                ></i>
                <p class="textFilter-match">align-justify</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:align-left"
                ></i>
                <p class="textFilter-match">align-left</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:align-right"
                ></i>
                <p class="textFilter-match">align-right</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:anchor"
                ></i>
                <p class="textFilter-match">anchor</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:aperture"
                ></i>
                <p class="textFilter-match">aperture</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:archive"
                ></i>
                <p class="textFilter-match">archive</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:arrow-down-circle"
                ></i>
                <p class="textFilter-match">arrow-down-circle</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:arrow-down-left"
                ></i>
                <p class="textFilter-match">arrow-down-left</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:arrow-down-right"
                ></i>
                <p class="textFilter-match">arrow-down-right</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:arrow-down"
                ></i>
                <p class="textFilter-match">arrow-down</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:arrow-left-circle"
                ></i>
                <p class="textFilter-match">arrow-left-circle</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:arrow-left"
                ></i>
                <p class="textFilter-match">arrow-left</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:arrow-right-circle"
                ></i>
                <p class="textFilter-match">arrow-right-circle</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:arrow-right"
                ></i>
                <p class="textFilter-match">arrow-right</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:arrow-up-circle"
                ></i>
                <p class="textFilter-match">arrow-up-circle</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:arrow-up-left"
                ></i>
                <p class="textFilter-match">arrow-up-left</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:arrow-up-right"
                ></i>
                <p class="textFilter-match">arrow-up-right</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:arrow-up"
                ></i>
                <p class="textFilter-match">arrow-up</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:at-sign"
                ></i>
                <p class="textFilter-match">at-sign</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:award"
                ></i>
                <p class="textFilter-match">award</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:bar-chart-2"
                ></i>
                <p class="textFilter-match">bar-chart-2</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:bar-chart"
                ></i>
                <p class="textFilter-match">bar-chart</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:battery-charging"
                ></i>
                <p class="textFilter-match">battery-charging</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:battery"
                ></i>
                <p class="textFilter-match">battery</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:bell-off"
                ></i>
                <p class="textFilter-match">bell-off</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:bell"
                ></i>
                <p class="textFilter-match">bell</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:bluetooth"
                ></i>
                <p class="textFilter-match">bluetooth</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:bold"
                ></i>
                <p class="textFilter-match">bold</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:book-open"
                ></i>
                <p class="textFilter-match">book-open</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:book"
                ></i>
                <p class="textFilter-match">book</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:bookmark"
                ></i>
                <p class="textFilter-match">bookmark</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:box"
                ></i>
                <p class="textFilter-match">box</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:briefcase"
                ></i>
                <p class="textFilter-match">briefcase</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:calendar"
                ></i>
                <p class="textFilter-match">calendar</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:camera-off"
                ></i>
                <p class="textFilter-match">camera-off</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:camera"
                ></i>
                <p class="textFilter-match">camera</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:cast"
                ></i>
                <p class="textFilter-match">cast</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:check-circle"
                ></i>
                <p class="textFilter-match">check-circle</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:check-square"
                ></i>
                <p class="textFilter-match">check-square</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:check"
                ></i>
                <p class="textFilter-match">check</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:chevron-down"
                ></i>
                <p class="textFilter-match">chevron-down</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:chevron-left"
                ></i>
                <p class="textFilter-match">chevron-left</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:chevron-right"
                ></i>
                <p class="textFilter-match">chevron-right</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:chevron-up"
                ></i>
                <p class="textFilter-match">chevron-up</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:chevrons-down"
                ></i>
                <p class="textFilter-match">chevrons-down</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:chevrons-left"
                ></i>
                <p class="textFilter-match">chevrons-left</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:chevrons-right"
                ></i>
                <p class="textFilter-match">chevrons-right</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:chevrons-up"
                ></i>
                <p class="textFilter-match">chevrons-up</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:chrome"
                ></i>
                <p class="textFilter-match">chrome</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:circle"
                ></i>
                <p class="textFilter-match">circle</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:clipboard"
                ></i>
                <p class="textFilter-match">clipboard</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:clock"
                ></i>
                <p class="textFilter-match">clock</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:cloud-drizzle"
                ></i>
                <p class="textFilter-match">cloud-drizzle</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:cloud-lightning"
                ></i>
                <p class="textFilter-match">cloud-lightning</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:cloud-off"
                ></i>
                <p class="textFilter-match">cloud-off</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:cloud-rain"
                ></i>
                <p class="textFilter-match">cloud-rain</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:cloud-snow"
                ></i>
                <p class="textFilter-match">cloud-snow</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:code"
                ></i>
                <p class="textFilter-match">code</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:codepen"
                ></i>
                <p class="textFilter-match">codepen</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:codesandbox"
                ></i>
                <p class="textFilter-match">codesandbox</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:coffee"
                ></i>
                <p class="textFilter-match">coffee</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:columns"
                ></i>
                <p class="textFilter-match">columns</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:command"
                ></i>
                <p class="textFilter-match">command</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:compass"
                ></i>
                <p class="textFilter-match">compass</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:copy"
                ></i>
                <p class="textFilter-match">copy</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:corner-down-left"
                ></i>
                <p class="textFilter-match">corner-down-left</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:corner-down-right"
                ></i>
                <p class="textFilter-match">corner-down-right</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:corner-left-down"
                ></i>
                <p class="textFilter-match">corner-left-down</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:corner-left-up"
                ></i>
                <p class="textFilter-match">corner-left-up</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:corner-right-down"
                ></i>
                <p class="textFilter-match">corner-right-down</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:corner-right-up"
                ></i>
                <p class="textFilter-match">corner-right-up</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:corner-up-left"
                ></i>
                <p class="textFilter-match">corner-up-left</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:corner-up-right"
                ></i>
                <p class="textFilter-match">corner-up-right</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:cpu"
                ></i>
                <p class="textFilter-match">cpu</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:credit-card"
                ></i>
                <p class="textFilter-match">credit-card</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:crop"
                ></i>
                <p class="textFilter-match">crop</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:crosshair"
                ></i>
                <p class="textFilter-match">crosshair</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:database"
                ></i>
                <p class="textFilter-match">database</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:delete"
                ></i>
                <p class="textFilter-match">delete</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:disc"
                ></i>
                <p class="textFilter-match">disc</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:dollar-sign"
                ></i>
                <p class="textFilter-match">dollar-sign</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:download-cloud"
                ></i>
                <p class="textFilter-match">download-cloud</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:download"
                ></i>
                <p class="textFilter-match">download</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:droplet"
                ></i>
                <p class="textFilter-match">droplet</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:edit-2"
                ></i>
                <p class="textFilter-match">edit-2</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:edit-3"
                ></i>
                <p class="textFilter-match">edit-3</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:edit"
                ></i>
                <p class="textFilter-match">edit</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:external-link"
                ></i>
                <p class="textFilter-match">external-link</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:eye-off"
                ></i>
                <p class="textFilter-match">eye-off</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:eye"
                ></i>
                <p class="textFilter-match">eye</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:facebook"
                ></i>
                <p class="textFilter-match">facebook</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:fast-forward"
                ></i>
                <p class="textFilter-match">fast-forward</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:feather"
                ></i>
                <p class="textFilter-match">feather</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:figma"
                ></i>
                <p class="textFilter-match">figma</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:file-minus"
                ></i>
                <p class="textFilter-match">file-minus</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:file-plus"
                ></i>
                <p class="textFilter-match">file-plus</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:file-text"
                ></i>
                <p class="textFilter-match">file-text</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:file"
                ></i>
                <p class="textFilter-match">file</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:film"
                ></i>
                <p class="textFilter-match">film</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:filter"
                ></i>
                <p class="textFilter-match">filter</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:flag"
                ></i>
                <p class="textFilter-match">flag</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:folder-minus"
                ></i>
                <p class="textFilter-match">folder-minus</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:folder-plus"
                ></i>
                <p class="textFilter-match">folder-plus</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:folder"
                ></i>
                <p class="textFilter-match">folder</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:framer"
                ></i>
                <p class="textFilter-match">framer</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:frown"
                ></i>
                <p class="textFilter-match">frown</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:gift"
                ></i>
                <p class="textFilter-match">gift</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:git-branch"
                ></i>
                <p class="textFilter-match">git=branch</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:git-commit"
                ></i>
                <p class="textFilter-match">git-commit</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:git-merge"
                ></i>
                <p class="textFilter-match">git-merge</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:git-pull-request"
                ></i>
                <p class="textFilter-match">git-pull-request</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:github"
                ></i>
                <p class="textFilter-match">github</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:gitlab"
                ></i>
                <p class="textFilter-match">gitlab</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:globe"
                ></i>
                <p class="textFilter-match">globe</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:grid"
                ></i>
                <p class="textFilter-match">grid</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:hard-drive"
                ></i>
                <p class="textFilter-match">hard-drive</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:hash"
                ></i>
                <p class="textFilter-match">hash</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:headphones"
                ></i>
                <p class="textFilter-match">headphones</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:heart"
                ></i>
                <p class="textFilter-match">heart</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:help-circle"
                ></i>
                <p class="textFilter-match">help-circle</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:hexagon"
                ></i>
                <p class="textFilter-match">hexagon</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:home"
                ></i>
                <p class="textFilter-match">home</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:image"
                ></i>
                <p class="textFilter-match">image</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:inbox"
                ></i>
                <p class="textFilter-match">inbox</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:info"
                ></i>
                <p class="textFilter-match">info</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:instagram"
                ></i>
                <p class="textFilter-match">instagram</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:italic"
                ></i>
                <p class="textFilter-match">italic</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:key"
                ></i>
                <p class="textFilter-match">key</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:layers"
                ></i>
                <p class="textFilter-match">layers</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:layout"
                ></i>
                <p class="textFilter-match">layout</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:life-buoy"
                ></i>
                <p class="textFilter-match">life-buoy</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:link-2"
                ></i>
                <p class="textFilter-match">link-2</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:link"
                ></i>
                <p class="textFilter-match">link</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:linkedin"
                ></i>
                <p class="textFilter-match">linkedin</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:list"
                ></i>
                <p class="textFilter-match">list</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:loader"
                ></i>
                <p class="textFilter-match">loader</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:lock"
                ></i>
                <p class="textFilter-match">lock</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:log-in"
                ></i>
                <p class="textFilter-match">log-in</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:log-out"
                ></i>
                <p class="textFilter-match">log-out</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:mail"
                ></i>
                <p class="textFilter-match">mail</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:map-pin"
                ></i>
                <p class="textFilter-match">map-pin</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:map"
                ></i>
                <p class="textFilter-match">map</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:maximize-2"
                ></i>
                <p class="textFilter-match">maximize-2</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:maximize"
                ></i>
                <p class="textFilter-match">maximize</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:meh"
                ></i>
                <p class="textFilter-match">meh</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:menu"
                ></i>
                <p class="textFilter-match">menu</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:message-circle"
                ></i>
                <p class="textFilter-match">message-circle</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:message-square"
                ></i>
                <p class="textFilter-match">message-square</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:mic-off"
                ></i>
                <p class="textFilter-match">mic-off</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:mic"
                ></i>
                <p class="textFilter-match">mic</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:minimize-2"
                ></i>
                <p class="textFilter-match">minimize-2</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:minimize"
                ></i>
                <p class="textFilter-match">minimize</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:minus-circle"
                ></i>
                <p class="textFilter-match">minus-circle</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:minus-square"
                ></i>
                <p class="textFilter-match">minus-square</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:minus"
                ></i>
                <p class="textFilter-match">minus</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:monitor"
                ></i>
                <p class="textFilter-match">monitor</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:moon"
                ></i>
                <p class="textFilter-match">moon</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:more-horizontal"
                ></i>
                <p class="textFilter-match">more-horizontal</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:more-vertical"
                ></i>
                <p class="textFilter-match">more-vertical</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:mouse-pointer"
                ></i>
                <p class="textFilter-match">mouse-pointer</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:move"
                ></i>
                <p class="textFilter-match">move</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:music"
                ></i>
                <p class="textFilter-match">music</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:navigation-2"
                ></i>
                <p class="textFilter-match">navigation-2</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:navigation"
                ></i>
                <p class="textFilter-match">navigation</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:octagon"
                ></i>
                <p class="textFilter-match">octagon</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:package"
                ></i>
                <p class="textFilter-match">package</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:paperclip"
                ></i>
                <p class="textFilter-match">paperclip</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:pause-circle"
                ></i>
                <p class="textFilter-match">pause-circle</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:pause"
                ></i>
                <p class="textFilter-match">pause</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:pen-tool"
                ></i>
                <p class="textFilter-match">pen-tool</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:percent"
                ></i>
                <p class="textFilter-match">percent</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:phone-call"
                ></i>
                <p class="textFilter-match">phone-call</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:phone-forwarded"
                ></i>
                <p class="textFilter-match">phone-forwarded</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:phone-incoming"
                ></i>
                <p class="textFilter-match">phone-incoming</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:phone-missed"
                ></i>
                <p class="textFilter-match">phone-missed</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:phone-off"
                ></i>
                <p class="textFilter-match">phone-off</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:phone-outgoing"
                ></i>
                <p class="textFilter-match">phone-outgoing</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:phone"
                ></i>
                <p class="textFilter-match">phone</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:pie-chart"
                ></i>
                <p class="textFilter-match">pie-chart</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:play-circle"
                ></i>
                <p class="textFilter-match">play-circle</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:play"
                ></i>
                <p class="textFilter-match">play</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:plus-circle"
                ></i>
                <p class="textFilter-match">plus-circle</p>
              </li>
              <li class="textFilter-plus-square">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:layers"
                ></i>
                <p class="textFilter-match">layers</p>
              </li>
              <li class="textFilter-plus-square">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:plus"
                ></i>
                <p class="textFilter-match">plus</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:pocket"
                ></i>
                <p class="textFilter-match">pocket</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:power"
                ></i>
                <p class="textFilter-match">power</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:printer"
                ></i>
                <p class="textFilter-match">printer</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:radio"
                ></i>
                <p class="textFilter-match">radio</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:refresh-cw"
                ></i>
                <p class="textFilter-match">refresh-cw</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:refresh-ccw"
                ></i>
                <p class="textFilter-match">refresh-ccw</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:repeat"
                ></i>
                <p class="textFilter-match">repeat</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:rewind"
                ></i>
                <p class="textFilter-match">rewind</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:rotate-ccw"
                ></i>
                <p class="textFilter-match">rotate-ccw</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:rotate-cw"
                ></i>
                <p class="textFilter-match">rotate-cw</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:rss"
                ></i>
                <p class="textFilter-match">rss</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:save"
                ></i>
                <p class="textFilter-match">save</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:scissors"
                ></i>
                <p class="textFilter-match">scissors</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:search"
                ></i>
                <p class="textFilter-match">search</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:send"
                ></i>
                <p class="textFilter-match">send</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:server"
                ></i>
                <p class="textFilter-match">server</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:settings"
                ></i>
                <p class="textFilter-match">settings</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:share-2"
                ></i>
                <p class="textFilter-match">share-2</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:share"
                ></i>
                <p class="textFilter-match">share</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:shield-off"
                ></i>
                <p class="textFilter-match">shield-off</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:shield"
                ></i>
                <p class="textFilter-match">shield</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:shopping-bag"
                ></i>
                <p class="textFilter-match">shopping-bag</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:shopping-cart"
                ></i>
                <p class="textFilter-match">shopping-cart</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:shuffle"
                ></i>
                <p class="textFilter-match">shuffle</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:sidebar"
                ></i>
                <p class="textFilter-match">sidebar</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:skip-back"
                ></i>
                <p class="textFilter-match">skip-back</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:skip-forward"
                ></i>
                <p class="textFilter-match">skip-forward</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:slack"
                ></i>
                <p class="textFilter-match">slack</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:slash"
                ></i>
                <p class="textFilter-match">slash</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:sliders"
                ></i>
                <p class="textFilter-match">sliders</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:smartphone"
                ></i>
                <p class="textFilter-match">smartphone</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:smile"
                ></i>
                <p class="textFilter-match">smile</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:speaker"
                ></i>
                <p class="textFilter-match">speaker</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:square"
                ></i>
                <p class="textFilter-match">square</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:star"
                ></i>
                <p class="textFilter-match">star</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:stop-circle"
                ></i>
                <p class="textFilter-match">stop-circle</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:sun"
                ></i>
                <p class="textFilter-match">sun</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:sunrise"
                ></i>
                <p class="textFilter-match">sunrise</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:sunset"
                ></i>
                <p class="textFilter-match">sunset</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:tablet"
                ></i>
                <p class="textFilter-match">tablet</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:tag"
                ></i>
                <p class="textFilter-match">tag</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:target"
                ></i>
                <p class="textFilter-match">target</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:terminal"
                ></i>
                <p class="textFilter-match">terminal</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:thermometer"
                ></i>
                <p class="textFilter-match">thermometer</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:thumbs-down"
                ></i>
                <p class="textFilter-match">thumbs-down</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:thumbs-up"
                ></i>
                <p class="textFilter-match">thumbs-up</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:toggle-left"
                ></i>
                <p class="textFilter-match">toggle-left</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:toggle-right"
                ></i>
                <p class="textFilter-match">toggle-right</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:tool"
                ></i>
                <p class="textFilter-match">tool</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:trash-2"
                ></i>
                <p class="textFilter-match">trash-2</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:trash"
                ></i>
                <p class="textFilter-match">trash</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:trello"
                ></i>
                <p class="textFilter-match">trello</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:trending-up"
                ></i>
                <p class="textFilter-match">trending-up</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:trending-down"
                ></i>
                <p class="textFilter-match">trending-down</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:triangle"
                ></i>
                <p class="textFilter-match">triangle</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:truck"
                ></i>
                <p class="textFilter-match">truck</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:tv"
                ></i>
                <p class="textFilter-match">tv</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:twitter"
                ></i>
                <p class="textFilter-match">twitter</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:twitch"
                ></i>
                <p class="textFilter-match">twitch</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:type"
                ></i>
                <p class="textFilter-match">type</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:umbrella"
                ></i>
                <p class="textFilter-match">umbrella</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:underline"
                ></i>
                <p class="textFilter-match">underline</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:unlock"
                ></i>
                <p class="textFilter-match">unlock</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:upload-cloud"
                ></i>
                <p class="textFilter-match">upload-cloud</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:upload"
                ></i>
                <p class="textFilter-match">upload</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:user-check"
                ></i>
                <p class="textFilter-match">user-check</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:user-plus"
                ></i>
                <p class="textFilter-match">user-plus</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:user-minus"
                ></i>
                <p class="textFilter-match">user-minus</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:user-x"
                ></i>
                <p class="textFilter-match">user-x</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:user"
                ></i>
                <p class="textFilter-match">user</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:users"
                ></i>
                <p class="textFilter-match">users</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:video-off"
                ></i>
                <p class="textFilter-match">video-off</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:video"
                ></i>
                <p class="textFilter-match">video</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:voicemail"
                ></i>
                <p class="textFilter-match">voicemail</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:volume-1"
                ></i>
                <p class="textFilter-match">volume-1</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:volume-2"
                ></i>
                <p class="textFilter-match">volume-2</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:volume-x"
                ></i>
                <p class="textFilter-match">volume-x</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:volume"
                ></i>
                <p class="textFilter-match">volume</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:watch"
                ></i>
                <p class="textFilter-match">watch</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:wifi-off"
                ></i>
                <p class="textFilter-match">wifi-off</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:wifi"
                ></i>
                <p class="textFilter-match">wifi</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:wind"
                ></i>
                <p class="textFilter-match">wind</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:x-circle"
                ></i>
                <p class="textFilter-match">x-circle</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:x-octagon"
                ></i>
                <p class="textFilter-match">x-octagon</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:x-square"
                ></i>
                <p class="textFilter-match">x-square</p>
              </li>
              <li class="textFilter-target">
                <i aria-hidden="true" class="iconify" data-icon="feather:x"></i>
                <p class="textFilter-match">x</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:youtube"
                ></i>
                <p class="textFilter-match">youtube</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:zap-off"
                ></i>
                <p class="textFilter-match">zap-off</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:zap"
                ></i>
                <p class="textFilter-match">zap</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:zoom-in"
                ></i>
                <p class="textFilter-match">zoom-in</p>
              </li>
              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:zoom-out"
                ></i>
                <p class="textFilter-match">zoom-out</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

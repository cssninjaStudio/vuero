<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { useViewWrapper } from '/@src/stores/viewWrapper'

const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('Helpers')

useHead({
  title: 'Helpers - Elements - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <VBreadcrumb
      with-icons
      separator="bullet"
      :items="[
        {
          label: 'Vuero',
          hideLabel: true,
          icon: 'feather:home',
          to: '/',
        },
        {
          label: 'Elements',
          to: '/elements/',
        },
        {
          label: 'Helpers',
          to: '/elements/helpers',
        },
      ]"
    />

    <div class="columns is-multiline">
      <div class="column is-12">
        <!--Theme Colors-->
        <HelpersDocumentation />

        <div class="columns is-multiline">
          <div class="column is-12">
            <div class="s-card demo-table">
              <table
                class="table is-hoverable is-fullwidth helper-table"
                aria-label="Vuero CSS classes helpers"
              >
                <thead>
                  <tr>
                    <td></td>
                    <th scope="col">Helper</th>
                    <th scope="col">Description</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <th scope="rowgroup" rowspan="4" class="category">
                      <strong>Spacing</strong>
                    </th>
                    <td class="name">Margin (<code>m-*-*</code>)</td>
                    <td class="description">
                      Sets a margin on the target element following the
                      <code>m-*-*</code> pattern, where the first <code>*</code> stands
                      for directon (<code>t</code>, <code>b</code>, <code>l</code> and
                      <code>r</code>) and the second one for pixel amount. Minimum and
                      maximum pixel amounts are <code>5</code> and <code>100</code>.
                    </td>
                  </tr>
                  <tr>
                    <td class="name">Padding (<code>p-*-*</code>)</td>
                    <td class="description">
                      Sets a padding on the target element following the
                      <code>p-*-*</code> pattern, where the first <code>*</code> stands
                      for directon (<code>t</code>, <code>b</code>, <code>l</code> and
                      <code>r</code>) and the second one for pixel amount. Minimum and
                      maximum pixel amounts are <code>5</code> and <code>100</code>.
                    </td>
                  </tr>
                  <tr>
                    <td class="name">No Margin (<code>no-margin-*</code>)</td>
                    <td class="description">
                      Sets a margin on the target element following the
                      <code>no-margin-*</code> pattern, where the first
                      <code>*</code> stands for directon (<code>all</code>,
                      <code>top</code>, <code>bottom</code>, <code>left</code> and
                      <code>right</code>).
                    </td>
                  </tr>
                  <tr>
                    <td class="name">No Padding (<code>no-padding-*</code>)</td>
                    <td class="description">
                      Sets a padding on the target element following the
                      <code>no-padding-*</code> pattern, where the first
                      <code>*</code> stands for directon (<code>all</code>,
                      <code>top</code>, <code>bottom</code>, <code>left</code> and
                      <code>right</code>).
                    </td>
                  </tr>
                  <tr>
                    <th scope="rowgroup" rowspan="3" class="category">
                      <strong>States</strong>
                    </th>
                    <td class="name">Hidden (<code>is-hidden</code>)</td>
                    <td class="description">
                      Sets the <code>display</code> property to <code>none</code> on the
                      target element.
                    </td>
                  </tr>
                  <tr>
                    <td class="name">VHidden (<code>is-vhidden</code>)</td>
                    <td class="description">
                      Sets the <code>visibility</code> property to <code>hidden</code> on
                      the target element.
                    </td>
                  </tr>
                  <tr>
                    <td class="name">Disabled (<code>is-disabled</code>)</td>
                    <td class="description">
                      Sets the <code>pointer-events</code> property to
                      <code>none</code> on the target element and decreases its opacity.
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" class="category">
                      <strong>Scroll</strong>
                    </th>
                    <td class="name">Slimscroll (<code>has-slimscroll</code>)</td>
                    <td class="description">
                      Sets the <code>overflowY</code> property to <code>auto</code> on the
                      target element and tweaks the webkit scrollbar.
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" class="category">
                      <strong>Scroll</strong>
                    </th>
                    <td class="name">Slimscroll X (<code>has-slimscroll-x</code>)</td>
                    <td class="description">
                      Sets the <code>overflowX</code> property to <code>auto</code> on the
                      target element and tweaks the webkit scrollbar.
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" class="category">
                      <strong>Scroll</strong>
                    </th>
                    <td class="name">
                      Slimscroll X and Y (<code>has-slimscroll-all</code>)
                    </td>
                    <td class="description">
                      Sets the <code>overflow</code> property to <code>auto</code> on the
                      target element and tweaks the webkit scrollbar.
                    </td>
                  </tr>
                  <tr>
                    <th scope="rowgroup" rowspan="2" class="category">
                      <strong>Dark Mode</strong>
                    </th>
                    <td class="name">Images</td>
                    <td class="description">
                      Toggle images between light mode and dark mode using the
                      corresponding classes:
                      <code>light-image</code> and <code>dark-image</code>. Displayed
                      images will be displayed as <code>inline-block</code>. To display
                      images as <code>block</code> use the
                      <code>light-image-block</code> and
                      <code>dark-image-block</code> classes instead.
                    </td>
                  </tr>
                  <tr>
                    <td class="name">Dark Background (<code>is-dark-bg-*</code>)</td>
                    <td class="description">
                      Sets the <code>background-color</code> property to the specidifed
                      value, where <code>*</code> is a percentage of the dark mode main
                      color. Accepted values: 2, 3, 4, 6.
                    </td>
                  </tr>
                  <tr>
                    <th scope="rowgroup" rowspan="4" class="category">
                      <strong>Responsive</strong>
                    </th>
                    <td class="name">Hidden mobile (<code>h-hidden-mobile</code>)</td>
                    <td class="description">
                      Sets the <code>display</code> property to <code>none</code> on the
                      target element when on a mobile display.
                    </td>
                  </tr>
                  <tr>
                    <td class="name">Hidden tablet (<code>h-hidden-tablet-p</code>)</td>
                    <td class="description">
                      Sets the <code>display</code> property to <code>none</code> on the
                      target element when on a tablet display in portrait mode.
                    </td>
                  </tr>
                  <tr>
                    <td class="name">Hidden tablet (<code>h-hidden-tablet-l</code>)</td>
                    <td class="description">
                      Sets the <code>display</code> property to <code>none</code> on the
                      target element when on a tablet display in landscape mode.
                    </td>
                  </tr>
                  <tr>
                    <td class="name">Hidden desktop (<code>h-hidden-desktop</code>)</td>
                    <td class="description">
                      Sets the <code>display</code> property to <code>none</code> on the
                      target element when on a desktop display.
                    </td>
                  </tr>
                  <tr>
                    <th scope="rowgroup" rowspan="4" class="category">
                      <strong>Typography</strong>
                    </th>
                    <td class="name">Font (<code>.is-font</code>)</td>
                    <td class="description">
                      Sets the <code>font-family</code> property to the
                      <code>$font</code> variable value.
                    </td>
                  </tr>
                  <tr>
                    <td class="name">Font Alt (<code>.is-font-alt</code>)</td>
                    <td class="description">
                      Sets the <code>font-family</code> property to the
                      <code>$font-alt</code> variable value.
                    </td>
                  </tr>
                  <tr>
                    <td class="name">Font Weight (<code>.is-weight-*</code>)</td>
                    <td class="description">
                      Sets the <code>font-weight</code> property to the specidifed value,
                      where <code>*</code> is a value between 300 and 900.
                    </td>
                  </tr>
                  <tr>
                    <td class="name">Font Size (<code>.rem-*</code>)</td>
                    <td class="description">
                      Sets the <code>font-size</code> property to the specidifed value,
                      where <code>*</code> is a value between 70 and 100. Increments by 5.
                    </td>
                  </tr>

                  <tr>
                    <th scope="rowgroup" rowspan="2" class="category">
                      <strong>Stay Focus</strong>
                    </th>
                    <td class="name">Container (<code>.stay-focus-container</code>)</td>
                    <td class="description">
                      Sets the stay focus container. Will blur all child
                      <code>.stay-focus-element</code> except the hovered one.
                    </td>
                  </tr>
                  <tr>
                    <td class="name">Element (<code>.stay-focus-element</code>)</td>
                    <td class="description">
                      Element that will be blured when user hover over the container.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { onMounted } from 'vue'
import useMakrdownToc from '/@src/composable/useMarkdownToc'

import { activeSidebar, toggleSidebar } from '/@src/state/activeSidebarState'

const { markdownContainer, toc } = useMakrdownToc()

onMounted(() => {
  activeSidebar.value = 'elements'
})

useHead({
  title: 'Table - Elements - Vuero',
})
</script>

<template>
  <div>
    <div class="page-title has-text-centered">
      <!-- Sidebar Trigger -->
      <div
        class="huro-hamburger nav-trigger push-resize"
        @click="toggleSidebar('elements')"
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
        <h1 class="title is-4">Table</h1>
      </div>

      <Toolbar />
    </div>

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
            label: 'Table',
            to: { name: 'elements-table' },
          },
        ]"
      />

      <div class="columns">
        <div
          ref="markdownContainer"
          :class="[toc.length > 0 ? 'is-9' : 'is-12']"
          class="column doc-column"
        >
          <!--Table-->
          <TableBaseDocumentation />

          <div class="s-card demo-table mb-6">
            <table class="table is-hoverable is-fullwidth">
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Position</th>
                <th class="is-end">
                  <div
                    class="dark-inverted is-flex is-justify-content-flex-end"
                  >
                    Actions
                  </div>
                </th>
              </tr>
              <tr>
                <td>Tina</td>
                <td>Bergmann</td>
                <td>Head of Sales</td>
                <td class="is-end">
                  <div class="is-flex is-justify-content-flex-end">
                    <FlexTableContextMenuAlt />
                  </div>
                </td>
              </tr>
              <tr>
                <td>John</td>
                <td>Wistmus</td>
                <td>Senior Executive</td>
                <td class="is-end">
                  <div class="is-flex is-justify-content-flex-end">
                    <FlexTableContextMenuAlt />
                  </div>
                </td>
              </tr>
              <tr>
                <td>Sam</td>
                <td>Watson</td>
                <td>Software Engineer</td>
                <td class="is-end">
                  <div class="is-flex is-justify-content-flex-end">
                    <FlexTableContextMenuAlt />
                  </div>
                </td>
              </tr>
              <tr>
                <td>Jolaine</td>
                <td>Joestar</td>
                <td>HR Manager</td>
                <td class="is-end">
                  <div class="is-flex is-justify-content-flex-end">
                    <FlexTableContextMenuAlt />
                  </div>
                </td>
              </tr>
              <tr>
                <td>Anders</td>
                <td>Jensen</td>
                <td>Accountant</td>
                <td class="is-end">
                  <div class="is-flex is-justify-content-flex-end">
                    <FlexTableContextMenuAlt />
                  </div>
                </td>
              </tr>
            </table>
          </div>

          <!--Table striped-->
          <TableStripedDocumentation />

          <div class="s-card demo-table">
            <table class="table is-striped is-fullwidth">
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Position</th>
                <th class="is-end">
                  <div
                    class="dark-inverted is-flex is-justify-content-flex-end"
                  >
                    Actions
                  </div>
                </th>
              </tr>
              <tr>
                <td>Tina</td>
                <td>Bergmann</td>
                <td>Head of Sales</td>
                <td class="is-end">
                  <div class="is-flex is-justify-content-flex-end">
                    <FlexTableContextMenuAlt />
                  </div>
                </td>
              </tr>
              <tr>
                <td>John</td>
                <td>Wistmus</td>
                <td>Senior Executive</td>
                <td class="is-end">
                  <div class="is-flex is-justify-content-flex-end">
                    <FlexTableContextMenuAlt />
                  </div>
                </td>
              </tr>
              <tr>
                <td>Sam</td>
                <td>Watson</td>
                <td>Software Engineer</td>
                <td class="is-end">
                  <div class="is-flex is-justify-content-flex-end">
                    <FlexTableContextMenuAlt />
                  </div>
                </td>
              </tr>
              <tr>
                <td>Jolaine</td>
                <td>Joestar</td>
                <td>HR Manager</td>
                <td class="is-end">
                  <div class="is-flex is-justify-content-flex-end">
                    <FlexTableContextMenuAlt />
                  </div>
                </td>
              </tr>
              <tr>
                <td>Anders</td>
                <td>Jensen</td>
                <td>Accountant</td>
                <td class="is-end">
                  <div class="is-flex is-justify-content-flex-end">
                    <FlexTableContextMenuAlt />
                  </div>
                </td>
              </tr>
            </table>
          </div>

          <!--Table media-->
          <TableMediaDocumentation />

          <div class="s-card demo-table">
            <table class="table is-hoverable is-fullwidth">
              <tr>
                <th class="is-media"></th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Position</th>
                <th class="is-end">
                  <div
                    class="dark-inverted is-flex is-justify-content-flex-end"
                  >
                    Actions
                  </div>
                </th>
              </tr>
              <tr>
                <td class="is-media">
                  <div class="v-avatar">
                    <img
                      class="avatar"
                      src="/images/avatars/svg/8.gif"
                      alt=""
                      @error.once="
                        $event.target.src =
                          'https://via.placeholder.com/150x150'
                      "
                    />
                  </div>
                </td>
                <td>Tina</td>
                <td>Bergmann</td>
                <td>Head of Sales</td>
                <td class="is-end">
                  <div class="is-flex is-justify-content-flex-end">
                    <FlexTableContextMenuAlt />
                  </div>
                </td>
              </tr>
              <tr>
                <td class="is-media">
                  <div class="v-avatar">
                    <img
                      class="avatar"
                      src="/images/avatars/svg/1.gif"
                      alt=""
                      @error.once="
                        $event.target.src =
                          'https://via.placeholder.com/150x150'
                      "
                    />
                  </div>
                </td>
                <td>John</td>
                <td>Wistmus</td>
                <td>Senior Executive</td>
                <td class="is-end">
                  <div class="is-flex is-justify-content-flex-end">
                    <FlexTableContextMenuAlt />
                  </div>
                </td>
              </tr>
              <tr>
                <td class="is-media">
                  <div class="v-avatar">
                    <img
                      class="avatar"
                      src="/images/avatars/svg/4.gif"
                      alt=""
                      @error.once="
                        $event.target.src =
                          'https://via.placeholder.com/150x150'
                      "
                    />
                  </div>
                </td>
                <td>Sam</td>
                <td>Watson</td>
                <td>Software Engineer</td>
                <td class="is-end">
                  <div class="is-flex is-justify-content-flex-end">
                    <FlexTableContextMenuAlt />
                  </div>
                </td>
              </tr>
              <tr>
                <td class="is-media">
                  <div class="v-avatar">
                    <span class="avatar is-fake is-info">
                      <span>JD</span>
                    </span>
                  </div>
                </td>
                <td>Jolaine</td>
                <td>Joestar</td>
                <td>HR Manager</td>
                <td class="is-end">
                  <div class="is-flex is-justify-content-flex-end">
                    <FlexTableContextMenuAlt />
                  </div>
                </td>
              </tr>
              <tr>
                <td class="is-media">
                  <div class="v-avatar">
                    <img
                      class="avatar"
                      src="/images/avatars/svg/3.gif"
                      alt=""
                      @error.once="
                        $event.target.src =
                          'https://via.placeholder.com/150x150'
                      "
                    />
                  </div>
                </td>
                <td>Anders</td>
                <td>Jensen</td>
                <td>Accountant</td>
                <td class="is-end">
                  <div class="is-flex is-justify-content-flex-end">
                    <FlexTableContextMenuAlt />
                  </div>
                </td>
              </tr>
            </table>
          </div>
        </div>
        <div v-if="toc.length" class="column is-3 toc-column">
          <DocumentationToc :toc="toc" />
        </div>
      </div>
    </div>
  </div>
</template>

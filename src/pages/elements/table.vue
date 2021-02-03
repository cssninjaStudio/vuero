<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { onMounted } from 'vue'
import useMakrdownToc from '/@src/composition/use/useMarkdownToc'

import {
  activeSidebar,
  toggleSidebar,
} from '/@src/composition/state/activeSidebarState'

const { markdownContainer, toc } = useMakrdownToc()

onMounted(() => {
  activeSidebar.value = 'elements'
})

useHead({
  title: 'Elements - Table - Vuero',
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
              <span>Elements</span>
            </RouterLink>
          </li>
          <li>
            <a>
              <span>Table</span>
            </a>
          </li>
        </ul>
      </nav>

      <div class="columns">
        <div
          ref="markdownContainer"
          :class="[toc.length > 0 ? 'is-9' : 'is-12']"
          class="column"
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
                      @error="
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
                      @error="
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
                      @error="
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
                      @error="
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
        <div v-if="toc.length" class="column is-3">
          <DocumentationToc :toc="toc" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { onMounted } from 'vue'

import {
  activeSidebar,
  toggleSidebar,
} from '/@src/composition/state/ui/activeSidebarState'

onMounted(() => {
  activeSidebar.value = 'elements'
})

useHead({
  title: 'Elements - Table - Vuero',
})
</script>

<template>
  <DefaultLayout>
    <ElementsSidebar />
    <ElementsMobileSubsidebar />

    <!-- Content Wrapper -->
    <div
      id="huro-demo"
      class="view-wrapper"
      :class="[activeSidebar !== 'none' && 'is-pushed-full']"
      data-naver-offset="278"
      data-menu-item="#elements-sidebar-menu"
      data-mobile-item="#elements-sidebar-menu-mobile"
    >
      <div class="page-content-wrapper">
        <div class="page-content is-relative">
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
            <nav
              class="breadcrumb has-bullet-separator"
              aria-label="breadcrumbs"
            >
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
                    <span>Forms</span>
                  </a>
                </li>
                <li>
                  <a>
                    <span>Table</span>
                  </a>
                </li>
              </ul>
            </nav>

            <div class="columns">
              <div class="column is-12">
                <!--Table-->
                <div class="demo-card has-more-margin">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Basic Table</h3>
                    <p>
                      Vuero provides a basic Html5 table powered by Bulma. You
                      sinply have to add the <code>table</code> class to a html5
                      <code>table</code> element. You can also add the
                      <code>is-hoverable</code> class to highlight the rows on
                      hover.
                    </p>
                  </div>
                </div>

                <div class="s-card demo-table">
                  <table class="table is-hoverable is-fullwidth">
                    <tr>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Position</th>
                      <th class="is-end">
                        <div class="dark-inverted">Actions</div>
                      </th>
                    </tr>
                    <tr>
                      <td>Tina</td>
                      <td>Bergmann</td>
                      <td>Head of Sales</td>
                      <td class="is-end">
                        <div>
                          <FlexTableContextMenuAlt />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>John</td>
                      <td>Wistmus</td>
                      <td>Senior Executive</td>
                      <td class="is-end">
                        <div>
                          <FlexTableContextMenuAlt />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Sam</td>
                      <td>Watson</td>
                      <td>Software Engineer</td>
                      <td class="is-end">
                        <div>
                          <FlexTableContextMenuAlt />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Jolaine</td>
                      <td>Joestar</td>
                      <td>HR Manager</td>
                      <td class="is-end">
                        <div>
                          <FlexTableContextMenuAlt />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Anders</td>
                      <td>Jensen</td>
                      <td>Accountant</td>
                      <td class="is-end">
                        <div>
                          <FlexTableContextMenuAlt />
                        </div>
                      </td>
                    </tr>
                  </table>
                </div>

                <!--Table-->
                <div class="demo-card has-more-margin">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Striped Table</h3>
                    <p>
                      Vuero provides a basic Html5 table powered by Bulma. You
                      sinply have to add the <code>table</code> class to a html5
                      <code>table</code> element. You can also add the
                      <code>is-striped</code> to apply striped styles to the
                      table rows.
                    </p>
                  </div>
                </div>

                <div class="s-card demo-table">
                  <table class="table is-striped is-fullwidth">
                    <tr>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Position</th>
                      <th class="is-end">
                        <div class="dark-inverted">Actions</div>
                      </th>
                    </tr>
                    <tr>
                      <td>Tina</td>
                      <td>Bergmann</td>
                      <td>Head of Sales</td>
                      <td class="is-end">
                        <div>
                          <FlexTableContextMenuAlt />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>John</td>
                      <td>Wistmus</td>
                      <td>Senior Executive</td>
                      <td class="is-end">
                        <div>
                          <FlexTableContextMenuAlt />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Sam</td>
                      <td>Watson</td>
                      <td>Software Engineer</td>
                      <td class="is-end">
                        <div>
                          <FlexTableContextMenuAlt />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Jolaine</td>
                      <td>Joestar</td>
                      <td>HR Manager</td>
                      <td class="is-end">
                        <div>
                          <FlexTableContextMenuAlt />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Anders</td>
                      <td>Jensen</td>
                      <td>Accountant</td>
                      <td class="is-end">
                        <div>
                          <FlexTableContextMenuAlt />
                        </div>
                      </td>
                    </tr>
                  </table>
                </div>

                <!--Table-->
                <div class="demo-card has-more-margin">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Media Table</h3>
                    <p>
                      Vuero provides a basic Html5 table powered by Bulma. You
                      sinply have to add the <code>table</code> class to a html5
                      <code>table</code> element. You can easily add media
                      elements like the huro avatars inside your table rows.
                    </p>
                  </div>
                </div>

                <div class="s-card demo-table">
                  <table class="table is-hoverable is-fullwidth">
                    <tr>
                      <th class="is-media"></th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Position</th>
                      <th class="is-end">
                        <div class="dark-inverted">Actions</div>
                      </th>
                    </tr>
                    <tr>
                      <td class="is-media">
                        <div class="h-avatar">
                          <img
                            class="avatar"
                            src="/@images/avatars/svg/8.gif"
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
                        <div>
                          <FlexTableContextMenuAlt />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td class="is-media">
                        <div class="h-avatar">
                          <img
                            class="avatar"
                            src="/@images/avatars/svg/1.gif"
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
                        <div>
                          <FlexTableContextMenuAlt />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td class="is-media">
                        <div class="h-avatar">
                          <img
                            class="avatar"
                            src="/@images/avatars/svg/4.gif"
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
                        <div>
                          <FlexTableContextMenuAlt />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td class="is-media">
                        <div class="h-avatar">
                          <span class="avatar is-fake is-info">
                            <span>JD</span>
                          </span>
                        </div>
                      </td>
                      <td>Jolaine</td>
                      <td>Joestar</td>
                      <td>HR Manager</td>
                      <td class="is-end">
                        <div>
                          <FlexTableContextMenuAlt />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td class="is-media">
                        <div class="h-avatar">
                          <img
                            class="avatar"
                            src="/@images/avatars/svg/3.gif"
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
                        <div>
                          <FlexTableContextMenuAlt />
                        </div>
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>

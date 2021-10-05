<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/sidebarLayoutState'
import { useViaPlaceholderError } from '/@src/composable/useViaPlaceholderError'

pageTitle.value = 'VFlexTable'
useHead({
  title: 'VFlexTable - Components - Vuero',
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
          to: { name: 'index' },
        },
        {
          label: 'Components',
          to: { name: 'components' },
        },
        {
          label: 'VFlexTable',
          to: { name: 'components-table-flex' },
        },
      ]"
    />

    <div class="columns">
      <div class="column is-12">
        <!--Flex Table-->
        <VFlexTableBaseDocumentation />

        <div class="mt-6">
          <div class="flex-table">
            <!--Table header-->
            <div class="flex-table-header">
              <span>Company</span>
              <span>Type</span>
              <span>Industry</span>
              <span>Status</span>
              <span>Contacts</span>
              <span class="cell-end">Actions</span>
            </div>

            <!--Table item-->
            <div class="flex-table-item">
              <div class="flex-table-cell is-bold" data-th="Company">
                <span class="dark-text">Grubspot</span>
              </div>
              <div class="flex-table-cell" data-th="Type">
                <span class="light-text">New lead</span>
              </div>
              <div class="flex-table-cell" data-th="Industry">
                <span class="light-text">Software</span>
              </div>
              <div class="flex-table-cell" data-th="Status">
                <span class="tag is-success is-rounded">Active</span>
              </div>
              <div class="flex-table-cell" data-th="Contacts">
                <div class="avatar-stack is-pushed-mobile">
                  <div class="v-avatar is-small">
                    <img
                      class="avatar"
                      src="/demo/avatars/25.jpg"
                      alt=""
                      @error.once="
                        (event) => useViaPlaceholderError(event, '150x150')
                      "
                    />
                  </div>
                  <div class="v-avatar is-small">
                    <span class="avatar is-fake is-info">
                      <span>JD</span>
                    </span>
                  </div>
                  <div class="v-avatar is-small">
                    <img
                      class="avatar"
                      src="/images/avatars/svg/vuero-1.svg"
                      alt=""
                      @error.once="
                        (event) => useViaPlaceholderError(event, '150x150')
                      "
                    />
                  </div>
                  <div class="v-avatar is-small">
                    <span class="avatar is-more">
                      <span class="inner">
                        <span>+2</span>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              <div class="flex-table-cell cell-end" data-th="Actions">
                <FlexTableDropdown />
              </div>
            </div>

            <!--Table item-->
            <div class="flex-table-item">
              <div class="flex-table-cell is-bold" data-th="Company">
                <span class="dark-text">PhaseBit</span>
              </div>
              <div class="flex-table-cell" data-th="Type">
                <span class="light-text">Confirmed</span>
              </div>
              <div class="flex-table-cell" data-th="Industry">
                <span class="light-text">Cryptocurrency</span>
              </div>
              <div class="flex-table-cell" data-th="Status">
                <span class="tag is-info is-rounded">New</span>
              </div>
              <div class="flex-table-cell" data-th="Contacts">
                <div class="avatar-stack is-pushed-mobile">
                  <div class="v-avatar is-small">
                    <span class="avatar is-fake is-danger">
                      <span>SC</span>
                    </span>
                  </div>
                </div>
              </div>
              <div class="flex-table-cell cell-end" data-th="Actions">
                <FlexTableDropdown />
              </div>
            </div>

            <!--Table item-->
            <div class="flex-table-item">
              <div class="flex-table-cell is-bold" data-th="Company">
                <span class="dark-text">Kokolint</span>
              </div>
              <div class="flex-table-cell" data-th="Type">
                <span class="light-text">New lead</span>
              </div>
              <div class="flex-table-cell" data-th="Industry">
                <span class="light-text">Software</span>
              </div>
              <div class="flex-table-cell" data-th="Status">
                <span class="tag is-success is-rounded">Active</span>
              </div>
              <div class="flex-table-cell" data-th="Contacts">
                <div class="avatar-stack is-pushed-mobile">
                  <div class="v-avatar is-small">
                    <span class="avatar is-fake is-success">
                      <span>BT</span>
                    </span>
                  </div>
                  <div class="v-avatar is-small">
                    <img
                      class="avatar"
                      src="/demo/avatars/7.jpg"
                      alt=""
                      @error.once="
                        (event) => useViaPlaceholderError(event, '150x150')
                      "
                    />
                  </div>
                </div>
              </div>
              <div class="flex-table-cell cell-end" data-th="Actions">
                <FlexTableDropdown />
              </div>
            </div>

            <!--Table item-->
            <div class="flex-table-item">
              <div class="flex-table-cell is-bold" data-th="Company">
                <span class="dark-text">VScope X</span>
              </div>
              <div class="flex-table-cell" data-th="Type">
                <span class="light-text">Canceled</span>
              </div>
              <div class="flex-table-cell" data-th="Industry">
                <span class="light-text">Software</span>
              </div>
              <div class="flex-table-cell" data-th="Status">
                <span class="tag is-rounded">Disabled</span>
              </div>
              <div class="flex-table-cell" data-th="Contacts">
                <div class="avatar-stack is-pushed-mobile">
                  <div class="v-avatar is-small">
                    <img
                      class="avatar"
                      src="/demo/avatars/13.jpg"
                      alt=""
                      @error.once="
                        (event) => useViaPlaceholderError(event, '150x150')
                      "
                    />
                  </div>
                </div>
              </div>
              <div class="flex-table-cell cell-end" data-th="Actions">
                <FlexTableDropdown />
              </div>
            </div>

            <!--Table item-->
            <div class="flex-table-item">
              <div class="flex-table-cell is-bold" data-th="Company">
                <span class="dark-text">MediHelp</span>
              </div>
              <div class="flex-table-cell" data-th="Type">
                <span class="light-text">Confirmed</span>
              </div>
              <div class="flex-table-cell" data-th="Industry">
                <span class="light-text">Software</span>
              </div>
              <div class="flex-table-cell" data-th="Status">
                <span class="tag is-rounded is-danger">Suspended</span>
              </div>
              <div class="flex-table-cell" data-th="Contacts">
                <div class="avatar-stack is-pushed-mobile">
                  <div class="v-avatar is-small">
                    <img
                      class="avatar"
                      src="/demo/avatars/25.jpg"
                      alt=""
                      @error.once="
                        (event) => useViaPlaceholderError(event, '150x150')
                      "
                    />
                  </div>
                  <div class="v-avatar is-small">
                    <img
                      class="avatar"
                      src="/demo/avatars/11.jpg"
                      alt=""
                      @error.once="
                        (event) => useViaPlaceholderError(event, '150x150')
                      "
                    />
                  </div>
                  <div class="v-avatar is-small">
                    <img
                      class="avatar"
                      src="/demo/avatars/5.jpg"
                      alt=""
                      @error.once="
                        (event) => useViaPlaceholderError(event, '150x150')
                      "
                    />
                  </div>
                </div>
              </div>
              <div class="flex-table-cell cell-end" data-th="Actions">
                <FlexTableDropdown />
              </div>
            </div>
          </div>

          <!--Table Pagination-->
          <VFlexPagination
            :item-per-page="10"
            :total-items="873"
            :current-page="42"
            :max-links-displayed="7"
          />
        </div>
      </div>
    </div>
  </div>
</template>

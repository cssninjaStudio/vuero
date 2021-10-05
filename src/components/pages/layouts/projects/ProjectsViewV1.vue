<script setup lang="ts">
import { useViaPlaceholderError } from '/@src/composable/useViaPlaceholderError'
</script>

<template>
  <div class="all-projects">
    <ProjectsToolbar />

    <h3 class="section-heading">Recently viewed</h3>

    <div
      class="
        columns
        is-multiline
        project-grid
        is-flex-tablet-p is-half-tablet-p
      "
    >
      <div class="column is-one-fifth">
        <a class="project-grid-item">
          <img
            class="project-avatar"
            src="/images/icons/logos/slicer.svg"
            alt=""
            @error.once="(event) => useViaPlaceholderError(event, '150x150')"
          />
          <h3>The Slicer project</h3>
          <p>Design project</p>
          <progress class="progress is-primary is-tiny" value="31" max="100">
            31%
          </progress>
        </a>
      </div>

      <div class="column is-one-fifth">
        <a class="project-grid-item">
          <img
            class="project-avatar"
            src="/images/icons/logos/metamovies.svg"
            alt=""
            @error.once="(event) => useViaPlaceholderError(event, '150x150')"
          />
          <h3>Metamovies reworked</h3>
          <p>Design project</p>
          <progress class="progress is-primary is-tiny" value="84" max="100">
            84%
          </progress>
        </a>
      </div>

      <div class="column is-one-fifth">
        <a class="project-grid-item">
          <img
            class="project-avatar"
            src="/@src/assets/illustrations/dashboards/flights/company1.svg"
            alt=""
            @error.once="(event) => useViaPlaceholderError(event, '150x150')"
          />
          <h3>Supreme Flights app</h3>
          <p>Software project</p>
          <progress class="progress is-primary is-tiny" value="45" max="100">
            45%
          </progress>
        </a>
      </div>

      <div class="column is-one-fifth">
        <a class="project-grid-item">
          <img
            class="project-avatar"
            src="/images/icons/logos/fastpizza.svg"
            alt=""
            @error.once="(event) => useViaPlaceholderError(event, '150x150')"
          />
          <h3>Fastpizza delivery app</h3>
          <p>Software project</p>
          <progress class="progress is-primary is-tiny" value="90" max="100">
            90%
          </progress>
        </a>
      </div>

      <div class="column is-one-fifth">
        <a class="project-grid-item">
          <img
            class="project-avatar"
            src="/images/icons/logos/drop.svg"
            alt=""
            @error.once="(event) => useViaPlaceholderError(event, '150x150')"
          />
          <h3>Drop website redesign</h3>
          <p>Design project</p>
          <progress class="progress is-primary is-tiny" value="12" max="100">
            12%
          </progress>
        </a>
      </div>
    </div>

    <div class="columns">
      <div class="column is-12">
        <div class="flex-table is-compact">
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
              <span class="tag is-solid is-rounded">Active</span>
            </div>
            <div class="flex-table-cell" data-th="Contacts">
              <VAvatarStack
                class="is-pushed-mobile"
                size="small"
                :limit="3"
                :avatars="[
                  { picture: '/demo/avatars/7.jpg' },
                  { color: 'info', initials: 'JD' },
                  { picture: '/demo/avatars/12.jpg' },
                  { picture: '/demo/avatars/12.jpg' },
                  { picture: '/demo/avatars/12.jpg' },
                ]"
              />
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
              <span class="tag is-solid is-rounded">New</span>
            </div>
            <div class="flex-table-cell" data-th="Contacts">
              <VAvatarStack
                class="is-pushed-mobile"
                size="small"
                :avatars="[{ color: 'danger', initials: 'SC' }]"
              />
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
              <span class="tag is-solid is-rounded">Active</span>
            </div>
            <div class="flex-table-cell" data-th="Contacts">
              <VAvatarStack
                class="is-pushed-mobile"
                size="small"
                :avatars="[
                  { color: 'success', initials: 'BT' },
                  { picture: '/images/avatars/svg/vuero-1.svg' },
                ]"
              />
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
              <VTag label="Disabled" color="solid" rounded />
            </div>
            <div class="flex-table-cell" data-th="Contacts">
              <VAvatarStack
                class="is-pushed-mobile"
                size="small"
                :avatars="[{ picture: '/demo/avatars/13.jpg' }]"
              />
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
              <VTag label="Suspended" color="solid" rounded />
            </div>
            <div class="flex-table-cell" data-th="Contacts">
              <VAvatarStack
                class="is-pushed-mobile"
                size="small"
                :avatars="[
                  { picture: '/demo/avatars/11.jpg' },
                  { picture: '/demo/avatars/16.jpg' },
                  { picture: '/demo/avatars/19.jpg' },
                ]"
              />
            </div>
            <div class="flex-table-cell cell-end" data-th="Actions">
              <FlexTableDropdown />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../../../scss/abstracts/_mixins.scss';
@import '../../../../scss/pages/projects/_projects.scss';
</style>

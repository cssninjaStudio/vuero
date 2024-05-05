<script setup lang="ts">
import { FocusTrap } from 'focus-trap-vue'

type TabId = 'team' | 'projects' | 'schedule'

const { onceError } = useImageError()
const panels = usePanels()

const activeTab = ref<TabId>('team')
</script>

<template>
  <Teleport v-if="panels.active === 'activity'" to="body">
    <FocusTrap :initial-focus="() => ($refs.closeButton as any)?.el">
      <div class="right-panel-wrapper is-activity is-active">
        <div
          class="panel-overlay"
          tabindex="-1"
          role="button"
          @keydown.enter.prevent="panels.close()"
          @click="panels.close()"
        />

        <div class="right-panel">
          <div class="right-panel-head">
            <h3>Activity</h3>
            <a
              ref="closeButton"
              class="close-panel"
              tabindex="0"
              role="button"
              @keydown.enter.prevent="panels.close()"
              @click="panels.close()"
            >
              <VIcon
                class="rtl-hidden"
                icon="lucide:chevron-right"
              />
              <VIcon
                class="ltr-hidden"
                icon="lucide:chevron-left"
              />
            </a>
          </div>
          <VTabs
            v-model:selected="activeTab"
            :tabs="[
              {
                label: 'Team',
                value: 'team',
              },
              {
                label: 'Projects',
                value: 'projects',
              },
              {
                label: 'Schedule',
                value: 'schedule',
              },
            ]"
          >
            <template #tab>
              <div class="right-panel-body">
                <Transition name="fade-fast" mode="out-in">
                  <div v-if="activeTab === 'team'">
                    <!--Team Member-->
                    <div class="team-card">
                      <VAvatar
                        picture="https://media.cssninja.io/content/avatars/12.jpg"
                        badge="/images/icons/flags/united-states-of-america.svg"
                      />

                      <div class="meta">
                        <span>Joshua S.</span>
                        <span>
                          <VIcon
                            icon="lucide:map-pin"
                          />
                          Las Vegas, NV
                        </span>
                      </div>
                      <a class="link">
                        <VIcon
                          class="rtl-hidden"
                          icon="lucide:arrow-right"
                        />
                        <VIcon
                          class="ltr-hidden"
                          icon="lucide:arrow-left"
                        />
                      </a>
                    </div>

                    <!--Team Member-->
                    <div class="team-card">
                      <VAvatar
                        picture="https://media.cssninja.io/content/avatars/25.jpg"
                        badge="/images/icons/flags/united-states-of-america.svg"
                      />

                      <div class="meta">
                        <span>Melany W.</span>
                        <span>
                          <VIcon
                            icon="lucide:map-pin"
                          />
                          San Jose, CA
                        </span>
                      </div>
                      <a class="link">
                        <VIcon
                          class="rtl-hidden"
                          icon="lucide:arrow-right"
                        />
                        <VIcon
                          class="ltr-hidden"
                          icon="lucide:arrow-left"
                        />
                      </a>
                    </div>

                    <!--Team Member-->
                    <div class="team-card">
                      <VAvatar
                        picture="https://media.cssninja.io/content/avatars/18.jpg"
                        badge="/images/icons/flags/united-states-of-america.svg"
                      />

                      <div class="meta">
                        <span>Esteban C.</span>
                        <span>
                          <VIcon
                            icon="lucide:map-pin"
                          />
                          Miami, FL
                        </span>
                      </div>
                      <a class="link">
                        <VIcon
                          class="rtl-hidden"
                          icon="lucide:arrow-right"
                        />
                        <VIcon
                          class="ltr-hidden"
                          icon="lucide:arrow-left"
                        />
                      </a>
                    </div>

                    <!--Team Member-->
                    <div class="team-card">
                      <VAvatar
                        picture="https://media.cssninja.io/content/avatars/13.jpg"
                        badge="/images/icons/flags/united-states-of-america.svg"
                      />

                      <div class="meta">
                        <span>Tara S.</span>
                        <span>
                          <VIcon
                            icon="lucide:map-pin"
                          />
                          New York, NY
                        </span>
                      </div>
                      <a class="link">
                        <VIcon
                          class="rtl-hidden"
                          icon="lucide:arrow-right"
                        />
                        <VIcon
                          class="ltr-hidden"
                          icon="lucide:arrow-left"
                        />
                      </a>
                    </div>
                  </div>

                  <div v-else-if="activeTab === 'projects'">
                    <!--Project-->
                    <div class="project-card">
                      <div class="project-inner">
                        <img
                          class="project-avatar"
                          src="/images/icons/logos/slicer.svg"
                          alt=""
                          @error.once="onceError($event, 150)"
                        >
                        <div class="meta">
                          <span>The slicer project</span>
                          <span>getslicer.io</span>
                        </div>
                        <a class="link">
                          <VIcon
                            class="rtl-hidden"
                            icon="lucide:arrow-right"
                          />
                          <VIcon
                            class="ltr-hidden"
                            icon="lucide:arrow-left"
                          />
                        </a>
                      </div>
                      <div class="project-foot">
                        <VProgress
                          size="tiny"
                          :value="31"
                        />
                        <div class="foot-stats">
                          <span>5 / 24</span>

                          <div class="avatar-stack">
                            <VAvatar
                              size="small"
                              picture="https://media.cssninja.io/content/avatars/5.jpg"
                            />
                            <VAvatar
                              size="small"
                              picture="https://media.cssninja.io/content/avatars/7.jpg"
                            />
                            <VAvatar
                              size="small"
                              picture="/images/avatars/svg/vuero-1.svg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <!--Project-->
                    <div class="project-card">
                      <div class="project-inner">
                        <img
                          class="project-avatar"
                          src="/images/icons/logos/metamovies.svg"
                          alt=""
                          @error.once="onceError($event, 150)"
                        >
                        <div class="meta">
                          <span>Metamovies reworked</span>
                          <span>metamovies.co</span>
                        </div>
                        <a class="link">
                          <VIcon
                            class="rtl-hidden"
                            icon="lucide:arrow-right"
                          />
                          <VIcon
                            class="ltr-hidden"
                            icon="lucide:arrow-left"
                          />
                        </a>
                      </div>
                      <div class="project-foot">
                        <VProgress
                          size="tiny"
                          :value="84"
                        />
                        <div class="foot-stats">
                          <span>28 / 31</span>

                          <div class="avatar-stack">
                            <VAvatar
                              size="small"
                              picture="https://media.cssninja.io/content/avatars/13.jpg"
                            />
                            <VAvatar
                              size="small"
                              picture="https://media.cssninja.io/content/avatars/18.jpg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <!--Project-->
                    <div class="project-card">
                      <div class="project-inner">
                        <img
                          class="project-avatar"
                          src="/images/icons/logos/fastpizza.svg"
                          alt=""
                          @error.once="onceError($event, 150)"
                        >
                        <div class="meta">
                          <span>Fast Pizza redesign</span>
                          <span>fastpizza.com</span>
                        </div>
                        <a class="link">
                          <VIcon
                            class="rtl-hidden"
                            icon="lucide:arrow-right"
                          />
                          <VIcon
                            class="ltr-hidden"
                            icon="lucide:arrow-left"
                          />
                        </a>
                      </div>
                      <div class="project-foot">
                        <VProgress
                          size="tiny"
                          :value="60"
                        />
                        <div class="foot-stats">
                          <span>25 / 39</span>

                          <div class="avatar-stack">
                            <VAvatar
                              size="small"
                              picture="https://media.cssninja.io/content/avatars/7.jpg"
                            />
                            <VAvatar
                              size="small"
                              picture="https://media.cssninja.io/content/avatars/25.jpg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div v-else-if="activeTab === 'schedule'">
                    <!--Timeline-->
                    <div class="icon-timeline">
                      <!--Timeline item-->
                      <div class="timeline-item">
                        <div class="timeline-icon">
                          <VIcon
                            icon="lucide:phone-call"
                          />
                        </div>
                        <div class="timeline-content">
                          <p>Call Danny at Colby's</p>
                          <span>Today - 11:30am</span>
                        </div>
                      </div>
                      <!--Timeline item-->
                      <div class="timeline-item">
                        <div class="timeline-icon">
                          <img
                            class="avatar"
                            src="https://media.cssninja.io/content/avatars/7.jpg"
                            alt=""
                            @error.once="onceError($event, 150)"
                          >
                        </div>
                        <div class="timeline-content">
                          <p>Meeting with Alice</p>
                          <span>Today - 01:00pm</span>
                        </div>
                      </div>
                      <!--Timeline item-->
                      <div class="timeline-item">
                        <div class="timeline-icon">
                          <VIcon
                            icon="lucide:message-circle"
                          />
                        </div>
                        <div class="timeline-content">
                          <p>Answer Annie's message</p>
                          <span>Today - 01:45pm</span>
                        </div>
                      </div>
                      <!--Timeline item-->
                      <div class="timeline-item">
                        <div class="timeline-icon">
                          <VIcon
                            icon="lucide:mail"
                          />
                        </div>
                        <div class="timeline-content">
                          <p>Send new campaign</p>
                          <span>Today - 02:30pm</span>
                        </div>
                      </div>
                      <!--Timeline item-->
                      <div class="timeline-item">
                        <div class="timeline-icon">
                          <VIcon
                            icon="lucide:smile"
                          />
                        </div>
                        <div class="timeline-content">
                          <p>Project review</p>
                          <span>Today - 03:30pm</span>
                        </div>
                      </div>
                      <!--Timeline item-->
                      <div class="timeline-item">
                        <div class="timeline-icon">
                          <VIcon
                            icon="lucide:phone-call"
                          />
                        </div>
                        <div class="timeline-content">
                          <p>Call Trisha Jackson</p>
                          <span>Today - 05:00pm</span>
                        </div>
                      </div>
                      <!--Timeline item-->
                      <div class="timeline-item">
                        <div class="timeline-icon">
                          <VIcon
                            icon="lucide:feather"
                          />
                        </div>
                        <div class="timeline-content">
                          <p>Write proposal for Don</p>
                          <span>Today - 06:00pm</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Transition>
              </div>
            </template>
          </VTabs>
        </div>
      </div>
    </FocusTrap>
  </Teleport>
</template>

<style lang="scss">
@import '/@src/scss/abstracts/all';

.right-panel-wrapper {
  &.is-activity {
    .right-panel {
      .right-panel-head {
        padding: 0 30px;
      }

      .right-panel-body {
        padding: 0 30px;
        height: calc(100% - 55px);

        .team-card {
          @include vuero-s-card;

          display: flex !important;
          align-items: center;
          padding: 16px !important;
          margin-bottom: 16px;

          .meta {
            margin-inline-start: 12px;

            span {
              display: block;

              &:first-child {
                color: var(--dark-text);
                font-weight: 500;
              }

              &:nth-child(2) {
                color: var(--light-text);
                font-size: 0.9rem;

                .iconify {
                  height: 12px;
                  width: 12px;
                  stroke-width: 1.4px;
                }
              }
            }
          }

          .link {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-inline-start: auto;
            height: 34px;
            width: 34px;
            background: var(--white);
            border: 1px solid color-mix(in oklab, var(--fade-grey), black 3%);
            border-radius: var(--radius-rounded);
            transition: all 0.3s; // transition-all test

            &:hover {
              border-color: var(--primary);
              box-shadow: var(--light-box-shadow);

              .iconify {
                color: var(--primary);
              }
            }

            .iconify {
              height: 16px;
              width: 16px;
              color: var(--light-text);
            }
          }
        }

        .project-card {
          @include vuero-s-card;

          padding: 16px !important;
          margin-bottom: 16px;

          .project-inner {
            display: flex;
            align-items: center;

            .project-avatar {
              display: block;
              height: 38px;
              width: 38px;
              border-radius: 12px;
            }

            .meta {
              margin-inline-start: 12px;

              span {
                display: block;

                &:first-child {
                  color: var(--dark-text);
                  font-family: var(--font-alt);
                  font-size: 0.9rem;
                  font-weight: 600;
                }

                &:nth-child(2) {
                  font-family: var(--font);
                  color: var(--light-text);
                  font-size: 0.9rem;
                }
              }
            }

            .link {
              display: flex;
              justify-content: center;
              align-items: center;
              margin-inline-start: auto;
              height: 34px;
              width: 34px;
              background: var(--white);
              border: 1px solid color-mix(in oklab, var(--fade-grey), black 3%);
              border-radius: var(--radius-rounded);
              transition:
                color 0.3s,
                background-color 0.3s,
                border-color 0.3s,
                height 0.3s,
                width 0.3s;

              &:hover,
              &:focus {
                border-color: var(--primary);
                box-shadow: var(--light-box-shadow);

                .iconify {
                  color: var(--primary);
                }
              }

              .iconify {
                height: 16px;
                width: 16px;
                color: var(--light-text);
              }
            }
          }

          .project-foot {
            margin-top: 12px;

            .progress {
              margin-bottom: 10px;
              margin-top: 18px;
            }

            .foot-stats {
              display: flex;
              align-items: flex-end;
              justify-content: space-between;

              span {
                font-family: var(--font);
                color: var(--light-text);
              }
            }
          }
        }

        .icon-timeline {
          margin-top: 30px;

          .timeline-item {
            position: relative;
            display: flex;
            padding-bottom: 30px;

            &::after {
              content: '';
              position: absolute;
              top: 36px;
              inset-inline-start: 18px;
              width: 1px;
              height: calc(100% - 36px);
              border-inline-start: 1px solid color-mix(in oklab, var(--fade-grey), black 3%);
            }

            .timeline-icon {
              position: relative;
              height: 36px;
              width: 36px;
              display: flex;
              justify-content: center;
              align-items: center;
              background: var(--white);
              border: 1px solid color-mix(in oklab, var(--fade-grey), black 3%);
              border-radius: var(--radius-rounded);
              color: var(--light-text);
              box-shadow: var(--light-box-shadow);

              &::after {
                content: '';
                position: absolute;
                top: 17px;
                inset-inline-start: 40px;
                width: 20px;
                height: 1px;
                border-top: 1px solid color-mix(in oklab, var(--fade-grey), black 3%);
              }

              img {
                display: block;
                height: 28px;
                width: 28px;
                border-radius: var(--radius-rounded);
              }

              .iconify {
                height: 16px;
                width: 16px;
                stroke-width: 1.6px;
              }
            }

            .timeline-content {
              margin-inline-start: 34px;
              line-height: 1.2;

              p {
                font-size: 0.95rem;
                font-family: var(--font-alt);
              }

              span {
                font-size: 0.85rem;
                color: var(--light-text);
              }
            }
          }
        }
      }

      .tabs-wrapper {
        height: calc(100% - 60px);

        .tabs-inner {
          .tabs {
            margin-inline-start: auto;
            margin-inline-end: auto;
          }
        }
      }
    }
  }
}

.is-dark {
  .right-panel-wrapper {
    &.is-activity {
      .right-panel-body {
        .team-card,
        .project-card {
          @include vuero-card--dark;

          background: color-mix(in oklab, var(--dark-sidebar), white 2%) !important;
          border-color: color-mix(in oklab, var(--dark-sidebar), white 8%) !important;
        }

        .team-card,
        .project-card .project-inner {
          .meta {
            span {
              &:first-child {
                color: var(--dark-dark-text);
              }
            }
          }

          .link {
            background: color-mix(in oklab, var(--dark-sidebar), white 6%) !important;
            border-color: color-mix(in oklab, var(--dark-sidebar), white 12%) !important;

            &:hover,
            &:focus {
              border-color: var(--primary) !important;

              .iconify {
                color: var(--primary) !important;
              }
            }
          }
        }

        .icon-timeline {
          .timeline-item {
            &::after {
              border-color: color-mix(in oklab, var(--dark-sidebar), white 12%) !important;
            }

            .timeline-icon {
              background: color-mix(in oklab, var(--dark-sidebar), white 6%) !important;
              border-color: color-mix(in oklab, var(--dark-sidebar), white 12%) !important;

              &::after {
                border-color: color-mix(in oklab, var(--dark-sidebar), white 12%) !important;
              }
            }
          }
        }
      }
    }
  }
}
</style>

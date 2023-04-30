<script lang="ts">
import { defineLoader } from 'vue-router/auto'

/**
 * This is an example of data loader (experimental feature)
 * Name the loader however you want **and export it**
 *
 * Note that it should be defined outside of script setup
 *
 * @see https://github.com/vuejs/rfcs/discussions/460
 * @see https://github.com/posva/unplugin-vue-router/tree/main/src/data-fetching
 */
export const useRoadmapData = defineLoader(async (route) => {
  console.log('useRoadmapData defineLoader', route)

  // this is a fake loader, you may want to load data with fetch
  const [roadmap, releases] = await Promise.all([
    import('/@src/data/apps/roadmap').then((module) => module.roadmap),
    import('/@src/data/apps/changelog').then((module) => module.changelog),
  ])

  // we use the query params to filters the data,
  // they are executed each time router path change
  const releaseWithBugFixes = releases.filter((release) => {
    if (route.query.type) {
      const firstBugFix = release.changelog.find((item) => item.type === route.query.type)
      return firstBugFix !== undefined
    }

    return true
  })

  const releasesByMonth = releaseWithBugFixes.reduce((accumulator, item) => {
    const month = item.date.split(' ')[0]
    accumulator[month] = accumulator[month] ?? { month: `${month} 2022`, releases: [] }
    accumulator[month].releases.push(item)

    return accumulator
  }, {} as Record<string, any>)

  // return anything you want to expose
  return {
    roadmap,
    changelog: releasesByMonth,
  }
})
</script>

<script setup lang="ts">
import { useRouteQuery } from '@vueuse/router'
import { useHead } from '@vueuse/head'
import { useDarkmode } from '/@src/stores/darkmode'

const darkmode = useDarkmode()

const { data, pending } = useRoadmapData()
const years = ['2022', '2021', '2020', '2019']
const changeTypes = ['All', 'Enhancements', 'Features', 'Bug fixes']

const selectedYear = useRouteQuery<string>('year', '2022')
const selectedQuarter = useRouteQuery<string>('quarter', '3')
const activeTab = useRouteQuery<string>('tab', 'roadmap')
const selectedChangeType = useRouteQuery<string>('type', 'All')

const activeYearProgress = computed(
  () => data.value?.roadmap?.find((x) => x.year === selectedYear.value)?.progress
)

useHead({
  title: 'Utility Roadmap - Sidebar - Vuero',
})
</script>

<template>
  <MinimalLayout>
    <!-- Roadmap -->
    <div class="roadmap-wrapper">
      <!--Top header-->
      <div class="roadmap-top">
        <RouterLink to="/" class="logo">
          <AnimatedLogo width="38px" height="38px" />
        </RouterLink>
        <div>
          <RouterLink class="action-link mx-4" to="/sidebar/dashboards">
            Home
          </RouterLink>
          <RouterLink class="action-link mx-4" to="/status"> App Status </RouterLink>
        </div>
      </div>

      <VTabs
        slider
        align="centered"
        :selected="activeTab"
        :tabs="[
          {
            label: 'Roadmap',
            value: 'roadmap',
            to: '/roadmap?tab=roadmap',
          },
          {
            label: 'Changelog',
            value: 'changelog',
            to: '/roadmap?tab=changelog',
          },
        ]"
      >
        <template #tab="{ activeValue }">
          <div v-if="activeValue === 'roadmap'">
            <div id="roadmap" class="roadmap-outer">
              <div class="roadmap-header has-text-centered">
                <h2 class="title is-2 is-bold">Our Roadmap</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Omnis enim est
                  natura diligens sui. Philosophi autem in suis lectulis plerumque
                  moriuntur.
                </p>

                <div class="currently-planned">
                  <div>
                    <span>
                      Q{{ selectedQuarter }} {{ selectedYear }} Planned:
                      <span class="count">22 features</span>
                    </span>
                  </div>
                </div>
              </div>

              <div class="roadmap-inner">
                <div class="roadmap-toolbar is-responsive">
                  <div class="start">
                    <VField v-slot="{ id }" class="is-autocomplete-select">
                      <VLabel>Year</VLabel>
                      <VControl icon="feather:search">
                        <Multiselect
                          v-model="selectedYear"
                          :attrs="{ id }"
                          :options="years"
                          placeholder="Select a Year..."
                          :searchable="true"
                          :loading="pending"
                        />
                      </VControl>
                    </VField>

                    <VField>
                      <VLabel>Quarterly</VLabel>
                      <VField addons>
                        <VControl>
                          <VButton
                            :class="selectedQuarter === '1' && 'is-active'"
                            @click="selectedQuarter = '1'"
                          >
                            Q1
                          </VButton>
                        </VControl>
                        <VControl>
                          <VButton
                            :class="selectedQuarter === '2' && 'is-active'"
                            @click="selectedQuarter = '2'"
                          >
                            Q2
                          </VButton>
                        </VControl>
                        <VControl>
                          <VButton
                            :class="selectedQuarter === '3' && 'is-active'"
                            @click="selectedQuarter = '3'"
                          >
                            Q3
                          </VButton>
                        </VControl>
                        <VControl>
                          <VButton
                            :class="selectedQuarter === '4' && 'is-active'"
                            @click="selectedQuarter = '4'"
                          >
                            Q4
                          </VButton>
                        </VControl>
                      </VField>
                    </VField>
                  </div>
                  <div class="end">
                    <VField>
                      <div class="progress-meta">
                        <VLabel>Year milestone</VLabel>
                        <span class="title is-6 is-bold">
                          {{ activeYearProgress }}%
                        </span>
                      </div>
                      <VProgress size="smaller" :value="activeYearProgress" />
                    </VField>
                  </div>
                </div>

                <div class="roadmap-list">
                  <!--Item-->
                  <template v-for="(year, index) in data.roadmap" :key="index">
                    <template v-for="quarter in year.quarters" :key="quarter.id">
                      <div
                        v-if="
                          selectedYear.includes(quarter.year) &&
                          String(quarter.quarter) === String(selectedQuarter)
                        "
                        class="roadmap-item"
                      >
                        <VCollapse :items="quarter.features" with-chevron>
                          <template #collapse-item-head="item">
                            <div class="head-info">
                              <div class="head-progress">
                                <span class="text">Progress</span>
                                <span class="value">{{ item.item.value }}%</span>
                              </div>
                              <VProgress size="tiny" :value="item.item.value" />
                            </div>
                          </template>
                          <template #collapse-item-content="item">
                            <div class="body-inner-content">
                              <p>{{ item.item.content }}</p>
                              <div v-if="item.item.url !== undefined">
                                <a class="action-link" :href="item.item.url">Read More</a>
                              </div>
                            </div>
                          </template>
                        </VCollapse>
                      </div>
                    </template>
                  </template>
                </div>
              </div>
            </div>
          </div>
          <div v-else-if="activeValue === 'changelog'">
            <div id="changelog" class="roadmap-outer">
              <div class="roadmap-header has-text-centered">
                <h2 class="title is-2 is-bold">Changelog</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Omnis enim est
                  natura diligens sui. Philosophi autem in suis lectulis plerumque
                  moriuntur.
                </p>

                <div class="currently-planned">
                  <div>
                    <span>Last 30 days: <span class="count">22 new</span></span>
                  </div>
                </div>
              </div>

              <div class="roadmap-inner">
                <div class="roadmap-toolbar">
                  <div class="start">
                    <VField v-slot="{ id }" class="is-autocomplete-select">
                      <VLabel>Entry types</VLabel>
                      <VControl icon="feather:search">
                        <Multiselect
                          v-model="selectedChangeType"
                          :attrs="{ id }"
                          :options="changeTypes"
                          placeholder="Select a Type..."
                          :searchable="true"
                        />
                      </VControl>
                    </VField>
                  </div>
                </div>

                <div class="roadmap-list">
                  <div
                    v-for="(block, index) in data.changelog"
                    :key="index"
                    class="changelog-items-outer"
                  >
                    <div class="has-text-centered">
                      <h2 class="title is-4 mb-5">{{ block.month }}</h2>
                    </div>
                    <div class="changelog-items-inner">
                      <!--Item-->
                      <template v-for="(item, r) in block.releases" :key="r">
                        <div class="changelog-item">
                          <VCardAdvanced>
                            <template #header-left>
                              <h3 class="title is-6 py-2">{{ item.date }}</h3>
                            </template>
                            <template #header-right>
                              <VTag :label="item.tag" curved />
                            </template>
                            <template #content>
                              <div
                                v-for="(line, i) in item.changelog"
                                :key="i"
                                class="changelog-line"
                                :style="{
                                  opacity:
                                    selectedChangeType === 'All' ||
                                    selectedChangeType === line.type
                                      ? 1
                                      : 0.3,
                                }"
                              >
                                <VTag
                                  v-if="line.type === 'Enhancements'"
                                  color="primary"
                                  :label="line.type"
                                  curved
                                  outlined
                                />
                                <VTag
                                  v-else-if="line.type === 'Features'"
                                  color="info"
                                  :label="line.type"
                                  curved
                                  outlined
                                />
                                <VTag
                                  v-else
                                  color="danger"
                                  :label="line.type"
                                  curved
                                  outlined
                                />
                                <span>{{ line.title }}</span>
                              </div>
                            </template>
                          </VCardAdvanced>
                        </div>
                      </template>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>
      </VTabs>

      <div class="roadmap-footer">
        <label
          class="dark-mode"
          tabindex="0"
          role="button"
          @keydown.space.prevent="(e) => (e.target as HTMLLabelElement).click()"
        >
          <input
            data-cy="dark-mode-toggle"
            type="checkbox"
            :checked="!darkmode.isDark"
            @change="darkmode.onChange"
          />
          <span></span>
        </label>
        <div>
          <a href="#">Legal</a>
          <a href="#">About</a>
          <a href="#">Jobs</a>
        </div>
        <div class="copyright">
          <span role="img" aria-label="copyright">&copy;</span>
          <span>2020-2023 cssninjaStudio</span>
        </div>
      </div>
    </div>
  </MinimalLayout>
</template>

<style lang="scss" scoped>
.roadmap-wrapper {
  max-width: 940px;
  margin: 0 auto;
  padding: 4rem 1rem;

  .roadmap-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.5rem;

    .logo {
      display: block;
      width: 50px;
      min-width: 50px;
      height: 50px;
    }
  }

  .roadmap-outer {
    padding: 2rem 0;

    .roadmap-header {
      margin-bottom: 3rem;

      p {
        font-size: 1.25rem;
        max-width: 480px;
        margin: 0 auto 2rem;
      }

      .currently-planned {
        font-family: var(--font);
        color: var(--medium-text);

        .count {
          color: var(--primary);
        }
      }
    }

    .roadmap-inner {
      .roadmap-toolbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 1.5rem;

        .start,
        .end {
          display: flex;
          align-items: center;
        }

        .start {
          max-width: 50%;

          :deep(.field) {
            min-width: 200px;
            margin-bottom: 0;

            &:first-child {
              margin-inline-end: 2rem;
            }
          }
        }

        .end {
          justify-content: flex-end;

          :deep(.field) {
            min-width: 220px;
            margin-bottom: 0;

            .progress-meta {
              display: flex;
              align-items: center;
              justify-content: space-between;
              margin-bottom: 0.75rem;

              label {
                font-family: var(--font);
                font-size: 0.9rem;
                color: var(--light-text) !important;
                font-weight: 400;
              }
            }
          }
        }
      }

      .roadmap-list {
        .roadmap-item {
          .head-info {
            .head-progress {
              font-family: var(--font);
              border-inline-end: 1px solid var(--border);
              padding-inline-end: 1rem;
              margin-inline-end: 1rem;

              .text {
                color: var(--light-text);
                margin-inline-end: 0.75rem;
              }

              .value {
                color: var(--primary);
                font-weight: 600;
              }
            }
          }

          .body-inner-content {
            padding-top: 1rem;

            p {
              color: var(--medium-text);
            }
          }

          :deep(.progress) {
            position: absolute !important;
            bottom: 0;
            inset-inline-start: 0;
            width: 100%;
          }
        }

        .changelog-items-outer {
          .changelog-items-inner {
            .changelog-item {
              :deep(.s-card-advanced) {
                .changelog-line {
                  font-family: var(--font);
                  color: var(--medium-text);

                  .tag {
                    border-width: 2px;
                    margin-inline-end: 1rem;
                  }

                  + .changelog-line {
                    margin-top: 1rem;
                  }
                }

                .card-foot {
                  display: none !important;
                }
              }

              + .changelog-item {
                margin-top: 1rem;
              }
            }
          }

          + .changelog-items-outer {
            margin-top: 5rem;
          }
        }
      }
    }
  }

  .roadmap-footer {
    display: flex;
    padding: 20px;
    align-items: center;

    .dark-mode {
      display: inline-block;
      transform: scale(0.5);
    }

    a {
      font-family: var(--font);
      color: var(--light-text-dark-8);
      padding: 0 10px;
      transition: color 0.3s;

      &:hover,
      &:focus {
        font-weight: 500;
        color: var(--primary);
      }
    }

    .copyright {
      margin-inline-start: auto;
      font-family: var(--font);
      color: var(--light-text);
    }
  }
}

@media only screen and (width <= 767px) {
  .roadmap-wrapper {
    .roadmap-outer {
      .roadmap-inner {
        .roadmap-toolbar {
          &.is-responsive {
            flex-direction: column;

            .start,
            .end {
              flex-direction: column;
              width: 100%;
              max-width: 100% !important;
            }

            :deep(.field) {
              max-width: 100%;
              width: 100%;
              margin-inline-start: 0 !important;
              margin-inline-end: 0 !important;
              margin-bottom: 1rem !important;

              .control {
                flex: 1 1 0;

                .v-button {
                  width: 100%;
                }
              }
            }
          }
        }

        .roadmap-list {
          .roadmap-item {
            .head-info {
              .head-progress {
                display: none;
              }
            }
          }

          .changelog-items-outer {
            .changelog-items-inner {
              .changelog-item {
                :deep(.s-card-advanced) {
                  .changelog-line {
                    span {
                      display: block;
                      padding-top: 0.5rem;
                    }

                    + .changelog-line {
                      margin-top: 2rem;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>

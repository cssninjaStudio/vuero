<script setup lang="ts">
const people = [
  {
    name: 'Alice Carasca',
    role: 'Software Engineer',
    avatar: '/demo/avatars/5.jpg',
  },
  {
    name: 'Mary Lebowski',
    role: 'Project Manager',
    avatar: '/demo/avatars/5.jpg',
  },
  {
    name: 'Ryan Brentman',
    role: 'Web Developer',
    avatar: '/demo/avatars/14.jpg',
  },
  {
    name: 'Irina Vierbovsky',
    role: 'Project Manager',
    avatar: '/demo/avatars/23.jpg',
  },
  {
    name: 'Jonathan Krugger',
    role: 'Product Manager',
    avatar: '/demo/avatars/32.jpg',
  },
  {
    name: 'Alejandro Badajoz',
    role: 'Business Analyst',
    avatar: '/demo/avatars/39.jpg',
  },
  {
    name: 'Greta Kroppfer',
    role: 'Sales Manager',
    avatar: '/demo/avatars/19.jpg',
  },
]

const records = [
  {
    name: 'Delivery App Project',
    date: 'August 2020',
    preview: '/demo/photos/apps/1.jpg',
  },
  {
    name: 'Health and Fitness Dashboard',
    date: 'October 2020',
    preview: '/demo/photos/apps/2.png',
  },
  {
    name: 'Tech Summit Expenses',
    date: 'XLS file',
    preview: '/images/icons/files/sheet.svg',
    squared: true,
  },
  {
    name: 'Learning Tracker Dashboard',
    date: 'September 2020',
    preview: '/demo/photos/apps/3.png',
  },
  {
    name: 'Learning Tracker Dashboard',
    date: 'September 2020',
    preview: '/demo/photos/apps/4.png',
  },
  {
    name: 'Project Outline',
    date: 'DOCX file',
    preview: '/images/icons/files/doc-2.svg',
    squared: true,
  },
  {
    name: '2020 Projects Digest',
    date: 'PDF file',
    preview: '/images/icons/files/pdf.svg',
    squared: true,
  },
  {
    name: 'Resume Management Mobile App',
    date: 'October 2020',
    preview: '/demo/photos/apps/5.png',
  },
  {
    name: 'Website Homepage Redesign',
    date: 'AI file',
    preview: '/images/icons/files/ai.svg',
    squared: true,
  },
]

type TabId = 'all' | 'people' | 'records'
const activeTab = ref<TabId>('all')
const options = ref(['Newest'])
</script>

<template>
  <div class="search-results-wrapper">
    <div class="search-results-header">
      <VField raw>
        <VControl icon="feather:search">
          <VInput placeholder="Search again..." />
        </VControl>
      </VField>

      <div class="search-info">
        <span>54 results found</span>
      </div>

      <div class="tabs-inner">
        <div class="tabs">
          <ul>
            <li :class="[activeTab === 'all' && 'is-active']">
              <a
                tabindex="0"
                role="button"
                @keydown.space.prevent="activeTab = 'all'"
                @click="activeTab = 'all'"
                ><span>All</span></a
              >
            </li>
            <li :class="[activeTab === 'people' && 'is-active']">
              <a
                tabindex="0"
                role="button"
                @keydown.space.prevent="activeTab = 'people'"
                @click="activeTab = 'people'"
                ><span>People</span></a
              >
            </li>
            <li :class="[activeTab === 'records' && 'is-active']">
              <a
                tabindex="0"
                role="button"
                @keydown.space.prevent="activeTab = 'records'"
                @click="activeTab = 'records'"
                ><span>Records</span></a
              >
            </li>
            <li class="tab-naver"></li>
          </ul>
        </div>
      </div>
    </div>

    <div class="search-results-body">
      <div class="columns">
        <!--Filters-->
        <div class="column is-4">
          <div class="filter-box">
            <h4 class="dark-inverted">Publication</h4>

            <VField>
              <VControl>
                <VCheckbox
                  v-model="options"
                  value-true="Newest"
                  label="Newest"
                  color="primary"
                  circle
                />

                <div class="control-end">
                  <VTag label="23" rounded />
                </div>
              </VControl>
            </VField>
            <VField>
              <VControl>
                <VCheckbox
                  v-model="options"
                  value-true="Recently updated"
                  label="Recently updated"
                  color="primary"
                  circle
                />

                <div class="control-end">
                  <VTag label="31" rounded />
                </div>
              </VControl>
            </VField>
            <VField>
              <VControl>
                <VCheckbox
                  v-model="options"
                  value-true="Upvoted"
                  label="Upvoted"
                  color="primary"
                  circle
                />

                <div class="control-end">
                  <VTag label="12" rounded />
                </div>
              </VControl>
            </VField>
          </div>

          <div class="filter-box">
            <h4 class="dark-inverted">Type</h4>

            <VField>
              <VControl>
                <VCheckbox
                  v-model="options"
                  value-true="User profile"
                  label="User profile"
                  color="primary"
                  circle
                />

                <div class="control-end">
                  <VTag label="19" rounded />
                </div>
              </VControl>
            </VField>
            <VField>
              <VControl>
                <VCheckbox
                  v-model="options"
                  value-true="Project"
                  label="Project"
                  color="primary"
                  circle
                />

                <div class="control-end">
                  <VTag label="174" rounded />
                </div>
              </VControl>
            </VField>
            <VField>
              <VControl>
                <VCheckbox
                  v-model="options"
                  value-true="Blog Post"
                  label="Blog Post"
                  color="primary"
                  circle
                />

                <div class="control-end">
                  <VTag label="71" rounded />
                </div>
              </VControl>
            </VField>
            <VField>
              <VControl>
                <VCheckbox
                  v-model="options"
                  value-true="Wireframes"
                  label="Wireframes"
                  color="primary"
                  circle
                />

                <div class="control-end">
                  <VTag label="54" rounded />
                </div>
              </VControl>
            </VField>
            <VField>
              <VControl>
                <VCheckbox
                  v-model="options"
                  value-true="Files"
                  label="Files"
                  color="primary"
                  circle
                />

                <div class="control-end">
                  <VTag label="8" rounded />
                </div>
              </VControl>
            </VField>
          </div>

          <div class="filter-box">
            <h4 class="dark-inverted">Topics</h4>

            <VField>
              <VControl>
                <VCheckbox
                  v-model="options"
                  value-true="Engineering"
                  label="Engineering"
                  color="primary"
                  circle
                />

                <div class="control-end">
                  <VTag label="45" rounded />
                </div>
              </VControl>
            </VField>
            <VField>
              <VControl>
                <VCheckbox
                  v-model="options"
                  value-true="Management"
                  label="Management"
                  color="primary"
                  circle
                />

                <div class="control-end">
                  <VTag label="12" rounded />
                </div>
              </VControl>
            </VField>
            <VField>
              <VControl>
                <VCheckbox
                  v-model="options"
                  value="Software"
                  label="Software"
                  color="primary"
                  circle
                />

                <div class="control-end">
                  <VTag label="36" rounded />
                </div>
              </VControl>
            </VField>
            <VField>
              <VControl>
                <VCheckbox
                  v-model="options"
                  value-true="Human Resources"
                  label="Human Resources"
                  color="primary"
                  circle
                />

                <div class="control-end">
                  <VTag label="3" rounded />
                </div>
              </VControl>
            </VField>
            <VField>
              <VControl>
                <VCheckbox
                  v-model="options"
                  value-true="Finance"
                  label="Finance"
                  color="primary"
                  circle
                />

                <div class="control-end">
                  <VTag label="7" rounded />
                </div>
              </VControl>
            </VField>
          </div>
        </div>

        <!--Results-->
        <div class="column is-8">
          <div class="tab-content" :class="[activeTab === 'all' && 'is-active']">
            <!--Search Results Group-->
            <div class="search-results-group">
              <div class="group-header">
                <VIconWrap icon="feather:user" />
                <h4>People</h4>
              </div>

              <div class="search-results-list">
                <!--Item-->
                <div
                  v-for="(person, index) in people"
                  :key="index"
                  class="search-results-item"
                >
                  <VBlock :title="person.name" :subtitle="person.role" center>
                    <template #icon>
                      <VAvatar size="medium" :picture="person.avatar" />
                    </template>
                    <template #action>
                      <VButton dark-outlined> Profile </VButton>
                    </template>
                  </VBlock>
                </div>
              </div>
            </div>

            <!--Search Results Group-->
            <div class="search-results-group">
              <div class="group-header">
                <VIconWrap icon="feather:file-text" />

                <h4>Records</h4>
              </div>

              <div class="search-results-list">
                <!--Item-->
                <div
                  v-for="(record, index) in records"
                  :key="index"
                  class="search-results-item"
                >
                  <VBlock :title="record.name" :subtitle="record.date" center>
                    <template #icon>
                      <VAvatar
                        size="medium"
                        :picture="record.preview"
                        :squared="record.squared"
                      />
                    </template>
                    <template #action>
                      <VButton dark-outlined> Details </VButton>
                    </template>
                  </VBlock>
                </div>
              </div>
            </div>
          </div>

          <div class="tab-content" :class="[activeTab === 'people' && 'is-active']">
            <!--Search Results Group-->
            <div class="search-results-group">
              <div class="search-results-list">
                <div
                  v-for="(person, index) in people"
                  :key="index"
                  class="search-results-item"
                >
                  <VBlock :title="person.name" :subtitle="person.role" center>
                    <template #icon>
                      <VAvatar size="medium" :picture="person.avatar" />
                    </template>
                    <template #action>
                      <VButton dark-outlined> Profile </VButton>
                    </template>
                  </VBlock>
                </div>
              </div>
            </div>
          </div>

          <div class="tab-content" :class="[activeTab === 'records' && 'is-active']">
            <!--Search Results Group-->
            <div class="search-results-group">
              <div class="search-results-list">
                <!--Item-->
                <div
                  v-for="(record, index) in records"
                  :key="index"
                  class="search-results-item"
                >
                  <VBlock :title="record.name" :subtitle="record.date" center>
                    <template #icon>
                      <VAvatar
                        size="medium"
                        :picture="record.preview"
                        :squared="record.squared"
                      />
                    </template>
                    <template #action>
                      <VButton dark-outlined> Details </VButton>
                    </template>
                  </VBlock>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '/@src/scss/abstracts/all';

.is-navbar {
  .search-results-wrapper {
    padding-top: 30px;
  }
}

.search-results-wrapper {
  .search-results-header {
    display: flex;
    align-items: center;
    margin-bottom: 20px;

    .control {
      margin-inline-end: 10px;
    }

    .search-info {
      span {
        font-family: var(--font);
        color: var(--light-text);
      }
    }

    .tabs-inner {
      margin-inline-start: auto;

      .tabs {
        margin-bottom: 0;
        min-width: 280px;
      }
    }
  }

  .search-results-body {
    .filter-box {
      @include vuero-s-card;

      margin-bottom: 16px;

      h4 {
        font-family: var(--font-alt);
        font-weight: 600;
        color: var(--dark-text);
        margin-bottom: 10px;
      }

      .field {
        margin-bottom: 0;

        .control {
          display: flex;
          align-items: center;

          .checkbox {
            padding: 0.75em 0;
          }

          .control-end {
            margin-inline-start: auto;
          }
        }
      }
    }

    .search-results-group {
      padding-inline-start: 30px;
      margin-bottom: 20px;

      .group-header {
        display: flex;
        align-items: center;
        border-bottom: 1px solid var(--fade-grey-dark-6);
        padding: 0 0 12px;
        margin-bottom: 12px;

        .icon-wrap {
          height: 32px;
          width: 32px;
          min-width: 32px;
          border-radius: var(--radius-rounded);
          display: flex;
          justify-content: center;
          align-items: center;
          margin-inline-end: 6px;
          background: var(--white);
          border: 1px solid var(--primary);
          color: var(--primary);

          svg {
            height: 14px;
            width: 14px;
          }
        }

        h4 {
          font-family: var(--font-alt);
          font-size: 0.8rem;
          font-weight: 500;
          text-transform: uppercase;
          color: var(--light-text);
        }
      }

      .search-results-list {
        padding: 10px 0;

        .search-results-item {
          @include vuero-s-card;

          margin-bottom: 16px;

          > img {
            display: block;
            height: 50px;
            width: 50px;
            min-width: 50px;
          }
        }
      }
    }
  }
}

/* ==========================================================================
2. Search Results Page Dark mode
========================================================================== */

.is-dark {
  .search-results-wrapper {
    .search-results-body {
      .filter-box {
        @include vuero-card--dark;
      }

      .search-results-group {
        .search-results-list {
          .search-results-item {
            @include vuero-card--dark;
          }
        }

        .group-header {
          border-color: var(--dark-sidebar-light-20);

          .icon-wrap {
            background: var(--dark-sidebar-light-2);
            border-color: var(--primary);
            color: var(--primary);
          }
        }
      }
    }
  }
}

/* ==========================================================================
3. Media Queries
========================================================================== */

@media only screen and (width <= 767px) {
  .search-results-wrapper {
    .search-results-header {
      flex-direction: column;

      .control,
      .tabs-inner {
        margin: 0;
      }

      .control {
        width: 100%;
        max-width: 280px;
        margin: 0 auto;
      }

      .search-info {
        padding: 10px 0;
      }
    }

    .search-results-body {
      .search-results-group {
        padding-inline-start: 0;
      }
    }
  }
}

@media only screen and (width >= 768px) and (width <= 1024px) and (orientation: portrait) {
  .search-results-wrapper {
    .search-results-body {
      .search-results-group {
        padding-inline-start: 0;
      }
    }
  }
}

@media only screen and (width >= 768px) and (width <= 1024px) and (orientation: landscape) {
  .search-results-wrapper {
    .search-results-body {
      .search-results-group {
        padding-inline-start: 10px;
      }
    }
  }
}
</style>

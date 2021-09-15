<script setup lang="ts">
import { ref } from 'vue'

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
</script>

<template>
  <div class="search-results-wrapper">
    <div class="search-results-header">
      <VControl icon="feather:search">
        <input class="input" placeholder="Search again..." />
      </VControl>

      <div class="search-info">
        <span>54 results found</span>
      </div>

      <div class="tabs-inner">
        <div class="tabs">
          <ul>
            <li :class="[activeTab === 'all' && 'is-active']">
              <a @click="activeTab = 'all'"><span>All</span></a>
            </li>
            <li :class="[activeTab === 'people' && 'is-active']">
              <a @click="activeTab = 'people'"><span>People</span></a>
            </li>
            <li :class="[activeTab === 'records' && 'is-active']">
              <a @click="activeTab = 'records'"><span>Records</span></a>
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
                <label class="checkbox is-circle">
                  <input type="checkbox" />
                  <span></span>
                  Newest
                </label>

                <div class="control-end">
                  <VTag label="23" rounded />
                </div>
              </VControl>
            </VField>
            <VField>
              <VControl>
                <label class="checkbox is-circle">
                  <input type="checkbox" />
                  <span></span>
                  Recently updated
                </label>

                <div class="control-end">
                  <VTag label="31" rounded />
                </div>
              </VControl>
            </VField>
            <VField>
              <VControl>
                <label class="checkbox is-circle">
                  <input type="checkbox" />
                  <span></span>
                  Upvoted
                </label>

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
                <label class="checkbox is-circle">
                  <input type="checkbox" />
                  <span></span>
                  User Profile
                </label>

                <div class="control-end">
                  <VTag label="19" rounded />
                </div>
              </VControl>
            </VField>
            <VField>
              <VControl>
                <label class="checkbox is-circle">
                  <input type="checkbox" />
                  <span></span>
                  Project
                </label>

                <div class="control-end">
                  <VTag label="174" rounded />
                </div>
              </VControl>
            </VField>
            <VField>
              <VControl>
                <label class="checkbox is-circle">
                  <input type="checkbox" />
                  <span></span>
                  Blog Post
                </label>

                <div class="control-end">
                  <VTag label="71" rounded />
                </div>
              </VControl>
            </VField>
            <VField>
              <VControl>
                <label class="checkbox is-circle">
                  <input type="checkbox" />
                  <span></span>
                  Wireframes
                </label>

                <div class="control-end">
                  <VTag label="54" rounded />
                </div>
              </VControl>
            </VField>
            <VField>
              <VControl>
                <label class="checkbox is-circle">
                  <input type="checkbox" />
                  <span></span>
                  Files
                </label>

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
                <label class="checkbox is-circle">
                  <input type="checkbox" />
                  <span></span>
                  Engineering
                </label>

                <div class="control-end">
                  <VTag label="45" rounded />
                </div>
              </VControl>
            </VField>
            <VField>
              <VControl>
                <label class="checkbox is-circle">
                  <input type="checkbox" />
                  <span></span>
                  Management
                </label>

                <div class="control-end">
                  <VTag label="12" rounded />
                </div>
              </VControl>
            </VField>
            <VField>
              <VControl>
                <label class="checkbox is-circle">
                  <input type="checkbox" />
                  <span></span>
                  Software
                </label>

                <div class="control-end">
                  <VTag label="36" rounded />
                </div>
              </VControl>
            </VField>
            <VField>
              <VControl>
                <label class="checkbox is-circle">
                  <input type="checkbox" />
                  <span></span>
                  Human Ressources
                </label>

                <div class="control-end">
                  <VTag label="3" rounded />
                </div>
              </VControl>
            </VField>
            <VField>
              <VControl>
                <label class="checkbox is-circle">
                  <input type="checkbox" />
                  <span></span>
                  Finance
                </label>

                <div class="control-end">
                  <VTag label="7" rounded />
                </div>
              </VControl>
            </VField>
          </div>
        </div>

        <!--Results-->
        <div class="column is-8">
          <div
            class="tab-content"
            :class="[activeTab === 'all' && 'is-active']"
          >
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

          <div
            class="tab-content"
            :class="[activeTab === 'people' && 'is-active']"
          >
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

          <div
            class="tab-content"
            :class="[activeTab === 'records' && 'is-active']"
          >
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
@import '../../../../scss/abstracts/_mixins.scss';
@import '../../../../scss/pages/generic/_search.scss';
</style>

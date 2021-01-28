<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { ref, onMounted } from 'vue'

import useMakrdownToc from '/@src/composition/use/useMarkdownToc'

import {
  activeSidebar,
  toggleSidebar,
} from '/@src/composition/state/ui/activeSidebarState'

const { markdownContainer, toc } = useMakrdownToc()

import Multiselect from '@vueform/multiselect'
const valueSingle = ref(0)
const optionsSingle = ref(['Batman', 'Robin', 'Joker'])

const valueMultipleObject = ref(['robin'])
const optionMultipleObject = ref({
  batman: 'Batman',
  robin: 'Robin',
  joker: 'Joker',
})

const disabledValue = ref(['batman'])
const disabledOptions = ref([
  { value: 'batman', label: 'Batman' },
  { value: 'robin', label: 'Robin', disabled: true },
  { value: 'joker', label: 'Joker' },
])

const tagsValue = ref([])
const tagsOptions = ref([
  { value: 'batman', label: 'Batman' },
  { value: 'robin', label: 'Robin' },
  { value: 'joker', label: 'Joker' },
])

const fetchLanguages = async (query: String) => {
  // From: https://www.back4app.com/database/paul-datasets/list-of-all-programming-languages/get-started/javascript/rest-api/fetch?objectClassSlug=dataset

  let where = ''

  if (query) {
    where =
      '&where=' +
      encodeURIComponent(
        JSON.stringify({
          ProgrammingLanguage: {
            $regex: `${query}|${query.toUpperCase()}|${
              query[0].toUpperCase() + query.slice(1)
            }`,
          },
        })
      )
  }

  const response = await fetch(
    'https://parseapi.back4app.com/classes/All_Programming_Languages?order=ProgrammingLanguage&keys=ProgrammingLanguage' +
      where,
    {
      headers: {
        'X-Parse-Application-Id': 'XpRShKqJcxlqE5EQKs4bmSkozac44osKifZvLXCL', // This is the fake app's application id
        'X-Parse-Master-Key': 'Mr2UIBiCImScFbbCLndBv8qPRUKwBAq27plwXVuv', // This is the fake app's readonly master key
      },
    }
  )

  const data = await response.json() // Here you have the data that you need

  return data.results.map((item) => {
    return { value: item.ProgrammingLanguage, label: item.ProgrammingLanguage }
  })
}
const autocompleteValue = ref()

const selectSlotValue = ref()
const selectSlotOptions = ref([
  {
    value: 'captainamerica',
    name: 'Captain America',
    icon:
      'https://cdn2.iconfinder.com/data/icons/avengers-filled/48/03_-_Captain_America_-_infinity_war_-_end_game_-_marvel_-_avengers_-_super_hero-512.png',
  },
  {
    value: 'spiderman',
    name: 'Spiderman',
    icon:
      'https://cdn2.iconfinder.com/data/icons/avengers-filled/48/12_-_Spiderman_-_infinity_war_-_end_game_-_marvel_-_avengers_-_super_hero-512.png',
  },
  {
    value: 'ironman',
    name: 'Iron Man',
    icon:
      'https://cdn2.iconfinder.com/data/icons/avengers-filled/48/02_-_IRONMAN_-_infinity_war_-_end_game_-_marvel_-_avengers_-_super_hero-512.png',
  },
])

const tagsCustomSlotValue = ref(['jane'])
const tagsCustomSlotOptions = ref([
  {
    value: 'judy',
    name: 'Judy',
    image: 'https://randomuser.me/api/portraits/med/women/1.jpg',
  },
  {
    value: 'jane',
    name: 'Jane',
    image: 'https://randomuser.me/api/portraits/med/women/2.jpg',
  },
  {
    value: 'john',
    name: 'John',
    image: 'https://randomuser.me/api/portraits/med/men/1.jpg',
  },
  {
    value: 'joe',
    name: 'Joe',
    image: 'https://randomuser.me/api/portraits/med/men/2.jpg',
  },
])

onMounted(() => {
  activeSidebar.value = 'components'
})

useHead({
  title: 'Components - Plugins Multiselect - Vuero',
})
</script>

<template>
  <div>
    <div class="page-title has-text-centered">
      <!-- Sidebar Trigger -->
      <div
        class="huro-hamburger nav-trigger push-resize"
        @click="toggleSidebar('components')"
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
        <h1 class="title is-4">Multiselect</h1>
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
            <RouterLink :to="{ name: 'components' }">
              <span>Components</span>
            </RouterLink>
          </li>
          <li>
            <a>
              <span>Plugins</span>
            </a>
          </li>
          <li>
            <a>
              <span>Multiselect</span>
            </a>
          </li>
        </ul>
      </nav>

      <div class="columns is-multiline">
        <div
          ref="markdownContainer"
          :class="[toc.length > 0 ? 'is-9' : 'is-12']"
          class="column"
        >
          <!--Simple select-->
          <MultiselectBaseDocumentation />

          <V-Field class="demo-field mb-6">
            <V-Control>
              <Multiselect
                v-model="valueSingle"
                :options="optionsSingle"
                placeholder="Select an option"
              />
            </V-Control>
          </V-Field>

          <!--Multiselect-->
          <MultiselectMultipleObjectDocumentation />

          <V-Field class="demo-field mb-6">
            <V-Control>
              <Multiselect
                v-model="valueMultipleObject"
                mode="multiple"
                :options="optionMultipleObject"
                placeholder="Select options"
              />
            </V-Control>
          </V-Field>

          <!--Multiselect custom label-->
          <MultiselectMultipleCustomLabelDocumentation />

          <V-Field class="demo-field mb-6">
            <V-Control>
              <Multiselect
                v-model="valueMultipleObject"
                mode="multiple"
                placeholder="Select your characters"
                :options="optionMultipleObject"
              >
                <template #multiplelabel="{ values }">
                  <div class="multiselect-multiple-label">
                    {{ values.length }} characters selected
                  </div>
                </template>
              </Multiselect>
            </V-Control>
          </V-Field>

          <!--Disabled option-->
          <MultiselectDisabledOptionDocumentation />

          <V-Field class="demo-field mb-6">
            <V-Control>
              <Multiselect
                v-model="disabledValue"
                mode="multiple"
                :options="disabledOptions"
                placeholder="Select options"
              />
            </V-Control>
          </V-Field>

          <!--Tags-->
          <MultiselectTagsBaseDocumentation />

          <V-Field class="demo-field mb-6">
            <V-Control>
              <Multiselect
                v-model="tagsValue"
                mode="tags"
                :searchable="true"
                :create-tag="true"
                :options="tagsOptions"
                placeholder="Add tags"
              />
            </V-Control>
          </V-Field>

          <!--Autocomplete Async-->
          <MultiselectAutocompleteAsyncDocumentation />

          <V-Field class="demo-field mb-6">
            <V-Control>
              <Multiselect
                v-model="autocompleteValue"
                placeholder="Choose a language"
                :filter-results="false"
                :min-chars="1"
                :resolve-on-load="false"
                :delay="0"
                :searchable="true"
                :options="
                  async function (query) {
                    return await fetchLanguages(query) // check JS block for implementation
                  }
                "
              />
            </V-Control>
          </V-Field>

          <!--Select slot-->
          <MultiselectSelectSlotDocumentation />

          <V-Field class="demo-field mb-6">
            <V-Control>
              <Multiselect
                v-model="selectSlotValue"
                placeholder="Select your character"
                label="name"
                :options="selectSlotOptions"
              >
                <template #singlelabel="{ value }">
                  <div class="multiselect-single-label">
                    <img class="character-label-icon" :src="value.icon" />
                    {{ value.name }}
                  </div>
                </template>

                <template #option="{ option }">
                  <img class="character-option-icon" :src="option.icon" />
                  {{ option.name }}
                </template>
              </Multiselect>
            </V-Control>
          </V-Field>

          <!--Tags slot-->
          <MultiselectTagsCustomSlotDocumentation />

          <V-Field class="demo-field mb-6">
            <V-Control>
              <Multiselect
                v-model="tagsCustomSlotValue"
                mode="tags"
                placeholder="Select employees"
                track-by="name"
                label="name"
                :search="true"
                :options="tagsCustomSlotOptions"
              >
                <template #tag="{ option, remove, disabled }">
                  <div class="multiselect-tag is-user">
                    <img :src="option.image" />
                    {{ option.name }}
                    <i
                      v-if="!disabled"
                      @click.prevent
                      @mousedown.prevent.stop="remove(option)"
                    />
                  </div>
                </template>
              </Multiselect>
            </V-Control>
          </V-Field>

          <div class="pb-6 mb-6"></div>
        </div>
        <div v-if="toc.length" class="column is-3">
          <DocumentationToc :toc="toc" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.multiselect-tag.is-user {
  padding: 5px 8px;
  border-radius: 22px;
  background: #35495e;
  margin: 3px 3px 8px;
}

.multiselect-tag.is-user img {
  width: 18px;
  border-radius: 50%;
  height: 18px;
  margin-right: 8px;
  border: 2px solid #ffffffbf;
}

.multiselect-tag.is-user i::before {
  color: #fff;
  border-radius: 50%;
}

.user-image {
  margin: 0 6px 0 0;
  border-radius: 50%;
  height: 22px;
}

.character-option-icon {
  margin: 0 6px 0 0;
  height: 22px;
}

.character-label-icon {
  margin: 0 6px 0 0;
  height: 26px;
}
.multiselect-tag.is-user {
  padding: 5px 8px;
  border-radius: 22px;
  background: #35495e;
  margin: 3px 3px 8px;
}

.multiselect-tag.is-user img {
  width: 18px;
  border-radius: 50%;
  height: 18px;
  margin-right: 8px;
  border: 2px solid #ffffffbf;
}

.multiselect-tag.is-user i::before {
  color: #fff;
  border-radius: 50%;
}

.user-image {
  margin: 0 6px 0 0;
  border-radius: 50%;
  height: 22px;
}
</style>

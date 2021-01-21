<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { onMounted, ref } from 'vue'

import {
  activeSidebar,
  toggleSidebar,
} from '/@src/composition/state/ui/activeSidebarState'

import * as examples from './content.examples'

const examplesIds = Object.keys(examples)
const display = ref<any>({})
for (const id of examplesIds) {
  display[id] = false
}

onMounted(() => {
  activeSidebar.value = 'elements'
})

useHead({
  title: 'Elements - Content - Vuero',
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
              <h1 class="title is-4">Content</h1>
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
                    <span>Content</span>
                  </a>
                </li>
              </ul>
            </nav>

            <div class="columns">
              <div class="column is-12">
                <!--Typography-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Unordered Lists</h3>
                    <p>
                      By default, using an unordered <code>ul</code> list won't
                      generate an html list. This is part of the Bulma
                      specification. To generate you unordered list, wrap it
                      inside a <code>div</code> with the
                      <code>content</code> class. Lists can also have the
                      <code>is-light</code> modifier to change the text color.
                    </p>
                    <a
                      class="code-trigger"
                      :class="[display.unorderedLists && 'is-active']"
                      @click="display.unorderedLists = !display.unorderedLists"
                    >
                      <span
                        v-show="display.unorderedLists"
                        class="iconify open"
                        data-icon="feather:code"
                      />
                      <span
                        v-show="!display.unorderedLists"
                        class="iconify close"
                        data-icon="feather:x"
                      />
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="columns">
                      <div class="column is-one-fifth">
                        <div class="content">
                          <ul>
                            <li>Coffee</li>
                            <li>Tea</li>
                            <li>Milk</li>
                          </ul>
                        </div>
                      </div>
                      <div class="column is-one-fifth">
                        <div class="content">
                          <ul class="is-light">
                            <li>Coffee</li>
                            <li>Tea</li>
                            <li>Milk</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <HighlightJS
                      v-if="display.unorderedLists"
                      language="vue"
                      :code="examples.unorderedLists"
                    />
                  </div>
                </div>

                <!--Typography-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Ordered Lists</h3>
                    <p>
                      Ordered lists <code>ol</code> are also genrated using a
                      <code>div</code> with the <code>content</code> class.
                      Ordered list bullets can be controlled with the
                      <code>type</code> attribute. Available types are
                      <code>type="1"</code>, <code>type="A"</code>,
                      <code>type="a"</code>, <code>type="I"</code>,
                      <code>type="i"</code>.
                    </p>
                    <a
                      class="code-trigger"
                      :class="[display.orderedLists && 'is-active']"
                      @click="display.orderedLists = !display.orderedLists"
                    >
                      <span
                        v-show="display.orderedLists"
                        class="iconify open"
                        data-icon="feather:code"
                      />
                      <span
                        v-show="!display.orderedLists"
                        class="iconify close"
                        data-icon="feather:x"
                      />
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="columns">
                      <div class="column is-one-fifth">
                        <div class="content">
                          <ol type="1">
                            <li>Coffee</li>
                            <li>Tea</li>
                            <li>Milk</li>
                          </ol>
                        </div>
                      </div>
                      <div class="column is-one-fifth">
                        <div class="content">
                          <ol type="A">
                            <li>Coffee</li>
                            <li>Tea</li>
                            <li>Milk</li>
                          </ol>
                        </div>
                      </div>
                      <div class="column is-one-fifth">
                        <div class="content">
                          <ol class="is-light" type="a">
                            <li>Coffee</li>
                            <li>Tea</li>
                            <li>Milk</li>
                          </ol>
                        </div>
                      </div>
                      <div class="column is-one-fifth">
                        <div class="content">
                          <ol class="is-light" type="I">
                            <li>Coffee</li>
                            <li>Tea</li>
                            <li>Milk</li>
                          </ol>
                        </div>
                      </div>
                      <div class="column is-one-fifth">
                        <div class="content">
                          <ol class="is-light" type="i">
                            <li>Coffee</li>
                            <li>Tea</li>
                            <li>Milk</li>
                          </ol>
                        </div>
                      </div>
                    </div>

                    <HighlightJS
                      v-if="display.orderedLists"
                      language="vue"
                      :code="examples.orderedLists"
                    />
                  </div>
                </div>

                <!--Typography-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Title</h3>
                    <p>
                      To create a title, you can add the
                      <code>title</code> class to any html element. Title sizes
                      can be controlled with numbered modifiers using the patter
                      <code>is-*</code> where <code>*</code> represents a number
                      between 3 and 6. Titles can also be thinner using the
                      <code>is-thin</code>, bold using the
                      <code>is-bold</code> or bolder using the
                      <code>is-bolder</code> modifier classes.
                    </p>
                    <a
                      class="code-trigger"
                      :class="[display.title && 'is-active']"
                      @click="display.title = !display.title"
                    >
                      <span
                        v-show="display.title"
                        class="iconify open"
                        data-icon="feather:code"
                      />
                      <span
                        v-show="!display.title"
                        class="iconify close"
                        data-icon="feather:x"
                      />
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="columns is-multiline">
                      <div class="column is-3">
                        <h1 class="title is-3 is-narrow">This is a title</h1>
                        <p>This is a huge title</p>
                      </div>
                      <div class="column is-3">
                        <h2 class="title is-4 is-narrow">This is a title</h2>
                        <p>This is a big title</p>
                      </div>
                      <div class="column is-3">
                        <h2 class="title is-5 is-narrow">This is a title</h2>
                        <p>This is a medium title</p>
                      </div>
                      <div class="column is-3">
                        <h2 class="title is-6 is-narrow">This is a title</h2>
                        <p>This is a smaller title</p>
                      </div>
                      <div class="column is-3">
                        <h1 class="title is-3 is-narrow is-bold">
                          This is a title
                        </h1>
                        <p>This is a huge bold title</p>
                      </div>
                      <div class="column is-3">
                        <h2 class="title is-4 is-narrow is-bold">
                          This is a title
                        </h2>
                        <p>This is a big bold title</p>
                      </div>
                      <div class="column is-3">
                        <h2 class="title is-5 is-narrow is-bold">
                          This is a title
                        </h2>
                        <p>This is a medium bold title</p>
                      </div>
                      <div class="column is-3">
                        <h2 class="title is-6 is-narrow is-bold">
                          This is a title
                        </h2>
                        <p>This is a smaller bold title</p>
                      </div>
                      <div class="column is-3">
                        <h1 class="title is-3 is-narrow is-bolder">
                          This is a title
                        </h1>
                        <p>This is a huge bolder title</p>
                      </div>
                      <div class="column is-3">
                        <h2 class="title is-4 is-narrow is-bolder">
                          This is a title
                        </h2>
                        <p>This is a big bolder title</p>
                      </div>
                      <div class="column is-3">
                        <h2 class="title is-5 is-narrow is-bolder">
                          This is a title
                        </h2>
                        <p>This is a medium bolder title</p>
                      </div>
                      <div class="column is-3">
                        <h2 class="title is-6 is-narrow is-bolder">
                          This is a title
                        </h2>
                        <p>This is a smaller bolder title</p>
                      </div>
                      <div class="column is-3">
                        <h1 class="title is-3 is-narrow is-thin">
                          This is a title
                        </h1>
                        <p>This is a huge thin title</p>
                      </div>
                      <div class="column is-3">
                        <h2 class="title is-4 is-narrow is-thin">
                          This is a title
                        </h2>
                        <p>This is a big thin title</p>
                      </div>
                      <div class="column is-3">
                        <h2 class="title is-5 is-narrow is-thin">
                          This is a title
                        </h2>
                        <p>This is a medium thin title</p>
                      </div>
                      <div class="column is-3">
                        <h2 class="title is-6 is-narrow is-thin">
                          This is a title
                        </h2>
                        <p>This is a smaller thin title</p>
                      </div>
                    </div>

                    <HighlightJS
                      v-if="display.title"
                      language="vue"
                      :code="examples.title"
                    />
                  </div>
                </div>

                <!--Typography-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Subtitle</h3>
                    <p>
                      To create a subtitle, you can add the
                      <code>subtitle</code> class to any html element. Subtitle
                      sizes can be controlled with numbered modifiers using the
                      patter <code>is-*</code> where <code>*</code> represents a
                      number between 4 and 6.
                    </p>
                    <a
                      class="code-trigger"
                      :class="[display.subtitle && 'is-active']"
                      @click="display.subtitle = !display.subtitle"
                    >
                      <span
                        v-show="display.subtitle"
                        class="iconify open"
                        data-icon="feather:code"
                      />
                      <span
                        v-show="!display.subtitle"
                        class="iconify close"
                        data-icon="feather:x"
                      />
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="columns">
                      <div class="column is-3">
                        <h1 class="title is-3">This is a title</h1>
                        <p class="subtitle is-4">This is a huge subtitle</p>
                      </div>
                      <div class="column is-3">
                        <h2 class="title is-4">This is a title</h2>
                        <p class="subtitle is-4">This is a big subtitle</p>
                      </div>
                      <div class="column is-3">
                        <h2 class="title is-5">This is a title</h2>
                        <p class="subtitle is-5">This is a medium subtitle</p>
                      </div>
                      <div class="column is-3">
                        <h2 class="title is-6">This is a title</h2>
                        <p class="subtitle is-6">This is a smaller subtitle</p>
                      </div>
                    </div>

                    <HighlightJS
                      v-if="display.subtitle"
                      language="vue"
                      :code="examples.subtitle"
                    />
                  </div>
                </div>

                <!--Typography-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Blockquote</h3>
                    <p>
                      Vuero provides <code>blockquote</code> html element
                      styling. Wrap your <code>blockquote</code> element inside
                      a <code>div</code> with the <code>content</code> class.
                      Blockquotes can have different colors. Available color
                      modifier classes are <code>is-primary</code>,
                      <code>is-success</code>, <code>is-info</code>,
                      <code>is-warning</code>, <code>is-danger</code>.
                    </p>
                    <a
                      class="code-trigger"
                      :class="[display.blockquote && 'is-active']"
                      @click="display.blockquote = !display.blockquote"
                    >
                      <span
                        v-show="display.blockquote"
                        class="iconify open"
                        data-icon="feather:code"
                      />
                      <span
                        v-show="!display.blockquote"
                        class="iconify close"
                        data-icon="feather:x"
                      />
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="content">
                      <blockquote>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Ergo, inquit, tibi Q. Est enim effectrix
                          multarum et magnarum voluptatum. Equidem, sed
                          audistine modo de Carneade? Dici enim nihil potest
                          verius. Praeteritis, inquit, gaudeo. Aliter autem
                          vobis placet.
                        </p>
                      </blockquote>
                      <blockquote class="is-primary">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Ergo, inquit, tibi Q. Est enim effectrix
                          multarum et magnarum voluptatum. Equidem, sed
                          audistine modo de Carneade? Dici enim nihil potest
                          verius. Praeteritis, inquit, gaudeo. Aliter autem
                          vobis placet.
                        </p>
                      </blockquote>
                      <blockquote class="is-success">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Ergo, inquit, tibi Q. Est enim effectrix
                          multarum et magnarum voluptatum. Equidem, sed
                          audistine modo de Carneade? Dici enim nihil potest
                          verius. Praeteritis, inquit, gaudeo. Aliter autem
                          vobis placet.
                        </p>
                      </blockquote>
                    </div>

                    <HighlightJS
                      v-if="display.blockquote"
                      language="vue"
                      :code="examples.blockquote"
                    />
                  </div>
                </div>

                <!--Typography-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Divider</h3>
                    <p>
                      Vuero provides dividers for your textual content. You can
                      use horizontal and vertical dividers by passing the
                      divider text as a <code>data-content</code> html
                      attribute. See the code example for more details about
                      usage.
                    </p>
                    <a
                      class="code-trigger"
                      :class="[display.divider && 'is-active']"
                      @click="display.divider = !display.divider"
                    >
                      <span
                        v-show="display.divider"
                        class="iconify open"
                        data-icon="feather:code"
                      />
                      <span
                        v-show="!display.divider"
                        class="iconify close"
                        data-icon="feather:x"
                      />
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="columns">
                      <div class="column is-5">
                        <div class="content">
                          <p>
                            Ut venenatis, nisl scelerisque sollicitudin
                            fermentum, quam libero hendrerit ipsum, ut blandit
                            est tellus sit amet turpis.
                          </p>
                          <div class="is-divider" data-content="OR"></div>
                          <p>
                            Ut venenatis, nisl scelerisque sollicitudin
                            fermentum, quam libero hendrerit ipsum, ut blandit
                            est tellus sit amet turpis.
                          </p>
                        </div>
                      </div>
                      <div class="column is-5 is-offset-1">
                        <div class="columns">
                          <div class="column">
                            <p>
                              Ut venenatis, nisl scelerisque sollicitudin
                              fermentum, quam libero hendrerit ipsum, ut blandit
                              est tellus sit amet turpis.
                            </p>
                          </div>
                          <div
                            class="is-divider-vertical"
                            data-content="OR"
                          ></div>
                          <div class="column">
                            <p>
                              Ut venenatis, nisl scelerisque sollicitudin
                              fermentum, quam libero hendrerit ipsum, ut blandit
                              est tellus sit amet turpis.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <HighlightJS
                      v-if="display.divider"
                      language="vue"
                      :code="examples.divider"
                    />
                  </div>
                </div>

                <!--Typography-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Content Table</h3>
                    <p>
                      You can also use the <code>content</code> class to wrap an
                      html <code>table</code>
                      element to apply minimum styles to your table UI. Please
                      refer to the Vuero components section to find more
                      advanced table examples and layouts.
                    </p>
                    <a
                      class="code-trigger"
                      :class="[display.contentTable && 'is-active']"
                      @click="display.contentTable = !display.contentTable"
                    >
                      <span
                        v-show="display.contentTable"
                        class="iconify open"
                        data-icon="feather:code"
                      />
                      <span
                        v-show="!display.contentTable"
                        class="iconify close"
                        data-icon="feather:x"
                      />
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="content">
                      <table>
                        <thead>
                          <tr>
                            <th>Heroes</th>
                            <th>Power</th>
                            <th>Availability</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Superman</td>
                            <td>
                              <i class="fas fa-star warning-text"></i>
                              <i class="fas fa-star warning-text"></i>
                              <i class="fas fa-star warning-text"></i>
                              <i class="fas fa-star warning-text"></i>
                              <i class="fas fa-star warning-text"></i>
                            </td>
                            <td>
                              <span class="tag is-rounded is-success"
                                >Available</span
                              >
                            </td>
                          </tr>
                          <tr>
                            <td>Batman</td>
                            <td>
                              <i class="fas fa-star warning-text"></i>
                              <i class="fas fa-star warning-text"></i>
                              <i class="fas fa-star warning-text"></i>
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                            </td>
                            <td>
                              <span class="tag is-rounded">Unavailable</span>
                            </td>
                          </tr>
                          <tr>
                            <td>Deadpool</td>
                            <td>
                              <i class="fas fa-star warning-text"></i>
                              <i class="fas fa-star warning-text"></i>
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                            </td>
                            <td>
                              <span class="tag is-rounded">Unavailable</span>
                            </td>
                          </tr>
                          <tr>
                            <td>Spawn</td>
                            <td>
                              <i class="fas fa-star warning-text"></i>
                              <i class="fas fa-star warning-text"></i>
                              <i class="fas fa-star warning-text"></i>
                              <i class="fas fa-star warning-text"></i>
                              <i class="fas fa-star"></i>
                            </td>
                            <td>
                              <span class="tag is-rounded is-success"
                                >Available</span
                              >
                            </td>
                          </tr>
                          <tr>
                            <td>Galactus</td>
                            <td>
                              <i class="fas fa-star warning-text"></i>
                              <i class="fas fa-star warning-text"></i>
                              <i class="fas fa-star warning-text"></i>
                              <i class="fas fa-star warning-text"></i>
                              <i class="fas fa-star warning-text"></i>
                            </td>
                            <td>
                              <span class="tag is-rounded">Unavailable</span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <HighlightJS
                      v-if="display.contentTable"
                      language="vue"
                      :code="examples.contentTable"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>

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
  title: 'Elements - Forms File - Vuero',
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
        <h1 class="title is-4">File Input</h1>
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
              <span>Forms</span>
            </a>
          </li>
          <li>
            <a>
              <span>File</span>
            </a>
          </li>
        </ul>
      </nav>

      <div class="columns">
        <div class="column is-12">
          <!--File input button-->
          <div class="demo-card">
            <div class="demo-title">
              <h3 class="title is-thin is-5">File Input</h3>
              <p>
                Vuero provides default styles for file inputs, in case you need
                a control to upload a single file in your forms. File inputs can
                look like upload buttons. Please refer to markup for more
                details about usage.
              </p>
              <a class="code-trigger">
                <i class="iconify open" data-icon="feather:code"></i>
                <i class="iconify close" data-icon="feather:x"></i>
              </a>
            </div>
            <div class="card-inner">
              <div class="field is-grouped">
                <div class="control">
                  <div class="file">
                    <label class="file-label">
                      <input class="file-input" type="file" name="resume" />
                      <span class="file-cta">
                        <span class="file-icon">
                          <i class="fas fa-cloud-upload-alt"></i>
                        </span>
                        <span class="file-label"> Choose a file… </span>
                      </span>
                    </label>
                  </div>
                </div>

                <div class="control">
                  <div class="file is-default">
                    <label class="file-label">
                      <input class="file-input" type="file" name="resume" />
                      <span class="file-cta">
                        <span class="file-icon">
                          <i class="fas fa-cloud-upload-alt"></i>
                        </span>
                        <span class="file-label"> Choose a file… </span>
                      </span>
                    </label>
                  </div>
                </div>

                <div class="control">
                  <div class="file is-primary">
                    <label class="file-label">
                      <input class="file-input" type="file" name="resume" />
                      <span class="file-cta">
                        <span class="file-icon">
                          <i class="iconify" data-icon="feather:upload"></i>
                        </span>
                        <span class="file-label"> Choose a file… </span>
                      </span>
                    </label>
                  </div>
                </div>

                <div class="control">
                  <div class="file is-success">
                    <label class="file-label">
                      <input class="file-input" type="file" name="resume" />
                      <span class="file-cta">
                        <span class="file-icon">
                          <i class="lnil lnil-lg lnil-cloud-upload"></i>
                        </span>
                        <span class="file-label"> Choose a file… </span>
                      </span>
                    </label>
                  </div>
                </div>
              </div>

              <div class="highlight highlight-block">
                <pre><code class="code-highlight">
&#x3C;div class=&#x22;field is-grouped&#x22;&#x3E;
    &#x3C;div class=&#x22;control&#x22;&#x3E;
        &#x3C;div class=&#x22;file&#x22;&#x3E;
            &#x3C;label class=&#x22;file-label&#x22;&#x3E;
                &#x3C;input class=&#x22;file-input&#x22; type=&#x22;file&#x22; name=&#x22;resume&#x22;&#x3E;
                &#x3C;span class=&#x22;file-cta&#x22;&#x3E;
                    &#x3C;span class=&#x22;file-icon&#x22;&#x3E;
                        &#x3C;i class=&#x22;fas fa-cloud-upload-alt&#x22;&#x3E;&#x3C;/i&#x3E;
                    &#x3C;/span&#x3E;
                    &#x3C;span class=&#x22;file-label&#x22;&#x3E;
                        Choose a file&#x2026;
                    &#x3C;/span&#x3E;
                &#x3C;/span&#x3E;
            &#x3C;/label&#x3E;
        &#x3C;/div&#x3E;
    &#x3C;/div&#x3E;

    &#x3C;div class=&#x22;control&#x22;&#x3E;
        &#x3C;div class=&#x22;file is-default&#x22;&#x3E;
            &#x3C;label class=&#x22;file-label&#x22;&#x3E;
                &#x3C;input class=&#x22;file-input&#x22; type=&#x22;file&#x22; name=&#x22;resume&#x22;&#x3E;
                &#x3C;span class=&#x22;file-cta&#x22;&#x3E;
                    &#x3C;span class=&#x22;file-icon&#x22;&#x3E;
                        &#x3C;i class=&#x22;fas fa-cloud-upload-alt&#x22;&#x3E;&#x3C;/i&#x3E;
                    &#x3C;/span&#x3E;
                    &#x3C;span class=&#x22;file-label&#x22;&#x3E;
                        Choose a file&#x2026;
                    &#x3C;/span&#x3E;
                &#x3C;/span&#x3E;
            &#x3C;/label&#x3E;
        &#x3C;/div&#x3E;
    &#x3C;/div&#x3E;

    &#x3C;div class=&#x22;control&#x22;&#x3E;
        &#x3C;div class=&#x22;file is-primary&#x22;&#x3E;
            &#x3C;label class=&#x22;file-label&#x22;&#x3E;
                &#x3C;input class=&#x22;file-input&#x22; type=&#x22;file&#x22; name=&#x22;resume&#x22;&#x3E;
                &#x3C;span class=&#x22;file-cta&#x22;&#x3E;
                    &#x3C;span class=&#x22;file-icon&#x22;&#x3E;
                        &#x3C;i data-feather=&#x22;upload&#x22;&#x3E;&#x3C;/i&#x3E;
                    &#x3C;/span&#x3E;
                    &#x3C;span class=&#x22;file-label&#x22;&#x3E;
                        Choose a file&#x2026;
                    &#x3C;/span&#x3E;
                &#x3C;/span&#x3E;
            &#x3C;/label&#x3E;
        &#x3C;/div&#x3E;
    &#x3C;/div&#x3E;

    &#x3C;div class=&#x22;control&#x22;&#x3E;
        &#x3C;div class=&#x22;file is-success&#x22;&#x3E;
            &#x3C;label class=&#x22;file-label&#x22;&#x3E;
                &#x3C;input class=&#x22;file-input&#x22; type=&#x22;file&#x22; name=&#x22;resume&#x22;&#x3E;
                &#x3C;span class=&#x22;file-cta&#x22;&#x3E;
                    &#x3C;span class=&#x22;file-icon&#x22;&#x3E;
                        &#x3C;i class=&#x22;lnil lnil-lg lnil-cloud-upload&#x22;&#x3E;&#x3C;/i&#x3E;
                    &#x3C;/span&#x3E;
                    &#x3C;span class=&#x22;file-label&#x22;&#x3E;
                        Choose a file&#x2026;
                    &#x3C;/span&#x3E;
                &#x3C;/span&#x3E;
            &#x3C;/label&#x3E;
        &#x3C;/div&#x3E;
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre>
              </div>
            </div>
          </div>

          <!--File input button-->
          <div class="demo-card">
            <div class="demo-title">
              <h3 class="title is-thin is-5">Boxed File Input</h3>
              <p>
                Vuero file inputs can have a boxed style. You just need to add
                the <code>is-boxed</code> class to your
                <code>file</code> element to apply this style. Please refer to
                markup for more details about usage.
              </p>
              <a class="code-trigger">
                <i class="iconify open" data-icon="feather:code"></i>
                <i class="iconify close" data-icon="feather:x"></i>
              </a>
            </div>
            <div class="card-inner">
              <div class="field is-grouped">
                <div class="control">
                  <div class="file is-boxed">
                    <label class="file-label">
                      <input class="file-input" type="file" name="resume" />
                      <span class="file-cta">
                        <span class="file-icon">
                          <i class="lnil lnil-32 lnil-cloud-upload"></i>
                        </span>
                        <span class="file-label"> Choose a file… </span>
                      </span>
                    </label>
                  </div>
                </div>

                <div class="control">
                  <div class="file is-boxed is-default">
                    <label class="file-label">
                      <input class="file-input" type="file" name="resume" />
                      <span class="file-cta">
                        <span class="file-icon">
                          <i class="lnil lnil-32 lnil-cloud-upload"></i>
                        </span>
                        <span class="file-label"> Choose a file… </span>
                      </span>
                    </label>
                  </div>
                </div>

                <div class="control">
                  <div class="file is-boxed is-primary">
                    <label class="file-label">
                      <input class="file-input" type="file" name="resume" />
                      <span class="file-cta">
                        <span class="file-icon">
                          <i class="lnil lnil-32 lnil-cloud-upload"></i>
                        </span>
                        <span class="file-label"> Choose a file… </span>
                      </span>
                    </label>
                  </div>
                </div>
              </div>

              <div class="highlight highlight-block">
                <pre><code class="code-highlight">
&#x3C;div class=&#x22;field is-grouped&#x22;&#x3E;
    &#x3C;div class=&#x22;control&#x22;&#x3E;
        &#x3C;div class=&#x22;file is-boxed&#x22;&#x3E;
            &#x3C;label class=&#x22;file-label&#x22;&#x3E;
                &#x3C;input class=&#x22;file-input&#x22; type=&#x22;file&#x22; name=&#x22;resume&#x22;&#x3E;
                &#x3C;span class=&#x22;file-cta&#x22;&#x3E;
                    &#x3C;span class=&#x22;file-icon&#x22;&#x3E;
                        &#x3C;i class=&#x22;lnil lnil-32 lnil-cloud-upload&#x22;&#x3E;&#x3C;/i&#x3E;
                    &#x3C;/span&#x3E;
                    &#x3C;span class=&#x22;file-label&#x22;&#x3E;
                        Choose a file&#x2026;
                    &#x3C;/span&#x3E;
                &#x3C;/span&#x3E;
            &#x3C;/label&#x3E;
        &#x3C;/div&#x3E;
    &#x3C;/div&#x3E;

    &#x3C;div class=&#x22;control&#x22;&#x3E;
        &#x3C;div class=&#x22;file is-boxed is-default&#x22;&#x3E;
            &#x3C;label class=&#x22;file-label&#x22;&#x3E;
                &#x3C;input class=&#x22;file-input&#x22; type=&#x22;file&#x22; name=&#x22;resume&#x22;&#x3E;
                &#x3C;span class=&#x22;file-cta&#x22;&#x3E;
                    &#x3C;span class=&#x22;file-icon&#x22;&#x3E;
                        &#x3C;i class=&#x22;lnil lnil-32 lnil-cloud-upload&#x22;&#x3E;&#x3C;/i&#x3E;
                    &#x3C;/span&#x3E;
                    &#x3C;span class=&#x22;file-label&#x22;&#x3E;
                        Choose a file&#x2026;
                    &#x3C;/span&#x3E;
                &#x3C;/span&#x3E;
            &#x3C;/label&#x3E;
        &#x3C;/div&#x3E;
    &#x3C;/div&#x3E;

    &#x3C;div class=&#x22;control&#x22;&#x3E;
        &#x3C;div class=&#x22;file is-boxed is-primary&#x22;&#x3E;
            &#x3C;label class=&#x22;file-label&#x22;&#x3E;
                &#x3C;input class=&#x22;file-input&#x22; type=&#x22;file&#x22; name=&#x22;resume&#x22;&#x3E;
                &#x3C;span class=&#x22;file-cta&#x22;&#x3E;
                    &#x3C;span class=&#x22;file-icon&#x22;&#x3E;
                        &#x3C;i class=&#x22;lnil lnil-32 lnil-cloud-upload&#x22;&#x3E;&#x3C;/i&#x3E;
                    &#x3C;/span&#x3E;
                    &#x3C;span class=&#x22;file-label&#x22;&#x3E;
                        Choose a file&#x2026;
                    &#x3C;/span&#x3E;
                &#x3C;/span&#x3E;
            &#x3C;/label&#x3E;
        &#x3C;/div&#x3E;
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre>
              </div>
            </div>
          </div>

          <!--File input button-->
          <div class="demo-card">
            <div class="demo-title">
              <h3 class="title is-thin is-5">File Name</h3>
              <p>
                File inputs can show an additional area to display the selected
                file name. You just need to add the
                <code>has-name</code> class to your <code>file</code> element to
                apply this style. Please refer to markup for more details about
                usage.
              </p>
              <a class="code-trigger">
                <i class="iconify open" data-icon="feather:code"></i>
                <i class="iconify close" data-icon="feather:x"></i>
              </a>
            </div>
            <div class="card-inner">
              <div class="field is-grouped">
                <div class="control">
                  <div class="file has-name is-fullwidth">
                    <label class="file-label">
                      <input class="file-input" type="file" name="resume" />
                      <span class="file-cta">
                        <span class="file-icon">
                          <i class="lnil lnil-lg lnil-cloud-upload"></i>
                        </span>
                        <span class="file-label"> Choose a file… </span>
                      </span>
                      <span class="file-name light-text">
                        22082020_project_budget.xls
                      </span>
                    </label>
                  </div>
                </div>
              </div>

              <div class="highlight highlight-block">
                <pre><code class="code-highlight">
&#x3C;div class=&#x22;field is-grouped&#x22;&#x3E;
    &#x3C;div class=&#x22;control&#x22;&#x3E;
        &#x3C;div class=&#x22;file has-name is-fullwidth&#x22;&#x3E;
            &#x3C;label class=&#x22;file-label&#x22;&#x3E;
                &#x3C;input class=&#x22;file-input&#x22; type=&#x22;file&#x22; name=&#x22;resume&#x22;&#x3E;
                &#x3C;span class=&#x22;file-cta&#x22;&#x3E;
                    &#x3C;span class=&#x22;file-icon&#x22;&#x3E;
                        &#x3C;i class=&#x22;lnil lnil-lg lnil-cloud-upload&#x22;&#x3E;&#x3C;/i&#x3E;
                    &#x3C;/span&#x3E;
                    &#x3C;span class=&#x22;file-label&#x22;&#x3E;
                        Choose a file&#x2026;
                    &#x3C;/span&#x3E;
                &#x3C;/span&#x3E;
                &#x3C;span class=&#x22;file-name light-text&#x22;&#x3E;
                    22082020_project_budget.xls
                &#x3C;/span&#x3E;
            &#x3C;/label&#x3E;
        &#x3C;/div&#x3E;
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre>
              </div>
            </div>
          </div>

          <!--File input button-->
          <div class="demo-card">
            <div class="demo-title">
              <h3 class="title is-thin is-5">Right File Name</h3>
              <p>
                File inputs can show an additional area to display the selected
                file name, on the right. You just need to add the
                <code>has-name</code> and <code>is-right</code> classes to your
                <code>file</code> element to apply this style. Please refer to
                markup for more details about usage.
              </p>
              <a class="code-trigger">
                <i class="iconify open" data-icon="feather:code"></i>
                <i class="iconify close" data-icon="feather:x"></i>
              </a>
            </div>
            <div class="card-inner">
              <div class="field is-grouped">
                <div class="control">
                  <div class="file has-name is-fullwidth is-right">
                    <label class="file-label">
                      <input class="file-input" type="file" name="resume" />
                      <span class="file-cta">
                        <span class="file-icon">
                          <i class="lnil lnil-lg lnil-cloud-upload"></i>
                        </span>
                        <span class="file-label"> Choose a file… </span>
                      </span>
                      <span class="file-name light-text">
                        22082020_project_budget.xls
                      </span>
                    </label>
                  </div>
                </div>
              </div>

              <div class="highlight highlight-block">
                <pre><code class="code-highlight">
&#x3C;div class=&#x22;field is-grouped&#x22;&#x3E;
    &#x3C;div class=&#x22;control&#x22;&#x3E;
        &#x3C;div class=&#x22;file has-name is-fullwidth is-right&#x22;&#x3E;
            &#x3C;label class=&#x22;file-label&#x22;&#x3E;
                &#x3C;input class=&#x22;file-input&#x22; type=&#x22;file&#x22; name=&#x22;resume&#x22;&#x3E;
                &#x3C;span class=&#x22;file-cta&#x22;&#x3E;
                    &#x3C;span class=&#x22;file-icon&#x22;&#x3E;
                        &#x3C;i class=&#x22;lnil lnil-lg lnil-cloud-upload&#x22;&#x3E;&#x3C;/i&#x3E;
                    &#x3C;/span&#x3E;
                    &#x3C;span class=&#x22;file-label&#x22;&#x3E;
                        Choose a file&#x2026;
                    &#x3C;/span&#x3E;
                &#x3C;/span&#x3E;
                &#x3C;span class=&#x22;file-name light-text&#x22;&#x3E;
                    22082020_project_budget.xls
                &#x3C;/span&#x3E;
            &#x3C;/label&#x3E;
        &#x3C;/div&#x3E;
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

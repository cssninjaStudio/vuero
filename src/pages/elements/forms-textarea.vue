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
  title: 'Elements - Forms Textarea - Vuero',
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
        <h1 class="title is-4">Textarea</h1>
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
              <span>Textarea</span>
            </a>
          </li>
        </ul>
      </nav>

      <div class="columns">
        <div class="column is-12">
          <!--Textarea-->
          <div class="demo-card">
            <div class="demo-title">
              <h3 class="title is-thin is-5">Textarea</h3>
              <p>
                A standard Html5 text box to use in your applications. You can
                control the box text length with the
                <code>rows="*"</code> attribute. Like other form controls,
                textarea natively supports dark mode.
              </p>
              <a class="code-trigger">
                <i class="iconify open" data-icon="feather:code"></i>
                <i class="iconify close" data-icon="feather:x"></i>
              </a>
            </div>
            <div class="card-inner">
              <div class="field">
                <div class="control">
                  <textarea
                    class="textarea"
                    rows="4"
                    placeholder="A longer message..."
                  ></textarea>
                </div>
              </div>

              <div class="highlight highlight-block">
                <pre><code class="code-highlight">
&#x3C;div class=&#x22;field&#x22;&#x3E;
    &#x3C;div class=&#x22;control&#x22;&#x3E;
        &#x3C;textarea class=&#x22;textarea&#x22; rows=&#x22;4&#x22; placeholder=&#x22;A longer message...&#x22;&#x3E;&#x3C;/textarea&#x3E;
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre>
              </div>
            </div>
          </div>

          <!--Textarea-->
          <div class="demo-card">
            <div class="demo-title">
              <h3 class="title is-thin is-5">Focus Colors</h3>
              <p>
                Like other form controls, textareas can have different border
                colors when focused. You simply have to add one of the following
                modifiers to the
                <code>textarea</code> element: <code>is-primary-focus</code>,
                <code>is-success-focus</code>, <code>is-info-focus</code>,
                <code>is-warning-focus</code>, <code>is-danger-focus</code>.
              </p>
              <a class="code-trigger">
                <i class="iconify open" data-icon="feather:code"></i>
                <i class="iconify close" data-icon="feather:x"></i>
              </a>
            </div>
            <div class="card-inner">
              <div class="field">
                <div class="control">
                  <textarea
                    class="textarea is-primary-focus"
                    rows="2"
                    placeholder="Primary..."
                  ></textarea>
                </div>
              </div>

              <div class="field">
                <div class="control">
                  <textarea
                    class="textarea is-success-focus"
                    rows="2"
                    placeholder="Success..."
                  ></textarea>
                </div>
              </div>

              <div class="field">
                <div class="control">
                  <textarea
                    class="textarea is-info-focus"
                    rows="2"
                    placeholder="Info..."
                  ></textarea>
                </div>
              </div>

              <div class="field">
                <div class="control">
                  <textarea
                    class="textarea is-warning-focus"
                    rows="2"
                    placeholder="Warning..."
                  ></textarea>
                </div>
              </div>

              <div class="field">
                <div class="control">
                  <textarea
                    class="textarea is-danger-focus"
                    rows="2"
                    placeholder="Danger..."
                  ></textarea>
                </div>
              </div>

              <div class="highlight highlight-block">
                <pre><code class="code-highlight">
&#x3C;div class=&#x22;field&#x22;&#x3E;
    &#x3C;div class=&#x22;control&#x22;&#x3E;
        &#x3C;textarea class=&#x22;textarea is-primary-focus&#x22; rows=&#x22;2&#x22; placeholder=&#x22;Primary...&#x22;&#x3E;&#x3C;/textarea&#x3E;
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;

&#x3C;div class=&#x22;field&#x22;&#x3E;
    &#x3C;div class=&#x22;control&#x22;&#x3E;
        &#x3C;textarea class=&#x22;textarea is-success-focus&#x22; rows=&#x22;2&#x22; placeholder=&#x22;Success...&#x22;&#x3E;&#x3C;/textarea&#x3E;
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;

&#x3C;div class=&#x22;field&#x22;&#x3E;
    &#x3C;div class=&#x22;control&#x22;&#x3E;
        &#x3C;textarea class=&#x22;textarea is-info-focus&#x22; rows=&#x22;2&#x22; placeholder=&#x22;Info...&#x22;&#x3E;&#x3C;/textarea&#x3E;
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;

&#x3C;div class=&#x22;field&#x22;&#x3E;
    &#x3C;div class=&#x22;control&#x22;&#x3E;
        &#x3C;textarea class=&#x22;textarea is-warning-focus&#x22; rows=&#x22;2&#x22; placeholder=&#x22;Warning...&#x22;&#x3E;&#x3C;/textarea&#x3E;
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;

&#x3C;div class=&#x22;field&#x22;&#x3E;
    &#x3C;div class=&#x22;control&#x22;&#x3E;
        &#x3C;textarea class=&#x22;textarea is-danger-focus&#x22; rows=&#x22;2&#x22; placeholder=&#x22;Danger...&#x22;&#x3E;&#x3C;/textarea&#x3E;
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre>
              </div>
            </div>
          </div>

          <!--Textarea-->
          <div class="demo-card">
            <div class="demo-title">
              <h3 class="title is-thin is-5">Loading State</h3>
              <p>
                A textarea can be shown in a loading state. For that, you need
                to wrap it inside a <code>control</code> element. Then, simply
                add the <code>is-loading</code> class to the wrapping
                <code>control</code> element. Please refer to the code example
                for more details about usage.
              </p>
              <a class="code-trigger">
                <i class="iconify open" data-icon="feather:code"></i>
                <i class="iconify close" data-icon="feather:x"></i>
              </a>
            </div>
            <div class="card-inner">
              <div class="field">
                <div class="control is-loading">
                  <textarea
                    class="textarea"
                    rows="4"
                    placeholder="A longer message..."
                  ></textarea>
                </div>
              </div>

              <div class="highlight highlight-block">
                <pre><code class="code-highlight">
&#x3C;div class=&#x22;field&#x22;&#x3E;
    &#x3C;div class=&#x22;control is-loading&#x22;&#x3E;
        &#x3C;textarea class=&#x22;textarea&#x22; rows=&#x22;4&#x22; placeholder=&#x22;A longer message...&#x22;&#x3E;&#x3C;/textarea&#x3E;
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre>
              </div>
            </div>
          </div>

          <!--Textarea-->
          <div class="demo-card">
            <div class="demo-title">
              <h3 class="title is-thin is-5">Disabled State</h3>
              <p>
                A textarea can be shown in a disabled state. For that, you need
                to wrap it inside a <code>control</code> element. Simply add the
                <code>disabled</code> attribute to the target textarea element.
              </p>
              <a class="code-trigger">
                <i class="iconify open" data-icon="feather:code"></i>
                <i class="iconify close" data-icon="feather:x"></i>
              </a>
            </div>
            <div class="card-inner">
              <div class="field">
                <div class="control">
                  <textarea
                    class="textarea"
                    rows="4"
                    placeholder="A longer message..."
                    disabled
                  ></textarea>
                </div>
              </div>

              <div class="highlight highlight-block">
                <pre><code class="code-highlight">
&#x3C;div class=&#x22;field&#x22;&#x3E;
    &#x3C;div class=&#x22;control&#x22;&#x3E;
        &#x3C;textarea class=&#x22;textarea&#x22; rows=&#x22;4&#x22; placeholder=&#x22;A longer message...&#x22; disabled&#x3E;&#x3C;/textarea&#x3E;
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre>
              </div>
            </div>
          </div>

          <!--Textarea Addon-->
          <div class="demo-card">
            <div class="demo-title">
              <h3 class="title is-thin is-5">Textarea Addon</h3>
              <p>
                Textareas that are wrapped by a <code>control</code> and a
                <code>field</code> can have a single bottom addon. You can use
                it to display a toolbar or any type of user actions. Please
                refer to the code example for more details about usage.
              </p>
              <a class="code-trigger">
                <i class="iconify open" data-icon="feather:code"></i>
                <i class="iconify close" data-icon="feather:x"></i>
              </a>
            </div>
            <div class="card-inner">
              <div class="field has-textarea-addon">
                <div class="control">
                  <textarea
                    class="textarea"
                    rows="5"
                    placeholder="A longer message..."
                  ></textarea>
                </div>
                <div class="control is-textarea-addon">
                  <div class="start">
                    <div class="avatar-stack">
                      <div class="v-avatar is-small">
                        <img
                          class="avatar"
                          src="/images/avatars/photos/12.jpg"
                          alt=""
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
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
                          src="/images/avatars/photos/7.jpg"
                          alt=""
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                      </div>
                    </div>
                  </div>
                  <div class="end">
                    <a class="button v-button is-primary is-raised"
                      >Post Comment</a
                    >
                  </div>
                </div>
              </div>

              <div class="highlight highlight-block">
                <pre><code class="code-highlight">
&#x3C;div class=&#x22;field has-textarea-addon&#x22;&#x3E;
    &#x3C;div class=&#x22;control&#x22;&#x3E;
        &#x3C;textarea class=&#x22;textarea&#x22; rows=&#x22;5&#x22; placeholder=&#x22;A longer message...&#x22;&#x3E;&#x3C;/textarea&#x3E;
    &#x3C;/div&#x3E;
    &#x3C;div class=&#x22;control is-textarea-addon&#x22;&#x3E;
        &#x3C;div class=&#x22;start&#x22;&#x3E;
            &#x3C;div class=&#x22;avatar-stack&#x22;&#x3E;
                &#x3C;div class=&#x22;v-avatar is-small&#x22;&#x3E;
                    &#x3C;img class=&#x22;avatar&#x22; src=&#x22;https://via.placeholder.com/150x150&#x22; alt=&#x22;&#x22;&#x3E;
                &#x3C;/div&#x3E;
                &#x3C;div class=&#x22;v-avatar is-small&#x22;&#x3E;
                    &#x3C;span class=&#x22;avatar is-fake is-info&#x22;&#x3E;
                        &#x3C;span&#x3E;JD&#x3C;/span&#x3E;
                    &#x3C;/span&#x3E;
                &#x3C;/div&#x3E;
                &#x3C;div class=&#x22;v-avatar is-small&#x22;&#x3E;
                    &#x3C;img class=&#x22;avatar&#x22; src=&#x22;https://via.placeholder.com/150x150&#x22; alt=&#x22;&#x22;&#x3E;
                &#x3C;/div&#x3E;
            &#x3C;/div&#x3E;
        &#x3C;/div&#x3E;
        &#x3C;div class=&#x22;end&#x22;&#x3E;
            &#x3C;a class=&#x22;button v-button is-primary is-raised&#x22;&#x3E;Post Comment&#x3C;/a&#x3E;
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

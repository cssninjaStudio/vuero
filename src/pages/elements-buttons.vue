<script setup lang="ts">
import { useTitle } from '@vueuse/core'

useTitle('Elements - Buttons - Vuero')
</script>

<template>
  <DefaultLayout>
    <ElementsSidebar />
    <ElementsMobileSubsidebar />

    <!-- Content Wrapper -->
    <div
      id="huro-demo"
      class="view-wrapper"
      data-sidebar-open
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
              data-sidebar="elements-sidebar"
            >
              <span class="menu-toggle has-chevron">
                <span class="icon-box-toggle">
                  <span class="rotate">
                    <i class="icon-line-top"></i>
                    <i class="icon-line-center"></i>
                    <i class="icon-line-bottom"></i>
                  </span>
                </span>
              </span>
            </div>

            <div class="title-wrap">
              <h1 class="title is-4">Buttons</h1>
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
                      <Icon icon="feather:home" />
                    </span>
                  </RouterLink>
                </li>
                <li>
                  <RouterLink :to="{ name: 'elements-hub' }">
                    <span>Elements</span>
                  </RouterLink>
                </li>
                <li>
                  <a>
                    <span>Buttons</span>
                  </a>
                </li>
              </ul>
            </nav>

            <div class="columns">
              <div class="column is-12">
                <!--H-Button-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">H-Button</h3>
                    <p>
                      Vuero provides it's own subset of Bulma buttons. Use the
                      <code>h-button</code> class with a Bulma native
                      <code>button</code> class to start using Vuero buttons.
                      Basic modifiers such as <code>is-bold</code> and
                      <code>is-rounded</code> are available.
                    </p>
                    <a class="code-trigger">
                      <Icon icon="feather:code" class="open" />
                      <Icon icon="feather:x" class="close" />
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="buttons">
                      <a class="button h-button">Button</a>
                      <button class="button h-button is-bold">Button</button>
                      <a class="button h-button is-rounded">Button</a>
                      <button class="button h-button is-rounded is-bold">
                        Button
                      </button>
                    </div>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;a class=&#x22;button h-button&#x22;&#x3E;Button&#x3C;/a&#x3E;
&#x3C;button class=&#x22;button h-button is-bold&#x22;&#x3E;Button&#x3C;/button&#x3E;
&#x3C;a class=&#x22;button h-button is-rounded&#x22;&#x3E;Button&#x3C;/a&#x3E;
&#x3C;button class=&#x22;button h-button is-rounded is-bold&#x22;&#x3E;Button&#x3C;/button&#x3E;
</code></pre>
                    </div>
                  </div>
                </div>

                <!--Solid Buttons-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Solid Colors</h3>
                    <p>
                      Vuero buttons can have solid colors. You can use the same
                      classes that are offered by the Bulma Framework. Available
                      color classes are <code>is-primary</code>,
                      <code>is-info</code>, <code>is-success</code>,
                      <code>is-warning</code>, <code>is-danger</code>,
                      <code>is-light</code>, <code>is-white</code>.
                    </p>
                    <a class="code-trigger">
                      <Icon icon="feather:code" class="open" />
                      <Icon icon="feather:x" class="close" />
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="buttons">
                      <a class="button h-button is-primary">Primary</a>
                      <a class="button h-button is-info">Info</a>
                      <a class="button h-button is-success">Success</a>
                      <a class="button h-button is-warning">Warning</a>
                      <a class="button h-button is-danger">Danger</a>
                      <a class="button h-button is-light">Light</a>
                      <a class="button h-button is-white">White</a>
                    </div>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;a class=&#x22;button h-button is-primary&#x22;&#x3E;Primary&#x3C;/a&#x3E;
&#x3C;a class=&#x22;button h-button is-info&#x22;&#x3E;Info&#x3C;/a&#x3E;
&#x3C;a class=&#x22;button h-button is-success&#x22;&#x3E;Success&#x3C;/a&#x3E;
&#x3C;a class=&#x22;button h-button is-warning&#x22;&#x3E;Warning&#x3C;/a&#x3E;
&#x3C;a class=&#x22;button h-button is-danger&#x22;&#x3E;Danger&#x3C;/a&#x3E;
&#x3C;a class=&#x22;button h-button is-light&#x22;&#x3E;Light&#x3C;/a&#x3E;
&#x3C;a class=&#x22;button h-button is-white&#x22;&#x3E;White&#x3C;/a&#x3E;
</code></pre>
                    </div>
                  </div>
                </div>

                <!--Light Buttons-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Light Colors</h3>
                    <p>
                      Solid buttons are available in lighter versions. Simply
                      use the same markup that we have for solid buttons and add
                      the <code>is-light</code> modifier class.
                    </p>
                    <a class="code-trigger">
                      <Icon icon="feather:code" class="open" />
                      <Icon icon="feather:x" class="close" />
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="buttons">
                      <a class="button h-button is-primary is-light">Primary</a>
                      <a class="button h-button is-info is-light">Info</a>
                      <a class="button h-button is-success is-light">Success</a>
                      <a class="button h-button is-warning is-light">Warning</a>
                      <a class="button h-button is-danger is-light">Danger</a>
                    </div>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;a class=&#x22;button h-button is-primary is-light&#x22;&#x3E;Primary&#x3C;/a&#x3E;
&#x3C;a class=&#x22;button h-button is-info is-light&#x22;&#x3E;Info&#x3C;/a&#x3E;
&#x3C;a class=&#x22;button h-button is-success is-light&#x22;&#x3E;Success&#x3C;/a&#x3E;
&#x3C;a class=&#x22;button h-button is-warning is-light&#x22;&#x3E;Warning&#x3C;/a&#x3E;
&#x3C;a class=&#x22;button h-button is-danger is-light&#x22;&#x3E;Danger&#x3C;/a&#x3E;
</code></pre>
                    </div>
                  </div>
                </div>

                <!--Outlined Buttons-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Outlined Colors</h3>
                    <p>
                      Vuero Buttons can be outlined. Simply use the same markup
                      that we have for solid buttons and add the
                      <code>is-outlined</code> modifier class.
                    </p>
                    <a class="code-trigger">
                      <Icon icon="feather:code" class="open" />
                      <Icon icon="feather:x" class="close" />
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="buttons">
                      <a class="button h-button is-primary is-outlined"
                        >Primary</a
                      >
                      <a class="button h-button is-info is-outlined">Info</a>
                      <a class="button h-button is-success is-outlined"
                        >Success</a
                      >
                      <a class="button h-button is-warning is-outlined"
                        >Warning</a
                      >
                      <a class="button h-button is-danger is-outlined"
                        >Danger</a
                      >
                    </div>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;a class=&#x22;button h-button is-primary is-outlined&#x22;&#x3E;Primary&#x3C;/a&#x3E;
&#x3C;a class=&#x22;button h-button is-info is-outlined&#x22;&#x3E;Info&#x3C;/a&#x3E;
&#x3C;a class=&#x22;button h-button is-success is-outlined&#x22;&#x3E;Success&#x3C;/a&#x3E;
&#x3C;a class=&#x22;button h-button is-warning is-outlined&#x22;&#x3E;Warning&#x3C;/a&#x3E;
&#x3C;a class=&#x22;button h-button is-danger is-outlined&#x22;&#x3E;Danger&#x3C;/a&#x3E;
</code></pre>
                    </div>
                  </div>
                </div>

                <!--Elevated Buttons-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Elevation</h3>
                    <p>
                      Vuero buttons can handle elevation. For a hover triggered
                      elevation, add the <code>is-raised</code> modifier class.
                      For a permanent elevation, add the
                      <code>is-elevated</code> modifier class.
                    </p>
                    <a class="code-trigger">
                      <Icon icon="feather:code" class="open" />
                      <Icon icon="feather:x" class="close" />
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="buttons">
                      <a class="button h-button is-primary is-raised"
                        >Primary</a
                      >
                      <a class="button h-button is-info is-raised">Info</a>
                      <a class="button h-button is-success is-raised"
                        >Success</a
                      >
                      <a class="button h-button is-warning is-elevated"
                        >Warning</a
                      >
                      <a class="button h-button is-danger is-elevated"
                        >Danger</a
                      >
                    </div>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;a class=&#x22;button h-button is-primary is-raised&#x22;&#x3E;Primary&#x3C;/a&#x3E;
&#x3C;a class=&#x22;button h-button is-info is-raised&#x22;&#x3E;Info&#x3C;/a&#x3E;
&#x3C;a class=&#x22;button h-button is-success is-raised&#x22;&#x3E;Success&#x3C;/a&#x3E;
&#x3C;a class=&#x22;button h-button is-warning is-elevated&#x22;&#x3E;Warning&#x3C;/a&#x3E;
&#x3C;a class=&#x22;button h-button is-danger is-elevated&#x22;&#x3E;Danger&#x3C;/a&#x3E;
</code></pre>
                    </div>
                  </div>
                </div>

                <!--Loading Buttons-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Loading</h3>
                    <p>
                      Vuero buttons can be shown in a loading state. To show a
                      loading spinner, add the <code>is-loading</code> modifier
                      class.
                    </p>
                    <a class="code-trigger">
                      <Icon icon="feather:code" class="open" />
                      <Icon icon="feather:x" class="close" />
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="buttons">
                      <a class="button h-button is-loading">Button</a>
                      <a class="button h-button is-primary is-loading"
                        >Button</a
                      >
                      <a class="button h-button is-info is-loading">Button</a>
                      <a
                        class="button h-button is-success is-loading is-rounded"
                        >Button</a
                      >
                      <a
                        class="button h-button is-warning is-loading is-rounded"
                        >Button</a
                      >
                      <a class="button h-button is-danger is-loading is-rounded"
                        >Button</a
                      >
                    </div>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;a class=&#x22;button h-button is-loading&#x22;&#x3E;Button&#x3C;/a&#x3E;
&#x3C;a class=&#x22;button h-button is-primary is-loading&#x22;&#x3E;Button&#x3C;/a&#x3E;
&#x3C;a class=&#x22;button h-button is-info is-loading&#x22;&#x3E;Button&#x3C;/a&#x3E;
&#x3C;a class=&#x22;button h-button is-success is-loading is-rounded&#x22;&#x3E;Button&#x3C;/a&#x3E;
&#x3C;a class=&#x22;button h-button is-warning is-loading is-rounded&#x22;&#x3E;Button&#x3C;/a&#x3E;
&#x3C;a class=&#x22;button h-button is-danger is-loading is-rounded&#x22;&#x3E;Button&#x3C;/a&#x3E;
</code></pre>
                    </div>
                  </div>
                </div>

                <!--Disabled Buttons-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Disabled</h3>
                    <p>
                      Vuero buttons can be shown in a disabled state. To show a
                      disabled button, add the <code>disabled</code> html
                      attribute to the target button element.
                    </p>
                    <a class="code-trigger">
                      <Icon icon="feather:code" class="open" />
                      <Icon icon="feather:x" class="close" />
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="buttons">
                      <a class="button h-button is-primary is-disabled"
                        >Primary</a
                      >
                      <a class="button h-button is-info is-disabled">Info</a>
                      <a class="button h-button is-success is-disabled"
                        >Success</a
                      >
                      <a class="button h-button is-warning is-disabled"
                        >Warning</a
                      >
                      <a class="button h-button is-danger is-disabled"
                        >Danger</a
                      >
                    </div>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;a class=&#x22;button h-button is-primary is-disabled&#x22;&#x3E;Primary&#x3C;/a&#x3E;
&#x3C;a class=&#x22;button h-button is-info is-disabled&#x22;&#x3E;Info&#x3C;/a&#x3E;
&#x3C;a class=&#x22;button h-button is-success is-disabled&#x22;&#x3E;Success&#x3C;/a&#x3E;
&#x3C;a class=&#x22;button h-button is-warning is-disabled&#x22;&#x3E;Warning&#x3C;/a&#x3E;
&#x3C;a class=&#x22;button h-button is-danger is-disabled&#x22;&#x3E;Danger&#x3C;/a&#x3E;
</code></pre>
                    </div>
                  </div>
                </div>

                <!--Icon Buttons-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Font Awesome</h3>
                    <p>
                      Vuero buttons work well with Font Awesome Icons. Add an
                      <code>icon</code> element inside the button to handle
                      icons. You can also create square and circle buttons with
                      a single icon. Please refer to markup for detailed
                      examples.
                    </p>
                    <a class="code-trigger">
                      <Icon icon="feather:code" class="open" />
                      <Icon icon="feather:x" class="close" />
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="buttons">
                      <button class="button h-button is-primary is-elevated">
                        <span class="icon">
                          <Icon icon="fa-twitter" />
                        </span>
                        <span>Tweet Now</span>
                      </button>
                      <button
                        class="button h-button is-success is-rounded is-elevated"
                      >
                        <span class="icon">
                          <Icon icon="fa-check" />
                        </span>
                        <span>Save Changes</span>
                      </button>
                      <button class="button">
                        <span class="icon is-small">
                          <Icon icon="fa-twitter" />
                        </span>
                      </button>
                      <button class="button is-primary is-circle is-elevated">
                        <span class="icon is-small">
                          <Icon icon="fa-linkedin-in" />
                        </span>
                      </button>
                    </div>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;button class=&#x22;button h-button is-primary is-elevated&#x22;&#x3E;
    &#x3C;span class=&#x22;icon&#x22;&#x3E;
        &#x3C;i class=&#x22;fab fa-twitter&#x22;&#x3E;&#x3C;/i&#x3E;
    &#x3C;/span&#x3E;
    &#x3C;span&#x3E;Tweet Now&#x3C;/span&#x3E;
&#x3C;/button&#x3E;
&#x3C;button class=&#x22;button h-button is-success is-rounded is-elevated&#x22;&#x3E;
    &#x3C;span class=&#x22;icon&#x22;&#x3E;
        &#x3C;i class=&#x22;fas fa-check&#x22;&#x3E;&#x3C;/i&#x3E;
    &#x3C;/span&#x3E;
    &#x3C;span&#x3E;Save Changes&#x3C;/span&#x3E;
&#x3C;/button&#x3E;
&#x3C;button class=&#x22;button&#x22;&#x3E;
    &#x3C;span class=&#x22;icon is-small&#x22;&#x3E;
        &#x3C;i class=&#x22;fab fa-twitter&#x22;&#x3E;&#x3C;/i&#x3E;
    &#x3C;/span&#x3E;
&#x3C;/button&#x3E;
&#x3C;button class=&#x22;button is-primary is-circle is-elevated&#x22;&#x3E;
    &#x3C;span class=&#x22;icon is-small&#x22;&#x3E;
        &#x3C;i class=&#x22;fab fa-linkedin-in&#x22;&#x3E;&#x3C;/i&#x3E;
    &#x3C;/span&#x3E;
&#x3C;/button&#x3E;
</code></pre>
                    </div>
                  </div>
                </div>

                <!--Icon Buttons-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Feather Icons</h3>
                    <p>
                      Vuero buttons work well with Feather Icons. Add an
                      <code>icon</code> element inside the button to handle
                      icons. You can also create square and circle buttons with
                      a single icon. Please refer to markup for detailed
                      examples.
                    </p>
                    <a class="code-trigger">
                      <Icon icon="feather:code" class="open" />
                      <Icon icon="feather:x" class="close" />
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="buttons">
                      <button class="button h-button is-primary is-elevated">
                        <span class="icon">
                          <Icon icon="feather:twitter" />
                        </span>
                        <span>Tweet Now</span>
                      </button>
                      <button
                        class="button h-button is-danger is-rounded is-elevated"
                      >
                        <span class="icon">
                          <Icon icon="feather:gitlab" />
                        </span>
                        <span>Commit Code</span>
                      </button>
                      <button class="button">
                        <span class="icon is-small">
                          <Icon icon="feather:mail" />
                        </span>
                      </button>
                      <button class="button is-primary is-circle is-elevated">
                        <span class="icon is-small">
                          <Icon icon="feather:message-square" />
                        </span>
                      </button>
                    </div>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;button class=&#x22;button h-button is-primary is-elevated&#x22;&#x3E;
    &#x3C;span class=&#x22;icon&#x22;&#x3E;
        &#x3C;i data-feather=&#x22;twitter&#x22;&#x3E;&#x3C;/i&#x3E;
    &#x3C;/span&#x3E;
    &#x3C;span&#x3E;Tweet Now&#x3C;/span&#x3E;
&#x3C;/button&#x3E;
&#x3C;button class=&#x22;button h-button is-danger is-rounded is-elevated&#x22;&#x3E;
    &#x3C;span class=&#x22;icon&#x22;&#x3E;
        &#x3C;i data-feather=&#x22;gitlab&#x22;&#x3E;&#x3C;/i&#x3E;
    &#x3C;/span&#x3E;
    &#x3C;span&#x3E;Commit Code&#x3C;/span&#x3E;
&#x3C;/button&#x3E;
&#x3C;button class=&#x22;button&#x22;&#x3E;
    &#x3C;span class=&#x22;icon is-small&#x22;&#x3E;
        &#x3C;i data-feather=&#x22;mail&#x22;&#x3E;&#x3C;/i&#x3E;
    &#x3C;/span&#x3E;
&#x3C;/button&#x3E;
&#x3C;button class=&#x22;button is-primary is-circle is-elevated&#x22;&#x3E;
    &#x3C;span class=&#x22;icon is-small&#x22;&#x3E;
        &#x3C;i data-feather=&#x22;message-square&#x22;&#x3E;&#x3C;/i&#x3E;
    &#x3C;/span&#x3E;
&#x3C;/button&#x3E;
</code></pre>
                    </div>
                  </div>
                </div>

                <!--Grouped Buttons-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Button Group</h3>
                    <p>
                      You can easily align buttons and group them together by
                      wrapping them inside a <code>buttons</code> element. You
                      can mix any button styles.
                    </p>
                    <a class="code-trigger">
                      <Icon icon="feather:code" class="open" />
                      <Icon icon="feather:x" class="close" />
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="buttons">
                      <button class="button h-button">
                        <span class="icon">
                          <Icon icon="feather:eye" />
                        </span>
                        <span>View</span>
                      </button>
                      <button class="button h-button">
                        <span class="icon">
                          <Icon icon="feather:edit-2" />
                        </span>
                        <span>Edit</span>
                      </button>
                      <button class="button h-button is-success is-elevated">
                        <span class="icon">
                          <Icon icon="fa-check" />
                        </span>
                        <span>Approve</span>
                      </button>
                    </div>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;div class=&#x22;buttons&#x22;&#x3E;
    &#x3C;button class=&#x22;button h-button&#x22;&#x3E;
        &#x3C;span class=&#x22;icon&#x22;&#x3E;
            &#x3C;i data-feather=&#x22;eye&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;/span&#x3E;
        &#x3C;span&#x3E;View&#x3C;/span&#x3E;
    &#x3C;/button&#x3E;
    &#x3C;button class=&#x22;button h-button&#x22;&#x3E;
        &#x3C;span class=&#x22;icon&#x22;&#x3E;
            &#x3C;i data-feather=&#x22;edit-2&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;/span&#x3E;
        &#x3C;span&#x3E;Edit&#x3C;/span&#x3E;
    &#x3C;/button&#x3E;
    &#x3C;button class=&#x22;button h-button is-success is-elevated&#x22;&#x3E;
        &#x3C;span class=&#x22;icon&#x22;&#x3E;
            &#x3C;i class=&#x22;fas fa-check&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;/span&#x3E;
        &#x3C;span&#x3E;Approve&#x3C;/span&#x3E;
    &#x3C;/button&#x3E;
&#x3C;/div&#x3E;
</code></pre>
                    </div>
                  </div>
                </div>

                <!--Addon Buttons-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Addons</h3>
                    <p>
                      Vuero buttons can be grouped together in an addon styled
                      block of buttons. This makes creating conmplex interfaces
                      much more easier. Refer to markup for a detailed example.
                    </p>
                    <a class="code-trigger">
                      <Icon icon="feather:code" class="open" />
                      <Icon icon="feather:x" class="close" />
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="field has-addons">
                      <p class="control">
                        <button class="button h-button">
                          <span class="icon is-small">
                            <Icon icon="fa-align-left" />
                          </span>
                          <span>Left</span>
                        </button>
                      </p>
                      <p class="control">
                        <button class="button h-button">
                          <span class="icon is-small">
                            <Icon icon="fa-align-center" />
                          </span>
                          <span>Center</span>
                        </button>
                      </p>
                      <p class="control">
                        <button class="button h-button">
                          <span class="icon is-small">
                            <Icon icon="fa-align-right" />
                          </span>
                          <span>Right</span>
                        </button>
                      </p>
                    </div>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;div class=&#x22;field has-addons&#x22;&#x3E;
    &#x3C;p class=&#x22;control&#x22;&#x3E;
        &#x3C;button class=&#x22;button h-button&#x22;&#x3E;
            &#x3C;span class=&#x22;icon is-small&#x22;&#x3E;
                &#x3C;i class=&#x22;fas fa-align-left&#x22;&#x3E;&#x3C;/i&#x3E;
            &#x3C;/span&#x3E;
            &#x3C;span&#x3E;Left&#x3C;/span&#x3E;
        &#x3C;/button&#x3E;
    &#x3C;/p&#x3E;
    &#x3C;p class=&#x22;control&#x22;&#x3E;
        &#x3C;button class=&#x22;button h-button&#x22;&#x3E;
            &#x3C;span class=&#x22;icon is-small&#x22;&#x3E;
                &#x3C;i class=&#x22;fas fa-align-center&#x22;&#x3E;&#x3C;/i&#x3E;
            &#x3C;/span&#x3E;
            &#x3C;span&#x3E;Center&#x3C;/span&#x3E;
        &#x3C;/button&#x3E;
    &#x3C;/p&#x3E;
    &#x3C;p class=&#x22;control&#x22;&#x3E;
        &#x3C;button class=&#x22;button h-button&#x22;&#x3E;
            &#x3C;span class=&#x22;icon is-small&#x22;&#x3E;
                &#x3C;i class=&#x22;fas fa-align-right&#x22;&#x3E;&#x3C;/i&#x3E;
            &#x3C;/span&#x3E;
            &#x3C;span&#x3E;Right&#x3C;/span&#x3E;
        &#x3C;/button&#x3E;
    &#x3C;/p&#x3E;
&#x3C;/div&#x3E;
</code></pre>
                    </div>
                  </div>
                </div>

                <!--H-Action-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">H-Action</h3>
                    <p>
                      Vuero also provides a simple button called
                      <code>h-action</code>. it doesn't come up with a lot of
                      modifiers like the H Button but is a solid alternative
                      when you want to use simple buttons.
                    </p>
                    <a class="code-trigger">
                      <Icon icon="feather:code" class="open" />
                      <Icon icon="feather:x" class="close" />
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="buttons">
                      <a class="button h-action">Button</a>
                      <button class="button h-action is-rounded">Button</button>
                      <a class="button h-action is-hoverable">Button</a>
                      <button class="button h-action is-grey">Button</button>
                    </div>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;a class=&#x22;button h-action&#x22;&#x3E;Button&#x3C;/a&#x3E;
&#x3C;button class=&#x22;button h-action is-rounded&#x22;&#x3E;Button&#x3C;/button&#x3E;
&#x3C;a class=&#x22;button h-action is-hoverable&#x22;&#x3E;Button&#x3C;/a&#x3E;
&#x3C;button class=&#x22;button h-action is-grey&#x22;&#x3E;Button&#x3C;/button&#x3E;
</code></pre>
                    </div>
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

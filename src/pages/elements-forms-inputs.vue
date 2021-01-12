<script setup lang="ts">
import { useTitle } from '@vueuse/core'

useTitle('Elements - Forms Inputs - Vuero')
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
              <h1 class="title is-4">Inputs</h1>
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
                    <span>Forms</span>
                  </a>
                </li>
                <li>
                  <a>
                    <span>Inputs</span>
                  </a>
                </li>
              </ul>
            </nav>

            <div class="columns">
              <div class="column is-12">
                <!--Input-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Input</h3>
                    <p>
                      Vuero provides elegant form controls with minimum styling.
                      You can use regular inputs by adding the
                      <code>input</code> class to a html
                      <code>input</code> element. It's better to wrap inputs
                      inside a <code>field</code> and a <code>control</code> for
                      consistency.
                    </p>
                    <a class="code-trigger">
                      <Icon icon="feather:code" class="open" />
                      <Icon icon="feather:x" class="close" />
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="field">
                      <div class="control">
                        <input
                          type="text"
                          class="input"
                          placeholder="Username"
                        />
                      </div>
                    </div>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;div class=&#x22;field&#x22;&#x3E;
    &#x3C;div class=&#x22;control&#x22;&#x3E;
        &#x3C;input type=&#x22;text&#x22; class=&#x22;input&#x22; placeholder=&#x22;Username&#x22;&#x3E;
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre>
                    </div>
                  </div>
                </div>

                <!--Help Text-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Help Text</h3>
                    <p>
                      If you are using the regular input wrappers (e.g
                      <code>field</code> and <code>control</code>), you can
                      easily add a help text to guide users when they interact
                      with your forms. See the code example for more details
                      about usage.
                    </p>
                    <a class="code-trigger">
                      <Icon icon="feather:code" class="open" />
                      <Icon icon="feather:x" class="close" />
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="field">
                      <div class="control">
                        <input
                          type="text"
                          class="input"
                          placeholder="Username"
                        />
                      </div>
                      <p class="help">Choose a nice username</p>
                    </div>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;div class=&#x22;field&#x22;&#x3E;
    &#x3C;div class=&#x22;control&#x22;&#x3E;
        &#x3C;input type=&#x22;text&#x22; class=&#x22;input&#x22; placeholder=&#x22;Username&#x22;&#x3E;
    &#x3C;/div&#x3E;
    &#x3C;p class=&#x22;help&#x22;&#x3E;Choose a nice username&#x3C;/p&#x3E;
&#x3C;/div&#x3E;
</code></pre>
                    </div>
                  </div>
                </div>

                <!--Rounded Input-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Rounded Input</h3>
                    <p>
                      An input form control can have rounded edges. To apply a
                      rounded style to an input, simply add the
                      <code>is-rounded</code> class to the
                      <code>input</code> element. See the code example for more
                      details about usage.
                    </p>
                    <a class="code-trigger">
                      <Icon icon="feather:code" class="open" />
                      <Icon icon="feather:x" class="close" />
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="field">
                      <div class="control">
                        <input
                          type="text"
                          class="input is-rounded"
                          placeholder="Username"
                        />
                      </div>
                    </div>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;div class=&#x22;field&#x22;&#x3E;
    &#x3C;div class=&#x22;control&#x22;&#x3E;
        &#x3C;input type=&#x22;text&#x22; class=&#x22;input is-rounded&#x22; placeholder=&#x22;Username&#x22;&#x3E;
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre>
                    </div>
                  </div>
                </div>

                <!--Focus Colors-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Focus Colors</h3>
                    <p>
                      An input can have different border colors when focused.
                      You simply have to add the appropriate color modifier
                      class. Available classes are
                      <code>is-primary-focus</code>,
                      <code>is-success-focus</code>, <code>is-info-focus</code>,
                      <code>is-warning-focus</code>,
                      <code>is-danger-focus</code>.
                    </p>
                    <a class="code-trigger">
                      <Icon icon="feather:code" class="open" />
                      <Icon icon="feather:x" class="close" />
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="field">
                      <div class="control">
                        <input
                          type="text"
                          class="input is-primary-focus"
                          placeholder="Primary"
                        />
                      </div>
                    </div>
                    <div class="field">
                      <div class="control">
                        <input
                          type="text"
                          class="input is-success-focus"
                          placeholder="Success"
                        />
                      </div>
                    </div>
                    <div class="field">
                      <div class="control">
                        <input
                          type="text"
                          class="input is-info-focus"
                          placeholder="Info"
                        />
                      </div>
                    </div>
                    <div class="field">
                      <div class="control">
                        <input
                          type="text"
                          class="input is-warning-focus"
                          placeholder="Warning"
                        />
                      </div>
                    </div>
                    <div class="field">
                      <div class="control">
                        <input
                          type="text"
                          class="input is-danger-focus"
                          placeholder="Danger"
                        />
                      </div>
                    </div>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;div class=&#x22;field&#x22;&#x3E;
    &#x3C;div class=&#x22;control&#x22;&#x3E;
        &#x3C;input type=&#x22;text&#x22; class=&#x22;input&#x22; placeholder=&#x22;Username&#x22;&#x3E;
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre>
                    </div>
                  </div>
                </div>

                <!--Font Awesome-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Font Awesome</h3>
                    <p>
                      Vuero inputs are fully compatible with Font Awesome 5
                      icons. make sure to add a <code>form-icon</code> element
                      inside you wrapping <code>control</code> element. See the
                      code example for more details about usage.
                    </p>
                    <a class="code-trigger">
                      <Icon icon="feather:code" class="open" />
                      <Icon icon="feather:x" class="close" />
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="field">
                      <div class="control has-icon">
                        <input
                          type="text"
                          class="input is-rounded"
                          placeholder="Username"
                        />
                        <div class="form-icon">
                          <i class="fab fa-twitter"></i>
                        </div>
                      </div>
                    </div>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;div class=&#x22;field&#x22;&#x3E;
    &#x3C;div class=&#x22;control has-icon&#x22;&#x3E;
        &#x3C;input type=&#x22;text&#x22; class=&#x22;input is-rounded&#x22; placeholder=&#x22;Username&#x22;&#x3E;
        &#x3C;div class=&#x22;form-icon&#x22;&#x3E;
            &#x3C;i class=&#x22;fab fa-twitter&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;/div&#x3E;
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre>
                    </div>
                  </div>
                </div>

                <!--Line Icons-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Line Icons</h3>
                    <p>
                      Vuero inputs are fully compatible with Line Icons. make
                      sure to add a <code>form-icon</code> element inside you
                      wrapping <code>control</code> element. See the code
                      example for more details about usage.
                    </p>
                    <a class="code-trigger">
                      <Icon icon="feather:code" class="open" />
                      <Icon icon="feather:x" class="close" />
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="field">
                      <div class="control has-icon">
                        <input
                          type="text"
                          class="input"
                          placeholder="Company"
                        />
                        <div class="form-icon">
                          <i class="lnil lnil-briefcase"></i>
                        </div>
                      </div>
                    </div>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;div class=&#x22;field&#x22;&#x3E;
    &#x3C;div class=&#x22;control has-icon&#x22;&#x3E;
        &#x3C;input type=&#x22;text&#x22; class=&#x22;input&#x22; placeholder=&#x22;Company&#x22;&#x3E;
        &#x3C;div class=&#x22;form-icon&#x22;&#x3E;
            &#x3C;i class=&#x22;lnil lnil-briefcase&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;/div&#x3E;
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre>
                    </div>
                  </div>
                </div>

                <!--Feather Icons-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Feather Icons</h3>
                    <p>
                      Vuero inputs are fully compatible with Feather Icons. make
                      sure to add a <code>form-icon</code> element inside you
                      wrapping <code>control</code> element. See the code
                      example for more details about usage.
                    </p>
                    <a class="code-trigger">
                      <Icon icon="feather:code" class="open" />
                      <Icon icon="feather:x" class="close" />
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="field">
                      <div class="control has-icon">
                        <input
                          type="text"
                          class="input is-rounded"
                          placeholder="Github URL"
                        />
                        <div class="form-icon">
                          <Icon icon="feather:github" />
                        </div>
                      </div>
                    </div>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;div class=&#x22;field&#x22;&#x3E;
    &#x3C;div class=&#x22;control has-icon&#x22;&#x3E;
        &#x3C;input type=&#x22;text&#x22; class=&#x22;input is-rounded&#x22; placeholder=&#x22;Github URL&#x22;&#x3E;
        &#x3C;div class=&#x22;form-icon&#x22;&#x3E;
            &#x3C;i data-feather=&#x22;github&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;/div&#x3E;
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre>
                    </div>
                  </div>
                </div>

                <!--Loading State-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Loading Input</h3>
                    <p>
                      An input can be shown in a loading state. To apply that
                      style, simply add the <code>is-loading</code> class to the
                      wrapping <code>control</code> element.
                    </p>
                    <a class="code-trigger">
                      <Icon icon="feather:code" class="open" />
                      <Icon icon="feather:x" class="close" />
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="field">
                      <div class="control is-loading">
                        <input
                          type="text"
                          class="input"
                          placeholder="Username"
                        />
                      </div>
                    </div>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;div class=&#x22;field&#x22;&#x3E;
    &#x3C;div class=&#x22;control is-loading&#x22;&#x3E;
        &#x3C;input type=&#x22;text&#x22; class=&#x22;input&#x22; placeholder=&#x22;Username&#x22;&#x3E;
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre>
                    </div>
                  </div>
                </div>

                <!--Disabled Input-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Disabled Input</h3>
                    <p>
                      An input can be shown in a disabled state. To apply that
                      style, simply add the <code>disabled</code> atribute to
                      the target <code>input</code> element.
                    </p>
                    <a class="code-trigger">
                      <Icon icon="feather:code" class="open" />
                      <Icon icon="feather:x" class="close" />
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="field">
                      <div class="control">
                        <input
                          type="text"
                          class="input"
                          placeholder="Username"
                          disabled
                        />
                      </div>
                    </div>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;div class=&#x22;field&#x22;&#x3E;
    &#x3C;div class=&#x22;control&#x22;&#x3E;
        &#x3C;input type=&#x22;text&#x22; class=&#x22;input&#x22; placeholder=&#x22;Username&#x22; disabled&#x3E;
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre>
                    </div>
                  </div>
                </div>

                <!--Validation-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Validation</h3>
                    <p>
                      Vuero offers input validation styles to go with any type
                      of form validation library you could use in your project.
                      It's CSS based only and gives you a lot of freedom. See
                      the code examples for more details about usage.
                    </p>
                    <a class="code-trigger">
                      <Icon icon="feather:code" class="open" />
                      <Icon icon="feather:x" class="close" />
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="field">
                      <div class="control has-icon has-validation has-success">
                        <input
                          type="text"
                          class="input"
                          placeholder="Username"
                          value="superman"
                        />
                        <div class="form-icon">
                          <Icon icon="feather:user" />
                        </div>
                        <div class="validation-icon is-success">
                          <Icon icon="feather:check" />
                        </div>
                        <div class="validation-icon is-error">
                          <Icon icon="feather:x" />
                        </div>
                      </div>
                      <p class="help success-text">Looks like we're good</p>
                    </div>

                    <div class="field">
                      <div class="control has-icon has-validation has-error">
                        <input
                          type="password"
                          class="input"
                          placeholder="Password"
                          value="fefete6ht"
                        />
                        <div class="form-icon">
                          <Icon icon="feather:lock" />
                        </div>
                        <div class="validation-icon is-success">
                          <Icon icon="feather:check" />
                        </div>
                        <div class="validation-icon is-error">
                          <Icon icon="feather:x" />
                        </div>
                      </div>
                      <p class="help danger-text">Incorrect password</p>
                    </div>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;div class=&#x22;field&#x22;&#x3E;
    &#x3C;div class=&#x22;control has-icon has-validation has-success&#x22;&#x3E;
        &#x3C;input type=&#x22;text&#x22; class=&#x22;input&#x22; placeholder=&#x22;Username&#x22; value=&#x22;superman&#x22;&#x3E;
        &#x3C;div class=&#x22;form-icon&#x22;&#x3E;
            &#x3C;i data-feather=&#x22;user&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;/div&#x3E;
        &#x3C;div class=&#x22;validation-icon is-success&#x22;&#x3E;
            &#x3C;i data-feather=&#x22;check&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;/div&#x3E;
        &#x3C;div class=&#x22;validation-icon is-error&#x22;&#x3E;
            &#x3C;i data-feather=&#x22;x&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;/div&#x3E;
    &#x3C;/div&#x3E;
    &#x3C;p class=&#x22;help success-text&#x22;&#x3E;Looks like we&#x27;re good&#x3C;/p&#x3E;
&#x3C;/div&#x3E;

&#x3C;div class=&#x22;field&#x22;&#x3E;
    &#x3C;div class=&#x22;control has-icon has-validation has-error&#x22;&#x3E;
        &#x3C;input type=&#x22;password&#x22; class=&#x22;input&#x22; placeholder=&#x22;Password&#x22; value=&#x22;fefete6ht&#x22;&#x3E;
        &#x3C;div class=&#x22;form-icon&#x22;&#x3E;
            &#x3C;i data-feather=&#x22;lock&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;/div&#x3E;
        &#x3C;div class=&#x22;validation-icon is-success&#x22;&#x3E;
            &#x3C;i data-feather=&#x22;check&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;/div&#x3E;
        &#x3C;div class=&#x22;validation-icon is-error&#x22;&#x3E;
            &#x3C;i data-feather=&#x22;x&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;/div&#x3E;
    &#x3C;/div&#x3E;
    &#x3C;p class=&#x22;help danger-text&#x22;&#x3E;Incorrect password&#x3C;/p&#x3E;
&#x3C;/div&#x3E;
</code></pre>
                    </div>
                  </div>
                </div>

                <!--Validation rounded-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Validation Rounded</h3>
                    <p>
                      Vuero offers input validation styles to go with any type
                      of form validation library you could use in your project.
                      It's CSS based only and gives you a lot of freedom. See
                      the code examples for more details about usage.
                    </p>
                    <a class="code-trigger">
                      <Icon icon="feather:code" class="open" />
                      <Icon icon="feather:x" class="close" />
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="field">
                      <div class="control has-icon has-validation has-success">
                        <input
                          type="text"
                          class="input is-rounded"
                          placeholder="Username"
                          value="superman"
                        />
                        <div class="form-icon">
                          <Icon icon="feather:user" />
                        </div>
                        <div class="validation-icon is-success">
                          <Icon icon="feather:check" />
                        </div>
                        <div class="validation-icon is-error">
                          <Icon icon="feather:x" />
                        </div>
                      </div>
                      <p class="help success-text">Looks like we're good</p>
                    </div>

                    <div class="field">
                      <div class="control has-icon has-validation has-error">
                        <input
                          type="password"
                          class="input is-rounded"
                          placeholder="Password"
                          value="fefete6ht"
                        />
                        <div class="form-icon">
                          <Icon icon="feather:lock" />
                        </div>
                        <div class="validation-icon is-success">
                          <Icon icon="feather:check" />
                        </div>
                        <div class="validation-icon is-error">
                          <Icon icon="feather:x" />
                        </div>
                      </div>
                      <p class="help danger-text">Incorrect password</p>
                    </div>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;div class=&#x22;field&#x22;&#x3E;
    &#x3C;div class=&#x22;control has-icon has-validation has-success&#x22;&#x3E;
        &#x3C;input type=&#x22;text&#x22; class=&#x22;input is-rounded&#x22; placeholder=&#x22;Username&#x22; value=&#x22;superman&#x22;&#x3E;
        &#x3C;div class=&#x22;form-icon&#x22;&#x3E;
            &#x3C;i data-feather=&#x22;user&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;/div&#x3E;
        &#x3C;div class=&#x22;validation-icon is-success&#x22;&#x3E;
            &#x3C;i data-feather=&#x22;check&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;/div&#x3E;
        &#x3C;div class=&#x22;validation-icon is-error&#x22;&#x3E;
            &#x3C;i data-feather=&#x22;x&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;/div&#x3E;
    &#x3C;/div&#x3E;
    &#x3C;p class=&#x22;help success-text&#x22;&#x3E;Looks like we&#x27;re good&#x3C;/p&#x3E;
&#x3C;/div&#x3E;

&#x3C;div class=&#x22;field&#x22;&#x3E;
    &#x3C;div class=&#x22;control has-icon has-validation has-error&#x22;&#x3E;
        &#x3C;input type=&#x22;password&#x22; class=&#x22;input is-rounded&#x22; placeholder=&#x22;Password&#x22; value=&#x22;fefete6ht&#x22;&#x3E;
        &#x3C;div class=&#x22;form-icon&#x22;&#x3E;
            &#x3C;i data-feather=&#x22;lock&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;/div&#x3E;
        &#x3C;div class=&#x22;validation-icon is-success&#x22;&#x3E;
            &#x3C;i data-feather=&#x22;check&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;/div&#x3E;
        &#x3C;div class=&#x22;validation-icon is-error&#x22;&#x3E;
            &#x3C;i data-feather=&#x22;x&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;/div&#x3E;
    &#x3C;/div&#x3E;
    &#x3C;p class=&#x22;help danger-text&#x22;&#x3E;Incorrect password&#x3C;/p&#x3E;
&#x3C;/div&#x3E;
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

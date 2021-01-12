<script setup lang="ts">
import { useTitle } from '@vueuse/core'

useTitle('Elements - Forms Custom - Vuero')
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
              <h1 class="title is-4">Custom</h1>
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
                    <span>Custom</span>
                  </a>
                </li>
              </ul>
            </nav>

            <div class="columns">
              <div class="column is-12">
                <!--H Select-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">H Select</h3>
                    <p>
                      Vuero also provides from scratch form controls like this H
                      Select, in replacement of the native <code>select</code>.
                      It is controled with a mix of CSS and javascript and plays
                      quite nicely with modern designs. Please refer to the code
                      examples for more details about usage.
                    </p>
                    <a class="code-trigger">
                      <Icon icon="feather:code" class="open" />
                      <Icon icon="feather:x" class="close" />
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="field demo-select">
                      <div class="control">
                        <div class="h-select">
                          <div class="select-box">
                            <span>Select a Hero</span>
                          </div>
                          <div class="select-icon">
                            <Icon icon="feather:chevron-down" />
                          </div>
                          <div class="select-drop has-slimscroll-sm">
                            <div class="drop-inner">
                              <div class="option-row">
                                <input type="radio" name="hero_select" />
                                <div class="option-meta">
                                  <span>Superman</span>
                                </div>
                              </div>
                              <div class="option-row">
                                <input type="radio" name="hero_select" />
                                <div class="option-meta">
                                  <span>Batman</span>
                                </div>
                              </div>
                              <div class="option-row">
                                <input type="radio" name="hero_select" />
                                <div class="option-meta">
                                  <span>Deadpool</span>
                                </div>
                              </div>
                              <div class="option-row">
                                <input type="radio" name="hero_select" />
                                <div class="option-meta">
                                  <span>Spawn</span>
                                </div>
                              </div>
                              <div class="option-row">
                                <input type="radio" name="hero_select" />
                                <div class="option-meta">
                                  <span>Galactus</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;div class=&#x22;field&#x22;&#x3E;
    &#x3C;div class=&#x22;control&#x22;&#x3E;
        &#x3C;div class=&#x22;h-select&#x22;&#x3E;
            &#x3C;div class=&#x22;select-box&#x22;&#x3E;
                &#x3C;span&#x3E;Select a Hero&#x3C;/span&#x3E;
            &#x3C;/div&#x3E;
            &#x3C;div class=&#x22;select-icon&#x22;&#x3E;
                &#x3C;i data-feather=&#x22;chevron-down&#x22;&#x3E;&#x3C;/i&#x3E;
            &#x3C;/div&#x3E;
            &#x3C;div class=&#x22;select-drop has-slimscroll-sm&#x22;&#x3E;
                &#x3C;div class=&#x22;drop-inner&#x22;&#x3E;
                    &#x3C;div class=&#x22;option-row&#x22;&#x3E;
                        &#x3C;input type=&#x22;radio&#x22; name=&#x22;hero_select&#x22;&#x3E;
                        &#x3C;div class=&#x22;option-meta&#x22;&#x3E;
                            &#x3C;span&#x3E;Superman&#x3C;/span&#x3E;
                        &#x3C;/div&#x3E;
                    &#x3C;/div&#x3E;
                    &#x3C;div class=&#x22;option-row&#x22;&#x3E;
                        &#x3C;input type=&#x22;radio&#x22; name=&#x22;hero_select&#x22;&#x3E;
                        &#x3C;div class=&#x22;option-meta&#x22;&#x3E;
                            &#x3C;span&#x3E;Batman&#x3C;/span&#x3E;
                        &#x3C;/div&#x3E;
                    &#x3C;/div&#x3E;
                    &#x3C;div class=&#x22;option-row&#x22;&#x3E;
                        &#x3C;input type=&#x22;radio&#x22; name=&#x22;hero_select&#x22;&#x3E;
                        &#x3C;div class=&#x22;option-meta&#x22;&#x3E;
                            &#x3C;span&#x3E;Deadpool&#x3C;/span&#x3E;
                        &#x3C;/div&#x3E;
                    &#x3C;/div&#x3E;
                    &#x3C;div class=&#x22;option-row&#x22;&#x3E;
                        &#x3C;input type=&#x22;radio&#x22; name=&#x22;hero_select&#x22;&#x3E;
                        &#x3C;div class=&#x22;option-meta&#x22;&#x3E;
                            &#x3C;span&#x3E;Spawn&#x3C;/span&#x3E;
                        &#x3C;/div&#x3E;
                    &#x3C;/div&#x3E;
                    &#x3C;div class=&#x22;option-row&#x22;&#x3E;
                        &#x3C;input type=&#x22;radio&#x22; name=&#x22;hero_select&#x22;&#x3E;
                        &#x3C;div class=&#x22;option-meta&#x22;&#x3E;
                            &#x3C;span&#x3E;Galactus&#x3C;/span&#x3E;
                        &#x3C;/div&#x3E;
                    &#x3C;/div&#x3E;
                &#x3C;/div&#x3E;
            &#x3C;/div&#x3E;
        &#x3C;/div&#x3E;
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre>
                    </div>
                  </div>
                </div>

                <!--Rounded H Select-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Rounded H Select</h3>
                    <p>
                      The H Select can have rounded edges like other form
                      controls. Simply add the <code>is-rounded</code> class to
                      the <code>h-select</code> element. Please refer to the
                      code example for more details about usage.
                    </p>
                    <a class="code-trigger">
                      <Icon icon="feather:code" class="open" />
                      <Icon icon="feather:x" class="close" />
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="field demo-select">
                      <div class="control">
                        <div class="h-select is-rounded">
                          <div class="select-box">
                            <span>Select a Hero</span>
                          </div>
                          <div class="select-icon">
                            <Icon icon="feather:chevron-down" />
                          </div>
                          <div class="select-drop has-slimscroll-sm">
                            <div class="drop-inner">
                              <div class="option-row">
                                <input type="radio" name="hero_select" />
                                <div class="option-meta">
                                  <span>Superman</span>
                                </div>
                              </div>
                              <div class="option-row">
                                <input type="radio" name="hero_select" />
                                <div class="option-meta">
                                  <span>Batman</span>
                                </div>
                              </div>
                              <div class="option-row">
                                <input type="radio" name="hero_select" />
                                <div class="option-meta">
                                  <span>Deadpool</span>
                                </div>
                              </div>
                              <div class="option-row">
                                <input type="radio" name="hero_select" />
                                <div class="option-meta">
                                  <span>Spawn</span>
                                </div>
                              </div>
                              <div class="option-row">
                                <input type="radio" name="hero_select" />
                                <div class="option-meta">
                                  <span>Galactus</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;div class=&#x22;field&#x22;&#x3E;
    &#x3C;div class=&#x22;control&#x22;&#x3E;
        &#x3C;div class=&#x22;h-select is-rounded&#x22;&#x3E;
            &#x3C;div class=&#x22;select-box&#x22;&#x3E;
                &#x3C;span&#x3E;Select a Hero&#x3C;/span&#x3E;
            &#x3C;/div&#x3E;
            &#x3C;div class=&#x22;select-icon&#x22;&#x3E;
                &#x3C;i data-feather=&#x22;chevron-down&#x22;&#x3E;&#x3C;/i&#x3E;
            &#x3C;/div&#x3E;
            &#x3C;div class=&#x22;select-drop has-slimscroll-sm&#x22;&#x3E;
                &#x3C;div class=&#x22;drop-inner&#x22;&#x3E;
                    &#x3C;div class=&#x22;option-row&#x22;&#x3E;
                        &#x3C;input type=&#x22;radio&#x22; name=&#x22;hero_select&#x22;&#x3E;
                        &#x3C;div class=&#x22;option-meta&#x22;&#x3E;
                            &#x3C;span&#x3E;Superman&#x3C;/span&#x3E;
                        &#x3C;/div&#x3E;
                    &#x3C;/div&#x3E;
                    &#x3C;div class=&#x22;option-row&#x22;&#x3E;
                        &#x3C;input type=&#x22;radio&#x22; name=&#x22;hero_select&#x22;&#x3E;
                        &#x3C;div class=&#x22;option-meta&#x22;&#x3E;
                            &#x3C;span&#x3E;Batman&#x3C;/span&#x3E;
                        &#x3C;/div&#x3E;
                    &#x3C;/div&#x3E;
                    &#x3C;div class=&#x22;option-row&#x22;&#x3E;
                        &#x3C;input type=&#x22;radio&#x22; name=&#x22;hero_select&#x22;&#x3E;
                        &#x3C;div class=&#x22;option-meta&#x22;&#x3E;
                            &#x3C;span&#x3E;Deadpool&#x3C;/span&#x3E;
                        &#x3C;/div&#x3E;
                    &#x3C;/div&#x3E;
                    &#x3C;div class=&#x22;option-row&#x22;&#x3E;
                        &#x3C;input type=&#x22;radio&#x22; name=&#x22;hero_select&#x22;&#x3E;
                        &#x3C;div class=&#x22;option-meta&#x22;&#x3E;
                            &#x3C;span&#x3E;Spawn&#x3C;/span&#x3E;
                        &#x3C;/div&#x3E;
                    &#x3C;/div&#x3E;
                    &#x3C;div class=&#x22;option-row&#x22;&#x3E;
                        &#x3C;input type=&#x22;radio&#x22; name=&#x22;hero_select&#x22;&#x3E;
                        &#x3C;div class=&#x22;option-meta&#x22;&#x3E;
                            &#x3C;span&#x3E;Galactus&#x3C;/span&#x3E;
                        &#x3C;/div&#x3E;
                    &#x3C;/div&#x3E;
                &#x3C;/div&#x3E;
            &#x3C;/div&#x3E;
        &#x3C;/div&#x3E;
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre>
                    </div>
                  </div>
                </div>

                <!--Rounded H Select-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">With Images</h3>
                    <p>
                      The H Select can display options including rounded images,
                      and is ideal for users or any 1:1 ratio images. Add the
                      <code>has-media</code> class to the target
                      <code>h-select</code>. Please refer to the code example
                      for more details about usage.
                    </p>
                    <a class="code-trigger">
                      <Icon icon="feather:code" class="open" />
                      <Icon icon="feather:x" class="close" />
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="field demo-select">
                      <div class="control">
                        <div class="h-select has-media">
                          <div class="select-box">
                            <span>Select a friend</span>
                          </div>
                          <div class="select-icon">
                            <Icon icon="feather:chevron-down" />
                          </div>
                          <div class="select-drop has-slimscroll-sm">
                            <div class="drop-inner">
                              <div class="option-row">
                                <input type="radio" name="hero_select" />
                                <div class="option-meta">
                                  <img
                                    src="/@images/avatars/photos/8.jpg"
                                    alt=""
                                    @error="
                                      $event.target.src =
                                        'https://via.placeholder.com/150x150'
                                    "
                                  />
                                  <span>Erik K.</span>
                                </div>
                              </div>
                              <div class="option-row">
                                <input type="radio" name="hero_select" />
                                <div class="option-meta">
                                  <img
                                    src="/@images/avatars/photos/12.jpg"
                                    alt=""
                                    @error="
                                      $event.target.src =
                                        'https://via.placeholder.com/150x150'
                                    "
                                  />
                                  <span>Joshua S.</span>
                                </div>
                              </div>
                              <div class="option-row">
                                <input type="radio" name="hero_select" />
                                <div class="option-meta">
                                  <img
                                    src="/@images/avatars/photos/25.jpg"
                                    alt=""
                                    @error="
                                      $event.target.src =
                                        'https://via.placeholder.com/150x150'
                                    "
                                  />
                                  <span>Melany W.</span>
                                </div>
                              </div>
                              <div class="option-row">
                                <input type="radio" name="hero_select" />
                                <div class="option-meta">
                                  <img
                                    src="/@images/avatars/photos/7.jpg"
                                    alt=""
                                    @error="
                                      $event.target.src =
                                        'https://via.placeholder.com/150x150'
                                    "
                                  />
                                  <span>Alice C.</span>
                                </div>
                              </div>
                              <div class="option-row">
                                <input type="radio" name="hero_select" />
                                <div class="option-meta">
                                  <img
                                    src="/@images/avatars/photos/18.jpg"
                                    alt=""
                                    @error="
                                      $event.target.src =
                                        'https://via.placeholder.com/150x150'
                                    "
                                  />
                                  <span>Esteban C.</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;div class=&#x22;field&#x22;&#x3E;
    &#x3C;div class=&#x22;control&#x22;&#x3E;
        &#x3C;div class=&#x22;h-select has-media&#x22;&#x3E;
            &#x3C;div class=&#x22;select-box&#x22;&#x3E;
                &#x3C;span&#x3E;Select a friend&#x3C;/span&#x3E;
            &#x3C;/div&#x3E;
            &#x3C;div class=&#x22;select-icon&#x22;&#x3E;
                &#x3C;i data-feather=&#x22;chevron-down&#x22;&#x3E;&#x3C;/i&#x3E;
            &#x3C;/div&#x3E;
            &#x3C;div class=&#x22;select-drop has-slimscroll-sm&#x22;&#x3E;
                &#x3C;div class=&#x22;drop-inner&#x22;&#x3E;
                    &#x3C;div class=&#x22;option-row&#x22;&#x3E;
                        &#x3C;input type=&#x22;radio&#x22; name=&#x22;hero_select&#x22;&#x3E;
                        &#x3C;div class=&#x22;option-meta&#x22;&#x3E;
                            &#x3C;img src=&#x22;https://via.placeholder.com/150x150&#x22; alt=&#x22;&#x22;&#x3E;
                            &#x3C;span&#x3E;John Smith&#x3C;/span&#x3E;
                        &#x3C;/div&#x3E;
                    &#x3C;/div&#x3E;
                    &#x3C;div class=&#x22;option-row&#x22;&#x3E;
                        &#x3C;input type=&#x22;radio&#x22; name=&#x22;hero_select&#x22;&#x3E;
                        &#x3C;div class=&#x22;option-meta&#x22;&#x3E;
                            &#x3C;img src=&#x22;https://via.placeholder.com/150x150&#x22; alt=&#x22;&#x22;&#x3E;
                            &#x3C;span&#x3E;Alan Kricks&#x3C;/span&#x3E;
                        &#x3C;/div&#x3E;
                    &#x3C;/div&#x3E;
                    &#x3C;div class=&#x22;option-row&#x22;&#x3E;
                        &#x3C;input type=&#x22;radio&#x22; name=&#x22;hero_select&#x22;&#x3E;
                        &#x3C;div class=&#x22;option-meta&#x22;&#x3E;
                            &#x3C;img src=&#x22;https://via.placeholder.com/150x150&#x22; alt=&#x22;&#x22;&#x3E;
                            &#x3C;span&#x3E;Stan Mayfield&#x3C;/span&#x3E;
                        &#x3C;/div&#x3E;
                    &#x3C;/div&#x3E;
                    &#x3C;div class=&#x22;option-row&#x22;&#x3E;
                        &#x3C;input type=&#x22;radio&#x22; name=&#x22;hero_select&#x22;&#x3E;
                        &#x3C;div class=&#x22;option-meta&#x22;&#x3E;
                            &#x3C;img src=&#x22;https://via.placeholder.com/150x150&#x22; alt=&#x22;&#x22;&#x3E;
                            &#x3C;span&#x3E;Mike Templeton&#x3C;/span&#x3E;
                        &#x3C;/div&#x3E;
                    &#x3C;/div&#x3E;
                    &#x3C;div class=&#x22;option-row&#x22;&#x3E;
                        &#x3C;input type=&#x22;radio&#x22; name=&#x22;hero_select&#x22;&#x3E;
                        &#x3C;div class=&#x22;option-meta&#x22;&#x3E;
                            &#x3C;img src=&#x22;https://via.placeholder.com/150x150&#x22; alt=&#x22;&#x22;&#x3E;
                            &#x3C;span&#x3E;Jimmy Cusack&#x3C;/span&#x3E;
                        &#x3C;/div&#x3E;
                    &#x3C;/div&#x3E;
                &#x3C;/div&#x3E;
            &#x3C;/div&#x3E;
        &#x3C;/div&#x3E;
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre>
                    </div>
                  </div>
                </div>

                <!--Rounded H Select-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">With Dropup</h3>
                    <p>
                      The H Select dropdown can be a dropup instead. If you need
                      to use the dropup, simply add the
                      <code>is-dropup</code> class to the target
                      <code>h-select</code> element. Please refer to the code
                      example for more details about usage.
                    </p>
                    <a class="code-trigger">
                      <Icon icon="feather:code" class="open" />
                      <Icon icon="feather:x" class="close" />
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="field demo-select">
                      <div class="control">
                        <div class="h-select is-rounded is-dropup has-media">
                          <div class="select-box">
                            <span>Select a friend</span>
                          </div>
                          <div class="select-icon">
                            <Icon icon="feather:chevron-down" />
                          </div>
                          <div class="select-drop has-slimscroll-sm">
                            <div class="drop-inner">
                              <div class="option-row">
                                <input type="radio" name="hero_select" />
                                <div class="option-meta">
                                  <img
                                    src="/@images/avatars/photos/8.jpg"
                                    alt=""
                                    @error="
                                      $event.target.src =
                                        'https://via.placeholder.com/150x150'
                                    "
                                  />
                                  <span>Erik K.</span>
                                </div>
                              </div>
                              <div class="option-row">
                                <input type="radio" name="hero_select" />
                                <div class="option-meta">
                                  <img
                                    src="/@images/avatars/photos/12.jpg"
                                    alt=""
                                    @error="
                                      $event.target.src =
                                        'https://via.placeholder.com/150x150'
                                    "
                                  />
                                  <span>Joshua S.</span>
                                </div>
                              </div>
                              <div class="option-row">
                                <input type="radio" name="hero_select" />
                                <div class="option-meta">
                                  <img
                                    src="/@images/avatars/photos/25.jpg"
                                    alt=""
                                    @error="
                                      $event.target.src =
                                        'https://via.placeholder.com/150x150'
                                    "
                                  />
                                  <span>Melany W.</span>
                                </div>
                              </div>
                              <div class="option-row">
                                <input type="radio" name="hero_select" />
                                <div class="option-meta">
                                  <img
                                    src="/@images/avatars/photos/7.jpg"
                                    alt=""
                                    @error="
                                      $event.target.src =
                                        'https://via.placeholder.com/150x150'
                                    "
                                  />
                                  <span>Alice C.</span>
                                </div>
                              </div>
                              <div class="option-row">
                                <input type="radio" name="hero_select" />
                                <div class="option-meta">
                                  <img
                                    src="/@images/avatars/photos/18.jpg"
                                    alt=""
                                    @error="
                                      $event.target.src =
                                        'https://via.placeholder.com/150x150'
                                    "
                                  />
                                  <span>Esteban C.</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;div class=&#x22;field&#x22;&#x3E;
    &#x3C;div class=&#x22;control&#x22;&#x3E;
        &#x3C;div class=&#x22;h-select is-rounded is-dropup has-media&#x22;&#x3E;
            &#x3C;div class=&#x22;select-box&#x22;&#x3E;
                &#x3C;span&#x3E;Select a friend&#x3C;/span&#x3E;
            &#x3C;/div&#x3E;
            &#x3C;div class=&#x22;select-icon&#x22;&#x3E;
                &#x3C;i data-feather=&#x22;chevron-down&#x22;&#x3E;&#x3C;/i&#x3E;
            &#x3C;/div&#x3E;
            &#x3C;div class=&#x22;select-drop has-slimscroll-sm&#x22;&#x3E;
                &#x3C;div class=&#x22;drop-inner&#x22;&#x3E;
                    &#x3C;div class=&#x22;option-row&#x22;&#x3E;
                        &#x3C;input type=&#x22;radio&#x22; name=&#x22;hero_select&#x22;&#x3E;
                        &#x3C;div class=&#x22;option-meta&#x22;&#x3E;
                            &#x3C;img src=&#x22;https://via.placeholder.com/150x150&#x22; alt=&#x22;&#x22;&#x3E;
                            &#x3C;span&#x3E;John Smith&#x3C;/span&#x3E;
                        &#x3C;/div&#x3E;
                    &#x3C;/div&#x3E;
                    &#x3C;div class=&#x22;option-row&#x22;&#x3E;
                        &#x3C;input type=&#x22;radio&#x22; name=&#x22;hero_select&#x22;&#x3E;
                        &#x3C;div class=&#x22;option-meta&#x22;&#x3E;
                            &#x3C;img src=&#x22;https://via.placeholder.com/150x150&#x22; alt=&#x22;&#x22;&#x3E;
                            &#x3C;span&#x3E;Alan Kricks&#x3C;/span&#x3E;
                        &#x3C;/div&#x3E;
                    &#x3C;/div&#x3E;
                    &#x3C;div class=&#x22;option-row&#x22;&#x3E;
                        &#x3C;input type=&#x22;radio&#x22; name=&#x22;hero_select&#x22;&#x3E;
                        &#x3C;div class=&#x22;option-meta&#x22;&#x3E;
                            &#x3C;img src=&#x22;https://via.placeholder.com/150x150&#x22; alt=&#x22;&#x22;&#x3E;
                            &#x3C;span&#x3E;Stan Mayfield&#x3C;/span&#x3E;
                        &#x3C;/div&#x3E;
                    &#x3C;/div&#x3E;
                    &#x3C;div class=&#x22;option-row&#x22;&#x3E;
                        &#x3C;input type=&#x22;radio&#x22; name=&#x22;hero_select&#x22;&#x3E;
                        &#x3C;div class=&#x22;option-meta&#x22;&#x3E;
                            &#x3C;img src=&#x22;https://via.placeholder.com/150x150&#x22; alt=&#x22;&#x22;&#x3E;
                            &#x3C;span&#x3E;Mike Templeton&#x3C;/span&#x3E;
                        &#x3C;/div&#x3E;
                    &#x3C;/div&#x3E;
                    &#x3C;div class=&#x22;option-row&#x22;&#x3E;
                        &#x3C;input type=&#x22;radio&#x22; name=&#x22;hero_select&#x22;&#x3E;
                        &#x3C;div class=&#x22;option-meta&#x22;&#x3E;
                            &#x3C;img src=&#x22;https://via.placeholder.com/150x150&#x22; alt=&#x22;&#x22;&#x3E;
                            &#x3C;span&#x3E;Jimmy Cusack&#x3C;/span&#x3E;
                        &#x3C;/div&#x3E;
                    &#x3C;/div&#x3E;
                &#x3C;/div&#x3E;
            &#x3C;/div&#x3E;
        &#x3C;/div&#x3E;
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre>
                    </div>
                  </div>
                </div>

                <!--Rounded H Select-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Basic Combo</h3>
                    <p>
                      Vuero provides built in icon and image combo boxes in
                      replacement of the native html5 <code>select</code>. This
                      element requires javascript to work properly. Please refer
                      to the code example for more details about usage.
                    </p>
                    <a class="code-trigger">
                      <Icon icon="feather:code" class="open" />
                      <Icon icon="feather:x" class="close" />
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="field demo-select">
                      <div class="control is-combo">
                        <div class="combo-label">Service Type</div>
                        <div class="combo-box">
                          <div class="box-inner">
                            <div class="combo-item">
                              <i class="lnil lnil-medical-briefcase"></i>
                              <span class="selected-item">Medicine</span>
                            </div>
                          </div>
                          <div class="box-chevron">
                            <Icon icon="feather:chevron-down" />
                          </div>
                          <div class="box-dropdown">
                            <div class="dropdown-inner has-slimscroll">
                              <ul>
                                <li>
                                  <span class="item-icon">
                                    <i class="lnil lnil-ambulance-alt-1"></i>
                                  </span>
                                  <span class="item-name">Ambulance</span>
                                  <span class="checkmark">
                                    <Icon icon="feather:check" />
                                  </span>
                                </li>
                                <li>
                                  <span class="item-icon">
                                    <i class="lnil lnil-first-aid"></i>
                                  </span>
                                  <span class="item-name">First Aid</span>
                                  <span class="checkmark">
                                    <Icon icon="feather:check" />
                                  </span>
                                </li>
                                <li class="is-active">
                                  <span class="item-icon">
                                    <i class="lnil lnil-medical-briefcase"></i>
                                  </span>
                                  <span class="item-name">Medicine</span>
                                  <span class="checkmark">
                                    <Icon icon="feather:check" />
                                  </span>
                                </li>
                                <li>
                                  <span class="item-icon">
                                    <i class="lnil lnil-hospital-alt-3"></i>
                                  </span>
                                  <span class="item-name">Hospital</span>
                                  <span class="checkmark">
                                    <Icon icon="feather:check" />
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;div class=&#x22;field&#x22;&#x3E;
    &#x3C;div class=&#x22;control is-combo&#x22;&#x3E;
        &#x3C;div class=&#x22;combo-label&#x22;&#x3E;Service Type&#x3C;/div&#x3E;
        &#x3C;div class=&#x22;combo-box&#x22;&#x3E;
            &#x3C;div class=&#x22;box-inner&#x22;&#x3E;
                &#x3C;div class=&#x22;combo-item&#x22;&#x3E;
                    &#x3C;i class=&#x22;lnil lnil-medical-briefcase&#x22;&#x3E;&#x3C;/i&#x3E;
                    &#x3C;span class=&#x22;selected-item&#x22;&#x3E;Medicine&#x3C;/span&#x3E;
                &#x3C;/div&#x3E;
            &#x3C;/div&#x3E;
            &#x3C;div class=&#x22;box-chevron&#x22;&#x3E;
                &#x3C;i data-feather=&#x22;chevron-down&#x22;&#x3E;&#x3C;/i&#x3E;
            &#x3C;/div&#x3E;
            &#x3C;div class=&#x22;box-dropdown&#x22;&#x3E;
                &#x3C;div class=&#x22;dropdown-inner has-slimscroll&#x22;&#x3E;
                    &#x3C;ul&#x3E;
                        &#x3C;li&#x3E;
                            &#x3C;span class=&#x22;item-icon&#x22;&#x3E;
                                &#x3C;i class=&#x22;lnil lnil-ambulance-alt-1&#x22;&#x3E;&#x3C;/i&#x3E;
                            &#x3C;/span&#x3E;
                            &#x3C;span class=&#x22;item-name&#x22;&#x3E;Ambulance&#x3C;/span&#x3E;
                            &#x3C;span class=&#x22;checkmark&#x22;&#x3E;
                                &#x3C;i data-feather=&#x22;check&#x22;&#x3E;&#x3C;/i&#x3E;
                            &#x3C;/span&#x3E;
                        &#x3C;/li&#x3E;
                        &#x3C;li&#x3E;
                            &#x3C;span class=&#x22;item-icon&#x22;&#x3E;
                                &#x3C;i class=&#x22;lnil lnil-first-aid&#x22;&#x3E;&#x3C;/i&#x3E;
                            &#x3C;/span&#x3E;
                            &#x3C;span class=&#x22;item-name&#x22;&#x3E;First Aid&#x3C;/span&#x3E;
                            &#x3C;span class=&#x22;checkmark&#x22;&#x3E;
                                &#x3C;i data-feather=&#x22;check&#x22;&#x3E;&#x3C;/i&#x3E;
                            &#x3C;/span&#x3E;
                        &#x3C;/li&#x3E;
                        &#x3C;li class=&#x22;is-active&#x22;&#x3E;
                            &#x3C;span class=&#x22;item-icon&#x22;&#x3E;
                                &#x3C;i class=&#x22;lnil lnil-medical-briefcase&#x22;&#x3E;&#x3C;/i&#x3E;
                            &#x3C;/span&#x3E;
                            &#x3C;span class=&#x22;item-name&#x22;&#x3E;Medicine&#x3C;/span&#x3E;
                            &#x3C;span class=&#x22;checkmark&#x22;&#x3E;
                                &#x3C;i data-feather=&#x22;check&#x22;&#x3E;&#x3C;/i&#x3E;
                            &#x3C;/span&#x3E;
                        &#x3C;/li&#x3E;
                        &#x3C;li&#x3E;
                            &#x3C;span class=&#x22;item-icon&#x22;&#x3E;
                                &#x3C;i class=&#x22;lnil lnil-hospital-alt-3&#x22;&#x3E;&#x3C;/i&#x3E;
                            &#x3C;/span&#x3E;
                            &#x3C;span class=&#x22;item-name&#x22;&#x3E;Hospital&#x3C;/span&#x3E;
                            &#x3C;span class=&#x22;checkmark&#x22;&#x3E;
                                &#x3C;i data-feather=&#x22;check&#x22;&#x3E;&#x3C;/i&#x3E;
                            &#x3C;/span&#x3E;
                        &#x3C;/li&#x3E;
                    &#x3C;/ul&#x3E;
                &#x3C;/div&#x3E;
            &#x3C;/div&#x3E;
        &#x3C;/div&#x3E;
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre>
                    </div>
                  </div>
                </div>

                <!--Rounded H Select-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Rounded Combo</h3>
                    <p>
                      Like other form controls, the Vuero combo box can have
                      rounded edges. To apply this style, simply add the
                      <code>is-rounded</code> class to the target
                      <code>combo-box</code> element. See the code example for
                      more details about usage.
                    </p>
                    <a class="code-trigger">
                      <Icon icon="feather:code" class="open" />
                      <Icon icon="feather:x" class="close" />
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="field demo-select">
                      <div class="control is-combo">
                        <div class="combo-label">Service Type</div>
                        <div class="combo-box is-rounded">
                          <div class="box-inner">
                            <div class="combo-item">
                              <i class="lnil lnil-medical-briefcase"></i>
                              <span class="selected-item">Medicine</span>
                            </div>
                          </div>
                          <div class="box-chevron">
                            <Icon icon="feather:chevron-down" />
                          </div>
                          <div class="box-dropdown">
                            <div class="dropdown-inner has-slimscroll">
                              <ul>
                                <li>
                                  <span class="item-icon">
                                    <i class="lnil lnil-ambulance-alt-1"></i>
                                  </span>
                                  <span class="item-name">Ambulance</span>
                                  <span class="checkmark">
                                    <Icon icon="feather:check" />
                                  </span>
                                </li>
                                <li>
                                  <span class="item-icon">
                                    <i class="lnil lnil-first-aid"></i>
                                  </span>
                                  <span class="item-name">First Aid</span>
                                  <span class="checkmark">
                                    <Icon icon="feather:check" />
                                  </span>
                                </li>
                                <li class="is-active">
                                  <span class="item-icon">
                                    <i class="lnil lnil-medical-briefcase"></i>
                                  </span>
                                  <span class="item-name">Medicine</span>
                                  <span class="checkmark">
                                    <Icon icon="feather:check" />
                                  </span>
                                </li>
                                <li>
                                  <span class="item-icon">
                                    <i class="lnil lnil-hospital-alt-3"></i>
                                  </span>
                                  <span class="item-name">Hospital</span>
                                  <span class="checkmark">
                                    <Icon icon="feather:check" />
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;div class=&#x22;field&#x22;&#x3E;
    &#x3C;div class=&#x22;control is-combo&#x22;&#x3E;
        &#x3C;div class=&#x22;combo-label&#x22;&#x3E;Service Type&#x3C;/div&#x3E;
        &#x3C;div class=&#x22;combo-box is-rounded&#x22;&#x3E;
            &#x3C;div class=&#x22;box-inner&#x22;&#x3E;
                &#x3C;div class=&#x22;combo-item&#x22;&#x3E;
                    &#x3C;i class=&#x22;lnil lnil-medical-briefcase&#x22;&#x3E;&#x3C;/i&#x3E;
                    &#x3C;span class=&#x22;selected-item&#x22;&#x3E;Medicine&#x3C;/span&#x3E;
                &#x3C;/div&#x3E;
            &#x3C;/div&#x3E;
            &#x3C;div class=&#x22;box-chevron&#x22;&#x3E;
                &#x3C;i data-feather=&#x22;chevron-down&#x22;&#x3E;&#x3C;/i&#x3E;
            &#x3C;/div&#x3E;
            &#x3C;div class=&#x22;box-dropdown&#x22;&#x3E;
                &#x3C;div class=&#x22;dropdown-inner has-slimscroll&#x22;&#x3E;
                    &#x3C;ul&#x3E;
                        &#x3C;li&#x3E;
                            &#x3C;span class=&#x22;item-icon&#x22;&#x3E;
                                &#x3C;i class=&#x22;lnil lnil-ambulance-alt-1&#x22;&#x3E;&#x3C;/i&#x3E;
                            &#x3C;/span&#x3E;
                            &#x3C;span class=&#x22;item-name&#x22;&#x3E;Ambulance&#x3C;/span&#x3E;
                            &#x3C;span class=&#x22;checkmark&#x22;&#x3E;
                                &#x3C;i data-feather=&#x22;check&#x22;&#x3E;&#x3C;/i&#x3E;
                            &#x3C;/span&#x3E;
                        &#x3C;/li&#x3E;
                        &#x3C;li&#x3E;
                            &#x3C;span class=&#x22;item-icon&#x22;&#x3E;
                                &#x3C;i class=&#x22;lnil lnil-first-aid&#x22;&#x3E;&#x3C;/i&#x3E;
                            &#x3C;/span&#x3E;
                            &#x3C;span class=&#x22;item-name&#x22;&#x3E;First Aid&#x3C;/span&#x3E;
                            &#x3C;span class=&#x22;checkmark&#x22;&#x3E;
                                &#x3C;i data-feather=&#x22;check&#x22;&#x3E;&#x3C;/i&#x3E;
                            &#x3C;/span&#x3E;
                        &#x3C;/li&#x3E;
                        &#x3C;li class=&#x22;is-active&#x22;&#x3E;
                            &#x3C;span class=&#x22;item-icon&#x22;&#x3E;
                                &#x3C;i class=&#x22;lnil lnil-medical-briefcase&#x22;&#x3E;&#x3C;/i&#x3E;
                            &#x3C;/span&#x3E;
                            &#x3C;span class=&#x22;item-name&#x22;&#x3E;Medicine&#x3C;/span&#x3E;
                            &#x3C;span class=&#x22;checkmark&#x22;&#x3E;
                                &#x3C;i data-feather=&#x22;check&#x22;&#x3E;&#x3C;/i&#x3E;
                            &#x3C;/span&#x3E;
                        &#x3C;/li&#x3E;
                        &#x3C;li&#x3E;
                            &#x3C;span class=&#x22;item-icon&#x22;&#x3E;
                                &#x3C;i class=&#x22;lnil lnil-hospital-alt-3&#x22;&#x3E;&#x3C;/i&#x3E;
                            &#x3C;/span&#x3E;
                            &#x3C;span class=&#x22;item-name&#x22;&#x3E;Hospital&#x3C;/span&#x3E;
                            &#x3C;span class=&#x22;checkmark&#x22;&#x3E;
                                &#x3C;i data-feather=&#x22;check&#x22;&#x3E;&#x3C;/i&#x3E;
                            &#x3C;/span&#x3E;
                        &#x3C;/li&#x3E;
                    &#x3C;/ul&#x3E;
                &#x3C;/div&#x3E;
            &#x3C;/div&#x3E;
        &#x3C;/div&#x3E;
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre>
                    </div>
                  </div>
                </div>

                <!--Rounded H Select-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Square Image Combo</h3>
                    <p>
                      Instead of the regular icons, Vuero combo boxes can have
                      images instead. The markup is slightly different from the
                      regular combo box. Please refer to the markup for more
                      details about usage.
                    </p>
                    <a class="code-trigger">
                      <Icon icon="feather:code" class="open" />
                      <Icon icon="feather:x" class="close" />
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="field demo-select">
                      <div class="control is-combo">
                        <div class="combo-label">Git type</div>
                        <div class="image-combo-box">
                          <div class="box-inner">
                            <div class="combo-item">
                              <img
                                src="/@images/photo/demo/misc/code.png"
                                alt=""
                                @error="
                                  $event.target.src =
                                    'https://via.placeholder.com/150x150'
                                "
                              />
                              <span class="selected-item"
                                >Select a language</span
                              >
                            </div>
                          </div>
                          <div class="box-chevron">
                            <Icon icon="feather:chevron-down" />
                          </div>
                          <div class="box-dropdown">
                            <div class="dropdown-inner has-slimscroll">
                              <ul>
                                <li>
                                  <span class="item-icon">
                                    <img
                                      src="/@images/icons/stacks/js.svg"
                                      alt=""
                                      @error="
                                        $event.target.src =
                                          'https://via.placeholder.com/150x150'
                                      "
                                    />
                                  </span>
                                  <span class="item-name">Javascript</span>
                                  <span class="checkmark">
                                    <Icon icon="feather:check" />
                                  </span>
                                </li>
                                <li>
                                  <span class="item-icon">
                                    <img
                                      src="/@images/icons/stacks/angular.svg"
                                      alt=""
                                      @error="
                                        $event.target.src =
                                          'https://via.placeholder.com/150x150'
                                      "
                                    />
                                  </span>
                                  <span class="item-name">Angular</span>
                                  <span class="checkmark">
                                    <Icon icon="feather:check" />
                                  </span>
                                </li>
                                <li>
                                  <span class="item-icon">
                                    <img
                                      src="/@images/icons/stacks/html5.svg"
                                      alt=""
                                      @error="
                                        $event.target.src =
                                          'https://via.placeholder.com/150x150'
                                      "
                                    />
                                  </span>
                                  <span class="item-name">Html5</span>
                                  <span class="checkmark">
                                    <Icon icon="feather:check" />
                                  </span>
                                </li>
                                <li>
                                  <span class="item-icon">
                                    <img
                                      src="/@images/icons/stacks/android.svg"
                                      alt=""
                                      @error="
                                        $event.target.src =
                                          'https://via.placeholder.com/150x150'
                                      "
                                    />
                                  </span>
                                  <span class="item-name">Android</span>
                                  <span class="checkmark">
                                    <Icon icon="feather:check" />
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;div class=&#x22;field&#x22;&#x3E;
    &#x3C;div class=&#x22;control is-combo&#x22;&#x3E;
        &#x3C;div class=&#x22;combo-label&#x22;&#x3E;Git type&#x3C;/div&#x3E;
        &#x3C;div class=&#x22;image-combo-box&#x22;&#x3E;
            &#x3C;div class=&#x22;box-inner&#x22;&#x3E;
                &#x3C;div class=&#x22;combo-item&#x22;&#x3E;
                    &#x3C;img src=&#x22;https://via.placeholder.com/150x150&#x22; alt=&#x22;&#x22;&#x3E;
                    &#x3C;span class=&#x22;selected-item&#x22;&#x3E;Select a language&#x3C;/span&#x3E;
                &#x3C;/div&#x3E;
            &#x3C;/div&#x3E;
            &#x3C;div class=&#x22;box-chevron&#x22;&#x3E;
                &#x3C;i data-feather=&#x22;chevron-down&#x22;&#x3E;&#x3C;/i&#x3E;
            &#x3C;/div&#x3E;
            &#x3C;div class=&#x22;box-dropdown&#x22;&#x3E;
                &#x3C;div class=&#x22;dropdown-inner has-slimscroll&#x22;&#x3E;
                    &#x3C;ul&#x3E;
                        &#x3C;li&#x3E;
                            &#x3C;span class=&#x22;item-icon&#x22;&#x3E;
                                &#x3C;img src=&#x22;https://via.placeholder.com/150x150&#x22; alt=&#x22;&#x22;&#x3E;
                            &#x3C;/span&#x3E;
                            &#x3C;span class=&#x22;item-name&#x22;&#x3E;Javascript&#x3C;/span&#x3E;
                            &#x3C;span class=&#x22;checkmark&#x22;&#x3E;
                                &#x3C;i data-feather=&#x22;check&#x22;&#x3E;&#x3C;/i&#x3E;
                            &#x3C;/span&#x3E;
                        &#x3C;/li&#x3E;
                        &#x3C;li&#x3E;
                            &#x3C;span class=&#x22;item-icon&#x22;&#x3E;
                                &#x3C;img src=&#x22;https://via.placeholder.com/150x150&#x22; alt=&#x22;&#x22;&#x3E;
                            &#x3C;/span&#x3E;
                            &#x3C;span class=&#x22;item-name&#x22;&#x3E;Angular&#x3C;/span&#x3E;
                            &#x3C;span class=&#x22;checkmark&#x22;&#x3E;
                                &#x3C;i data-feather=&#x22;check&#x22;&#x3E;&#x3C;/i&#x3E;
                            &#x3C;/span&#x3E;
                        &#x3C;/li&#x3E;
                        &#x3C;li&#x3E;
                            &#x3C;span class=&#x22;item-icon&#x22;&#x3E;
                                &#x3C;img src=&#x22;https://via.placeholder.com/150x150&#x22; alt=&#x22;&#x22;&#x3E;
                            &#x3C;/span&#x3E;
                            &#x3C;span class=&#x22;item-name&#x22;&#x3E;Html5&#x3C;/span&#x3E;
                            &#x3C;span class=&#x22;checkmark&#x22;&#x3E;
                                &#x3C;i data-feather=&#x22;check&#x22;&#x3E;&#x3C;/i&#x3E;
                            &#x3C;/span&#x3E;
                        &#x3C;/li&#x3E;
                        &#x3C;li&#x3E;
                            &#x3C;span class=&#x22;item-icon&#x22;&#x3E;
                                &#x3C;img src=&#x22;https://via.placeholder.com/150x150&#x22; alt=&#x22;&#x22;&#x3E;
                            &#x3C;/span&#x3E;
                            &#x3C;span class=&#x22;item-name&#x22;&#x3E;Android&#x3C;/span&#x3E;
                            &#x3C;span class=&#x22;checkmark&#x22;&#x3E;
                                &#x3C;i data-feather=&#x22;check&#x22;&#x3E;&#x3C;/i&#x3E;
                            &#x3C;/span&#x3E;
                        &#x3C;/li&#x3E;
                    &#x3C;/ul&#x3E;
                &#x3C;/div&#x3E;
            &#x3C;/div&#x3E;
        &#x3C;/div&#x3E;
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre>
                    </div>
                  </div>
                </div>

                <!--Rounded H Select-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Rounded Image Combo</h3>
                    <p>
                      Image combo boxes can have rounded images instead of
                      squared ones. To apply that style, simply add the
                      <code>has-rounded-images</code> class to the target
                      <code>image-combo-box</code> element. See markup for more
                      details about usage.
                    </p>
                    <a class="code-trigger">
                      <Icon icon="feather:code" class="open" />
                      <Icon icon="feather:x" class="close" />
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="field demo-select">
                      <div class="control is-combo">
                        <div class="combo-label">Language</div>
                        <div class="image-combo-box has-rounded-images">
                          <div class="box-inner">
                            <div class="combo-item">
                              <img
                                src="/@images/photo/demo/misc/code.png"
                                alt=""
                                @error="
                                  $event.target.src =
                                    'https://via.placeholder.com/150x150'
                                "
                              />
                              <span class="selected-item"
                                >Select a language</span
                              >
                            </div>
                          </div>
                          <div class="box-chevron">
                            <Icon icon="feather:chevron-down" />
                          </div>
                          <div class="box-dropdown">
                            <div class="dropdown-inner has-slimscroll">
                              <ul>
                                <li>
                                  <span class="item-icon">
                                    <img
                                      src="/@images/icons/stacks/js.svg"
                                      alt=""
                                      @error="
                                        $event.target.src =
                                          'https://via.placeholder.com/150x150'
                                      "
                                    />
                                  </span>
                                  <span class="item-name">Javascript</span>
                                  <span class="checkmark">
                                    <Icon icon="feather:check" />
                                  </span>
                                </li>
                                <li>
                                  <span class="item-icon">
                                    <img
                                      src="/@images/icons/stacks/angular.svg"
                                      alt=""
                                      @error="
                                        $event.target.src =
                                          'https://via.placeholder.com/150x150'
                                      "
                                    />
                                  </span>
                                  <span class="item-name">Angular</span>
                                  <span class="checkmark">
                                    <Icon icon="feather:check" />
                                  </span>
                                </li>
                                <li>
                                  <span class="item-icon">
                                    <img
                                      src="/@images/icons/stacks/html5.svg"
                                      alt=""
                                      @error="
                                        $event.target.src =
                                          'https://via.placeholder.com/150x150'
                                      "
                                    />
                                  </span>
                                  <span class="item-name">Html5</span>
                                  <span class="checkmark">
                                    <Icon icon="feather:check" />
                                  </span>
                                </li>
                                <li>
                                  <span class="item-icon">
                                    <img
                                      src="/@images/icons/stacks/android.svg"
                                      alt=""
                                      @error="
                                        $event.target.src =
                                          'https://via.placeholder.com/150x150'
                                      "
                                    />
                                  </span>
                                  <span class="item-name">Android</span>
                                  <span class="checkmark">
                                    <Icon icon="feather:check" />
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;div class=&#x22;field&#x22;&#x3E;
    &#x3C;div class=&#x22;control is-combo&#x22;&#x3E;
        &#x3C;div class=&#x22;combo-label&#x22;&#x3E;Language&#x3C;/div&#x3E;
        &#x3C;div class=&#x22;image-combo-box has-rounded-images&#x22;&#x3E;
            &#x3C;div class=&#x22;box-inner&#x22;&#x3E;
                &#x3C;div class=&#x22;combo-item&#x22;&#x3E;
                    &#x3C;img src=&#x22;https://via.placeholder.com/150x150&#x22; src=&#x22;assets/img/photo/demo/misc/code.png&#x22; alt=&#x22;&#x22;&#x3E;
                    &#x3C;span class=&#x22;selected-item&#x22;&#x3E;Select a language&#x3C;/span&#x3E;
                &#x3C;/div&#x3E;
            &#x3C;/div&#x3E;
            &#x3C;div class=&#x22;box-chevron&#x22;&#x3E;
                &#x3C;i data-feather=&#x22;chevron-down&#x22;&#x3E;&#x3C;/i&#x3E;
            &#x3C;/div&#x3E;
            &#x3C;div class=&#x22;box-dropdown&#x22;&#x3E;
                &#x3C;div class=&#x22;dropdown-inner has-slimscroll&#x22;&#x3E;
                    &#x3C;ul&#x3E;
                        &#x3C;li&#x3E;
                            &#x3C;span class=&#x22;item-icon&#x22;&#x3E;
                                &#x3C;img src=&#x22;https://via.placeholder.com/150x150&#x22; alt=&#x22;&#x22;&#x3E;
                            &#x3C;/span&#x3E;
                            &#x3C;span class=&#x22;item-name&#x22;&#x3E;Javascript&#x3C;/span&#x3E;
                            &#x3C;span class=&#x22;checkmark&#x22;&#x3E;
                                &#x3C;i data-feather=&#x22;check&#x22;&#x3E;&#x3C;/i&#x3E;
                            &#x3C;/span&#x3E;
                        &#x3C;/li&#x3E;
                        &#x3C;li&#x3E;
                            &#x3C;span class=&#x22;item-icon&#x22;&#x3E;
                                &#x3C;img src=&#x22;https://via.placeholder.com/150x150&#x22; alt=&#x22;&#x22;&#x3E;
                            &#x3C;/span&#x3E;
                            &#x3C;span class=&#x22;item-name&#x22;&#x3E;Angular&#x3C;/span&#x3E;
                            &#x3C;span class=&#x22;checkmark&#x22;&#x3E;
                                &#x3C;i data-feather=&#x22;check&#x22;&#x3E;&#x3C;/i&#x3E;
                            &#x3C;/span&#x3E;
                        &#x3C;/li&#x3E;
                        &#x3C;li&#x3E;
                            &#x3C;span class=&#x22;item-icon&#x22;&#x3E;
                                &#x3C;img src=&#x22;https://via.placeholder.com/150x150&#x22; alt=&#x22;&#x22;&#x3E;
                            &#x3C;/span&#x3E;
                            &#x3C;span class=&#x22;item-name&#x22;&#x3E;Html5&#x3C;/span&#x3E;
                            &#x3C;span class=&#x22;checkmark&#x22;&#x3E;
                                &#x3C;i data-feather=&#x22;check&#x22;&#x3E;&#x3C;/i&#x3E;
                            &#x3C;/span&#x3E;
                        &#x3C;/li&#x3E;
                        &#x3C;li&#x3E;
                            &#x3C;span class=&#x22;item-icon&#x22;&#x3E;
                                &#x3C;img src=&#x22;https://via.placeholder.com/150x150&#x22; alt=&#x22;&#x22;&#x3E;
                            &#x3C;/span&#x3E;
                            &#x3C;span class=&#x22;item-name&#x22;&#x3E;Android&#x3C;/span&#x3E;
                            &#x3C;span class=&#x22;checkmark&#x22;&#x3E;
                                &#x3C;i data-feather=&#x22;check&#x22;&#x3E;&#x3C;/i&#x3E;
                            &#x3C;/span&#x3E;
                        &#x3C;/li&#x3E;
                    &#x3C;/ul&#x3E;
                &#x3C;/div&#x3E;
            &#x3C;/div&#x3E;
        &#x3C;/div&#x3E;
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre>
                    </div>
                  </div>
                </div>

                <!--Rounded H Select-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Stacked Image Combo</h3>
                    <p>
                      Regular image combo boxes can be enhanced to become
                      stacked image combo boxes. More than one option can be
                      selected, making the images stack in the main combo box.
                      Please refer to the markup for more details about usage.
                    </p>
                    <a class="code-trigger">
                      <Icon icon="feather:code" class="open" />
                      <Icon icon="feather:x" class="close" />
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="field demo-select">
                      <div class="control is-combo">
                        <div class="combo-label">Languages</div>
                        <div class="stacked-combo-box has-rounded-images">
                          <div class="box-inner">
                            <div class="combo-item">
                              <img
                                id="skill-placeholder"
                                src="/@images/photo/demo/misc/code.png"
                                alt=""
                                @error="
                                  $event.target.src =
                                    'https://via.placeholder.com/150x150'
                                "
                              />
                              <span class="selected-item"
                                >Select one or more languages</span
                              >
                            </div>
                          </div>
                          <div class="box-chevron">
                            <Icon icon="feather:chevron-down" />
                          </div>
                          <div class="box-dropdown">
                            <div class="dropdown-inner has-slimscroll">
                              <ul>
                                <li data-skill="javascript-skill">
                                  <span class="item-icon">
                                    <img
                                      src="/@images/icons/stacks/js.svg"
                                      alt=""
                                      @error="
                                        $event.target.src =
                                          'https://via.placeholder.com/150x150'
                                      "
                                    />
                                  </span>
                                  <span class="item-name">Javascript</span>
                                  <span class="checkmark">
                                    <Icon icon="feather:check" />
                                  </span>
                                </li>
                                <li data-skill="angular-skill">
                                  <span class="item-icon">
                                    <img
                                      src="/@images/icons/stacks/angular.svg"
                                      alt=""
                                      @error="
                                        $event.target.src =
                                          'https://via.placeholder.com/150x150'
                                      "
                                    />
                                  </span>
                                  <span class="item-name">Angular</span>
                                  <span class="checkmark">
                                    <Icon icon="feather:check" />
                                  </span>
                                </li>
                                <li data-skill="reactjs-skill">
                                  <span class="item-icon">
                                    <img
                                      src="/@images/icons/stacks/reactjs.svg"
                                      alt=""
                                      @error="
                                        $event.target.src =
                                          'https://via.placeholder.com/150x150'
                                      "
                                    />
                                  </span>
                                  <span class="item-name">Reactjs</span>
                                  <span class="checkmark">
                                    <Icon icon="feather:check" />
                                  </span>
                                </li>
                                <li data-skill="vuejs-skill">
                                  <span class="item-icon">
                                    <img
                                      src="/@images/icons/stacks/vuejs.svg"
                                      alt=""
                                      @error="
                                        $event.target.src =
                                          'https://via.placeholder.com/150x150'
                                      "
                                    />
                                  </span>
                                  <span class="item-name">Vuejs</span>
                                  <span class="checkmark">
                                    <Icon icon="feather:check" />
                                  </span>
                                </li>
                                <li data-skill="nodejs-skill">
                                  <span class="item-icon">
                                    <img
                                      src="/@images/icons/stacks/nodejs.svg"
                                      alt=""
                                      @error="
                                        $event.target.src =
                                          'https://via.placeholder.com/150x150'
                                      "
                                    />
                                  </span>
                                  <span class="item-name">Nodejs</span>
                                  <span class="checkmark">
                                    <Icon icon="feather:check" />
                                  </span>
                                </li>
                                <li data-skill="android-skill">
                                  <span class="item-icon">
                                    <img
                                      src="/@images/icons/stacks/android.svg"
                                      alt=""
                                      @error="
                                        $event.target.src =
                                          'https://via.placeholder.com/150x150'
                                      "
                                    />
                                  </span>
                                  <span class="item-name">Android</span>
                                  <span class="checkmark">
                                    <Icon icon="feather:check" />
                                  </span>
                                </li>
                                <li data-skill="swift-skill">
                                  <span class="item-icon">
                                    <img
                                      src="/@images/icons/stacks/swift.svg"
                                      alt=""
                                      @error="
                                        $event.target.src =
                                          'https://via.placeholder.com/150x150'
                                      "
                                    />
                                  </span>
                                  <span class="item-name">Swift</span>
                                  <span class="checkmark">
                                    <Icon icon="feather:check" />
                                  </span>
                                </li>
                                <li data-skill="wordpress-skill">
                                  <span class="item-icon">
                                    <img
                                      src="/@images/icons/stacks/wordpress.svg"
                                      alt=""
                                      @error="
                                        $event.target.src =
                                          'https://via.placeholder.com/150x150'
                                      "
                                    />
                                  </span>
                                  <span class="item-name">WordPress</span>
                                  <span class="checkmark">
                                    <Icon icon="feather:check" />
                                  </span>
                                </li>
                                <li data-skill="laravel-skill">
                                  <span class="item-icon">
                                    <img
                                      src="/@images/icons/stacks/laravel.svg"
                                      alt=""
                                      @error="
                                        $event.target.src =
                                          'https://via.placeholder.com/150x150'
                                      "
                                    />
                                  </span>
                                  <span class="item-name">Laravel</span>
                                  <span class="checkmark">
                                    <Icon icon="feather:check" />
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;div class=&#x22;field&#x22;&#x3E;
    &#x3C;div class=&#x22;control is-combo&#x22;&#x3E;
        &#x3C;div class=&#x22;combo-label&#x22;&#x3E;Languages&#x3C;/div&#x3E;
        &#x3C;div class=&#x22;stacked-combo-box has-rounded-images&#x22;&#x3E;
            &#x3C;div class=&#x22;box-inner&#x22;&#x3E;
                &#x3C;div class=&#x22;combo-item&#x22;&#x3E;
                    &#x3C;img id=&#x22;skill-placeholder&#x22;  src=&#x22;https://via.placeholder.com/150x150&#x22; alt=&#x22;&#x22;&#x3E;
                    &#x3C;span class=&#x22;selected-item&#x22;&#x3E;Select one or more languages&#x3C;/span&#x3E;
                &#x3C;/div&#x3E;
            &#x3C;/div&#x3E;
            &#x3C;div class=&#x22;box-chevron&#x22;&#x3E;
                &#x3C;i data-feather=&#x22;chevron-down&#x22;&#x3E;&#x3C;/i&#x3E;
            &#x3C;/div&#x3E;
            &#x3C;div class=&#x22;box-dropdown&#x22;&#x3E;
                &#x3C;div class=&#x22;dropdown-inner has-slimscroll&#x22;&#x3E;
                    &#x3C;ul&#x3E;
                        &#x3C;li data-skill=&#x22;javascript-skill&#x22;&#x3E;
                            &#x3C;span class=&#x22;item-icon&#x22;&#x3E;
                                &#x3C;img src=&#x22;https://via.placeholder.com/150x15&#x22; alt=&#x22;&#x22;&#x3E;
                            &#x3C;/span&#x3E;
                            &#x3C;span class=&#x22;item-name&#x22;&#x3E;Javascript&#x3C;/span&#x3E;
                            &#x3C;span class=&#x22;checkmark&#x22;&#x3E;
                                &#x3C;i data-feather=&#x22;check&#x22;&#x3E;&#x3C;/i&#x3E;
                            &#x3C;/span&#x3E;
                        &#x3C;/li&#x3E;
                        &#x3C;li data-skill=&#x22;angular-skill&#x22;&#x3E;
                            &#x3C;span class=&#x22;item-icon&#x22;&#x3E;
                                &#x3C;img src=&#x22;https://via.placeholder.com/150x15&#x22; alt=&#x22;&#x22;&#x3E;
                            &#x3C;/span&#x3E;
                            &#x3C;span class=&#x22;item-name&#x22;&#x3E;Angular&#x3C;/span&#x3E;
                            &#x3C;span class=&#x22;checkmark&#x22;&#x3E;
                                &#x3C;i data-feather=&#x22;check&#x22;&#x3E;&#x3C;/i&#x3E;
                            &#x3C;/span&#x3E;
                        &#x3C;/li&#x3E;
                        &#x3C;li data-skill=&#x22;reactjs-skill&#x22;&#x3E;
                            &#x3C;span class=&#x22;item-icon&#x22;&#x3E;
                                &#x3C;img src=&#x22;https://via.placeholder.com/150x15&#x22; alt=&#x22;&#x22;&#x3E;
                            &#x3C;/span&#x3E;
                            &#x3C;span class=&#x22;item-name&#x22;&#x3E;Reactjs&#x3C;/span&#x3E;
                            &#x3C;span class=&#x22;checkmark&#x22;&#x3E;
                                &#x3C;i data-feather=&#x22;check&#x22;&#x3E;&#x3C;/i&#x3E;
                            &#x3C;/span&#x3E;
                        &#x3C;/li&#x3E;
                        &#x3C;li data-skill=&#x22;vuejs-skill&#x22;&#x3E;
                            &#x3C;span class=&#x22;item-icon&#x22;&#x3E;
                                &#x3C;img src=&#x22;https://via.placeholder.com/150x15&#x22; alt=&#x22;&#x22;&#x3E;
                            &#x3C;/span&#x3E;
                            &#x3C;span class=&#x22;item-name&#x22;&#x3E;Vuejs&#x3C;/span&#x3E;
                            &#x3C;span class=&#x22;checkmark&#x22;&#x3E;
                                &#x3C;i data-feather=&#x22;check&#x22;&#x3E;&#x3C;/i&#x3E;
                            &#x3C;/span&#x3E;
                        &#x3C;/li&#x3E;
                        &#x3C;li data-skill=&#x22;nodejs-skill&#x22;&#x3E;
                            &#x3C;span class=&#x22;item-icon&#x22;&#x3E;
                                &#x3C;img src=&#x22;https://via.placeholder.com/150x15&#x22; alt=&#x22;&#x22;&#x3E;
                            &#x3C;/span&#x3E;
                            &#x3C;span class=&#x22;item-name&#x22;&#x3E;Nodejs&#x3C;/span&#x3E;
                            &#x3C;span class=&#x22;checkmark&#x22;&#x3E;
                                &#x3C;i data-feather=&#x22;check&#x22;&#x3E;&#x3C;/i&#x3E;
                            &#x3C;/span&#x3E;
                        &#x3C;/li&#x3E;
                        &#x3C;li data-skill=&#x22;android-skill&#x22;&#x3E;
                            &#x3C;span class=&#x22;item-icon&#x22;&#x3E;
                                &#x3C;img src=&#x22;https://via.placeholder.com/150x15&#x22; alt=&#x22;&#x22;&#x3E;
                            &#x3C;/span&#x3E;
                            &#x3C;span class=&#x22;item-name&#x22;&#x3E;Android&#x3C;/span&#x3E;
                            &#x3C;span class=&#x22;checkmark&#x22;&#x3E;
                                &#x3C;i data-feather=&#x22;check&#x22;&#x3E;&#x3C;/i&#x3E;
                            &#x3C;/span&#x3E;
                        &#x3C;/li&#x3E;
                        &#x3C;li data-skill=&#x22;swift-skill&#x22;&#x3E;
                            &#x3C;span class=&#x22;item-icon&#x22;&#x3E;
                                &#x3C;img src=&#x22;https://via.placeholder.com/150x15&#x22; alt=&#x22;&#x22;&#x3E;
                            &#x3C;/span&#x3E;
                            &#x3C;span class=&#x22;item-name&#x22;&#x3E;Swift&#x3C;/span&#x3E;
                            &#x3C;span class=&#x22;checkmark&#x22;&#x3E;
                                &#x3C;i data-feather=&#x22;check&#x22;&#x3E;&#x3C;/i&#x3E;
                            &#x3C;/span&#x3E;
                        &#x3C;/li&#x3E;
                        &#x3C;li data-skill=&#x22;wordpress-skill&#x22;&#x3E;
                            &#x3C;span class=&#x22;item-icon&#x22;&#x3E;
                                &#x3C;img src=&#x22;https://via.placeholder.com/150x15&#x22; alt=&#x22;&#x22;&#x3E;
                            &#x3C;/span&#x3E;
                            &#x3C;span class=&#x22;item-name&#x22;&#x3E;WordPress&#x3C;/span&#x3E;
                            &#x3C;span class=&#x22;checkmark&#x22;&#x3E;
                                &#x3C;i data-feather=&#x22;check&#x22;&#x3E;&#x3C;/i&#x3E;
                            &#x3C;/span&#x3E;
                        &#x3C;/li&#x3E;
                        &#x3C;li data-skill=&#x22;laravel-skill&#x22;&#x3E;
                            &#x3C;span class=&#x22;item-icon&#x22;&#x3E;
                                &#x3C;img src=&#x22;https://via.placeholder.com/150x15&#x22; alt=&#x22;&#x22;&#x3E;
                            &#x3C;/span&#x3E;
                            &#x3C;span class=&#x22;item-name&#x22;&#x3E;Laravel&#x3C;/span&#x3E;
                            &#x3C;span class=&#x22;checkmark&#x22;&#x3E;
                                &#x3C;i data-feather=&#x22;check&#x22;&#x3E;&#x3C;/i&#x3E;
                            &#x3C;/span&#x3E;
                        &#x3C;/li&#x3E;
                    &#x3C;/ul&#x3E;
                &#x3C;/div&#x3E;
            &#x3C;/div&#x3E;
        &#x3C;/div&#x3E;
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre>
                    </div>
                  </div>
                </div>

                <!--User Combo-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">User Combo</h3>
                    <p>
                      Another variant of the combo box lets you use avatar like
                      images inside your combo boxes, including the badge image.
                      This particularly helpful for lists of users. Please refer
                      to the markup for more details about usage.
                    </p>
                    <a class="code-trigger">
                      <Icon icon="feather:code" class="open" />
                      <Icon icon="feather:x" class="close" />
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="field demo-select">
                      <div class="control is-combo">
                        <div class="combo-label">User</div>
                        <div class="user-combo-box">
                          <div class="box-inner">
                            <div class="combo-item">
                              <div class="avatar-container">
                                <img
                                  class="avatar"
                                  src="/@images/avatars/placeholder.jpg"
                                  alt=""
                                  @error="
                                    $event.target.src =
                                      'https://via.placeholder.com/150x150'
                                  "
                                />
                                <img
                                  class="badge"
                                  src="/@images/icons/flags/united-states-of-america.svg"
                                  alt=""
                                  @error="
                                    $event.target.src =
                                      'https://via.placeholder.com/150x150'
                                  "
                                />
                              </div>
                              <span class="selected-item is-pushed"
                                >Select a user</span
                              >
                            </div>
                          </div>
                          <div class="box-chevron">
                            <Icon icon="feather:chevron-down" />
                          </div>
                          <div class="box-dropdown">
                            <div class="dropdown-inner has-slimscroll">
                              <ul>
                                <li>
                                  <span class="item-icon">
                                    <img
                                      class="avatar"
                                      src="/@images/avatars/photos/22.jpg"
                                      alt=""
                                      @error="
                                        $event.target.src =
                                          'https://via.placeholder.com/150x150'
                                      "
                                    />
                                    <img
                                      class="badge"
                                      src="/@images/icons/flags/united-states-of-america.svg"
                                      alt=""
                                      @error="
                                        $event.target.src =
                                          'https://via.placeholder.com/150x150'
                                      "
                                    />
                                  </span>
                                  <span class="item-name">Jimmy H.</span>
                                  <span class="checkmark">
                                    <Icon icon="feather:check" />
                                  </span>
                                </li>
                                <li>
                                  <span class="item-icon">
                                    <img
                                      class="avatar"
                                      src="/@images/avatars/photos/7.jpg"
                                      alt=""
                                      @error="
                                        $event.target.src =
                                          'https://via.placeholder.com/150x150'
                                      "
                                    />
                                    <img
                                      class="badge"
                                      src="/@images/icons/flags/united-states-of-america.svg"
                                      alt=""
                                      @error="
                                        $event.target.src =
                                          'https://via.placeholder.com/150x150'
                                      "
                                    />
                                  </span>
                                  <span class="item-name">Alice C.</span>
                                  <span class="checkmark">
                                    <Icon icon="feather:check" />
                                  </span>
                                </li>
                                <li>
                                  <span class="item-icon">
                                    <img
                                      class="avatar"
                                      src="/@images/avatars/photos/8.jpg"
                                      alt=""
                                      @error="
                                        $event.target.src =
                                          'https://via.placeholder.com/150x150'
                                      "
                                    />
                                    <img
                                      class="badge"
                                      src="/@images/icons/flags/united-states-of-america.svg"
                                      alt=""
                                      @error="
                                        $event.target.src =
                                          'https://via.placeholder.com/150x150'
                                      "
                                    />
                                  </span>
                                  <span class="item-name">Erik K.</span>
                                  <span class="checkmark">
                                    <Icon icon="feather:check" />
                                  </span>
                                </li>
                                <li>
                                  <span class="item-icon">
                                    <img
                                      class="avatar"
                                      src="/@images/avatars/photos/12.jpg"
                                      alt=""
                                      @error="
                                        $event.target.src =
                                          'https://via.placeholder.com/150x150'
                                      "
                                    />
                                    <img
                                      class="badge"
                                      src="/@images/icons/flags/united-states-of-america.svg"
                                      alt=""
                                      @error="
                                        $event.target.src =
                                          'https://via.placeholder.com/150x150'
                                      "
                                    />
                                  </span>
                                  <span class="item-name">Joshua S.</span>
                                  <span class="checkmark">
                                    <Icon icon="feather:check" />
                                  </span>
                                </li>
                                <li>
                                  <span class="item-icon">
                                    <img
                                      class="avatar"
                                      src="/@images/avatars/photos/25.jpg"
                                      alt=""
                                      @error="
                                        $event.target.src =
                                          'https://via.placeholder.com/150x150'
                                      "
                                    />
                                    <img
                                      class="badge"
                                      src="/@images/icons/flags/united-states-of-america.svg"
                                      alt=""
                                      @error="
                                        $event.target.src =
                                          'https://via.placeholder.com/150x150'
                                      "
                                    />
                                  </span>
                                  <span class="item-name">Melany W.</span>
                                  <span class="checkmark">
                                    <Icon icon="feather:check" />
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;div class=&#x22;field&#x22;&#x3E;
    &#x3C;div class=&#x22;control is-combo&#x22;&#x3E;
        &#x3C;div class=&#x22;combo-label&#x22;&#x3E;User&#x3C;/div&#x3E;
        &#x3C;div class=&#x22;user-combo-box&#x22;&#x3E;
            &#x3C;div class=&#x22;box-inner&#x22;&#x3E;
                &#x3C;div class=&#x22;combo-item&#x22;&#x3E;
                    &#x3C;div class=&#x22;avatar-container&#x22;&#x3E;
                        &#x3C;img class=&#x22;avatar&#x22; src=&#x22;https://via.placeholder.com/150x150&#x22; src=&#x22;assets/img/avatars/placeholder.jpg&#x22; alt&#x3E;
                        &#x3C;img class=&#x22;badge&#x22; src=&#x22;assets/img/icons/flags/united-states-of-america.svg&#x22; alt&#x3E;
                    &#x3C;/div&#x3E;
                    &#x3C;span class=&#x22;selected-item is-pushed&#x22;&#x3E;Select a user&#x3C;/span&#x3E;
                &#x3C;/div&#x3E;
            &#x3C;/div&#x3E;
            &#x3C;div class=&#x22;box-chevron&#x22;&#x3E;
                &#x3C;i data-feather=&#x22;chevron-down&#x22;&#x3E;&#x3C;/i&#x3E;
            &#x3C;/div&#x3E;
            &#x3C;div class=&#x22;box-dropdown&#x22;&#x3E;
                &#x3C;div class=&#x22;dropdown-inner has-slimscroll&#x22;&#x3E;
                    &#x3C;ul&#x3E;
                        &#x3C;li&#x3E;
                            &#x3C;span class=&#x22;item-icon&#x22;&#x3E;
                                &#x3C;img class=&#x22;avatar&#x22; src=&#x22;https://via.placeholder.com/150x150&#x22; alt&#x3E;
                                &#x3C;img class=&#x22;badge&#x22; src=&#x22;assets/img/icons/flags/united-states-of-america.svg&#x22; alt&#x3E;
                            &#x3C;/span&#x3E;
                            &#x3C;span class=&#x22;item-name&#x22;&#x3E;Jimmy S.&#x3C;/span&#x3E;
                            &#x3C;span class=&#x22;checkmark&#x22;&#x3E;
                                &#x3C;i data-feather=&#x22;check&#x22;&#x3E;&#x3C;/i&#x3E;
                            &#x3C;/span&#x3E;
                        &#x3C;/li&#x3E;
                        &#x3C;li&#x3E;
                            &#x3C;span class=&#x22;item-icon&#x22;&#x3E;
                                &#x3C;img class=&#x22;avatar&#x22; src=&#x22;https://via.placeholder.com/150x150&#x22; alt&#x3E;
                                &#x3C;img class=&#x22;badge&#x22; src=&#x22;assets/img/icons/flags/united-states-of-america.svg&#x22; alt&#x3E;
                            &#x3C;/span&#x3E;
                            &#x3C;span class=&#x22;item-name&#x22;&#x3E;Alan W..&#x3C;/span&#x3E;
                            &#x3C;span class=&#x22;checkmark&#x22;&#x3E;
                                &#x3C;i data-feather=&#x22;check&#x22;&#x3E;&#x3C;/i&#x3E;
                            &#x3C;/span&#x3E;
                        &#x3C;/li&#x3E;
                        &#x3C;li&#x3E;
                            &#x3C;span class=&#x22;item-icon&#x22;&#x3E;
                                &#x3C;img class=&#x22;avatar&#x22; src=&#x22;https://via.placeholder.com/150x150&#x22; alt&#x3E;
                                &#x3C;img class=&#x22;badge&#x22; src=&#x22;assets/img/icons/flags/united-states-of-america.svg&#x22; alt&#x3E;
                            &#x3C;/span&#x3E;
                            &#x3C;span class=&#x22;item-name&#x22;&#x3E;Danny D.&#x3C;/span&#x3E;
                            &#x3C;span class=&#x22;checkmark&#x22;&#x3E;
                                &#x3C;i data-feather=&#x22;check&#x22;&#x3E;&#x3C;/i&#x3E;
                            &#x3C;/span&#x3E;
                        &#x3C;/li&#x3E;
                        &#x3C;li&#x3E;
                            &#x3C;span class=&#x22;item-icon&#x22;&#x3E;
                                &#x3C;img class=&#x22;avatar&#x22; src=&#x22;https://via.placeholder.com/150x150&#x22; alt&#x3E;
                                &#x3C;img class=&#x22;badge&#x22; src=&#x22;assets/img/icons/flags/united-states-of-america.svg&#x22; alt&#x3E;
                            &#x3C;/span&#x3E;
                            &#x3C;span class=&#x22;item-name&#x22;&#x3E;Mary L.&#x3C;/span&#x3E;
                            &#x3C;span class=&#x22;checkmark&#x22;&#x3E;
                                &#x3C;i data-feather=&#x22;check&#x22;&#x3E;&#x3C;/i&#x3E;
                            &#x3C;/span&#x3E;
                        &#x3C;/li&#x3E;
                        &#x3C;li&#x3E;
                            &#x3C;span class=&#x22;item-icon&#x22;&#x3E;
                                &#x3C;img class=&#x22;avatar&#x22; src=&#x22;https://via.placeholder.com/150x150&#x22; alt&#x3E;
                                &#x3C;img class=&#x22;badge&#x22; src=&#x22;assets/img/icons/flags/united-states-of-america.svg&#x22; alt&#x3E;
                            &#x3C;/span&#x3E;
                            &#x3C;span class=&#x22;item-name&#x22;&#x3E;Alex S.&#x3C;/span&#x3E;
                            &#x3C;span class=&#x22;checkmark&#x22;&#x3E;
                                &#x3C;i data-feather=&#x22;check&#x22;&#x3E;&#x3C;/i&#x3E;
                            &#x3C;/span&#x3E;
                        &#x3C;/li&#x3E;
                    &#x3C;/ul&#x3E;
                &#x3C;/div&#x3E;
            &#x3C;/div&#x3E;
        &#x3C;/div&#x3E;
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre>
                    </div>
                  </div>
                </div>

                <div class="demo-spacer"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>

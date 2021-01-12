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
              <h1 class="title is-4">Input Addons</h1>
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
                    <span>Input Addons</span>
                  </a>
                </li>
              </ul>
            </nav>

            <div class="columns">
              <div class="column is-12">
                <!--End Addon-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">End Addon</h3>
                    <p>
                      Inputs can have addons if you need to shoow contextual
                      information. You can attach an addon at the end of a
                      <code>field</code> group. See markup for more details
                      about usage.
                    </p>
                    <a class="code-trigger">
                      <Icon icon="feather:code" class="open" />
                      <Icon icon="feather:x" class="close" />
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="field has-addons">
                      <div class="control is-expanded">
                        <input
                          class="input"
                          type="text"
                          placeholder="Gmail address"
                        />
                      </div>
                      <div class="control">
                        <a class="button is-static"> @gmail.com </a>
                      </div>
                    </div>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;div class=&#x22;field has-addons&#x22;&#x3E;
    &#x3C;div class=&#x22;control is-expanded&#x22;&#x3E;
        &#x3C;input class=&#x22;input&#x22; type=&#x22;text&#x22; placeholder=&#x22;Gmail address&#x22;&#x3E;
    &#x3C;/div&#x3E;
    &#x3C;div class=&#x22;control&#x22;&#x3E;
        &#x3C;a class=&#x22;button is-static&#x22;&#x3E;
            @gmail.com
        &#x3C;/a&#x3E;
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre>
                    </div>
                  </div>
                </div>

                <!--Start Addon-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Start Addon</h3>
                    <p>
                      Inputs can have addons if you need to shoow contextual
                      information. You can attach an addon at the beginning of a
                      <code>field</code> group. See markup for more details
                      about usage.
                    </p>
                    <a class="code-trigger">
                      <Icon icon="feather:code" class="open" />
                      <Icon icon="feather:x" class="close" />
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="field has-addons">
                      <div class="control">
                        <a class="button is-static"> +1 </a>
                      </div>
                      <div class="control is-expanded">
                        <input
                          class="input"
                          type="text"
                          placeholder="Your phone number"
                        />
                      </div>
                    </div>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;div class=&#x22;field has-addons&#x22;&#x3E;
    &#x3C;div class=&#x22;control&#x22;&#x3E;
        &#x3C;a class=&#x22;button is-static&#x22;&#x3E;
            +1
        &#x3C;/a&#x3E;
    &#x3C;/div&#x3E;
    &#x3C;div class=&#x22;control is-expanded&#x22;&#x3E;
        &#x3C;input class=&#x22;input&#x22; type=&#x22;text&#x22; placeholder=&#x22;Your phone number&#x22;&#x3E;
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre>
                    </div>
                  </div>
                </div>

                <!--Addon Colors-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Addon Colors</h3>
                    <p>
                      Since input addons are button elements, usual modifier
                      classes apply to them. You can use the
                      <code>is-primary</code>, <code>is-success</code>,
                      <code>is-info</code>, <code>is-warning</code>,
                      <code>is-danger</code>.
                    </p>
                    <a class="code-trigger">
                      <Icon icon="feather:code" class="open" />
                      <Icon icon="feather:x" class="close" />
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="field has-addons">
                      <div class="control is-expanded">
                        <input
                          class="input"
                          type="text"
                          placeholder="Find a repository"
                        />
                      </div>
                      <div class="control">
                        <a class="button is-primary"> Search </a>
                      </div>
                    </div>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;div class=&#x22;field has-addons&#x22;&#x3E;
    &#x3C;div class=&#x22;control is-expanded&#x22;&#x3E;
        &#x3C;input class=&#x22;input&#x22; type=&#x22;text&#x22; placeholder=&#x22;Find a repository&#x22;&#x3E;
    &#x3C;/div&#x3E;
    &#x3C;div class=&#x22;control&#x22;&#x3E;
        &#x3C;a class=&#x22;button is-primary&#x22;&#x3E;
            Search
        &#x3C;/a&#x3E;
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre>
                    </div>
                  </div>
                </div>

                <!--Rounded Addons-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Rounded Addons</h3>
                    <p>
                      Inputs and their addons can have rounded edges as well.
                      simply add the <code>is-rounded</code> class to the
                      <code>input</code> and the <code>button</code> element to
                      apply those styles. See markup for more details.
                    </p>
                    <a class="code-trigger">
                      <Icon icon="feather:code" class="open" />
                      <Icon icon="feather:x" class="close" />
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="field has-addons">
                      <div class="control is-expanded">
                        <input
                          class="input is-rounded"
                          type="text"
                          placeholder="Find a repository"
                        />
                      </div>
                      <div class="control">
                        <a class="button is-primary is-rounded"> Search </a>
                      </div>
                    </div>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;div class=&#x22;field has-addons&#x22;&#x3E;
    &#x3C;div class=&#x22;control is-expanded&#x22;&#x3E;
        &#x3C;input class=&#x22;input is-rounded&#x22; type=&#x22;text&#x22; placeholder=&#x22;Find a repository&#x22;&#x3E;
    &#x3C;/div&#x3E;
    &#x3C;div class=&#x22;control&#x22;&#x3E;
        &#x3C;a class=&#x22;button is-primary is-rounded&#x22;&#x3E;
            Search
        &#x3C;/a&#x3E;
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre>
                    </div>
                  </div>
                </div>

                <!--Bi Directional-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Bi Directional</h3>
                    <p>
                      Inputs can have addons on both sides. You can even attach
                      a <code>select</code> element to your form control group.
                      Please refer to the code example for more details about
                      usage.
                    </p>
                    <a class="code-trigger">
                      <Icon icon="feather:code" class="open" />
                      <Icon icon="feather:x" class="close" />
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="field has-addons">
                      <p class="control">
                        <span class="select">
                          <select>
                            <option>$</option>
                            <option>£</option>
                            <option>€</option>
                          </select>
                        </span>
                      </p>
                      <p class="control is-expanded">
                        <input
                          class="input"
                          type="text"
                          placeholder="Amount of money"
                        />
                      </p>
                      <p class="control">
                        <a class="button is-success"> Send Payment </a>
                      </p>
                    </div>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;div class=&#x22;field has-addons&#x22;&#x3E;
    &#x3C;p class=&#x22;control&#x22;&#x3E;
        &#x3C;span class=&#x22;select&#x22;&#x3E;
            &#x3C;select&#x3E;
                &#x3C;option&#x3E;$&#x3C;/option&#x3E;
                &#x3C;option&#x3E;&#xA3;&#x3C;/option&#x3E;
                &#x3C;option&#x3E;&#x20AC;&#x3C;/option&#x3E;
            &#x3C;/select&#x3E;
        &#x3C;/span&#x3E;
    &#x3C;/p&#x3E;
    &#x3C;p class=&#x22;control is-expanded&#x22;&#x3E;
        &#x3C;input class=&#x22;input&#x22; type=&#x22;text&#x22; placeholder=&#x22;Amount of money&#x22;&#x3E;
    &#x3C;/p&#x3E;
    &#x3C;p class=&#x22;control&#x22;&#x3E;
        &#x3C;a class=&#x22;button is-success&#x22;&#x3E;
            Send Payment
        &#x3C;/a&#x3E;
    &#x3C;/p&#x3E;
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

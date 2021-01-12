<template>
  <DefaultLayout>
    <ComponentsSidebar />
    <ComponentsMobileSubsidebar />

    <!-- Content Wrapper -->
    <div
      id="huro-demo"
      class="view-wrapper"
      data-sidebar-open
      data-naver-offset="342"
      data-menu-item="#components-sidebar-menu"
      data-mobile-item="#components-sidebar-menu-mobile"
    >
      <div class="page-content-wrapper">
        <div class="page-content is-relative">
          <div class="page-title has-text-centered">
            <!-- Sidebar Trigger -->
            <div
              class="huro-hamburger nav-trigger push-resize"
              data-sidebar="components-sidebar"
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
              <h1 class="title is-4">Progress</h1>
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
                  <RouterLink :to="{ name: 'components-hub' }">
                    <span>Components</span>
                  </RouterLink>
                </li>
                <li>
                  <a>
                    <span>Progress</span>
                  </a>
                </li>
              </ul>
            </nav>

            <div class="columns">
              <div class="column is-12">
                <!--Progress Bars-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Progress Bars</h3>
                    <p>
                      Huro provides a very versatile progress bar component that
                      can be used almost anywhere, across a wide variety of
                      layouts. 3 size modifier classes are available:
                      <code>.is-small</code>, <code>.is-smaller</code> and
                      <code>.is-tiny</code>.
                    </p>
                    <a class="code-trigger">
                      <i class="open" data-feather="code"></i>
                      <i class="close" data-feather="x"></i>
                    </a>
                  </div>
                  <div class="card-inner">
                    <progress
                      class="progress is-primary is-tiny"
                      value="65"
                      max="100"
                    >
                      65%
                    </progress>
                    <progress
                      class="progress is-primary is-smaller"
                      value="90"
                      max="100"
                    >
                      90%
                    </progress>
                    <progress
                      class="progress is-primary is-small"
                      value="31"
                      max="100"
                    >
                      31%
                    </progress>
                    <progress class="progress is-primary" value="15" max="100">
                      15%
                    </progress>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;progress class=&#x22;progress is-primary is-tiny&#x22; value=&#x22;65&#x22; max=&#x22;100&#x22;&#x3E;65%&#x3C;/progress&#x3E;
&#x3C;progress class=&#x22;progress is-primary is-smaller&#x22; value=&#x22;90&#x22; max=&#x22;100&#x22;&#x3E;90%&#x3C;/progress&#x3E;
&#x3C;progress class=&#x22;progress is-primary is-small&#x22; value=&#x22;31&#x22; max=&#x22;100&#x22;&#x3E;31%&#x3C;/progress&#x3E;
&#x3C;progress class=&#x22;progress is-primary&#x22; value=&#x22;15&#x22; max=&#x22;100&#x22;&#x3E;15%&#x3C;/progress&#x3E;
</code></pre>
                    </div>
                  </div>
                </div>

                <!--Progress Bars-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Progress Bars</h3>
                    <p>
                      Huro progress bars can also have different colors.
                      Available modifier classes are: <code>.is-primary</code>,
                      <code>.is-success</code> <code>.is-info</code>,
                      <code>.is-warning</code>, and <code>.is-danger</code>.
                    </p>
                    <a class="code-trigger">
                      <i class="open" data-feather="code"></i>
                      <i class="close" data-feather="x"></i>
                    </a>
                  </div>
                  <div class="card-inner">
                    <progress
                      class="progress is-primary is-tiny"
                      value="70"
                      max="100"
                    >
                      70%
                    </progress>
                    <progress
                      class="progress is-success is-tiny"
                      value="55"
                      max="100"
                    >
                      55%
                    </progress>
                    <progress
                      class="progress is-info is-tiny"
                      value="45"
                      max="100"
                    >
                      45%
                    </progress>
                    <progress
                      class="progress is-warning is-tiny"
                      value="60"
                      max="100"
                    >
                      60%
                    </progress>
                    <progress
                      class="progress is-danger is-tiny"
                      value="38"
                      max="100"
                    >
                      38%
                    </progress>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;progress class=&#x22;progress is-primary is-tiny&#x22; value=&#x22;70&#x22; max=&#x22;100&#x22;&#x3E;70%&#x3C;/progress&#x3E;
&#x3C;progress class=&#x22;progress is-success is-tiny&#x22; value=&#x22;55&#x22; max=&#x22;100&#x22;&#x3E;55%&#x3C;/progress&#x3E;
&#x3C;progress class=&#x22;progress is-info is-tiny&#x22; value=&#x22;45&#x22; max=&#x22;100&#x22;&#x3E;45%&#x3C;/progress&#x3E;
&#x3C;progress class=&#x22;progress is-warning is-tiny&#x22; value=&#x22;60&#x22; max=&#x22;100&#x22;&#x3E;60%&#x3C;/progress&#x3E;
&#x3C;progress class=&#x22;progress is-danger is-tiny&#x22; value=&#x22;38&#x22; max=&#x22;100&#x22;&#x3E;38%&#x3C;/progress&#x3E;
</code></pre>
                    </div>
                  </div>
                </div>

                <!--Progress Bars-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Indeterminate Progress</h3>
                    <p>
                      In some particular use cases, you might want to show an
                      undetermined progress. If you want your progress bars to
                      show an undetermined state, you just need to omit the
                      <code>value=""</code> attribute. The CSS will take care of
                      the rest.
                    </p>
                    <a class="code-trigger">
                      <i class="open" data-feather="code"></i>
                      <i class="close" data-feather="x"></i>
                    </a>
                  </div>
                  <div class="card-inner">
                    <progress class="progress is-primary is-tiny" max="100">
                      70%
                    </progress>
                    <progress class="progress is-success is-tiny" max="100">
                      55%
                    </progress>
                    <progress class="progress is-info is-tiny" max="100">
                      45%
                    </progress>
                    <progress class="progress is-warning is-tiny" max="100">
                      60%
                    </progress>
                    <progress class="progress is-danger is-tiny" max="100">
                      38%
                    </progress>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;progress class=&#x22;progress is-primary is-tiny&#x22;  max=&#x22;100&#x22;&#x3E;70%&#x3C;/progress&#x3E;
&#x3C;progress class=&#x22;progress is-success is-tiny&#x22; max=&#x22;100&#x22;&#x3E;55%&#x3C;/progress&#x3E;
&#x3C;progress class=&#x22;progress is-info is-tiny&#x22; max=&#x22;100&#x22;&#x3E;45%&#x3C;/progress&#x3E;
&#x3C;progress class=&#x22;progress is-warning is-tiny&#x22; max=&#x22;100&#x22;&#x3E;60%&#x3C;/progress&#x3E;
&#x3C;progress class=&#x22;progress is-danger is-tiny&#x22; max=&#x22;100&#x22;&#x3E;38%&#x3C;/progress&#x3E;
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

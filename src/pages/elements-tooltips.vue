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
              <h1 class="title is-4">Tooltips</h1>
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
                    <span>Tooltips</span>
                  </a>
                </li>
              </ul>
            </nav>

            <div class="columns">
              <div class="column is-12">
                <!--Default Tooltip-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Default Tooltip</h3>
                    <p>
                      Vuero offers a very simple versatile and CSS only tooltip.
                      The example below is the default and basic version. There
                      are 6 default positions: <code>hint--top-left</code>,
                      <code>hint--top</code>, <code>hint--top-right</code>,
                      <code>hint--bottom-left</code>, <code>hint--bottom</code>,
                      <code>hint--bottom-left</code>. The tooltip text is
                      controlled via the <code>data-hint</code> attribute.
                    </p>
                    <a class="code-trigger">
                      <Icon icon="feather:code" class="open" />
                      <Icon icon="feather:x" class="close" />
                    </a>
                  </div>

                  <div class="card-inner">
                    <span
                      class="tag is-rounded is-solid hint--top-left"
                      data-hint="Iam a top left tooltip"
                      >Top Left</span
                    >
                    <span
                      class="tag is-rounded is-solid hint--top"
                      data-hint="Iam a top center tooltip"
                      >Top Center</span
                    >
                    <span
                      class="tag is-rounded is-solid hint--top-right"
                      data-hint="Iam a top right tooltip"
                      >Top Right</span
                    >
                    <span
                      class="tag is-rounded is-solid hint--bottom-left"
                      data-hint="Iam a bottom left tooltip"
                      >Bottom Left</span
                    >
                    <span
                      class="tag is-rounded is-solid hint--bottom"
                      data-hint="Iam a bottom center tooltip"
                      >Bottom Center</span
                    >
                    <span
                      class="tag is-rounded is-solid hint--bottom-right"
                      data-hint="Iam a bottom right tooltip"
                      >Bottom Right</span
                    >

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;span class=&#x22;tag is-rounded is-solid hint--top-left&#x22; data-hint=&#x22;Iam a top left tooltip&#x22;&#x3E;Top Left&#x3C;/span&#x3E;
&#x3C;span class=&#x22;tag is-rounded is-solid hint--top&#x22; data-hint=&#x22;Iam a top center tooltip&#x22;&#x3E;Top Center&#x3C;/span&#x3E;
&#x3C;span class=&#x22;tag is-rounded is-solid hint--top-right&#x22; data-hint=&#x22;Iam a top right tooltip&#x22;&#x3E;Top Right&#x3C;/span&#x3E;
&#x3C;span class=&#x22;tag is-rounded is-solid hint--bottom-left&#x22; data-hint=&#x22;Iam a bottom left tooltip&#x22;&#x3E;Bottom Left&#x3C;/span&#x3E;
&#x3C;span class=&#x22;tag is-rounded is-solid hint--bottom&#x22; data-hint=&#x22;Iam a bottom center tooltip&#x22;&#x3E;Bottom Center&#x3C;/span&#x3E;
&#x3C;span class=&#x22;tag is-rounded is-solid hint--bottom-right&#x22; data-hint=&#x22;Iam a bottom right tooltip&#x22;&#x3E;Bottom Right&#x3C;/span&#x3E;
</code></pre>
                    </div>
                  </div>
                </div>

                <!--Light Tooltip-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Light Tooltip</h3>
                    <p>
                      Vuero offers a very simple versatile and CSS only tooltip.
                      The example below is the light version. Reference default
                      tooltips to learn more about placement options. To use the
                      light tooltip, add the <code>hint--light</code> class.
                    </p>
                    <a class="code-trigger">
                      <Icon icon="feather:code" class="open" />
                      <Icon icon="feather:x" class="close" />
                    </a>
                  </div>

                  <div class="card-inner">
                    <span
                      class="tag is-rounded is-solid hint--light hint--top-left"
                      data-hint="Iam a top left tooltip"
                      >Top Left</span
                    >
                    <span
                      class="tag is-rounded is-solid hint--light hint--top"
                      data-hint="Iam a top center tooltip"
                      >Top Center</span
                    >
                    <span
                      class="tag is-rounded is-solid hint--light hint--top-right"
                      data-hint="Iam a top right tooltip"
                      >Top Right</span
                    >
                    <span
                      class="tag is-rounded is-solid hint--light hint--bottom-left"
                      data-hint="Iam a bottom left tooltip"
                      >Bottom Left</span
                    >
                    <span
                      class="tag is-rounded is-solid hint--light hint--bottom"
                      data-hint="Iam a bottom center tooltip"
                      >Bottom Center</span
                    >
                    <span
                      class="tag is-rounded is-solid hint--light hint--bottom-right"
                      data-hint="Iam a bottom right tooltip"
                      >Bottom Right</span
                    >

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;span class=&#x22;tag is-rounded is-solid hint--light hint--top-left&#x22; data-hint=&#x22;Iam a top left tooltip&#x22;&#x3E;Top Left&#x3C;/span&#x3E;
&#x3C;span class=&#x22;tag is-rounded is-solid hint--light hint--top&#x22; data-hint=&#x22;Iam a top center tooltip&#x22;&#x3E;Top Center&#x3C;/span&#x3E;
&#x3C;span class=&#x22;tag is-rounded is-solid hint--light hint--top-right&#x22; data-hint=&#x22;Iam a top right tooltip&#x22;&#x3E;Top Right&#x3C;/span&#x3E;
&#x3C;span class=&#x22;tag is-rounded is-solid hint--light hint--bottom-left&#x22; data-hint=&#x22;Iam a bottom left tooltip&#x22;&#x3E;Bottom Left&#x3C;/span&#x3E;
&#x3C;span class=&#x22;tag is-rounded is-solid hint--light hint--bottom&#x22; data-hint=&#x22;Iam a bottom center tooltip&#x22;&#x3E;Bottom Center&#x3C;/span&#x3E;
&#x3C;span class=&#x22;tag is-rounded is-solid hint--light hint--bottom-right&#x22; data-hint=&#x22;Iam a bottom right tooltip&#x22;&#x3E;Bottom Right&#x3C;/span&#x3E;
</code></pre>
                    </div>
                  </div>
                </div>

                <!--Tooltip Colors-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Tooltip Colors</h3>
                    <p>
                      Vuero tooltips can have different colors that can be
                      changed with a simple CSS class. Available color classes
                      are: <code>hint--light</code>, <code>hint--primary</code>,
                      <code>hint--info</code>, <code>hint--success</code>,
                      <code>hint--warning</code> and <code>hint--error</code>.
                    </p>
                    <a class="code-trigger">
                      <Icon icon="feather:code" class="open" />
                      <Icon icon="feather:x" class="close" />
                    </a>
                  </div>

                  <div class="card-inner">
                    <span
                      class="tag is-rounded is-solid hint--top"
                      data-hint="Iam a default tooltip"
                      >Default</span
                    >
                    <span
                      class="tag is-rounded is-solid hint--light hint--top"
                      data-hint="Iam a light tooltip"
                      >Light</span
                    >
                    <span
                      class="tag is-rounded is-solid hint--primary hint--top"
                      data-hint="Iam a primary tooltip"
                      >Primary</span
                    >
                    <span
                      class="tag is-rounded is-solid hint--info hint--top"
                      data-hint="Iam a info tooltip"
                      >Info</span
                    >
                    <span
                      class="tag is-rounded is-solid hint--success hint--top"
                      data-hint="Iam a success tooltip"
                      >Success</span
                    >
                    <span
                      class="tag is-rounded is-solid hint--warning hint--top"
                      data-hint="Iam a warning tooltip"
                      >Warning</span
                    >
                    <span
                      class="tag is-rounded is-solid hint--error hint--top"
                      data-hint="Iam a danger tooltip"
                      >Error</span
                    >

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;span class=&#x22;tag is-rounded is-solid hint--top&#x22; data-hint=&#x22;Iam a default tooltip&#x22;&#x3E;Default&#x3C;/span&#x3E;
&#x3C;span class=&#x22;tag is-rounded is-solid hint--light hint--top&#x22; data-hint=&#x22;Iam a light tooltip&#x22;&#x3E;Light&#x3C;/span&#x3E;
&#x3C;span class=&#x22;tag is-rounded is-solid hint--primary hint--top&#x22; data-hint=&#x22;Iam a primary tooltip&#x22;&#x3E;Primary&#x3C;/span&#x3E;
&#x3C;span class=&#x22;tag is-rounded is-solid hint--info hint--top&#x22; data-hint=&#x22;Iam a info tooltip&#x22;&#x3E;Info&#x3C;/span&#x3E;
&#x3C;span class=&#x22;tag is-rounded is-solid hint--success hint--top&#x22; data-hint=&#x22;Iam a success tooltip&#x22;&#x3E;Success&#x3C;/span&#x3E;
&#x3C;span class=&#x22;tag is-rounded is-solid hint--warning hint--top&#x22; data-hint=&#x22;Iam a warning tooltip&#x22;&#x3E;Warning&#x3C;/span&#x3E;
&#x3C;span class=&#x22;tag is-rounded is-solid hint--error hint--top&#x22; data-hint=&#x22;Iam a danger tooltip&#x22;&#x3E;Error&#x3C;/span&#x3E;
</code></pre>
                    </div>
                  </div>
                </div>

                <!--Tooltip Shapes-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Tooltip Shapes</h3>
                    <p>
                      Vuero tooltips can have different shapes, based oon what
                      you need in your design. Available shape classes are:
                      <code>hint--rounded</code> and <code>hint--bubble</code>.
                      Note that the bubble tooltip has uppercase set by default
                      ans doesn't have a tooltip arrow.
                    </p>
                    <a class="code-trigger">
                      <Icon icon="feather:code" class="open" />
                      <Icon icon="feather:x" class="close" />
                    </a>
                  </div>

                  <div class="card-inner">
                    <span
                      class="tag is-rounded is-solid hint--primary hint--top"
                      data-hint="Iam a default tooltip"
                      >Default</span
                    >
                    <span
                      class="tag is-rounded is-solid hint--primary hint--rounded hint--top"
                      data-hint="Iam a rounded tooltip"
                      >Rounded</span
                    >
                    <span
                      class="tag is-rounded is-solid hint--primary hint--bubble hint--top"
                      data-hint="I am a bubble tooltip"
                      >Bubble</span
                    >

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;span class=&#x22;tag is-rounded is-solid hint--primary hint--top&#x22; data-hint=&#x22;Iam a default tooltip&#x22;&#x3E;Default&#x3C;/span&#x3E;
&#x3C;span class=&#x22;tag is-rounded is-solid hint--primary hint--rounded hint--top&#x22; data-hint=&#x22;Iam a rounded tooltip&#x22;&#x3E;Rounded&#x3C;/span&#x3E;
&#x3C;span class=&#x22;tag is-rounded is-solid hint--primary hint--bubble hint--top&#x22; data-hint=&#x22;I am a bubble tooltip&#x22;&#x3E;Bubble&#x3C;/span&#x3E;
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

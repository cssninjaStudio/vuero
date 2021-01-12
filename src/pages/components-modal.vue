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
              <h1 class="title is-4">Modals</h1>
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
                    <span>Components</span>
                  </RouterLink>
                </li>
                <li>
                  <a>
                    <span>Modal</span>
                  </a>
                </li>
              </ul>
            </nav>

            <div class="columns is-multiline">
              <div class="column is-12">
                <!--H Modal-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">H Modal</h3>
                    <p>
                      Huro provides a custom modal implementation. Use the
                      existing modal markup and paste it into your page to try
                      it. Use the <code>is-start</code>,
                      <code>is-centered</code>, <code>is-end</code> classes on
                      the <code>modal-card-foot</code> element to change the
                      actions alignment.
                    </p>
                    <a class="code-trigger">
                      <i class="open" data-feather="code"></i>
                      <i class="close" data-feather="x"></i>
                    </a>
                  </div>
                  <div class="card-inner">
                    <div class="buttons">
                      <a
                        class="button h-button is-rounded h-modal-trigger"
                        data-modal="demo-left-actions-modal"
                        >Left Actions</a
                      >
                      <a
                        class="button h-button is-rounded h-modal-trigger"
                        data-modal="demo-centered-actions-modal"
                        >Centered Actions</a
                      >
                      <a
                        class="button h-button is-rounded h-modal-trigger"
                        data-modal="demo-right-actions-modal"
                        >Right Actions</a
                      >
                    </div>

                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;a class=&#x22;button h-button is-rounded h-modal-trigger&#x22; data-modal=&#x22;demo-right-actions-modal&#x22;&#x3E;Right Actions&#x3C;/a&#x3E;

&#x3C;div id=&#x22;demo-right-actions-modal&#x22; class=&#x22;modal h-modal&#x22;&#x3E;
    &#x3C;div class=&#x22;modal-background  h-modal-close&#x22;&#x3E;&#x3C;/div&#x3E;
    &#x3C;div class=&#x22;modal-content&#x22;&#x3E;
        &#x3C;div class=&#x22;modal-card&#x22;&#x3E;
            &#x3C;header class=&#x22;modal-card-head&#x22;&#x3E;
                &#x3C;h3&#x3E;Did you know?&#x3C;/h3&#x3E;
                &#x3C;button class=&#x22;h-modal-close ml-auto&#x22; aria-label=&#x22;close&#x22;&#x3E;
                    &#x3C;i data-feather=&#x22;x&#x22;&#x3E;&#x3C;/i&#x3E;
                &#x3C;/button&#x3E;
            &#x3C;/header&#x3E;
            &#x3C;div class=&#x22;modal-card-body&#x22;&#x3E;
                &#x3C;div class=&#x22;inner-content&#x22;&#x3E;
                    &#x3C;div class=&#x22;section-placeholder&#x22;&#x3E;
                        &#x3C;div class=&#x22;placeholder-content&#x22;&#x3E;
                            &#x3C;img src=&#x22;assets/img/placeholders/huro-1.svg&#x22; alt=&#x22;&#x22;&#x3E;
                            &#x3C;h3 class=&#x22;dark-inverted&#x22;&#x3E;Go Premium&#x3C;/h3&#x3E;
                            &#x3C;p&#x3E;Unlock more features and business tools by going premium&#x3C;/p&#x3E;
                        &#x3C;/div&#x3E;
                    &#x3C;/div&#x3E;
                &#x3C;/div&#x3E;
            &#x3C;/div&#x3E;
            &#x3C;div class=&#x22;modal-card-foot is-end&#x22;&#x3E;
                &#x3C;a class=&#x22;button h-button is-rounded h-modal-close&#x22;&#x3E;Cancel&#x3C;/a&#x3E;
                &#x3C;a class=&#x22;button h-button is-primary is-raised is-rounded&#x22;&#x3E;Confirm&#x3C;/a&#x3E;
            &#x3C;/div&#x3E;
        &#x3C;/div&#x3E;
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre>
                    </div>
                  </div>
                </div>

                <!--H Modal Sizes-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Modal Sizes</h3>
                    <p>
                      Huro provides a custom modal implementation. Use the
                      existing modal markup and paste it into your page to try
                      it. Use the <code>is-small</code>, <code>is-medium</code>,
                      <code>is-large</code> and <code>is-big</code> classes on
                      the <code>h-modal</code> element to change the size of the
                      modal.
                    </p>
                  </div>
                  <div class="card-inner">
                    <div class="buttons">
                      <a
                        class="button h-button is-rounded h-modal-trigger"
                        data-modal="demo-small-modal"
                        >Small Modal</a
                      >
                      <a
                        class="button h-button is-rounded h-modal-trigger"
                        data-modal="demo-standard-modal"
                        >Standard Modal</a
                      >
                      <a
                        class="button h-button is-rounded h-modal-trigger"
                        data-modal="demo-medium-modal"
                        >Medium Modal</a
                      >
                      <a
                        class="button h-button is-rounded h-modal-trigger"
                        data-modal="demo-large-modal"
                        >Large Modal</a
                      >
                      <a
                        class="button h-button is-rounded h-modal-trigger"
                        data-modal="demo-big-modal"
                        >Big Modal</a
                      >
                    </div>
                  </div>
                </div>

                <!--H Modal Forms-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Modal Forms</h3>
                    <p>
                      Huro provides a custom modal implementation. Use the
                      existing modal markup and paste it into your page to try
                      it. Modals work pretty well with form elements. Check the
                      below examples to get some inspiration about how you can
                      build beautiful modal forms.
                    </p>
                  </div>
                  <div class="card-inner">
                    <div class="buttons">
                      <a
                        class="button h-button is-rounded h-modal-trigger"
                        data-modal="demo-small-form-modal"
                        >Small Modal</a
                      >
                      <a
                        class="button h-button is-rounded h-modal-trigger"
                        data-modal="demo-standard-form-modal"
                        >Standard Modal</a
                      >
                      <a
                        class="button h-button is-rounded h-modal-trigger"
                        data-modal="demo-medium-form-modal"
                        >Medium Modal</a
                      >
                      <a
                        class="button h-button is-rounded h-modal-trigger"
                        data-modal="demo-large-form-modal"
                        >Large Modal</a
                      >
                      <a
                        class="button h-button is-rounded h-modal-trigger"
                        data-modal="demo-big-form-modal"
                        >Big Modal</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <DemoLeftActionsModal />
    <DemoCenteredActionsModal />
    <DemoRightActionsModal />

    <DemoSmallModal />
    <DemoStandardModal />
    <DemoMediumModal />
    <DemoLargeModal />
    <DemoBigModal />

    <DemoSmallFormModal />
    <DemoStandardFormModal />
    <DemoMediumFormModal />
    <DemoLargeFormModal />
    <DemoBigFormModal />
  </DefaultLayout>
</template>

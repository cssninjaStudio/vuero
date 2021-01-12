<script setup lang="ts">
import { useTitle } from '@vueuse/core'

useTitle('Components - Accordion Collapse - Vuero')
</script>

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
              <h1 class="title is-4">Collapse</h1>
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
                    <span>Accordions</span>
                  </a>
                </li>
                <li>
                  <a>
                    <span>Collapse</span>
                  </a>
                </li>
              </ul>
            </nav>

            <div class="columns is-multiline">
              <div class="column is-12">
                <!--Collapse-->
                <div class="demo-card">
                  <div class="demo-title">
                    <h3 class="title is-thin is-5">Collapse</h3>
                    <p>
                      Vuero provides a simple to use collapse component. There
                      are 2 available variations that you can use to change the
                      collapse header icon. Add the <code>has-plus</code> class
                      to the <code>collapse-icon</code> element to use a plus
                      icon. Add the <code>has-chevron</code> class to the
                      <code>collapse-icon</code> element to use a chevron icon.
                      Check markup for more details.
                    </p>
                    <a class="code-trigger">
                      <Icon icon="feather:code" class="open" />
                      <Icon icon="feather:x" class="close" />
                    </a>
                  </div>
                  <div class="card-inner no-padding">
                    <div class="highlight highlight-block">
                      <pre><code class="code-highlight">
&#x3C;div class=&#x22;collapse has-plus&#x22;&#x3E;
    &#x3C;div class=&#x22;collapse-header&#x22;&#x3E;
        &#x3C;h3&#x3E;Plus Item 1&#x3C;/h3&#x3E;
        &#x3C;div class=&#x22;collapse-icon&#x22;&#x3E;
            &#x3C;i data-feather=&#x22;plus&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;/div&#x3E;
    &#x3C;/div&#x3E;
    &#x3C;div class=&#x22;collapse-content&#x22;&#x3E;
        &#x3C;p&#x3E;Lorem ipsum dolor sit amet, consectetur adipiscing elit. At multis malis affectus. Sed quid sentiat, non videtis. Sumenda potius quam expetenda. Quacumque enim ingredimur, in aliqua historia vestigium ponimus. Duarum enim vitarum nobis erunt instituta capienda. Cupiditates non Epicuri divisione finiebat, sed sua satietate.&#x3C;/p&#x3E;

        &#x3C;p&#x3E;Duo Reges: constructio interrete. Quid est igitur, inquit, quod requiras? Quid ergo attinet gloriose loqui, nisi constanter loquare? Collige omnia, quae soletis: Praesidium amicorum. Non igitur bene.&#x3C;/p&#x3E;
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;

&#x3C;div class=&#x22;collapse has-chevron&#x22;&#x3E;
    &#x3C;div class=&#x22;collapse-header&#x22;&#x3E;
        &#x3C;h3&#x3E;Chevron Item 2&#x3C;/h3&#x3E;
        &#x3C;div class=&#x22;collapse-icon&#x22;&#x3E;
            &#x3C;i data-feather=&#x22;chevron-down&#x22;&#x3E;&#x3C;/i&#x3E;
        &#x3C;/div&#x3E;
    &#x3C;/div&#x3E;
    &#x3C;div class=&#x22;collapse-content&#x22;&#x3E;
        &#x3C;p&#x3E;Lorem ipsum dolor sit amet, consectetur adipiscing elit. At multis malis affectus. Sed quid sentiat, non videtis. Sumenda potius quam expetenda. Quacumque enim ingredimur, in aliqua historia vestigium ponimus. Duarum enim vitarum nobis erunt instituta capienda. Cupiditates non Epicuri divisione finiebat, sed sua satietate.&#x3C;/p&#x3E;

        &#x3C;p&#x3E;Duo Reges: constructio interrete. Quid est igitur, inquit, quod requiras? Quid ergo attinet gloriose loqui, nisi constanter loquare? Collige omnia, quae soletis: Praesidium amicorum. Non igitur bene.&#x3C;/p&#x3E;
    &#x3C;/div&#x3E;
&#x3C;/div&#x3E;
</code></pre>
                    </div>
                  </div>
                </div>
              </div>

              <div class="column is-6">
                <div class="collapse has-plus">
                  <div class="collapse-header">
                    <h3>Plus Item 1</h3>
                    <div class="collapse-icon">
                      <Icon icon="feather:plus" />
                    </div>
                  </div>
                  <div class="collapse-content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      At multis malis affectus. Sed quid sentiat, non videtis.
                      Sumenda potius quam expetenda. Quacumque enim ingredimur,
                      in aliqua historia vestigium ponimus. Duarum enim vitarum
                      nobis erunt instituta capienda. Cupiditates non Epicuri
                      divisione finiebat, sed sua satietate.
                    </p>

                    <p>
                      Duo Reges: constructio interrete. Quid est igitur, inquit,
                      quod requiras? Quid ergo attinet gloriose loqui, nisi
                      constanter loquare? Collige omnia, quae soletis:
                      Praesidium amicorum. Non igitur bene.
                    </p>
                  </div>
                </div>

                <div class="collapse has-plus">
                  <div class="collapse-header">
                    <h3>Plus Item 2</h3>
                    <div class="collapse-icon">
                      <Icon icon="feather:plus" />
                    </div>
                  </div>
                  <div class="collapse-content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      At multis malis affectus. Sed quid sentiat, non videtis.
                      Sumenda potius quam expetenda. Quacumque enim ingredimur,
                      in aliqua historia vestigium ponimus. Duarum enim vitarum
                      nobis erunt instituta capienda. Cupiditates non Epicuri
                      divisione finiebat, sed sua satietate.
                    </p>

                    <p>
                      Duo Reges: constructio interrete. Quid est igitur, inquit,
                      quod requiras? Quid ergo attinet gloriose loqui, nisi
                      constanter loquare? Collige omnia, quae soletis:
                      Praesidium amicorum. Non igitur bene.
                    </p>
                  </div>
                </div>

                <div class="collapse has-plus">
                  <div class="collapse-header">
                    <h3>Plus Item 3</h3>
                    <div class="collapse-icon">
                      <Icon icon="feather:plus" />
                    </div>
                  </div>
                  <div class="collapse-content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      At multis malis affectus. Sed quid sentiat, non videtis.
                      Sumenda potius quam expetenda. Quacumque enim ingredimur,
                      in aliqua historia vestigium ponimus. Duarum enim vitarum
                      nobis erunt instituta capienda. Cupiditates non Epicuri
                      divisione finiebat, sed sua satietate.
                    </p>

                    <p>
                      Duo Reges: constructio interrete. Quid est igitur, inquit,
                      quod requiras? Quid ergo attinet gloriose loqui, nisi
                      constanter loquare? Collige omnia, quae soletis:
                      Praesidium amicorum. Non igitur bene.
                    </p>
                  </div>
                </div>
              </div>

              <div class="column is-6">
                <div class="collapse has-chevron">
                  <div class="collapse-header">
                    <h3>Chevron Item 1</h3>
                    <div class="collapse-icon">
                      <Icon icon="feather:chevron-down" />
                    </div>
                  </div>
                  <div class="collapse-content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      At multis malis affectus. Sed quid sentiat, non videtis.
                      Sumenda potius quam expetenda. Quacumque enim ingredimur,
                      in aliqua historia vestigium ponimus. Duarum enim vitarum
                      nobis erunt instituta capienda. Cupiditates non Epicuri
                      divisione finiebat, sed sua satietate.
                    </p>

                    <p>
                      Duo Reges: constructio interrete. Quid est igitur, inquit,
                      quod requiras? Quid ergo attinet gloriose loqui, nisi
                      constanter loquare? Collige omnia, quae soletis:
                      Praesidium amicorum. Non igitur bene.
                    </p>
                  </div>
                </div>

                <div class="collapse has-chevron">
                  <div class="collapse-header">
                    <h3>Chevron Item 2</h3>
                    <div class="collapse-icon">
                      <Icon icon="feather:chevron-down" />
                    </div>
                  </div>
                  <div class="collapse-content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      At multis malis affectus. Sed quid sentiat, non videtis.
                      Sumenda potius quam expetenda. Quacumque enim ingredimur,
                      in aliqua historia vestigium ponimus. Duarum enim vitarum
                      nobis erunt instituta capienda. Cupiditates non Epicuri
                      divisione finiebat, sed sua satietate.
                    </p>

                    <p>
                      Duo Reges: constructio interrete. Quid est igitur, inquit,
                      quod requiras? Quid ergo attinet gloriose loqui, nisi
                      constanter loquare? Collige omnia, quae soletis:
                      Praesidium amicorum. Non igitur bene.
                    </p>
                  </div>
                </div>

                <div class="collapse has-chevron">
                  <div class="collapse-header">
                    <h3>Chevron Item 3</h3>
                    <div class="collapse-icon">
                      <Icon icon="feather:chevron-down" />
                    </div>
                  </div>
                  <div class="collapse-content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      At multis malis affectus. Sed quid sentiat, non videtis.
                      Sumenda potius quam expetenda. Quacumque enim ingredimur,
                      in aliqua historia vestigium ponimus. Duarum enim vitarum
                      nobis erunt instituta capienda. Cupiditates non Epicuri
                      divisione finiebat, sed sua satietate.
                    </p>

                    <p>
                      Duo Reges: constructio interrete. Quid est igitur, inquit,
                      quod requiras? Quid ergo attinet gloriose loqui, nisi
                      constanter loquare? Collige omnia, quae soletis:
                      Praesidium amicorum. Non igitur bene.
                    </p>
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

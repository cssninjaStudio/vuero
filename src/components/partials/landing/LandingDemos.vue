<script setup lang="ts">
import sidebar from '/@src/data/landing/sidebar.json'
import auth from '/@src/data/landing/auth.json'
import minimal from '/@src/data/landing/minimal.json'
import templates from '/@src/data/landing/templates.json'
import navbar from '/@src/data/landing/navbar.json'

function displayOrder(
  a: { displayOrder: number },
  b: { displayOrder: number }
) {
  if (a.displayOrder < b.displayOrder) {
    return -1
  }
  if (a.displayOrder > b.displayOrder) {
    return 1
  }
  return 0
}

const sidebarDemos = sidebar.sort(displayOrder)
const authDemos = auth.sort(displayOrder)
const minimalDemos = minimal.sort(displayOrder)
const templatesDemos = templates.sort(displayOrder)
const navbarDemos = navbar.sort(displayOrder)
</script>

<template>
  <div class="vuero-demos">
    <!--ADMIN-->
    <div class="demo-section">
      <div class="demo-section-title">
        <img
          class="light-image-block-l"
          src="/images/icons/components/layout-1.svg"
          alt=""
        />
        <img
          class="dark-image-block-l"
          src="/images/icons/components/layout-1-dark.svg"
          alt=""
        />
        <div class="title-meta">
          <h3>Sidebar Layout</h3>
          <p>With a side navigation</p>
        </div>
      </div>

      <div class="columns is-multiline">
        <!-- Demo item -->
        <div
          v-for="(item, index) in sidebarDemos"
          :key="index"
          class="column is-4 has-text-centered"
        >
          <figure class="vuero-demo-wrapper loaded">
            <span v-if="item.new" class="new-tag">New</span>
            <img
              class="light-image-block-l"
              :src="item.screenshot.light"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              :src="item.screenshot.dark"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>{{ item.category }}</span>
                  <span>{{ item.name }}</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="item.route">
                    Go to demo
                    <i aria-hidden="true" class="fas fa-angle-right"></i>
                  </RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>
      </div>
    </div>

    <!--WEBAPP-->
    <div class="demo-section">
      <div class="demo-section-title">
        <img
          class="light-image-block-l"
          src="/images/icons/components/layout-2.svg"
          alt=""
        />
        <img
          class="dark-image-block-l"
          src="/images/icons/components/layout-2-dark.svg"
          alt=""
        />
        <div class="title-meta">
          <h3>Navbar Layout</h3>
          <p>With a top navigation</p>
        </div>
      </div>

      <div class="columns is-multiline">
        <!-- Demo item -->
        <div
          v-for="(item, index) in navbarDemos"
          :key="index"
          class="column is-4 has-text-centered"
        >
          <figure class="vuero-demo-wrapper loaded">
            <span v-if="item.new" class="new-tag">New</span>
            <img
              class="light-image-block-l"
              :src="item.screenshot.light"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              :src="item.screenshot.dark"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>{{ item.category }}</span>
                  <span>{{ item.name }}</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="item.route">
                    Go to demo
                    <i aria-hidden="true" class="fas fa-angle-right"></i>
                  </RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>
      </div>
    </div>

    <!--MINIMAL-->
    <div class="demo-section">
      <div class="demo-section-title">
        <img
          class="light-image-block-l"
          src="/images/icons/components/layout-3.svg"
          alt=""
        />
        <img
          class="dark-image-block-l"
          src="/images/icons/components/layout-3-dark.svg"
          alt=""
        />
        <div class="title-meta">
          <h3>Minimal Layout</h3>
          <p>Without any navigation</p>
        </div>
      </div>

      <div class="columns is-multiline">
        <!-- Demo item -->
        <div
          v-for="(item, index) in minimalDemos"
          :key="index"
          class="column is-4 has-text-centered"
        >
          <figure class="vuero-demo-wrapper loaded">
            <span v-if="item.new" class="new-tag">New</span>
            <img
              class="light-image-block-l"
              :src="item.screenshot.light"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              :src="item.screenshot.dark"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>{{ item.category }}</span>
                  <span>{{ item.name }}</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="item.route">
                    Go to demo
                    <i aria-hidden="true" class="fas fa-angle-right"></i>
                  </RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>
      </div>
    </div>

    <!--TEMPLATES-->
    <div class="demo-section">
      <div class="demo-section-title">
        <img
          class="light-image-block-l"
          src="/images/icons/components/layout-3.svg"
          alt=""
        />
        <img
          class="dark-image-block-l"
          src="/images/icons/components/layout-3-dark.svg"
          alt=""
        />
        <div class="title-meta">
          <h3>Auth</h3>
          <p>Sign-In &amp; Sign-Up templates</p>
        </div>
      </div>

      <div class="columns is-multiline">
        <!-- Demo item -->
        <div
          v-for="(item, index) in authDemos"
          :key="index"
          class="column is-4 has-text-centered"
        >
          <figure class="vuero-demo-wrapper loaded">
            <span v-if="item.new" class="new-tag">New</span>
            <img
              class="light-image-block-l"
              :src="item.screenshot.light"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              :src="item.screenshot.dark"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>{{ item.category }}</span>
                  <span>{{ item.name }}</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="item.route">
                    Go to demo
                    <i aria-hidden="true" class="fas fa-angle-right"></i>
                  </RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>
      </div>
    </div>

    <!--TEMPLATES-->
    <div class="demo-section">
      <div class="demo-section-title">
        <img
          class="light-image-block-l"
          src="/images/icons/components/layout-3.svg"
          alt=""
        />
        <img
          class="dark-image-block-l"
          src="/images/icons/components/layout-3-dark.svg"
          alt=""
        />
        <div class="title-meta">
          <h3>Templates</h3>
          <p>Blank templates to start fast</p>
        </div>
      </div>

      <div class="columns is-multiline">
        <!-- Demo item -->
        <div
          v-for="(item, index) in templatesDemos"
          :key="index"
          class="column is-4 has-text-centered"
        >
          <figure class="vuero-demo-wrapper loaded">
            <span v-if="item.new" class="new-tag">New</span>
            <img
              class="light-image-block-l"
              :src="item.screenshot.light"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              :src="item.screenshot.dark"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>{{ item.category }}</span>
                  <span>{{ item.name }}</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="item.route">
                    Go to demo
                    <i aria-hidden="true" class="fas fa-angle-right"></i>
                  </RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>
      </div>
    </div>
  </div>
</template>

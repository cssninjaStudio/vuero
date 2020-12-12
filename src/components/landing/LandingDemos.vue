<script lang="ts">
import { defineComponent } from 'vue'

const LandingDemos = defineComponent({
  name: 'LandingDemos',
  components: {},
  setup() {
    // LandingDemos - Composition API

    return {}
  },
})

export default LandingDemos
</script>

<template>
  <div class="huro-demos">
    <!--ADMIN-->
    <div class="demo-section">
      <div class="demo-section-title">
        <img
          class="light-image-block-l"
          src="assets/img/icons/components/layout-1.svg"
          alt=""
        />
        <img
          class="dark-image-block-l"
          src="assets/img/icons/components/layout-1-dark.svg"
          alt=""
        />
        <div class="title-meta">
          <h3>Sidebar Layout</h3>
          <p>With a side navigation</p>
        </div>
      </div>

      <div class="columns is-multiline">
        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/admin-dashboards-personal-1.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/admin-dashboards-personal-1-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Dashboards</span>
                  <span>Personal 1</span>
                </div>
                <div class="demo-link">
                  <a href="/admin-dashboards-personal-1.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/admin-dashboards-personal-2.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/admin-dashboards-personal-2-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Dashboards</span>
                  <span>Personal 2</span>
                </div>
                <div class="demo-link">
                  <a href="/admin-dashboards-personal-2.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/admin-dashboards-personal-3.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/admin-dashboards-personal-3-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Dashboards</span>
                  <span>Personal 3</span>
                </div>
                <div class="demo-link">
                  <a href="/admin-dashboards-personal-3.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/admin-dashboards-finance-1.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/admin-dashboards-finance-1-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Dashboards</span>
                  <span>Finance 1</span>
                </div>
                <div class="demo-link">
                  <a href="/admin-dashboards-finance-1.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/admin-dashboards-finance-2.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/admin-dashboards-finance-2-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Dashboards</span>
                  <span>Finance 2</span>
                </div>
                <div class="demo-link">
                  <a href="/admin-dashboards-finance-2.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/admin-dashboards-finance-3.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/admin-dashboards-finance-3-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Dashboards</span>
                  <span>Finance 3</span>
                </div>
                <div class="demo-link">
                  <a href="/admin-dashboards-finance-3.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/admin-dashboards-banking-1.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/admin-dashboards-banking-1-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Dashboards</span>
                  <span>Banking 1</span>
                </div>
                <div class="demo-link">
                  <a href="/admin-dashboards-banking-1.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/admin-dashboards-banking-2.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/admin-dashboards-banking-2-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Dashboards</span>
                  <span>Banking 2</span>
                </div>
                <div class="demo-link">
                  <a href="/admin-dashboards-banking-2.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/admin-dashboards-banking-3.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/admin-dashboards-banking-3-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Dashboards</span>
                  <span>Banking 3</span>
                </div>
                <div class="demo-link">
                  <a href="/admin-dashboards-banking-3.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/admin-dashboards-business-1.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/admin-dashboards-business-1-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Dashboards</span>
                  <span>Business 1</span>
                </div>
                <div class="demo-link">
                  <a href="/admin-dashboards-business-1.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/admin-dashboards-business-2.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/admin-dashboards-business-2-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Dashboards</span>
                  <span>Business 2</span>
                </div>
                <div class="demo-link">
                  <a href="/admin-dashboards-business-2.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <span class="new-tag">New</span>
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/admin-dashboards-business-3.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/admin-dashboards-business-3-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Dashboards</span>
                  <span>Business 3</span>
                </div>
                <div class="demo-link">
                  <a href="/admin-dashboards-business-3.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/admin-dashboards-lifestyle-1.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/admin-dashboards-lifestyle-1-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Dashboards</span>
                  <span>Lifestyle 1</span>
                </div>
                <div class="demo-link">
                  <a href="/admin-dashboards-lifestyle-1.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/admin-dashboards-lifestyle-2.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/admin-dashboards-lifestyle-2-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Dashboards</span>
                  <span>Lifestyle 2</span>
                </div>
                <div class="demo-link">
                  <a href="/admin-dashboards-lifestyle-2.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/admin-dashboards-lifestyle-3.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/admin-dashboards-lifestyle-3-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Dashboards</span>
                  <span>Lifestyle 3</span>
                </div>
                <div class="demo-link">
                  <a href="/admin-dashboards-lifestyle-3.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <span class="new-tag">New</span>
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/admin-dashboards-lifestyle-4.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/admin-dashboards-lifestyle-4-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Dashboards</span>
                  <span>Lifestyle 4</span>
                </div>
                <div class="demo-link">
                  <a href="/admin-dashboards-lifestyle-4.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/admin-dashboards-ecommerce-1.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/admin-dashboards-ecommerce-1-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Dashboards</span>
                  <span>Ecommerce 1</span>
                </div>
                <div class="demo-link">
                  <a href="/admin-dashboards-ecommerce-1.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/admin-dashboards-food.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/admin-dashboards-food-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Dashboards</span>
                  <span>Food Delivery</span>
                </div>
                <div class="demo-link">
                  <a href="/admin-dashboards-apps-1.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/admin-list-view-1.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/admin-list-view-1-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>List View 1</span>
                </div>
                <div class="demo-link">
                  <a href="/admin-list-view-1.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/admin-list-view-2.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/admin-list-view-2-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>List View 2</span>
                </div>
                <div class="demo-link">
                  <a href="/admin-list-view-2.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/admin-list-view-3.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/admin-list-view-3-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>List View 3</span>
                </div>
                <div class="demo-link">
                  <a href="/admin-list-view-3.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/admin-list-view-4.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/admin-list-view-4-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>List View 4</span>
                </div>
                <div class="demo-link">
                  <a href="/admin-list-view-4.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/admin-list-flex-1.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/admin-list-flex-1-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>Flex List 1</span>
                </div>
                <div class="demo-link">
                  <a href="/admin-list-flex-1.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/admin-list-flex-2.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/admin-list-flex-2-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>Flex List 2</span>
                </div>
                <div class="demo-link">
                  <a href="/admin-list-flex-2.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/admin-list-flex-3.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/admin-list-flex-3-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>Flex List 3</span>
                </div>
                <div class="demo-link">
                  <a href="/admin-list-flex-3.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/admin-list-datatable-1.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/admin-list-datatable-1-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>Datatable 1</span>
                </div>
                <div class="demo-link">
                  <a href="/admin-list-datatable-1.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/admin-list-datatable-2.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/admin-list-datatable-2-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>Datatable 2</span>
                </div>
                <div class="demo-link">
                  <a href="/admin-list-datatable-2.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/admin-list-datatable-3.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/admin-list-datatable-3-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>Datatable 3</span>
                </div>
                <div class="demo-link">
                  <a href="/admin-list-datatable-3.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/admin-list-datatable-4.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/admin-list-datatable-4-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>Datatable 4</span>
                </div>
                <div class="demo-link">
                  <a href="/admin-list-datatable-4.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/admin-grid-cards-1.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/admin-grid-cards-1-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>Card Grid 1</span>
                </div>
                <div class="demo-link">
                  <a href="/admin-grid-cards-1.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/admin-grid-cards-2.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/admin-grid-cards-2-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>Card Grid 2</span>
                </div>
                <div class="demo-link">
                  <a href="/admin-grid-cards-2.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/admin-grid-cards-3.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/admin-grid-cards-3-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>Card Grid 3</span>
                </div>
                <div class="demo-link">
                  <a href="/admin-grid-cards-3.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/admin-grid-cards-4.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/admin-grid-cards-4-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>Card Grid 4</span>
                </div>
                <div class="demo-link">
                  <a href="/admin-grid-cards-4.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/admin-grid-tiles-1.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/admin-grid-tiles-1-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>Tile Grid 1</span>
                </div>
                <div class="demo-link">
                  <a href="/admin-grid-tiles-1.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/admin-grid-tiles-2.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/admin-grid-tiles-2-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>Tile Grid 2</span>
                </div>
                <div class="demo-link">
                  <a href="/admin-grid-tiles-2.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/admin-grid-tiles-3.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/admin-grid-tiles-3-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>Tile Grid 3</span>
                </div>
                <div class="demo-link">
                  <a href="/admin-grid-tiles-3.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/admin-grid-users-1.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/admin-grid-users-1-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>User Grid 1</span>
                </div>
                <div class="demo-link">
                  <a href="/admin-grid-users-1.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/admin-grid-users-2.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/admin-grid-users-2-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>User Grid 2</span>
                </div>
                <div class="demo-link">
                  <a href="/admin-grid-users-2.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/admin-grid-users-3.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/admin-grid-users-3-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>User Grid 3</span>
                </div>
                <div class="demo-link">
                  <a href="/admin-grid-users-3.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/admin-grid-users-4.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/admin-grid-users-4-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>User Grid 4</span>
                </div>
                <div class="demo-link">
                  <a href="/admin-grid-users-4.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/admin-messaging-chat.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/admin-messaging-chat-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>Chat Messaging</span>
                </div>
                <div class="demo-link">
                  <a href="/admin-messaging-chat.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/admin-profile-view.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/admin-profile-view-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>User Profile</span>
                </div>
                <div class="demo-link">
                  <a href="/admin-profile-view.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/admin-profile-edit-1.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/admin-profile-edit-1-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>Edit Profile 1</span>
                </div>
                <div class="demo-link">
                  <a href="/admin-profile-edit-1.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/admin-profile-edit-2.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/admin-profile-edit-2-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>Edit Profile 2</span>
                </div>
                <div class="demo-link">
                  <a href="/admin-profile-edit-2.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/admin-profile-edit-3.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/admin-profile-edit-3-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>Edit Profile 3</span>
                </div>
                <div class="demo-link">
                  <a href="/admin-profile-edit-3.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/admin-profile-edit-4.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/admin-profile-edit-4-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>Edit Profile 4</span>
                </div>
                <div class="demo-link">
                  <a href="/admin-profile-edit-4.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/admin-profile-notifications.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/admin-profile-notifications-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>Notifications</span>
                </div>
                <div class="demo-link">
                  <a href="/admin-profile-notifications.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/admin-profile-settings.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/admin-profile-settings-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>Settings</span>
                </div>
                <div class="demo-link">
                  <a href="/admin-profile-settings.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/admin-projects-projects.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/admin-projects-projects-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>Projects 1</span>
                </div>
                <div class="demo-link">
                  <a href="/admin-projects-projects.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/admin-projects-projects-2.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/admin-projects-projects-2-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>Projects 2</span>
                </div>
                <div class="demo-link">
                  <a href="/admin-projects-projects-2.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/admin-projects-projects-3.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/admin-projects-projects-3-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>Projects 3</span>
                </div>
                <div class="demo-link">
                  <a href="/admin-projects-projects-3.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/admin-projects-project.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/admin-projects-project-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>Project Details</span>
                </div>
                <div class="demo-link">
                  <a href="/admin-projects-project.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/admin-kanban-board.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/admin-kanban-board-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>Kanban Board</span>
                </div>
                <div class="demo-link">
                  <a href="/admin-kanban-board.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/admin-search-results.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/admin-search-results-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>Search Results</span>
                </div>
                <div class="demo-link">
                  <a href="/admin-search-results.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/admin-search-empty.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/admin-search-empty-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>Empty Search</span>
                </div>
                <div class="demo-link">
                  <a href="/admin-search-empty.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/admin-saas-billing.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/admin-saas-billing-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>SaaS Billing</span>
                </div>
                <div class="demo-link">
                  <a href="/admin-saas-billing.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/admin-welcome.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/admin-welcome-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Utility</span>
                  <span>Welcome</span>
                </div>
                <div class="demo-link">
                  <a href="/admin-welcome.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/admin-action-page-1.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/admin-action-page-1-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Utility</span>
                  <span>Action Page 1</span>
                </div>
                <div class="demo-link">
                  <a href="/admin-action-page-1.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/admin-action-page-2.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/admin-action-page-2-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Utility</span>
                  <span>Action Page 2</span>
                </div>
                <div class="demo-link">
                  <a href="/admin-action-page-2.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/admin-utility-account-confirm.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/admin-utility-account-confirm-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Utility</span>
                  <span>Confirm Account</span>
                </div>
                <div class="demo-link">
                  <a href="/admin-utility-account-confirm.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/admin-utility-promotion.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/admin-utility-promotion-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Utility</span>
                  <span>Promotion</span>
                </div>
                <div class="demo-link">
                  <a href="/admin-utility-promotion.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/admin-utility-invoice.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/admin-utility-invoice-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Utility</span>
                  <span>Invoice</span>
                </div>
                <div class="demo-link">
                  <a href="/admin-utility-invoice.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/admin-dashboards-widgets-ui.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/admin-dashboards-widgets-ui-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Widgets</span>
                  <span>UI Widgets</span>
                </div>
                <div class="demo-link">
                  <a href="/admin-dashboards-widgets-ui.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/admin-dashboards-widgets-creative.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/admin-dashboards-widgets-creative-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Widgets</span>
                  <span>Creative Widgets</span>
                </div>
                <div class="demo-link">
                  <a
                    href="/admin-dashboards-widgets-creative.html"
                    target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/admin-dashboards-widgets-list.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/admin-dashboards-widgets-list-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Widgets</span>
                  <span>List Widgets</span>
                </div>
                <div class="demo-link">
                  <a href="/admin-dashboards-widgets-list.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/admin-dashboards-widgets-stats.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/admin-dashboards-widgets-stats-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Widgets</span>
                  <span>Stat Widgets</span>
                </div>
                <div class="demo-link">
                  <a href="/admin-dashboards-widgets-stats.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/admin-form-layouts-1.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/admin-form-layouts-1-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Forms</span>
                  <span>Layout 1</span>
                </div>
                <div class="demo-link">
                  <a href="/admin-form-layouts-1.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/admin-form-layouts-2.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/admin-form-layouts-2-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Forms</span>
                  <span>Layout 2</span>
                </div>
                <div class="demo-link">
                  <a href="/admin-form-layouts-2.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/admin-form-layouts-3.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/admin-form-layouts-3-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Forms</span>
                  <span>Layout 3</span>
                </div>
                <div class="demo-link">
                  <a href="/admin-form-layouts-3.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/admin-form-layouts-4.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/admin-form-layouts-4-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Forms</span>
                  <span>Layout 4</span>
                </div>
                <div class="demo-link">
                  <a href="/admin-form-layouts-4.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/admin-onboarding-page-1.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/admin-onboarding-page-1-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Utility</span>
                  <span>Onboarding 1</span>
                </div>
                <div class="demo-link">
                  <a href="/admin-onboarding-page-1.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/admin-onboarding-page-2.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/admin-onboarding-page-2-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Utility</span>
                  <span>Onboarding 2</span>
                </div>
                <div class="demo-link">
                  <a href="/admin-onboarding-page-2.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/admin-onboarding-page-3.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/admin-onboarding-page-3-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Utility</span>
                  <span>Onboarding 3</span>
                </div>
                <div class="demo-link">
                  <a href="/admin-onboarding-page-3.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/admin-onboarding-page-4.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/admin-onboarding-page-4-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Utility</span>
                  <span>Onboarding 4</span>
                </div>
                <div class="demo-link">
                  <a href="/admin-onboarding-page-4.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/admin-onboarding-page-5.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/admin-onboarding-page-5-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Utility</span>
                  <span>Onboarding 5</span>
                </div>
                <div class="demo-link">
                  <a href="/admin-onboarding-page-5.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
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
          src="assets/img/icons/components/layout-2.svg"
          alt=""
        />
        <img
          class="dark-image-block-l"
          src="assets/img/icons/components/layout-2-dark.svg"
          alt=""
        />
        <div class="title-meta">
          <h3>Navbar Layout</h3>
          <p>With a top navigation</p>
        </div>
      </div>

      <div class="columns is-multiline">
        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-dashboards-personal-1.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-dashboards-personal-1-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Dashboards</span>
                  <span>Personal 1</span>
                </div>
                <div class="demo-link">
                  <a href="/webapp-dashboards-personal-1.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-dashboards-personal-2.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-dashboards-personal-2-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Dashboards</span>
                  <span>Personal 2</span>
                </div>
                <div class="demo-link">
                  <a href="/webapp-dashboards-personal-2.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-dashboards-personal-3.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-dashboards-personal-3-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Dashboards</span>
                  <span>Personal 3</span>
                </div>
                <div class="demo-link">
                  <a href="/webapp-dashboards-personal-3.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-dashboards-finance-1.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-dashboards-finance-1-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Dashboards</span>
                  <span>Finance 1</span>
                </div>
                <div class="demo-link">
                  <a href="/webapp-dashboards-finance-1.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-dashboards-finance-2.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-dashboards-finance-2-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Dashboards</span>
                  <span>Finance 2</span>
                </div>
                <div class="demo-link">
                  <a href="/webapp-dashboards-finance-2.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-dashboards-finance-3.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-dashboards-finance-3-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Dashboards</span>
                  <span>Finance 3</span>
                </div>
                <div class="demo-link">
                  <a href="/webapp-dashboards-finance-3.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-dashboards-banking-1.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-dashboards-banking-1-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Dashboards</span>
                  <span>Banking 1</span>
                </div>
                <div class="demo-link">
                  <a href="/webapp-dashboards-banking-1.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-dashboards-banking-2.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-dashboards-banking-2-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Dashboards</span>
                  <span>Banking 2</span>
                </div>
                <div class="demo-link">
                  <a href="/webapp-dashboards-banking-2.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-dashboards-banking-3.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-dashboards-banking-3-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Dashboards</span>
                  <span>Banking 3</span>
                </div>
                <div class="demo-link">
                  <a href="/webapp-dashboards-banking-3.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-dashboards-business-1.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-dashboards-business-1-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Dashboards</span>
                  <span>Business 1</span>
                </div>
                <div class="demo-link">
                  <a href="/webapp-dashboards-business-1.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-dashboards-business-2.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-dashboards-business-2-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Dashboards</span>
                  <span>Business 2</span>
                </div>
                <div class="demo-link">
                  <a href="/webapp-dashboards-business-2.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <span class="new-tag">New</span>
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-dashboards-business-3.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-dashboards-business-3-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Dashboards</span>
                  <span>Business 3</span>
                </div>
                <div class="demo-link">
                  <a href="/webapp-dashboards-business-3.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-dashboards-lifestyle-1.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-dashboards-lifestyle-1-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Dashboards</span>
                  <span>Lifestyle 1</span>
                </div>
                <div class="demo-link">
                  <a href="/webapp-dashboards-lifestyle-1.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-dashboards-lifestyle-2.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-dashboards-lifestyle-2-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Dashboards</span>
                  <span>Lifestyle 2</span>
                </div>
                <div class="demo-link">
                  <a href="/webapp-dashboards-lifestyle-2.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-dashboards-lifestyle-3.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-dashboards-lifestyle-3-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Dashboards</span>
                  <span>Lifestyle 3</span>
                </div>
                <div class="demo-link">
                  <a href="/webapp-dashboards-lifestyle-3.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <span class="new-tag">New</span>
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-dashboards-lifestyle-4.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-dashboards-lifestyle-4-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Dashboards</span>
                  <span>Lifestyle 4</span>
                </div>
                <div class="demo-link">
                  <a href="/webapp-dashboards-lifestyle-4.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-dashboards-ecommerce-1.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-dashboards-ecommerce-1-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Dashboards</span>
                  <span>Ecommerce 1</span>
                </div>
                <div class="demo-link">
                  <a href="/webapp-dashboards-ecommerce-1.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-dashboards-food.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-dashboards-food-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Dashboards</span>
                  <span>Food Delivery</span>
                </div>
                <div class="demo-link">
                  <a href="/webapp-dashboards-apps-1.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-profile-view.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-profile-view-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>User Profile</span>
                </div>
                <div class="demo-link">
                  <a href="/webapp-profile-view.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-list-view-1.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-list-view-1-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>List View 1</span>
                </div>
                <div class="demo-link">
                  <a href="/webapp-list-view-1.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-list-view-2.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-list-view-2-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>List View 2</span>
                </div>
                <div class="demo-link">
                  <a href="/webapp-list-view-2.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-list-view-3.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-list-view-3-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>List View 3</span>
                </div>
                <div class="demo-link">
                  <a href="/webapp-list-view-3.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-list-view-4.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-list-view-4-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>List View 4</span>
                </div>
                <div class="demo-link">
                  <a href="/webapp-list-view-4.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-list-flex-1.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-list-flex-1-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>Flex List 1</span>
                </div>
                <div class="demo-link">
                  <a href="/webapp-list-flex-1.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-list-flex-2.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-list-flex-2-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>Flex List 2</span>
                </div>
                <div class="demo-link">
                  <a href="/webapp-list-flex-2.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-list-flex-3.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-list-flex-3-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>Flex List 3</span>
                </div>
                <div class="demo-link">
                  <a href="/webapp-list-flex-3.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-list-datatable-1.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-list-datatable-1-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>Datatable 1</span>
                </div>
                <div class="demo-link">
                  <a href="/webapp-list-datatable-1.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-list-datatable-2.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-list-datatable-2-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>Datatable 2</span>
                </div>
                <div class="demo-link">
                  <a href="/webapp-list-datatable-2.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-list-datatable-3.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-list-datatable-3-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>Datatable 3</span>
                </div>
                <div class="demo-link">
                  <a href="/webapp-list-datatable-3.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-list-datatable-4.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-list-datatable-4-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>Datatable 4</span>
                </div>
                <div class="demo-link">
                  <a href="/webapp-list-datatable-4.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-grid-cards-1.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-grid-cards-1-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>Card Grid 1</span>
                </div>
                <div class="demo-link">
                  <a href="/webapp-grid-cards-1.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-grid-cards-2.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-grid-cards-2-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>Card Grid 2</span>
                </div>
                <div class="demo-link">
                  <a href="/webapp-grid-cards-2.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-grid-cards-3.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-grid-cards-3-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>Card Grid 3</span>
                </div>
                <div class="demo-link">
                  <a href="/webapp-grid-cards-3.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-grid-cards-4.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-grid-cards-4-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>Card Grid 4</span>
                </div>
                <div class="demo-link">
                  <a href="/webapp-grid-cards-4.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-grid-tiles-1.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-grid-tiles-1-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>Tile Grid 1</span>
                </div>
                <div class="demo-link">
                  <a href="/webapp-grid-tiles-1.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-grid-tiles-2.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-grid-tiles-2-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>Tile Grid 2</span>
                </div>
                <div class="demo-link">
                  <a href="/webapp-grid-tiles-2.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-grid-tiles-3.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-grid-tiles-3-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>Tile Grid 3</span>
                </div>
                <div class="demo-link">
                  <a href="/webapp-grid-tiles-3.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-grid-users-1.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-grid-users-1-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>User Grid 1</span>
                </div>
                <div class="demo-link">
                  <a href="/webapp-grid-users-1.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-grid-users-2.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-grid-users-2-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>User Grid 2</span>
                </div>
                <div class="demo-link">
                  <a href="/webapp-grid-users-2.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-grid-users-3.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-grid-users-3-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>User Grid 3</span>
                </div>
                <div class="demo-link">
                  <a href="/webapp-grid-users-3.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-grid-users-4.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-grid-users-4-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>User Grid 4</span>
                </div>
                <div class="demo-link">
                  <a href="/webapp-grid-users-4.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-messaging-chat.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-messaging-chat-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>Chat Messaging</span>
                </div>
                <div class="demo-link">
                  <a href="/webapp-messaging-chat.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-profile-edit-1.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-profile-edit-1-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>Edit Profile 1</span>
                </div>
                <div class="demo-link">
                  <a href="/webapp-profile-edit-1.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-profile-edit-2.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-profile-edit-2-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>Edit Profile 2</span>
                </div>
                <div class="demo-link">
                  <a href="/webapp-profile-edit-2.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-profile-edit-3.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-profile-edit-3-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>Edit Profile 3</span>
                </div>
                <div class="demo-link">
                  <a href="/webapp-profile-edit-3.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-profile-edit-4.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-profile-edit-4-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>Edit Profile 4</span>
                </div>
                <div class="demo-link">
                  <a href="/webapp-profile-edit-4.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-profile-notifications.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-profile-notifications-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>Notifications</span>
                </div>
                <div class="demo-link">
                  <a href="/webapp-profile-notifications.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-profile-settings.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-profile-settings-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>Settings</span>
                </div>
                <div class="demo-link">
                  <a href="/webapp-profile-settings.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-projects-projects.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-projects-projects-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>Projects 1</span>
                </div>
                <div class="demo-link">
                  <a href="/webapp-projects-projects.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-projects-projects-2.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-projects-projects-2-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>Projects 2</span>
                </div>
                <div class="demo-link">
                  <a href="/webapp-projects-projects-2.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-projects-projects-3.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-projects-projects-3-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>Projects 3</span>
                </div>
                <div class="demo-link">
                  <a href="/webapp-projects-projects-3.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-projects-project.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-projects-project-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>Project Details</span>
                </div>
                <div class="demo-link">
                  <a href="/webapp-projects-project.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-kanban-board.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-kanban-board-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>Kanban Board</span>
                </div>
                <div class="demo-link">
                  <a href="/webapp-kanban-board.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-search-results.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-search-results-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>Search Results</span>
                </div>
                <div class="demo-link">
                  <a href="/webapp-search-results.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-search-empty.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-search-empty-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>Empty Search</span>
                </div>
                <div class="demo-link">
                  <a href="/webapp-search-empty.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-saas-billing.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-saas-billing-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>SaaS Billing</span>
                </div>
                <div class="demo-link">
                  <a href="/webapp-saas-billing.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-welcome.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-welcome-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Utility</span>
                  <span>Welcome</span>
                </div>
                <div class="demo-link">
                  <a href="/webapp-welcome.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-action-page-1.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-action-page-1-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Utility</span>
                  <span>Action Page 1</span>
                </div>
                <div class="demo-link">
                  <a href="/webapp-action-page-1.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-action-page-2.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-action-page-2-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Utility</span>
                  <span>Action Page 2</span>
                </div>
                <div class="demo-link">
                  <a href="/webapp-action-page-2.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-utility-account-confirm.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-utility-account-confirm-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Utility</span>
                  <span>Confirm Account</span>
                </div>
                <div class="demo-link">
                  <a href="/webapp-utility-account-confirm.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-utility-promotion.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-utility-promotion-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Utility</span>
                  <span>Promotion</span>
                </div>
                <div class="demo-link">
                  <a href="/webapp-utility-promotion.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-utility-invoice.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-utility-invoice-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Utility</span>
                  <span>Invoice</span>
                </div>
                <div class="demo-link">
                  <a href="/webapp-utility-invoice.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-dashboards-widgets-ui.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-dashboards-widgets-ui-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Widgets</span>
                  <span>UI Widgets</span>
                </div>
                <div class="demo-link">
                  <a href="/webapp-dashboards-widgets-ui.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-dashboards-widgets-creative.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-dashboards-widgets-creative-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Widgets</span>
                  <span>Creative Widgets</span>
                </div>
                <div class="demo-link">
                  <a
                    href="/webapp-dashboards-widgets-creative.html"
                    target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-dashboards-widgets-list.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-dashboards-widgets-list-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Widgets</span>
                  <span>List Widgets</span>
                </div>
                <div class="demo-link">
                  <a href="/webapp-dashboards-widgets-list.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-dashboards-widgets-stats.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-dashboards-widgets-stats-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Widgets</span>
                  <span>Stat Widgets</span>
                </div>
                <div class="demo-link">
                  <a
                    href="/webapp-dashboards-widgets-stats.html"
                    target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-form-layouts-1.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-form-layouts-1-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Forms</span>
                  <span>Layout 1</span>
                </div>
                <div class="demo-link">
                  <a href="/webapp-form-layouts-1.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-form-layouts-2.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-form-layouts-2-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Forms</span>
                  <span>Layout 2</span>
                </div>
                <div class="demo-link">
                  <a href="/webapp-form-layouts-2.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-form-layouts-3.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-form-layouts-3-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Forms</span>
                  <span>Layout 3</span>
                </div>
                <div class="demo-link">
                  <a href="/webapp-form-layouts-3.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-form-layouts-4.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-form-layouts-4-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Forms</span>
                  <span>Layout 4</span>
                </div>
                <div class="demo-link">
                  <a href="/webapp-form-layouts-4.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-onboarding-page-1.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-onboarding-page-1-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Utility</span>
                  <span>Onboarding 1</span>
                </div>
                <div class="demo-link">
                  <a href="/webapp-onboarding-page-1.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-onboarding-page-2.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-onboarding-page-2-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Utility</span>
                  <span>Onboarding 2</span>
                </div>
                <div class="demo-link">
                  <a href="/webapp-onboarding-page-2.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-onboarding-page-3.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-onboarding-page-3-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Utility</span>
                  <span>Onboarding 3</span>
                </div>
                <div class="demo-link">
                  <a href="/webapp-onboarding-page-3.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-onboarding-page-4.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-onboarding-page-4-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Utility</span>
                  <span>Onboarding 4</span>
                </div>
                <div class="demo-link">
                  <a href="/webapp-onboarding-page-4.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-onboarding-page-5.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-onboarding-page-5-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Utility</span>
                  <span>Onboarding 5</span>
                </div>
                <div class="demo-link">
                  <a href="/webapp-onboarding-page-5.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
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
          src="assets/img/icons/components/layout-3.svg"
          alt=""
        />
        <img
          class="dark-image-block-l"
          src="assets/img/icons/components/layout-3-dark.svg"
          alt=""
        />
        <div class="title-meta">
          <h3>Minimal Layout</h3>
          <p>Without any navigation</p>
        </div>
      </div>

      <div class="columns is-multiline">
        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <span class="new-tag">New</span>
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/auth-login.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/auth-login-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Authentication</span>
                  <span>Login v1</span>
                </div>
                <div class="demo-link">
                  <a href="/auth-login-1.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <span class="new-tag">New</span>
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/auth-login-2.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/auth-login-2-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Authentication</span>
                  <span>Login v2</span>
                </div>
                <div class="demo-link">
                  <a href="/auth-login-2.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <span class="new-tag">New</span>
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/auth-login-3.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/auth-login-3-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Authentication</span>
                  <span>Login v3</span>
                </div>
                <div class="demo-link">
                  <a href="/auth-login-3.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <span class="new-tag">New</span>
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/auth-signup-2.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/auth-signup-2-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Authentication</span>
                  <span>Signup v1</span>
                </div>
                <div class="demo-link">
                  <a href="/auth-signup-2.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <span class="new-tag">New</span>
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/auth-signup-3.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/auth-signup-3-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Authentication</span>
                  <span>Signup v3</span>
                </div>
                <div class="demo-link">
                  <a href="/auth-signup-3.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              data-src="assets/img/photo/screenshots/auth-signup.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Authentication</span>
                  <span>Signup Flow</span>
                </div>
                <div class="demo-link">
                  <a href="/auth-signup-1.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              data-src="assets/img/photo/screenshots/admin-utility-status.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Authentication</span>
                  <span>Status Page</span>
                </div>
                <div class="demo-link">
                  <a href="/admin-utility-status.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/admin-dashboards-apps-2.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/admin-dashboards-apps-2-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Inbox</span>
                  <span>Inbox UI V1</span>
                </div>
                <div class="demo-link">
                  <a href="/admin-dashboards-apps-2.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/project-wizard-step-1.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/project-wizard-step-1-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Wizard</span>
                  <span>Wizard Step 1</span>
                </div>
                <div class="demo-link">
                  <a href="/wizard-v1.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/project-wizard-step-2.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/project-wizard-step-2-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Wizard</span>
                  <span>Wizard Step 2</span>
                </div>
                <div class="demo-link">
                  <a href="/wizard-v1.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/project-wizard-step-3.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/project-wizard-step-3-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Wizard</span>
                  <span>Wizard Step 3</span>
                </div>
                <div class="demo-link">
                  <a href="/wizard-v1.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/project-wizard-step-4.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/project-wizard-step-4-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Wizard</span>
                  <span>Wizard Step 4</span>
                </div>
                <div class="demo-link">
                  <a href="/wizard-v1.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/project-wizard-step-5.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/project-wizard-step-5-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Wizard</span>
                  <span>Wizard Step 5</span>
                </div>
                <div class="demo-link">
                  <a href="/wizard-v1.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/project-wizard-step-6.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/project-wizard-step-6-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Wizard</span>
                  <span>Wizard Step 6</span>
                </div>
                <div class="demo-link">
                  <a href="/wizard-v1.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/project-wizard-step-7.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/project-wizard-step-7-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Wizard</span>
                  <span>Wizard Step 7</span>
                </div>
                <div class="demo-link">
                  <a href="/wizard-v1.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/project-wizard-step-8.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/project-wizard-step-8-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Wizard</span>
                  <span>Wizard Step 8</span>
                </div>
                <div class="demo-link">
                  <a href="/wizard-v1.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              data-src="assets/img/photo/screenshots/error-page-1.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Utility</span>
                  <span>Error Page 1</span>
                </div>
                <div class="demo-link">
                  <a href="/error-page-1.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              data-src="assets/img/photo/screenshots/error-page-2.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Utility</span>
                  <span>Error Page 2</span>
                </div>
                <div class="demo-link">
                  <a href="/error-page-2.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              data-src="assets/img/photo/screenshots/error-page-3.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Utility</span>
                  <span>Error Page 3</span>
                </div>
                <div class="demo-link">
                  <a href="/error-page-3.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              data-src="assets/img/photo/screenshots/error-page-4.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Utility</span>
                  <span>Error Page 4</span>
                </div>
                <div class="demo-link">
                  <a href="/error-page-4.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              data-src="assets/img/photo/screenshots/error-page-5.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Utility</span>
                  <span>Error Page 5</span>
                </div>
                <div class="demo-link">
                  <a href="/error-page-5.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
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
          src="assets/img/icons/components/layout-3.svg"
          alt=""
        />
        <img
          class="dark-image-block-l"
          src="assets/img/icons/components/layout-3-dark.svg"
          alt=""
        />
        <div class="title-meta">
          <h3>Templates</h3>
          <p>Blank templates to start fast</p>
        </div>
      </div>

      <div class="columns is-multiline">
        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/admin-blank-page-1.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/admin-blank-page-1-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Admin</span>
                  <span>Regular Sidebar</span>
                </div>
                <div class="demo-link">
                  <a href="/admin-blank-page-1.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>
        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/admin-blank-page-2.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/admin-blank-page-2-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Admin</span>
                  <span>Curved Sidebar</span>
                </div>
                <div class="demo-link">
                  <a href="/admin-blank-page-2.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>
        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/admin-blank-page-3.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/admin-blank-page-3-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Admin</span>
                  <span>Colored Sidebar</span>
                </div>
                <div class="demo-link">
                  <a href="/admin-blank-page-3.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>
        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/admin-blank-page-4.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/admin-blank-page-4-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Admin</span>
                  <span>Curved Colored Sidebar</span>
                </div>
                <div class="demo-link">
                  <a href="/admin-blank-page-4.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>
        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-blank-page-1.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-blank-page-1-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Webapp</span>
                  <span>Standard Navbar</span>
                </div>
                <div class="demo-link">
                  <a href="/webapp-blank-page-1.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>
        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-blank-page-2.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-blank-page-2-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Webapp</span>
                  <span>Fading Navbar</span>
                </div>
                <div class="demo-link">
                  <a href="/webapp-blank-page-2.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>
        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-blank-page-3.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-blank-page-3-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Webapp</span>
                  <span>Colored Navbar</span>
                </div>
                <div class="demo-link">
                  <a href="/webapp-blank-page-3.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>
        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-blank-page-4.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-blank-page-4-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Webapp</span>
                  <span>Dropdown Navbar</span>
                </div>
                <div class="demo-link">
                  <a href="/webapp-blank-page-4.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>
        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper">
            <img
              class="light-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-blank-page-5.png"
              alt=""
              data-lazy-load
            />
            <img
              class="dark-image-block-l"
              data-src="assets/img/photo/screenshots/webapp-blank-page-5-dark.png"
              alt=""
              data-lazy-load
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Webapp</span>
                  <span>Colored Dropdown Navbar</span>
                </div>
                <div class="demo-link">
                  <a href="/webapp-blank-page-5.html" target="_blank"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </figure>
        </div>
      </div>
    </div>
  </div>
</template>

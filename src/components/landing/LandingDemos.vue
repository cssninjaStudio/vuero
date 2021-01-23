<template>
  <div class="huro-demos">
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
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/admin-dashboards-personal-1.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/admin-dashboards-personal-1-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Dashboards</span>
                  <span>Personal 1</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'admin-dashboards' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/admin-dashboards-personal-2.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/admin-dashboards-personal-2-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Dashboards</span>
                  <span>Personal 2</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'admin-dashboards-personal-2' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/admin-dashboards-personal-3.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/admin-dashboards-personal-3-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Dashboards</span>
                  <span>Personal 3</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'admin-dashboards-personal-3' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/admin-dashboards-finance-1.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/admin-dashboards-finance-1-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Dashboards</span>
                  <span>Finance 1</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'admin-dashboards-analytics' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/admin-dashboards-finance-2.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/admin-dashboards-finance-2-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Dashboards</span>
                  <span>Finance 2</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'admin-dashboards-stocks' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/admin-dashboards-finance-3.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/admin-dashboards-finance-3-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Dashboards</span>
                  <span>Finance 3</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'admin-dashboards-sales' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/admin-dashboards-banking-1.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/admin-dashboards-banking-1-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Dashboards</span>
                  <span>Banking 1</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'admin-dashboards-banking-1' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/admin-dashboards-banking-2.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/admin-dashboards-banking-2-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Dashboards</span>
                  <span>Banking 2</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'admin-dashboards-banking-2' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/admin-dashboards-banking-3.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/admin-dashboards-banking-3-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Dashboards</span>
                  <span>Banking 3</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'admin-dashboards-banking-3' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/admin-dashboards-business-1.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/admin-dashboards-business-1-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Dashboards</span>
                  <span>Business 1</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'admin-dashboards-flights' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/admin-dashboards-business-2.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/admin-dashboards-business-2-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Dashboards</span>
                  <span>Business 2</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'admin-dashboards-company' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <span class="new-tag">New</span>
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/admin-dashboards-business-3.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/admin-dashboards-business-3-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Dashboards</span>
                  <span>Business 3</span>
                </div>
                <div class="demo-link">
                  <RouterLink
                    :to="{ name: 'admin-dashboards-human-ressources' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/admin-dashboards-lifestyle-1.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/admin-dashboards-lifestyle-1-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Dashboards</span>
                  <span>Lifestyle 1</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'admin-dashboards-influencer' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/admin-dashboards-lifestyle-2.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/admin-dashboards-lifestyle-2-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Dashboards</span>
                  <span>Lifestyle 2</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'admin-dashboards-hobbies' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/admin-dashboards-lifestyle-3.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/admin-dashboards-lifestyle-3-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Dashboards</span>
                  <span>Lifestyle 3</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'admin-dashboards-health' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <span class="new-tag">New</span>
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/admin-dashboards-lifestyle-4.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/admin-dashboards-lifestyle-4-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Dashboards</span>
                  <span>Lifestyle 4</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'admin-dashboards-writer' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/admin-dashboards-ecommerce-1.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/admin-dashboards-ecommerce-1-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Dashboards</span>
                  <span>Ecommerce 1</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'admin-dashboards-ecommerce-1' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/admin-dashboards-food.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/admin-dashboards-food-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Dashboards</span>
                  <span>Food Delivery</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'admin-dashboards-food-delivery' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/admin-list-view-1.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/admin-list-view-1-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>List View 1</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'admin-layouts' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/admin-list-view-2.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/admin-list-view-2-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>List View 2</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'admin-layouts-list-view-2' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/admin-list-view-3.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/admin-list-view-3-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>List View 3</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'admin-layouts-list-view-3' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/admin-list-view-4.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/admin-list-view-4-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>List View 4</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'admin-layouts-list-view-4' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/admin-list-flex-1.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/admin-list-flex-1-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>Flex List 1</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'admin-layouts-list-flex-1' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/admin-list-flex-2.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/admin-list-flex-2-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>Flex List 2</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'admin-layouts-list-flex-2' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/admin-list-flex-3.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/admin-list-flex-3-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>Flex List 3</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'admin-layouts-list-flex-3' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/admin-list-datatable-1.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/admin-list-datatable-1-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>Datatable 1</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'admin-layouts-list-datatable-1' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/admin-list-datatable-2.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/admin-list-datatable-2-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>Datatable 2</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'admin-layouts-list-datatable-2' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/admin-list-datatable-3.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/admin-list-datatable-3-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>Datatable 3</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'admin-layouts-list-datatable-3' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/admin-list-datatable-4.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/admin-list-datatable-4-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>Datatable 4</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'admin-layouts-list-datatable-4' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/admin-grid-cards-1.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/admin-grid-cards-1-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>Card Grid 1</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'admin-layouts-grid-cards-1' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/admin-grid-cards-2.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/admin-grid-cards-2-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>Card Grid 2</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'admin-layouts-grid-cards-2' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/admin-grid-cards-3.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/admin-grid-cards-3-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>Card Grid 3</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'admin-layouts-grid-cards-3' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/admin-grid-cards-4.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/admin-grid-cards-4-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>Card Grid 4</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'admin-layouts-grid-cards-4' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/admin-grid-tiles-1.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/admin-grid-tiles-1-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>Tile Grid 1</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'admin-layouts-grid-tiles-1' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/admin-grid-tiles-2.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/admin-grid-tiles-2-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>Tile Grid 2</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'admin-layouts-grid-tiles-2' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/admin-grid-tiles-3.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/admin-grid-tiles-3-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>Tile Grid 3</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'admin-layouts-grid-tiles-3' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/admin-grid-users-1.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/admin-grid-users-1-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>User Grid 1</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'admin-layouts' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/admin-grid-users-2.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/admin-grid-users-2-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>User Grid 2</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'admin-layouts-grid-users-2' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/admin-grid-users-3.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/admin-grid-users-3-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>User Grid 3</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'admin-layouts-grid-users-3' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/admin-grid-users-4.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/admin-grid-users-4-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>User Grid 4</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'admin-layouts-grid-users-4' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/admin-messaging-chat.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/admin-messaging-chat-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>Chat Messaging</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'messaging-v1' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/admin-profile-view.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/admin-profile-view-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>User Profile</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'admin-layouts-profile-view' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/admin-profile-edit-1.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/admin-profile-edit-1-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>Edit Profile 1</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'admin-layouts-profile-edit-1' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/admin-profile-edit-2.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/admin-profile-edit-2-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>Edit Profile 2</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'admin-layouts-profile-edit-2' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/admin-profile-edit-3.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/admin-profile-edit-3-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>Edit Profile 3</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'admin-layouts-profile-edit-3' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/admin-profile-edit-4.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/admin-profile-edit-4-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>Edit Profile 4</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'admin-layouts-profile-edit-4' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/admin-profile-notifications.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/admin-profile-notifications-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>Notifications</span>
                </div>
                <div class="demo-link">
                  <RouterLink
                    :to="{ name: 'admin-layouts-profile-notifications' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/admin-profile-settings.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/admin-profile-settings-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>Settings</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'admin-layouts-profile-settings' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/admin-projects-projects.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/admin-projects-projects-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>Projects 1</span>
                </div>
                <div class="demo-link">
                  <RouterLink
                    :to="{ name: 'admin-layouts-projects-projects-1' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/admin-projects-projects-2.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/admin-projects-projects-2-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>Projects 2</span>
                </div>
                <div class="demo-link">
                  <RouterLink
                    :to="{ name: 'admin-layouts-projects-projects-2' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/admin-projects-projects-3.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/admin-projects-projects-3-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>Projects 3</span>
                </div>
                <div class="demo-link">
                  <RouterLink
                    :to="{ name: 'admin-layouts-projects-projects-3' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/admin-projects-project.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/admin-projects-project-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>Project Details</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'admin-layouts-projects-details' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/admin-kanban-board.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/admin-kanban-board-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>Kanban Board</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'admin-layouts-kanban-board' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/admin-search-results.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/admin-search-results-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>Search Results</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'admin-layouts-search-results' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/admin-search-empty.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/admin-search-empty-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>Empty Search</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'admin-layouts-search-empty' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/admin-saas-billing.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/admin-saas-billing-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>SaaS Billing</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'admin-layouts-saas-billing' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/admin-welcome.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/admin-welcome-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Utility</span>
                  <span>Welcome</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'admin-dashboards' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/admin-action-page-1.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/admin-action-page-1-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Utility</span>
                  <span>Action Page 1</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'admin-layouts-action-page-1' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/admin-action-page-2.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/admin-action-page-2-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Utility</span>
                  <span>Action Page 2</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'admin-layouts-action-page-2' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/admin-utility-account-confirm.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/admin-utility-account-confirm-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Utility</span>
                  <span>Confirm Account</span>
                </div>
                <div class="demo-link">
                  <RouterLink
                    :to="{ name: 'admin-layouts-utility-account-confirm' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/admin-utility-promotion.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/admin-utility-promotion-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Utility</span>
                  <span>Promotion</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'admin-layouts-utility-promotion' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/admin-utility-invoice.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/admin-utility-invoice-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Utility</span>
                  <span>Invoice</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'admin-layouts-utility-invoice' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/admin-dashboards-widgets-ui.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/admin-dashboards-widgets-ui-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Widgets</span>
                  <span>UI Widgets</span>
                </div>
                <div class="demo-link">
                  <RouterLink
                    :to="{ name: 'admin-dashboards-widgets-sample-ui' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/admin-dashboards-widgets-creative.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/admin-dashboards-widgets-creative-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Widgets</span>
                  <span>Creative Widgets</span>
                </div>
                <div class="demo-link">
                  <RouterLink
                    :to="{ name: 'admin-dashboards-widgets-sample-creative' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/admin-dashboards-widgets-list.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/admin-dashboards-widgets-list-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Widgets</span>
                  <span>List Widgets</span>
                </div>
                <div class="demo-link">
                  <RouterLink
                    :to="{ name: 'admin-dashboards-widgets-sample-list' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/admin-dashboards-widgets-stats.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/admin-dashboards-widgets-stats-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Widgets</span>
                  <span>Stat Widgets</span>
                </div>
                <div class="demo-link">
                  <RouterLink
                    :to="{ name: 'admin-dashboards-widgets-sample-stats' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/admin-form-layouts-1.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/admin-form-layouts-1-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Forms</span>
                  <span>Layout 1</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'admin-layouts-form-layouts-1' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/admin-form-layouts-2.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/admin-form-layouts-2-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Forms</span>
                  <span>Layout 2</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'admin-layouts-form-layouts-2' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/admin-form-layouts-3.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/admin-form-layouts-3-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Forms</span>
                  <span>Layout 3</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'admin-layouts-form-layouts-3' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/admin-form-layouts-4.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/admin-form-layouts-4-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Forms</span>
                  <span>Layout 4</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'admin-layouts-form-layouts-4' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/admin-onboarding-page-1.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/admin-onboarding-page-1-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Utility</span>
                  <span>Onboarding 1</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'admin-layouts-onboarding-page-1' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/admin-onboarding-page-2.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/admin-onboarding-page-2-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Utility</span>
                  <span>Onboarding 2</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'admin-layouts-onboarding-page-2' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/admin-onboarding-page-3.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/admin-onboarding-page-3-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Utility</span>
                  <span>Onboarding 3</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'admin-layouts-onboarding-page-3' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/admin-onboarding-page-4.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/admin-onboarding-page-4-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Utility</span>
                  <span>Onboarding 4</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'admin-layouts-onboarding-page-4' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/admin-onboarding-page-5.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/admin-onboarding-page-5-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Utility</span>
                  <span>Onboarding 5</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'admin-layouts-onboarding-page-5' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
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
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/webapp-dashboards-personal-1.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/webapp-dashboards-personal-1-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Dashboards</span>
                  <span>Personal 1</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'webapp-dashboards' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/webapp-dashboards-personal-2.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/webapp-dashboards-personal-2-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Dashboards</span>
                  <span>Personal 2</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'webapp-dashboards-personal-2' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/webapp-dashboards-personal-3.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/webapp-dashboards-personal-3-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Dashboards</span>
                  <span>Personal 3</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'webapp-dashboards-personal-3' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/webapp-dashboards-finance-1.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/webapp-dashboards-finance-1-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Dashboards</span>
                  <span>Finance 1</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'webapp-dashboards-analytics' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/webapp-dashboards-finance-2.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/webapp-dashboards-finance-2-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Dashboards</span>
                  <span>Finance 2</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'webapp-dashboards-stocks' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/webapp-dashboards-finance-3.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/webapp-dashboards-finance-3-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Dashboards</span>
                  <span>Finance 3</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'webapp-dashboards-sales' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/webapp-dashboards-banking-1.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/webapp-dashboards-banking-1-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Dashboards</span>
                  <span>Banking 1</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'webapp-dashboards-banking-1' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/webapp-dashboards-banking-2.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/webapp-dashboards-banking-2-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Dashboards</span>
                  <span>Banking 2</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'webapp-dashboards-banking-2' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/webapp-dashboards-banking-3.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/webapp-dashboards-banking-3-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Dashboards</span>
                  <span>Banking 3</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'webapp-dashboards-banking-3' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/webapp-dashboards-business-1.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/webapp-dashboards-business-1-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Dashboards</span>
                  <span>Business 1</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'webapp-dashboards-flights' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/webapp-dashboards-business-2.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/webapp-dashboards-business-2-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Dashboards</span>
                  <span>Business 2</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'webapp-dashboards-company' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <span class="new-tag">New</span>
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/webapp-dashboards-business-3.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/webapp-dashboards-business-3-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Dashboards</span>
                  <span>Business 3</span>
                </div>
                <div class="demo-link">
                  <RouterLink
                    :to="{ name: 'webapp-dashboards-human-ressources' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/webapp-dashboards-lifestyle-1.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/webapp-dashboards-lifestyle-1-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Dashboards</span>
                  <span>Lifestyle 1</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'webapp-dashboards-influencer' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/webapp-dashboards-lifestyle-2.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/webapp-dashboards-lifestyle-2-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Dashboards</span>
                  <span>Lifestyle 2</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'webapp-dashboards-hobbies' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/webapp-dashboards-lifestyle-3.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/webapp-dashboards-lifestyle-3-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Dashboards</span>
                  <span>Lifestyle 3</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'webapp-dashboards-health' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <span class="new-tag">New</span>
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/webapp-dashboards-lifestyle-4.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/webapp-dashboards-lifestyle-4-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Dashboards</span>
                  <span>Lifestyle 4</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'webapp-dashboards-writer' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/webapp-dashboards-ecommerce-1.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/webapp-dashboards-ecommerce-1-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Dashboards</span>
                  <span>Ecommerce 1</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'webapp-dashboards-ecommerce-1' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/webapp-dashboards-food.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/webapp-dashboards-food-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Dashboards</span>
                  <span>Food Delivery</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'webapp-dashboards-food-delivery' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/webapp-profile-view.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/webapp-profile-view-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>User Profile</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'webapp-layouts-profile-view' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/webapp-list-view-1.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/webapp-list-view-1-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>List View 1</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'webapp-layouts' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/webapp-list-view-2.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/webapp-list-view-2-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>List View 2</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'webapp-layouts-list-view-2' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/webapp-list-view-3.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/webapp-list-view-3-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>List View 3</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'webapp-layouts-list-view-3' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/webapp-list-view-4.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/webapp-list-view-4-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>List View 4</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'webapp-layouts-list-view-4' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/webapp-list-flex-1.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/webapp-list-flex-1-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>Flex List 1</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'webapp-layouts-list-flex-1' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/webapp-list-flex-2.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/webapp-list-flex-2-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>Flex List 2</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'webapp-layouts-list-flex-2' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/webapp-list-flex-3.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/webapp-list-flex-3-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>Flex List 3</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'webapp-layouts-list-flex-3' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/webapp-list-datatable-1.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/webapp-list-datatable-1-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>Datatable 1</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'webapp-layouts-list-datatable-1' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/webapp-list-datatable-2.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/webapp-list-datatable-2-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>Datatable 2</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'webapp-layouts-list-datatable-2' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/webapp-list-datatable-3.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/webapp-list-datatable-3-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>Datatable 3</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'webapp-layouts-list-datatable-3' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/webapp-list-datatable-4.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/webapp-list-datatable-4-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>Datatable 4</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'webapp-layouts-list-datatable-4' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/webapp-grid-cards-1.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/webapp-grid-cards-1-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>Card Grid 1</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'webapp-layouts-grid-cards-1' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/webapp-grid-cards-2.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/webapp-grid-cards-2-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>Card Grid 2</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'webapp-layouts-grid-cards-2' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/webapp-grid-cards-3.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/webapp-grid-cards-3-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>Card Grid 3</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'webapp-layouts-grid-cards-3' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/webapp-grid-cards-4.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/webapp-grid-cards-4-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>Card Grid 4</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'webapp-layouts-grid-cards-4' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/webapp-grid-tiles-1.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/webapp-grid-tiles-1-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>Tile Grid 1</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'webapp-layouts-grid-tiles-1' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/webapp-grid-tiles-2.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/webapp-grid-tiles-2-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>Tile Grid 2</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'webapp-layouts-grid-tiles-2' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/webapp-grid-tiles-3.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/webapp-grid-tiles-3-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>Tile Grid 3</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'webapp-layouts-grid-tiles-3' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/webapp-grid-users-1.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/webapp-grid-users-1-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>User Grid 1</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'webapp-layouts-grid-users-1' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/webapp-grid-users-2.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/webapp-grid-users-2-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>User Grid 2</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'webapp-layouts-grid-users-2' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/webapp-grid-users-3.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/webapp-grid-users-3-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>User Grid 3</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'webapp-layouts-grid-users-3' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/webapp-grid-users-4.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/webapp-grid-users-4-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>User Grid 4</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'webapp-layouts-grid-users-4' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/webapp-messaging-chat.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/webapp-messaging-chat-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>Chat Messaging</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'messaging-v2' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/webapp-profile-edit-1.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/webapp-profile-edit-1-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>Edit Profile 1</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'webapp-layouts-profile-edit-1' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/webapp-profile-edit-2.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/webapp-profile-edit-2-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>Edit Profile 2</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'webapp-layouts-profile-edit-2' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/webapp-profile-edit-3.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/webapp-profile-edit-3-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>Edit Profile 3</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'webapp-layouts-profile-edit-3' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/webapp-profile-edit-4.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/webapp-profile-edit-4-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>Edit Profile 4</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'webapp-layouts-profile-edit-4' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/webapp-profile-notifications.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/webapp-profile-notifications-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>Notifications</span>
                </div>
                <div class="demo-link">
                  <RouterLink
                    :to="{ name: 'webapp-layouts-profile-notifications' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/webapp-profile-settings.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/webapp-profile-settings-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>Settings</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'webapp-layouts-profile-settings' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/webapp-projects-projects.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/webapp-projects-projects-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>Projects 1</span>
                </div>
                <div class="demo-link">
                  <RouterLink
                    :to="{ name: 'webapp-layouts-projects-projects-1' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/webapp-projects-projects-2.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/webapp-projects-projects-2-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>Projects 2</span>
                </div>
                <div class="demo-link">
                  <RouterLink
                    :to="{ name: 'webapp-layouts-projects-projects-2' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/webapp-projects-projects-3.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/webapp-projects-projects-3-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>Projects 3</span>
                </div>
                <div class="demo-link">
                  <RouterLink
                    :to="{ name: 'webapp-layouts-projects-projects-3' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/webapp-projects-project.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/webapp-projects-project-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>Project Details</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'webapp-layouts-projects-details' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/webapp-kanban-board.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/webapp-kanban-board-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>Kanban Board</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'webapp-layouts-kanban-board' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/webapp-search-results.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/webapp-search-results-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>Search Results</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'webapp-layouts-search-results' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/webapp-search-empty.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/webapp-search-empty-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>Empty Search</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'webapp-layouts-search-empty' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/webapp-saas-billing.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/webapp-saas-billing-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Layouts</span>
                  <span>SaaS Billing</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'webapp-layouts-saas-billing' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/webapp-welcome.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/webapp-welcome-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Utility</span>
                  <span>Welcome</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'webapp' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/webapp-action-page-1.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/webapp-action-page-1-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Utility</span>
                  <span>Action Page 1</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'webapp-layouts-action-page-1' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/webapp-action-page-2.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/webapp-action-page-2-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Utility</span>
                  <span>Action Page 2</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'webapp-layouts-action-page-2' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/webapp-utility-account-confirm.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/webapp-utility-account-confirm-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Utility</span>
                  <span>Confirm Account</span>
                </div>
                <div class="demo-link">
                  <RouterLink
                    :to="{ name: 'webapp-layouts-utility-account-confirm' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/webapp-utility-promotion.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/webapp-utility-promotion-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Utility</span>
                  <span>Promotion</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'webapp-layouts-utility-promotion' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/webapp-utility-invoice.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/webapp-utility-invoice-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Utility</span>
                  <span>Invoice</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'webapp-layouts-utility-invoice' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/webapp-dashboards-widgets-ui.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/webapp-dashboards-widgets-ui-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Widgets</span>
                  <span>UI Widgets</span>
                </div>
                <div class="demo-link">
                  <RouterLink
                    :to="{ name: 'webapp-dashboards-widgets-sample-ui' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/webapp-dashboards-widgets-creative.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/webapp-dashboards-widgets-creative-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Widgets</span>
                  <span>Creative Widgets</span>
                </div>
                <div class="demo-link">
                  <RouterLink
                    :to="{ name: 'webapp-dashboards-widgets-sample-creative' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/webapp-dashboards-widgets-list.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/webapp-dashboards-widgets-list-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Widgets</span>
                  <span>List Widgets</span>
                </div>
                <div class="demo-link">
                  <RouterLink
                    :to="{ name: 'webapp-dashboards-widgets-sample-list' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/webapp-dashboards-widgets-stats.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/webapp-dashboards-widgets-stats-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Widgets</span>
                  <span>Stat Widgets</span>
                </div>
                <div class="demo-link">
                  <RouterLink
                    :to="{ name: 'webapp-dashboards-widgets-sample-stats' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/webapp-form-layouts-1.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/webapp-form-layouts-1-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Forms</span>
                  <span>Layout 1</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'webapp-layouts-form-layouts-1' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/webapp-form-layouts-2.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/webapp-form-layouts-2-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Forms</span>
                  <span>Layout 2</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'webapp-layouts-form-layouts-2' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/webapp-form-layouts-3.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/webapp-form-layouts-3-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Forms</span>
                  <span>Layout 3</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'webapp-layouts-form-layouts-3' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/webapp-form-layouts-4.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/webapp-form-layouts-4-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Forms</span>
                  <span>Layout 4</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'webapp-layouts-form-layouts-4' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/webapp-onboarding-page-1.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/webapp-onboarding-page-1-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Utility</span>
                  <span>Onboarding 1</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'webapp-layouts-onboarding-page-1' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/webapp-onboarding-page-2.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/webapp-onboarding-page-2-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Utility</span>
                  <span>Onboarding 2</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'webapp-layouts-onboarding-page-2' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/webapp-onboarding-page-3.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/webapp-onboarding-page-3-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Utility</span>
                  <span>Onboarding 3</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'webapp-layouts-onboarding-page-3' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/webapp-onboarding-page-4.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/webapp-onboarding-page-4-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Utility</span>
                  <span>Onboarding 4</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'webapp-layouts-onboarding-page-4' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/webapp-onboarding-page-5.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/webapp-onboarding-page-5-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Utility</span>
                  <span>Onboarding 5</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'webapp-layouts-onboarding-page-5' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
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
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <span class="new-tag">New</span>
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/auth-login.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/auth-login-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Authentication</span>
                  <span>Login v1</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'auth-login-1' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <span class="new-tag">New</span>
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/auth-login-2.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/auth-login-2-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Authentication</span>
                  <span>Login v2</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'auth-login-2' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <span class="new-tag">New</span>
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/auth-login-3.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/auth-login-3-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Authentication</span>
                  <span>Login v3</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'auth-login-3' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <span class="new-tag">New</span>
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/auth-signup-2.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/auth-signup-2-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Authentication</span>
                  <span>Signup v1</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'auth-signup-2' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <span class="new-tag">New</span>
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/auth-signup-3.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/auth-signup-3-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Authentication</span>
                  <span>Signup v3</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'auth-signup-3' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              src="/images/photo/screenshots/auth-signup.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Authentication</span>
                  <span>Signup Flow</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'auth-signup-1' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              src="/images/photo/screenshots/admin-utility-status.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Authentication</span>
                  <span>Status Page</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'status' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/admin-dashboards-apps-2.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/admin-dashboards-apps-2-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Inbox</span>
                  <span>Inbox UI V1</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'inbox' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/project-wizard-step-1.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/project-wizard-step-1-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Wizard</span>
                  <span>Wizard Step 1</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'wizard-v1' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/project-wizard-step-2.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/project-wizard-step-2-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Wizard</span>
                  <span>Wizard Step 2</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'wizard-v1' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/project-wizard-step-3.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/project-wizard-step-3-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Wizard</span>
                  <span>Wizard Step 3</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'wizard-v1' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/project-wizard-step-4.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/project-wizard-step-4-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Wizard</span>
                  <span>Wizard Step 4</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'wizard-v1' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/project-wizard-step-5.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/project-wizard-step-5-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Wizard</span>
                  <span>Wizard Step 5</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'wizard-v1' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/project-wizard-step-6.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/project-wizard-step-6-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Wizard</span>
                  <span>Wizard Step 6</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'wizard-v1' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/project-wizard-step-7.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/project-wizard-step-7-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Wizard</span>
                  <span>Wizard Step 7</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'wizard-v1' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/project-wizard-step-8.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/project-wizard-step-8-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Wizard</span>
                  <span>Wizard Step 8</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'wizard-v1' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              src="/images/photo/screenshots/error-page-1.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Utility</span>
                  <span>Error Page 1</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'error-page-1' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              src="/images/photo/screenshots/error-page-2.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Utility</span>
                  <span>Error Page 2</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'error-page-2' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              src="/images/photo/screenshots/error-page-3.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Utility</span>
                  <span>Error Page 3</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'error-page-3' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              src="/images/photo/screenshots/error-page-4.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Utility</span>
                  <span>Error Page 4</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'error-page-4' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>

        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              src="/images/photo/screenshots/error-page-5.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Utility</span>
                  <span>Error Page 5</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'error-page-5' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
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
          <h3>Templates</h3>
          <p>Blank templates to start fast</p>
        </div>
      </div>

      <div class="columns is-multiline">
        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/admin-blank-page-1.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/admin-blank-page-1-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Admin</span>
                  <span>Regular Sidebar</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'admin-layouts-blank-page-1' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>
        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/admin-blank-page-2.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/admin-blank-page-2-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Admin</span>
                  <span>Curved Sidebar</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'admin-layouts-blank-page-2' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>
        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/admin-blank-page-3.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/admin-blank-page-3-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Admin</span>
                  <span>Colored Sidebar</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'admin-layouts-blank-page-3' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>
        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/admin-blank-page-4.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/admin-blank-page-4-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Admin</span>
                  <span>Curved Colored Sidebar</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'admin-layouts-blank-page-4' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>
        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/webapp-blank-page-1.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/webapp-blank-page-1-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Webapp</span>
                  <span>Standard Navbar</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'webapp-layouts-blank-page-1' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>
        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/webapp-blank-page-2.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/webapp-blank-page-2-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Webapp</span>
                  <span>Fading Navbar</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'webapp-layouts-blank-page-2' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>
        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/webapp-blank-page-3.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/webapp-blank-page-3-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Webapp</span>
                  <span>Colored Navbar</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'webapp-layouts-blank-page-3' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>
        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/webapp-blank-page-4.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/webapp-blank-page-4-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Webapp</span>
                  <span>Dropdown Navbar</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'webapp-layouts-blank-page-4' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>
        <!-- Demo item -->
        <div class="column is-4 has-text-centered">
          <figure class="huro-demo-wrapper loaded">
            <img
              class="light-image-block-l"
              src="/images/photo/screenshots/webapp-blank-page-5.png"
              alt=""
              loading="lazy"
            />
            <img
              class="dark-image-block-l"
              src="/images/photo/screenshots/webapp-blank-page-5-dark.png"
              alt=""
              loading="lazy"
            />
            <div class="circle-overlay"></div>
            <div class="demo-info has-text-centered">
              <div class="wrapper">
                <div class="demo-title">
                  <span>Webapp</span>
                  <span>Colored Dropdown Navbar</span>
                </div>
                <div class="demo-link">
                  <RouterLink :to="{ name: 'webapp-layouts-blank-page-5' }"
                    >Go to demo <i class="fas fa-angle-right"></i
                  ></RouterLink>
                </div>
              </div>
            </div>
          </figure>
        </div>
      </div>
    </div>
  </div>
</template>

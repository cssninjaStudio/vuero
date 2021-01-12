<template>
  <DefaultLayout>
    <LayoutsSidebar />
    <LayoutsMobileSubsidebar />

    <!-- Content Wrapper -->
    <div
      class="view-wrapper"
      data-naver-offset="214"
      data-menu-item="#layouts-sidebar-menu"
      data-mobile-item="#home-sidebar-menu-mobile"
    >
      <div class="page-content-wrapper">
        <div class="page-content is-relative">
          <div class="page-title has-text-centered">
            <!-- Sidebar Trigger -->
            <div
              class="huro-hamburger nav-trigger push-resize"
              data-sidebar="layouts-sidebar"
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
              <h1 class="title is-4">Invoice</h1>
            </div>

            <Toolbar />
          </div>

          <div class="page-content-inner">
            <!--Invoice-->
            <div class="invoice-wrapper">
              <div class="invoice-header">
                <div class="left">
                  <h3>Invoice FC-456-14</h3>
                </div>
                <div class="right">
                  <div class="controls">
                    <a class="action">
                      <Icon icon="feather:printer" />
                    </a>
                    <a class="action">
                      <Icon icon="feather:download-cloud" />
                    </a>
                    <a class="action">
                      <Icon icon="feather:mail" />
                    </a>
                    <a class="action">
                      <Icon icon="feather:arrow-left" />
                    </a>
                  </div>
                </div>
              </div>
              <div class="invoice-body">
                <div class="invoice-card">
                  <div class="invoice-section is-flex is-bordered">
                    <div class="h-avatar is-large">
                      <img
                        class="avatar"
                        src="/@images/avatars/photos/13.jpg"
                        alt=""
                        data-user-popover="6"
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                    <div class="meta">
                      <h3>Tara Svenson</h3>
                      <span>tarasvenson@huro.io</span>
                      <span>+1 546-5491</span>
                    </div>
                    <div class="end">
                      <h3>Invoice FC-456-14</h3>
                      <span>Issued: May 27, 2020</span>
                      <span>Payment Due: June 27, 2015</span>
                    </div>
                  </div>
                  <div class="invoice-section is-flex is-bordered">
                    <div class="h-avatar is-customer is-large">
                      <img
                        class="avatar"
                        src="/@images/photo/demo/brands/airbnb.svg"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/150x150'
                        "
                      />
                    </div>
                    <div class="meta">
                      <h3>Airbnb</h3>
                      <span>888 Brannan St, San Francisco,</span>
                      <span>CA 94103, USA</span>
                    </div>
                    <div class="end is-left">
                      <h3>Description</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Quod equidem non reprehendo.
                      </p>
                    </div>
                  </div>
                  <div class="invoice-section">
                    <div class="flex-table">
                      <!--Table header-->
                      <div class="flex-table-header">
                        <span class="is-grow">Description</span>
                        <span class="cell-end">Unit</span>
                        <span>Quantity</span>
                        <span>Rate</span>
                        <span>Subtotal</span>
                      </div>

                      <!--Table item-->
                      <div class="flex-table-item">
                        <div class="flex-table-cell is-grow" data-th="">
                          <span class="dark-text">Website Redesign</span>
                        </div>
                        <div class="flex-table-cell cell-end" data-th="Unit">
                          <span class="light-text">hrs</span>
                        </div>
                        <div class="flex-table-cell" data-th="Quantity">
                          <span class="light-text">54</span>
                        </div>
                        <div class="flex-table-cell" data-th="Rate">
                          <span class="dark-inverted">$24</span>
                        </div>
                        <div
                          class="flex-table-cell has-text-right"
                          data-th="Subtotal"
                        >
                          <span class="dark-inverted">$1,296</span>
                        </div>
                      </div>

                      <!--Table item-->
                      <div class="flex-table-item">
                        <div class="flex-table-cell is-grow" data-th="">
                          <span class="dark-text">Logo Design</span>
                        </div>
                        <div class="flex-table-cell cell-end" data-th="Unit">
                          <span class="light-text">hrs</span>
                        </div>
                        <div class="flex-table-cell" data-th="Quantity">
                          <span class="light-text">12</span>
                        </div>
                        <div class="flex-table-cell" data-th="Rate">
                          <span class="dark-inverted">$24</span>
                        </div>
                        <div
                          class="flex-table-cell has-text-right"
                          data-th="Subtotal"
                        >
                          <span class="dark-inverted">$288</span>
                        </div>
                      </div>

                      <!--Table item-->
                      <div class="flex-table-item">
                        <div class="flex-table-cell is-grow" data-th="">
                          <span class="dark-text">Custom Illustrations</span>
                        </div>
                        <div class="flex-table-cell cell-end" data-th="Unit">
                          <span class="light-text">hrs</span>
                        </div>
                        <div class="flex-table-cell" data-th="Quantity">
                          <span class="light-text">7</span>
                        </div>
                        <div class="flex-table-cell" data-th="Rate">
                          <span class="dark-inverted">$32</span>
                        </div>
                        <div
                          class="flex-table-cell has-text-right"
                          data-th="Subtotal"
                        >
                          <span class="dark-inverted">$224</span>
                        </div>
                      </div>
                    </div>

                    <div class="flex-table sub-table">
                      <!--Table item-->
                      <div class="flex-table-item">
                        <div
                          class="flex-table-cell is-grow is-vhidden"
                          data-th=""
                        >
                          <span class="dark-text">Website Development</span>
                        </div>
                        <div
                          class="flex-table-cell cell-end is-vhidden"
                          data-th="Unit"
                        >
                          <span class="light-text">hrs</span>
                        </div>
                        <div
                          class="flex-table-cell is-vhidden"
                          data-th="Quantity"
                        >
                          <span class="light-text">2</span>
                        </div>
                        <div class="flex-table-cell" data-th="">
                          <span class="table-label">Subtotal</span>
                        </div>
                        <div class="flex-table-cell has-text-right" data-th="">
                          <span class="table-total dark-inverted">$1,808</span>
                        </div>
                      </div>
                      <!--Table item-->
                      <div class="flex-table-item">
                        <div
                          class="flex-table-cell is-grow is-vhidden"
                          data-th=""
                        >
                          <span class="dark-text">Website Development</span>
                        </div>
                        <div
                          class="flex-table-cell cell-end is-vhidden"
                          data-th="Unit"
                        >
                          <span class="light-text">hrs</span>
                        </div>
                        <div
                          class="flex-table-cell is-vhidden"
                          data-th="Quantity"
                        >
                          <span class="light-text">2</span>
                        </div>
                        <div class="flex-table-cell" data-th="">
                          <span class="table-label">Taxes</span>
                        </div>
                        <div class="flex-table-cell has-text-right" data-th="">
                          <span class="table-total dark-inverted">$273</span>
                        </div>
                      </div>
                      <!--Table item-->
                      <div class="flex-table-item">
                        <div
                          class="flex-table-cell is-grow is-vhidden"
                          data-th=""
                        >
                          <span class="dark-text">Website Development</span>
                        </div>
                        <div
                          class="flex-table-cell cell-end is-vhidden"
                          data-th="Unit"
                        >
                          <span class="light-text">hrs</span>
                        </div>
                        <div
                          class="flex-table-cell is-vhidden"
                          data-th="Quantity"
                        >
                          <span class="light-text">2</span>
                        </div>
                        <div class="flex-table-cell" data-th="">
                          <span class="table-label">Total</span>
                        </div>
                        <div class="flex-table-cell has-text-right" data-th="">
                          <span class="table-total is-bigger dark-inverted"
                            >$2,081</span
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
      </div>
    </div>
  </DefaultLayout>
</template>

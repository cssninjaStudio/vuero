<script setup lang="ts">
import { useTitle } from '@vueuse/core'

import {
  activeSidebar,
  toggleSidebar,
} from '/@src/composition/state/ui/activeSidebarState'

useTitle('Dashboard Widgets Creative - Admin - Vuero')
</script>

<template>
  <DefaultLayout>
    <GenericSidebar />
    <GenericMobileSubsidebar />

    <!-- Content Wrapper -->
    <div
      class="view-wrapper"
      :class="[activeSidebar !== 'none' && 'is-pushed-full']"
      data-naver-offset="150"
      data-menu-item="#home-sidebar-menu"
      data-mobile-item="#home-sidebar-menu-mobile"
    >
      <div class="page-content-wrapper">
        <div class="page-content is-relative">
          <div class="page-title has-text-centered">
            <!-- Sidebar Trigger -->
            <div
              class="huro-hamburger nav-trigger push-resize"
              @click="toggleSidebar('home')"
            >
              <span class="menu-toggle has-chevron">
                <span
                  :class="[activeSidebar !== 'none' && 'active']"
                  class="icon-box-toggle"
                >
                  <span class="rotate">
                    <i class="icon-line-top"></i>
                    <i class="icon-line-center"></i>
                    <i class="icon-line-bottom"></i>
                  </span>
                </span>
              </span>
            </div>

            <div class="title-wrap">
              <h1 class="title is-4">Widgets</h1>
            </div>

            <Toolbar />
          </div>

          <div class="page-content-inner">
            <!--Data Widgets-->
            <div class="columns is-multiline">
              <div class="column is-3">
                <!--Widget-->
                <div class="widget illustration-widget illustration-widget-v1">
                  <div class="img-container">
                    <img
                      class="main"
                      src="/@images/illustrations/widgets/1.svg"
                      alt=""
                    />
                    <img
                      class="badge badge-1"
                      src="/@images/illustrations/widgets/2.svg"
                      alt=""
                    />
                    <img
                      class="badge badge-2"
                      src="/@images/illustrations/widgets/3.svg"
                      alt=""
                    />
                  </div>
                  <h3>You unlocked 2 new Achievements</h3>
                  <p>
                    Congrats, your efforts have been rewarded. Keep up like
                    this!
                  </p>
                </div>

                <!--Widget-->
                <div class="widget contact-widget">
                  <div class="widget-content">
                    <div class="left">
                      <div class="h-avatar is-medium">
                        <img
                          class="avatar"
                          src="/@images/avatars/photos/8.jpg"
                          alt=""
                          data-user-popover="3"
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                      </div>
                    </div>
                    <div class="right">
                      <h3>Erik K.</h3>
                      <div class="company">
                        <span>Vuero Ltd.</span>
                        <p>Product Manager</p>
                      </div>
                      <div class="contact-info">
                        <span>
                          <Icon icon="feather:map-pin" />
                          <span>Los Angeles, CA</span>
                        </span>
                        <span>
                          <Icon icon="feather:phone" />
                          <span>+1 444-5156</span>
                        </span>
                      </div>
                    </div>
                  </div>

                  <p class="email">erikkovalsky@huro.io</p>
                </div>

                <!--Widget-->
                <div class="widget illustration-widget illustration-widget-v2">
                  <img
                    class="main"
                    src="/@images/illustrations/widgets/7.svg"
                    alt=""
                  />
                  <h3>You unlocked 2 new Achievements</h3>
                  <p>
                    Congrats, your efforts have been rewarded. Keep up like
                    this!
                  </p>
                </div>

                <!--Widget-->
                <div class="widget avatar-list-widget">
                  <div class="field">
                    <div class="control">
                      <input
                        type="text"
                        class="input"
                        placeholder="Search..."
                      />
                      <button class="search-button">
                        <Icon icon="feather:search" />
                      </button>
                    </div>
                  </div>
                  <div class="avatar-list">
                    <div class="avatar-list-item">
                      <div class="h-avatar">
                        <img
                          class="avatar is-squared"
                          src="/@images/avatars/photos/26.jpg"
                          alt=""
                          data-user-popover="23"
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                      </div>
                      <div class="meta">
                        <span>Courtney W.</span>
                      </div>
                    </div>
                    <div class="avatar-list-item">
                      <div class="h-avatar">
                        <img
                          class="avatar is-squared"
                          src="/@images/avatars/photos/7.jpg"
                          alt=""
                          data-user-popover="0"
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                      </div>
                      <div class="meta">
                        <span>Alice C.</span>
                      </div>
                    </div>
                    <div class="avatar-list-item">
                      <div class="h-avatar">
                        <img
                          class="avatar is-squared"
                          src="/@images/avatars/photos/8.jpg"
                          alt=""
                          data-user-popover="3"
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                      </div>
                      <div class="meta">
                        <span>Erik K.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="column is-3">
                <!--Widget-->
                <div class="widget illustration-widget illustration-widget-v2">
                  <img
                    class="main"
                    src="/@images/illustrations/widgets/4.svg"
                    alt=""
                  />
                  <h3>You unlocked 2 new Achievements</h3>
                  <p>
                    Congrats, your efforts have been rewarded. Keep up like
                    this!
                  </p>
                </div>

                <!--Widget-->
                <div class="widget social-buttons-widget">
                  <div class="social-buttons">
                    <div class="social-button">
                      <a class="inner-button is-facebook is-active">
                        <i class="fab fa-facebook-f"></i>
                      </a>
                    </div>
                    <div class="social-button">
                      <a class="inner-button is-linkedin">
                        <i class="fab fa-linkedin-in"></i>
                      </a>
                    </div>
                    <div class="social-button">
                      <a class="inner-button is-twitter">
                        <i class="fab fa-twitter"></i>
                      </a>
                    </div>
                    <div class="social-button">
                      <a class="inner-button is-instagram">
                        <i class="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <!--Widget-->
                <div class="widget avatar-list-widget">
                  <div class="field">
                    <div class="control">
                      <input
                        type="text"
                        class="input"
                        placeholder="Search..."
                      />
                      <button class="search-button">
                        <Icon icon="feather:search" />
                      </button>
                    </div>
                  </div>
                  <div class="avatar-list">
                    <div class="avatar-list-item">
                      <div class="h-avatar">
                        <img
                          class="avatar"
                          src="/@images/avatars/photos/26.jpg"
                          alt=""
                          data-user-popover="23"
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                      </div>
                      <div class="meta">
                        <span>Courtney W.</span>
                      </div>
                    </div>
                    <div class="avatar-list-item">
                      <div class="h-avatar">
                        <img
                          class="avatar"
                          src="/@images/avatars/photos/7.jpg"
                          alt=""
                          data-user-popover="0"
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                      </div>
                      <div class="meta">
                        <span>Alice C.</span>
                      </div>
                    </div>
                    <div class="avatar-list-item">
                      <div class="h-avatar">
                        <img
                          class="avatar"
                          src="/@images/avatars/photos/8.jpg"
                          alt=""
                          data-user-popover="3"
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                      </div>
                      <div class="meta">
                        <span>Erik K.</span>
                      </div>
                    </div>
                  </div>
                </div>

                <!--Widget-->
                <div class="widget followers-widget">
                  <div class="widget-toolbar">
                    <div class="left">
                      <h3>Followers</h3>
                    </div>
                    <div class="right">
                      <WidgetDropdown />
                    </div>
                  </div>
                  <div class="channels">
                    <div class="channel">
                      <div class="channel-icon">
                        <i class="fab fa-facebook-f"></i>
                      </div>
                      <div class="channel-stats">
                        <span>22K</span>
                      </div>
                    </div>
                    <div class="channel">
                      <div class="channel-icon">
                        <i class="fab fa-twitter"></i>
                      </div>
                      <div class="channel-stats">
                        <span>38K</span>
                      </div>
                    </div>
                    <div class="channel">
                      <div class="channel-icon">
                        <i class="fab fa-instagram"></i>
                      </div>
                      <div class="channel-stats">
                        <span>5K</span>
                      </div>
                    </div>
                  </div>
                </div>

                <!--Widget-->
                <div class="cart-widget">
                  <div class="widget-toolbar">
                    <div class="left">
                      <h3>Your Cart</h3>
                    </div>
                    <div class="right">
                      <span class="tag is-curved is-orange">2 items</span>
                    </div>
                  </div>
                  <div class="cart-items">
                    <div class="cart-item">
                      <div class="h-avatar is-large">
                        <img
                          class="avatar is-squared"
                          src="https://fossil.scene7.com/is/image/FossilPartners/FTW4025_main?$sfcc_fos_large$"
                          alt=""
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                      </div>
                      <div class="meta">
                        <span class="text"> 5th Gen Connected Watch </span>
                        <span class="price">$319.29</span>
                      </div>
                    </div>
                    <div class="cart-item">
                      <div class="h-avatar is-large">
                        <img
                          class="avatar is-squared"
                          src="https://dyw7ncnq1en5l.cloudfront.net/optim/produits/1739/29391/fossil-q-founder_3ccf4c8115134000__450_400.jpg"
                          alt=""
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                      </div>
                      <div class="meta">
                        <span class="text"> Leather Coated F-28 Analogic </span>
                        <span class="price">$259.49</span>
                      </div>
                    </div>
                  </div>
                  <div class="cart-button">
                    <div
                      class="button h-button is-primary is-raised is-bold is-fullwidth"
                    >
                      Start Checkout
                    </div>
                  </div>
                </div>
              </div>

              <div class="column is-3">
                <!--Widget-->
                <div class="widget text-widget">
                  <div class="widget-toolbar">
                    <div class="left">
                      <h3>@cssninjaStudio</h3>
                    </div>
                    <div class="right">
                      <a class="right-icon has-indicator">
                        <Icon icon="feather:twitter" />
                      </a>
                    </div>
                  </div>
                  <div class="widget-content">
                    <p>
                      Vuero will be released very soon, probably around the end
                      of the year of the Christmas holidays.
                    </p>
                    <p class="hashtags">
                      <a>#uikit</a>
                      <a>#dashboards</a>
                      <a>#bulma</a>
                    </p>
                  </div>
                </div>

                <!--Widget-->
                <div class="widget illustration-widget illustration-widget-v3">
                  <img
                    class="main"
                    src="/@images/illustrations/widgets/5.svg"
                    alt=""
                  />
                  <h3>You unlocked 2 new Achievements</h3>
                  <p>
                    Congrats, your efforts have been rewarded. Keep up like
                    this!
                  </p>
                </div>

                <!--Widget-->
                <div class="widget contact-widget is-reversed">
                  <div class="widget-content">
                    <div class="left">
                      <div class="h-avatar is-medium">
                        <img
                          class="avatar is-squared"
                          src="/@images/avatars/photos/8.jpg"
                          alt=""
                          data-user-popover="3"
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                      </div>
                    </div>
                    <div class="right">
                      <h3>Erik K.</h3>
                      <div class="company">
                        <span>Vuero Ltd.</span>
                        <p>Product Manager</p>
                      </div>
                      <div class="contact-info">
                        <span>
                          <Icon icon="feather:map-pin" />
                          <span>Los Angeles, CA</span>
                        </span>
                        <span>
                          <Icon icon="feather:phone" />
                          <span>+1 444-5156</span>
                        </span>
                      </div>
                    </div>
                  </div>

                  <p class="email">erikkovalsky@huro.io</p>
                </div>

                <!--Widget-->
                <div class="widget social-buttons-widget">
                  <div class="social-buttons">
                    <div class="social-button">
                      <a class="inner-button is-rounded is-invision is-active">
                        <i class="fab fa-invision"></i>
                      </a>
                    </div>
                    <div class="social-button">
                      <a class="inner-button is-rounded is-github">
                        <i class="fab fa-github"></i>
                      </a>
                    </div>
                    <div class="social-button">
                      <a class="inner-button is-rounded is-atlassian">
                        <i class="fab fa-atlassian"></i>
                      </a>
                    </div>
                    <div class="social-button">
                      <a class="inner-button is-rounded is-bootstrap">
                        <i class="fab fa-bootstrap"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <!--Widget-->
                <div class="widget creative-list-widget">
                  <div class="widget-toolbar">
                    <div class="left">
                      <h3>Designers</h3>
                    </div>
                    <div class="right">
                      <WidgetDropdown />
                    </div>
                  </div>
                  <div class="creative-list">
                    <div class="creative-list-item is-orange">
                      <div class="h-avatar">
                        <img
                          class="avatar is-squared"
                          src="/@images/avatars/photos/26.jpg"
                          alt=""
                          data-user-popover="23"
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                      </div>
                      <div class="meta">
                        <span>Courtney W.</span>
                      </div>
                    </div>
                    <div class="creative-list-item is-purple">
                      <div class="h-avatar">
                        <img
                          class="avatar is-squared"
                          src="/@images/avatars/photos/7.jpg"
                          alt=""
                          data-user-popover="0"
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                      </div>
                      <div class="meta">
                        <span>Alice C.</span>
                      </div>
                    </div>
                    <div class="creative-list-item is-green">
                      <div class="h-avatar">
                        <img
                          class="avatar is-squared"
                          src="/@images/avatars/photos/8.jpg"
                          alt=""
                          data-user-popover="3"
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                      </div>
                      <div class="meta">
                        <span>Erik K.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="column is-3">
                <!--Widget-->
                <div class="widget creative-list-widget">
                  <div class="widget-toolbar">
                    <div class="left">
                      <h3>Designers</h3>
                    </div>
                    <div class="right">
                      <WidgetDropdown />
                    </div>
                  </div>
                  <div class="creative-list">
                    <div class="creative-list-item is-orange">
                      <div class="h-avatar">
                        <img
                          class="avatar"
                          src="/@images/avatars/photos/26.jpg"
                          alt=""
                          data-user-popover="23"
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                      </div>
                      <div class="meta">
                        <span>Courtney W.</span>
                      </div>
                    </div>
                    <div class="creative-list-item is-purple">
                      <div class="h-avatar">
                        <img
                          class="avatar"
                          src="/@images/avatars/photos/7.jpg"
                          alt=""
                          data-user-popover="0"
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                      </div>
                      <div class="meta">
                        <span>Alice C.</span>
                      </div>
                    </div>
                    <div class="creative-list-item is-green">
                      <div class="h-avatar">
                        <img
                          class="avatar"
                          src="/@images/avatars/photos/8.jpg"
                          alt=""
                          data-user-popover="3"
                          @error="
                            $event.target.src =
                              'https://via.placeholder.com/150x150'
                          "
                        />
                      </div>
                      <div class="meta">
                        <span>Erik K.</span>
                      </div>
                    </div>
                  </div>
                </div>

                <!--Widget-->
                <div class="widget call-widget">
                  <div class="img-container">
                    <img
                      class="main"
                      src="/@images/illustrations/widgets/6.svg"
                      alt=""
                    />
                    <img
                      class="badge"
                      src="/@images/avatars/photos/7.jpg"
                      alt=""
                      data-user-popover="0"
                      @error="
                        $event.target.src =
                          'https://via.placeholder.com/150x150'
                      "
                    />
                  </div>
                  <h3>Call Alice?</h3>
                  <div class="actions">
                    <a class="action">
                      <Icon icon="feather:message-square" />
                    </a>
                    <a class="action">
                      <Icon icon="feather:phone" />
                    </a>
                    <a class="action">
                      <Icon icon="feather:video" />
                    </a>
                  </div>
                </div>

                <!--Widget-->
                <div class="widget illustration-widget illustration-widget-v2">
                  <img
                    class="main"
                    src="/@images/illustrations/widgets/8.svg"
                    alt=""
                  />
                  <h3>You unlocked 2 new Achievements</h3>
                  <p>
                    Congrats, your efforts have been rewarded. Keep up like
                    this!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>

<style lang="scss">
@import '../../assets/scss/abstracts/_variables.scss';
@import '../../assets/scss/abstracts/_mixins.scss';
@import '../../assets/scss/pages/generic/_widgets-lists.scss';
</style>

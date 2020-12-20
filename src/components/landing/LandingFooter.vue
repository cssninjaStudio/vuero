<script lang="ts">
import { defineComponent } from 'vue'

const LandingFooter = defineComponent({
  name: 'LandingFooter',
  components: {},
  setup() {
    // LandingFooter - Composition API

    return {}
  },
})

export default LandingFooter
</script>

<template>
  <!-- Simple light footer -->
  <footer class="huro-footer">
    <div class="container">
      <div class="footer-head">
        <div class="head-text">
          <h3>Ready to get started?</h3>
          <p>Get your Huro copy now</p>
        </div>
        <div class="head-action">
          <div class="buttons">
            <a
              href="https://themeforest.net/item/huro-multipurpose-admin-and-webapp-ui-kit/28933249"
              class="button h-button is-primary is-rounded raised action-button"
              >Buy Huro</a
            >
            <a
              href="https://cssninja.io"
              target="_blank"
              class="button chat-button"
              >Chat with us</a
            >
          </div>
        </div>
      </div>
      <div class="columns footer-body">
        <!-- Column -->
        <div class="column is-4">
          <div class="p-t-10 p-b-10">
            <img
              class="small-footer-logo light-image-l"
              src="/src/assets/images/logos/logo/logo.svg"
              alt=""
            />
            <img
              class="small-footer-logo dark-image-l"
              src="/src/assets/images/logos/logo/logo-light.svg"
              alt=""
            />
            <div class="footer-description p-t-10 p-b-10">
              Huro is built for developers and designers. It's modular approach
              lets you create awesome webapps with incredible layouts and
              elements.
            </div>
          </div>
          <div>
            <span class="moto"
              >Designed and coded with
              <i class="fa fa-heart text-danger p-l-5 p-r-5"></i> by CSS
              Ninja.</span
            >
            <div class="social-links p-t-10 p-b-10">
              <a href="#">
                <span class="icon"><i class="fab fa-facebook"></i></span>
              </a>
              <a href="#">
                <span class="icon"><i class="fab fa-twitter"></i></span>
              </a>
              <a href="#">
                <span class="icon"><i class="fab fa-linkedin"></i></span>
              </a>
              <a href="#">
                <span class="icon"><i class="fab fa-dribbble"></i></span>
              </a>
              <a href="#">
                <span class="icon"><i class="fab fa-github"></i></span>
              </a>
            </div>
          </div>
        </div>
        <!-- Column -->
        <div class="column is-6 is-offset-2">
          <div class="columns is-flex-tablet-p">
            <!-- Column -->
            <div class="column">
              <ul class="footer-column">
                <li class="column-header">Huro</li>
                <li class="column-item"><a href="#">Home</a></li>
                <li class="column-item"><a href="#">Pricing</a></li>
                <li class="column-item"><a href="#">Get started</a></li>
                <li class="column-item"><a href="#">Help</a></li>
              </ul>
            </div>
            <!-- Column -->
            <div class="column">
              <ul class="footer-column">
                <li class="column-header">Resources</li>
                <li class="column-item"><a href="#">Learning</a></li>
                <li class="column-item"><a href="#">Support center</a></li>
                <li class="column-item"><a href="#">Frequent questions</a></li>
                <li class="column-item"><a href="#">Schedule a demo</a></li>
              </ul>
            </div>
            <!-- Column -->
            <div class="column">
              <ul class="footer-column">
                <li class="column-header">Terms</li>
                <li class="column-item"><a href="#">Terms of Service</a></li>
                <li class="column-item"><a href="#">Privacy policy</a></li>
                <li class="column-item"><a href="#">SaaS services</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-copyright has-text-centered">
        <p>
          &copy; 2020-2021 | <a href="https://cssninja.io">Css Ninja</a> | All
          Rights Reserved.
        </p>
      </div>
    </div>
  </footer>
  <!-- /Simple light footer -->
</template>
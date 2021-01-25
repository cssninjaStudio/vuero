<script setup lang="ts">
import type { TinySliderInstance } from 'tiny-slider/src/tiny-slider'
import { tns } from 'tiny-slider/src/tiny-slider'
import { ref, onMounted, onUnmounted } from 'vue'

const activeSection = ref('cart')

let slider: TinySliderInstance
const sliderElement = ref<HTMLElement | null>(null)
const nextButtonElement = ref<HTMLElement | null>(null)
const prevButtonElement = ref<HTMLElement | null>(null)

const onIndexChanged = (info: any) => {
  // direct access to info object
  const indexPrev = info.indexCached
  const indexCurrent = info.index

  // update style based on index
  info.slideItems[indexPrev].classList.remove('active')
  info.slideItems[indexCurrent].classList.add('active')
}
onMounted(() => {
  if (
    sliderElement.value &&
    nextButtonElement.value &&
    prevButtonElement.value
  ) {
    slider = tns({
      container: sliderElement.value,
      controls: true,
      nav: false,
      mouseDrag: true,
      nextButton: nextButtonElement.value,
      prevButton: prevButtonElement.value,
      fixedWidth: 100,
      swipeAngle: false,
      items: 1,
      center: false,
      loop: true,
    })

    slider.events.on('indexChanged', onIndexChanged)
  }
})

onUnmounted(() => {
  if (slider) {
    slider.events.off('indexChanged', onIndexChanged)
    slider.destroy()
  }
})
</script>
<template>
  <!--Food Delivery Dashboard-->
  <div class="food-delivery-dashboard">
    <!--Left-->
    <div class="left">
      <div class="left-header">
        <div class="header-image">
          <img src="/images/illustrations/dashboards/food/header.svg" alt="" />
        </div>
        <div class="header-meta">
          <h3>$0 delivery for 30 days! 🎉</h3>
          <p>$0 delivery fee for orders over $10 for 30 days</p>
          <a class="action-link">
            <span>Learn More</span>
            <i class="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>

      <div class="left-body">
        <div class="restaurants">
          <div class="restaurants-toolbar">
            <div class="left">
              <h3>Restaurants</h3>
            </div>

            <div class="right"></div>
          </div>

          <div class="food-pills">
            <div
              ref="prevButtonElement"
              class="slick-custom is-prev slick-arrow"
            >
              <i class="fas fa-angle-left"></i>
            </div>
            <div
              ref="nextButtonElement"
              class="slick-custom is-next slick-arrow"
            >
              <i class="fas fa-angle-right"></i>
            </div>
            <div ref="sliderElement" class="food-pills-inner pill-carousel">
              <!--Pill-->
              <div class="food-pill">
                <div class="food-pill-icon">
                  <img
                    src="/images/illustrations/dashboards/food/icon-1.svg"
                    alt=""
                  />
                </div>
                <span>All</span>
              </div>
              <!--Pill-->
              <div class="food-pill">
                <div class="food-pill-icon">
                  <img
                    src="/images/illustrations/dashboards/food/icon-2.svg"
                    alt=""
                  />
                </div>
                <span>Pizza</span>
              </div>
              <!--Pill-->
              <div class="food-pill">
                <div class="food-pill-icon">
                  <img
                    src="/images/illustrations/dashboards/food/icon-3.svg"
                    alt=""
                  />
                </div>
                <span>Asian</span>
              </div>
              <!--Pill-->
              <div class="food-pill">
                <div class="food-pill-icon">
                  <img
                    src="/images/illustrations/dashboards/food/icon-4.svg"
                    alt=""
                  />
                </div>
                <span>Fast</span>
              </div>
              <!--Pill-->
              <div class="food-pill">
                <div class="food-pill-icon">
                  <img
                    src="/images/illustrations/dashboards/food/icon-5.svg"
                    alt=""
                  />
                </div>
                <span>Grills</span>
              </div>
              <!--Pill-->
              <div class="food-pill">
                <div class="food-pill-icon">
                  <img
                    src="/images/illustrations/dashboards/food/icon-6.svg"
                    alt=""
                  />
                </div>
                <span>Cakes</span>
              </div>
              <!--Pill-->
              <div class="food-pill">
                <div class="food-pill-icon">
                  <img
                    src="/images/illustrations/dashboards/food/icon-7.svg"
                    alt=""
                  />
                </div>
                <span>Thai</span>
              </div>
              <!--Pill-->
              <div class="food-pill">
                <div class="food-pill-icon">
                  <img
                    src="/images/illustrations/dashboards/food/icon-8.svg"
                    alt=""
                  />
                </div>
                <span>Sushi</span>
              </div>
              <!--Pill-->
              <div class="food-pill">
                <div class="food-pill-icon">
                  <img
                    src="/images/illustrations/dashboards/food/icon-9.svg"
                    alt=""
                  />
                </div>
                <span>Fruits</span>
              </div>
              <!--Pill-->
              <div class="food-pill">
                <div class="food-pill-icon">
                  <img
                    src="/images/illustrations/dashboards/food/icon-10.svg"
                    alt=""
                  />
                </div>
                <span>Veggie</span>
              </div>
              <!--Pill-->
              <div class="food-pill">
                <div class="food-pill-icon">
                  <img
                    src="/images/illustrations/dashboards/food/icon-11.svg"
                    alt=""
                  />
                </div>
                <span>Brunch</span>
              </div>
              <!--Pill-->
              <div class="food-pill">
                <div class="food-pill-icon">
                  <img
                    src="/images/illustrations/dashboards/food/icon-12.svg"
                    alt=""
                  />
                </div>
                <span>Pasta</span>
              </div>
              <!--Pill-->
              <div class="food-pill">
                <div class="food-pill-icon">
                  <img
                    src="/images/illustrations/dashboards/food/icon-13.svg"
                    alt=""
                  />
                </div>
                <span>Fish</span>
              </div>
              <!--Pill-->
              <div class="food-pill">
                <div class="food-pill-icon">
                  <img
                    src="/images/illustrations/dashboards/food/icon-2.svg"
                    alt=""
                  />
                </div>
                <span>Pizza</span>
              </div>
              <!--Pill-->
              <div class="food-pill">
                <div class="food-pill-icon">
                  <img
                    src="/images/illustrations/dashboards/food/icon-3.svg"
                    alt=""
                  />
                </div>
                <span>Asian</span>
              </div>
              <!--Pill-->
              <div class="food-pill">
                <div class="food-pill-icon">
                  <img
                    src="/images/illustrations/dashboards/food/icon-4.svg"
                    alt=""
                  />
                </div>
                <span>Fast</span>
              </div>
              <!--Pill-->
              <div class="food-pill">
                <div class="food-pill-icon">
                  <img
                    src="/images/illustrations/dashboards/food/icon-5.svg"
                    alt=""
                  />
                </div>
                <span>Grills</span>
              </div>
              <!--Pill-->
              <div class="food-pill">
                <div class="food-pill-icon">
                  <img
                    src="/images/illustrations/dashboards/food/icon-6.svg"
                    alt=""
                  />
                </div>
                <span>Cakes</span>
              </div>
              <!--Pill-->
              <div class="food-pill">
                <div class="food-pill-icon">
                  <img
                    src="/images/illustrations/dashboards/food/icon-7.svg"
                    alt=""
                  />
                </div>
                <span>Thai</span>
              </div>
              <!--Pill-->
              <div class="food-pill">
                <div class="food-pill-icon">
                  <img
                    src="/images/illustrations/dashboards/food/icon-9.svg"
                    alt=""
                  />
                </div>
                <span>Fruits</span>
              </div>
              <!--Pill-->
              <div class="food-pill">
                <div class="food-pill-icon">
                  <img
                    src="/images/illustrations/dashboards/food/icon-10.svg"
                    alt=""
                  />
                </div>
                <span>Veggie</span>
              </div>
              <!--Pill-->
              <div class="food-pill">
                <div class="food-pill-icon">
                  <img
                    src="/images/illustrations/dashboards/food/icon-11.svg"
                    alt=""
                  />
                </div>
                <span>Brunch</span>
              </div>
              <!--Pill-->
              <div class="food-pill">
                <div class="food-pill-icon">
                  <img
                    src="/images/illustrations/dashboards/food/icon-12.svg"
                    alt=""
                  />
                </div>
                <span>Pasta</span>
              </div>
              <!--Pill-->
              <div class="food-pill">
                <div class="food-pill-icon">
                  <img
                    src="/images/illustrations/dashboards/food/icon-13.svg"
                    alt=""
                  />
                </div>
                <span>Fish</span>
              </div>
            </div>
          </div>

          <div class="restaurants-list">
            <div class="columns is-multiline">
              <!--Restaurant-->
              <div class="column is-4">
                <div class="restaurants-list-item">
                  <div class="image-container">
                    <img
                      src="/images/photo/demo/food/1.jpg"
                      alt=""
                      @error="
                        $event.target.src =
                          'https://via.placeholder.com/800x450'
                      "
                    />
                    <div class="timer">
                      <div>
                        <span>40</span>
                        <span>Min</span>
                      </div>
                    </div>
                  </div>
                  <div class="meta-container">
                    <div class="meta-icon">
                      <img
                        src="/images/illustrations/dashboards/food/icon-2.svg"
                        alt=""
                        @error="
                          $event.target.src =
                            'https://via.placeholder.com/800x450'
                        "
                      />
                    </div>
                    <div class="meta-content">
                      <h4>Mario's Place</h4>
                      <p>
                        <span>Pizza</span>
                        <i class="fas fa-circle"></i>
                        <span class="rating">
                          <i class="fas fa-star"></i>
                          <span>4.9</span>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <!--Restaurant-->
              <div class="column is-4">
                <div class="restaurants-list-item">
                  <div class="image-container">
                    <img
                      src="/images/photo/demo/food/2.jpg"
                      alt=""
                      @error="
                        $event.target.src =
                          'https://via.placeholder.com/800x450'
                      "
                    />
                    <div class="timer">
                      <div>
                        <span>30</span>
                        <span>Min</span>
                      </div>
                    </div>
                  </div>
                  <div class="meta-container">
                    <div class="meta-icon">
                      <img
                        src="/images/illustrations/dashboards/food/icon-4.svg"
                        alt=""
                      />
                    </div>
                    <div class="meta-content">
                      <h4>Jimmy's Downtown</h4>
                      <p>
                        <span>Fast</span>
                        <i class="fas fa-circle"></i>
                        <span class="rating">
                          <i class="fas fa-star"></i>
                          <span>4.5</span>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <!--Restaurant-->
              <div class="column is-4">
                <div class="restaurants-list-item">
                  <div class="image-container">
                    <img
                      src="/images/photo/demo/food/3.jpg"
                      alt=""
                      @error="
                        $event.target.src =
                          'https://via.placeholder.com/800x450'
                      "
                    />
                    <div class="timer">
                      <div>
                        <span>45</span>
                        <span>Min</span>
                      </div>
                    </div>
                  </div>
                  <div class="meta-container">
                    <div class="meta-icon">
                      <img
                        src="/images/illustrations/dashboards/food/icon-9.svg"
                        alt=""
                      />
                    </div>
                    <div class="meta-content">
                      <h4>Fruity Loops</h4>
                      <p>
                        <span>Fruits</span>
                        <i class="fas fa-circle"></i>
                        <span class="rating">
                          <i class="fas fa-star"></i>
                          <span>4.8</span>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <!--Restaurant-->
              <div class="column is-4">
                <div class="restaurants-list-item">
                  <div class="image-container">
                    <img
                      src="/images/photo/demo/food/4.jpg"
                      alt=""
                      @error="
                        $event.target.src =
                          'https://via.placeholder.com/800x450'
                      "
                    />
                    <div class="timer">
                      <div>
                        <span>20</span>
                        <span>Min</span>
                      </div>
                    </div>
                  </div>
                  <div class="meta-container">
                    <div class="meta-icon">
                      <img
                        src="/images/illustrations/dashboards/food/icon-10.svg"
                        alt=""
                      />
                    </div>
                    <div class="meta-content">
                      <h4>The Green Heaven</h4>
                      <p>
                        <span>Veggie</span>
                        <i class="fas fa-circle"></i>
                        <span class="rating">
                          <i class="fas fa-star"></i>
                          <span>5.0</span>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <!--Restaurant-->
              <div class="column is-4">
                <div class="restaurants-list-item">
                  <div class="image-container">
                    <img
                      src="/images/photo/demo/food/5.jpg"
                      alt=""
                      @error="
                        $event.target.src =
                          'https://via.placeholder.com/800x450'
                      "
                    />
                    <div class="timer">
                      <div>
                        <span>30</span>
                        <span>Min</span>
                      </div>
                    </div>
                  </div>
                  <div class="meta-container">
                    <div class="meta-icon">
                      <img
                        src="/images/illustrations/dashboards/food/icon-10.svg"
                        alt=""
                      />
                    </div>
                    <div class="meta-content">
                      <h4>Salad Bar</h4>
                      <p>
                        <span>Veggie</span>
                        <i class="fas fa-circle"></i>
                        <span class="rating">
                          <i class="fas fa-star"></i>
                          <span>4.8</span>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <!--Restaurant-->
              <div class="column is-4">
                <div class="restaurants-list-item">
                  <div class="image-container">
                    <img
                      src="/images/photo/demo/food/6.jpg"
                      alt=""
                      @error="
                        $event.target.src =
                          'https://via.placeholder.com/800x450'
                      "
                    />
                    <div class="timer">
                      <div>
                        <span>50</span>
                        <span>Min</span>
                      </div>
                    </div>
                  </div>
                  <div class="meta-container">
                    <div class="meta-icon">
                      <img
                        src="/images/illustrations/dashboards/food/icon-12.svg"
                        alt=""
                      />
                    </div>
                    <div class="meta-content">
                      <h4>Little Italy</h4>
                      <p>
                        <span>Pasta</span>
                        <i class="fas fa-circle"></i>
                        <span class="rating">
                          <i class="fas fa-star"></i>
                          <span>1.1</span>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <!--Restaurant-->
              <div class="column is-4">
                <div class="restaurants-list-item">
                  <div class="image-container">
                    <img
                      src="/images/photo/demo/food/7.jpg"
                      alt=""
                      @error="
                        $event.target.src =
                          'https://via.placeholder.com/800x450'
                      "
                    />
                    <div class="timer">
                      <div>
                        <span>15</span>
                        <span>Min</span>
                      </div>
                    </div>
                  </div>
                  <div class="meta-container">
                    <div class="meta-icon">
                      <img
                        src="/images/illustrations/dashboards/food/icon-7.svg"
                        alt=""
                      />
                    </div>
                    <div class="meta-content">
                      <h4>The Noodle Bar</h4>
                      <p>
                        <span>Thai</span>
                        <i class="fas fa-circle"></i>
                        <span class="rating">
                          <i class="fas fa-star"></i>
                          <span>4.9</span>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <!--Restaurant-->
              <div class="column is-4">
                <div class="restaurants-list-item">
                  <div class="image-container">
                    <img
                      src="/images/photo/demo/food/8.jpg"
                      alt=""
                      @error="
                        $event.target.src =
                          'https://via.placeholder.com/800x450'
                      "
                    />
                    <div class="timer">
                      <div>
                        <span>20</span>
                        <span>Min</span>
                      </div>
                    </div>
                  </div>
                  <div class="meta-container">
                    <div class="meta-icon">
                      <img
                        src="/images/illustrations/dashboards/food/icon-4.svg"
                        alt=""
                      />
                    </div>
                    <div class="meta-content">
                      <h4>Jerry's Epic Burger</h4>
                      <p>
                        <span>Fast</span>
                        <i class="fas fa-circle"></i>
                        <span class="rating">
                          <i class="fas fa-star"></i>
                          <span>5.0</span>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <!--Restaurant-->
              <div class="column is-4">
                <div class="restaurants-list-item">
                  <div class="image-container">
                    <img
                      src="/images/photo/demo/food/9.jpg"
                      alt=""
                      @error="
                        $event.target.src =
                          'https://via.placeholder.com/800x450'
                      "
                    />
                    <div class="timer">
                      <div>
                        <span>55</span>
                        <span>Min</span>
                      </div>
                    </div>
                  </div>
                  <div class="meta-container">
                    <div class="meta-icon">
                      <img
                        src="/images/illustrations/dashboards/food/icon-13.svg"
                        alt=""
                      />
                    </div>
                    <div class="meta-content">
                      <h4>Meals From The Sea</h4>
                      <p>
                        <span>Fish</span>
                        <i class="fas fa-circle"></i>
                        <span class="rating">
                          <i class="fas fa-star"></i>
                          <span>4.7</span>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <!--Restaurant-->
              <div class="column is-4">
                <div class="restaurants-list-item">
                  <div class="image-container">
                    <img
                      src="/images/photo/demo/food/10.jpg"
                      alt=""
                      @error="
                        $event.target.src =
                          'https://via.placeholder.com/800x450'
                      "
                    />
                    <div class="timer">
                      <div>
                        <span>45</span>
                        <span>Min</span>
                      </div>
                    </div>
                  </div>
                  <div class="meta-container">
                    <div class="meta-icon">
                      <img
                        src="/images/illustrations/dashboards/food/icon-6.svg"
                        alt=""
                      />
                    </div>
                    <div class="meta-content">
                      <h4>Delicious Little Things</h4>
                      <p>
                        <span>Cakes</span>
                        <i class="fas fa-circle"></i>
                        <span class="rating">
                          <i class="fas fa-star"></i>
                          <span>5.0</span>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <!--Restaurant-->
              <div class="column is-4">
                <div class="restaurants-list-item">
                  <div class="image-container">
                    <img
                      src="/images/photo/demo/food/11.jpg"
                      alt=""
                      @error="
                        $event.target.src =
                          'https://via.placeholder.com/800x450'
                      "
                    />
                    <div class="timer">
                      <div>
                        <span>15</span>
                        <span>Min</span>
                      </div>
                    </div>
                  </div>
                  <div class="meta-container">
                    <div class="meta-icon">
                      <img
                        src="/images/illustrations/dashboards/food/icon-4.svg"
                        alt=""
                      />
                    </div>
                    <div class="meta-content">
                      <h4>Pollos Hermanos</h4>
                      <p>
                        <span>Fast</span>
                        <i class="fas fa-circle"></i>
                        <span class="rating">
                          <i class="fas fa-star"></i>
                          <span>5.0</span>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <!--Restaurant-->
              <div class="column is-4">
                <div class="restaurants-list-item">
                  <div class="image-container">
                    <img
                      src="/images/photo/demo/food/12.jpg"
                      alt=""
                      @error="
                        $event.target.src =
                          'https://via.placeholder.com/800x450'
                      "
                    />
                    <div class="timer">
                      <div>
                        <span>30</span>
                        <span>Min</span>
                      </div>
                    </div>
                  </div>
                  <div class="meta-container">
                    <div class="meta-icon">
                      <img
                        src="/images/illustrations/dashboards/food/icon-6.svg"
                        alt=""
                      />
                    </div>
                    <div class="meta-content">
                      <h4>Iced & Delicious</h4>
                      <p>
                        <span>Cakes</span>
                        <i class="fas fa-circle"></i>
                        <span class="rating">
                          <i class="fas fa-star"></i>
                          <span>4.2</span>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <!--Restaurant-->
              <div class="column is-4">
                <div class="restaurants-list-item">
                  <div class="image-container">
                    <img
                      src="/images/photo/demo/food/13.jpg"
                      alt=""
                      @error="
                        $event.target.src =
                          'https://via.placeholder.com/800x450'
                      "
                    />
                    <div class="timer">
                      <div>
                        <span>30</span>
                        <span>Min</span>
                      </div>
                    </div>
                  </div>
                  <div class="meta-container">
                    <div class="meta-icon">
                      <img
                        src="/images/illustrations/dashboards/food/icon-8.svg"
                        alt=""
                      />
                    </div>
                    <div class="meta-content">
                      <h4>Osaka Sushi</h4>
                      <p>
                        <span>Sushi</span>
                        <i class="fas fa-circle"></i>
                        <span class="rating">
                          <i class="fas fa-star"></i>
                          <span>4.9</span>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <!--Restaurant-->
              <div class="column is-4">
                <div class="restaurants-list-item">
                  <div class="image-container">
                    <img
                      src="/images/photo/demo/food/14.jpg"
                      alt=""
                      @error="
                        $event.target.src =
                          'https://via.placeholder.com/800x450'
                      "
                    />
                    <div class="timer">
                      <div>
                        <span>10</span>
                        <span>Min</span>
                      </div>
                    </div>
                  </div>
                  <div class="meta-container">
                    <div class="meta-icon">
                      <img
                        src="/images/illustrations/dashboards/food/icon-10.svg"
                        alt=""
                      />
                    </div>
                    <div class="meta-content">
                      <h4>Quick Treats</h4>
                      <p>
                        <span>Veggie</span>
                        <i class="fas fa-circle"></i>
                        <span class="rating">
                          <i class="fas fa-star"></i>
                          <span>3.8</span>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <!--Restaurant-->
              <div class="column is-4">
                <div class="restaurants-list-item">
                  <div class="image-container">
                    <img
                      src="/images/photo/demo/food/15.jpg"
                      alt=""
                      @error="
                        $event.target.src =
                          'https://via.placeholder.com/800x450'
                      "
                    />
                    <div class="timer">
                      <div>
                        <span>30</span>
                        <span>Min</span>
                      </div>
                    </div>
                  </div>
                  <div class="meta-container">
                    <div class="meta-icon">
                      <img
                        src="/images/illustrations/dashboards/food/icon-10.svg"
                        alt=""
                      />
                    </div>
                    <div class="meta-content">
                      <h4>Sam' Dwich</h4>
                      <p>
                        <span>Veggie</span>
                        <i class="fas fa-circle"></i>
                        <span class="rating">
                          <i class="fas fa-star"></i>
                          <span>4.5</span>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <!--Restaurant-->
              <div class="column is-4">
                <div class="restaurants-list-item">
                  <div class="image-container">
                    <img
                      src="/images/photo/demo/food/16.jpg"
                      alt=""
                      @error="
                        $event.target.src =
                          'https://via.placeholder.com/800x450'
                      "
                    />
                    <div class="timer">
                      <div>
                        <span>45</span>
                        <span>Min</span>
                      </div>
                    </div>
                  </div>
                  <div class="meta-container">
                    <div class="meta-icon">
                      <img
                        src="/images/illustrations/dashboards/food/icon-6.svg"
                        alt=""
                      />
                    </div>
                    <div class="meta-content">
                      <h4>Sunchine Cookies</h4>
                      <p>
                        <span>Cakes</span>
                        <i class="fas fa-circle"></i>
                        <span class="rating">
                          <i class="fas fa-star"></i>
                          <span>4.9</span>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <!--Restaurant-->
              <div class="column is-4">
                <div class="restaurants-list-item">
                  <div class="image-container">
                    <img
                      src="/images/photo/demo/food/17.jpg"
                      alt=""
                      @error="
                        $event.target.src =
                          'https://via.placeholder.com/800x450'
                      "
                    />
                    <div class="timer">
                      <div>
                        <span>45</span>
                        <span>Min</span>
                      </div>
                    </div>
                  </div>
                  <div class="meta-container">
                    <div class="meta-icon">
                      <img
                        src="/images/illustrations/dashboards/food/icon-4.svg"
                        alt=""
                      />
                    </div>
                    <div class="meta-content">
                      <h4>O' Fried Chicken</h4>
                      <p>
                        <span>Fast</span>
                        <i class="fas fa-circle"></i>
                        <span class="rating">
                          <i class="fas fa-star"></i>
                          <span>1.0</span>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <!--Restaurant-->
              <div class="column is-4">
                <div class="restaurants-list-item">
                  <div class="image-container">
                    <img
                      src="/images/photo/demo/food/18.jpg"
                      alt=""
                      @error="
                        $event.target.src =
                          'https://via.placeholder.com/800x450'
                      "
                    />
                    <div class="timer">
                      <div>
                        <span>30</span>
                        <span>Min</span>
                      </div>
                    </div>
                  </div>
                  <div class="meta-container">
                    <div class="meta-icon">
                      <img
                        src="/images/illustrations/dashboards/food/icon-7.svg"
                        alt=""
                      />
                    </div>
                    <div class="meta-content">
                      <h4>Bangkok Woks</h4>
                      <p>
                        <span>Thai</span>
                        <i class="fas fa-circle"></i>
                        <span class="rating">
                          <i class="fas fa-star"></i>
                          <span>4.5</span>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="right fixed-parent">
      <div class="sticky-panel fixed-child">
        <div class="widget icon-toolbar-widget">
          <div class="icon-toolbar">
            <div class="toolbar-icon">
              <a
                class="inner-icon"
                :class="[activeSection === 'cart' && 'is-active']"
                @click="activeSection = 'cart'"
              >
                <i class="iconify" data-icon="feather:shopping-cart"></i>
              </a>
            </div>
            <div class="toolbar-icon">
              <a
                class="inner-icon"
                :class="[activeSection === 'activity' && 'is-active']"
                @click="activeSection = 'activity'"
              >
                <i class="iconify" data-icon="feather:activity"></i>
              </a>
            </div>
            <div class="toolbar-icon">
              <a
                class="inner-icon"
                :class="[activeSection === 'address' && 'is-active']"
                @click="activeSection = 'address'"
              >
                <i class="iconify" data-icon="feather:map-pin"></i>
              </a>
            </div>
            <div class="toolbar-icon">
              <a
                class="inner-icon"
                :class="[activeSection === 'settings' && 'is-active']"
                @click="activeSection = 'settings'"
              >
                <i class="iconify" data-icon="feather:settings"></i>
              </a>
            </div>
          </div>
        </div>

        <div
          class="cart-widget side-section"
          :class="[activeSection === 'cart' && 'is-active']"
        >
          <div class="widget-toolbar">
            <div class="left">
              <h3 class="is-bigger">My Order</h3>
            </div>
            <div class="right">
              <span class="tag is-curved">0 items</span>
            </div>
          </div>
          <div class="section-placeholder">
            <div class="placeholder-content">
              <img
                src="/images/illustrations/dashboards/food/cart-placeholder.svg"
                alt=""
              />
              <h3 class="dark-inverted">No Items</h3>
              <p>Your cart is currently empty. Start adding products.</p>
            </div>
          </div>
          <div class="cart-items has-slimscroll is-hidden">
            <div class="cart-item">
              <div class="v-avatar is-medium">
                <img
                  class="avatar is-squared"
                  src="/images/photo/demo/food/1.jpg"
                  alt=""
                  @error="
                    $event.target.src = 'https://via.placeholder.com/150x150'
                  "
                />
              </div>
              <div class="meta">
                <span class="text"> Double XL Burger </span>
                <span class="price">$15.50 x 1</span>
              </div>
            </div>
            <div class="cart-item">
              <div class="v-avatar is-medium">
                <img
                  class="avatar is-squared"
                  src="/images/photo/demo/food/2.jpg"
                  alt=""
                  @error="
                    $event.target.src = 'https://via.placeholder.com/150x150'
                  "
                />
              </div>
              <div class="meta">
                <span class="text"> Cherry Cupcakes </span>
                <span class="price">$8.00 x 3</span>
              </div>
            </div>
            <div class="cart-item">
              <div class="v-avatar is-medium">
                <img
                  class="avatar is-squared"
                  src="/images/photo/demo/food/3.jpg"
                  alt=""
                  @error="
                    $event.target.src = 'https://via.placeholder.com/150x150'
                  "
                />
              </div>
              <div class="meta">
                <span class="text"> Extra Fries </span>
                <span class="price">$7.90 x 2</span>
              </div>
            </div>
          </div>
          <div class="cart-button">
            <div class="total">
              <span class="label">Total</span>
              <span>$0.00</span>
            </div>
            <div
              class="button v-button is-primary is-raised is-bold is-fullwidth"
            >
              Start Checkout
            </div>
          </div>
        </div>

        <div
          class="side-section"
          :class="[activeSection === 'activity' && 'is-active']"
        >
          <div class="widget followers-widget">
            <div class="widget-toolbar">
              <div class="left">
                <h3 class="is-bigger">Followers</h3>
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

          <div class="widget illustration-widget illustration-widget-v2">
            <img
              class="main"
              src="/images/illustrations/dashboards/food/widget.svg"
              alt=""
            />
            <h3>You unlocked 2 new Achievements</h3>
            <p>Congrats, your efforts have been rewarded. Keep up like this!</p>
          </div>
        </div>

        <div
          class="side-section"
          :class="[activeSection === 'address' && 'is-active']"
        >
          <div class="widget text-widget">
            <div class="widget-toolbar">
              <div class="left">
                <h3 class="is-bigger">Deliver to</h3>
              </div>
              <div class="right">
                <a class="action-link"> Edit </a>
              </div>
            </div>
            <div class="widget-content">
              <p>Erik Kovalsky</p>
              <p>38, Suite B2 Parkman Avenue</p>
              <p>Los Angeles, CA</p>
            </div>
          </div>

          <div class="widget contact-widget is-reversed">
            <div class="widget-content">
              <div class="left">
                <div class="v-avatar is-medium">
                  <img
                    class="avatar is-squared"
                    src="/images/avatars/photos/8.jpg"
                    alt=""
                    data-user-popover="3"
                    @error="
                      $event.target.src = 'https://via.placeholder.com/150x150'
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
                    <i class="iconify" data-icon="feather:map-pin"></i>
                    <span>Los Angeles, CA</span>
                  </span>
                  <span>
                    <i class="iconify" data-icon="feather:phone"></i>
                    <span>+1 444-5156</span>
                  </span>
                </div>
              </div>
            </div>

            <p class="email">erikkovalsky@huro.io</p>
          </div>
        </div>

        <div
          class="side-section"
          :class="[activeSection === 'settings' && 'is-active']"
        >
          <div class="widget icon-list-widget">
            <div class="widget-toolbar">
              <div class="left">
                <h3 class="is-bigger">Settings</h3>
              </div>
              <div class="right">
                <WidgetDropdown />
              </div>
            </div>
            <div class="icon-list">
              <div class="icon-list-item">
                <div class="icon-wrap">
                  <i class="iconify" data-icon="feather:circle"></i>
                </div>
                <div class="item-meta">
                  <span>Global</span>
                </div>
              </div>
              <div class="icon-list-item">
                <div class="icon-wrap">
                  <i class="iconify" data-icon="feather:user"></i>
                </div>
                <div class="item-meta">
                  <span>Profile</span>
                </div>
              </div>
              <div class="icon-list-item">
                <div class="icon-wrap">
                  <i class="iconify" data-icon="feather:credit-card"></i>
                </div>
                <div class="item-meta">
                  <span>Payments</span>
                </div>
              </div>
              <div class="icon-list-item">
                <div class="icon-wrap">
                  <i class="iconify" data-icon="feather:clock"></i>
                </div>
                <div class="item-meta">
                  <span>History</span>
                </div>
              </div>
              <div class="icon-list-item">
                <div class="icon-wrap">
                  <i class="iconify" data-icon="feather:file"></i>
                </div>
                <div class="item-meta">
                  <span>Invoices</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../assets/scss/abstracts/_variables.scss';
@import '../../assets/scss/abstracts/_mixins.scss';
@import '../../assets/scss/pages/generic/_widgets-lists.scss';

.food-delivery-dashboard {
  display: flex;

  &.is-webapp {
    margin-top: 30px;

    > .right {
      .sticky-panel {
        height: calc(100% - 120px) !important;

        &.is-stretched {
          height: calc(100% - 120px);
          top: 100px;
        }
      }
    }
  }

  .left {
    width: 70%;

    .left-header {
      display: flex;
      align-items: center;
      padding: 10px;
      border-radius: 16px;
      background: lighten($accent, 24%);
      font-family: $font;

      .header-image {
        position: relative;
        height: 150px;
        width: 280px;

        img {
          position: absolute;
          top: -40px;
          left: -30px;
          display: block;
        }
      }

      .header-meta {
        margin-left: 0;
        margin-bottom: 20px;

        h3 {
          font-family: $font-alt;
          font-weight: 700;
          font-size: 1.6rem;
        }

        p {
          font-weight: 400;
          color: darken($primary, 14%);
          margin-bottom: 8px;
        }

        .action-link {
          span {
            font-size: 0.8rem;
            text-transform: uppercase;
            margin-right: 6px;
          }

          i {
            font-size: 12px;
          }
        }
      }
    }

    .left-body {
      .restaurants {
        .restaurants-toolbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 20px 0;
          font-family: $font;

          .left {
            h3 {
              font-family: $font-alt;
              color: $dark-text;
              font-size: 1.3rem;
              font-weight: 600;
            }
          }

          .right {
            display: flex;
            justify-content: flex-end;
          }
        }
      }

      .food-pills {
        position: relative;

        .food-pills-inner {
          .food-pill {
            // display: flex;
            // flex-direction: column;
            text-align: center;
            width: 80px;
            max-width: 80px;
            height: 170px;
            background: $white;
            border: 1px solid darken($fade-grey, 3%);
            border-radius: 500px;
            padding: 10px;
            margin: 0 10px;
            cursor: pointer;
            transition: all 0.3s;

            &.is-active {
              background: $primary;
              border-color: $primary;

              .food-pill-icon {
                border-color: $primary;
              }

              > span {
                color: $smoke-white;
              }
            }

            .food-pill-icon {
              display: flex;
              justify-content: center;
              align-items: center;
              width: 60px;
              height: 80px;
              background: $white;
              border: 1px solid darken($fade-grey, 3%);
              border-radius: 500px;

              img {
                display: flex;
                height: 26px;
                width: 26px;
              }
            }

            span {
              font-family: $font;
              font-weight: 500;
              padding-top: 12px;
              transition: color 0.3s;
            }
          }
        }

        .tns-slider {
          &:focus {
            outline: none !important;
          }

          .active {
            background: $primary;
            border-color: $primary;

            .food-pill-icon {
              border-color: $primary;
            }

            > span {
              color: $smoke-white;
            }
          }
        }

        .slick-custom {
          &.is-prev {
            right: 30px;

            i {
              position: relative;
              left: -1px;
            }
          }

          &.is-next {
            right: 0;

            i {
              position: relative;
              right: -1px;
            }
          }
        }

        .slick-prev::before,
        .slick-next::before {
          color: $muted-grey;
        }

        .slick-custom {
          position: absolute;
          top: -50px;
          display: flex;
          justify-content: center;
          align-items: center;
          border: 1px solid transparent;
          width: 30px;
          height: 30px;
          background: transparent;
          border-radius: 100px;
          cursor: pointer;
          color: $light-text;
          transition: all 0.3s;
          z-index: 25;

          svg {
            height: 16px;
            width: 16px;
            color: $primary;
            transition: all 0.3s;
          }

          &:hover {
            border-color: darken($fade-grey, 4%);
            background: $white;
            box-shadow: $light-box-shadow;
          }
        }
      }

      .restaurants-list {
        padding: 30px 0;

        .restaurants-list-item {
          @include vuero-l-card();

          position: relative;
          padding: 0;
          border: none;
          background: none;

          .image-container {
            position: relative;

            > img {
              display: block;
              object-fit: cover;
              border-radius: 24px;
              min-height: 180px;
              max-height: 180px;
              width: 100%;
            }

            .timer {
              position: absolute;
              bottom: 10px;
              left: 10px;
              display: flex;
              justify-content: center;
              align-items: center;
              height: 50px;
              width: 50px;
              border-radius: 12px;
              background: $primary;
              border: 1px solid $primary;
              font-family: $font;
              text-align: center;

              span {
                display: block;

                &:first-child {
                  font-size: 1.3rem;
                  color: $smoke-white;
                  font-weight: 600;
                  line-height: 1;
                }

                &:nth-child(2) {
                  font-size: 0.7rem;
                  text-transform: uppercase;
                  color: lighten($primary, 40%);
                }
              }
            }
          }

          .meta-container {
            display: flex;
            align-items: center;
            padding: 5px 5px;

            .meta-icon {
              display: flex;
              justify-content: center;
              align-items: center;
              width: 46px;
              min-width: 46px;
              height: 46px;
              max-height: 46px;
              background: $white;
              border: 1px solid darken($fade-grey, 3%);
              border-radius: 500px;

              img {
                display: flex;
                height: 22px;
                width: 22px;
              }
            }

            .meta-content {
              margin-left: 8px;
              font-family: $font;
              line-height: 1.3;

              h4 {
                font-family: $font-alt;
                font-weight: 600;
                font-size: 1rem;
                color: $dark-text;
              }

              p {
                display: flex;
                align-items: center;

                .fa-circle {
                  font-size: 5px;
                  margin: 0 10px;
                }

                .fa-star {
                  position: relative;
                  top: -1px;
                  font-size: 12px;
                  color: #fab82a;

                  + span {
                    color: $dark-text;
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  > .right {
    width: 30%;
    padding: 0 0 0 20px;

    .sticky-panel {
      position: fixed;
      height: calc(100% - 100px);
      transition: all 0.3s;
      width: 336px;

      &.is-stretched {
        height: calc(100% - 30px);
        top: 10px;
      }

      .icon-toolbar-widget {
        width: 100%;
      }

      .side-section {
        display: none;
        animation: fadeInLeft 0.5s;

        &.is-active {
          display: block;
        }
      }

      .cart-widget {
        height: calc(100% - 90px);

        .section-placeholder {
          height: calc(100% - 160px);

          img {
            max-width: 90px;
            margin: 0 auto 10px auto;
          }
        }

        .cart-items {
          height: calc(100% - 160px);
          border-bottom: 1px solid darken($fade-grey, 3%);
          padding-bottom: 40px;
          overflow-y: auto;

          .cart-item {
            align-items: center;

            .price {
              margin: 0;
              font-size: 0.9rem;
              font-weight: 500;
            }
          }
        }

        .cart-button {
          .total {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 10px 5px;

            span {
              font-family: $font;
              margin: 0;

              &:first-child {
                font-size: 1rem;
                font-weight: 500;
                color: $light-text;
                text-transform: uppercase;
              }

              &:nth-child(2) {
                color: $dark-text;
                font-weight: 600;
                font-size: 1.4rem;
              }
            }
          }
        }
      }
    }
  }
}

.is-dark {
  .food-delivery-dashboard {
    .left {
      .left-header {
        background: lighten($dark-sidebar, 2%) !important;

        .header-meta {
          h3 {
            color: $dark-dark-text;
          }

          p {
            color: $accent;
          }
        }
      }

      .left-body {
        .restaurants {
          .restaurants-toolbar {
            .left {
              h3 {
                color: $dark-dark-text;
              }
            }
          }

          .food-pills {
            .food-pills-inner {
              .food-pill {
                background: lighten($dark-sidebar, 2%) !important;
                border-color: lighten($dark-sidebar, 12%) !important;

                .food-pill-icon {
                  background: lighten($fade-grey, 3%);
                  border-color: lighten($fade-grey, 3%);
                }

                span {
                  color: $dark-dark-text;
                }
              }

              .slick-slide {
                &.slick-current {
                  background: $accent !important;
                  border-color: $accent !important;

                  .food-pill-icon {
                    border-color: $accent !important;
                  }

                  span {
                    color: $smoke-white;
                  }
                }
              }

              .slick-custom {
                &:hover {
                  border-color: lighten($dark-sidebar, 2%);
                  background: lighten($dark-sidebar, 2%);
                  box-shadow: $light-box-shadow;
                }
              }
            }
          }

          .restaurants-list {
            .restaurants-list-item {
              @include vuero-card--dark();

              background: none;
              border: none;

              .image-container {
                .timer {
                  background: $accent;
                  border-color: $accent;

                  span {
                    &:nth-child(2) {
                      color: lighten($accent, 18%);
                    }
                  }
                }
              }

              .meta-container {
                .meta-icon {
                  background: lighten($fade-grey, 3%);
                  border-color: lighten($fade-grey, 3%);
                }

                .meta-content {
                  h4 {
                    color: $dark-dark-text;
                  }

                  p {
                    .fa-star {
                      color: $accent;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }

    .right {
      .cart-widget {
        .cart-items {
          border-color: lighten($dark-sidebar, 12%) !important;
        }

        .cart-button {
          .total {
            span {
              &:first-child {
                color: $light-text;
              }

              &:nth-child(2) {
                color: $dark-dark-text;
              }
            }
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 767px) {
  .food-delivery-dashboard {
    flex-direction: column;

    .left,
    .right {
      width: 100%;
      padding: 0;
    }

    .left {
      .left-header {
        flex-direction: column;
        text-align: center;

        .header-image {
          img {
            left: 0;
          }
        }
      }

      .restaurants-list {
        .restaurants-list-item {
          .image-container {
            img {
              min-height: 220px !important;
              max-height: 220px !important;
            }
          }
        }
      }
    }

    .right {
      .sticky-panel {
        position: static;
        width: 100% !important;
      }
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  .food-delivery-dashboard {
    flex-direction: column;

    .left,
    .right {
      width: 100%;
      padding: 0;
    }

    .left {
      .restaurants-list {
        .columns {
          display: flex;

          .column {
            min-width: 50%;
          }
        }

        .restaurants-list-item {
          .image-container {
            img {
              min-height: 220px !important;
              max-height: 220px !important;
            }
          }
        }
      }
    }

    .right {
      .sticky-panel {
        position: static;
        width: 100% !important;
      }
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  .food-delivery-dashboard {
    .left {
      .left-body {
        .restaurants-list {
          .restaurants-list-item {
            .image-container {
              > img {
                min-height: 140px !important;
                max-height: 140px !important;
              }
            }
          }
        }
      }
    }
  }
}
</style>

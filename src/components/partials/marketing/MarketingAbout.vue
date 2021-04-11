<template>
  <div class="section has-bg-dots">
    <div class="container">
      <!--Title-->
      <div class="section-title has-text-centered py-6">
        <h2 class="title is-2">About Us</h2>
        <h4>Let us tell you the hole story.</h4>
      </div>

      <div class="video-section py-12">
        <div class="columns is-vcentered">
          <div class="column is-6 is-relative is-centered-portrait">
            <!--Video PLayer-->
            <V-Plyr
              ratio="square"
              source="/video/hands.mp4"
              poster="/video/poster-1c.jpg"
              reversed
            />
          </div>
          <div class="column is-6">
            <!--Content-->
            <div class="columns is-multiline b-columns-half-tablet-p">
              <div class="column is-6">
                <div class="py-2 medium:py-4">
                  <h4 class="title is-5 is-narrow">How we started</h4>
                  <p class="pt-2 max-w-3 text-medium">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    videbimus.
                  </p>
                </div>
              </div>
              <div class="column is-6">
                <div class="py-2 medium:py-4">
                  <h4 class="title is-5 is-narrow">Who we are</h4>
                  <p class="pt-2 max-w-3 text-medium">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    videbimus.
                  </p>
                </div>
              </div>
              <div class="column is-6">
                <div class="py-2 medium:py-4">
                  <h4 class="title is-5 is-narrow">What we do</h4>
                  <p class="pt-2 max-w-3 text-medium">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    videbimus.
                  </p>
                </div>
              </div>
              <div class="column is-6">
                <div class="py-2 medium:py-4">
                  <h4 class="title is-5 is-narrow">Our values</h4>
                  <p class="pt-2 max-w-3 text-medium">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    videbimus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

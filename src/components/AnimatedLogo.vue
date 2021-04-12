<script setup lang="ts">
import { ref, defineProps } from 'vue'
import { useRouter } from 'vue-router'

defineProps({
  light: {
    type: Boolean,
    default: false,
  },
})

const router = useRouter()
const isLoading = ref(false)

router.beforeEach(() => {
  isLoading.value = true
})
router.afterEach(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 200)
})
</script>

<template>
  <svg
    id="OBJECTS"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 160 160"
    style="enable-background: new 0 0 160 160"
    xml:space="preserve"
    :class="[isLoading && 'is-roll', light && 'is-light']"
  >
    <g class="is-roll">
      <g>
        <path
          class="right"
          d="M67.3,55.7L75.6,70l3.7,6.4l22.1,38.3l35.9-0.1L78.2,14.1L61.2,45L67.3,55.7z M130.1,114.5l-21.3,0.1"
        />
        <path
          class="left"
          d="M39.1,145.9l11.7-20.3l2.7-4.7l3.7-6.4l22.1-38.3L61.2,45L3.6,145.9H39.1z M64.8,51.5l2.5,4.2l8.3,14.2V70
			L64.8,51.5z"
        />
        <path
          class="bottom"
          d="M39,145.9h117.4l-19.1-31.4l-80.1,0.1L39,145.9z M53.4,121l-10.6,18.5l7.9-13.9L53.4,121z"
        />
      </g>
    </g>
  </svg>
</template>

<style lang="scss" scoped>
@import '../scss/abstracts/_variables.scss';
@import '../scss/layout/_sidebar.scss';

.right {
  fill: darken($primary, 7%);
}
.bottom {
  fill: $primary;
}
.left {
  fill: lighten($primary, 15%);
}

.is-roll {
  .right {
    animation: is-roll-right 8s ease infinite;
    animation-fill-mode: forwards;
    animation-delay: 4s;
  }
  .left {
    animation: is-roll-left 8s ease infinite;
    animation-fill-mode: forwards;
    animation-delay: 4s;
  }
  .bottom {
    animation: is-roll-bottom 8s ease infinite;
    animation-fill-mode: forwards;
    animation-delay: 4s;
  }
}

.is-light {
  .right {
    fill: #fff;
    animation: none;
  }
  .bottom {
    fill: #fffc;
    animation: none;
  }
  .left {
    fill: #fffa;
    animation: none;
  }
}

@keyframes is-roll-right {
  0% {
    fill: darken($primary, 7%);
  }
  33% {
    fill: #1ee8c0;
  }
  66% {
    fill: lighten($h-green, 15%);
  }
  100% {
    fill: darken($primary, 7%);
  }
}

@keyframes is-roll-bottom {
  0% {
    fill: $primary;
  }
  33% {
    fill: darken(#1ee8c0, 7%);
  }
  66% {
    fill: $h-green;
  }
  100% {
    fill: $primary;
  }
}

@keyframes is-roll-left {
  0% {
    fill: lighten($primary, 15%);
  }
  33% {
    fill: lighten(#1ee8c0, 15%);
  }
  66% {
    fill: darken($h-green, 7%);
  }
  100% {
    fill: lighten($primary, 15%);
  }
}
</style>

<script setup lang="ts">
import type { PropType } from 'vue'
import { computed } from 'vue'

export type CreditCardColor =
  | 'grey'
  | 'green'
  | 'lime'
  | 'orange'
  | 'purple'
  | 'red'
  | 'yellow'
  | 'lightblue'
  | 'cyan'

const props = defineProps({
  number: {
    type: String,
    default: '0123 4567 8910 1112',
  },
  name: {
    type: String,
    default: 'JOHN DOE',
  },
  expiry: {
    type: String,
    default: '01/23',
  },
  cvc: {
    type: String,
    default: '987',
  },
  color: {
    type: String as PropType<CreditCardColor>,
    default: 'grey',
    validator: (value: CreditCardColor) => {
      // The value must match one of these strings
      if (
        [
          undefined,
          'grey',
          'green',
          'lime',
          'orange',
          'purple',
          'red',
          'yellow',
          'lightblue',
          'cyan',
        ].indexOf(value) === -1
      ) {
        console.warn(
          `V-CreditCard: invalid "${value}" dark. Should be grey, green, lime, orange, purple, red, yellow, lightblue, cyan`
        )
        return false
      }

      return true
    },
  },
  flipped: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['flip'])

const nameUppercase = computed(() => props.name.toUpperCase())
</script>

<template>
  <div class="card-container">
    <div
      :class="[flipped && 'flipped']"
      class="creditcard"
      @click="emit('flip')"
    >
      <div class="front">
        <slot></slot>

        <svg
          id="cardfront"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 750 471"
          style="enable-background: new 0 0 750 471"
          xml:space="preserve"
        >
          <g id="Front2">
            <g id="CardBackground">
              <g id="Page-1_1_">
                <g id="amex_1_">
                  <path
                    id="Rectangle-1_1_"
                    class="lightcolor"
                    :class="color"
                    d="M40,0h670c22.1,0,40,17.9,40,40v391c0,22.1-17.9,40-40,40H40c-22.1,0-40-17.9-40-40V40
                        C0,17.9,17.9,0,40,0z"
                  />
                </g>
              </g>
              <path
                class="darkcolor"
                :class="`${color}dark`"
                d="M750,431V193.2c-217.6-57.5-556.4-13.5-750,24.9V431c0,22.1,17.9,40,40,40h670C732.1,471,750,453.1,750,431z"
              />
            </g>
            <text
              id="svgnumber"
              transform="matrix(1 0 0 1 60.106 295.0121)"
              class="st2 st3 st4"
            >
              {{ number || '1234 1234 1234 1234' }}
            </text>
            <text
              id="svgname"
              transform="matrix(1 0 0 1 54.1064 428.1723)"
              class="st2 st5 st6"
            >
              {{ nameUppercase || 'JOHN DOE' }}
            </text>
            <text
              transform="matrix(1 0 0 1 54.1074 389.8793)"
              class="st7 st5 st8"
            >
              cardholder name
            </text>
            <text
              transform="matrix(1 0 0 1 479.7754 388.8793)"
              class="st7 st5 st8"
            >
              expiration
            </text>
            <text transform="matrix(1 0 0 1 65.1054 241.5)" class="st7 st5 st8">
              card number
            </text>
            <g>
              <text
                id="svgexpire"
                transform="matrix(1 0 0 1 574.4219 433.8095)"
                class="st2 st5 st9"
              >
                {{ expiry || '01/30' }}
              </text>
              <text
                transform="matrix(1 0 0 1 479.3848 417.0097)"
                class="st2 st10 st11"
              >
                VALID
              </text>
              <text
                transform="matrix(1 0 0 1 479.3848 435.6762)"
                class="st2 st10 st11"
              >
                THRU
              </text>
              <polygon
                class="st2"
                points="554.5,421 540.4,414.2 540.4,427.9 		"
              />
            </g>
            <g id="cchip">
              <g>
                <path
                  class="st2"
                  d="M168.1,143.6H82.9c-10.2,0-18.5-8.3-18.5-18.5V74.9c0-10.2,8.3-18.5,18.5-18.5h85.3
                    c10.2,0,18.5,8.3,18.5,18.5v50.2C186.6,135.3,178.3,143.6,168.1,143.6z"
                />
              </g>
              <g>
                <g>
                  <rect x="82" y="70" class="st12" width="1.5" height="60" />
                </g>
                <g>
                  <rect x="167.4" y="70" class="st12" width="1.5" height="60" />
                </g>
                <g>
                  <path
                    class="st12"
                    d="M125.5,130.8c-10.2,0-18.5-8.3-18.5-18.5c0-4.6,1.7-8.9,4.7-12.3c-3-3.4-4.7-7.7-4.7-12.3
                        c0-10.2,8.3-18.5,18.5-18.5s18.5,8.3,18.5,18.5c0,4.6-1.7,8.9-4.7,12.3c3,3.4,4.7,7.7,4.7,12.3
                        C143.9,122.5,135.7,130.8,125.5,130.8z M125.5,70.8c-9.3,0-16.9,7.6-16.9,16.9c0,4.4,1.7,8.6,4.8,11.8l0.5,0.5l-0.5,0.5
                        c-3.1,3.2-4.8,7.4-4.8,11.8c0,9.3,7.6,16.9,16.9,16.9s16.9-7.6,16.9-16.9c0-4.4-1.7-8.6-4.8-11.8l-0.5-0.5l0.5-0.5
                        c3.1-3.2,4.8-7.4,4.8-11.8C142.4,78.4,134.8,70.8,125.5,70.8z"
                  />
                </g>
                <g>
                  <rect
                    x="82.8"
                    y="82.1"
                    class="st12"
                    width="25.8"
                    height="1.5"
                  />
                </g>
                <g>
                  <rect
                    x="82.8"
                    y="117.9"
                    class="st12"
                    width="26.1"
                    height="1.5"
                  />
                </g>
                <g>
                  <rect
                    x="142.4"
                    y="82.1"
                    class="st12"
                    width="25.8"
                    height="1.5"
                  />
                </g>
                <g>
                  <rect
                    x="142"
                    y="117.9"
                    class="st12"
                    width="26.2"
                    height="1.5"
                  />
                </g>
              </g>
            </g>
          </g>
          <g id="Back"></g>
        </svg>
      </div>
      <div class="back">
        <svg
          id="cardback"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 750 471"
          style="enable-background: new 0 0 750 471"
          xml:space="preserve"
        >
          <g id="Front">
            <line class="st0" x1="35.3" y1="10.4" x2="36.7" y2="11" />
          </g>
          <g id="Back2">
            <g id="Page-1_2_">
              <g id="amex_2_">
                <path
                  id="Rectangle-1_2_"
                  class="darkcolor"
                  :class="`${color}dark`"
                  d="M40,0h670c22.1,0,40,17.9,40,40v391c0,22.1-17.9,40-40,40H40c-22.1,0-40-17.9-40-40V40
                    C0,17.9,17.9,0,40,0z"
                />
              </g>
            </g>
            <rect y="61.6" class="st2" width="750" height="78" />
            <g>
              <path
                class="st3"
                d="M701.1,249.1H48.9c-3.3,0-6-2.7-6-6v-52.5c0-3.3,2.7-6,6-6h652.1c3.3,0,6,2.7,6,6v52.5
                C707.1,246.4,704.4,249.1,701.1,249.1z"
              />
              <rect
                x="42.9"
                y="198.6"
                class="st4"
                width="664.1"
                height="10.5"
              />
              <rect
                x="42.9"
                y="224.5"
                class="st4"
                width="664.1"
                height="10.5"
              />
              <path
                class="st5"
                d="M701.1,184.6H618h-8h-10v64.5h10h8h83.1c3.3,0,6-2.7,6-6v-52.5C707.1,187.3,704.4,184.6,701.1,184.6z"
              />
            </g>
            <text
              id="svgsecurity"
              transform="matrix(1 0 0 1 621.999 227.2734)"
              class="st6 st7"
            >
              {{ cvc || '123' }}
            </text>
            <g class="st8">
              <text
                transform="matrix(1 0 0 1 518.083 280.0879)"
                class="st9 st6 st10"
              >
                security code
              </text>
            </g>
            <rect x="58.1" y="378.6" class="st11" width="375.5" height="13.5" />
            <rect x="58.1" y="405.6" class="st11" width="421.7" height="13.5" />
            <text
              id="svgnameback"
              transform="matrix(1 0 0 1 59.5073 228.6099)"
              class="st12 st13"
            >
              {{ name || 'John Doe' }}
            </text>
          </g>
        </svg>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../../../scss/abstracts/_all.scss';

.card-container {
  position: relative;
  top: -5px;
  width: 100%;
  height: 170px;
  padding: 20px 0;
  perspective: 1000px;

  &.preload * {
    transition: none !important;
  }

  .creditcard {
    width: 100%;
    max-width: 260px;
    transform-style: preserve-3d;
    transition: transform 0.6s;
    margin: 0 auto;
    cursor: pointer;

    &.flipped {
      -webkit-transform: rotateY(180deg);
      transform: rotateY(180deg);
    }

    .front,
    .back {
      position: absolute;
      width: 100%;
      max-width: 260px;
      backface-visibility: hidden;
      -webkit-font-smoothing: antialiased;
      color: #47525d;
    }

    .back {
      transform: rotateY(180deg);
    }

    svg#cardfront,
    svg#cardback {
      width: 100%;
      box-shadow: $light-box-shadow;
      border-radius: 18px;
    }

    #cardfront {
      .st2 {
        fill: #fff;
      }

      .st3 {
        font-family: 'Source Code Pro', monospace;
        font-weight: 600;
      }

      .st4 {
        font-size: 54.7817px;
      }

      .st5 {
        font-family: 'Source Code Pro', monospace;
        font-weight: 400;
      }

      .st6 {
        font-size: 33.1112px;
      }

      .st7 {
        opacity: 0.6;
        fill: #fff;
      }

      .st8 {
        font-size: 24px;
      }

      .st9 {
        font-size: 36.5498px;
      }

      .st10 {
        font-family: 'Source Code Pro', monospace;
        font-weight: 300;
      }

      .st11 {
        font-size: 16.1716px;
      }

      .st12 {
        fill: #4c4c4c;
      }
    }

    #cardback {
      .st0 {
        fill: none;
        color: #0f0f0f;
        stroke-miterlimit: 10;
      }

      .st2 {
        fill: #111;
      }

      .st3 {
        fill: #f2f2f2;
      }

      .st4 {
        fill: #d8d2db;
      }

      .st5 {
        fill: #c4c4c4;
      }

      .st6 {
        font-family: 'Source Code Pro', monospace;
        font-weight: 400;
      }

      .st7 {
        font-size: 27px;
      }

      .st8 {
        opacity: 0.6;
      }

      .st9 {
        fill: #fff;
      }

      .st10 {
        font-size: 24px;
      }

      .st11 {
        fill: #eaeaea;
      }

      .st12 {
        font-family: 'Rock Salt', cursive;
      }

      .st13 {
        font-size: 37.769px;
      }
    }

    #svgname {
      text-transform: uppercase;
    }

    #ccsingle {
      position: absolute;
      right: 15px;
      top: 20px;

      svg {
        width: 100px;
        max-height: 60px;
      }
    }

    .lightcolor,
    .darkcolor {
      transition: fill 0.5s;
    }

    .lightblue {
      fill: #03a9f4;
    }

    .lightbluedark {
      fill: #0288d1;
    }

    .red {
      fill: #ef5350;
    }

    .reddark {
      fill: #d32f2f;
    }

    .purple {
      fill: #ab47bc;
    }

    .purpledark {
      fill: #7b1fa2;
    }

    .cyan {
      fill: #26c6da;
    }

    .cyandark {
      fill: #0097a7;
    }

    .green {
      fill: #66bb6a;
    }

    .greendark {
      fill: #388e3c;
    }

    .lime {
      fill: #d4e157;
    }

    .limedark {
      fill: #afb42b;
    }

    .yellow {
      fill: #ffeb3b;
    }

    .yellowdark {
      fill: #f9a825;
    }

    .orange {
      fill: #ff9800;
    }

    .orangedark {
      fill: #ef6c00;
    }

    .grey {
      fill: #bdbdbd;
    }

    .greydark {
      fill: #616161;
    }
  }
}
</style>

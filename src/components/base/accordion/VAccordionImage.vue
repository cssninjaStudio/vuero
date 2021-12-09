<script setup lang="ts">
export interface VAccordionImageItem {
  title: string
  content: string
  image: string
}
export interface VAccordionImageEmits {
  (e: 'select', key: string | number): void
}
export interface VAccordionImageProps {
  items: VAccordionImageItem[]
}

const emit = defineEmits<VAccordionImageEmits>()
const props = withDefaults(defineProps<VAccordionImageProps>(), {
  items: () => [],
})

const toggle = (key: number) => {
  emit('select', key)
}
</script>

<template>
  <div class="image-accordion">
    <ul>
      <li
        v-for="(item, key) in props.items"
        :key="key"
        class="has-background-image"
        tabindex="0"
        :style="{ backgroundImage: `url(${item.image})` }"
      >
        <slot name="accordion-item" :item="item" :index="key" :toggle="toggle">
          <div>
            <a tabindex="0" @keydown.space.prevent="toggle(key)" @click="toggle(key)">
              <h2>
                <slot
                  name="accordion-item-summary"
                  :item="item"
                  :index="key"
                  :toggle="toggle"
                >
                  {{ item.title }}
                </slot>
              </h2>
              <p>
                <slot
                  name="accordion-item-content"
                  :item="item"
                  :index="key"
                  :toggle="toggle"
                >
                  {{ item.content }}
                </slot>
              </p>
            </a>
          </div>
        </slot>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
$a-height: 250px;
$text-offset: $a-height - 90;

.image-accordion {
  width: 100%;
  height: $a-height;
  overflow: hidden;
  margin: 50px auto;

  ul {
    width: 100%;
    display: table;
    table-layout: fixed;
    margin: 0;
    padding: 0;

    li {
      display: table-cell;
      vertical-align: bottom;
      position: relative;
      width: 16.666%;
      height: $a-height;
      background-repeat: no-repeat;
      background-position: center center;
      transition: all 500ms ease;

      div {
        display: block;
        overflow: hidden;
        width: 100%;

        a {
          display: block;
          height: $a-height;
          width: 100%;
          position: relative;
          z-index: 3;
          vertical-align: bottom;
          padding: 15px 20px;
          box-sizing: border-box;
          color: var(--white);
          text-decoration: none;
          font-family: 'Open Sans', sans-serif;
          transition: all 200ms ease;

          * {
            opacity: 0;
            margin: 0;
            width: 100%;
            text-overflow: ellipsis;
            position: relative;
            z-index: 5;
            white-space: nowrap;
            overflow: hidden;
            transform: translateX(-20px);
            transition: all 400ms ease;
          }

          h2 {
            font-family: var(--font-alt);
            font-weight: 300;
            text-overflow: clip;
            font-size: 1.4rem;
            text-transform: uppercase;
            margin-bottom: 0;
            top: $text-offset;
          }

          p {
            top: $text-offset;
            font-size: 13.5px;
            color: var(--white);
          }
        }
      }
    }

    &:hover li,
    &:focus-within li {
      width: 8%;
    }

    &:hover li:hover,
    li:focus,
    &:focus-within li:focus {
      width: 60%;

      a {
        background: rgb(0 0 0 / 40%);

        * {
          opacity: 1;
          transform: translateX(0);
          transform: translateX(0);
        }
      }
    }

    &:hover li {
      width: 8% !important;

      a * {
        opacity: 0 !important;
      }
    }

    &:hover li:hover {
      width: 60% !important;

      a {
        background: rgb(0 0 0 / 40%);

        * {
          opacity: 1 !important;
          transform: translateX(0);
          transform: translateX(0);
        }
      }
    }
  }
}

@media screen and (max-width: 600px) {
  .image-accordion {
    height: auto;

    ul,
    ul:hover {
      li,
      li:hover {
        position: relative;
        display: table;
        table-layout: fixed;
        width: 100% !important;
        transition: none;
      }
    }
  }
}
</style>

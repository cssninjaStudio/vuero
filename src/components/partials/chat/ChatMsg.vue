<script setup lang="ts">
import type { Message } from '/@src/utils/api/chat/messages'

const props = defineProps<{
  message: Message
}>()
</script>

<template>
  <li
    :class="[
      props.message.type === 'system' && 'divider-container',
      props.message.type !== 'system' && props.message.sender,
    ]"
  >
    <!-- System messages -->
    <template v-if="props.message.type === 'system'">
      <li class="divider-container">
        <div class="divider">
          <span>{{ props.message.content.text }}</span>
        </div>
      </li>
    </template>

    <!-- Text messages -->
    <template v-else-if="props.message.type === 'msg'">
      <div class="avatar">
        <img
          v-if="props.message.avatar"
          :src="props.message.avatar"
          draggable="false"
          alt=""
        />
      </div>
      <div class="msg">
        <div class="msg-inner">
          <p>{{ props.message.content.text }}</p>
        </div>

        <time>
          {{ props.message.content.time }}
        </time>
      </div>
    </template>

    <!-- Image messages -->
    <template v-else-if="props.message.type === 'image'">
      <div class="avatar is-online">
        <img
          v-if="props.message.avatar"
          :src="props.message.avatar"
          draggable="false"
          alt=""
        />
      </div>
      <div class="msg is-image">
        <div class="image-container">
          <VPhotosSwipe
            v-if="props.message.content.image_url"
            :items="[
              {
                src: props.message.content.image_url,
                thumbnail: props.message.content.image_url,
                w: 600,
                h: 400,
                alt: 'optional alt attribute for thumbnail image',
              },
            ]"
            thumbnail-radius="full"
          />
          <div class="image-overlay"></div>
          <div class="image-actions">
            <div class="actions-inner">
              <div class="action download">
                <span class="iconify" data-icon="feather:download"> </span>
              </div>
              <a
                :href="props.message.content.image_url"
                class="action messaging-popup"
                aria-label="Maximize"
              >
                <span class="iconify" data-icon="feather:maximize"> </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </template>

    <!-- Link image messages -->
    <template v-else-if="props.message.type === 'imagelink'">
      <div class="avatar">
        <img
          v-if="props.message.avatar"
          :src="props.message.avatar"
          draggable="false"
          alt=""
        />
      </div>
      <div class="msg is-link-image">
        <figure class="image">
          <img :src="props.message.content.link_image" alt="" />
          <div class="link-badge">
            <img :src="props.message.content.link_badge" alt="" />
          </div>
        </figure>
        <div class="link-body">
          <span class="link-title">{{ props.message.content.text }}</span>
          <small>{{ props.message.content.subtext }}</small>
        </div>
      </div>
    </template>

    <!-- Link text messages -->
    <template v-else-if="props.message.type === 'link'">
      <div class="avatar is-online">
        <img
          v-if="props.message.avatar"
          :src="props.message.avatar"
          draggable="false"
          alt=""
        />
      </div>
      <div class="msg is-link">
        <VIconWrap icon="feather:link" />
        <p class="link-meta">
          <span>{{ props.message.content.text }}</span>
          <a href="#">{{ props.message.content.subtext }}</a>
        </p>
      </div>
    </template>
  </li>
</template>

<style lang="scss">
.msg {
  min-width: 50px;
  max-width: 40%;

  &.is-image {
    .image-container {
      position: relative;
      border-radius: 3px;

      &:hover,
      &:focus {
        .image-overlay {
          opacity: 0.45;
          pointer-events: none;
        }

        .image-actions {
          opacity: 1;

          .download {
            pointer-events: all;
          }
        }
      }

      figure {
        position: relative;
        display: block;
        border-radius: 3px;
        border: 4px solid var(--white);
        z-index: 1;
      }

      .image-overlay {
        position: absolute;
        top: 0;
        inset-inline-start: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        background: var(--primary);
        border: 4px solid var(--white);
        border-radius: 3px;
        transition: all 0.3s; // transition-all test
        z-index: 2;
      }

      .image-actions {
        position: absolute;
        top: 0;
        inset-inline-start: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        pointer-events: none;
        transition: all 0.3s; // transition-all test
        z-index: 3;

        .actions-inner {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;

          .action {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 40px;
            width: 40px;
            border-radius: var(--radius-rounded);
            background: var(--white);
            margin: 0 6px;
            cursor: pointer;
            transition: all 0.3s; // transition-all test

            &:hover {
              background: var(--success);

              svg {
                color: var(--smoke-white);
              }
            }

            svg {
              height: 18px;
              width: 18px;
              color: var(--success);
              transition: color 0.3s, background-color 0.3s, border-color 0.3s,
                height 0.3s, width 0.3s;
            }
          }
        }
      }
    }
  }

  &.is-link-image {
    background: #e6e5ed;
    padding: 0;
    max-width: 320px !important;

    .image {
      position: relative;

      img {
        max-width: 320px;
        border-radius: var(--radius-large) 6px 0 0;
      }

      .link-badge {
        height: 40px;
        width: 40px;
        position: absolute;
        inset-inline-end: 15px;
        bottom: 15px;

        img {
          position: relative;
          display: block;
          height: 40px;
          width: 40px;
          border-radius: var(--radius-rounded);
        }
      }
    }

    .link-body {
      padding: 10px 15px;

      .link-title {
        display: block;
        font-weight: 500;
        color: var(--dark-text);
      }

      small {
        display: block;
        width: 100%;
        font-size: 0.75rem;
        color: var(--muted-grey);
        padding-top: 5px;
      }
    }

    &::after {
      display: none;
    }
  }

  &.is-link {
    background: #e6e5ed;
    padding: 10px 20px;
    max-width: 320px;
    display: block;
    position: relative;

    .icon-wrapper {
      position: absolute;
      top: calc(50% - 18px);
      inset-inline-start: -18px;
      width: 36px;
      height: 36px;
      min-width: 36px !important;
      max-height: 36px;
      border-radius: var(--radius-rounded);
      border: 2px solid var(--white);
      background: var(--primary);
      display: flex;
      justify-content: center;
      align-items: center;

      svg {
        width: 16px;
        height: 16px;
        color: var(--white);
      }
    }

    .link-meta {
      margin-inline-start: 10px;

      span {
        color: var(--dark-text);
        font-weight: 500;
        font-size: 0.9rem;
      }

      a {
        display: block;
        font-size: 0.9rem;
        font-weight: 500;
        color: var(--primary);
      }
    }

    &::after {
      display: none;
    }
  }

  p {
    font-size: 0.8rem;
    margin: 0 0 0.2rem;
  }

  img {
    position: relative;
    display: block;
    width: 450px;
    border-radius: 5px;
    box-shadow: 0 0 3px var(--light-grey);
    transition: all 0.4s cubic-bezier(0.565, -0.26, 0.255, 1.41);
    cursor: default;
    -webkit-touch-callout: none;
    user-select: none;
  }
}

// Message queries
@media screen and (width <= 800px) {
  .msg img {
    width: 300px;
  }
}

@media screen and (width <= 550px) {
  .msg img {
    width: 200px;
  }
}
</style>

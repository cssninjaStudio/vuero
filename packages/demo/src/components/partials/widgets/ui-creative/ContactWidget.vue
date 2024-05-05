<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    picture?: string
    username?: string
    email?: string
    company?: string
    position?: string
    location?: string
    phone?: string
    straight?: boolean
    reversed?: boolean
    squared?: boolean
  }>(),
  {
    picture: 'https://via.placeholder.com/150x150',
    username: 'John D.',
    email: 'john@gmail.com',
    company: 'Acme Inc.',
    position: 'Developer',
    location: 'New York, NY',
    phone: '+1 555 5554',
  },
)
</script>

<template>
  <div
    class="widget contact-widget"
    :class="[props.straight && 'is-straight', props.reversed && 'is-reversed']"
  >
    <div class="widget-content">
      <div class="left">
        <VAvatar
          size="medium"
          :picture="props.picture"
          :squared="props.squared"
        />
      </div>
      <div class="right">
        <h3>{{ props.username }}</h3>
        <div class="company">
          <span>{{ props.company }}</span>
          <p>{{ props.position }}</p>
        </div>
        <div class="contact-info">
          <span>
            <VIcon
              icon="lucide:map-pin"
            />
            <span>{{ props.location }}</span>
          </span>
          <span>
            <VIcon
              icon="lucide:phone"
            />
            <span>{{ props.phone }}</span>
          </span>
        </div>
      </div>
    </div>

    <p class="email">
      {{ props.email }}
    </p>
  </div>
</template>

<style lang="scss">
@import '/@src/scss/abstracts/all';

.contact-widget {
  @include vuero-l-card;

  &.is-straight {
    @include vuero-s-card;
  }

  &.is-reversed {
    .widget-content {
      flex-direction: row-reverse;
    }
  }

  .widget-content {
    display: flex;
    border-bottom: 1px solid color-mix(in oklab, var(--fade-grey), black 3%);
    margin-bottom: 16px;
    padding-bottom: 16px;

    .left {
      text-align: center;
      width: 40%;

      .v-avatar {
        display: block;
        margin: 0 auto;

        .avatar {
          margin: 0;
        }
      }
    }

    .right {
      width: 60%;
      font-family: var(--font);

      > h3 {
        font-family: var(--font-alt);
        color: var(--dark-text);
        font-weight: 600;
        margin-bottom: 4px;
      }

      .company {
        font-size: 0.9rem;
        line-height: 1.2;
        margin-bottom: 4px;

        span {
          color: var(--primary);
        }
      }

      .contact-info {
        font-size: 0.85rem;

        > span {
          display: flex;
          align-items: center;

          .iconify {
            height: 14px;
            width: 14px;
            margin-inline-end: 4px;
            stroke-width: 1.4px;
            color: var(--light-text);
          }
        }
      }
    }
  }

  .email {
    text-align: center;
    font-size: 0.9rem;
  }
}

.is-dark {
  .contact-widget {
    @include vuero-card--dark;

    .widget-content {
      border-color: color-mix(in oklab, var(--dark-sidebar), white 12%);

      .right {
        h3 {
          color: var(--dark-dark-text);
        }

        .company {
          span:first-child {
            color: var(--primary);
          }
        }

        .contact-info {
          span span {
            color: var(--dark-dark-text);
          }
        }
      }
    }
  }
}
</style>

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
  }
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
            <i
              aria-hidden="true"
              class="iconify"
              data-icon="feather:map-pin"
            ></i>
            <span>{{ props.location }}</span>
          </span>
          <span>
            <i aria-hidden="true" class="iconify" data-icon="feather:phone"></i>
            <span>{{ props.phone }}</span>
          </span>
        </div>
      </div>
    </div>

    <p class="email">{{ props.email }}</p>
  </div>
</template>

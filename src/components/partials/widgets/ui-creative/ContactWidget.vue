<script setup lang="ts">
const props = defineProps({
  picture: {
    type: String,
    required: true,
    default: 'https://via.placeholder.com/150x150',
  },
  username: {
    type: String,
    required: true,
    default: 'John D.',
  },
  email: {
    type: String,
    required: true,
    default: 'john@gmail.com',
  },
  company: {
    type: String,
    required: true,
    default: 'Acme Inc.',
  },
  position: {
    type: String,
    required: true,
    default: 'Developer',
  },
  location: {
    type: String,
    required: true,
    default: 'New York, NY',
  },
  phone: {
    type: String,
    required: true,
    default: '+1 555 5554',
  },
  straight: {
    type: Boolean,
    default: false,
  },
  reversed: {
    type: Boolean,
    default: false,
  },
  squared: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div
    class="widget contact-widget"
    :class="[props.straight && 'is-straight', props.reversed && 'is-reversed']"
  >
    <div class="widget-content">
      <div class="left">
        <V-Avatar
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

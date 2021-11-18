<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    title?: string
    user?: string
    picture?: string
    time?: string
  }>(),
  {
    title: 'Design Project',
    user: 'Alice C.',
    picture: '/demo/avatars/7.jpg',
    time: '28 minutes ago',
  }
)
</script>

<template>
  <div class="widget-content">
    <div class="sender-block">
      <div class="sender-block-inner">
        <VAvatar :picture="props.picture" />
        <div class="meta">
          <span>{{ props.user }} just sent you an inbox message.</span>
        </div>
      </div>
      <div class="exerpt">
        <h5>
          <i aria-hidden="true" class="fas fa-circle"></i>
          <span>{{ props.title }}</span>
        </h5>
        <p>Where are we in terms of design? We need to review the new screens.</p>
        <small>{{ props.time }}</small>
      </div>
    </div>
  </div>
</template>

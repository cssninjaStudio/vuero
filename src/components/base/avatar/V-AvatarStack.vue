<script setup lang="ts">
export type AvatarStackSize = 'small' | 'medium' | 'large' | 'big' | 'xl'
export type AvatarItem = {
  picture?: string
  initials?: string
  color?: string
}

const props = withDefaults(
  defineProps<{
    size?: AvatarStackSize
    avatars?: AvatarItem[]
  }>(),
  {
    limit: 5,
    size: undefined,
    avatars: () => [],
  }
)
</script>

<template>
  <div class="avatar-stack">
    <slot>
      <V-Avatar
        v-for="(avatar, index) in avatars.slice(0, limit)"
        :key="index"
        :size="size"
        :picture="avatar.picture"
        :initials="avatar.initials"
        :color="avatar.color"
      />
      <div
        v-if="avatars.length > limit"
        class="v-avatar"
        :class="[size && 'is-' + size]"
      >
        <span class="avatar is-more">
          <span class="inner">
            <span>+{{ avatars.length - limit }}</span>
          </span>
        </span>
      </div>
    </slot>
  </div>
</template>

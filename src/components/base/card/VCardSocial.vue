<script setup lang="ts">
import { computed } from 'vue'

export type VCardSocialNetwork =
  | 'facebook'
  | 'twitter'
  | 'linkedin'
  | 'tumblr'
  | 'github'
  | 'dribbble'
  | 'google-plus'
  | 'youtube'
  | 'reddit'
  | 'invision'
  | 'amazon'
  | 'instagram'

export interface VCardSocialEmits {
  (e: 'iconClick'): void
  (e: 'share'): void
  (e: 'like'): void
  (e: 'hashtagClick', tag: string): void
}
export interface VCardSocialProps {
  title: string
  network: VCardSocialNetwork
  hashtags?: string[]
  avatar?: string
  username?: string
  shareLabel?: string
  likeLabel?: string
}

const emit = defineEmits<VCardSocialEmits>()
const props = withDefaults(defineProps<VCardSocialProps>(), {
  hashtags: () => [],
  avatar: undefined,
  username: undefined,
  shareLabel: 'Share',
  likeLabel: 'Like',
})

const icon = computed(() => {
  switch (props.network) {
    case 'facebook':
      return 'fa-brands:facebook-f'
    case 'twitter':
      return 'fa-brands:twitter'
    case 'linkedin':
      return 'fa-brands:linkedin-in'
    case 'tumblr':
      return 'fa-brands:tumblr'
    case 'github':
      return 'fa-brands:github-alt'
    case 'dribbble':
      return 'fa-brands:dribbble'
    case 'google-plus':
      return 'fa-brands:google-plus-g'
    case 'youtube':
      return 'fa-brands:youtube'
    case 'reddit':
      return 'fa-brands:reddit-alien'
    case 'invision':
      return 'fa-brands:invision'
    case 'amazon':
      return 'fa-brands:amazon'
    case 'instagram':
      return 'fa-brands:instagram'
  }

  return ''
})
</script>

<template>
  <div class="card v-card">
    <header class="card-header">
      <div class="card-header-title">{{ props.title }}</div>
      <a
        v-if="icon"
        class="card-header-icon"
        :class="[props.network && `text-${props.network}`]"
        :aria-label="`View on ${props.network}`"
        tabindex="0"
        @keydown.space.prevent="emit('iconClick')"
        @click="emit('iconClick')"
      >
        <VIcon :icon="icon" />
      </a>
    </header>
    <div class="card-content">
      <VBlock :title="props.username" class="pb-3">
        <template #icon>
          <VAvatar v-if="props.avatar" size="medium" :picture="props.avatar" squared />
        </template>
        <slot></slot>
        <span v-if="props.hashtags.length">
          <a
            v-for="(hashtag, index) in props.hashtags"
            :key="index"
            class="px-1"
            :class="[network && `text-${network}`]"
            tabindex="0"
            @keydown.space.prevent="emit('hashtagClick', hashtag)"
            @click="emit('hashtagClick', hashtag)"
          >
            {{ hashtag }}
          </a>
        </span>
      </VBlock>
    </div>

    <footer class="card-footer">
      <a
        v-if="props.shareLabel"
        :class="[network && `hover-bg-${network}`]"
        class="card-footer-item"
        tabindex="0"
        @keydown.space.prevent="emit('share')"
        @click="emit('share')"
      >
        {{ props.shareLabel }}
      </a>
      <a
        v-if="props.likeLabel"
        :class="[network && `hover-text-${network}`]"
        class="card-footer-item"
        tabindex="0"
        @keydown.space.prevent="emit('like')"
        @click="emit('like')"
      >
        {{ props.likeLabel }}
      </a>
    </footer>
  </div>
</template>

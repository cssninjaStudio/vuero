<script setup lang="ts">
import type { PropType } from 'vue'
import { defineProps, computed, defineEmit } from 'vue'

type SocialNetworkType =
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

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  network: {
    type: String as PropType<SocialNetworkType>,
    required: true,
  },
  avatar: {
    type: String,
    default: undefined,
  },
  username: {
    type: String,
    default: undefined,
  },
  shareLabel: {
    type: String,
    default: 'Share',
  },
  likeLabel: {
    type: String,
    default: 'Like',
  },
  hashtags: {
    type: Array as PropType<string[]>,
    default: () => [],
  },
})

const emit = defineEmit(['iconClick', 'hashtagClick', 'share', 'like'])
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
        @click="emit('iconClick')"
      >
        <V-Icon :icon="icon" />
      </a>
    </header>
    <div class="card-content">
      <V-Block :title="props.username" class="pb-3">
        <template #icon>
          <V-Avatar
            v-if="props.avatar"
            size="medium"
            :picture="props.avatar"
            squared
          />
        </template>
        <slot></slot>
        <span v-if="props.hashtags.length">
          <a
            v-for="(hashtag, index) in props.hashtags"
            :key="index"
            class="px-1"
            :class="[network && `text-${network}`]"
            @click="emit('hashtagClick', hashtag)"
          >
            {{ hashtag }}
          </a>
        </span>
      </V-Block>
    </div>

    <footer class="card-footer">
      <a
        v-if="props.shareLabel"
        :class="[network && `hover-bg-${network}`]"
        class="card-footer-item"
        @click="emit('share')"
      >
        {{ props.shareLabel }}
      </a>
      <a
        v-if="props.likeLabel"
        :class="[network && `hover-text-${network}`]"
        class="card-footer-item"
        @click="emit('like')"
      >
        {{ props.likeLabel }}
      </a>
    </footer>
  </div>
</template>

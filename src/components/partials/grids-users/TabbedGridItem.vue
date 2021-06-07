<script setup lang="ts">
import type { PropType } from 'vue'
import { defineProps } from 'vue'

const props = defineProps({
  activeTab: {
    type: String as PropType<'posts' | 'projects' | 'tasks'>,
    default: 'posts',
  },
  user: {
    type: Object,
  },
})
</script>

<template>
  <div class="grid-item">
    <V-Avatar :picture="user.avatar" :badge="user.badge" size="big" />
    <h3 class="dark-inverted">{{ user.fullName }}</h3>
    <p>{{ user.position }}</p>
    <div class="icon-tabs-wrapper">
      <div class="icon-tabs">
        <div class="icon-tabs-inner">
          <a
            data-target-section="subsection-1"
            class="tab-item"
            :class="[activeTab === 'posts' && 'is-active']"
            @click="activeTab = 'posts'"
          >
            <i
              aria-hidden="true"
              class="iconify"
              data-icon="feather:activity"
            ></i>
          </a>
          <a
            data-target-section="subsection-2"
            class="tab-item"
            :class="[activeTab === 'projects' && 'is-active']"
            @click="activeTab = 'projects'"
          >
            <i
              aria-hidden="true"
              class="iconify"
              data-icon="feather:briefcase"
            ></i>
          </a>
          <a
            data-target-section="subsection-3"
            class="tab-item"
            :class="[activeTab === 'tasks' && 'is-active']"
            @click="activeTab = 'tasks'"
          >
            <i
              aria-hidden="true"
              class="iconify"
              data-icon="feather:check-circle"
            ></i>
          </a>
          <div class="icon-tabs-naver"></div>
        </div>
      </div>

      <div
        class="icon-tabs-content subsection-1"
        :class="[activeTab === 'posts' && 'is-active']"
      >
        <div class="chart-block">
          <div class="circle-chart-wrapper">
            <CircleChart :value="user.posts.progress" :size="54" />
          </div>
          <div class="stats">
            <span class="dark-inverted">{{ user.posts.count }}</span>
            <span>Posts</span>
          </div>
        </div>
      </div>

      <div
        class="icon-tabs-content subsection-2"
        :class="[activeTab === 'projects' && 'is-active']"
      >
        <div class="chart-block">
          <div class="circle-chart-wrapper is-info">
            <CircleChart :value="user.projects.progress" :size="54" />
          </div>
          <div class="stats">
            <span class="dark-inverted">{{ user.projects.count }}</span>
            <span>Projects</span>
          </div>
        </div>
      </div>

      <div
        class="icon-tabs-content subsection-3"
        :class="[activeTab === 'tasks' && 'is-active']"
      >
        <div class="chart-block">
          <div class="circle-chart-wrapper is-warning">
            <CircleChart :value="user.tasks.progress" :size="54" />
          </div>
          <div class="stats">
            <span class="dark-inverted">{{ user.tasks.count }}</span>
            <span>Tasks</span>
          </div>
        </div>
      </div>
    </div>
    <div class="buttons">
      <button class="button v-button is-dark-outlined">
        <span class="icon">
          <i aria-hidden="true" class="iconify" data-icon="feather:check"></i>
        </span>
        <span>Hire</span>
      </button>
      <button class="button v-button is-dark-outlined">
        <span class="icon">
          <i
            aria-hidden="true"
            class="iconify"
            data-icon="feather:message-circle"
          ></i>
        </span>
        <span>Talk</span>
      </button>
    </div>
  </div>
</template>

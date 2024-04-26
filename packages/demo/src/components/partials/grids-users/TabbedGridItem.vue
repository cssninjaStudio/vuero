<script setup lang="ts">
export type UserItem = {
  avatar?: string
  badge?: string
  fullName?: string
  position?: string
  posts?: any
  projects?: any
  tasks?: any
}

const props = withDefaults(
  defineProps<{
    activeTab?: 'posts' | 'projects' | 'tasks'
    user?: UserItem
  }>(),
  {
    activeTab: 'posts',
    user: () => ({}),
  },
)

const tab = ref(props.activeTab)

const getRandom = () => Math.round(Math.random() * 10)
const values = ref<number[]>([])
let interval: number

for (let i = 0; i < 20; i++) {
  values.value.push(getRandom())
}

onMounted(() => {
  interval = setInterval(() => {
    values.value.shift()
    values.value.push(getRandom())
  }, 1000) as unknown as number
})

onUnmounted(() => {
  clearInterval(interval)
})
</script>

<template>
  <div class="grid-item">
    <VAvatar
      :picture="user.avatar"
      :badge="user.badge"
      size="big"
    />
    <h3 class="dark-inverted">
      {{ user.fullName }}
    </h3>
    <p>{{ user.position }}</p>
    <div class="icon-tabs-wrapper">
      <div class="icon-tabs">
        <div class="icon-tabs-inner">
          <a
            data-target-section="subsection-1"
            class="tab-item"
            :class="[tab === 'posts' && 'is-active']"
            role="button"
            tabindex="0"
            @keydown.enter.prevent="tab = 'posts'"
            @click="tab = 'posts'"
          >
            <VIcon
              icon="lucide:activity"
            />
          </a>
          <a
            data-target-section="subsection-2"
            class="tab-item"
            :class="[tab === 'projects' && 'is-active']"
            role="button"
            tabindex="0"
            @keydown.enter.prevent="tab = 'projects'"
            @click="tab = 'projects'"
          >
            <VIcon
              icon="lucide:briefcase"
            />
          </a>
          <a
            data-target-section="subsection-3"
            class="tab-item"
            :class="[tab === 'tasks' && 'is-active']"
            role="button"
            tabindex="0"
            @keydown.enter.prevent="tab = 'tasks'"
            @click="tab = 'tasks'"
          >
            <VIcon
              icon="lucide:check-circle"
            />
          </a>
          <div class="icon-tabs-naver" />
        </div>
      </div>

      <div
        class="icon-tabs-content subsection-1"
        :class="[tab === 'posts' && 'is-active']"
      >
        <div class="chart-block">
          <VPeity
            type="line"
            :height="45"
            :width="100"
            :stroke-width="1.6"
            :stroke="'var(--primary)'"
            :values="values"
          />
          <div class="stats">
            <span class="dark-inverted">{{ values[values.length - 1] }}</span>
            <span>Viewers</span>
          </div>
        </div>
      </div>

      <div
        class="icon-tabs-content subsection-2"
        :class="[tab === 'projects' && 'is-active']"
      >
        <div class="chart-block">
          <div class="circle-chart-wrapper is-info">
            <CircleChart
              :value="user.projects.progress"
              :size="54"
            />
          </div>
          <div class="stats">
            <span class="dark-inverted">{{ user.projects.count }}</span>
            <span>Projects</span>
          </div>
        </div>
      </div>

      <div
        class="icon-tabs-content subsection-3"
        :class="[tab === 'tasks' && 'is-active']"
      >
        <div class="chart-block">
          <div class="circle-chart-wrapper is-warning">
            <CircleChart
              :value="user.tasks.progress"
              :size="54"
            />
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
          <VIcon
            icon="lucide:check"
          />
        </span>
        <span>Hire</span>
      </button>
      <button class="button v-button is-dark-outlined">
        <span class="icon">
          <VIcon
            icon="lucide:message-circle"
          />
        </span>
        <span>Talk</span>
      </button>
    </div>
  </div>
</template>

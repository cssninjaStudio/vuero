<script setup lang="ts">
import { computed, ref } from 'vue'

import type {
  VAvatarProps,
  VAvatarColor,
} from '/@src/components/base/avatar/VAvatar.vue'
import { activePanel } from '/@src/state/activePanelState'
import { popovers } from '/@src/data/users/userPopovers'
import { UserPopover } from '/@src/models/users'

const filter = ref('')
const filteredData = computed(() => {
  if (!filter.value) {
    return []
  }

  return Object.values(popovers).filter((user) => {
    return (
      user.fullName.match(new RegExp(filter.value, 'i')) ||
      user.position.match(new RegExp(filter.value, 'i'))
    )
  })
})

function getAvatarData(user: UserPopover): VAvatarProps {
  return {
    picture: user.avatar,
    initials: user.initials,
    color: user.color as VAvatarColor,
  }
}
</script>

<template>
  <div
    id="search-panel"
    :class="[activePanel === 'search' && 'is-active']"
    class="right-panel-wrapper is-search is-left"
  >
    <div class="panel-overlay" @click="activePanel = 'none'"></div>

    <div class="right-panel">
      <div class="right-panel-head">
        <AnimatedLogo width="38px" height="38px" />
        <a class="close-panel" @click="activePanel = 'none'">
          <i
            aria-hidden="true"
            class="iconify"
            data-icon="feather:chevron-left"
          ></i>
        </a>
      </div>
      <div class="right-panel-body has-slimscroll">
        <VField>
          <VControl icon="feather:search">
            <input
              v-model="filter"
              type="text"
              class="input is-rounded search-input"
              placeholder="Search..."
            />
            <template #extra>
              <div
                v-if="filteredData.length > 0"
                class="is-active search-results has-slimscroll"
              >
                <div
                  v-for="user in filteredData"
                  :key="user.id"
                  class="search-result"
                >
                  <VAvatar v-bind="getAvatarData(user)" />
                  <div class="meta">
                    <span>{{ user.username }}</span>
                    <span>{{ user.position }}</span>
                  </div>
                </div>
              </div>
            </template>
          </VControl>
        </VField>

        <div class="recent">
          <h4>Recently viewed</h4>
          <div class="recent-block">
            <VBlock title="Browser Support" subtitle="Blog post" center>
              <template #icon>
                <VIconBox size="small" color="info" rounded>
                  <i
                    aria-hidden="true"
                    class="iconify"
                    data-icon="feather:chrome"
                  ></i>
                </VIconBox>
              </template>
            </VBlock>
            <VBlock title="Twitch API" subtitle="Blog post" center>
              <template #icon>
                <VIconBox size="small" color="orange" rounded>
                  <i
                    aria-hidden="true"
                    class="iconify"
                    data-icon="feather:tv"
                  ></i>
                </VIconBox>
              </template>
            </VBlock>
            <VBlock title="Browser Support" subtitle="Blog post" center>
              <template #icon>
                <VIconBox size="small" color="green" rounded>
                  <i
                    aria-hidden="true"
                    class="iconify"
                    data-icon="feather:twitter"
                  ></i>
                </VIconBox>
              </template>
            </VBlock>
          </div>
        </div>

        <div class="recent">
          <h4>Recent Members</h4>
          <div class="recent-block">
            <VBlock title="Alice C." subtitle="Software Engineer" center>
              <template #icon>
                <tippy
                  class="has-help-cursor"
                  interactive
                  :offset="[0, 10]"
                  placement="top-start"
                >
                  <VAvatar size="small" picture="/demo/avatars/7.jpg" />
                  <template #content>
                    <UserPopoverContent :user="popovers.user7" />
                  </template>
                </tippy>
              </template>
            </VBlock>

            <VBlock title="Tara S." subtitle="UI/UX Designer" center>
              <template #icon>
                <tippy
                  class="has-help-cursor"
                  interactive
                  :offset="[0, 10]"
                  placement="top-start"
                >
                  <VAvatar size="small" picture="/demo/avatars/13.jpg" />
                  <template #content>
                    <UserPopoverContent :user="popovers.user13" />
                  </template>
                </tippy>
              </template>
            </VBlock>

            <VBlock title="Jimmy H." subtitle="Project Manager" center>
              <template #icon>
                <tippy
                  class="has-help-cursor"
                  interactive
                  :offset="[0, 10]"
                  placement="top-start"
                >
                  <VAvatar size="small" picture="/demo/avatars/22.jpg" />
                  <template #content>
                    <UserPopoverContent :user="popovers.user22" />
                  </template>
                </tippy>
              </template>
            </VBlock>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../../scss/abstracts/_mixins.scss';
@import '../../../scss/layout/_right-panel.scss';
</style>

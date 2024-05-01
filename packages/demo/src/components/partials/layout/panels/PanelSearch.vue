<script setup lang="ts">
import { FocusTrap } from 'focus-trap-vue'

import type { VAvatarProps, VAvatarColor } from '/@src/components/base/VAvatar.vue'
import type { UserPopover } from '/@src/types/users'

import { popovers } from '/@src/data/users/userPopovers'

const panels = usePanels()
const filter = ref('')
const filteredData = computed(() => {
  if (!filter.value) {
    return []
  }

  return Object.values(popovers).filter((user) => {
    return (
      user.fullName.match(new RegExp(filter.value, 'i'))
      || user.position.match(new RegExp(filter.value, 'i'))
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
  <Teleport v-if="panels.active === 'search'" to="body">
    <FocusTrap :initial-focus="() => ($refs.searchRef as any)">
      <div class="right-panel-wrapper is-search is-left is-active">
        <div
          class="panel-overlay"
          tabindex="-1"
          role="button"
          @keydown.enter.prevent="panels.close()"
          @click="panels.close()"
        />

        <div class="right-panel">
          <div class="right-panel-head">
            <AnimatedLogo
              width="38px"
              height="38px"
            />
            <a
              class="close-panel"
              tabindex="0"
              role="button"
              @keydown.enter.prevent="panels.close()"
              @click="panels.close()"
            >
              <VIcon
                class="ltr-hidden"
                icon="lucide:chevron-right"
              />
              <VIcon
                class="rtl-hidden"
                icon="lucide:chevron-left"
              />
            </a>
          </div>
          <div class="right-panel-body has-slimscroll">
            <VField>
              <VControl icon="lucide:search">
                <input
                  ref="searchRef"
                  v-model="filter"
                  type="text"
                  class="input is-rounded search-input"
                  placeholder="Search..."
                >
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
                <VBlock
                  title="Browser Support"
                  subtitle="Blog post"
                  center
                >
                  <template #icon>
                    <VIconBox
                      size="small"
                      color="info"
                      rounded
                    >
                      <VIcon
                        icon="lucide:chrome"
                      />
                    </VIconBox>
                  </template>
                </VBlock>
                <VBlock
                  title="Twitch API"
                  subtitle="Blog post"
                  center
                >
                  <template #icon>
                    <VIconBox
                      size="small"
                      color="orange"
                      rounded
                    >
                      <VIcon
                        icon="lucide:tv"
                      />
                    </VIconBox>
                  </template>
                </VBlock>
                <VBlock
                  title="Browser Support"
                  subtitle="Blog post"
                  center
                >
                  <template #icon>
                    <VIconBox
                      size="small"
                      color="green"
                      rounded
                    >
                      <VIcon
                        icon="lucide:twitter"
                      />
                    </VIconBox>
                  </template>
                </VBlock>
              </div>
            </div>

            <div class="recent">
              <h4>Recent Members</h4>
              <div class="recent-block">
                <VBlock
                  title="Alice C."
                  subtitle="Software Engineer"
                  center
                >
                  <template #icon>
                    <Tippy
                      class="has-help-cursor"
                      interactive
                      :offset="[0, 10]"
                      placement="top-start"
                    >
                      <VAvatar
                        size="small"
                        picture="https://media.cssninja.io/content/avatars/7.jpg"
                      />
                      <template #content>
                        <UserPopoverContent :user="popovers.user7" />
                      </template>
                    </Tippy>
                  </template>
                </VBlock>

                <VBlock
                  title="Tara S."
                  subtitle="UI/UX Designer"
                  center
                >
                  <template #icon>
                    <Tippy
                      class="has-help-cursor"
                      interactive
                      :offset="[0, 10]"
                      placement="top-start"
                    >
                      <VAvatar
                        size="small"
                        picture="https://media.cssninja.io/content/avatars/13.jpg"
                      />
                      <template #content>
                        <UserPopoverContent :user="popovers.user13" />
                      </template>
                    </Tippy>
                  </template>
                </VBlock>

                <VBlock
                  title="Jimmy H."
                  subtitle="Project Manager"
                  center
                >
                  <template #icon>
                    <Tippy
                      class="has-help-cursor"
                      interactive
                      :offset="[0, 10]"
                      placement="top-start"
                    >
                      <VAvatar
                        size="small"
                        picture="https://media.cssninja.io/content/avatars/22.jpg"
                      />
                      <template #content>
                        <UserPopoverContent :user="popovers.user22" />
                      </template>
                    </Tippy>
                  </template>
                </VBlock>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FocusTrap>
  </Teleport>
</template>

<style lang="scss">
.right-panel-wrapper {
  &.is-search {
    .right-panel {
      width: 420px;

      .right-panel-head {
        padding: 0 30px;
      }

      .right-panel-body {
        padding: 20px 30px;

        .field {
          position: relative;
          margin-bottom: 30px;

          .control {
            .input {
              min-height: 48px;
              padding-inline-start: 48px;
            }

            .form-icon {
              height: 48px;
              width: 48px;
            }
          }
        }

        .recent {
          font-family: var(--font);
          margin-bottom: 30px;
          padding: 0 20px;

          h4 {
            text-transform: uppercase;
            font-size: 0.8rem;
            color: var(--light-text);
            margin-bottom: 12px;
          }

          .media-flex-center {
            .flex-meta {
              span {
                &:first-child {
                  font-weight: 500;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>

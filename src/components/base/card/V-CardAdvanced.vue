<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({})
</script>

<template>
  <div class="s-card-advanced">
    <div class="card-head">
      <div class="left">
        <div class="media-flex-center no-margin">
          <div class="v-avatar">
            <img
              class="avatar"
              src="/images/avatars/photos/19.jpg"
              alt=""
              data-user-popover="17"
              @error="$event.target.src = 'https://via.placeholder.com/150x150'"
            />
            <img
              class="badge"
              src="/images/icons/flags/germany.svg"
              alt=""
              @error="$event.target.src = 'https://via.placeholder.com/150x150'"
            />
          </div>
          <div class="flex-meta">
            <span>Greta K.</span>
            <span>Sales Manager</span>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="avatar-stack">
          <div class="v-avatar is-small">
            <img
              class="avatar"
              src="/images/avatars/photos/12.jpg"
              alt=""
              data-user-popover="2"
              data-target="webuiPopover19"
              @error="$event.target.src = 'https://via.placeholder.com/150x150'"
            />
          </div>
          <div class="v-avatar is-small">
            <img
              class="avatar"
              src="/images/avatars/photos/22.jpg"
              alt=""
              data-user-popover="5"
              @error="$event.target.src = 'https://via.placeholder.com/150x150'"
            />
          </div>
          <div class="v-avatar is-small">
            <img
              class="avatar"
              src="/images/avatars/photos/40.jpg"
              alt=""
              data-user-popover="11"
              @error="$event.target.src = 'https://via.placeholder.com/150x150'"
            />
          </div>
          <div class="v-avatar is-small">
            <span class="avatar is-more">
              <span class="inner">
                <span>+5</span>
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="card-body">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quibusnam
        praeteritis? At multis se probavit. Quoniam, si dis placet, ab Epicuro
        loqui discimus. Et ille ridens.
      </p>
    </div>
    <div class="card-foot">
      <div class="left">
        <div class="tags">
          <span class="tag is-rounded is-solid">Sales</span>
          <span class="tag is-rounded is-solid">Business</span>
        </div>
      </div>
      <div class="right">
        <button class="button is-primary is-raised">Action</button>
      </div>
    </div>
  </div>
</template>

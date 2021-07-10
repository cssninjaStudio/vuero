<script setup lang="ts">
import type { PropType } from 'vue'
import { ref, watchEffect } from 'vue'

const props = defineProps({
  conversationId: {
    type: Number,
    default: 0,
  },
  selectedConversationList: {
    type: Array as PropType<number[]>,
    default: () => [],
  },
})

const unread = ref(true)
const emit = defineEmits([
  'update:conversationId',
  'update:selectedConversationList',
])
const internalSelection = ref(props.selectedConversationList)

watchEffect(() => {
  emit('update:selectedConversationList', internalSelection.value)
})
</script>

<template>
  <div
    class="inbox-message"
    :class="[conversationId === 2 && 'is-selected', unread && 'is-unread']"
    @click="
      () => {
        unread = false
        emit('update:conversationId', 2)
      }
    "
  >
    <div class="message-checkbox">
      <label class="checkbox is-outlined is-primary">
        <input v-model="internalSelection" type="checkbox" :value="2" />
        <span></span>
      </label>
    </div>
    <div class="message-meta">
      <span class="name">Jonathan Krugger</span>
      <span class="email">&lt;jonathan@vuero.io&gt;</span>
      <span class="subject">
        <strong>I couldn't catch up on last time's dinner</strong>
      </span>
    </div>
    <div class="pushed">Oct 22</div>
  </div>
  <!--Message-->
  <div
    class="inbox-message"
    :class="[conversationId === 1 && 'is-selected']"
    @click="() => emit('update:conversationId', 1)"
  >
    <div class="message-checkbox">
      <label class="checkbox is-outlined is-primary">
        <input v-model="internalSelection" type="checkbox" :value="1" />
        <span></span>
      </label>
    </div>
    <div class="message-meta">
      <span class="name">Melany Wallace</span>
      <span class="email">&lt;melany@vuero.io&gt;</span>
      <span class="subject">Important project review next thursday</span>
    </div>
    <div class="pushed">Oct 21</div>
  </div>
  <!--Message-->
  <div
    class="inbox-message"
    :class="[conversationId === 3 && 'is-selected']"
    @click="() => emit('update:conversationId', 3)"
  >
    <div class="message-checkbox">
      <label class="checkbox is-outlined is-primary">
        <input v-model="internalSelection" type="checkbox" :value="3" />
        <span></span>
      </label>
    </div>
    <div class="message-meta">
      <span class="name">Greta Kroppfer</span>
      <span class="email">&lt;greta@vuero.io&gt;</span>
      <span class="subject">Don't forget to send me those budget notes</span>
    </div>
    <div class="pushed">Oct 20</div>
  </div>
  <!--Message-->
  <div
    class="inbox-message"
    :class="[conversationId === 4 && 'is-selected']"
    @click="() => emit('update:conversationId', 4)"
  >
    <div class="message-checkbox">
      <label class="checkbox is-outlined is-primary">
        <input v-model="internalSelection" type="checkbox" :value="4" />
        <span></span>
      </label>
    </div>
    <div class="message-meta">
      <span class="name">Elizabeth Fisher</span>
      <span class="email">&lt;elizabeth@vuero.io&gt;</span>
      <span class="subject">Meeting with the new customer on Monday</span>
    </div>
    <div class="pushed">Oct 19</div>
  </div>
  <!--Message-->
  <div
    class="inbox-message"
    :class="[conversationId === 5 && 'is-selected']"
    @click="() => emit('update:conversationId', 5)"
  >
    <div class="message-checkbox">
      <label class="checkbox is-outlined is-primary">
        <input v-model="internalSelection" type="checkbox" :value="5" />
        <span></span>
      </label>
    </div>
    <div class="message-meta">
      <span class="name">Carmen Escudero</span>
      <span class="email">&lt;carmen@vuero.io&gt;</span>
      <span class="subject">
        I got some new delightful stuff that you absolutely must see
      </span>
    </div>
    <div class="pushed">Oct 19</div>
  </div>
  <!--Message-->
  <div
    class="inbox-message"
    :class="[conversationId === 6 && 'is-selected']"
    @click="() => emit('update:conversationId', 6)"
  >
    <div class="message-checkbox">
      <label class="checkbox is-outlined is-primary">
        <input v-model="internalSelection" type="checkbox" :value="6" />
        <span></span>
      </label>
    </div>
    <div class="message-meta">
      <span class="name">Irina Vierbovsky</span>
      <span class="email">&lt;irina@vuero.io&gt;</span>
      <span class="subject">This month's lead generation report</span>
    </div>
    <div class="pushed">Oct 18</div>
  </div>
  <!--Message-->
  <div
    class="inbox-message"
    :class="[conversationId === 7 && 'is-selected']"
    @click="() => emit('update:conversationId', 7)"
  >
    <div class="message-checkbox">
      <label class="checkbox is-outlined is-primary">
        <input v-model="internalSelection" type="checkbox" :value="7" />
        <span></span>
      </label>
    </div>
    <div class="message-meta">
      <span class="name">Alejandro Badajoz</span>
      <span class="email">&lt;alejandro@vuero.io&gt;</span>
      <span class="subject">
        New design ideas from the user experience team
      </span>
    </div>
    <div class="pushed">Oct 18</div>
  </div>
  <!--Message-->
  <div
    class="inbox-message"
    :class="[conversationId === 8 && 'is-selected']"
    @click="() => emit('update:conversationId', 8)"
  >
    <div class="message-checkbox">
      <label class="checkbox is-outlined is-primary">
        <input v-model="internalSelection" type="checkbox" :value="8" />
        <span></span>
      </label>
    </div>
    <div class="message-meta">
      <span class="name">Edouard Falant</span>
      <span class="email">&lt;edouard@vuero.io&gt;</span>
      <span class="subject">Customer dashboard february bug report</span>
    </div>
    <div class="pushed">Oct 17</div>
  </div>
  <!--Message-->
  <div
    class="inbox-message"
    :class="[conversationId === 9 && 'is-selected']"
    @click="() => emit('update:conversationId', 9)"
  >
    <div class="message-checkbox">
      <label class="checkbox is-outlined is-primary">
        <input v-model="internalSelection" type="checkbox" :value="9" />
        <span></span>
      </label>
    </div>
    <div class="message-meta">
      <span class="name">Sandrine Coulart</span>
      <span class="email">&lt;sandrine@vuero.io&gt;</span>
      <span class="subject">You didn't answer my last email !</span>
    </div>
    <div class="pushed">Oct 17</div>
  </div>
  <!--Message-->
  <div
    class="inbox-message"
    :class="[conversationId === 10 && 'is-selected']"
    @click="() => emit('update:conversationId', 10)"
  >
    <div class="message-checkbox">
      <label class="checkbox is-outlined is-primary">
        <input v-model="internalSelection" type="checkbox" :value="10" />
        <span></span>
      </label>
    </div>
    <div class="message-meta">
      <span class="name">Kelly Marston</span>
      <span class="email">&lt;kelly@vuero.io&gt;</span>
      <span class="subject">Hop in for the next project review</span>
    </div>
    <div class="pushed">Oct 16</div>
  </div>
</template>

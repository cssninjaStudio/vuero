<script lang="ts">
import { defineComponent } from 'vue'

const InboxMessagesList = defineComponent({
  name: 'InboxMessagesList',
  components: {},
  setup() {
    // InboxMessagesList - Composition API

    return {}
  },
})

export default InboxMessagesList
</script>

<template>
  <!--Message-->
  <div class="inbox-message is-unread" data-message="message-2">
    <div class="message-checkbox">
      <label class="checkbox is-outlined is-primary">
        <input id="checkbox-mail-1" type="checkbox" />
        <span></span>
      </label>
    </div>
    <div class="message-meta">
      <span class="name">Jonathan Krugger</span>
      <span class="email">&lt;jonathan@huro.io&gt;</span>
      <span class="subject"
        ><b>I couldn't catch up on last time's dinner</b></span
      >
    </div>
    <div class="pushed">Oct 22</div>
  </div>
  <!--Message-->
  <div class="inbox-message is-selected" data-message="message-1">
    <div class="message-checkbox">
      <label class="checkbox is-outlined is-primary">
        <input id="checkbox-mail-2" type="checkbox" />
        <span></span>
      </label>
    </div>
    <div class="message-meta">
      <span class="name">Melany Wallace</span>
      <span class="email">&lt;melany@huro.io&gt;</span>
      <span class="subject">Important project review next thursday</span>
    </div>
    <div class="pushed">Oct 21</div>
  </div>
  <!--Message-->
  <div class="inbox-message" data-message="message-3">
    <div class="message-checkbox">
      <label class="checkbox is-outlined is-primary">
        <input id="checkbox-mail-3" type="checkbox" />
        <span></span>
      </label>
    </div>
    <div class="message-meta">
      <span class="name">Greta Kroppfer</span>
      <span class="email">&lt;greta@huro.io&gt;</span>
      <span class="subject">Don't forget to send me those budget notes</span>
    </div>
    <div class="pushed">Oct 20</div>
  </div>
  <!--Message-->
  <div class="inbox-message" data-message="message-4">
    <div class="message-checkbox">
      <label class="checkbox is-outlined is-primary">
        <input id="checkbox-mail-4" type="checkbox" />
        <span></span>
      </label>
    </div>
    <div class="message-meta">
      <span class="name">Elizabeth Fisher</span>
      <span class="email">&lt;elizabeth@huro.io&gt;</span>
      <span class="subject">Meeting with the new customer on Monday</span>
    </div>
    <div class="pushed">Oct 19</div>
  </div>
  <!--Message-->
  <div class="inbox-message" data-message="message-5">
    <div class="message-checkbox">
      <label class="checkbox is-outlined is-primary">
        <input id="checkbox-mail-5" type="checkbox" />
        <span></span>
      </label>
    </div>
    <div class="message-meta">
      <span class="name">Carmen Escudero</span>
      <span class="email">&lt;carmen@huro.io&gt;</span>
      <span class="subject"
        >I got some new delightful stuff that you absolutely must see</span
      >
    </div>
    <div class="pushed">Oct 19</div>
  </div>
  <!--Message-->
  <div class="inbox-message" data-message="message-6">
    <div class="message-checkbox">
      <label class="checkbox is-outlined is-primary">
        <input id="checkbox-mail-6" type="checkbox" />
        <span></span>
      </label>
    </div>
    <div class="message-meta">
      <span class="name">Irina Vierbovsky</span>
      <span class="email">&lt;irina@huro.io&gt;</span>
      <span class="subject">This month's lead generation report</span>
    </div>
    <div class="pushed">Oct 18</div>
  </div>
  <!--Message-->
  <div class="inbox-message" data-message="message-7">
    <div class="message-checkbox">
      <label class="checkbox is-outlined is-primary">
        <input id="checkbox-mail-7" type="checkbox" />
        <span></span>
      </label>
    </div>
    <div class="message-meta">
      <span class="name">Alejandro Badajoz</span>
      <span class="email">&lt;alejandro@huro.io&gt;</span>
      <span class="subject"
        >New design ideas from the user experience team</span
      >
    </div>
    <div class="pushed">Oct 18</div>
  </div>
  <!--Message-->
  <div class="inbox-message" data-message="message-8">
    <div class="message-checkbox">
      <label class="checkbox is-outlined is-primary">
        <input id="checkbox-mail-8" type="checkbox" />
        <span></span>
      </label>
    </div>
    <div class="message-meta">
      <span class="name">Edouard Falant</span>
      <span class="email">&lt;edouard@huro.io&gt;</span>
      <span class="subject">Customer dashboard february bug report</span>
    </div>
    <div class="pushed">Oct 17</div>
  </div>
  <!--Message-->
  <div class="inbox-message" data-message="message-9">
    <div class="message-checkbox">
      <label class="checkbox is-outlined is-primary">
        <input id="checkbox-mail-9" type="checkbox" />
        <span></span>
      </label>
    </div>
    <div class="message-meta">
      <span class="name">Sandrine Coulart</span>
      <span class="email">&lt;sandrine@huro.io&gt;</span>
      <span class="subject">You didn't answer my last email !</span>
    </div>
    <div class="pushed">Oct 17</div>
  </div>
  <!--Message-->
  <div class="inbox-message" data-message="message-10">
    <div class="message-checkbox">
      <label class="checkbox is-outlined is-primary">
        <input id="checkbox-mail-10" type="checkbox" />
        <span></span>
      </label>
    </div>
    <div class="message-meta">
      <span class="name">Kelly Marston</span>
      <span class="email">&lt;kelly@huro.io&gt;</span>
      <span class="subject">Hop in for the next project review</span>
    </div>
    <div class="pushed">Oct 16</div>
  </div>
</template>
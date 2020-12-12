<script lang="ts">
import { defineComponent } from 'vue'

const Message5 = defineComponent({
  name: 'Message5',
  components: {},
  setup() {
    // Message5 - Composition API

    return {}
  },
})

export default Message5
</script>

<template>
  <!-- Message details -->
  <div id="message-5" class="inbox-message-details is-hidden">
    <div class="header-area">
      <img
        class="sender-pic"
        src="https://via.placeholder.com/150x150"
        data-demo-src="assets/img/avatars/photos/27.jpg"
        alt=""
      />
      <div class="message-meta">
        <span class="message-title"
          >I got some new delightful stuff that you absolutely must see</span
        >
        <span class="sender-email">&lt;carmen@huro.io&gt;</span>
      </div>
      <div class="attachments inbox-hidden-mobile">
        <i data-feather="paperclip"></i>
        <span>2</span>
      </div>
      <div class="dropdown inbox-dropdown dropdown-trigger is-right">
        <div>
          <button class="button">
            <span class="icon is-small">
              <i data-feather="more-vertical"></i>
            </span>
          </button>
        </div>
        <div class="dropdown-menu">
          <div class="dropdown-content">
            <a class="dropdown-item">
              <i data-feather="bookmark"></i>
              <span>Bookmark</span>
            </a>
            <a class="dropdown-item">
              <i data-feather="share-2"></i>
              <span>Share message</span>
            </a>
            <hr class="dropdown-divider" />
            <a class="dropdown-item">
              <i data-feather="thumbs-down"></i>
              <span>Mark as spam</span>
            </a>
          </div>
        </div>
      </div>
      <a class="inbox-action inbox-close-details-mobile">
        <i data-feather="x"></i>
      </a>
    </div>
    <!--Message-->
    <div class="message-wrapper has-slimscroll">
      <div class="message-inner">
        <div class="message-head">
          <div class="info">
            <span>Sent on</span>
            <span>Oct 19 2020, at 07:48pm</span>
          </div>
          <div class="message-actions">
            <a class="inbox-action">
              <i data-feather="corner-up-left"></i>
            </a>
            <a class="inbox-action">
              <i data-feather="file-text"></i>
            </a>
            <a class="inbox-action">
              <i data-feather="tag"></i>
            </a>
            <a class="inbox-action">
              <i data-feather="message-circle"></i>
            </a>
            <a class="inbox-action">
              <i data-feather="lock"></i>
            </a>
          </div>
        </div>
        <!--Mail Content-->
        <div class="mail-content content">
          <p>Hey Erik,</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nos
            commodius agimus. Si longus, levis;
            <a href="http://loripsum.net/" target="_blank"
              >Summum ením bonum exposuit vacuitatem doloris;</a
            >
            Eadem fortitudinis ratio reperietur. Duo Reges: constructio
            interrete. Facile est hoc cernere in primis puerorum aetatulis.
          </p>
          <ul>
            <li>Sed residamus, inquit, si placet.</li>
            <li>
              Parvi enim primo ortu sic iacent, tamquam omnino sine animo sint.
            </li>
            <li>Beatus autem esse in maximarum rerum timore nemo potest.</li>
            <li>
              Illa argumenta propria videamus, cur omnia sint paria peccata.
            </li>
          </ul>

          <p>Just call me after work.</p>
        </div>

        <!-- Attachments -->
        <div class="attachments-list">
          <div class="attachment">
            <span>stuff.png</span>
            <div class="download-icon">
              <i data-feather="arrow-down"></i>
            </div>
          </div>
          <div class="attachment">
            <span>cool_stuff.png</span>
            <div class="download-icon">
              <i data-feather="arrow-down"></i>
            </div>
          </div>
        </div>
      </div>

      <!--Reply-->
      <div class="reply-box-wrap">
        <div class="reply-bubble">
          <div class="reply-as">
            <img
              src="https://via.placeholder.com/150x150"
              data-demo-src="assets/img/avatars/photos/8.jpg"
              alt=""
            />
            <div class="reply-details">
              <span>Reply as</span>
              <span>erik@huro.io</span>
            </div>
            <div class="dropdown inbox-dropdown dropdown-trigger is-right">
              <div>
                <button class="button">
                  <span class="icon is-small">
                    <i data-feather="more-vertical"></i>
                  </span>
                </button>
              </div>
              <div class="dropdown-menu">
                <div class="dropdown-content">
                  <a class="dropdown-item">
                    <i data-feather="refresh-cw"></i>
                    <span>Reset</span>
                  </a>
                  <a class="dropdown-item">
                    <i data-feather="align-left"></i>
                    <span>Spelling</span>
                  </a>
                  <a class="dropdown-item">
                    <i data-feather="at-sign"></i>
                    <span>Mention</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <!--textarea-->
          <div class="control">
            <textarea
              class="textarea"
              rows="6"
              placeholder="Type your message..."
            ></textarea>
            <button type="button" class="button">Send Message</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
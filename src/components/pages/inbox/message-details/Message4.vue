<template>
  <!-- Message details -->
  <div id="message-4" class="inbox-message-details is-hidden">
    <div class="header-area">
      <img
        class="sender-pic"
        src="https://via.placeholder.com/150x150"
        data-demo-src="/src/assets/images/avatars/photos/21.jpg"
        alt=""
      />
      <div class="message-meta">
        <span class="message-title"
          >Meeting with the new customer on Monday</span
        >
        <span class="sender-email">&lt;elizabeth@huro.io&gt;</span>
      </div>
      <div class="attachments is-vhidden inbox-hidden-mobile">
        <Icon icon="feather:paperclip" />
        <span>0</span>
      </div>
      <div class="dropdown inbox-dropdown dropdown-trigger is-right">
        <div>
          <button class="button">
            <span class="icon is-small">
              <Icon icon="feather:more-vertical" />
            </span>
          </button>
        </div>
        <div class="dropdown-menu">
          <div class="dropdown-content">
            <a class="dropdown-item">
              <Icon icon="feather:bookmark" />
              <span>Bookmark</span>
            </a>
            <a class="dropdown-item">
              <Icon icon="feather:share-2" />
              <span>Share message</span>
            </a>
            <hr class="dropdown-divider" />
            <a class="dropdown-item">
              <Icon icon="feather:thumbs-down" />
              <span>Mark as spam</span>
            </a>
          </div>
        </div>
      </div>
      <a class="inbox-action inbox-close-details-mobile">
        <Icon icon="feather:x" />
      </a>
    </div>
    <!--Message-->
    <div class="message-wrapper has-slimscroll">
      <div class="message-inner">
        <div class="message-head">
          <div class="info">
            <span>Sent on</span>
            <span>Oct 19 2020, at 04:27pm</span>
          </div>
          <div class="message-actions">
            <a class="inbox-action">
              <Icon icon="feather:corner-up-left" />
            </a>
            <a class="inbox-action">
              <Icon icon="feather:file-text" />
            </a>
            <a class="inbox-action">
              <Icon icon="feather:tag" />
            </a>
            <a class="inbox-action">
              <Icon icon="feather:message-circle" />
            </a>
            <a class="inbox-action">
              <Icon icon="feather:lock" />
            </a>
          </div>
        </div>
        <!--Mail Content-->
        <div class="mail-content content">
          <p>Hi Mr. Kovalsky,</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nos
            commodius agimus. Si longus, levis;
            <a href="#">Summum ením bonum exposuit vacuitatem doloris;</a>
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

          <p>Elizabeth</p>
        </div>
      </div>

      <!--Reply-->
      <div class="reply-box-wrap">
        <div class="reply-bubble">
          <div class="reply-as">
            <img
              src="https://via.placeholder.com/150x150"
              data-demo-src="/src/assets/images/avatars/photos/8.jpg"
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
                    <i class="sl sl-icon-options"></i>
                  </span>
                </button>
              </div>
              <div class="dropdown-menu">
                <div class="dropdown-content">
                  <a class="dropdown-item">
                    <Icon icon="feather:refresh-cw" />
                    <span>Reset</span>
                  </a>
                  <a class="dropdown-item">
                    <Icon icon="feather:align-left" />
                    <span>Spelling</span>
                  </a>
                  <a class="dropdown-item">
                    <Icon icon="feather:at-sign" />
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
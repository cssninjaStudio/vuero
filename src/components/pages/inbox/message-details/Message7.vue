<template>
  <!-- Message details -->
  <div id="message-7" class="inbox-message-details is-hidden">
    <div class="header-area">
      <img
        class="sender-pic"
        src="/@images/avatars/photos/39.jpg"
        alt=""
        @error="$event.target.src = 'https://via.placeholder.com/150x150'"
      />
      <div class="message-meta">
        <span class="message-title"
          >New design ideas from the user experience team</span
        >
        <span class="sender-email">&lt;alejandro@huro.io&gt;</span>
      </div>
      <div class="attachments inbox-hidden-mobile">
        <Icon icon="feather:paperclip" />
        <span>2</span>
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
            <span>Oct 18 2020, at 10:16am</span>
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
          <p>Hey Erik,</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid
            adiuvas? Philosophi autem in suis lectulis plerumque moriuntur.
            Reguli reiciendam; Si autem id non concedatur, non continuo vita
            beata tollitur. <mark>Quod quidem nobis non saepe contingit.</mark>
          </p>
          <p>
            <a href="http://loripsum.net/"
              >Illa tamen simplicia, vestra versuta.</a
            >
            Ea possunt paria non esse. Quid adiuvas? Praeclarae mortes sunt
            imperatoriae;
          </p>
          <ul>
            <li>Si enim ita est, vide ne facinus facias, cum mori suadeas.</li>
            <li>In eo enim positum est id, quod dicimus esse expetendum.</li>
            <li>
              Minime id quidem, inquam, alienum, multumque ad ea, quae
              quaerimus, explicatio tua ista profecerit.
            </li>
            <li>
              Quae qui non vident, nihil umquam magnum ac cognitione dignum
              amaverunt.
            </li>
          </ul>
          <p>
            Duo Reges: constructio interrete. Qui est in parvis malis. Paria
            sunt igitur.
          </p>

          <p>Alejandro</p>
        </div>

        <!-- Attachments -->
        <div class="attachments-list">
          <div class="attachment">
            <span>landing-page.png</span>
            <div class="download-icon">
              <Icon icon="feather:arrow-down" />
            </div>
          </div>
          <div class="attachment">
            <span>dashboard.png</span>
            <div class="download-icon">
              <Icon icon="feather:arrow-down" />
            </div>
          </div>
        </div>
      </div>

      <!--Reply-->
      <div class="reply-box-wrap">
        <div class="reply-bubble">
          <div class="reply-as">
            <img
              src="/@images/avatars/photos/8.jpg"
              alt=""
              @error="$event.target.src = 'https://via.placeholder.com/150x150'"
            />
            <div class="reply-details">
              <span>Reply as</span>
              <span>erik@huro.io</span>
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

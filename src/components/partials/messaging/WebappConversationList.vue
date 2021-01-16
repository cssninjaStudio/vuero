<template>
  <!--Conversations list-->
  <div class="conversation-area" data-simplebar>
    <!--Conversation-->
    <div
      class="conversation"
      data-conversation-id="1"
      data-detail-name="Kelly Marston"
      data-detail-text="Product Manager"
    >
      <div class="h-avatar">
        <img
          class="avatar"
          src="/@images/avatars/photos/11.jpg"
          alt=""
          data-user-popover="13"
          @error="$event.target.src = 'https://via.placeholder.com/150x150'"
        />
      </div>
      <div class="conversation-detail">
        <div class="conversation-username">Kelly Marston</div>
        <div class="conversation-content">
          <span class="conversation-message"
            >What time was our meeting scheduled for?</span
          >
          <span class="conversation-date">20m</span>
        </div>
      </div>
    </div>

    <!--Conversation-->
    <div
      class="conversation"
      data-conversation-id="2"
      data-detail-name="Alejandro Badajoz"
      data-detail-text="Business Analyst"
    >
      <div class="h-avatar">
        <img
          class="avatar"
          src="/@images/avatars/photos/39.jpg"
          alt=""
          data-user-popover="33"
          @error="$event.target.src = 'https://via.placeholder.com/150x150'"
        />
      </div>
      <div class="conversation-detail">
        <div class="conversation-username">Alejandro Badajoz</div>
        <div class="conversation-content">
          <span class="conversation-message"
            >Nah, I have a meeting that starts in 5.</span
          >
          <span class="conversation-date">24m</span>
        </div>
      </div>
    </div>

    <!--Conversation-->
    <div
      class="conversation active"
      data-conversation-id="3"
      data-detail-name="Work Group"
      data-detail-text="7 people are chatting"
    >
      <div class="h-avatar">
        <span class="avatar is-fake is-h-purple">
          <span>WG</span>
        </span>
      </div>
      <div class="conversation-detail">
        <div class="conversation-username">Work Group</div>
        <div class="conversation-content">
          <span class="conversation-message"
            >This is getting funnier and funnier. You gotta love dat team
            🥰</span
          >
          <span class="conversation-date">31m</span>
        </div>
      </div>
    </div>

    <!--Conversation-->
    <div
      class="conversation"
      data-conversation-id="4"
      data-detail-name="Alice Carasca"
      data-detail-text="Software Engineer"
    >
      <div class="h-avatar">
        <img
          class="avatar"
          src="/@images/avatars/photos/7.jpg"
          alt=""
          data-user-popover="0"
          @error="$event.target.src = 'https://via.placeholder.com/150x150'"
        />
      </div>
      <div class="conversation-detail">
        <div class="conversation-username">Alice Carasca</div>
        <div class="conversation-content">
          <span class="conversation-message"
            >I like the curves in this one.</span
          >
          <span class="conversation-date">47m</span>
        </div>
      </div>
    </div>

    <!--Conversation-->
    <div
      class="conversation"
      data-conversation-id="5"
      data-detail-name="Irina Vierbovsky"
      data-detail-text="Project Manager"
    >
      <div class="h-avatar">
        <img
          class="avatar"
          src="/@images/avatars/photos/23.jpg"
          alt=""
          data-user-popover="21"
          @error="$event.target.src = 'https://via.placeholder.com/150x150'"
        />
      </div>
      <div class="conversation-detail">
        <div class="conversation-username">Irina Vierbovsky</div>
        <div class="conversation-content">
          <span class="conversation-message"
            >I need some help on something Iam working on.</span
          >
          <span class="conversation-date">56m</span>
        </div>
      </div>
    </div>

    <!--Conversation-->
    <div
      class="conversation"
      data-conversation-id="6"
      data-detail-name="Mary Lebowski"
      data-detail-text="Project Manager"
    >
      <div class="h-avatar">
        <img
          class="avatar"
          src="/@images/avatars/photos/5.jpg"
          alt=""
          data-user-popover="9"
          @error="$event.target.src = 'https://via.placeholder.com/150x150'"
        />
      </div>
      <div class="conversation-detail">
        <div class="conversation-username">Mary Lebowski</div>
        <div class="conversation-content">
          <span class="conversation-message">Still down for that movie?</span>
          <span class="conversation-date">1h</span>
        </div>
      </div>
    </div>

    <!--Conversation-->
    <div
      class="conversation"
      data-conversation-id="7"
      data-detail-name="Esteban Castellanos"
      data-detail-text="UI/UX Designer"
    >
      <div class="h-avatar">
        <img
          class="avatar"
          src="/@images/avatars/photos/18.jpg"
          alt=""
          data-user-popover="7"
          @error="$event.target.src = 'https://via.placeholder.com/150x150'"
        />
      </div>
      <div class="conversation-detail">
        <div class="conversation-username">Esteban Castellanos</div>
        <div class="conversation-content">
          <span class="conversation-message">I can send you the files.</span>
          <span class="conversation-date">1h</span>
        </div>
      </div>
    </div>

    <!--Conversation-->
    <div
      class="conversation"
      data-conversation-id="8"
      data-detail-name="Melany Wallace"
      data-detail-text="Web Developer"
    >
      <div class="h-avatar">
        <img
          class="avatar"
          src="/@images/avatars/photos/25.jpg"
          alt=""
          data-user-popover="4"
          @error="$event.target.src = 'https://via.placeholder.com/150x150'"
        />
      </div>
      <div class="conversation-detail">
        <div class="conversation-username">Melany Wallace</div>
        <div class="conversation-content">
          <span class="conversation-message"
            >I has some issues with the headers tough.</span
          >
          <span class="conversation-date">2h</span>
        </div>
      </div>
    </div>

    <!--Conversation-->
    <div
      class="conversation"
      data-conversation-id="9"
      data-detail-name="Jimmy Hector"
      data-detail-text="Project Manager"
    >
      <div class="h-avatar">
        <img
          class="avatar"
          src="/@images/avatars/photos/22.jpg"
          alt=""
          data-user-popover="5"
          @error="$event.target.src = 'https://via.placeholder.com/150x150'"
        />
      </div>
      <div class="conversation-detail">
        <div class="conversation-username">Jimmy Hector</div>
        <div class="conversation-content">
          <span class="conversation-message">When are you available?</span>
          <span class="conversation-date">3h</span>
        </div>
      </div>
    </div>

    <!--Conversation-->
    <div
      class="conversation"
      data-conversation-id="10"
      data-detail-name="Greta Kroppfer"
      data-detail-text="Sales Manager"
    >
      <div class="h-avatar">
        <img
          class="avatar"
          src="/@images/avatars/photos/19.jpg"
          alt=""
          data-user-popover="17"
          @error="$event.target.src = 'https://via.placeholder.com/150x150'"
        />
      </div>
      <div class="conversation-detail">
        <div class="conversation-username">Greta Kroppfer</div>
        <div class="conversation-content">
          <span class="conversation-message"
            >Thank you for you clean presentation, it was stunning.</span
          >
          <span class="conversation-date">3h</span>
        </div>
      </div>
    </div>

    <!--Conversation-->
    <div
      class="conversation"
      data-conversation-id="11"
      data-detail-name="Tara Svenson"
      data-detail-text="UI/UX Designer"
    >
      <div class="h-avatar">
        <img
          class="avatar"
          src="/@images/avatars/photos/13.jpg"
          alt=""
          data-user-popover="6"
          @error="$event.target.src = 'https://via.placeholder.com/150x150'"
        />
      </div>
      <div class="conversation-detail">
        <div class="conversation-username">Tara Svenson</div>
        <div class="conversation-content">
          <span class="conversation-message">Hope you like them.</span>
          <span class="conversation-date">9h</span>
        </div>
      </div>
    </div>
  </div>
</template>

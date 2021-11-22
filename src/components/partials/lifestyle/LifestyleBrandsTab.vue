<template>
  <div id="brands-tab" class="tab-content is-active">
    <!--Empty Placeholder -->
    <VPlaceholderPage
      title="No brands to show."
      subtitle="Too bad. Looks like Clarissa enabled her brand privacy setting. You won't be
          able to see the brands she's working with unless you contact her directly."
    >
      <template #image>
        <img
          class="light-image"
          src="/@src/assets/illustrations/placeholders/having-coffee.svg"
          alt=""
        />
        <img
          class="dark-image"
          src="/@src/assets/illustrations/placeholders/having-coffee-dark.svg"
          alt=""
        />
      </template>
    </VPlaceholderPage>
  </div>
</template>

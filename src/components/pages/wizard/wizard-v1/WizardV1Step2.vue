<template>
  <div class="step-content">
    <div class="step-title">
      <h2 class="dark-inverted">Add more details</h2>
      <p>Add useful details to your project. You can edit this later.</p>
    </div>

    <div class="project-customer">
      <h4>Customer</h4>

      <div class="field is-autocomplete">
        <div class="control has-icon">
          <input id="customers-search" class="input" placeholder="search..." />
          <div class="form-icon">
            <Icon icon="feather:search" />
          </div>
        </div>
      </div>
      <div class="media-flex-center is-hidden">
        <div class="h-avatar is-medium">
          <img
            id="customer-logo"
            class="avatar"
            src="https://via.placeholder.com/150x150"
            data-demo-src="/src/assets/images/photo/demo/brands/airbnb.svg"
            alt=""
          />
        </div>
        <div class="flex-meta">
          <span id="customer-name">Airbnb</span>
          <span id="customer-location">Los Angeles, CA</span>
        </div>
        <div class="flex-end">
          <button id="remove-customer" class="button is-circle">
            <span class="icon is-small">
              <Icon icon="feather:x" />
            </span>
          </button>
        </div>
      </div>
    </div>

    <div class="project-dates">
      <h4>Project Time Frame</h4>
      <div class="project-dates-inner">
        <div class="project-date">
          <div class="date-icon">
            <Icon icon="feather:map-pin" />
          </div>
          <div class="control">
            <input
              id="project-start-date"
              class="input form-datepicker"
              placeholder="Start Date"
            />
          </div>
        </div>
        <div class="separator"></div>
        <div class="project-date">
          <div class="date-icon">
            <Icon icon="feather:flag" />
          </div>
          <div class="control">
            <input
              id="project-end-date"
              class="input form-datepicker"
              placeholder="End Date"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="project-budget">
      <h4>Project Budget</h4>
      <div class="project-budget-inner">
        <div class="budget-item">
          <a class="budget-item-inner is-active">
            <span>&lt; 5K</span>
          </a>
          <a class="budget-item-inner">
            <span>&lt; 30K</span>
          </a>
          <a class="budget-item-inner">
            <span>&lt; 100K</span>
          </a>
          <a class="budget-item-inner">
            <span>100K+</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
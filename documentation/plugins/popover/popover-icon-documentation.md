### Icon popover

Popovers can hold any type of content, including existing Vuero components. You
can easily add a `<VIconBox />` inside your popover.

<!--code-->

```vue
<template>
  <Tippy>
    <VButton>Hover me!</VButton>
    <template #content>
      <div class="v-popover-content is-text">
        <div class="popover-head">
          <VIconBox size="small" color="primary">
            <i class="lnil lnil-crown-alt-1"></i>
          </VIconBox>
          <h4 class="dark-inverted">Hover Popover</h4>
        </div>
        <div class="popover-body">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </template>
  </Tippy>
</template>
```

<!--/code-->

<!--example-->

<div class="buttons">
  <Tippy>
    <VButton class="mx-1">Hover me!</VButton>
    <template #content>
      <div class="v-popover-content is-text">
          <div class="popover-head">
              <VIconBox size="small" color="primary">
                <i class="iconify" data-icon="feather:x" />
              </VIconBox>
              <h4 class="dark-inverted">Hover Popover</h4>
          </div>
          <div class="popover-body">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
      </div>
    </template>
  </Tippy>
  <Tippy>
    <VButton class="mx-1">Hover me!</VButton>
    <template #content>
      <div class="v-popover-content is-text">
          <div class="popover-head">
                <VIconBox size="small" color="info">
                    <i class="lnil lnil-crown-alt-1"></i>
                </VIconBox>
                <h4 class="dark-inverted">Hover Popover</h4>
          </div>
          <div class="popover-body">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
      </div>
    </template>
  </Tippy>
  <Tippy>
    <VButton class="mx-1">Hover me!</VButton>
    <template #content>
      <div class="v-popover-content is-text">
          <div class="popover-head">
                <VIconBox size="small" color="orange">
                    <i class="lnil lnil-crown-alt-1"></i>
                </VIconBox>
                <h4 class="dark-inverted">Hover Popover</h4>
          </div>
          <div class="popover-body">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
      </div>
    </template>
  </Tippy>
  <Tippy>
    <VButton class="mx-1">Hover me!</VButton>
    <template #content>
      <div class="v-popover-content is-text">
          <div class="popover-head">
                <VIconBox size="small" color="green">
                    <i class="lnil lnil-crown-alt-1"></i>
                </VIconBox>
                <h4 class="dark-inverted">Hover Popover</h4>
          </div>
          <div class="popover-body">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
      </div>
    </template>
  </Tippy>
</div>

<!--/example-->

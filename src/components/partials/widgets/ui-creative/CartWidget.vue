<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  products: {
    type: Array,
    required: true,
  },
  straight: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div class="cart-widget" :class="[straight && 'is-straight']">
    <div class="widget-toolbar">
      <div class="left">
        <h3>Your Cart</h3>
      </div>
      <div class="right">
        <V-Tag :label="products.length + ' items'" color="orange" curved />
      </div>
    </div>
    <div class="cart-items">
      <div v-for="product in products" :key="product.id" class="cart-item">
        <V-Avatar :picture="product.picture" size="large" squared />
        <div class="meta">
          <span class="text">{{ product.name }}</span>
          <span class="price">${{ product.price }}</span>
        </div>
      </div>
    </div>
    <div class="cart-button">
      <div class="button v-button is-primary is-raised is-bold is-fullwidth">
        Start Checkout
      </div>
    </div>
  </div>
</template>

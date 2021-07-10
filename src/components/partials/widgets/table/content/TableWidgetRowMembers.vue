<script setup lang="ts">
const props = defineProps({
  rows: {
    type: Array,
    required: true,
  },
  squared: {
    type: Boolean,
    default: false,
  },
  circled: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <tr v-for="row in props.rows" :key="row.id">
    <td class="is-media">
      <V-Avatar
        :picture="row.picture"
        :initials="row.initials"
        size="medium"
        :color="row.color"
        :squared="props.squared"
      />
    </td>
    <td>
      <div class="double-line">
        <span class="dark-inverted">{{ row.name }}</span>
        <span>Member since {{ row.membership }}</span>
      </div>
    </td>
    <td>
      <div class="double-line">
        <span class="dark-inverted">${{ row.income }}</span>
        <span>Monthly Income</span>
      </div>
    </td>
    <td>
      <div class="avatars">
        <V-Avatar
          v-for="skill in row.skills"
          :key="skill.id"
          :picture="skill.icon"
          size="small"
        />
      </div>
    </td>
    <td>
      <div class="rating-wrap">
        <span>Rating</span>
        <div class="rating">
          <i
            v-for="(star, index) in 5"
            :key="index"
            class="fas fa-star"
            aria-hidden="true"
            :class="row.rating - index > 0 && 'selected'"
          ></i>
        </div>
      </div>
    </td>
    <td>
      <div class="tag-wrap">
        <V-Tag
          :class="[
            row.status === 'Approved' && 'is-green',
            row.status === 'Pending' && 'is-info',
            row.status === 'Suspended' && 'is-orange',
          ]"
          :label="row.status"
          elevated
        />
      </div>
    </td>
    <td class="is-end">
      <div class="buttons">
        <button
          class="button is-dark-outlined"
          :class="[props.circled && 'is-circle']"
        >
          <span class="icon is-small">
            <i
              aria-hidden="true"
              class="iconify"
              data-icon="feather:edit-2"
            ></i>
          </span>
        </button>
        <button
          class="button is-dark-outlined"
          :class="[props.circled && 'is-circle']"
        >
          <span class="icon is-small">
            <i aria-hidden="true" class="iconify" data-icon="feather:eye"></i>
          </span>
        </button>
        <button
          class="button is-dark-outlined"
          :class="[props.circled && 'is-circle']"
        >
          <span class="icon is-small">
            <i
              aria-hidden="true"
              class="iconify"
              data-icon="feather:trash-2"
            ></i>
          </span>
        </button>
      </div>
    </td>
  </tr>
</template>

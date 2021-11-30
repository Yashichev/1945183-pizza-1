<template>
  <div class="content__constructor">
    <div :class="`pizza pizza--foundation--${doughs}-${sauces}`">
      <div class="pizza__wrapper">
        <div
          v-for="ingredient in ingredients"
          v-bind:key="ingredient.name"
          :class="`pizza__filling pizza__filling--${ingredient.name}`"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "BuilderPizzaView",
  props: {
    ingredients: {
      type: Array,
      default: () => [],
    },
    sauces: {
      type: String,
      required: true,
    },
    doughs: {
      type: String,
      required: true,
    },
  },
};
</script>

<template>
  <AppDrop @drop="moveIngredient">
    <div class="content__constructor">
      <div :class="`pizza pizza--foundation--${doughs}-${sauces}`">
        <div class="pizza__wrapper">
          <div
            v-for="ingredient in ingredients"
            v-bind:key="ingredient.name"
            :class="`pizza__filling pizza__filling--${ingredient.value}`"
          />
        </div>
      </div>
    </div>
  </AppDrop>
</template>
<script>
import AppDrop from "@/common/components/AppDrop";
export default {
  name: "BuilderPizzaView",
  components: { AppDrop },
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
  methods: {
    moveIngredient(result) {
      result = {
        name: result.name,
        price: result.price,
        value: result.value,
        count: 1,
      };
      this.$emit("changeIngredients", result, "add");
      this.$emit("countIncrement", result);
    },
  },
};
</script>

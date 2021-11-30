<template>
  <div class="ingredients__filling">
    <p>Начинка:</p>
    <ul class="ingredients__list">
      <li
        v-for="ingredient in ingredients"
        :key="ingredient.id"
        class="ingredients__item"
      >
        <span :class="`filling filling--${ingredient.value}`">
          {{ ingredient.name }}
        </span>
        <ItemCounter
          :c_name="ingredient.value"
          :c_price="ingredient.price"
          @changeIngredient="changeIngredient"
        />
      </li>
    </ul>
  </div>
</template>
<script>
import ItemCounter from "@/common/components/ItemCounter";
export default {
  name: "BuilderIngredientsSelector",
  components: { ItemCounter },
  props: {
    ingredients: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      c_name: "",
      c_price: 0,
    };
  },
  methods: {
    changeIngredient(result, type) {
      this.$emit("changeIngredients", result, type);
    },
  },
};
</script>

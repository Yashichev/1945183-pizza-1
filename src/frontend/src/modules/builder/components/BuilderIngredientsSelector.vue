<template>
  <div class="ingredients__filling">
    <p>Начинка:</p>
    <ul class="ingredients__list">
      <li
        v-for="ingredient in ingredients"
        :key="ingredient.id"
        class="ingredients__item"
      >
        <AppDrag :transfer-data="ingredient">
          <span :class="`filling filling--${ingredient.value}`">
            {{ ingredient.name }}
          </span>
          <ItemCounter
            :c_name="ingredient.value"
            :c_price="ingredient.price"
            :selected_value="ingredient.count ? ingredient.count : 0"
            @changeIngredient="changeIngredient"
          />
        </AppDrag>
      </li>
    </ul>
  </div>
</template>
<script>
import ItemCounter from "@/common/components/ItemCounter";
//import AppDrop from "@/common/components/AppDrop";
import AppDrag from "@/common/components/AppDrag";
export default {
  name: "BuilderIngredientsSelector",
  components: { ItemCounter, AppDrag },
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
      if (
        this.ingredients[
          this.ingredients.findIndex((x) => x.value == result.value)
        ].count
      ) {
        if (type == "add") {
          this.ingredients[
            this.ingredients.findIndex((x) => x.value == result.value)
          ].count++;
        } else {
          this.ingredients[
            this.ingredients.findIndex((x) => x.value == result.value)
          ].count--;
        }
      } else {
        let index = this.ingredients.findIndex((x) => x.value == result.value);
        this.ingredients.splice(index, 1, {
          name: this.ingredients[index].name,
          price: this.ingredients[index].price,
          image: this.ingredients[index].image,
          value: this.ingredients[index].value,
          count: 1,
        });
        this.ingredients[
          this.ingredients.findIndex((x) => x.value == result.value)
        ].count = 1;
      }
    },
  },
};
</script>

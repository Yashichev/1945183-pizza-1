<template>
  <div class="ingredients__filling">
    <p>Начинка:</p>
    <ul class="ingredients__list">
      <li
        v-for="ingredient in ingredients"
        :key="ingredient.id"
        class="ingredients__item"
      >
        <AppDrag
          :transfer-data="ingredient"
          :draggable="!ingredient.count || ingredient.count < 3"
        >
          <span :class="`filling filling--${ingredient.value}`">
            {{ ingredient.name }}
          </span>
          <ItemCounter
            :counterName="ingredient.value"
            :counterPrice="ingredient.price"
            :selectedValue="ingredient.count ? ingredient.count : 0"
            @changeIngredient="changeIngredient"
          />
        </AppDrag>
      </li>
    </ul>
  </div>
</template>
<script>
import ItemCounter from "@/common/components/ItemCounter";
import AppDrag from "@/common/components/AppDrag";
//import { SET_ENTITY } from "@/store/mutations-types";
import { mapState, mapActions } from "vuex";
export default {
  name: "BuilderIngredientsSelector",
  components: { ItemCounter, AppDrag },
  computed: {
    ...mapState("Builder", ["ingredients"]),
  },
  data() {
    return {
      counterName: "",
      counterPrice: 0,
    };
  },
  methods: {
    ...mapActions("Builder", [
      "addIngredient",
      "removeIngredient",
      "deleteIngredient",
    ]),
    /*...mapMutations({ changeSelectedSauces: SET_ENTITY }),
    changeSauces(value) {
      this.changeSelectedSauces({
        module: null,
        entity: "selectedSauces",
        value: value,
      });
    },*/

    changeIngredient(result, type) {
      //console.log(result);
      if (type == "add") {
        this.addIngredient({
          module: "Builder",
          entity: "selectedIngredients",
          value: result,
        });
      } else if (type == "remove") {
        this.removeIngredient({
          module: "Builder",
          entity: "selectedIngredients",
          value: result,
        });
      }
    },
  },
};
</script>

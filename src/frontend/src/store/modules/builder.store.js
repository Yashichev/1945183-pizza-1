import pizza from "@/static/pizza.json";
import { SET_ENTITY } from "@/store/mutations-types";
import { normalizeIngredients } from "@/common/helpers";
import { capitalize } from "@/common/helpers";
const entity = "Builder";
const module = capitalize(entity);
const namespace = { entity, module };

const state = () => ({
  ingredients: [],
  selectedIngredients: [],
});

const actions = {
  fetchIngredient({ commit }) {
    const ingredients = pizza.ingredients.map((ingredients) =>
      normalizeIngredients(ingredients)
    );
    commit(
      SET_ENTITY,
      {
        ...namespace,
        entity: "ingredients",
        value: ingredients,
      },
      { root: true }
    );
  },
  addIngredient({ commit }, payload) {
    console.log(state.entity.ingredients);
    //console.log(payload);

    commit(
      SET_ENTITY,
      {
        ...namespace,
        entity: "selectedIngredients",
        value: payload,
      },
      {
        root: true,
      }
    );
  },
  removeIngredient({ commit }) {
    console.log(commit);
  },
  deleteIngredient({ commit }) {
    console.log(commit);
  },
};

export default {
  namespaced: true,
  state,
  actions,
};

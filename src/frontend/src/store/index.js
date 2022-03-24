import Vue from "vue";
import Vuex from "vuex";
import modules from "@/store/modules";
import jsonUser from "@/static/user.json";
import pizza from "@/static/pizza.json";
import {
  normalizeDough,
  normalizeSize,
  normalizeSauces,
} from "@/common/helpers";
import {
  SET_ENTITY,
  ADD_ENTITY,
  UPDATE_ENTITY,
  DELETE_ENTITY,
} from "@/store/mutations-types";

Vue.use(Vuex);

const state = () => ({
  user: [],
  dough: [],
  sizes: [],
  sauces: [],
  selectedDoughs: "light",
  selectedSizes: 2,
  selectedSauces: "tomato",
});

const actions = {
  async init({ dispatch }) {
    dispatch("fetchUsers");
    dispatch("fetchDough");
    dispatch("fetchSize");
    dispatch("fetchSauce");
    dispatch("Builder/fetchIngredient");
  },

  fetchUsers({ commit }) {
    const user = jsonUser;
    commit(SET_ENTITY, { module: null, entity: "user", value: user });
  },

  fetchDough({ commit }) {
    const dough = pizza.dough.map((dough) => normalizeDough(dough));
    commit(SET_ENTITY, { module: null, entity: "doughs", value: dough });
  },

  fetchSize({ commit }) {
    const sizes = pizza.sizes.map((size) => normalizeSize(size));
    commit(SET_ENTITY, { module: null, entity: "sizes", value: sizes });
  },

  fetchSauce({ commit }) {
    const sauces = pizza.sauces.map((sauce) => normalizeSauces(sauce));
    commit(SET_ENTITY, { module: null, entity: "sauces", value: sauces });
  },
};

export default new Vuex.Store({
  state,
  mutations: {
    [SET_ENTITY](state, { module, entity, value }) {
      module ? (state[module][entity] = value) : (state[entity] = value);
    },

    [ADD_ENTITY](state, { module, entity, value }) {
      if (module) {
        state[module][entity] = [...state[module][entity], value];
      } else {
        state[entity] = [...state[entity], value];
      }
    },

    [UPDATE_ENTITY](state, { module, entity, value }) {
      if (module) {
        const index = state[module][entity].findIndex(
          ({ id }) => id === value.id
        );

        if (~index) {
          state[module][entity].splice(index, 1, value);
        }
      } else {
        const index = state[entity].findIndex(({ id }) => id === value.id);

        if (~index) {
          state[entity].splice(index, 1, value);
        }
      }
    },

    [DELETE_ENTITY](state, { module, entity, id }) {
      if (module) {
        state[module][entity] = state[module][entity].filter(
          (e) => +e.id !== +id
        );
      } else {
        state[entity] = state[entity].filter((e) => +e.id !== +id);
      }
    },
  },
  actions,
  modules,
});

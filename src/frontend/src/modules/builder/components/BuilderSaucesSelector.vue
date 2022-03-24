<template>
  <div class="ingredients__sauce">
    <p>Основной соус:</p>
    <label
      v-for="sauce in sauces"
      :key="sauce.id"
      class="radio ingredients__input"
    >
      <RadioButton
        rbName="sauce"
        :rbValue="sauce.value"
        :isChecked="sauce.value == selectedSauces"
        @changeValue="changeSauces"
      />
      <span>{{ sauce.name }}</span>
    </label>
  </div>
</template>
<script>
import RadioButton from "@/common/components/RadioButton";
import { SET_ENTITY } from "@/store/mutations-types";
import { mapState, mapMutations } from "vuex";
export default {
  name: "BuilderSaucesSelector",
  components: { RadioButton },
  computed: {
    ...mapState(["sauces", "selectedSauces"]),
  },
  methods: {
    ...mapMutations({ changeSelectedSauces: SET_ENTITY }),
    changeSauces(value) {
      this.changeSelectedSauces({
        module: null,
        entity: "selectedSauces",
        value: value,
      });
    },
  },
};
</script>

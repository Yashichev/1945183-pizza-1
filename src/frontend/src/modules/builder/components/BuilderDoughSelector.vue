<template>
  <div class="content__dough">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите тесто</h2>
      <div class="sheet__content dough">
        <label
          v-for="dough in doughs"
          :key="dough.id"
          :class="`dough__input dough__input--${dough.value}`"
        >
          <RadioButton
            rbName="dought"
            rbClass="visually-hidden"
            :rbValue="dough.value"
            :isChecked="dough.value == selectedDoughs"
            @changeValue="changeDoughs"
          />
          <b>{{ dough.name }}</b>
          <span>{{ dough.description }}</span>
        </label>
      </div>
    </div>
  </div>
</template>
<script>
import RadioButton from "@/common/components/RadioButton";
import { SET_ENTITY } from "@/store/mutations-types";
import { mapState, mapMutations } from "vuex";
export default {
  name: "BuilderDoughSelector",
  components: { RadioButton },
  computed: {
    ...mapState(["doughs", "selectedDoughs"]),
  },
  methods: {
    ...mapMutations({ changeSelectedDoughs: SET_ENTITY }),
    changeDoughs(value) {
      this.changeSelectedDoughs({
        module: null,
        entity: "selectedDoughs",
        value: value,
      });
    },
  },
};
</script>

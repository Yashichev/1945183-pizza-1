<template>
  <div class="content__diameter">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите размер</h2>
      <div class="sheet__content diameter">
        <template v-for="size in sizes">
          <label
            :class="`diameter__input diameter__input--${size.value}`"
            :key="size.id"
          >
            <RadioButton
              rbName="diameter"
              rbClass="visually-hidden"
              :rbValue="size.value"
              :isChecked="size.id == selectedSizes"
              @changeValue="changeSize"
            />
            <span>{{ size.name }}</span>
          </label>
        </template>
      </div>
    </div>
  </div>
</template>
<script>
import RadioButton from "@/common/components/RadioButton";
import { SET_ENTITY } from "@/store/mutations-types";
import { mapState, mapMutations } from "vuex";
export default {
  name: "BuilderSizeSelector",
  components: { RadioButton },
  computed: {
    ...mapState(["sizes", "selectedSizes"]),
  },
  methods: {
    ...mapMutations({ changeSelectedSizes: SET_ENTITY }),
    changeSize(value) {
      this.changeSelectedSizes({
        module: null,
        entity: "selectedSizes",
        value: value,
      });
    },
  },
};
</script>

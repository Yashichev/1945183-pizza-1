<template>
  <div class="counter counter--orange ingredients__counter">
    <button
      type="button"
      class="counter__button counter__button--minus"
      @click="minus"
      :disabled="selectedValue == 0"
    >
      <span class="visually-hidden">Меньше</span>
    </button>
    <input
      type="text"
      class="counter__input"
      :name="counterName"
      :price="counterPrice"
      :value="selectedValue"
    />
    <button
      type="button"
      class="counter__button counter__button--plus"
      @click="plus"
      :disabled="selectedValue > 3"
    >
      <span class="visually-hidden">Больше</span>
    </button>
  </div>
</template>
<script>
export default {
  name: "ItemCounter",
  props: {
    counterName: {
      type: String,
      required: true,
    },
    counterPrice: {
      type: Number,
      default: 0,
    },
    selectedValue: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  methods: {
    minus() {
      if (this.selectedValue > 0) {
        let s_val = this.selectedValue - 1;
        this.changeIngredient("remove", s_val);
      }
    },
    plus() {
      if (this.selectedValue < 3) {
        let s_val = this.selectedValue + 1;
        this.changeIngredient("add", s_val);
      }
    },
    changeIngredient(type, s_val) {
      this.$emit(
        "changeIngredient",
        {
          value: this.counterName,
          price: this.counterPrice,
          count: s_val,
        },
        type
      );
    },
  },
};
</script>

<template>
  <div class="counter counter--orange ingredients__counter">
    <button
      type="button"
      class="counter__button counter__button--minus"
      @click="minus"
      :disabled="selected_value == 0"
    >
      <span class="visually-hidden">Меньше</span>
    </button>
    <input
      type="text"
      class="counter__input"
      :name="c_name"
      :price="c_price"
      :value="selected_value"
    />
    <button
      type="button"
      class="counter__button counter__button--plus"
      @click="plus"
      :disabled="selected_value > 10"
    >
      <span class="visually-hidden">Больше</span>
    </button>
  </div>
</template>
<script>
export default {
  name: "ItemCounter",
  props: {
    c_name: {
      type: String,
      required: true,
    },
    c_price: {
      type: Number,
      default: 0,
    },
    selected_value: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  methods: {
    minus() {
      if (this.selected_value > 0) {
        let s_val = this.selected_value - 1;
        this.changeIngredient("remove", s_val);
      }
    },
    plus() {
      if (this.selected_value < 10) {
        let s_val = this.selected_value + 1;
        this.changeIngredient("add", s_val);
      }
    },
    changeIngredient(type, s_val) {
      console.log("-" + type);
      console.log("-" + s_val);
      this.$emit(
        "changeIngredient",
        {
          value: this.c_name,
          price: this.c_price,
          count: s_val,
        },
        type
      );
    },
  },
};
</script>

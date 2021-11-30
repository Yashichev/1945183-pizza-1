<template>
  <div class="counter counter--orange ingredients__counter">
    <button
      type="button"
      class="counter__button counter__button--minus"
      @click="minus"
      :disabled="c_value == 0"
    >
      <span class="visually-hidden">Меньше</span>
    </button>
    <input
      type="text"
      class="counter__input"
      :name="c_name"
      :price="c_price"
      :value="c_value"
    />
    <button
      type="button"
      class="counter__button counter__button--plus"
      @click="plus"
      :disabled="c_value > 10"
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
  data() {
    return {
      c_value: 0,
    };
  },
  methods: {
    minus() {
      if (this.c_value > 0) {
        this.c_value--;
        this.changeIngredient("remove");
      }
    },
    plus() {
      if (this.c_value < 10) {
        this.c_value++;
        this.changeIngredient("add");
      }
    },
    changeIngredient(type) {
      this.$emit(
        "changeIngredient",
        {
          name: this.c_name,
          price: this.c_price,
          count: this.c_value,
        },
        type
      );
    },
  },
};
</script>

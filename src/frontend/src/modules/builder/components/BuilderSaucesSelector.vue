<template>
  <div class="ingredients__sauce">
    <p>Основной соус:</p>
    <label
      v-for="sauce in sauces"
      :key="sauce.id"
      class="radio ingredients__input"
    >
      <RadioButton
        rb_name="sauce"
        :rb_value="sauce.value"
        :is_checked="sauce.value == selected_sauces"
        @changeValue="changeSauces"
      />
      <span>{{ sauce.name }}</span>
    </label>
  </div>
</template>
<script>
import RadioButton from "@/common/components/RadioButton";
export default {
  name: "BuilderSaucesSelector",
  components: { RadioButton },
  props: {
    sauces: {
      type: Array,
      required: true,
    },
    selected_sauces: {
      type: String,
      required: true,
    },
  },
  methods: {
    changeSauces(value) {
      this.$emit("changeSauces", value);
    },
  },
};
</script>

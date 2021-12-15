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
              :isChecked="size.id == 2"
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
export default {
  name: "BuilderSizeSelector",
  components: { RadioButton },
  props: {
    sizes: {
      type: Array,
      required: true,
    },
    selectedSize: {
      type: String,
      required: false,
    },
  },
  methods: {
    changeSize(value) {
      this.$emit("changeSize", value);
    },
  },
};
</script>

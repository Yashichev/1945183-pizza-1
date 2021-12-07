<template>
  <input
    type="radio"
    :name="rbName"
    :value="rbValue"
    :class="rbClass"
    :checked="isChecked"
    @change="changeValue"
  />
</template>
<script>
export default {
  name: "RadioButton",
  props: {
    rbName: {
      type: String,
      required: true,
    },
    rbValue: {
      type: String,
      required: false,
    },
    rbClass: {
      type: String,
      required: false,
    },
    isChecked: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    changeValue(event) {
      this.$emit("changeValue", event.target.value);
    },
  },
};
</script>

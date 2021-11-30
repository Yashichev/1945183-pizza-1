<template>
  <input
    type="radio"
    :name="rb_name"
    :value="rb_value"
    :class="rb_class"
    :checked="is_checked"
    @change="changeValue"
  />
</template>
<script>
export default {
  name: "RadioButton",
  props: {
    rb_name: {
      type: String,
      required: true,
    },
    rb_value: {
      type: String,
      required: false,
    },
    rb_class: {
      type: String,
      required: false,
    },
    is_checked: {
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

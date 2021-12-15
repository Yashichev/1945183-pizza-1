<template>
  <div class="content__result">
    <p>Итого: {{ total }} ₽</p>
    <button type="button" class="button" :disabled="total == 0">
      Готовьте!
    </button>
  </div>
</template>
<script>
export default {
  props: {
    total: {
      type: Number,
      default: 0,
    },
  },
};
</script>

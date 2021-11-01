<template>
  <div id="app">
    <IndexPizza />
  </div>
</template>

<script>
import IndexPizza from "@/views/Index";
export default {
  name: "App",
  components: {
    IndexPizza,
  },
};
</script>

<style lang="scss">
@import "~@/assets/scss/app";
</style>

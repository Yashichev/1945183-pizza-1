<template>
  <div id="app">
    <AppLayout />
    <IndexPizza />
  </div>
</template>

<script>
import AppLayout from "@/layouts/AppLayout";
import IndexPizza from "@/views/Index";
export default {
  name: "App",
  components: {
    AppLayout,
    IndexPizza,
  },
};
</script>

<style lang="scss">
@import "~@/assets/scss/app";
</style>

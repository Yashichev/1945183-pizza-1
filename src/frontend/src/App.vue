<template>
  <div id="app">
    <component :is="appLayout" />
  </div>
</template>

<script>
const defaultLayout = "AppLayoutDefault";
export default {
  name: "App",
  computed: {
    appLayout() {
      const layout = this.$route.meta.layout || defaultLayout;
      return () => import(`@/layouts/${layout}.vue`);
    },
  },
};
</script>

<style lang="scss">
@import "~@/assets/scss/app";
</style>

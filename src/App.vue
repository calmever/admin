<template>
  <div id="app">
    <!-- <test></test> -->
    <home />
    <router-view />
  </div>
</template>
<script>
import test from "./views/test.vue";
import Home from "./views/home/home";

export default {
  components: { test, Home },
};
</script>
<style>
@import url("./assets/css/base.css");
@import url("./assets/css/normalize.css");

html,
body,
#app {
  height: 100%;
}
</style>

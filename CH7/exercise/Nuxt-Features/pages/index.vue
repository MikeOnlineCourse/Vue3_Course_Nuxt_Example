<script>
import login from "../components/login.vue";
import TestBtn from "../components/TestBtn.vue";
export default {
  components: {
    login,
    TestBtn
  }
};
</script>

<template>
  <div id="app">
    <login />
    <!-- <TestBtn/> -->
  </div>
</template>

<style lang="scss" scoped>
#app {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>

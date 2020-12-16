<script>
import login from "../components/login.vue";
import TestBtn from "../components/TestBtn.vue";
export default {
  components: {
    login,
    TestBtn
  },
  computed: {
    isLogin() {
      return this.$store.getters.loginStatue;
    }
  },
  mounted() {
    if (this.$cookies.get("auth")?.token) {
      this.$store.dispatch("handIsLogin", true);
    }
  }
};
</script>

<template>
  <div id="app">
    <login v-if="!isLogin" />
    <TestBtn v-if="isLogin" />
  </div>
</template>

<style lang="scss" scoped>
#app {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>

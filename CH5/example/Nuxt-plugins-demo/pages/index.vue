<script>
export default {
  async asyncData({ $axios, $DemoTest }) {
    // const res = await $axios.get(
    //   "https://vue-lessons-api.herokuapp.com/photo/list"
    // );
    $DemoTest.log("asyncData");
  },
  methods: {
    handClick() {
      this.$notify({
        group: "foo",
        title: "Important message",
        text: "Hello user! This is a notification!"
      });
    }
  },
  mounted() {
    this.$localStorage.set("userData", { name: "mike", age: 12 });
    console.log(this.$localStorage.get("ddddd"));

    this.$cookies.set("user", { email: "mike@gmail.com" });

    console.log(this.$cookies.get("user"));
  }
};
</script>

<template>
  <div class="container">
    <div>
      <Logo />
      <button @click="handClick">alert</button>
      <h1 class="title">
        Nuxt-plugins-demo
      </h1>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

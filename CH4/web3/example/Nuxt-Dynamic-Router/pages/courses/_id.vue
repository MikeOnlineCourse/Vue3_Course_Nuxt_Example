<script>
import axios from "axios";
export default {
  async asyncData(context) {
    const pageDetal = { data: {} };
    let isError = false;
    try {
      const res = await axios.get(
        `https://vue-lessons-api.herokuapp.com/courses/${context.params.id}`
      );
      pageDetal.data = res.data.data[0];
    } catch (error) {
      isError = true;
      pageDetal.data["error_message"] = error.response.data.error_message;
    }

    return { pageDetal, isError };
  },
  data() {
    return {
      timer: null,
      pageDetal: {}
    };
  },
  methods: {
    openLoading() {
      this.$nuxt.$loading.start();

      setTimeout(() => {
        this.$nuxt.$loading.finish();
      }, 2000);
    }
  },
  mounted() {
    if (this.isError) {
      this.timer = setTimeout(() => {
        this.$router.go(-1);
      }, 3000);
    }
  },
  destroyed() {
    clearTimeout(this.timer);
  }
};
</script>
<template>
  <div>
    <div v-if="!isError">
      <h1>{{ pageDetal.data.name }}</h1>
      <h2>NTD: {{ pageDetal.data.money }}</h2>
      <img :src="pageDetal.data.photo" alt="" />
      <div>
        <img :src="pageDetal.data.teacher.img" alt="" />
        <p>{{ pageDetal.data.teacher.name }}</p>
      </div>
      <button @click="openLoading">loading</button>
    </div>
    <h1 v-if="isError">{{ pageDetal.data.error_message }}</h1>
  </div>
</template>

<style></style>

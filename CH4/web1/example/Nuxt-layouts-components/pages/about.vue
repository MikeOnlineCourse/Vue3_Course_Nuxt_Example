<script>
export default {
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: "這是關於我們的頁面"
        }
      ]
    };
  },
  data() {
    return {
      title: "Mike"
    };
  }
};
</script>
<template>
  <div>
    <h1>about</h1>
  </div>
</template>

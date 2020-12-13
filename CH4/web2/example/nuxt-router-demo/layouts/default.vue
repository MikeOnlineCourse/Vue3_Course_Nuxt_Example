<template>
  <div>
    <div id="nav">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/about">About</NuxtLink>
    </div>
    <div id="main">
      <Nuxt />
    </div>
  </div>
</template>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html,
body {
  width: 100%;
  height: 100%;
}
#__nuxt,
#__layout {
  width: 100%;
  height: 100%;
}
#__layout > div {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
//   width: 100%;
//   height: 100%;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// }
#nav {
  width: 20%;
  height: 100%;
  background-color: tomato;
  padding-top: 10%;
  a {
    display: block;
    width: 100%;
    margin-bottom: 20px;
    font-size: 30px;
    font-weight: bold;
    color: #2c3e50;
    &.router-link-active {
      color: #fff;
    }
  }
}
#main {
  width: 80%;
  height: 100%;
  background-color: wheat;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

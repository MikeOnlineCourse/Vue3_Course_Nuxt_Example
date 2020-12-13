<template>
  <div class="about">
    <nav>
      <NuxtLink to="/about/guide">Guide</NuxtLink>
      <NuxtLink to="/about/reference">API Reference</NuxtLink>
      <NuxtLink to="/about/changelog">Changelog </NuxtLink>
      <NuxtLink to="/about/gitHub">GitHub</NuxtLink>
    </nav>
    <main>
      <NuxtChild />
    </main>
  </div>
</template>
<style lang="scss" scoped>
.about {
  > nav {
    > a {
      margin: 0 10px;
      color: #2c3e50;
      font-weight: bold;
      &.router-link-exact-active {
        color: rebeccapurple;
      }
    }
  }
}
</style>

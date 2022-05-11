<template>
  <div id="app">
    <nav>
      <!-- <div class="clickItem" @click="goToAboutPage">
        <span>
          GoToAbout
        </span>
      </div> -->
      <router-link :to="{name: 'Dashboard', params: {page: '1'} }">Dashboard</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/notfound">notfound</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  methods: {
    goToAboutPage() {
      this.$router.push({
        name: "Dashboard",
      })
    }
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1{
  font-size: 50px;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

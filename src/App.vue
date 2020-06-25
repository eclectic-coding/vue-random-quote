<template>
  <div id="app">
    <Home></Home>
  </div>
</template>

<script>
import Home from "@/components/Home.vue";

export default {
  name: "App",
  components: {
    Home,
  },
};
</script>

<style lang="scss">
*,
*::before,
*::after {
  box-sizing: inherit;
  margin: 0;
}

:root {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 62.5%;
}

#app {
  text-align: center;
  color: rgb(34, 34, 34);
}

body {
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.45),
      rgba(0, 0, 0, 0.45)
    ),
    url(./assets/books.jpg);
  background-size: cover;
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 1.7;
}

a {
  color: #b42326;
  text-decoration: none;

  &:hover {
    cursor: pointer;
    font-weight: bold;
  }
}
</style>

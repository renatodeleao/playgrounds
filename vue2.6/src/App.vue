<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <SimplebarVue />
  </div>
</template>

<script>
import SimplebarVue from './demos/SimplebarVue.vue'

export default {
  name: 'App',
  components: {
    SimplebarVue
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

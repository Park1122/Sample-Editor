<template>
  <div id="app">
    <h1>Sample Editor</h1>
    <hr>
    <button><router-link to="/edit">Editor</router-link></button>
    <button><router-link to="/view">Viewer</router-link></button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',

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

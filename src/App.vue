<template>
  <div id="app">
    <todos></todos>
  </div>
</template>

<script>
  import Todos from './components/Todos.vue';

  export default {
    name: 'app',
    components: {
      Todos
    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<style src="./assets/css/app.css"></style>



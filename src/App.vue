<template>
    <div id="app">
        <nav class="navbar navbar-default">
          <div class="container-fluid">
            <div class="navbar-header">
              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <a class="navbar-brand" href="#">Project Line VX</a>
            </div>
        
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                  <!-- Injection du component SEARCH-LINE -->
                  <search-line></search-line>
                
            </div>
          </div>
        </nav>

        <!-- Injection du component ADD-LINE comprenant le component LINE-LIST -->
        <add-line></add-line>

    </div>
</template>

<script>
    import AddLine from './components/AddLine.vue';
    import SearchLine from './components/SearchLine.vue';

    import axios from 'axios';

    export default {
        name: 'app',
        components: {
            'add-line': AddLine,
            'search-line': SearchLine,
        },
        data () {
            return {
                apiUrl: 'https://jsonplaceholder.typicode.com/users'
            }
        },
        created: function() {
            axios.get(this.apiUrl)
                .then((response) => {
                    this.$store.dispatch('chargeState', response.data);
                })
        }
    }
</script>

<style>
    body {
        margin-top: 15px;
    }
    
    .space {
        margin-bottom: 20px;
    }
</style>

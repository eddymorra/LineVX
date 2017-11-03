<template>
    <form class="navbar-form navbar-left">
        <div class="form-group">
            <input type="text" v-model="search" @keyup="searchLine" placeholder="Search lines ..." class="form-control">
        </div>
    </form>
</template>

<script>
    export default {
        name: 'search-line',
        data () {
            return {
                search: ''
            }
        },
        methods: {
            searchLine: function() {
                this.$store.dispatch('searchLine', this.search);
            }
        }
    }
</script>

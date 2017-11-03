<template>
    <div>
        <input type="text" class="form-control space" v-model="input" @keyup.enter="addLine(input)" placeholder="Add line ...">
        <lines-list></lines-list>
    </div>
</template>

<script>
    import LinesList from './LinesList.vue';
    import {mapActions} from 'vuex';
    import {mapGetters} from 'vuex';

    export default {
        name: 'add-line',
        data () {
            return {
                input: ''
            }
        },
        components: {
            'lines-list': LinesList
        },
        methods: {
            addLine: function(name) {
                this.$store.dispatch('addLine', name);
                this.input = '';
            }
        }
    }
</script>

<style>

</style>

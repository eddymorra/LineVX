<template>
    <div id="product-list-one">
        <ul>
            <li v-for="line in lines" :key="line.id">
                <div v-if="line.edited">
                    <input type="text" v-model="newValue" @keyup.enter="updateLine(line)" class="form-control">
                </div>
                <div v-else>
                    <span>{{ line.name }}</span>
                    <div class="buttonright">
                        <button v-on:click="editLine(line)" class="btn btn-warning">Edit</button>
                        <button v-on:click="deleteLine(line.id)" class="btn btn-danger">Delete</button>
                    </div>
                    <div class="clear"></div>
                </div>
                <hr>
            </li>
        </ul>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';
    import {mapGetters} from 'vuex';

    export default {
        data () {
            return {
                newValue: ''
            }
        },
        computed: {
            ...mapGetters([
                'lines'
            ])
        },
        methods: {
            ...mapActions([
                'deleteLine'
            ]),
            editLine: function(line) {
                this.newValue = line.name;
                this.$store.dispatch('editLine', line.id);
            },
            updateLine: function(line) {
                let value = {id: line.id, name: this.newValue}
                this.$store.dispatch('updateLine', value)
                this.editLine(line)
            }
        }
    }
</script>

<style scoped>
    .clear {
        clear: both;
    }

    ul li {
        margin-left: -36px;
        list-style: none;
    }

    ul li span {
        float: left;
        font-size: 16px;
        margin-top: 8px;
    }

    input {
        margin-bottom: 10px;
    }

    .buttonright {
        float: right;
    }
</style>

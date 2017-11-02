<template>
  <section class="todoapp">
      <header class="header">
          <h1>Todos</h1>
          <input type="text" class="form-control" placeholder="Ajouter une ligne" v-model="newTodo" @keyup.enter="addTodo">
      </header>
      <div class="main">
          <input type="checkbox" class="toggle-all" v-model="allDone">
          <ul class="todo-list">
              <li class="todo" v-for="todo in filteredTodos" :key="todo.id" :class="{completed: todo.completed}">
                  <div class="view">
                      <input type="checkbox" v-model="todo.completed" class="toggle">
                      <label>{{ todo.name }}</label>
                      <button class="destroy" @click.prevent="deleteTodo(todo)">Supprimer</button>
                  </div>
                  <hr>
              </li>
          </ul>
      </div>
      <footer class="footer" v-show="todos.length > 0">
          <span class="todo-count"><strong>{{ remaining }}</strong> tâches à faire</span>
          <ul class="filters">
              <li><a href="" :class="{selected: filter === 'all'}" @click.prevent="filter = 'all'">Toutes</a></li>
              <li><a href="" :class="{selected: filter === 'todo'}" @click.prevent="filter = 'todo'">A faire</a></li>
              <li><a href="" :class="{selected: filter === 'done'}" @click.prevent="filter = 'done'">Faites</a></li>
          </ul>
      </footer>
  </section>
</template>

<script>
    export default {
        data () {
            return {
                todos: [
                    {id: 0, name: 'Tache à faire 1', completed: false},
                    {id: 1, name: 'Tache à faire 2', completed: false},
                    {id: 2, name: 'Tache à faire 3', completed: false},
                    {id: 3, name: 'Tache à faire 4', completed: false}
                ],
                newTodo: '',
                filter: 'all'
            }
        },
        methods: {
            addTodo () {
                this.todos.push({id: Date.now(), name: this.newTodo, completed: false});
                this.newTodo = '';
            },
            deleteTodo (todo) {
                this.todos = this.todos.filter(i => i !== todo);
            }
        },
        computed: {
            remaining () {
                return this.todos.filter(todo => !todo.completed).length
            },
            filteredTodos () {
                if (this.filter === 'todo') {
                    return this.todos.filter(todo => !todo.completed)
                } else if (this.filter === 'done') {
                    return this.todos.filter(todo => todo.completed)
                }
                return this.todos;
            },
            allDone: {
                get () {
                    return this.remaining === 0
                },
                set (value) {
                    this.todos.forEach(todo => {
                        todo.completed = value;
                    });
                }
            }
        },
        directives: {
            focus (el, value) {
                if (value) {
                    el.focus()
                }
            }
        }
    }
</script>

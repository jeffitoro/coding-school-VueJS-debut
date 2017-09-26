<template>
    <div id="app" class="container">
        <h1 class="text-center">
            <span v-on:mouseover="spanAnimation" v-on:mouseout="spanExitAnimation" style="display:inline-block">{{ titre }}</span>
        </h1>
        <div class="text-center">
            <form v-on:submit.prevent="submitTask" action="" class="form-inline" id="form-task">
                <input v-on:focus="focusActive" v-bind:class="{error: isActive}" v-model="task" type="text" id="input-task" class="form-control" placeholder="new-task">
                <button type="submit" class="btn btn-primary" id="btn-add-task">Add task</button>
            </form>
        </div>
        <h2>tasks
            <small>Filtre: </small>
            <button type="button" class="btn btn-success filter" v-on:click="clickFilter">All</button>
            <button type="button" class="btn btn-success filter" v-on:click="clickFilter">Todo</button>
            <button type="button" class="btn btn-success filter" v-on:click="clickFilter">Done</button>
        </h2>
        <ul class="list-group" id="list-tasks" v-bind:class="filter">
            <add-task v-for="task in tasks" v-bind:taskprop="task" v-bind:key="task.id"></add-task>
        </ul>
    </div>
</template>

<script>
import axios from "axios";
import taskitem from './Task.vue';
// import Vue from "../node_modules/vue/dist/vue";

export default {
    components: {
        addTask: taskitem //add-task component reçoit le Task.vue
    },
    created: function() {
        let self = this;
        axios.get("http://127.0.0.1:8080/todo.json")
            .then(function(reponse) {
                self.$data.tasks = reponse.data.tasks;
            })
            .catch(function(error) {
                console.log(error);
            });
    },
    data() {
        return {
            titre: "Todo List With VueJs",
            task: "",
            isActive: false,
            tasks: [],
            filter: "all",
            isMouseOver: false
        }
    },
    methods: {
        submitTask: function() {
            if (this.task == "") {
                this.isActive = true;
                document.activeElement.blur();
            } else {
                this.tasks.push({ id: this.tasks.length + 1, txt: this.task, status: "todo" });
                this.task = "";
                console.dir(this.tasks);
            }
        },
        focusActive: function() {
            this.isActive = false;
        },
        clickFilter(event) {
            this.$data.filter = event.toElement.textContent.toLowerCase();
        },
        spanAnimation() {
            this.$el.querySelector("h1>span").classList.add("animated", "hinge", "flip");
        },
        spanExitAnimation() {
            this.$el.querySelector("h1>span").classList.remove("animated", "hinge", "flip");
        }
    }
}
</script>
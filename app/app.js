Vue.component("add-task", {
    props: ["taskprop"],
    template: '<li class="list-group-item" style="max-height:41px"><form v-on:submit.prevent="editOk" v-if="editActive" style="vertical-align:middle;display:inline-block;width:auto;max-height:41px"><input v-on:focus="focusActive" v-bind:class="{error: isActive}" v-model="taskprop.txt" type="text" class="form-control"style="vertical-align:middle;display:inline-block;width:auto;height:19px"><button type="submit" class="btn btn-primary" style="vertical-align:middle">Ok</button></form><span v-else>{{taskprop.txt}}</span><button v-on:click="addDone" class="pull-right"><i class="fa fa-check-square-o" aria-hidden="true"></i></button><button v-on:click="addUpdtask" class="pull-right"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button><button class="pull-right"><i class="fa fa-trash-o" aria-hidden="true"></i></button></li>',
    data: function () {
        return { editActive: false, isActive: false }
    },
    methods: {
        addDone: function () {
            this.$el.classList.toggle("done");
        },
        addUpdtask: function () {
            this.editActive = true;
        },
        editOk: function () {
            if (this.$props.taskprop.txt == "") {
                this.isActive = true;
                document.activeElement.blur();
            } else {
                this.editActive = false;
            }
        },
        focusActive: function () {
            this.isActive = false;
        }
    }
})
let app = new Vue({
    el: "#app",
    created: function () {
        console.log("hello vue!");
    },
    data: {
        titre: "Todo List With VueJs",
        task: "",
        isActive: false,
        tasks: []
    },
    methods: {
        submitTask: function () {
            if (this.task == "") {
                this.isActive = true;
                document.activeElement.blur();
            } else {
                this.tasks.push({ id: this.tasks.length + 1, txt: this.task, status: "todo" });
                this.task = "";
                console.dir(this.tasks);
            }
        },
        focusActive: function () {
            this.isActive = false;
        }
    }
})
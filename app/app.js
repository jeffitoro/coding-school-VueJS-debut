Vue.component("add-task", {
    props: ["taskprop"],
    template: '<li class="list-group-item"><span id="txt">{{taskprop.txt}}</span><button v-on:click="addDone" class="pull-right"><i class="fa fa-check-square-o" aria-hidden="true"></i></button><button class="pull-right"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button><button class="pull-right"><i class="fa fa-trash-o" aria-hidden="true"></i></button></li>',
    methods: {
        addDone: function () {
            this.$el.classList.toggle("done");
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
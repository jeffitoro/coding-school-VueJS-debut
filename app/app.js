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
            }
        },
        focusActive: function () {
            this.isActive = false;
        }
    }
})
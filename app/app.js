let app = new Vue({
    el: "#app",
    created: function () {
        console.log("hello vue!");
    },
    data: {
        titre: "Todo List With VueJs"
    },
    methods: {
        submitTask: function () {
            console.log("tache soumise");
        }
    }
})
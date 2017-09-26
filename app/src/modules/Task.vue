<template>
    <li class="list-group-item" style="max-height:41px" v-bind:class="taskprop.status" v-on:animationend="deleteAnimation">
        <form v-on:submit.prevent="editOk" v-if="editActive" style="vertical-align:middle;display:inline-block;width:auto;max-height:41px"><input v-on:focus="focusActive" v-bind:class="{error: isActive}" v-model="taskprop.txt" type="text" class="form-control" style="vertical-align:middle;display:inline-block;width:auto;height:19px">
            <button type="submit" class="btn btn-primary" style="vertical-align:middle">Ok</button>
        </form>
        <span v-else>{{taskprop.txt}}</span>
        <button v-on:click="addDone" class="pull-right">
            <i class="fa fa-check-square-o" aria-hidden="true"></i>
        </button>
        <button v-on:click="addUpdtask" class="pull-right">
            <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
        </button>
        <button v-on:click="deletetask" class="pull-right">
            <i class="fa fa-trash-o" aria-hidden="true"></i>
        </button>
    </li>
</template>

<script>
export default {
    props: ["taskprop"],
    data: function() {
        return { editActive: false, isActive: false }
    },
    methods: {
        addDone: function() {
            this.$el.classList.toggle("done");
        },
        addUpdtask: function() {
            this.editActive = true;
        },
        editOk: function() {
            if (this.$props.taskprop.txt == "") {
                this.isActive = true;
                document.activeElement.blur();
            } else {
                this.editActive = false;
            }
        },
        focusActive: function() {
            this.isActive = false;
        },
        deletetask() {
            this.$el.classList.add("animated", "fadeOutLeftBig");
        },
        deleteAnimation() {
            this.$el.parentElement.removeChild(this.$el);
        }
    }
}
</script>
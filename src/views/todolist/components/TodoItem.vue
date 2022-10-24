<script setup>

</script>

<template>
    <transition name="todo" appear>
        <li>
            <label>
                <input type="checkbox" :checked='todo.isEdit'/>
                <span>{{todo.title}}</span>
                <!-- <input type="text"> -->
            </label>
            <button class="btn btn-danger" @click="deleteitem(todo.id)">删除</button>
            <!-- <button class="btn btn-edit">编辑</button> -->
        </li>
    </transition>
</template>

<script>
export default {
    name: 'TodoItem',
    props: {
        todo: Object,
        deletetodo:Function
    },
    methods: {
        deleteitem(id) {
            this.deletetodo(id)
        }
    }
}
</script>

<style lang="scss" scoped>
/*item*/
li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
}

li label {
    float: left;
    cursor: pointer;
}

li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
}

li button {
    float: right;
    display: none;
    margin-top: 3px;
}

li:before {
    content: initial;
}

li:last-child {
    border-bottom: none;
}

li:hover {
    background-color: #ddd;
}

li:hover button {
    display: block;
}

.todo-enter-active {
    animation: todo 0.5s linear;
}
</style>
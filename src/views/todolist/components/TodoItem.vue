<template>
    <transition name="todo" appear>
        <li>
            <label>
                <input type="checkbox" :checked='todo.done' @click="checked(todo.id)" />
                <span v-show="!todo.isEdit">{{ todo.title }}</span>
                <input v-show="todo.isEdit" type="text" :value="todo.title" @blur="handleBlur(todo, $event)"
                    ref="inputTitle">
            </label>
            <button class="btn btn-danger" @click="deleteitem(todo.id)">删除</button>
            <button class="btn btn-edit" @click="handleEdit(todo)">编辑</button>
        </li>
    </transition>
</template>

<script>
import $bus from '@Bus/eventBus';
export default {
    name: 'TodoItem',
    props: {
        todo: Object
    },
    methods: {
        checked(id) {
            $bus.emit('checkeddone', id)
        },
        deleteitem(id) {
            $bus.emit('deletetodo', id)
        },
        handleEdit(todo) {
            todo.isEdit = true
            this.$nextTick(function () {
                this.$refs.inputTitle.focus()
            })
        },
        handleBlur(todo, e) {
            todo.isEdit = false
            let param = {
                id: todo.id,
                value:e.target.value
            }
            $bus.emit('updatatodo',param)
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
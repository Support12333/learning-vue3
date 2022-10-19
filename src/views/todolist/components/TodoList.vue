<script setup>

</script>

<template>
    <ul class="todo-main">
        <item v-for="item in list" :key="item.id" :item='item' />
    </ul>
</template>

<script>
import item from "./TodoItem.vue"
export default {
    name: 'TodoList',
    components: {
        item
    },
    props:['list']
}
</script>

<style lang="scss" scoped>
/*main*/
.todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
}

.todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
}
</style>
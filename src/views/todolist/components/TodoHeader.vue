<script setup>

</script>

<template>
    <div class="todo-header">
        <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="title" @keyup.enter="add" />
    </div>
</template>

<script>
export default {
    name: 'TodoHeader',
    data() {
        return {
            title: ''
        }
    },
    methods: {
        add(e) {
            const id = new Date().getTime()
            if (!this.title) return alert("不能为空")
            const todo = {
                id: id,
                title: this.title,
                isEdit: false
            }
            this.$emit('addtodo', todo)
            this.title = ''
        }
    }
}
</script>

<style lang="scss" scoped>
.todo-header input {
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
}

.todo-header input:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
}
</style>
<template>
    <div class="todo-footer" v-show="total">
        <label>
            <input type="checkbox" v-model='checkboxAll' />
        </label>
        <span>
            <span>已完成{{ doneTotal }}</span> / 全部{{ total }}
        </span>
        <button class="btn btn-danger" @click="clearAllTodo">清除已完成任务</button>
    </div>
</template>

<script>
export default {
    name: 'TodoFooter',
    props: {
        list: Array,
        checkAll: Function,
        clearAll: Function
    },
    computed: {
        //总数
        total() {
            return this.list.length
        },
        //完成数
        doneTotal() {
            return this.list.reduce((pre, current) => pre + (current.done ? 1 : 0), 0)
        },
        //是否全选
        checkboxAll: {
            get() {
                return this.doneTotal === this.total && this.total > 0
            },
            set(value) {
                this.checkAll(value)
            }
        }
    },
    methods: {
        //清除已完成
        clearAllTodo() {
            this.clearAll()
        }
    }
}
</script>

<style lang="scss" scoped>
/*footer*/
.todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
}

.todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
}

.todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
}

.todo-footer button {
    float: right;
    margin-top: 5px;
}
</style>
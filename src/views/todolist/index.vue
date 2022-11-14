<script setup>

</script>

<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <TodoHeader @addtodo='addtodo' />
      <TodoList :list='list' :checkeddone="checkeddone" :deletetodo='deletetodo' />
      <TodoFooter :list='list' @checkAll='checkAll' @clearAll='clearAll'/>
    </div>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'
export default {
  name: 'index',
  data() {
    return {
      list: []
    }
  },
  components: {
    TodoHeader,
    TodoList,
    TodoFooter
  },
  methods: {
    //添加
    addtodo(todo) {
      this.list.unshift(todo)
    },
    //勾选
    checkeddone(id) {
      this.list.filter(item => { return item.id === id ? item.done = !item.done : '' })
    },
    //删除
    deletetodo(id) {
      this.list = this.list.filter(item => { return item.id !== id })
    },
    //全选or取消
    checkAll(value) {
      this.list.forEach(item => {
        item.done = value
      })
    },
    //清除已完成
    clearAll() {
      this.list = this.list.filter(item => !item.done)
    }
  },
  watch: {
    list(value) { 
      localStorage.setItem('todos',JSON.stringify(value))
    }
  }
}
</script>

<style lang="scss" scoped>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-edit {
  color: #fff;
  background-color: lightgreen;
  border: 1px solid green;
  margin-right: 5px;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn-edit:hover {
  color: #fff;
  background-color: green;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}

.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
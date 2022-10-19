<script setup>
import { ref, onMounted, computed } from 'vue'

const count = ref(0)
const inputRef = ref < HTMLElement | null > (null)
const list = [{ id: 1, name: '大白', age: '12' }, { id: 2, name: '大2', age: '11' }, { id: 3, name: '大3', age: '14' }]

const update = function () {
  count.value = count.value + 1
}

onMounted(() => {
  inputRef.value && inputRef.value.focus()
})

computed({
  fillist() { 
    
  }
})

update()

</script>

<template>
  <div>{{count}}</div>
  <div v-for="item in list" :key="item.id">{{item.name}}</div>
  <el-button @click="update">更新</el-button>
  <input type="text" ref="inputRef">

  <page name="张三" age="18"/>
</template>

<script>
import page from "@components/page.vue"
export default {
  name: 'index',
  components: {
    page
  }
} 
</script>

<style lang="scss" scoped>

</style>
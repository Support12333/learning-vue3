<script setup>
import { ref } from 'vue'
import { regionData, CodeToText } from 'element-china-area-data'

const options = ref(regionData)
const selectedOptions = ref([])

const handleChange = () => {
    console.log(selectedOptions.value,'11')
    if (selectedOptions.value[0] != null && selectedOptions.value[1] != null) {
        console.log(selectedOptions.value[2],11);
        // const str = CodeToText[selectedOptions.value[0]] + '/' + CodeToText[selectedOptions.value[1]]
        // console.log(str,'str')
    }
}
</script>
​
<template>
    <div>
        <el-cascader size="large" :options="options" v-model="selectedOptions" @change="handleChange" />
    </div>
</template>
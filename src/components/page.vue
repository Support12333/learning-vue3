<script setup>
</script>

<template>
<h2>{{name}}</h2>
<h2>{{age}}</h2>
</template>

<script>
export default {
  name: 'page',
  props: ['name','age']
}
</script>

<style lang="scss" scoped>

</style>
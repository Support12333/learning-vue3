<template>
    <div>
        <input ref="fileRef" type="file" webkitdirectory @change="change(e)">
    </div>
</template>

<script>
export default {
    name: 'index',
    methods: {
        change(e) {
            console.log(this.$refs.fileRef.files);

        }
    }
}
</script>

<style lang="scss" scoped></style>
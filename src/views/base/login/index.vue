<script setup>
import { ref, reactive } from 'vue'
import { ElMessage } from 'element-plus'

const onfrom = ref(null)
const params = reactive({})
const rules = reactive({})
//提交表单
const submitForm = async () => {
  await onfrom.value.validate(async valid => {
    console.log(valid);
  })
}

</script>

<template>
  <div class="box">
    <div class="information">
      <el-form class="onfrom" ref="onfrom" :model="params" status-icon :rules="rules">
        <div class="title">登录</div>
        <el-form-item label="phone" prop="phone">
          <el-input v-model="params.phone" type="text" autocomplete="off" />
        </el-form-item>
        <el-form-item label="Password" prop="password">
          <el-input v-model="params.password" type="password" autocomplete="off" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm(ruleFormRef)">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index'
}
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100%;

  .information {
    width: 430px;
    height: 330px;
    margin: 0 auto;
    padding: 20px;
    // @include flex(center,center);
    border: 1px solid #EEE;
    box-shadow: 0 20px 40px rgba(0, 0, 0, .08);
    border-radius: 6px;

    &:deep(.onfrom) {

      .title {
        font-size: 18px;
        line-height: 24px;
        text-align: center;
        margin-bottom: 12px;
      }
    }
  }
}
</style>
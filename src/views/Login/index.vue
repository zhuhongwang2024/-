<template>
  <div class="login_body">
    <div class="bg" />
    <div class="box">
      <div class="title">智慧园区-登录</div>
      <el-form ref="form" :model="formData" :rules="rules">
        <el-form-item label="账号" prop="username">
          <el-input v-model="formData.username" />
        </el-form-item>

        <el-form-item label="密码" prop="password">
          <el-input v-model="formData.password" />
        </el-form-item>

        <el-form-item prop="remember">
          <el-checkbox v-model="formData.remember">记住我</el-checkbox>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" class="login_btn" @click="doLogin">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { FORMDATA_KEY } from '@/constants/KEY'
import user from '@/store/modules/user';
export default {
  name: 'Login',
  data() {
    return {
      formData: {
        username: '',
        password: 'Hmzs%001',
        remember: false
      },
      rules: {
        username: [
          { require: true, message: '请输入账号', trigger: ['blur', 'change'] },
          { min: 2, max: 12, message: '账号长度在2到12个字符之间', trigger: ['blur', 'change'] }
        ],
        password: [
          { require: true, message: '请输入密码', trigger: ['blur', 'change'] },
          { min: 3, max: 12, message: '密码长度在3到12个字符之间', trigger: ['blur', 'change'] }
        ]
      }
    }
  },
  created() {
    const userInfo = JSON.parse(localStorage.getItem(FORMDATA_KEY))
    if (userInfo) {
      this.formData = userInfo
    }
  },
  methods: {
    async doLogin() {
      await this.$refs.form.validate()
      this.$store.dispatch('user/login', this.formData)
      if (this.formData.remember) {
        localStorage.setItem(FORMDATA_KEY, JSON.stringify(this.formData))
      } else {
        localStorage.removeItem(FORMDATA_KEY)
      }
      this.$router.push('/workbench')
    }
  }

}

</script>

<style scoped lang="scss">
.login_body {
  display: flex;
}

.bg {
  width: 60vw;
  height: 100vh;
  background: url('~@/assets/login-bg.svg') no-repeat;
  background-position: right top;
  background-size: cover;
}

.box {
  margin: 200px 10% 0;
  flex: 1;

  .title {
    padding-bottom: 76px;
    font-size: 26px;
    font-weight: 500;
    color: #1e2023;
  }

  ::v-deep() {
    .ant-form-item {
      display: flex;
      margin-bottom: 62px;
      flex-direction: column;
    }

    .ant-form-item-label label {
      font-size: 16px;
      color: #8b929d;
    }

    .ant-input,
    .ant-input-password {
      border-radius: 8px;
    }
  }
}

.login_btn {
  width: 100%;
}
</style>

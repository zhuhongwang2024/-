<template>
  <div>
    <el-container>
      <el-header>
        <el-page-header @back="$router.back()" title="返回" content="添加月卡" />
        <p>黑马管理员</p>
      </el-header>
      <el-main>
        <div class="main-top">
          <h2>车辆信息</h2>
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="活动名称" prop="name">
              <el-input v-model="ruleForm.name" size="small"></el-input>
            </el-form-item>
            <el-form-item label="活动名称" prop="name">
              <el-input v-model="ruleForm.name" size="small"></el-input>
            </el-form-item>
            <el-form-item label="活动名称" prop="name">
              <el-input v-model="ruleForm.name" size="small"></el-input>
            </el-form-item>
            <el-form-item label="活动名称" prop="name">
              <el-input v-model="ruleForm.name" size="small"></el-input>
            </el-form-item>
          </el-form>
        </div>

        <div class="main-footer">
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="活动名称" prop="name">
              <el-date-picker value-format="yyyy-MM-dd" type="daterange" range-separator="至" start-placeholder="开始日期"
                end-placeholder="结束日期" />
            </el-form-item>
            <el-form-item label="活动名称" prop="name">
              <el-input v-model="ruleForm.name" size="small"></el-input>
            </el-form-item>
            <el-form-item label="活动名称" prop="name">
              <el-input v-model="ruleForm.name" size="small"></el-input>
            </el-form-item>
          </el-form>
        </div>

      </el-main>
      <el-footer>
        <el-button size="medium">重置</el-button>
        <el-button type="primary" size="medium">确定</el-button>
      </el-footer>
    </el-container>

  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        name: '',
      },
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    goBack() {
      this.$router.back()
      console.log('go back');
    }
  },
};
</script>

<style lang="scss" scoped>
.el-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
}

.el-main {
  background-color: #f4f6f8;
  background: #f4f6f8;
  padding: 1px 130px 16px;

  // height: 76vh;
  .main-top {
    background-color: white;
    box-sizing: border-box;

    h2 {
      min-height: 48px;
      margin-bottom: -1px;
      padding: 24px;
      color: #000000d9;
      font-weight: 500;
      font-size: 16px;
      background: transparent;
      border-bottom: 1px solid #f0f0f0;
      border-radius: 2px 2px 0 0;
    }

    .demo-ruleForm {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      padding: 24px;
    }

    .el-form-item {
      margin-left: 28px;
    }

    .el-input {
      width: 324px;
    }
  }

  .main-footer {
    background-color: white;
    box-sizing: border-box;
    margin-top: 10px;

    h2 {
      min-height: 48px;
      margin-bottom: -1px;
      padding: 24px;
      color: #000000d9;
      font-weight: 500;
      font-size: 16px;
      background: transparent;
      border-bottom: 1px solid #f0f0f0;
      border-radius: 2px 2px 0 0;
    }

    .demo-ruleForm {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      padding: 24px;
    }

    .el-form-item {
      margin-left: 28px;
    }

    .el-input {
      width: 324px;
    }
  }

}

.el-footer {
  // height: 80px;
  line-height: 80px;
  margin: auto;
}
</style>

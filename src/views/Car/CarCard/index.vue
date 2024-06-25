<template>
  <div>
    <!-- 查询 -->
    <div class="demo-form-inline">
      <el-form :inline="true" :model="query">
        <el-form-item label="车牌号码:">
          <el-input v-model="query.carNumber" size="small" placeholder="请输入车牌号码"></el-input>
        </el-form-item>
        <el-form-item label="车主姓名:">
          <el-input v-model="query.personName" size="small" placeholder="请输入车主姓名"></el-input>
        </el-form-item>
        <el-form-item label="状态:">
          <el-select v-model="query.cardStatus" size="small" placeholder="未选择">
            <el-option :label="item.name" :value="item.id" v-for="item in cardStatusList" :key="item.id"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" size="small" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!-- 添加列表 -->
    <div class="main">
      <div class="left">
        <el-button type="primary" size="small" @click="$router.push('/cardAdd')">添加月卡</el-button>
        <el-button type="primary" size="small">批量删除</el-button>
      </div>
      <div class="right">
        <i class="el-icon-warning"></i>
        <span>本园区共计 1486 个车位，月卡用户0人，车位占有率 0.00%</span>
      </div>
    </div>
    <!-- 表格 -->
    <div class="main">
      <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%">
        <el-table-column type="selection" width="55">
        </el-table-column>
        <el-table-column type="index" label="序号">
        </el-table-column>
        <el-table-column prop="personName" label="车主名称">
        </el-table-column>
        <el-table-column prop="phoneNumber" label="联系方式">
        </el-table-column>
        <el-table-column prop="carNumber" label="车牌号码">
        </el-table-column>
        <el-table-column prop="carBrand" label="车辆品牌">
        </el-table-column>
        <el-table-column prop="totalEffectiveDate" label="剩余有效天数">
        </el-table-column>
        <el-table-column prop="cardStatus" label="状态" width="66">
          <template slot-scope="scope">
            <p>{{ scope.row.cardStatus === 0 ? '可用' : '已过期' }}</p>
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="190">
          <template>
            <el-button type="text">续費</el-button>
            <el-button type="text">查看</el-button>
            <el-button type="text">编辑</el-button>
            <el-button type="text">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 分页 -->
    <div class="block">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="query.page"
        :page-sizes="[2, 5, 10, 20]" :page-size="query.pageSize" layout="total,  prev, pager, next ,sizes"
        :total="total">
      </el-pagination>
    </div>

  </div>
</template>

<script>
import { queryCardList } from '@/apis/card'
export default {
  data() {
    return {
      //列表参数
      query: {
        page: 1,
        pageSize: 10,
        carNumber: null,//车辆品牌
        personName: null,//车主名称
        cardStatus: null, //状态
      },
      // 月卡列表数据
      tableData: [],
      // 分页
      total: 0,
      cardStatusList: [
        {
          id: null,
          name: '全部'
        },
        {
          id: 0,
          name: '可用'
        },
        {
          id: 1,
          name: '已过期'
        },
      ]
    }
  },
  created() {
    this.getCardList()
  },
  methods: {
    // 获取列表
    async getCardList() {
      const res = await queryCardList(this.query)
      console.log(res);
      this.tableData = res.data.rows
      this.total = res.data.total
    },
    // 查询按钮
    onSubmit() {
      this.query.page=1
      this.getCardList()
    },
    // 每页几条
    handleSizeChange(pageSize) {
      console.log(`每页 ${pageSize} 条`);
      this.query.pageSize = pageSize
      this.getCardList()
    },
    // 当前页
    handleCurrentChange(page) {
      console.log(`当前页: ${page}`);
      this.query.page = page
      this.getCardList()
    }
  }


};
</script>

<style lang="scss" scoped>
.demo-form-inline {

  .el-input,
  .el-select {
    width: 220px;
    height: 31px;
    margin: 0px 8px;
  }

  .el-form-item {
    margin: 0px;
  }

  border-bottom: 1px solid #ccc;
}

.main {
  margin: 20px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .right {
    background-color: #e6f7ff;
    border: 1px solid #91d5ff;
    margin: 0;
    color: #000000d9;
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5715;
    list-style: none;
    position: relative;
    align-items: center;
    padding: 4px 12px;
    border-radius: 2px;

    i {
      color: #1890ff;
    }
  }
}

.block {
  margin: 20px 0;
  display: flex;
  justify-content: flex-end;

}
</style>

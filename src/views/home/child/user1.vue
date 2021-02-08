<template>
  <el-card class="box-card">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row class="searchrow">
      <el-col>
        <el-input
          clearable
          placeholder="请输入内容"
          v-model="query"
          class="inputSerach"
        >
          <el-button
            @click="searchUser"
            slot="append"
            icon="el-icon-search"
          ></el-button>
        </el-input>
        <el-button type="primary">添加用户</el-button>
      </el-col>
    </el-row>
    <el-table
      :data="tableData.slice((pagenum - 1) * pagesize, pagenum * pagesize)"
      style="width: 100%"
    >
      <el-table-column type="index" label="编号" width="180">
        <template slot-scope="scope">
          <span>{{ (pagenum - 1) * pagesize + scope.$index + 1 }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="address" label="邮箱"> </el-table-column>
      <el-table-column prop="tel" label="电话"> </el-table-column>
      <el-table-column label="创建时间">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <!-- scope.row指的是数组中的每个对象(scope就是上一级绑定的data也就是tableDate) -->
          <span style="margin-left: 10px">{{ scope.row.date | showDate }}</span>
        </template></el-table-column
      >
      <el-table-column label="用户状态">
        <template slot-scope="scope">
          <el-switch
            v-model="scope.row.state"
            active-color="#13ce66"
            inactive-color="#ff4949"
          >
          </el-switch
        ></template>
      </el-table-column>

      <el-table-column label="操作">
        <template>
          <el-button
            plain
            type="primary"
            icon="el-icon-edit"
            circle
          ></el-button>
          <el-button
            plain
            type="danger"
            icon="el-icon-delete"
            circle
          ></el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pagenum"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    >
    </el-pagination>
  </el-card>
</template>

<script type="text/javascript">
import { formatDate } from "@/common/utils";
export default {
  name: "user",
  created() {
    this.getlist();
  },
  data() {
    return {
      query: "",
      tableData: [
        {
          date: "1486720211",
          name: "王小虎",
          province: "上海",
          tel: 123111111,
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
          state: true,
        },
        {
          date: "1486720211",
          name: "王小虎",
          province: "上海",
          tel: 123111111,
          city: "普陀区",
          address: "上海市普陀区金沙江路 1517 弄",
          zip: 200333,
          state: true,
        },
        {
          date: "1486720211",
          name: "亚索",
          province: "上海",
          tel: 123111111,
          city: "普陀区",
          address: "上海市普陀区金沙江路 1519 弄",
          zip: 200333,
          state: true,
        },
        {
          date: "1486720211",
          name: "王小虎",
          tel: 123111111,
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: 200333,
          state: false,
        },
        {
          date: "1486720211",
          name: "王小虎",
          province: "上海",
          tel: 123111111,
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
          state: true,
        },
        {
          date: "1486720211",
          name: "王小虎",
          province: "上海",
          tel: 123111111,
          city: "普陀区",
          address: "上海市普陀区金沙江路 1517 弄",
          zip: 200333,
          state: true,
        },
        {
          date: "1486720211",
          name: "王小虎",
          province: "上海",
          tel: 123111111,
          city: "普陀区",
          address: "上海市普陀区金沙江路 1519 弄",
          zip: 200333,
          state: true,
        },
        {
          date: "1486720211",
          name: "王小虎",
          tel: 123111111,
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: 200333,
          state: false,
        },
        {
          date: "1486720211",
          name: "王小虎",
          province: "上海",
          tel: 123111111,
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
          state: true,
        },
        {
          date: "1486720211",
          name: "王小虎",
          province: "上海",
          tel: 123111111,
          city: "普陀区",
          address: "上海市普陀区金沙江路 1517 弄",
          zip: 200333,
          state: true,
        },
        {
          date: "1486720211",
          name: "王小虎",
          province: "上海",
          tel: 123111111,
          city: "普陀区",
          address: "上海市普陀区金沙江路 1519 弄",
          zip: 200333,
          state: true,
        },
        {
          date: "1486720211",
          name: "王小虎",
          tel: 123111111,
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: 200333,
          state: false,
        },
        {
          date: "1486720211",
          name: "王小虎",
          province: "上海",
          tel: 123111111,
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
          state: true,
        },
        {
          date: "1486720211",
          name: "王小虎",
          province: "上海",
          tel: 123111111,
          city: "普陀区",
          address: "上海市普陀区金沙江路 1517 弄",
          zip: 200333,
          state: true,
        },
        {
          date: "1486720211",
          name: "王小虎",
          province: "上海",
          tel: 123111111,
          city: "普陀区",
          address: "上海市普陀区金沙江路 1519 弄",
          zip: 200333,
          state: true,
        },
        {
          date: "1486720211",
          name: "王小虎",
          tel: 123111111,
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: 200333,
          state: false,
        },
        {
          date: "1486720211",
          name: "王小虎",
          province: "上海",
          tel: 123111111,
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
          state: true,
        },
        {
          date: "1486720211",
          name: "王小虎",
          province: "上海",
          tel: 123111111,
          city: "普陀区",
          address: "上海市普陀区金沙江路 1517 弄",
          zip: 200333,
          state: true,
        },
        {
          date: "1486720211",
          name: "王小虎",
          province: "上海",
          tel: 123111111,
          city: "普陀区",
          address: "上海市普陀区金沙江路 1519 弄",
          zip: 200333,
          state: true,
        },
        {
          date: "1486720211",
          name: "王小虎",
          tel: 123111111,
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: 200333,
          state: false,
        },
        {
          date: "1486720211",
          name: "王小虎",
          province: "上海",
          tel: 123111111,
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
          state: true,
        },
        {
          date: "1486720211",
          name: "王小虎",
          province: "上海",
          tel: 123111111,
          city: "普陀区",
          address: "上海市普陀区金沙江路 1517 弄",
          zip: 200333,
          state: true,
        },
        {
          date: "1486720211",
          name: "王小虎",
          province: "上海",
          tel: 123111111,
          city: "普陀区",
          address: "上海市普陀区金沙江路 1519 弄",
          zip: 200333,
          state: true,
        },
        {
          date: "1486720211",
          name: "王小虎",
          tel: 123111111,
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: 200333,
          state: false,
        },
      ],
      pagenum: 1,
      pagesize: 10,
      total: 0,
    };
  },
  methods: {
    getlist() {
      // 处理数据
      // es6过滤得到满足搜索条件的展示数据list
      let list = this.data.filter((item, index) =>
        item.name.includes(this.query)
      );
      this.tableData = list.filter(
        (item, index) =>
          index < this.pagenum * this.pagesize &&
          index >= this.pagesize * (this.pagenum - 1)
      );
      this.total = list.length;
    },
    handleSizeChange(val) {
      this.pagesize = val;
      this.getlist();
    },
    handleCurrentChange(val) {
      this.pagenum = val;
      this.getlist();
    },
    searchUser() {
      if (this.query == "") {
        this.$message.warning("查询条件不能为空！");
        return;
      }
      this.pagesize = 1;
      this.getlist();
    },
  },
  filters: {
    showDate: function (value) {
      let date = new Date(value * 1000);
      return formatDate(date, "yyyy-MM-dd");
    },
  },
};
</script>

<style>
.box-card {
  height: 100%;
}
.searchrow {
  margin-top: 20px;
}
.inputSerach {
  width: 350px;
  margin-right: 20px;
}
</style>

<template>
  <el-card class="box-card">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row class="searchrow">
      <el-col>
        <el-input
          @clear="loadUserlist"
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
        <el-button type="primary" @click="showAdd">添加用户</el-button>
        <el-button type="primary" @click="deleteAll">批量删除</el-button>
      </el-col>
    </el-row>
    <el-table
      :data="list"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="50"> </el-table-column>
      <el-table-column label="编号" width="180">
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
        <template slot-scope="scope">
          <el-button
            plain
            type="primary"
            icon="el-icon-edit"
            circle
            @click="showEdit(scope.row)"
          ></el-button>
          <el-button
            plain
            type="danger"
            icon="el-icon-delete"
            circle
            @click="deleteData(scope.$index, scope.row)"
          ></el-button>
          <el-button
            type="success"
            icon="el-icon-check"
            circle
            @click="showRole(scope.row)"
          ></el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination
      v-if="pageshow"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pagenum"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="this.tableData.length"
    >
    </el-pagination>
    <!-- 添加用户 -->
    <el-dialog title="添加用户" :visible.sync="dialogFormVisibleAdd">
      <el-form :model="form">
        <el-form-item label="用户名" label-width="120px">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" label-width="120px">
          <el-input v-model="form.address" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="电话" label-width="120px">
          <el-input v-model="form.tel" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisibleAdd = false">取 消</el-button>
        <el-button type="primary" @click="add">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 编辑用户 -->
    <el-dialog title="编辑用户" :visible.sync="dialogFormVisibleEdit">
      <el-form :model="form">
        <el-form-item label="用户名" label-width="120px">
          <el-input disabled v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" label-width="120px">
          <el-input v-model="form.address" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="电话" label-width="120px">
          <el-input v-model="form.tel" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisibleEdit = false">取 消</el-button>
        <el-button type="primary" @click="editUser">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 分配角色 -->
    <el-dialog title="分配角色" :visible.sync="dialogFormVisibleRole">
      <el-form :model="form">
        <el-form-item label="用户名" label-width="100px">
          {{ "当前用户名" }}
        </el-form-item>
        <el-form-item label="角色" label-width="100px">
          <!-- 这个curr必须和下面的value值一样 -->
          <el-select v-model="curr">
            <el-option label="请选择" :value="-1"></el-option>
            <el-option
              :label="item"
              v-for="(item, index) in 5"
              :key="index"
              :value="index"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisibleRole = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisibleRole = false"
          >确 定</el-button
        >
      </div>
    </el-dialog>
  </el-card>
</template>

<script type="text/javascript">
import { formatDate } from "@/common/utils";
var listJson = {
  Data: [
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
};
export default {
  name: "user",
  created() {
    this.pagelist();
  },
  data() {
    return {
      query: "",
      tableData: [],
      list: [],
      selectionList: [],
      pagenum: 1,
      pagesize: 10,
      total: null,
      pageshow: true,
      dialogFormVisibleAdd: false,
      dialogFormVisibleEdit: false,
      dialogFormVisibleRole: false,
      form: {
        name: "",
        address: "",
        tel: "",
        date: "1",
      },
      curr: -1,
    };
  },
  methods: {
    // 选中的创建一个数组
    handleSelectionChange(selection) {
      this.selectionList = [];
      selection.forEach((element) => {
        console.log(element);
        this.selectionList.push(element);
      });
    },
    // 批量删除
    deleteAll() {
      for (let i = 0; i <= this.selectionList.length; i++) {
        for (let index in this.tableData) {
          if (this.list[index] === this.selectionList[i]) {
            this.list.splice(index, 1);
          }
        }
      }
    },
    // 编辑
    showRole(user) {
      console.log(user.$index);
      this.dialogFormVisibleRole = true;
    },
    editUser() {
      this.tableData.splice(this.form.id, 1, this.form);

      this.dialogFormVisibleEdit = false;
    },
    showEdit(user) {
      this.form = user;
      this.dialogFormVisibleEdit = true;
    },
    deleteData(id) {
      console.log(id);
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.list.splice(id, 1);
          // if (this.pagenum == 1) {
          this.tableData.splice(id, 1);
          // } else {
          //   this.tableData.splice(id + 1, 1);
          // }
          // this.getlist();
          this.$message({
            type: "success",
            message: "删除成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    showAdd() {
      (this.form = {}), (this.dialogFormVisibleAdd = true);
    },
    add() {
      // 判断输入框里的内容是否为空，也就是form对象里的所有属性是否都为空
      if (Object.keys(this.form).filter((v) => this.form[v]).length > 0) {
        let itemForm = JSON.parse(JSON.stringify(this.form));
        this.tableData.unshift(itemForm);
        this.dialogFormVisibleAdd = false;
        this.getlist();
        this.form = {};
      } else {
        this.$message.warning("数据不能为空");
      }
    },
    loadUserlist() {
      this.getlist();
    },
    pagelist() {
      (this.tableData = listJson.Data), this.getlist();
    },
    getlist() {
      // 处理数据
      // es6过滤得到满足搜索条件的展示数据list
      let list = this.tableData.filter((item, index) =>
        item.name.includes(this.query)
      );
      this.list = list.filter(
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
      this.pagenum = 1;
      this.pageshow = false;
      this.getlist();
      this.$nextTick(() => {
        this.pageshow = true;
      });
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

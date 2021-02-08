<template>
  <el-container class="container">
    <el-header class="header">
      <el-row>
        <el-col :span="4" class="top">
          <img src="../../assets/img/logo.png" alt="" />
          <span style="font-size: 20px"
            >AI.
            <i style="font-style: normal; color: pink; font-size: 20px"
              >ADMIN</i
            >
          </span>
        </el-col>
        <el-col :span="18" class="middle"><h2>后台管理</h2> </el-col>
        <el-col :span="2" class="loginout">
          <el-dropdown>
            <span class="el-dropdown-link">
              <img src="../../assets/img/sxc.jpg" alt="" />
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item icon="el-icon-s-tools" @click.native="out"
                >退出</el-dropdown-item
              >
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-aside width="200px" class="aside">
        <el-menu :router="true">
          <!-- <el-menu-item index="1">
            <i class="el-icon-document"></i>
            <span slot="title">首页</span>
          </el-menu-item> -->
          <el-menu-item index="info">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>个人信息</span>
            </template>
          </el-menu-item>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>用户管理</span>
            </template>
            <el-menu-item index="user">用户列表</el-menu-item>
          </el-submenu>
          <el-menu-item index="shape">
            <i class="el-icon-document"></i>
            <span slot="title">分享功能</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">订单管理</span>
          </el-menu-item>
        </el-menu></el-aside
      >
      <el-main class="main">
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script type="text/javascript">
export default {
  name: "home",
  data() {
    return {};
  },
  components: {},
  methods: {
    out() {
      this.$router.push("/login");
    },
  },
};
</script>

<style>
.top {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 60px;
}
.top img {
  width: 45px;
  height: 45px;
  margin-right: 20px;
}
.loginout {
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.loginout img {
  display: block;
  cursor: pointer;
  border-radius: 50%;
  width: 45px;
  height: 45px;
}
.container {
  height: 100%;
}
.header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  height: 60px;
}
.middle {
  line-height: 60px;
  margin-left: -30px;
}
.el-aside {
  background-color: #fff;
  color: #333;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
}
</style>

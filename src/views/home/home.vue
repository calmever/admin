<template>
  <el-container class="container">
    <el-header class="header">
      <el-row>
        <el-col :span="4" class="top"
          ><div class="grid-content bg-purple">
            <img src="../../assets/img/logo.png" alt="" />
            <span class="title"
              >AI.
              <i style="font-style: normal; color: pink">ADMIN</i>
            </span>
          </div></el-col
        >
        <el-col :span="16" class="middle"><h2>后台管理</h2> </el-col>
        <el-col :span="4" class="loginout">
          <img src="../../assets/img/sxc.jpg" alt="" />
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-aside width="200px" class="aside">Aside</el-aside>
      <el-main class="main">Main</el-main>
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
};
</script>

<style>
.top img {
  margin-right: 5px;
  vertical-align: middle;
}
.loginout {
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.loginout img {
  border-radius: 50%;
  width: 45px;
  height: 45px;
}
.container {
  height: 100%;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>

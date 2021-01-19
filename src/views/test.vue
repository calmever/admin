<template>
  <div id="app">
    <div class="left" style="width: 181px">
      <div class="nav">
        <img src="../assets/img/logo.png" alt="" class="" />
        <span class="title"
          >AI.
          <i style="font-style: normal; color: pink">ADMIN</i>
        </span>
      </div>
      <el-row class="tac">
        <el-col :span="3" style="width: 100%; height: 100%">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            style="width: 100%; height: 100%"
          >
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>导航一</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="2-4">
                <template slot="title">选项4</template>
                <el-menu-item index="2-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>

            <el-menu-item index="3">
              <i class="el-icon-document"></i>
              <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">导航四</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </div>
    <div class="right">
      <header class="r-header" style="width: 1740px">
        <div class="right-nav">
          <div class="r-center"></div>
          <div class="r-right"></div>
        </div>
      </header>
    </div>
  </div>
</template>


<script type="text/javascript">
export default {
  name: "test",
  data() {
    return {};
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
  components: {},
};
</script>

<style>
.left {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  background-color: #ccc;
}
.nav {
  width: 100%;
  height: 60px;
  line-height: 60px;
  text-align: center;
  background-color: #fff;
}
.nav img {
  height: 36px;
  width: 36px;
  vertical-align: middle;
}
.nav span {
  line-height: 36px;
  font-size: 20px;
  margin-left: 10px;
}
.tac {
  flex: 1;
  margin-top: 3px;
}
.right {
  display: flex;
  width: calc(100% - 181px);
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: pink;
}
.r-header {
  position: fixed;
  top: 0;
  right: 0;
  height: 60px;
  background: #fff;
  flex-direction: row;
}
.right-nav {
  display: flex;
  flex: 1;
  flex-direction: row;
}
.r-right {
  width: 320px;
  padding: 0 10px;
  background-color: black;
}
</style>

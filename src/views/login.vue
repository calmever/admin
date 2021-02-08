<template>
  <div class="login-warp">
    <div class="title"><h2>后台入口</h2></div>
    <el-form
      label-position="top"
      label-width="80px"
      :model="user"
      class="login-form"
    >
      <el-form-item label="用户名">
        <el-input v-model="user.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="user.password" show-password></el-input>
      </el-form-item>
      <el-button type="primary" class="login-btn" @click="login"
        >登录</el-button
      >
    </el-form>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "login",
  data() {
    return {
      user: {
        username: "admin",
        password: "123456",
      },
    };
  },
  components: {},
  methods: {
    // async login() {
    //   // const result = await this.$http.post("login", this.user);
    //   // console.log(result);
    //   // if (!this.user.username || !this.user.password) {
    //   //   this.$message.warning("数据不能为空");

    //   //   // this.$router.push("/home");
    //   //   // this.$message.success("登录成功");
    //   // } else {
    //   //   this.$store.commit("login", this.user);
    //   //   this.$router.push("/home");
    //   // }

    // },
    login() {
      this.$store.commit("login", this.user);
      this.$router.push("/info");
      this.$message.success("登录成功");
    },
  },
};
</script>

<style>
.login-warp {
  height: 100%;
  background-color: #324152;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.title {
  margin-bottom: 20px;
  color: #fff;
}
.login-form {
  width: 400px;
  padding: 30px;
  border-radius: 5px;
  background-color: #fff;
}
.login-btn {
  width: 100%;
}
</style>

<template>
  <div class="shape">
    <el-row :gutter="20" class="box">
      <el-col :span="8">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>分享组件一：横向排列</span>
          </div>
          <div class="r-flex">
            <span>分享到：</span>
            <ul class="ul-img">
              <li><img src="../../assets/img/orange.png" alt="" /></li>
              <li><img src="../../assets/img/orange.png" alt="" /></li>
              <li><img src="../../assets/img/orange.png" alt="" /></li>
              <li><img src="../../assets/img/orange.png" alt="" /></li>
            </ul>
          </div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>分享组件二：仿简书底部分享</span>
          </div>
          <div>
            <p>邀请好友加入</p>
          </div>
          <div class="r-flex">
            <ul class="ul-img">
              <li><img src="../../assets/img/orange.png" alt="" /></li>
              <li><img src="../../assets/img/orange.png" alt="" /></li>
              <li><img src="../../assets/img/orange.png" alt="" /></li>
              <li><img src="../../assets/img/orange.png" alt="" /></li>
            </ul>
          </div>
          <div>获取更多</div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>分享组件三：仿简书侧栏分享</span>
          </div>
          <div class="r-flex">
            <ul class="ul-img">
              <li><img src="../../assets/img/orange.png" alt="" /></li>
              <li><img src="../../assets/img/orange.png" alt="" /></li>
              <li><img src="../../assets/img/orange.png" alt="" /></li>
            </ul>
          </div>
          <div class="more">
            <el-button round>更多分享</el-button>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="20" class="box">
      <el-col :span="8">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>分享组件四：仿掘金网站分享</span>
          </div>
          <div v-for="o in 4" :key="o" class="text item">
            {{ "列表内容 " + o }}
          </div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>分享组件五：仿新浪分享</span>
          </div>
          <div v-for="o in 4" :key="o" class="text item">
            {{ "列表内容 " + o }}
          </div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>分享组件六：横向排列</span>
          </div>
          <ul class="ul-img">
            <li><img src="../../assets/img/orange.png" alt="" /></li>
            <li><img src="../../assets/img/orange.png" alt="" /></li>
            <li><img src="../../assets/img/orange.png" alt="" /></li>
            <li><img src="../../assets/img/orange.png" alt="" /></li>
          </ul>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "shape",
  data() {
    return {};
  },
};
</script>

<style lang="less">
.more {
  float: right;
  margin: -40px 40px;
}
.shape {
  padding: 20px;
}
.box {
  height: 350px;
  margin: 40px;
}
.r-flex {
  display: flex;
  justify-content: center;
  margin: 50px;
  ul {
    display: flex;
    li {
      cursor: pointer;
      margin: -10px 10px;
    }
  }
}

.box-card {
  height: 240px;
}
.ul-img {
  list-style: none;
}
img {
  width: 35px;
  height: 35px;
}
</style>

<template>
  <div>
    <el-card class="info-card">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>个人信息</el-breadcrumb-item>
      </el-breadcrumb>
      <el-row class="info-row" :gutter="20">
        <el-col :span="8"
          ><div class="area">
            <div>
              <img
                src="@/assets/img/sxc.jpg"
                style="border-radius: 50%; width: 115px; height: 105px"
                alt=""
              />
            </div>
            <div>桃李不言,下自成蹊</div>
            <div>
              <el-button type="primary" class="info-image">上传头像</el-button>
            </div>
          </div></el-col
        >
        <el-col :span="8"
          ><div
            style="padding: 10px 20px; box-shadow: 0 0 15px #ccc; height: 228px"
          >
            <div class="namearea f-left">
              <p>姓名：孙笑川</p>
              <p>昵称：网恋教父</p>
              <p>性格：儒雅随和</p>
              <p>邮箱：2031xxx@qq.com</p>
              <p>电话：1365563xxxx</p>
            </div>
            <div class="f-right">
              <p class="el-icon-user-solid"></p>
              <!-- <p class="el-icon-s-promotion"></p>
              <p class="el-icon-phone"></p> -->
            </div>
            <el-button type="primary" style="width: 100%" class="look"
              >点击查看</el-button
            >
          </div></el-col
        >
        <el-col :span="8"
          ><div class="area data">
            <p class="infodata" style="color: #fff">个人数据</p>
            <div>
              <p style="color: #409eff">我的关注</p>
              <p style="color: #c10000; font-weight: bolder">200</p>
            </div>
            <div>
              <p style="color: #409eff">我的粉丝</p>
              <p style="color: #c10000; font-weight: bolder">200</p>
            </div>
            <div class="moreclick">
              <p>
                谢谢您的关注，<a
                  href="https://www.baidu.com/"
                  style="color: #409eff; font-weight: bolder"
                  >了解更多请点击</a
                >
              </p>
            </div>
          </div></el-col
        >
      </el-row>
    </el-card>
    <el-card class="charts">
      <el-row class="info-row">
        <el-col :span="12">
          <div
            class="canves"
            ref="main"
            style="width: 650px; height: 400px"
          ></div
        ></el-col>
        <el-col :span="12">
          <div
            class="canves"
            ref="main2"
            style="width: 500px; height: 400px"
          ></div>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script type="text/javascript">
var echarts = require("echarts");
export default {
  name: "info",
  data() {
    return {
      name: "wowo",
    };
  },
  mounted() {
    this.userEchart();
    this.userEchart2();
  },
  methods: {
    userEchart() {
      var myChart = echarts.init(this.$refs.main);
      var option = {
        title: {
          text: "访问次数",
        },
        tooltip: {},
        legend: {
          data: ["次数"],
        },
        xAxis: {
          data: ["首页", "个人信息", "用户管理", "用户列表", "分享", "。。"],
        },
        yAxis: {},
        series: [
          {
            name: "次数",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20],
          },
        ],
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
    userEchart2() {
      var myChart2 = echarts.init(this.$refs.main2);
      var option2 = {
        title: {
          text: "南丁格尔玫瑰图",
          left: "center",
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
        legend: {
          left: "center",
          top: "bottom",
          data: [
            "rose1",
            "rose2",
            "rose3",
            "rose4",
            "rose5",
            "rose6",
            "rose7",
            "rose8",
          ],
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true },
          },
        },
        series: [
          {
            name: "半径模式",
            type: "pie",
            radius: [20, 140],
            center: ["25%", "50%"],
            roseType: "radius",
            itemStyle: {
              borderRadius: 5,
            },
            label: {
              show: false,
            },
            emphasis: {
              label: {
                show: true,
              },
            },
            data: [
              { value: 40, name: "rose 1" },
              { value: 33, name: "rose 2" },
              { value: 28, name: "rose 3" },
              { value: 22, name: "rose 4" },
              { value: 20, name: "rose 5" },
              { value: 15, name: "rose 6" },
              { value: 12, name: "rose 7" },
              { value: 10, name: "rose 8" },
            ],
          },
          {
            name: "面积模式",
            type: "pie",
            radius: [20, 140],
            center: ["75%", "50%"],
            roseType: "area",
            itemStyle: {
              borderRadius: 5,
            },
            data: [
              { value: 30, name: "rose 1" },
              { value: 28, name: "rose 2" },
              { value: 26, name: "rose 3" },
              { value: 24, name: "rose 4" },
              { value: 22, name: "rose 5" },
              { value: 20, name: "rose 6" },
              { value: 18, name: "rose 7" },
              { value: 16, name: "rose 8" },
            ],
          },
        ],
      };
      myChart2.setOption(option2);
    },
  },
};
</script>

<style lang="less" scoped>
.canves {
  margin: 0 auto;
}
.moreclick {
  width: 100%;
  margin: 0 auto;

  p {
    margin-left: 50px;
  }
}
.info-card {
  height: 100%;
  margin-bottom: 25px;
}
.namearea p {
  margin: 15px;
  font-size: 13px;
  font-weight: 500;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.info-row {
  padding: 10px;
  margin-top: 20px;
}
.look {
  margin-top: 20px;
}
.area {
  text-align: center;
  height: 228px;
  padding: 10px;
  box-shadow: 0 0 15px #ccc;
}
.f-left {
  float: left;
}
.f-right {
  float: right;
  margin: 20px;
}
.area {
  div {
    margin-bottom: 20px;
  }
  img {
    margin: 10px 20px 10px;
  }
}
.info-image {
  margin: 0 auto;
}
.infodata {
  width: 100%;
  height: 25px;
  line-height: 25px;
  background-color: #409eff;
}
.data div {
  width: 100%;
  float: left;
  margin-bottom: 20px;
}
.data p {
  margin-bottom: 10px;
}
</style>

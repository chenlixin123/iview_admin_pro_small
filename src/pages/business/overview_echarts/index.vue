<template>
  <div class="box">
    <!-- 上半部分 -->
    <div class="top">
      <!-- 左上部分 -->
      <div class="top_left">
        <!-- <img :src="src" alt /> -->
        <b class="title">车位使用情况</b>
        <ul>
          <li>
            上周共有
            <span>{{usage.last_week_total}}</span> 个车位被使用
            <span>{{usage.last_week_use_times}}</span> 次，使用车位占激活车位比例为
            <span>{{usage.last_week_proportion}}</span>
          </li>
          <li class="li2">
            日均使用车位
            <span>{{usage.average_usage_number}}</span> 个，日均使用
            <span>{{usage.average_usage_times}}</span> 次，一周内平均每个车位使用
            <span>{{usage.weekly_average_number}}</span> 次
          </li>
        </ul>
        <div class="top_left_center">
          <div ref="visitChart" v-height="height" v-width="width"></div>
          <div ref="visitChart1" v-height="'100%'" v-width="'100%'"></div>
        </div>
      </div>
      <!-- 右上部分 -->
      <div class="top_right">
        <!-- <img :src="src" alt /> -->
        <b class="title">车位活跃天数</b>
        <ul>
          <li>
            活跃天数在三天以上的车位占
            <span>{{active.threeday}}</span>，活跃天数在五天以上的车位占
            <span>{{active.fiveday}}</span>
          </li>
          <li class="li2">其中{{active.car}}车位一周7天都在使用</li>
        </ul>
        <div class="top_right_center">
          <div ref="top_right1" v-height="height" v-width="width"></div>
          <div ref="top_right2" v-height="'100%'" v-width="'100%'"></div>
        </div>
      </div>
    </div>
    <!-- 下半部分 -->
    <div class="bottom">
      <!-- 左下部分 -->
      <div class="bottom_left">
        <!-- <img :src="src" alt /> -->
        <b class="title">车位时间利用率</b>
        <ul>
          <li>
            平均时间利用率为
            <span class="span">{{utilize.utilize_first}}</span>,
            <span class="span">{{utilize.utilize_second}}</span>
            车位的时间利用率在50%以上
          </li>
          <li class="li2">
            时间利用率在80%以上即平均一天使用
            <span class="span">{{utilize.utilize_hour}}</span> 以上的车位占比
            <span class="span">{{utilize.utilize_car}}</span>
          </li>
          <li class="li2">
            <span class="span">{{utilize.utilize_insufficient}}</span>使用车位的时间利用率不足10%
          </li>
        </ul>
        <div class="bottom_left_center">
          <!-- <div ref="visitChart" v-height="height" v-width="width"></div>-->
          <div class="echarts1" ref="bottom_left" v-height="'100%'" v-width="'100%'"></div>
        </div>
      </div>
      <!-- 右下部分 -->
      <div class="bottom_right">
        <!-- <img :src="src" alt /> -->
        <b class="title">车位使用时长</b>
        <ul>
          <li>
            车位共使用
            <span class="span">{{parking.parking_total_hours}}</span>小时
          </li>
          <li class="li2">
            车位单次停放时长集中分布在
            <span class="span">{{parking.parking_focus}}</span>，占比
            <span class="span">{{parking.parking_total_share}}</span>
          </li>
          <li class="li2">
            单次平均停放
            <span class="span">{{parking.parking_single}}</span>小时，单次最长停放
            <span class="span">{{parking.parking_Longest}}</span>
            天（{{parking.parking_car}}车位）
          </li>
        </ul>
        <div class="bottom_right_center">
          <div ref="bottom_right1" v-height="'100%'" v-width="'50%'"></div>
          <div ref="bottom_right2" v-height="'100%'" v-width="'50%'"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import echarts from "echarts";
import {
  usage,
  usage_pie,
  usage_line,
  active,
  active_pie,
  active_line,
  utilize,
  utilize_line,
  parking,
  parking_number_line,
  parking_frequency_line,
} from "@/api/echarts";
export default {
  data() {
    return {
      data: "",
      width: "50%",
      height: "100%",
      src: require("@/assets/images/beijingtu@3x.png"),
      usage: {},
      active: {},
      usage_pie: [],
      utilize: {},
      parking: {},
    };
  },
  mounted() {
    this.handleSetVisitChart();
    this.handleSetVisitChart1();
    this.top_right1();
    this.top_right2();
    this.bottom_left();
    this.bottom_right1();
    this.bottom_right2();
  },
  methods: {
    handleSetVisitChart() {
      usage({}).then((res) => {
        this.usage = res.usage;
      });
      this.visitChart = echarts.init(this.$refs.visitChart);
      usage_pie({}).then((res) => {
        let option = {
          title: {
            text: "车位状态分布",
            subtext: "",
            left: "center",
          },
          tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b} : {c} ({d}%)",
          },
          // legend: {
          //   orient: "vertical",
          //   left: "left",
          //   data: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"],
          // },
          series: [
            {
              name: "车位状态",
              type: "pie",
              radius: "80%",
              center: ["50%", "55%"],
              color: ["#8064a2", "#c0504d", "#9bbb59"],
              data: res.usage_pie,
              label: {
                normal: {
                  show: true,
                  position: "inner",
                },
              },
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: "rgba(0, 0, 0, 0.5)",
                },
              },
            },
          ],
        };
        this.visitChart.setOption(option);
      });
    },
    handleSetVisitChart1() {
      usage_line().then((res) => {
        this.visitChart1 = echarts.init(this.$refs.visitChart1);
        let option = {
          title: {
            text: "使用车位",
            subtext: "",
            left: "center",
          },
          tooltip: {
            trigger: "axis",
            axisPointer: {
              // 坐标轴指示器，坐标轴触发有效
              type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
            },
          },
          color: ["#c0504d", "#d9d9d9", "#8064a2"],
          legend: {
            data: ["使用车位", "未使用车位", "使用次数"],
            top: "10%",
          },
          grid: {
            top: "30%",
            left: "7%",
            right: "4%",
            bottom: "5%",
            containLabel: true,
          },
          xAxis: [
            {
              type: "category",
              data: res.usage_line_name,
            },
          ],
          yAxis: [
            {
              type: "value",
              name: "车位个数",
            },
            {
              type: "value",
              name: "使用次数",
              min: 0,
              max: 600,
              position: "right",
              axisLine: {
                lineStyle: {
                  // color: colors[0],
                },
              },
              axisLabel: {
                formatter: "{value} ",
              },
            },
          ],
          series: [
            {
              name: "使用车位",
              type: "bar",
              stack: "广告",
              data: res.usage_line_use,
            },
            {
              name: "未使用车位",
              type: "bar",
              stack: "广告",
              barWidth: 40,
              data: res.usage_line_notused,
            },
            {
              name: "使用次数",
              type: "line",
              data: res.usage_line_number,
            },
          ],
        };
        this.visitChart1.setOption(option);
      });
    },
    top_right1() {
      active().then((res) => {
        this.active = res.active;
      });
      active_pie().then((res) => {
        let mychart = echarts.init(this.$refs.top_right1);
        let option = {
          title: {
            text: "车位活跃天数分布",
            subtext: "",
            left: "center",
          },
          tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b} : {c} ({d}%)",
          },
          color: [
            "#8064a2",
            "#c0504d",
            "#d9d9d9",
            "#8064a2",
            "#4dacc6",
            "#f79646",
            "#2c4d75",
          ],
          // legend: {
          //   orient: "vertical",
          //   left: "left",
          //   data: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"],
          // },
          series: [
            {
              name: "车位活跃天数",
              type: "pie",
              radius: "80%",
              center: ["50%", "55%"],
              data: res.active_pie,
              label: {
                normal: {
                  show: true,
                  position: "inner",
                },
              },
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: "rgba(0, 0, 0, 0.5)",
                },
              },
            },
          ],
        };
        mychart.setOption(option);
      });
    },
    top_right2() {
      active_line().then((res) => {
        let Mychart = echarts.init(this.$refs.top_right2);
        let option = {
          title: {
            text: "车位活跃天数",
            subtext: "",
            left: "center",
          },
          tooltip: {
            trigger: "axis",
            axisPointer: {
              // 坐标轴指示器，坐标轴触发有效
              type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
            },
          },
          // color: ["red", "#d9d9d9", "green"],
          // legend: {
          //   data: ["使用车位", "未使用车位", "使用次数"],
          //   top: "10%",
          // },
          grid: {
            top: "15%",
            left: "7%",
            right: "4%",
            bottom: "5%",
            containLabel: true,
          },
          color: ["#c35855"],
          xAxis: [
            {
              axisLabel: {
                interval: 0,
                rotate: 90, //倾斜度 -90 至 90 默认为0
                margin: 2,
                textStyle: {
                  // fontWeight: "bolder",
                  color: "#000000",
                },
              },
              type: "category",
              data: res.active_line_name,
            },
          ],
          yAxis: [
            {
              type: "value",
            },
            //   {
            //     type: "value",
            //     name: "使用次数",
            //     min: 0,
            //     max: 600,
            //     position: "right",
            //     axisLine: {
            //       lineStyle: {
            //         // color: colors[0],
            //       },
            //     },
            //     axisLabel: {
            //       formatter: "{value} ",
            //     },
            //   },
          ],
          series: [
            {
              name: "使用车位",
              type: "bar",
              stack: "广告",
              data: res.active_line_data,
            },
          ],
        };
        Mychart.setOption(option);
      });
    },
    bottom_left() {
      utilize().then((res) => {
        this.utilize = res.utilize;
      });
      utilize_line().then((res) => {
        let Mychart = echarts.init(this.$refs.bottom_left);
        let option = {
          title: {
            text: "车位时间利用率",
            subtext: "",
            left: "center",
          },
          tooltip: {
            trigger: "axis",
            axisPointer: {
              // 坐标轴指示器，坐标轴触发有效
              type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
            },
          },
          color: ["#c0504d", "#d9d9d9", "#8064a2"],
          // legend: {
          //   data: ["使用车位"],
          //   top: "10%",
          // },
          grid: {
            top: "20%",
            left: "3%",
            right: "4%",
            bottom: "5%",
            containLabel: true,
          },
          xAxis: [
            {
              type: "category",
              data: res.utilize_line_name,
            },
          ],
          yAxis: [
            {
              type: "value",
              name: "车位个数",
              axisLabel: {
                formatter: "{value}",
              },
            },
          ],
          series: [
            {
              name: "使用车位",
              type: "bar",
              stack: "广告",
              barWidth: 40,
              data: res.utilize_line_data,
            },
          ],
        };
        Mychart.setOption(option);
      });
    },
    bottom_right1() {
      parking().then((res) => {
        this.parking = res.parking;
      });
      parking_number_line().then((res) => {
        let Mychart = echarts.init(this.$refs.bottom_right1);
        let option = {
          title: {
            text: "车位单次停放时长分布",
            subtext: "",
            left: "center",
          },
          tooltip: {
            trigger: "axis",
            axisPointer: {
              // 坐标轴指示器，坐标轴触发有效
              type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
            },
          },
          color: ["#c0504d", "#d9d9d9", "#8064a2"],
          // legend: {
          //   data: ["使用车位"],
          //   top: "10%",
          // },
          grid: {
            top: "20%",
            left: "3%",
            right: "4%",
            bottom: "2%",
            containLabel: true,
          },
          xAxis: [
            {
              axisLabel: {
                interval: 0,
                rotate: 45, //倾斜度 -90 至 90 默认为0
                margin: 8,
                textStyle: {
                  // fontWeight: "bolder",
                  color: "#000000",
                },
              },
              type: "category",
              data: res.parking_number_line_name,
            },
          ],
          yAxis: [
            {
              type: "value",
              name: "车位个数",
              axisLabel: {
                formatter: "{value}",
              },
            },
          ],
          series: [
            {
              name: "使用车位",
              type: "bar",
              barWidth: 15,
              data: res.parking_number_line_data,
            },
          ],
        };
        Mychart.setOption(option);
      });
    },
    bottom_right2() {
      parking_frequency_line().then((res) => {
        let Mychart = echarts.init(this.$refs.bottom_right2);
        let option = {
          title: {
            text: "单次停放时长分布",
            subtext: "",
            left: "center",
          },
          tooltip: {
            trigger: "axis",
            axisPointer: {
              // 坐标轴指示器，坐标轴触发有效
              type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
            },
          },
          color: ["#c0504d", "#d9d9d9", "#8064a2"],
          // legend: {
          //   data: ["使用车位"],
          //   top: "10%",
          // },
          grid: {
            top: "20%",
            left: "3%",
            right: "4%",
            bottom: "5%",
            containLabel: true,
          },
          xAxis: [
            {
              axisLabel: {
                interval: 0,
                rotate: 45, //倾斜度 -90 至 90 默认为0
                margin: 8,
                textStyle: {
                  // fontWeight: "bolder",
                  color: "#000000",
                },
              },
              type: "category",
              data: res.parking_frequency_name,
            },
          ],
          yAxis: [
            {
              type: "value",
              name: "使用次数",
              axisLabel: {
                formatter: "{value}",
              },
            },
          ],
          series: [
            {
              name: "使用次数",
              type: "bar",
              barWidth: 15,
              data: res.parking_frequency_data,
            },
          ],
        };
        Mychart.setOption(option);
      });
    },
  },
};
</script>
<style scoped>
.box {
  width: 100%;
  height: 88vh;
}
.title {
  font-size: 20px;
}
.top,
.bottom {
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.top_left,
.top_right,
.bottom_left,
.bottom_right {
  width: 50%;
  height: 100%;
}
.top_left_center,
.top_right_center {
  width: 100%;
  height: 79%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 2%;
}
.bottom_left_center,
.bottom_right_center {
  width: 100%;
  height: 73%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 2%;
  position: relative;
}
.li2 {
  margin-left: 40px;
}
span {
  color: #f66913;
  font-weight: bold;
}
.span {
  color: red;
}
li {
  margin-left: 20px;
  margin-top: 5px;
  margin-bottom: 5px;
}
.echarts1 {
  position: absolute;
  left: 0;
  top: 0;
}
/* img {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
} */
</style>
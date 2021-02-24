<style lang="less" scoped>
.box {
  width: 100%;
}
.top {
  width: 100%;
  height: 350px;
  display: flex;
  justify-content: space-between;
}
.top_echarts {
  width: 53%;
  height: 100%;
  border-radius: 4px;
  background: white;
}
.top_echarts1 {
  width: 45%;
  height: 100%;
  border-radius: 4px;
  background: white;
}
.top_center {
  width: 100%;
  padding-bottom: 5px;
  padding-left: 16px;
  display: flex;
  // border: 1px solid;
}
.top_center2 {
  width: 100%;
  height: 45%;
  padding-bottom: 5px;
  padding-left: 16px;
  display: flex;
  // border: 1px solid;
}
.span_text {
  display: inline-block;
  min-width: 90px;
  text-align: justify;
  text-align-last: justify;
  margin-top: 13px;
  font-size: 17px;
}
.span_text1 {
  min-width: 60px;
  margin-bottom: 5px;
  font-size: 16px;
}
.top_center_left {
  width: 33%;
  height: 130px;
}
.top_center_center {
  width: 33%;
  height: 130px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
.top_center_right {
  width: 33%;
  height: 130px;
  text-align: center;
  // border: 1px solid;
  display: flex;
  align-items: center;
  justify-content: center;
}
.top_bottom {
  width: 85%;
  height: 50%;
  display: flex;
  // border: 1px solid;
}
.top_bottom_left {
  width: 50%;
  height: 100%;
  // border: 1px solid;
}
.top_bottom_right {
  width: 50%;
  height: 100%;
  // text-align: left;
  // border: 1px solid;
}
p {
  font-size: 18px;
}
.small {
  width: 100%;
  height: 100%;
  text-align: center;
}
.small_title,
.small_text {
  font-size: 20px;
}
.small_title {
  margin-top: 28%;
  margin-bottom: 5%;
}
.center {
  width: 100%;
  margin-top: 30px;
  background: #fff;
}
.input_box {
  width: 98%;
  height: 50px;
  line-height: 35px;
  font-size: 18px;
  text-align: right;
  position: relative;
}
.center_span {
  margin-right: 20px;
  cursor: pointer;
}
.center_span1 {
  margin-right: 20px;
  cursor: pointer;
  color: #f66913;
}
.ecaarts1 {
  width: 100%;
  height: 280px;
  display: flex;
}
.echarts2,
.echarts3,
.echarts4 {
  width: 100%;
  height: 300px;
}
.inout_echarts {
  width: 100%;
  height: 300px;
}
.inout_echarts_tab2 {
  width: 100%;
  height: 500px;
}
.echarts2s,
.echarts3s,
.echarts4s {
  width: 100%;
  height: 100%;
}
.echarts1_one {
  width: 34%;
  height: 100%;
}
.echarts1_two {
  width: 33%;
  height: 100%;
}
.echarts1_three {
  width: 33%;
  height: 100%;
}
.top_title_box {
  display: flex;
  justify-content: flex-start;
  justify-items: center;
  align-items: center;
  margin-top: 10px;
}
.cir {
  width: 10px;
  height: 10px;
  background: #ff8233;
  border-radius: 50px;
  margin-left: 20px;
  margin-right: 15px;
}
.top_bottom_right_text {
  margin-left: 40%;
  font-size: 17px;
}
.bar {
  width: 90%;
  height: 10px;
  margin: 0 auto;
  margin-top: 60px;
  border-radius: 30px;
  background: #eff3f3;
  position: relative;
}
.bar_color {
  height: 100%;
  background: #f8d347;
  border-radius: 30px;
}
.bar_color1 {
  height: 100%;
  background: #ff6d60;
  border-radius: 30px;
}
.bar_text {
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: -25px;
  left: 0;
  font-size: 16px;
}
.top_center2_left {
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  justify-items: center;
  align-items: center;
}
.top_center_left1 {
  width: 50%;
  height: 100%;
}
.top_center_right1 {
  width: 50%;
  height: 100%;
}
.top_center2_left_text {
  width: 50%;
  text-align: center;
  border-right: 1px solid #e7e7e7;
  font-size: 16px;
}
.top_center2_left_text1 {
  width: 50%;
  text-align: center;
  font-size: 16px;
}
.top_center2_left_texts {
  width: 100%;
  margin-top: 5%;
  text-align: center;
}
.top_center2_right {
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  justify-items: center;
  align-items: center;
}
.top_center2_left_texts1 {
  width: 100%;
  text-align: center;
  margin-left: 15%;
}
.top_center2_left_texts2 {
  width: 70%;
  text-align: left;
  margin-left: 30%;
  font-size: 16px;
}
.top_center2_right_text {
  width: 100%;
}
</style>
<template>
  <div class="box">
    <div class="top">
      <!-- 图表一 -->
      <div class="top_echarts">
        <div class="top_title_box">
          <div class="cir"></div>
          <p style="font-size: 18px">车场概况</p>
        </div>
        <div class="top_center">
          <div class="top_center_left" ref="survey"></div>
          <div class="top_center_center">
            <div style="border-right: 1px solid #f0f0f0; width: 100%">
              <div class="span_text1">楼层</div>
              <div class="span_text1">
                地面{{ car_numbers.groundNum }}层 地下{{
                  car_numbers.undergroundNum
                }}层
              </div>
            </div>
          </div>
          <div class="top_center_right">
            <div>
              <div class="span_text1">出入口</div>
              <div class="span_text1">
                入口{{ car_numbers.inGateNum }}个 出口{{
                  car_numbers.outGateNum
                }}个
              </div>
            </div>
          </div>
        </div>
        <div class="top_bottom">
          <div class="top_bottom_left">
            <div class="bar">
              <div class="bar_color" :style="{ width: colorWidth }"></div>
              <div class="bar_text">
                <div>临停车位</div>
                <div>{{ colorWidth }}</div>
              </div>
            </div>
            <div class="bar">
              <div class="bar_color1" :style="{ width: colorWidth1 }"></div>
              <div class="bar_text">
                <div>固定车位</div>
                <div>{{ colorWidth1 }}</div>
              </div>
            </div>
          </div>
          <div class="top_bottom_right">
            <div class="top_bottom_right_text">
              <span class="span_text">车位总数</span>：{{
                car_numbers.totalStallNum
              }}
            </div>
            <div class="top_bottom_right_text">
              <span class="span_text">固定车位</span>：{{
                car_numbers.fixStallNum
              }}
            </div>
            <div class="top_bottom_right_text">
              <span class="span_text">已租</span>：{{
                car_numbers.rentedStallNum
              }}
            </div>
            <div class="top_bottom_right_text">
              <span class="span_text">月保车辆</span>：{{
                car_numbers.rentedPlateNum
              }}
            </div>
          </div>
        </div>
      </div>

      <!-- 图表二 -->
      <div class="top_echarts1">
        <div class="top_title_box">
          <div class="cir"></div>
          <p style="font-size: 18px">当前车位使用率</p>
        </div>
        <!-- 固定车位 -->
        <div class="top_center2">
          <div class="top_center2_left">
            <div class="top_center_left1" ref="Utilization"></div>
            <div class="top_center2_left_text">
              <div>{{ this.car_numbers.fixStallRate }}%</div>
              <div class="top_center2_left_texts">固定车位</div>
            </div>
          </div>
          <div class="top_center2_right">
            <div class="top_center2_left_text1">
              <div class="top_center2_left_texts1">入 场</div>
              <div class="top_center2_left_texts1" style="margin-top: 5%">
                出 场
              </div>
            </div>
            <div class="top_center2_right_text">
              <div class="top_center2_left_texts2">
                {{ car_numbers.inFixNum }}台/次
              </div>
              <div class="top_center2_left_texts2" style="margin-top: 5%">
                {{ car_numbers.outFixNum }}台/次
              </div>
            </div>
          </div>
        </div>

        <!-- 临停车位 -->
        <div class="top_center2">
          <div class="top_center2_left">
            <div class="top_center_right1" ref="Utilization1"></div>
            <div class="top_center2_left_text">
              <div>{{ car_numbers.tempStallRate }}%</div>
              <div class="top_center2_left_texts">临停车位</div>
            </div>
          </div>

          <div class="top_center2_right">
            <div class="top_center2_left_text1">
              <div class="top_center2_left_texts1">入 场</div>
              <div class="top_center2_left_texts1" style="margin-top: 5%">
                出 场
              </div>
            </div>
            <div class="top_center2_right_text">
              <div class="top_center2_left_texts2">
                {{ car_numbers.inTempNum }}台/次
              </div>
              <div class="top_center2_left_texts2" style="margin-top: 5%">
                {{ car_numbers.outTempNum }}台/次
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 中间图表 Tabs -->
    <div class="center">
      <Tabs :animated="true" value="1" @on-click="handleTabClick">
        <!-- 功能块鉴权-停车效率-不通过鉴权 -->
        <TabPane label="停车效率" name="1">
          <div style="position: absolute; left: 10px; z-index: 100">
            <label for="" style="font-size: 18px">楼层：</label>
            <Select
              v-model="floor_id"
              style="width: 200px"
              @on-select="floor_select"
            >
              <Option
                v-for="item in floor_list"
                :value="item.id"
                :key="item.id"
                >{{ item.floor }}</Option
              >
            </Select>
          </div>
          <div class="input_box">
            <span
              :class="timename == '今日' ? 'center_span1' : 'center_span'"
              @click="today('今日')"
              >今日</span
            >
            <span
              :class="timename == '本周' ? 'center_span1' : 'center_span'"
              @click="today('本周')"
              >本周</span
            >
            <span
              :class="timename == '本月' ? 'center_span1' : 'center_span'"
              @click="today('本月')"
              >本月</span
            >
            <DatePicker
              type="daterange"
              split-panels
              placeholder="请选择日期"
              style="width: 200px; margin-right: 20px"
              :value="time1"
              format="yyyy-MM-dd"
              :options="options"
              @on-change="change"
              :clearable="false"
            ></DatePicker>
            <Checkbox
              v-model="average"
              style="font-size: 18px"
              :disabled="average_disabled"
              @on-change="average_change"
              >平均值</Checkbox
            >
          </div>
          <div class="ecaarts1">
            <div class="echarts1_one" ref="echarts1_one"></div>
            <div class="echarts1_two" ref="echarts1_two"></div>
            <div class="echarts1_three" ref="echarts1_three"></div>
          </div>
          <Divider style="margin: 10px 0px" />
          <div class="inout_echarts">
            <div class="echarts2s" ref="Utilization_linetwo"></div>
          </div>
          <Divider style="margin: 10px 0px" />
          <div class="echarts2">
            <div class="echarts2s" ref="Utilization2"></div>
          </div>
          <Divider style="margin: 10px 0px" />
          <div class="echarts3">
            <div class="echarts3s" ref="Utilization3"></div>
          </div>
          <Divider style="margin: 10px 0px" />
          <div class="echarts4">
            <div class="echarts4s" ref="Utilization4"></div>
          </div>
        </TabPane>
        <!-- <Auth :authority="['admin', 'user']"> -->
        <!-- 功能块鉴权-停车效率-通过鉴权 -->
        <TabPane label="停车效率-原版" name="4">
          <div class="input_box">
            <span
              :class="timename == '今日' ? 'center_span1' : 'center_span'"
              @click="today('今日')"
              >今日</span
            >
            <span
              :class="timename == '本周' ? 'center_span1' : 'center_span'"
              @click="today('本周')"
              >本周</span
            >
            <span
              :class="timename == '本月' ? 'center_span1' : 'center_span'"
              @click="today('本月')"
              >本月</span
            >
            <DatePicker
              type="daterange"
              split-panels
              placeholder="请选择日期"
              style="width: 200px; margin-right: 20px"
              :value="time1"
              format="yyyy-MM-dd"
              :options="options"
              @on-change="change"
              :clearable="false"
            ></DatePicker>
            <Checkbox
              v-model="average"
              style="font-size: 18px"
              :disabled="average_disabled"
              @on-change="average_change"
              >平均值</Checkbox
            >
          </div>
          <div class="ecaarts1">
            <div class="echarts1_one" ref="echarts1_one_y"></div>
            <div class="echarts1_two" ref="echarts1_two_y"></div>
            <div class="echarts1_three" ref="echarts1_three_y"></div>
          </div>
          <Divider style="margin: 10px 0px" />
          <div class="inout_echarts">
            <div class="echarts2s" ref="Utilization_linetwo_y"></div>
          </div>
          <Divider style="margin: 10px 0px" />
          <div class="echarts2">
            <div class="echarts2s" ref="Utilization2_y"></div>
          </div>
          <Divider style="margin: 10px 0px" />
          <div class="echarts3">
            <div class="echarts3s" ref="Utilization3_y"></div>
          </div>
          <Divider style="margin: 10px 0px" />
          <div class="echarts4">
            <div class="echarts4s" ref="Utilization4_y"></div>
          </div>
        </TabPane>
        <!-- </Auth> -->
        <TabPane label="出入口" name="2">
          <div class="input_box">
            <span
              :class="timename == '今日' ? 'center_span1' : 'center_span'"
              @click="today('今日')"
              >今日</span
            >
            <span
              :class="timename == '本周' ? 'center_span1' : 'center_span'"
              @click="today('本周')"
              >本周</span
            >
            <span
              :class="timename == '本月' ? 'center_span1' : 'center_span'"
              @click="today('本月')"
              >本月</span
            >
            <DatePicker
              type="daterange"
              split-panels
              placeholder="请选择日期"
              style="width: 200px; margin-right: 20px"
              :value="time1"
              format="yyyy-MM-dd"
              :options="options"
              :clearable="false"
              @on-change="change"
            ></DatePicker>
            <Checkbox
              v-model="single"
              style="font-size: 18px"
              @on-change="single_change"
              :disabled="single_disabled"
              >按小时显示</Checkbox
            >
          </div>
          <div class="inout_echarts_tab2">
            <div class="echarts2s" ref="inout_echarts1"></div>
          </div>
          <Divider style="margin: 10px 0px" />
        </TabPane>
        <TabPane label="车场效率" name="3">车场效率</TabPane>
      </Tabs>
    </div>
  </div>
</template>
<script>
import echarts from "echarts";
import {
  //车场概况
  business_biz_prefecture_analysis,
  //停车时长分布
  business_biz_prefecture_history_datav_list,
  //车位利用率
  business_biz_prefecture_stall_rate,
  //平均停车时长
  business_biz_prefecture_average_parking_time,
  //车位周转率
  business_biz_prefecture_turnover_rate,
  //出入口车流量
  business_biz_prefecture_inout_record,
  //楼层下拉框数据
  Administration_admin_park_floor_list,
  //整体车流量
  Administration_admin_biz_prefecture_flow,
} from "@/api/business";
export default {
  data() {
    return {
      colorWidth: "0%",
      colorWidth1: "30%",
      floor_id: 0,
      floor: 0,
      floor_list: [],
      today_data: true,
      data: "",
      //是否按小时显示
      single: false,
      //平均值
      average: false,
      //平均值禁用
      average_disabled: false,
      //按小时显示禁用
      single_disabled: false,
      name: 1,
      time1: [],
      //车场概览
      car_numbers: "",
      options: {
        disabledDate(date) {
          // //
          return date && date.valueOf() > Date.now();
        },
      },
      timename: "",
    };
  },
  created() {
    function getDate(dates) {
      var dd = new Date();
      var n = dates || 0;
      dd.setDate(dd.getDate() + n);
      var y = dd.getFullYear();
      var m = dd.getMonth() + 1;
      var d = dd.getDate();
      m = m < 10 ? "0" + m : m;
      d = d < 10 ? "0" + d : d;
      var day = y + "-" + m + "-" + d;
      return day;
    }
    if (this.time1.length == 0) {
      this.time1.push(getDate(0));
      this.time1.push(getDate(0));
    }
    // localStorage.setItem("preId", res.map.preId);
    let val = localStorage.getItem("preId");
    Administration_admin_park_floor_list({
      start: 0,
      pageSize: 100,
      filterJson: { filters: [{ property: "preId", value: val }] },
    }).then((res) => {
      this.floor_list = res.list;
      this.floor_list.splice(0, 0, { id: 0, floor: "全部" });
    });
  },
  mounted() {
    this.surveys();
    // this.Utilizations();
    this.echarts1_ones();
    this.echarts1_twos();
    this.echarts1_threes();
    this.Utilizations2();
    this.Utilizations3();
    this.Utilizations4();
    this.Utilization_linetwo();
    // this.inout_echarts1_f();
  },
  methods: {
    //楼层选择
    floor_select(e) {
      this.floor = e;
      this.echarts1_ones();
      this.echarts1_twos();
      this.echarts1_threes();
      this.Utilizations2();
      this.Utilizations3();
      this.Utilizations4();
      this.Utilization_linetwo();
      //
    },
    //平均值
    average_change(val) {
      this.average_disabled = true;
      if (this.name == 1) {
        this.echarts1_ones();
        this.echarts1_twos();
        this.echarts1_threes();
        this.Utilizations2();
        this.Utilizations3();
        this.Utilizations4();
        this.Utilization_linetwo();
      } else if (this.name == 4) {
        this.echarts1_ones_y();
        this.echarts1_twos_y();
        this.echarts1_threes_y();
        this.Utilizations2_y();
        this.Utilizations3_y();
        this.Utilizations4_y();
        this.Utilization_linetwo_y();
      }
    },
    //小时显示
    single_change(val) {
      this.inout_echarts1_f();
    },
    change(date) {
      this.time1 = date;
      if (this.name == 2) {
        this.inout_echarts1_f();
      } else if (this.name == 1) {
        this.echarts1_ones();
        this.echarts1_twos();
        this.echarts1_threes();
        this.Utilizations2();
        this.Utilizations3();
        this.Utilizations4();
        this.Utilization_linetwo();
      } else if (this.name == 4) {
        this.echarts1_ones_y();
        this.echarts1_twos_y();
        this.echarts1_threes_y();
        this.Utilizations2_y();
        this.Utilizations3_y();
        this.Utilizations4_y();
        this.Utilization_linetwo_y();
      }
    },
    today(time) {
      if (this.today_data == true) {
        this.today_data = false;
        this.timename = time;
        if (time == "今日") {
          function getDate(dates) {
            var dd = new Date();
            var n = dates || 0;
            dd.setDate(dd.getDate() + n);
            var y = dd.getFullYear();
            var m = dd.getMonth() + 1;
            var d = dd.getDate();
            m = m < 10 ? "0" + m : m;
            d = d < 10 ? "0" + d : d;
            var day = y + "-" + m + "-" + d;
            return day;
          }
          this.time1 = [];
          this.time1.push(getDate(0));
          this.time1.push(getDate(0));
          if (this.name == 1) {
            this.echarts1_ones();
            this.echarts1_twos();
            this.echarts1_threes();
            this.Utilizations2();
            this.Utilizations3();
            this.Utilizations4();
            this.Utilization_linetwo();
          } else if (this.name == 2) {
            this.inout_echarts1_f();
          } else if (this.name == 4) {
            this.echarts1_ones_y();
            this.echarts1_twos_y();
            this.echarts1_threes_y();
            this.Utilizations2_y();
            this.Utilizations3_y();
            this.Utilizations4_y();
            this.Utilization_linetwo_y();
          }
        } else if (time == "本周") {
          function getMonday(type, dates) {
            var now = new Date();
            var nowTime = now.getTime();
            var day = now.getDay();
            var longTime = 24 * 60 * 60 * 1000;
            var n = longTime * 7 * (dates || 0);
            if (type == "s") {
              var dd = nowTime - (day - 1) * longTime + n;
            }
            if (type == "e") {
              var dd = nowTime + (7 - day) * longTime + n;
            }
            dd = new Date(dd);
            var y = dd.getFullYear();
            var m = dd.getMonth() + 1;
            var d = dd.getDate();
            m = m < 10 ? "0" + m : m;
            d = d < 10 ? "0" + d : d;
            var day = y + "-" + m + "-" + d;
            return day;
          }
          this.time1 = [];
          this.time1.push(getMonday("s", 0));
          this.time1.push(getMonday("e", 0));
          if (this.name == 1) {
            this.echarts1_ones();
            this.echarts1_twos();
            this.echarts1_threes();
            this.Utilizations2();
            this.Utilizations3();
            this.Utilizations4();
            this.Utilization_linetwo();
          } else if (this.name == 2) {
            this.inout_echarts1_f();
          } else if (this.name == 4) {
            this.echarts1_ones_y();
            this.echarts1_twos_y();
            this.echarts1_threes_y();
            this.Utilizations2_y();
            this.Utilizations3_y();
            this.Utilizations4_y();
            this.Utilization_linetwo_y();
          }
        } else if (time == "本月") {
          function getMonth(type, months) {
            var d = new Date();
            var year = d.getFullYear();
            var month = d.getMonth() + 1;
            if (Math.abs(months) > 12) {
              months = months % 12;
            }
            if (months != 0) {
              if (month + months > 12) {
                year++;
                month = (month + months) % 12;
              } else if (month + months < 1) {
                year--;
                month = 12 + month + months;
              } else {
                month = month + months;
              }
            }
            month = month < 10 ? "0" + month : month;
            var date = d.getDate();
            var firstday = year + "-" + month + "-" + "01";
            var lastday = "";
            if (
              month == "01" ||
              month == "03" ||
              month == "05" ||
              month == "07" ||
              month == "08" ||
              month == "10" ||
              month == "12"
            ) {
              lastday = year + "-" + month + "-" + 31;
            } else if (month == "02") {
              if (
                (year % 4 == 0 && year % 100 != 0) ||
                (year % 100 == 0 && year % 400 == 0)
              ) {
                lastday = year + "-" + month + "-" + 29;
              } else {
                lastday = year + "-" + month + "-" + 28;
              }
            } else {
              lastday = year + "-" + month + "-" + 30;
            }
            var day = "";
            if (type == "s") {
              day = firstday;
            } else {
              day = lastday;
            }
            return day;
          }
          this.time1 = [];
          this.time1.push(getMonth("s", 0));
          this.time1.push(getMonth("e", 0));
          if (this.name == 1) {
            this.echarts1_ones();
            this.echarts1_twos();
            this.echarts1_threes();
            this.Utilizations2();
            this.Utilizations3();
            this.Utilizations4();
            this.Utilization_linetwo();
          } else if (this.name == 2) {
            this.inout_echarts1_f();
          } else if (this.name == 4) {
            this.echarts1_ones_y();
            this.echarts1_twos_y();
            this.echarts1_threes_y();
            this.Utilizations2_y();
            this.Utilizations3_y();
            this.Utilizations4_y();
            this.Utilization_linetwo_y();
          }
        }
        this.today_data = true;
      }
    },
    //Tab点击
    handleTabClick(name) {
      // //
      this.name = name;
      if (this.name == 1) {
        this.echarts1_ones();
        this.echarts1_twos();
        this.echarts1_threes();
        this.Utilizations2();
        this.Utilizations3();
        this.Utilizations4();
        this.Utilization_linetwo();
      } else if (this.name == 2) {
        this.inout_echarts1_f();
      } else if (this.name == 4) {
        this.echarts1_ones_y();
        this.echarts1_twos_y();
        this.echarts1_threes_y();
        this.Utilizations2_y();
        this.Utilizations3_y();
        this.Utilizations4_y();
        this.Utilization_linetwo_y();
      }
    },
    //车场概况
    surveys() {
      this.survey = echarts.init(this.$refs.survey);
      this.survey.showLoading({
        text: "数据正在加载...",
        textStyle: { fontSize: 30, color: "#444" },
        effectOption: { backgroundColor: "rgba(0, 0, 0, 0)" },
      });
      this.Utilization = echarts.init(this.$refs.Utilization);
      this.Utilization.showLoading({
        text: "数据正在加载...",
        textStyle: { fontSize: 30, color: "#444" },
        effectOption: { backgroundColor: "rgba(0, 0, 0, 0)" },
      });
      this.Utilization1 = echarts.init(this.$refs.Utilization1);
      this.Utilization1.showLoading({
        text: "数据正在加载...",
        textStyle: { fontSize: 30, color: "#444" },
        effectOption: { backgroundColor: "rgba(0, 0, 0, 0)" },
      });
      business_biz_prefecture_analysis().then((res) => {
        // console.log("res: ", res);
        let colorWidth =
          res.tempStallNum / (res.tempStallNum + res.fixStallNum);
        colorWidth = parseFloat((colorWidth * 100).toFixed(2));
        this.colorWidth = colorWidth + "%";

        let colorWidth1 =
          res.fixStallNum / (res.tempStallNum + res.fixStallNum);
        colorWidth1 = parseFloat((colorWidth1 * 100).toFixed(2));
        this.colorWidth1 = colorWidth1 + "%";
        // console.log(this.colorWidth1);
        this.survey.hideLoading();
        this.Utilization.hideLoading();
        this.Utilization1.hideLoading();
        this.car_numbers = res;
        let option = {
          title: {
            //   text: "某站点用户访问来源",
            //   subtext: "纯属虚构",
            //   left: "center",
          },
          tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b} : {c} ({d}%)",
          },
          legend: {
            show: false,
            orient: "vertical",
            left: "left",
            data: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"],
          },
          color: ["#FF6D60", "#F8D347", "#57C8F2"],
          series: [
            {
              name: "车场概况",
              type: "pie",
              radius: ["40%", "100%"],
              hoverAnimation: false,
              center: ["50%", "50%"],
              data: [
                { value: this.car_numbers.fixStallNum, name: "固定车位" },
                { value: this.car_numbers.tempStallNum, name: "临停车位" },
              ],
              itemStyle: {
                normal: {
                  label: {
                    show: false,
                  },
                },
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
              label: {
                //饼图图形上的文本标签
                normal: {
                  show: true,
                  position: "inner", //标签的位置
                  textStyle: {
                    fontWeight: 300,
                    fontSize: 12, //文字的字体大小
                  },
                  formatter: "{d}%",
                },
              },
            },
          ],
        };
        this.survey.setOption(option);
        this.Utilizations();
      });
    },
    //当前车位使用率（饼图）
    Utilizations() {
      this.Utilization = echarts.init(this.$refs.Utilization);
      let option = {
        title: {
          // text: "固定车位" + this.car_numbers.fixStallRate + "%",
          // subtext: "纯属虚构",
          left: "center",
          bottom: 0,
          textStyle: {
            fontSize: 20,
            fontWeight: 100,
          },
        },
        tooltip: {
          show: false,
          trigger: "item",
          formatter: "{a} <br/>{b} : {d}%",
        },
        legend: {
          show: false,
          orient: "vertical",
          left: "left",
          data: ["固定车位", "邮件营销", "联盟广告", "视频广告", "搜索引擎"],
        },
        color: ["#534DED", "#EFF3F5", "#9b59b6"],
        series: [
          {
            name: "车位使用率",
            type: "pie",
            radius: ["60%", "80%"],
            center: ["50%", "50%"],
            data: [
              {
                value: Number(this.car_numbers.fixStallRate),
                name: "固定车位",
                itemStyle: {
                  normal: {
                    //颜色渐变
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                      { offset: 0, color: "#84A1FD" },
                      { offset: 0.5, color: "#6E7CF6" },
                      { offset: 1, color: "#544EEF" },
                    ]),
                  },
                },
              },
              {
                value: 100 - Number(this.car_numbers.fixStallRate),
                name: "空白",
                itemStyle: {
                  normal: {
                    //颜色渐变
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                      { offset: 0, color: "#EFF3F6" },
                      { offset: 0.5, color: "#EFF3F6" },
                      { offset: 1, color: "#EFF3F6" },
                    ]),
                  },
                },
              },
            ],
            itemStyle: {
              normal: {
                label: {
                  show: false,
                },
              },
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        ],
      };
      this.Utilization.setOption(option);

      this.Utilization1 = echarts.init(this.$refs.Utilization1);
      let option1 = {
        title: {
          // text: "临停车位" + this.car_numbers.tempStallRate + "%",
          // subtext: "纯属虚构",
          left: "center",
          bottom: 0,
          textStyle: {
            fontSize: 20,
            fontWeight: 100,
          },
        },
        tooltip: {
          show: false,
          trigger: "item",
          formatter: "{a} <br/>{b} : {d}%",
        },
        legend: {
          show: false,
          orient: "vertical",
          left: "left",
          data: ["临停车位", "邮件营销", "联盟广告", "视频广告", "搜索引擎"],
        },
        color: ["#534DED", "#EFF3F5", "#9b59b6"],
        series: [
          {
            name: "车位使用率",
            type: "pie",
            radius: ["60%", "80%"],
            center: ["50%", "50%"],
            data: [
              {
                value: this.car_numbers.tempStallRate,
                name: "临停车位",
                itemStyle: {
                  normal: {
                    //颜色渐变
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                      { offset: 0, color: "#F99C4E" },
                      { offset: 0.5, color: "#F9675D" },
                      { offset: 1, color: "#F9605E" },
                    ]),
                  },
                },
              },
              {
                value: 100 - this.car_numbers.tempStallRate,
                name: "空白",
                itemStyle: {
                  normal: {
                    //颜色渐变
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                      { offset: 0, color: "#EFF3F6" },
                      { offset: 0.5, color: "#EFF3F6" },
                      { offset: 1, color: "#EFF3F6" },
                    ]),
                  },
                },
              },
            ],
            itemStyle: {
              normal: {
                label: {
                  show: false,
                },
              },
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        ],
      };
      this.Utilization1.setOption(option1);
    },
    //停车时长分布（固定车辆）
    echarts1_ones() {
      this.average_disabled = true;
      this.echarts1_one = echarts.init(this.$refs.echarts1_one);
      this.echarts1_one.showLoading({
        text: "数据正在加载...",
        textStyle: { fontSize: 30, color: "#444" },
        effectOption: { backgroundColor: "rgba(0, 0, 0, 0)" },
      });
      business_biz_prefecture_history_datav_list({
        type: 1,
        category: 1,
        startDate: this.time1[0],
        endDate: this.time1[1],
        averageFlag: this.average ? 1 : 0,
        floor: this.floor.value == 0 ? null : this.floor.value,
      }).then((res) => {
        this.average_disabled = false;
        this.echarts1_one.hideLoading();
        let option1 = {
          title: {
            text: "停车时长分布",
            subtext: "停车场",
          },
          tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b}: {c} ({d}%)",
          },
          legend: {
            selectedMode: false,
            orient: "vertical",
            left: 10,
            top: 50,
            data: [
              "15分钟",
              "15-30分钟",
              "30-60分钟",
              "1-2小时",
              "2-3小时",
              "3-6小时",
              "6小时以上",
            ],
          },
          graphic: {
            type: "text",
            left: "center",
            top: "center",
            style: {
              text: "固定车辆",
              textAlign: "center",
              fill: "#333",
              fontSize: 16,
              fontWeight: 300,
            },
          },
          series: [
            {
              name: "停车时长",
              type: "pie",
              center: ["50%", "50%"],
              radius: ["35%", "55%"],
              labelLine: {
                normal: {
                  length: 30,
                },
              },
              data: [
                { value: res[0].y, name: "15分钟" },
                { value: res[1].y, name: "15-30分钟" },
                { value: res[2].y, name: "30-60分钟" },
                { value: res[3].y, name: "1-2小时" },
                { value: res[4].y, name: "2-3小时" },
                { value: res[5].y, name: "3-6小时" },
                { value: res[6].y, name: "6小时以上" },
              ],
            },
          ],
        };
        this.echarts1_one.setOption(option1);
      });
    },
    //停车时长分布（固定车辆）原版
    echarts1_ones_y() {
      this.average_disabled = true;
      this.echarts1_one_y = echarts.init(this.$refs.echarts1_one_y);
      this.echarts1_one_y.showLoading({
        text: "数据正在加载...",
        textStyle: { fontSize: 30, color: "#444" },
        effectOption: { backgroundColor: "rgba(0, 0, 0, 0)" },
      });
      business_biz_prefecture_history_datav_list({
        type: 1,
        category: 1,
        startDate: this.time1[0],
        endDate: this.time1[1],
        averageFlag: this.average ? 1 : 0,
        floor: this.floor.value == 0 ? null : this.floor.value,
      }).then((res) => {
        this.average_disabled = false;
        this.echarts1_one_y.hideLoading();
        let option1 = {
          title: {
            text: "停车时长分布",
            subtext: "停车场",
          },
          tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b}: {c} ({d}%)",
          },
          legend: {
            selectedMode: false,
            orient: "vertical",
            left: 10,
            top: 50,
            data: [
              "15分钟",
              "15-30分钟",
              "30-60分钟",
              "1-2小时",
              "2-3小时",
              "3-6小时",
              "6小时以上",
            ],
          },
          graphic: {
            type: "text",
            left: "center",
            top: "center",
            style: {
              text: "固定车辆",
              textAlign: "center",
              fill: "#333",
              fontSize: 16,
              fontWeight: 300,
            },
          },
          series: [
            {
              name: "停车时长",
              type: "pie",
              center: ["50%", "50%"],
              radius: ["35%", "55%"],
              labelLine: {
                normal: {
                  length: 30,
                },
              },
              data: [
                { value: res[0].y, name: "15分钟" },
                { value: res[1].y, name: "15-30分钟" },
                { value: res[2].y, name: "30-60分钟" },
                { value: res[3].y, name: "1-2小时" },
                { value: res[4].y, name: "2-3小时" },
                { value: res[5].y, name: "3-6小时" },
                { value: res[6].y, name: "6小时以上" },
              ],
            },
          ],
        };
        this.echarts1_one_y.setOption(option1);
      });
    },
    //停车时长分布（临停车辆）
    echarts1_twos() {
      this.average_disabled = true;
      this.echarts1_two = echarts.init(this.$refs.echarts1_two);
      this.echarts1_two.showLoading({
        text: "数据正在加载...",
        textStyle: { fontSize: 30, color: "#444" },
        effectOption: { backgroundColor: "rgba(0, 0, 0, 0)" },
      });
      business_biz_prefecture_history_datav_list({
        type: 0,
        category: 1,
        startDate: this.time1[0],
        endDate: this.time1[1],
        averageFlag: this.average ? 1 : 0,
        floor: this.floor.value == 0 ? null : this.floor.value,
      }).then((res) => {
        this.echarts1_two.hideLoading();
        this.average_disabled = false;
        let option = {
          title: {
            show: false,
            text: "停车时长分布",
            subtext: "停车场",
          },
          tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b}: {c} ({d}%)",
          },
          legend: {
            show: false,
            orient: "vertical",
            left: 10,
            top: 50,
            data: [
              "15分钟",
              "15-30分钟",
              "30-60分钟",
              "1-2小时",
              "2-3小时",
              "3-6小时",
              "6小时以上",
            ],
          },
          graphic: {
            type: "text",
            left: "center",
            top: "center",
            style: {
              text: "临停车辆",
              textAlign: "center",
              fill: "#333",
              fontSize: 16,
              fontWeight: 300,
            },
          },
          series: [
            {
              name: "停车时长",
              type: "pie",
              center: ["50%", "50%"],
              radius: ["35%", "55%"],
              labelLine: {
                normal: {
                  length: 30,
                },
              },
              data: [
                { value: res[0].y, name: "15分钟" },
                { value: res[1].y, name: "15-30分钟" },
                { value: res[2].y, name: "30-60分钟" },
                { value: res[3].y, name: "1-2小时" },
                { value: res[4].y, name: "2-3小时" },
                { value: res[5].y, name: "3-6小时" },
                { value: res[6].y, name: "6小时以上" },
              ],
            },
          ],
        };
        this.echarts1_two.setOption(option);
      });
    },
    //停车时长分布（临停车辆）原版
    echarts1_twos_y() {
      this.average_disabled = true;
      this.echarts1_two_y = echarts.init(this.$refs.echarts1_two_y);
      this.echarts1_two_y.showLoading({
        text: "数据正在加载...",
        textStyle: { fontSize: 30, color: "#444" },
        effectOption: { backgroundColor: "rgba(0, 0, 0, 0)" },
      });
      business_biz_prefecture_history_datav_list({
        type: 0,
        category: 1,
        startDate: this.time1[0],
        endDate: this.time1[1],
        averageFlag: this.average ? 1 : 0,
        floor: this.floor.value == 0 ? null : this.floor.value,
      }).then((res) => {
        this.echarts1_two_y.hideLoading();
        this.average_disabled = false;
        let option = {
          title: {
            show: false,
            text: "停车时长分布",
            subtext: "停车场",
          },
          tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b}: {c} ({d}%)",
          },
          legend: {
            show: false,
            orient: "vertical",
            left: 10,
            top: 50,
            data: [
              "15分钟",
              "15-30分钟",
              "30-60分钟",
              "1-2小时",
              "2-3小时",
              "3-6小时",
              "6小时以上",
            ],
          },
          graphic: {
            type: "text",
            left: "center",
            top: "center",
            style: {
              text: "临停车辆",
              textAlign: "center",
              fill: "#333",
              fontSize: 16,
              fontWeight: 300,
            },
          },
          series: [
            {
              name: "停车时长",
              type: "pie",
              center: ["50%", "50%"],
              radius: ["35%", "55%"],
              labelLine: {
                normal: {
                  length: 30,
                },
              },
              data: [
                { value: res[0].y, name: "15分钟" },
                { value: res[1].y, name: "15-30分钟" },
                { value: res[2].y, name: "30-60分钟" },
                { value: res[3].y, name: "1-2小时" },
                { value: res[4].y, name: "2-3小时" },
                { value: res[5].y, name: "3-6小时" },
                { value: res[6].y, name: "6小时以上" },
              ],
            },
          ],
        };
        this.echarts1_two_y.setOption(option);
      });
    },
    //停车时长分布（包月不固定）
    echarts1_threes() {
      this.echarts1_three = echarts.init(this.$refs.echarts1_three);
      let option = {
        title: {
          show: false,
          text: "停车时长分布",
          subtext: "停车场",
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)",
        },
        legend: {
          show: false,
          orient: "vertical",
          left: 10,
          top: 50,
          data: [
            "15分钟",
            "15-30分钟",
            "30-60分钟",
            "1-2小时",
            "2-3小时",
            "3-6小时",
            "6小时以上",
          ],
        },
        graphic: {
          type: "text",
          left: "center",
          top: "center",
          style: {
            text: "包月不固定",
            textAlign: "center",
            fill: "#333",
            fontSize: 16,
            fontWeight: 300,
          },
        },
        series: [
          {
            name: "停车时长",
            type: "pie",
            center: ["50%", "50%"],
            radius: ["35%", "55%"],
            labelLine: {
              normal: {
                length: 30,
              },
            },
            data: [
              { value: 0, name: "15分钟" },
              { value: 0, name: "15-30分钟" },
              { value: 0, name: "30-60分钟" },
              { value: 0, name: "1-2小时" },
              { value: 0, name: "2-3小时" },
              { value: 0, name: "3-6小时" },
              { value: 0, name: "6小时以上" },
            ],
          },
        ],
      };
      this.echarts1_three.setOption(option);
    },
    //停车时长分布（包月不固定）原版
    echarts1_threes_y() {
      this.echarts1_three_y = echarts.init(this.$refs.echarts1_three_y);
      let option = {
        title: {
          show: false,
          text: "停车时长分布",
          subtext: "停车场",
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)",
        },
        legend: {
          show: false,
          orient: "vertical",
          left: 10,
          top: 50,
          data: [
            "15分钟",
            "15-30分钟",
            "30-60分钟",
            "1-2小时",
            "2-3小时",
            "3-6小时",
            "6小时以上",
          ],
        },
        graphic: {
          type: "text",
          left: "center",
          top: "center",
          style: {
            text: "包月不固定",
            textAlign: "center",
            fill: "#333",
            fontSize: 16,
            fontWeight: 300,
          },
        },
        series: [
          {
            name: "停车时长",
            type: "pie",
            center: ["50%", "50%"],
            radius: ["35%", "55%"],
            labelLine: {
              normal: {
                length: 30,
              },
            },
            data: [
              { value: 0, name: "15分钟" },
              { value: 0, name: "15-30分钟" },
              { value: 0, name: "30-60分钟" },
              { value: 0, name: "1-2小时" },
              { value: 0, name: "2-3小时" },
              { value: 0, name: "3-6小时" },
              { value: 0, name: "6小时以上" },
            ],
          },
        ],
      };
      this.echarts1_three_y.setOption(option);
    },

    //车流量
    Utilization_linetwo() {
      let that = this;
      this.average_disabled = true;
      function getNextDate(date, day) {
        var dd = new Date(date);
        dd.setDate(dd.getDate() + day);
        var y = dd.getFullYear();
        var m =
          dd.getMonth() + 1 < 10
            ? "0" + (dd.getMonth() + 1)
            : dd.getMonth() + 1;
        var d = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate();
        return y + "-" + m + "-" + d;
      }

      function getHour(s1, s2) {
        s1 = new Date(s1.replace(/-/g, "/"));
        s2 = new Date(s2.replace(/-/g, "/"));
        var ms = Math.abs(s1.getTime() - s2.getTime());
        return Math.ceil(ms / 1000 / 60 / 60);
      }
      let numbers_list = [];
      let number = -1;
      let numbers = 0;
      let date = getNextDate(this.time1[0], 0);
      if (!this.average) {
        for (
          let i = 0;
          i < getHour(this.time1[0] + " 00:00:00", this.time1[1] + " 23:59:59");
          i++
        ) {
          number += 1;
          if (number < 24) {
            numbers_list.push(date + " " + number + "时");
          } else {
            number = 0;
            date = getNextDate(this.time1[0], (numbers += 1));
            numbers_list.push(date + " " + number + "时");
          }
        }
        numbers_list.splice(0, 0, "product");
        //
      } else {
        numbers_list = [
          "product",
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "18",
          "19",
          "20",
          "21",
          "22",
          "23",
        ];
      }
      this.Utilization_linetwo1 = echarts.init(this.$refs.Utilization_linetwo);
      this.Utilization_linetwo1.showLoading({
        text: "数据正在加载...",
        textStyle: { fontSize: 30, color: "#444" },
        effectOption: { backgroundColor: "rgba(0, 0, 0, 0)" },
      });
      Administration_admin_biz_prefecture_flow({
        startDate: this.time1[0],
        endDate: this.time1[1],
        averageFlag: this.average ? 1 : 0,
        floor: this.floor.value == 0 ? null : this.floor.value,
      }).then((res) => {
        this.Utilization_linetwo1.hideLoading();
        this.average_disabled = false;
        //固定入场
        let in_data1 = [];
        //临停入场
        let in_data2 = [];
        //固定出场
        let out_data1 = [];
        //临停出场
        let out_data2 = [];
        res.map((response) => {
          if (response.totaltime == 1) {
            if (response.type == 1) {
              in_data1.push(response);
            } else {
              in_data2.push(response);
            }
          } else {
            if (response.type == 1) {
              out_data1.push(response);
            } else {
              out_data2.push(response);
            }
          }
        });
        in_data1.sort(function (a, b) {
          if (a.day) {
            return (
              new Date(a.day + a.time + ":00:00") -
              new Date(a.day + b.time + ":00:00")
            );
          } else {
            return a.time - b.time;
          }
        });
        in_data2.sort(function (a, b) {
          if (a.day) {
            return (
              new Date(a.day + a.time + ":00:00") -
              new Date(a.day + b.time + ":00:00")
            );
          } else {
            return a.time - b.time;
          }
        });
        out_data1.sort(function (a, b) {
          if (a.day) {
            return (
              new Date(a.day + a.time + ":00:00") -
              new Date(a.day + b.time + ":00:00")
            );
          } else {
            return a.time - b.time;
          }
        });
        out_data2.sort(function (a, b) {
          if (a.day) {
            return (
              new Date(a.day + a.time + ":00:00") -
              new Date(a.day + b.time + ":00:00")
            );
          } else {
            return a.time - b.time;
          }
        });
        //固定入场
        let in_data1s = ["固定入场"];
        //临停入场
        let in_data2s = ["临停入场"];
        //固定出场
        let out_data1s = ["固定出场"];
        //临停出场
        let out_data2s = ["临停出场"];
        in_data1.map((res) => {
          in_data1s.push(res.rate);
        });
        in_data2.map((res) => {
          in_data2s.push(res.rate);
        });
        out_data1.map((res) => {
          out_data1s.push(res.rate);
        });
        out_data2.map((res) => {
          out_data2s.push(res.rate);
        });
        let option = {
          title: {
            text: "车流量",
            subtext: "停车场",
          },
          legend: {},
          tooltip: {
            trigger: "axis",
            show: true,
          },
          dataset: {
            source: [
              numbers_list,
              in_data1s,
              in_data2s,
              out_data1s,
              out_data2s,
            ],
          },
          xAxis: { type: "category" },
          yAxis: {
            gridIndex: 0,
            type: "value",
            name: "",
            min: 0,
            axisLabel: {
              formatter: "{value}",
            },
          },
          grid: {
            x: 95,
            y: 45,
            x2: 40,
            y2: 40,
            borderWidth: 1,
            tooltip: {
              trigger: "axis",
              axisPointer: {
                type: "shadow",
                label: {
                  show: true,
                  formatter: function (params) {
                    return params.value.replace("\n", "");
                  },
                },
              },
            },
          },
          series: [
            {
              type: "bar",
              smooth: true,
              seriesLayoutBy: "row",
              emphasis: { focus: "series" },
              stack: "入场",
            },
            {
              type: "bar",
              smooth: true,
              seriesLayoutBy: "row",
              emphasis: { focus: "series" },
              stack: "入场",
            },
            {
              type: "bar",
              smooth: true,
              seriesLayoutBy: "row",
              emphasis: { focus: "series" },
              stack: "离场",
            },
            {
              type: "bar",
              smooth: true,
              seriesLayoutBy: "row",
              emphasis: { focus: "series" },
              stack: "离场",
            },
            {
              type: "pie",
              id: "pie",
              radius: "50%",
              center: ["20%", "35%"],
              emphasis: { focus: "data" },
              label: {
                formatter: "{b}: {@" + numbers_list[1] + "} ({d}%)",
              },
              encode: {
                itemName: "product",
                value: numbers_list[1],
                tooltip: numbers_list[1],
              },
            },
          ],
        };

        var indexs = "";
        this.Utilization_linetwo1.on("updateAxisPointer", function (event) {
          var xAxisInfo = event.axesInfo[0];
          if (xAxisInfo) {
            var dimension = xAxisInfo.value + 1;
            if (indexs == dimension) {
              return;
            } else {
              indexs = dimension;
            }
            that.Utilization_linetwo1.setOption({
              series: {
                id: "pie",
                label: {
                  formatter: "{b}: {@[" + dimension + "]} ({d}%)",
                },
                encode: {
                  value: dimension,
                  tooltip: dimension,
                },
              },
            });
          }
        });
        this.Utilization_linetwo1.setOption(option);
      });
    },

    //车流量(原版)
    Utilization_linetwo_y() {
      let that = this;
      this.average_disabled = true;
      function getNextDate(date, day) {
        var dd = new Date(date);
        dd.setDate(dd.getDate() + day);
        var y = dd.getFullYear();
        var m =
          dd.getMonth() + 1 < 10
            ? "0" + (dd.getMonth() + 1)
            : dd.getMonth() + 1;
        var d = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate();
        return y + "-" + m + "-" + d;
      }

      function getHour(s1, s2) {
        s1 = new Date(s1.replace(/-/g, "/"));
        s2 = new Date(s2.replace(/-/g, "/"));
        var ms = Math.abs(s1.getTime() - s2.getTime());
        return Math.ceil(ms / 1000 / 60 / 60);
      }
      let numbers_list = [];
      let number = -1;
      let numbers = 0;
      let date = getNextDate(this.time1[0], 0);
      if (!this.average) {
        for (
          let i = 0;
          i < getHour(this.time1[0] + " 00:00:00", this.time1[1] + " 23:59:59");
          i++
        ) {
          number += 1;
          if (number < 24) {
            numbers_list.push(date + " " + number + "时");
          } else {
            number = 0;
            date = getNextDate(this.time1[0], (numbers += 1));
            numbers_list.push(date + " " + number + "时");
          }
        }
        numbers_list.splice(0, 0, "product");
        //
      } else {
        numbers_list = [
          "product",
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "18",
          "19",
          "20",
          "21",
          "22",
          "23",
        ];
      }
      this.Utilization_linetwo1_y = echarts.init(
        this.$refs.Utilization_linetwo_y
      );
      this.Utilization_linetwo1_y.showLoading({
        text: "数据正在加载...",
        textStyle: { fontSize: 30, color: "#444" },
        effectOption: { backgroundColor: "rgba(0, 0, 0, 0)" },
      });
      Administration_admin_biz_prefecture_flow({
        startDate: this.time1[0],
        endDate: this.time1[1],
        averageFlag: this.average ? 1 : 0,
        floor: this.floor.value == 0 ? null : this.floor.value,
      }).then((res) => {
        this.Utilization_linetwo1_y.hideLoading();
        this.average_disabled = false;
        //固定入场
        let in_data1 = [];
        //临停入场
        let in_data2 = [];
        //固定出场
        let out_data1 = [];
        //临停出场
        let out_data2 = [];
        res.map((response) => {
          if (response.totaltime == 1) {
            if (response.type == 1) {
              in_data1.push(response);
            } else {
              in_data2.push(response);
            }
          } else {
            if (response.type == 1) {
              out_data1.push(response);
            } else {
              out_data2.push(response);
            }
          }
        });
        in_data1.sort(function (a, b) {
          if (a.day) {
            return (
              new Date(a.day + a.time + ":00:00") -
              new Date(a.day + b.time + ":00:00")
            );
          } else {
            return a.time - b.time;
          }
        });
        in_data2.sort(function (a, b) {
          if (a.day) {
            return (
              new Date(a.day + a.time + ":00:00") -
              new Date(a.day + b.time + ":00:00")
            );
          } else {
            return a.time - b.time;
          }
        });
        out_data1.sort(function (a, b) {
          if (a.day) {
            return (
              new Date(a.day + a.time + ":00:00") -
              new Date(a.day + b.time + ":00:00")
            );
          } else {
            return a.time - b.time;
          }
        });
        out_data2.sort(function (a, b) {
          if (a.day) {
            return (
              new Date(a.day + a.time + ":00:00") -
              new Date(a.day + b.time + ":00:00")
            );
          } else {
            return a.time - b.time;
          }
        });
        //固定入场
        let in_data1s = ["固定入场"];
        //临停入场
        let in_data2s = ["临停入场"];
        //固定出场
        let out_data1s = ["固定出场"];
        //临停出场
        let out_data2s = ["临停出场"];
        in_data1.map((res) => {
          in_data1s.push(res.rate);
        });
        in_data2.map((res) => {
          in_data2s.push(res.rate);
        });
        out_data1.map((res) => {
          out_data1s.push(res.rate);
        });
        out_data2.map((res) => {
          out_data2s.push(res.rate);
        });
        let option = {
          title: {
            text: "车流量",
            subtext: "停车场",
          },
          legend: {},
          tooltip: {
            trigger: "axis",
            show: true,
          },
          dataset: {
            source: [
              numbers_list,
              in_data1s,
              in_data2s,
              out_data1s,
              out_data2s,
            ],
          },
          xAxis: { type: "category" },
          yAxis: {
            gridIndex: 0,
            type: "value",
            name: "",
            min: 0,
            axisLabel: {
              formatter: "{value}",
            },
          },
          grid: {
            x: 95,
            y: 45,
            x2: 40,
            y2: 40,
            borderWidth: 1,
            tooltip: {
              trigger: "axis",
              axisPointer: {
                type: "shadow",
                label: {
                  show: true,
                  formatter: function (params) {
                    return params.value.replace("\n", "");
                  },
                },
              },
            },
          },
          series: [
            {
              type: "bar",
              smooth: true,
              seriesLayoutBy: "row",
              emphasis: { focus: "series" },
              stack: "入场",
            },
            {
              type: "bar",
              smooth: true,
              seriesLayoutBy: "row",
              emphasis: { focus: "series" },
              stack: "入场",
            },
            {
              type: "bar",
              smooth: true,
              seriesLayoutBy: "row",
              emphasis: { focus: "series" },
              stack: "离场",
            },
            {
              type: "bar",
              smooth: true,
              seriesLayoutBy: "row",
              emphasis: { focus: "series" },
              stack: "离场",
            },
            {
              type: "pie",
              id: "pie",
              radius: "50%",
              center: ["20%", "35%"],
              emphasis: { focus: "data" },
              label: {
                formatter: "{b}: {@" + numbers_list[1] + "} ({d}%)",
              },
              encode: {
                itemName: "product",
                value: numbers_list[1],
                tooltip: numbers_list[1],
              },
            },
          ],
        };

        var indexs = "";
        this.Utilization_linetwo1_y.on("updateAxisPointer", function (event) {
          var xAxisInfo = event.axesInfo[0];
          if (xAxisInfo) {
            var dimension = xAxisInfo.value + 1;
            if (indexs == dimension) {
              return;
            } else {
              indexs = dimension;
            }
            that.Utilization_linetwo1_y.setOption({
              series: {
                id: "pie",
                label: {
                  formatter: "{b}: {@[" + dimension + "]} ({d}%)",
                },
                encode: {
                  value: dimension,
                  tooltip: dimension,
                },
              },
            });
          }
        });
        this.Utilization_linetwo1_y.setOption(option);
      });
    },
    // 车位利用率（柱状图）
    Utilizations2() {
      this.average_disabled = true;
      function getNextDate(date, day) {
        var dd = new Date(date);
        dd.setDate(dd.getDate() + day);
        var y = dd.getFullYear();
        var m =
          dd.getMonth() + 1 < 10
            ? "0" + (dd.getMonth() + 1)
            : dd.getMonth() + 1;
        var d = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate();
        return y + "-" + m + "-" + d;
      }

      function getHour(s1, s2) {
        s1 = new Date(s1.replace(/-/g, "/"));
        s2 = new Date(s2.replace(/-/g, "/"));
        var ms = Math.abs(s1.getTime() - s2.getTime());
        return Math.ceil(ms / 1000 / 60 / 60);
      }
      let numbers_list = [];
      let number = -1;
      let numbers = 0;
      let date = getNextDate(this.time1[0], 0);
      if (!this.average) {
        for (
          let i = 0;
          i < getHour(this.time1[0] + " 00:00:00", this.time1[1] + " 23:59:59");
          i++
        ) {
          number += 1;
          if (number < 24) {
            numbers_list.push(date + " " + number + "时");
          } else {
            number = 0;
            date = getNextDate(this.time1[0], (numbers += 1));
            numbers_list.push(date + " " + number + "时");
          }
        }
      } else {
        numbers_list = [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "18",
          "19",
          "20",
          "21",
          "22",
          "23",
        ];
      }
      // //console.log(
      //   getHour(this.time1[0] + " 00:00:00", this.time1[1] + " 23:59:59")
      // );
      this.Utilization2 = echarts.init(this.$refs.Utilization2);
      this.Utilization2.showLoading({
        text: "数据正在加载...",
        textStyle: { fontSize: 30, color: "#444" },
        effectOption: { backgroundColor: "rgba(0, 0, 0, 0)" },
      });
      business_biz_prefecture_stall_rate({
        startDate: this.time1[0],
        endDate: this.time1[1],
        averageFlag: this.average ? 1 : 0,
        floor: this.floor.value == 0 ? null : this.floor.value,
      }).then((res) => {
        //
        this.average_disabled = false;
        this.Utilization2.hideLoading();
        //固定
        let data1 = [];
        //临停
        let data2 = [];
        // 整体
        let data3 = [];
        res.map((response) => {
          //
          if (response.type == 0) {
            data2.push(response);
          } else if (response.type == 1) {
            data1.push(response);
          } else if (response.type == 2) {
            data3.push(response);
          }
        });
        data1.sort(function (a, b) {
          return new Date(a.time + ":00:00") - new Date(b.time + ":00:00");
        });
        data2.sort(function (a, b) {
          return new Date(a.time + ":00:00") - new Date(b.time + ":00:00");
        });
        data3.sort(function (a, b) {
          return new Date(a.time + ":00:00") - new Date(b.time + ":00:00");
        });
        let data1s = [];
        let data2s = [];
        let data3s = [];
        data1.map((res) => {
          data1s.push(res.rate);
        });
        data2.map((res) => {
          data2s.push(res.rate);
        });
        data3.map((res) => {
          data3s.push(res.rate);
        });
        //
        let option = {
          title: {
            text: "车位利用率",
            subtext: "停车场",
          },
          grid: {
            x: 95,
            y: 45,
            x2: 40,
            y2: 40,
            borderWidth: 1,
          },
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "cross",
              crossStyle: {
                color: "#999",
              },
            },
            formatter(datas) {
              var res = datas[0].name + "<br/>",
                val;
              for (var i = 0, length = datas.length; i < length; i++) {
                val = datas[i].value + "%";
                res += datas[i].seriesName + "：" + val + "<br/>";
              }
              return res;
            },
          },
          toolbox: {
            feature: {
              dataView: { show: false, readOnly: false },
              magicType: { show: false, type: ["line", "bar"] },
              restore: { show: false },
              saveAsImage: { show: false },
            },
          },
          legend: {
            data: ["固定车位", "临停车位", "车场整体"],
          },
          xAxis: [
            {
              type: "category",
              data: numbers_list,
              axisPointer: {
                type: "shadow",
              },
            },
          ],
          yAxis: [
            {
              type: "value",
              name: "",
              min: 0,
              axisLabel: {
                formatter: "{value}%",
              },
            },
            {
              type: "value",
              name: "",
              min: 0,
              axisLabel: {
                formatter: "{value}%",
              },
            },
          ],
          series: [
            {
              name: "固定车位",
              type: "bar",
              smooth: true,
              data: data1s,
              markPoint: {
                data: [
                  { type: "max", name: "最大值" },
                  { type: "min", name: "最小值" },
                ],
              },
              markLine: {
                data: [{ type: "average", name: "平均值" }],
              },
            },
            {
              name: "临停车位",
              type: "bar",
              smooth: true,
              data: data2s,
              markPoint: {
                data: [
                  { type: "max", name: "最大值" },
                  { type: "min", name: "最小值" },
                ],
              },
              markLine: {
                data: [{ type: "average", name: "平均值" }],
              },
            },
            {
              name: "车场整体",
              type: "line",
              smooth: true,
              data: data3s,
            },
          ],
        };
        this.Utilization2.setOption(option);
      });
    },
    // 车位利用率（柱状图）原版
    Utilizations2_y() {
      this.average_disabled = true;
      function getNextDate(date, day) {
        var dd = new Date(date);
        dd.setDate(dd.getDate() + day);
        var y = dd.getFullYear();
        var m =
          dd.getMonth() + 1 < 10
            ? "0" + (dd.getMonth() + 1)
            : dd.getMonth() + 1;
        var d = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate();
        return y + "-" + m + "-" + d;
      }

      function getHour(s1, s2) {
        s1 = new Date(s1.replace(/-/g, "/"));
        s2 = new Date(s2.replace(/-/g, "/"));
        var ms = Math.abs(s1.getTime() - s2.getTime());
        return Math.ceil(ms / 1000 / 60 / 60);
      }
      let numbers_list = [];
      let number = -1;
      let numbers = 0;
      let date = getNextDate(this.time1[0], 0);
      if (!this.average) {
        for (
          let i = 0;
          i < getHour(this.time1[0] + " 00:00:00", this.time1[1] + " 23:59:59");
          i++
        ) {
          number += 1;
          if (number < 24) {
            numbers_list.push(date + " " + number + "时");
          } else {
            number = 0;
            date = getNextDate(this.time1[0], (numbers += 1));
            numbers_list.push(date + " " + number + "时");
          }
        }
      } else {
        numbers_list = [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "18",
          "19",
          "20",
          "21",
          "22",
          "23",
        ];
      }
      // //console.log(
      //   getHour(this.time1[0] + " 00:00:00", this.time1[1] + " 23:59:59")
      // );
      this.Utilization2_y = echarts.init(this.$refs.Utilization2_y);
      this.Utilization2_y.showLoading({
        text: "数据正在加载...",
        textStyle: { fontSize: 30, color: "#444" },
        effectOption: { backgroundColor: "rgba(0, 0, 0, 0)" },
      });
      business_biz_prefecture_stall_rate({
        startDate: this.time1[0],
        endDate: this.time1[1],
        averageFlag: this.average ? 1 : 0,
        floor: this.floor.value == 0 ? null : this.floor.value,
      }).then((res) => {
        //
        this.average_disabled = false;
        this.Utilization2_y.hideLoading();
        //固定
        let data1 = [];
        //临停
        let data2 = [];
        // 整体
        let data3 = [];
        res.map((response) => {
          //
          if (response.type == 0) {
            data2.push(response);
          } else if (response.type == 1) {
            data1.push(response);
          } else if (response.type == 2) {
            data3.push(response);
          }
        });
        data1.sort(function (a, b) {
          return new Date(a.time + ":00:00") - new Date(b.time + ":00:00");
        });
        data2.sort(function (a, b) {
          return new Date(a.time + ":00:00") - new Date(b.time + ":00:00");
        });
        data3.sort(function (a, b) {
          return new Date(a.time + ":00:00") - new Date(b.time + ":00:00");
        });
        let data1s = [];
        let data2s = [];
        let data3s = [];
        data1.map((res) => {
          data1s.push(res.rate);
        });
        data2.map((res) => {
          data2s.push(res.rate);
        });
        data3.map((res) => {
          data3s.push(res.rate);
        });
        //
        let option = {
          title: {
            text: "车位利用率",
            subtext: "停车场",
          },
          grid: {
            x: 95,
            y: 45,
            x2: 40,
            y2: 40,
            borderWidth: 1,
          },
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "cross",
              crossStyle: {
                color: "#999",
              },
            },
            formatter(datas) {
              var res = datas[0].name + "<br/>",
                val;
              for (var i = 0, length = datas.length; i < length; i++) {
                val = datas[i].value + "%";
                res += datas[i].seriesName + "：" + val + "<br/>";
              }
              return res;
            },
          },
          toolbox: {
            feature: {
              dataView: { show: false, readOnly: false },
              magicType: { show: false, type: ["line", "bar"] },
              restore: { show: false },
              saveAsImage: { show: false },
            },
          },
          legend: {
            data: ["固定车位", "临停车位", "车场整体"],
          },
          xAxis: [
            {
              type: "category",
              data: numbers_list,
              axisPointer: {
                type: "shadow",
              },
            },
          ],
          yAxis: [
            {
              type: "value",
              name: "",
              min: 0,
              axisLabel: {
                formatter: "{value}%",
              },
            },
            {
              type: "value",
              name: "",
              min: 0,
              axisLabel: {
                formatter: "{value}%",
              },
            },
          ],
          series: [
            {
              name: "固定车位",
              type: "bar",
              smooth: true,
              data: data1s,
              markPoint: {
                data: [
                  { type: "max", name: "最大值" },
                  { type: "min", name: "最小值" },
                ],
              },
              markLine: {
                data: [{ type: "average", name: "平均值" }],
              },
            },
            {
              name: "临停车位",
              type: "bar",
              smooth: true,
              data: data2s,
              markPoint: {
                data: [
                  { type: "max", name: "最大值" },
                  { type: "min", name: "最小值" },
                ],
              },
              markLine: {
                data: [{ type: "average", name: "平均值" }],
              },
            },
            {
              name: "车场整体",
              type: "line",
              smooth: true,
              data: data3s,
            },
          ],
        };
        this.Utilization2_y.setOption(option);
      });
    },
    // 车位周转率（柱状图）
    Utilizations3() {
      this.average_disabled = true;
      function getNextDate(date, day) {
        var dd = new Date(date);
        dd.setDate(dd.getDate() + day);
        var y = dd.getFullYear();
        var m =
          dd.getMonth() + 1 < 10
            ? "0" + (dd.getMonth() + 1)
            : dd.getMonth() + 1;
        var d = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate();
        return y + "-" + m + "-" + d;
      }
      // //

      function getHour(s1, s2) {
        s1 = new Date(s1.replace(/-/g, "/"));
        s2 = new Date(s2.replace(/-/g, "/"));
        var ms = Math.abs(s1.getTime() - s2.getTime());
        return Math.ceil(ms / 1000 / 60 / 60);
      }
      let numbers_list = [];
      let number = -1;
      let numbers = 0;
      let date = getNextDate(this.time1[0], 0);
      if (!this.average) {
        for (
          let i = 0;
          i < getHour(this.time1[0] + " 00:00:00", this.time1[1] + " 23:59:59");
          i++
        ) {
          number += 1;
          if (number < 24) {
            numbers_list.push(date + " " + number + "时");
          } else {
            number = 0;
            date = getNextDate(this.time1[0], (numbers += 1));
            numbers_list.push(date + " " + number + "时");
          }
        }
        //
      } else {
        numbers_list = [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "18",
          "19",
          "20",
          "21",
          "22",
          "23",
        ];
      }
      this.Utilization3 = echarts.init(this.$refs.Utilization3);
      this.Utilization3.showLoading({
        text: "数据正在加载...",
        textStyle: { fontSize: 30, color: "#444" },
        effectOption: { backgroundColor: "rgba(0, 0, 0, 0)" },
      });
      business_biz_prefecture_turnover_rate({
        startDate: this.time1[0],
        endDate: this.time1[1],
        averageFlag: this.average ? 1 : 0,
        floor: this.floor.value == 0 ? null : this.floor.value,
      }).then((res) => {
        //
        this.average_disabled = false;
        this.Utilization3.hideLoading();
        //固定
        let data1 = [];
        //临停
        let data2 = [];
        // 全部
        let data3 = [];
        res.map((response) => {
          //
          if (response.type == 0) {
            data2.push(response);
          } else if (response.type == 1) {
            data1.push(response);
          } else if (response.type == 2) {
            data3.push(response);
          }
        });
        data1.sort(function (a, b) {
          return new Date(a.time + ":00:00") - new Date(b.time + ":00:00");
        });
        data2.sort(function (a, b) {
          return new Date(a.time + ":00:00") - new Date(b.time + ":00:00");
        });
        data3.sort(function (a, b) {
          return new Date(a.time + ":00:00") - new Date(b.time + ":00:00");
        });
        let data1s = [];
        let data2s = [];
        let data3s = [];
        data1.map((res) => {
          data1s.push(res.rate);
        });
        data2.map((res) => {
          data2s.push(res.rate);
        });
        data3.map((res) => {
          data3s.push(res.rate);
        });
        let option = {
          title: {
            text: "车位周转率",
            subtext: "停车场",
          },
          grid: {
            x: 95,
            y: 45,
            x2: 40,
            y2: 40,
            borderWidth: 1,
          },
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "cross",
              crossStyle: {
                color: "#999",
              },
            },
            formatter(datas) {
              var res = datas[0].name + "<br/>",
                val;
              for (var i = 0, length = datas.length; i < length; i++) {
                val = datas[i].value + "%";
                res += datas[i].seriesName + "：" + val + "<br/>";
              }
              return res;
            },
          },
          toolbox: {
            // feature: {
            //   dataView: { show: true, readOnly: false },
            //   magicType: { show: true, type: ["line", "bar"] },
            //   restore: { show: true },
            //   saveAsImage: { show: true },
            // },
          },
          legend: {
            data: ["固定车位", "临停车位", "车场整体"],
          },
          xAxis: [
            {
              type: "category",
              data: numbers_list,
              axisPointer: {
                type: "shadow",
              },
            },
          ],
          yAxis: [
            {
              type: "value",
              name: "",
              min: 0,
              axisLabel: {
                formatter: "{value}%",
              },
            },
            {
              type: "value",
              name: "",
              min: 0,
              axisLabel: {
                formatter: "{value}%",
              },
            },
          ],
          series: [
            {
              name: "固定车位",
              type: "bar",
              smooth: true,
              data: data1s,
              markPoint: {
                data: [
                  { type: "max", name: "最大值" },
                  { type: "min", name: "最小值" },
                ],
              },
              markLine: {
                data: [{ type: "average", name: "平均值" }],
              },
            },
            {
              name: "临停车位",
              type: "bar",
              smooth: true,
              data: data2s,
              markPoint: {
                data: [
                  { type: "max", name: "最大值" },
                  { type: "min", name: "最小值" },
                ],
              },
              markLine: {
                data: [{ type: "average", name: "平均值" }],
              },
            },
            {
              name: "车场整体",
              type: "line",
              smooth: true,
              data: data3s,
            },
          ],
        };
        this.Utilization3.setOption(option);
      });
    },
    // 车位周转率（柱状图）原版
    Utilizations3_y() {
      this.average_disabled = true;
      function getNextDate(date, day) {
        var dd = new Date(date);
        dd.setDate(dd.getDate() + day);
        var y = dd.getFullYear();
        var m =
          dd.getMonth() + 1 < 10
            ? "0" + (dd.getMonth() + 1)
            : dd.getMonth() + 1;
        var d = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate();
        return y + "-" + m + "-" + d;
      }
      // //

      function getHour(s1, s2) {
        s1 = new Date(s1.replace(/-/g, "/"));
        s2 = new Date(s2.replace(/-/g, "/"));
        var ms = Math.abs(s1.getTime() - s2.getTime());
        return Math.ceil(ms / 1000 / 60 / 60);
      }
      let numbers_list = [];
      let number = -1;
      let numbers = 0;
      let date = getNextDate(this.time1[0], 0);
      if (!this.average) {
        for (
          let i = 0;
          i < getHour(this.time1[0] + " 00:00:00", this.time1[1] + " 23:59:59");
          i++
        ) {
          number += 1;
          if (number < 24) {
            numbers_list.push(date + " " + number + "时");
          } else {
            number = 0;
            date = getNextDate(this.time1[0], (numbers += 1));
            numbers_list.push(date + " " + number + "时");
          }
        }
        //
      } else {
        numbers_list = [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "18",
          "19",
          "20",
          "21",
          "22",
          "23",
        ];
      }
      this.Utilization3_y = echarts.init(this.$refs.Utilization3_y);
      this.Utilization3_y.showLoading({
        text: "数据正在加载...",
        textStyle: { fontSize: 30, color: "#444" },
        effectOption: { backgroundColor: "rgba(0, 0, 0, 0)" },
      });
      business_biz_prefecture_turnover_rate({
        startDate: this.time1[0],
        endDate: this.time1[1],
        averageFlag: this.average ? 1 : 0,
        floor: this.floor.value == 0 ? null : this.floor.value,
      }).then((res) => {
        //
        this.average_disabled = false;
        this.Utilization3_y.hideLoading();
        //固定
        let data1 = [];
        //临停
        let data2 = [];
        // 全部
        let data3 = [];
        res.map((response) => {
          //
          if (response.type == 0) {
            data2.push(response);
          } else if (response.type == 1) {
            data1.push(response);
          } else if (response.type == 2) {
            data3.push(response);
          }
        });
        data1.sort(function (a, b) {
          return new Date(a.time + ":00:00") - new Date(b.time + ":00:00");
        });
        data2.sort(function (a, b) {
          return new Date(a.time + ":00:00") - new Date(b.time + ":00:00");
        });
        data3.sort(function (a, b) {
          return new Date(a.time + ":00:00") - new Date(b.time + ":00:00");
        });
        let data1s = [];
        let data2s = [];
        let data3s = [];
        data1.map((res) => {
          data1s.push(res.rate);
        });
        data2.map((res) => {
          data2s.push(res.rate);
        });
        data3.map((res) => {
          data3s.push(res.rate);
        });
        let option = {
          title: {
            text: "车位周转率",
            subtext: "停车场",
          },
          grid: {
            x: 95,
            y: 45,
            x2: 40,
            y2: 40,
            borderWidth: 1,
          },
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "cross",
              crossStyle: {
                color: "#999",
              },
            },
            formatter(datas) {
              var res = datas[0].name + "<br/>",
                val;
              for (var i = 0, length = datas.length; i < length; i++) {
                val = datas[i].value + "%";
                res += datas[i].seriesName + "：" + val + "<br/>";
              }
              return res;
            },
          },
          toolbox: {
            // feature: {
            //   dataView: { show: true, readOnly: false },
            //   magicType: { show: true, type: ["line", "bar"] },
            //   restore: { show: true },
            //   saveAsImage: { show: true },
            // },
          },
          legend: {
            data: ["固定车位", "临停车位", "车场整体"],
          },
          xAxis: [
            {
              type: "category",
              data: numbers_list,
              axisPointer: {
                type: "shadow",
              },
            },
          ],
          yAxis: [
            {
              type: "value",
              name: "",
              min: 0,
              axisLabel: {
                formatter: "{value}%",
              },
            },
            {
              type: "value",
              name: "",
              min: 0,
              axisLabel: {
                formatter: "{value}%",
              },
            },
          ],
          series: [
            {
              name: "固定车位",
              type: "bar",
              smooth: true,
              data: data1s,
              markPoint: {
                data: [
                  { type: "max", name: "最大值" },
                  { type: "min", name: "最小值" },
                ],
              },
              markLine: {
                data: [{ type: "average", name: "平均值" }],
              },
            },
            {
              name: "临停车位",
              type: "bar",
              smooth: true,
              data: data2s,
              markPoint: {
                data: [
                  { type: "max", name: "最大值" },
                  { type: "min", name: "最小值" },
                ],
              },
              markLine: {
                data: [{ type: "average", name: "平均值" }],
              },
            },
            {
              name: "车场整体",
              type: "line",
              smooth: true,
              data: data3s,
            },
          ],
        };
        this.Utilization3_y.setOption(option);
      });
    },
    // 车位平均停车时长（柱状图）
    Utilizations4() {
      this.average_disabled = true;
      function getNextDate(date, day) {
        var dd = new Date(date);
        dd.setDate(dd.getDate() + day);
        var y = dd.getFullYear();
        var m =
          dd.getMonth() + 1 < 10
            ? "0" + (dd.getMonth() + 1)
            : dd.getMonth() + 1;
        var d = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate();
        return y + "-" + m + "-" + d;
      }
      // //

      function getHour(s1, s2) {
        s1 = new Date(s1.replace(/-/g, "/"));
        s2 = new Date(s2.replace(/-/g, "/"));
        var ms = Math.abs(s1.getTime() - s2.getTime());
        return Math.ceil(ms / 1000 / 60 / 60);
      }
      let numbers_list = [];
      let number = -1;
      let numbers = 0;
      let date = getNextDate(this.time1[0], 0);
      if (!this.average) {
        for (
          let i = 0;
          i < getHour(this.time1[0] + " 00:00:00", this.time1[1] + " 23:59:59");
          i++
        ) {
          number += 1;
          if (number < 24) {
            numbers_list.push(date + " " + number + "时");
          } else {
            number = 0;
            date = getNextDate(this.time1[0], (numbers += 1));
            numbers_list.push(date + " " + number + "时");
          }
        }
        //
      } else {
        numbers_list = [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "18",
          "19",
          "20",
          "21",
          "22",
          "23",
        ];
      }
      this.Utilization4 = echarts.init(this.$refs.Utilization4);
      this.Utilization4.showLoading({
        text: "数据正在加载...",
        textStyle: { fontSize: 30, color: "#444" },
        effectOption: { backgroundColor: "rgba(0, 0, 0, 0)" },
      });
      business_biz_prefecture_average_parking_time({
        startDate: this.time1[0],
        endDate: this.time1[1],
        averageFlag: this.average ? 1 : 0,
        floor: this.floor.value == 0 ? null : this.floor.value,
      }).then((res) => {
        //
        this.average_disabled = false;
        this.Utilization4.hideLoading();
        //固定
        let data1 = [];
        //临停
        let data2 = [];
        // 全部
        let data3 = [];
        res.map((response) => {
          //
          if (response.type == 0) {
            data2.push(response);
          } else if (response.type == 1) {
            data1.push(response);
          } else if (response.type == 2) {
            data3.push(response);
          }
        });
        data1.sort(function (a, b) {
          return new Date(a.time + ":00:00") - new Date(b.time + ":00:00");
        });
        data2.sort(function (a, b) {
          return new Date(a.time + ":00:00") - new Date(b.time + ":00:00");
        });
        data3.sort(function (a, b) {
          return new Date(a.time + ":00:00") - new Date(b.time + ":00:00");
        });
        let data1s = [];
        let data2s = [];
        let data3s = [];
        data1.map((res) => {
          data1s.push(res.averageTime);
        });
        data2.map((res) => {
          data2s.push(res.averageTime);
        });
        data3.map((res) => {
          data3s.push(res.averageTime);
        });
        let option = {
          title: {
            text: "平均停车时长",
            subtext: "停车场",
          },
          grid: {
            x: 95,
            y: 45,
            x2: 40,
            y2: 40,
            borderWidth: 1,
          },
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "cross",
              crossStyle: {
                color: "#999",
              },
            },
          },
          toolbox: {
            // feature: {
            //   dataView: { show: true, readOnly: false },
            //   magicType: { show: true, type: ["line", "bar"] },
            //   restore: { show: true },
            //   saveAsImage: { show: true },
            // },
          },
          legend: {
            data: ["固定车辆", "临停车辆", "全部车辆"],
          },
          xAxis: [
            {
              type: "category",
              data: numbers_list,
              axisPointer: {
                type: "shadow",
              },
            },
          ],
          yAxis: [
            {
              type: "value",
              name: "",
              min: 0,
              axisLabel: {
                formatter: "{value}小时",
              },
            },
            {
              type: "value",
              name: "",
              min: 0,
              axisLabel: {
                formatter: "{value}小时",
              },
            },
          ],
          series: [
            {
              name: "固定车辆",
              type: "bar",
              smooth: true,
              data: data1s,
              markPoint: {
                data: [
                  { type: "max", name: "最大值" },
                  { type: "min", name: "最小值" },
                ],
              },
              markLine: {
                data: [{ type: "average", name: "平均值" }],
              },
            },
            {
              name: "临停车辆",
              type: "bar",
              data: data2s,
              smooth: true,
              markPoint: {
                data: [
                  { type: "max", name: "最大值" },
                  { type: "min", name: "最小值" },
                ],
              },
              markLine: {
                data: [{ type: "average", name: "平均值" }],
              },
            },
            {
              name: "全部车辆",
              type: "line",
              smooth: true,
              data: data3s,
            },
          ],
        };
        this.Utilization4.setOption(option);
      });
    },
    // 车位平均停车时长（柱状图）原版
    Utilizations4_y() {
      this.average_disabled = true;
      function getNextDate(date, day) {
        var dd = new Date(date);
        dd.setDate(dd.getDate() + day);
        var y = dd.getFullYear();
        var m =
          dd.getMonth() + 1 < 10
            ? "0" + (dd.getMonth() + 1)
            : dd.getMonth() + 1;
        var d = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate();
        return y + "-" + m + "-" + d;
      }
      // //

      function getHour(s1, s2) {
        s1 = new Date(s1.replace(/-/g, "/"));
        s2 = new Date(s2.replace(/-/g, "/"));
        var ms = Math.abs(s1.getTime() - s2.getTime());
        return Math.ceil(ms / 1000 / 60 / 60);
      }
      let numbers_list = [];
      let number = -1;
      let numbers = 0;
      let date = getNextDate(this.time1[0], 0);
      if (!this.average) {
        for (
          let i = 0;
          i < getHour(this.time1[0] + " 00:00:00", this.time1[1] + " 23:59:59");
          i++
        ) {
          number += 1;
          if (number < 24) {
            numbers_list.push(date + " " + number + "时");
          } else {
            number = 0;
            date = getNextDate(this.time1[0], (numbers += 1));
            numbers_list.push(date + " " + number + "时");
          }
        }
        //
      } else {
        numbers_list = [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "18",
          "19",
          "20",
          "21",
          "22",
          "23",
        ];
      }
      this.Utilization4_y = echarts.init(this.$refs.Utilization4_y);
      this.Utilization4_y.showLoading({
        text: "数据正在加载...",
        textStyle: { fontSize: 30, color: "#444" },
        effectOption: { backgroundColor: "rgba(0, 0, 0, 0)" },
      });
      business_biz_prefecture_average_parking_time({
        startDate: this.time1[0],
        endDate: this.time1[1],
        averageFlag: this.average ? 1 : 0,
        floor: this.floor.value == 0 ? null : this.floor.value,
      }).then((res) => {
        //
        this.average_disabled = false;
        this.Utilization4_y.hideLoading();
        //固定
        let data1 = [];
        //临停
        let data2 = [];
        // 全部
        let data3 = [];
        res.map((response) => {
          //
          if (response.type == 0) {
            data2.push(response);
          } else if (response.type == 1) {
            data1.push(response);
          } else if (response.type == 2) {
            data3.push(response);
          }
        });
        data1.sort(function (a, b) {
          return new Date(a.time + ":00:00") - new Date(b.time + ":00:00");
        });
        data2.sort(function (a, b) {
          return new Date(a.time + ":00:00") - new Date(b.time + ":00:00");
        });
        data3.sort(function (a, b) {
          return new Date(a.time + ":00:00") - new Date(b.time + ":00:00");
        });
        let data1s = [];
        let data2s = [];
        let data3s = [];
        data1.map((res) => {
          data1s.push(res.averageTime);
        });
        data2.map((res) => {
          data2s.push(res.averageTime);
        });
        data3.map((res) => {
          data3s.push(res.averageTime);
        });
        let option = {
          title: {
            text: "平均停车时长",
            subtext: "停车场",
          },
          grid: {
            x: 95,
            y: 45,
            x2: 40,
            y2: 40,
            borderWidth: 1,
          },
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "cross",
              crossStyle: {
                color: "#999",
              },
            },
          },
          toolbox: {
            // feature: {
            //   dataView: { show: true, readOnly: false },
            //   magicType: { show: true, type: ["line", "bar"] },
            //   restore: { show: true },
            //   saveAsImage: { show: true },
            // },
          },
          legend: {
            data: ["固定车辆", "临停车辆", "全部车辆"],
          },
          xAxis: [
            {
              type: "category",
              data: numbers_list,
              axisPointer: {
                type: "shadow",
              },
            },
          ],
          yAxis: [
            {
              type: "value",
              name: "",
              min: 0,
              axisLabel: {
                formatter: "{value}小时",
              },
            },
            {
              type: "value",
              name: "",
              min: 0,
              axisLabel: {
                formatter: "{value}小时",
              },
            },
          ],
          series: [
            {
              name: "固定车辆",
              type: "bar",
              smooth: true,
              data: data1s,
              markPoint: {
                data: [
                  { type: "max", name: "最大值" },
                  { type: "min", name: "最小值" },
                ],
              },
              markLine: {
                data: [{ type: "average", name: "平均值" }],
              },
            },
            {
              name: "临停车辆",
              type: "bar",
              data: data2s,
              smooth: true,
              markPoint: {
                data: [
                  { type: "max", name: "最大值" },
                  { type: "min", name: "最小值" },
                ],
              },
              markLine: {
                data: [{ type: "average", name: "平均值" }],
              },
            },
            {
              name: "全部车辆",
              type: "line",
              smooth: true,
              data: data3s,
            },
          ],
        };
        this.Utilization4_y.setOption(option);
      });
    },
    // tab2 分楼层的车流量
    inout_echarts1_f() {
      var that = this;
      this.single_disabled = true;
      function getNextDate(date, day) {
        var dd = new Date(date);
        dd.setDate(dd.getDate() + day);
        var y = dd.getFullYear();
        var m =
          dd.getMonth() + 1 < 10
            ? "0" + (dd.getMonth() + 1)
            : dd.getMonth() + 1;
        var d = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate();
        return y + "-" + m + "-" + d;
      }

      function getHour(s1, s2) {
        s1 = new Date(s1.replace(/-/g, "/"));
        s2 = new Date(s2.replace(/-/g, "/"));
        var ms = Math.abs(s1.getTime() - s2.getTime());
        return Math.ceil(ms / 1000 / 60 / 60);
      }
      let numbers_list = ["product"];
      let number = -1;
      let numbers = 0;
      let date = getNextDate(this.time1[0], 0);
      if (this.single) {
        for (
          let i = 0;
          i < getHour(this.time1[0] + " 00:00:00", this.time1[1] + " 23:59:59");
          i++
        ) {
          number += 1;
          if (number < 24) {
            numbers_list.push(date + " " + number + "时");
          } else {
            number = 0;
            date = getNextDate(this.time1[0], (numbers += 1));
            numbers_list.push(date + " " + number + "时");
          }
        }
      } else {
        numbers_list.push(date);
        for (
          let i = 0;
          i < getHour(this.time1[0] + " 00:00:00", this.time1[1] + " 23:59:59");
          i++
        ) {
          number += 1;
          if (number < 24) {
            // numbers_list.push(date + " " + number + "时");
          } else {
            number = 0;
            date = getNextDate(this.time1[0], (numbers += 1));
            numbers_list.push(date);
          }
        }
      }
      this.inout_echarts1 = echarts.init(this.$refs.inout_echarts1);
      this.inout_echarts1.showLoading({
        text: "数据正在加载...",
        textStyle: { fontSize: 30, color: "#444" },
        effectOption: { backgroundColor: "rgba(0, 0, 0, 0)" },
      });
      business_biz_prefecture_inout_record({
        startDate: this.time1[0],
        endDate: this.time1[1],
        averageFlag: this.single ? 1 : 0,
      }).then((res) => {
        this.inout_echarts1.hideLoading();
        this.single_disabled = false;
        let legend_in = [];
        let legend_out = [];
        res.map((response) => {
          if (response.time == res[0].time) {
            if ((response.totaltime.indexOf("出口") != -1) == true) {
              legend_out.push(response.totaltime);
            } else {
              legend_in.push(response.totaltime);
            }
            // legend.push(response.totaltime);
          }
        });
        legend_in.sort(function (a, b) {
          return a.replace(/[^0-9]/gi, "") - b.replace(/[^0-9]/gi, "");
        });
        legend_out.sort(function (a, b) {
          return a.replace(/[^0-9]/gi, "") - b.replace(/[^0-9]/gi, "");
        });

        let legend = legend_in.concat(legend_out);

        this.data = [];
        legend.map((response, index) => {
          var data = {};
          data[index] = [];
          var datas = {};
          datas[index] = [];
          datas[index].push(response);
          res.map((res_number) => {
            if (response == res_number.totaltime) {
              data[index].push(res_number);
            }
          });
          data[index].sort(function (a, b) {
            return new Date(a.time + ":00:00") - new Date(b.time + ":00:00");
          });
          data[index].map((res) => {
            datas[index].push(res.rate);
          });
          this.data.push(datas[index]);
        });
        this.data.splice(0, 0, numbers_list);
        let series1 = [];
        for (let i = 1; i < this.data.length; i++) {
          series1.push({
            type: "bar",
            smooth: true,
            seriesLayoutBy: "row",
            stack:
              (this.data[i][0].indexOf("出口") != -1) == true ? "出口" : "入口",
          });
        }
        series1.push({
          type: "pie",
          id: "pie",
          radius: "35%",
          center: ["22%", "23%"],
          emphasis: { focus: "data" },
          label: {
            formatter: "{b}: {@" + numbers_list[1] + "} ({d}%)",
          },
          encode: {
            itemName: "product",
            value: numbers_list[1],
            tooltip: numbers_list[1],
          },
          // label: {
          //   formatter: "{b}: {@2012} ({d}%)",
          // },
        });
        let option = {
          title: {
            text: "出入口车流量",
            subtext: "停车场",
          },
          legend: {},
          tooltip: {
            trigger: "axis",
            show: true,
          },
          dataset: {
            source: this.data,
          },
          xAxis: { type: "category" },
          yAxis: { gridIndex: 0 },
          grid: {
            x: 50,
            y: 230,
            x2: 50,
            y2: 40,
            borderWidth: 1,
            tooltip: {
              trigger: "axis",
              axisPointer: {
                type: "shadow",
                label: {
                  show: true,
                  formatter: function (params) {
                    return params.value.replace("\n", "");
                  },
                },
              },
            },
          },
          series: series1,
        };

        var indexs = "";
        this.inout_echarts1.on("updateAxisPointer", function (event) {
          var xAxisInfo = event.axesInfo[0];
          if (xAxisInfo) {
            var dimension = xAxisInfo.value + 1;
            if (indexs == dimension) {
              return;
            } else {
              indexs = dimension;
            }
            that.inout_echarts1.setOption({
              series: {
                id: "pie",
                label: {
                  formatter: "{b}: {@[" + dimension + "]} ({d}%)",
                },
                encode: {
                  value: dimension,
                  tooltip: dimension,
                },
              },
            });
          }
        });
        this.inout_echarts1.setOption(option);
      });
    },
  },
};
</script>
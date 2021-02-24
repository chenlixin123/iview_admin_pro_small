<style scoped>
.box {
  width: 100%;
  height: 95vh;
  box-sizing: border-box;
  font-size: 0.75vw;
}
.title {
  width: 99%;
  min-width: 700px;
  height: 10%;
  margin: 0 auto;
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding-left: 2%;
}
.content {
  width: 99%;
  min-width: 700px;
  height: 68%;
  min-height: 650px;
  margin: 0 auto;
  background: white;
  padding-bottom: 1%;
}
.title_left {
  font-size: 0.9vw;
}
.basic,
.empower {
  width: 100%;
  margin: 0 auto;
  margin-top: 0.5%;
  background: white;
  box-sizing: border-box;
  padding-left: 1%;
  padding-right: 3%;
  border-radius: 5px;
}
.basic {
  padding-top: 2%;
}
.empower {
  height: 50%;
  padding-bottom: 5%;
}
.basic_title,
.empower_title {
  width: 8%;
  min-width: 90px;
  height: 30%;
  display: flex;
  align-items: center;
}
.empower_title {
  height: 12%;
}
.basic_titleleft,
.empower_titleleft {
  width: 100%;
  text-align-last: justify;
}
.basic_text1,
.empower_text1 {
  width: 100%;
  height: 15.5%;
  display: flex;
  align-items: center;
  box-sizing: border-box;
}
.empower_text1 {
  height: 18%;
  margin-top: 1%;
}
.basic_textleft,
.empower_textleft {
  min-width: 5vw;
  text-align-last: justify;
}
.basic_textright,
.empower_textright {
  height: 100%;
  font-weight: 200;
  display: flex;
  align-items: center;
}
.plateNo {
  border: 1px solid;
  height: 20px;
  color: #9ea7b4;
  line-height: 20px;
  padding-left: 5px;
  padding-right: 5px;
  border-radius: 7px;
  margin-right: 10px;
}
.empower_textrights {
  display: flex;
  align-items: center;
}
.hr {
  width: 99%;
  margin: 0 auto;
  border: 1px solid #e3e8ee;
  background: #e3e8ee;
}
.btn {
  width: 70%;
  min-width: 700px;
  margin: 0 auto;
  margin-top: 2%;
  margin-bottom: 2%;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.button1 {
  width: 20%;
  height: 2.5vw;
  background: #f66913;
  outline: none;
  border: none;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9vw;
}
.button1:hover {
  background: #f66913;
  color: white;
}
.button2 {
  width: 20%;
  height: 2.5vw;
  outline: none;
  border: none;
  color: white;
  background: #545c6a;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9vw;
}
.add {
  padding-left: 10px;
  padding-right: 10px;
  border: 1px dashed #657180;
  color: #657180;
  border-radius: 5px;
  cursor: pointer;
  box-sizing: border-box;
  font-weight: 200;
  margin-left: 5px;
}
.module {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
}
.contents {
  width: 33%;
  height: 25%;
  background: white;
  position: fixed;
  top: 20%;
  right: 30%;
  border-radius: 5px;
}
.tops {
  width: 80%;
  border: 1px solid #e3e8ee;
  margin: 0 auto;
  height: 60%;
  margin-top: 3%;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.bottoms {
  width: 80%;
  height: 30%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.save {
  width: 30%;
  height: 2.5vw;
  border: none;
  border-radius: 5px;
  color: white;
  background: #f66913;
  outline: none;
  cursor: pointer;
  font-size: 0.9vw;
}
.cancels {
  width: 30%;
  height: 2.5vw;
  border: none;
  border-radius: 5px;
  color: white;
  background: #545c6a;
  outline: none;
  cursor: pointer;
  font-size: 0.9vw;
}

.modules {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 1, 1, 0.5);
  z-index: 100;
}
.contentes {
  width: 33%;
  height: 25%;
  background: white;
  border-radius: 10px;
  position: fixed;
  top: 20%;
  right: 30%;
}
.content_top {
  width: 100%;
  height: 65%;
  text-align: center;
  border-bottom: 3px solid #e3e8ee;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9vw;
  padding-left: 10%;
  padding-right: 10%;
}
.content_bottom {
  width: 100%;
  height: 35%;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.success,
.canceles {
  width: 35%;
  height: 60%;
  border: none;
  outline: none;
  border-radius: 5px;
  color: white;
  font-size: 0.9vw;
}
.success {
  background: #f66913;
  cursor: pointer;
}
.success:hover {
  background: #f66913;
  color: white;
}
.canceles {
  background: #545c6a;
  cursor: pointer;
}
.demo-spin-container {
  position: absolute;
  top: 50%;
  right: 50%;
  border: 1px solid #eee;
}
input::-webkit-input-placeholder {
  color: #c5c8ce;
}
input::-moz-placeholder {
  color: #c5c8ce;
}
input:-moz-placeholder {
  color: #c5c8ce;
}
>>> .ivu-select-single .ivu-select-selection {
  height: 100%;
  display: flex;
  align-items: center;
}
>>> .ivu-icon-ios-calendar-outline:before {
  display: none;
}
>>> .ivu-input-suffix {
  display: none;
}
>>> [data-v-5bc7a090] .ivu-input {
  height: 100%;
}
>>> [data-v-5bc7a090] .ivu-select-single .ivu-select-selection {
  height: 100%;
}
input:-ms-input-placeholder {
  color: #c5c8ce;
}
</style>
<template>
  <div class="box">
    <div class="title">
      <div class="title_left">编辑车位授权信息</div>
    </div>
    <div class="content" v-if="spinShow == false">
      <Card title="车位基本信息" :bordered="false" dis-hover class="ivu-mt">
        <DescriptionList>
          <Description term="车场名称：">{{ data.preName }}</Description>
          <Description term="楼层信息：">{{ data.floor }}</Description>
          <Description term="分区：">{{ data.areaName }}</Description>
          <Description term="车位号：">{{ data.stallName }}</Description>
          <Description term="属性：">{{ data.type }}</Description>
          <Description term="出租状态：">{{ data.rentStatus }}</Description>
        </DescriptionList>
      </Card>
      <hr class="hr" />
      <div class="empower">
        <div class="empower_text1">
          <div class="empower_textleft">租期</div>
          ：
          <div class="empower_textright">
            <label for style="color: red">*</label>
            <Date-picker
              type="date"
              v-model="starttime"
              format="yyyy-MM-dd"
              :clearable="false"
              @on-change="time1"
              placeholder="请选择起始日期"
              style="width: 20%; font-size: 0.6vw"
            ></Date-picker
            >-
            <label for style="color: red">*</label>
            <Date-picker
              type="date"
              v-model="endtime"
              @on-change="time2"
              :clearable="false"
              placeholder="请选择截止日期"
              style="width: 20%; font-size: 0.6vw"
            ></Date-picker
            >&nbsp;
            <span v-if="data.rentStatus != '未租'"
              >{{ rentStatuses == "过期" ? "过期" : "剩余" }}&nbsp;{{
                data.remainDays
              }}
              天</span
            >
            &nbsp;&nbsp;
            <label for style="font-weight: bold">{{
              data.rentStatus == "未租" ? "租用：" : "续租："
            }}</label>
            <i-select
              v-model="Renewales"
              @on-change="Renewals"
              style="width: 100px"
            >
              <i-option
                v-for="(item, index) in Renewal"
                :key="index"
                :value="item.id"
                >{{ item.name }}</i-option
              >
            </i-select>
          </div>
        </div>
        <div class="empower_text1">
          <div class="empower_textleft">租用公司</div>
          ：
          <label for style="color: white; font-weight: 200">*</label>
          <i-input
            v-model="company"
            placeholder="请输入公司名称"
            style="width: 15%"
          />
        </div>
        <div class="empower_text1">
          <div class="empower_textleft">联系人</div>
          ：
          <label for style="color: white; font-weight: 200">*</label>
          <i-input
            v-model="user_link"
            placeholder="请输入联系人"
            style="width: 15%"
          ></i-input>
        </div>
        <div class="empower_text1">
          <div class="empower_textleft">电话号码</div>
          ：
          <label for style="color: white; font-weight: 200">*</label>
          <i-input
            v-model="user_modile"
            placeholder="请输入电话号码"
            :maxlength="11"
            type="text"
            style="width: 15%"
          ></i-input>
        </div>
        <div class="empower_text1">
          <div class="empower_textleft">授权车牌</div>
          ：
          <label for style="color: red; font-weight: 200">*</label>
          <div class="empower_textrights">
            <Tag
              closable
              @on-close="handleClose(item)"
              v-for="(item, index) in data.plateNo"
              :key="index"
              style="
                font-size: 0.8vw;
                padding: 0px 6px;
                color: #999;
                height: 100%;
              "
              >{{ item }}</Tag
            >
          </div>
          <div class="add" @click="add">添加车牌</div>
        </div>
        <div class="empower_text1">
          <div class="empower_textleft">备注</div>
          ：&nbsp;&nbsp;
          <textarea
            v-model="text"
            name
            id
            cols="30"
            rows="4"
            style="
              margin-top: 4.5vw;
              outline: none;
              border-radius: 5px;
              background: #f5f7f9;
              border: 1px solid #e3e8ee;
              padding-top: 5px;
              padding-left: 5px;
            "
            placeholder="请输入少于120字"
            maxlength="120"
          ></textarea>
        </div>
      </div>
      <div class="module" v-if="show">
        <div class="contents">
          <div class="tops">
            <i-select v-model="model1" style="width: 50px; height: 30%">
              <i-option
                v-for="(item, index) in carPlete"
                :key="index"
                :value="item"
                style="width: 50px; height: 100%"
                >{{ item }}</i-option
              >
            </i-select>
            <input
              v-model="values"
              @input="ss(values)"
              placeholder="请输入剩余车牌号"
              style="
                width: 60%;
                height: 30%;
                margin-left: 8px;
                border: 1px solid #e3e8ee;
                border-radius: 5px;
                outline: none;
                padding-left: 5px;
              "
            />
          </div>
          <div class="bottoms">
            <button class="save" @click="save">保存车牌号</button>
            <button class="cancels" @click="cancels">取消</button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="spinShow == false" class="btn">
      <Button class="button1" @click="Preservation" :loading="loading1">{{
        Preservation_text
      }}</Button>
      <button class="button2" @click="cancel">取消</button>
      <button v-if="data.rentStatus != '未租'" class="button2" @click="deletes">
        清除
      </button>
    </div>
    <div class="modules" v-if="show1">
      <div class="contentes">
        <div class="content_top">
          该车位已授权{{
            number
          }}个车牌，管理要求一个车位只添加2个车牌，确定添加新车牌？
        </div>
        <div class="content_bottom">
          <button class="success" @click="success">确定</button>
          <button class="canceles" @click="canceles">取消</button>
        </div>
      </div>
    </div>
    <div class="modules" v-if="show2">
      <div class="contentes">
        <div class="content_top">确定取消编辑？</div>
        <div class="content_bottom">
          <button class="success" @click="success2">确定</button>
          <button class="canceles" @click="canceles2">取消</button>
        </div>
      </div>
    </div>
    <div class="modules" v-if="show3">
      <div class="contentes">
        <div class="content_top">确定清除该车位的所有授权信息？</div>
        <div class="content_bottom">
          <Button class="success" @click="success3" :loading="loading2">{{
            success3_text
          }}</Button>
          <button class="canceles" @click="canceles3">取消</button>
        </div>
      </div>
    </div>
    <div class="modules" v-if="show4">
      <div class="contentes">
        <div class="content_top">
          车位{{ data.rentStatus == "未租" ? "租用" : "续租"
          }}{{ year }}年有效期至{{ times }}？
        </div>
        <div class="content_bottom">
          <button class="success" @click="success_time">{{ bao_text }}</button>
          <button class="canceles" @click="canceles4">取消</button>
        </div>
      </div>
    </div>

    <div class="demo-spin-container">
      <Spin fix size="large" v-if="spinShow"></Spin>
    </div>
  </div>
</template>
<script>
import {
  Administration_view,
  Administration_update,
  Administration_save,
  Administration_delete,
} from "@/api/Administration";
import time from "@/api/time";
// import axios from "@/libs/api.request";
export default {
  data() {
    return {
      rentStatuses: "",
      loading1: false,
      loading2: false,
      times: "",
      year: "",
      svn: "",
      number: "",
      values: "",
      Renewales: "",
      spinShow: true,
      Preservation_text: "保存",
      success3_text: "清除",
      bao_text: "确定",
      carPlete: [
        "京",
        "津",
        "冀",
        "晋",
        "蒙",
        "辽",
        "吉",
        "黑",
        "沪",
        "苏",
        "浙",
        "皖",
        "闽",
        "赣",
        "鲁",
        "豫",
        "鄂",
        "湘",
        "粤",
        "桂",
        "琼",
        "渝",
        "川",
        "贵",
        "云",
        "藏",
        "陕",
        "甘",
        "青",
        "宁",
        "新",
        "使",
      ],
      model1: "京",
      show: false,
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      data: "",
      starttime: "",
      start: "",
      end: "",
      endtime: "",
      company: "",
      text: "",
      user_link: "",
      user_modile: "",
      modile: [],
      Renewal: [
        {
          id: 0.5,
          name: "半年",
        },
        {
          id: 1,
          name: "1年",
        },
        {
          id: 2,
          name: "2年",
        },
        {
          id: 3,
          name: "3年",
        },
        {
          id: 4,
          name: "4年",
        },
        {
          id: 5,
          name: "5年",
        },
      ],
    };
  },
  created() {
    if (this.$route.query.fixedId == null) {
      this.$route.query.fixedId = "";
    }
    this.list();
  },
  methods: {
    //车牌号输入框
    ss(obj) {
      //
      this.values = obj.toUpperCase();
    },
    //删除车牌号
    handleClose(name) {
      this.data.plateNo.map((item, index, arry) => {
        if (item == name) {
          arry.splice(index, 1);
        }
      });
    },
    //保存车牌号
    save() {
      let str = /^([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[ABCDEFGHJK])|([ABCDEFGHJK]([A-HJ-NP-Z0-9])[0-9]{4})))|([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1})$/;
      let car = this.model1 + this.values;
      let sv = str.test(car);
      if (sv == true && this.model1 != "" && this.values != "") {
        if (this.data.plateNo == null || this.data.plateNo == "") {
          this.data.plateNo = [];
          this.data.plateNo.push(car);
          this.show = false;
          this.values = "";
        } else {
          this.svn = false;
          this.data.plateNo.map((res) => {
            if (res == car) {
              this.$Message.warning("已有该车牌号，请勿重复添加");
              this.svn = true;
            }
          });
          if (this.svn != true) {
            this.data.plateNo.push(car);
            this.show = false;
            this.values = "";
          }
        }
      } else if (sv == false && this.model1 != "" && this.values != "") {
        this.$Message.warning("请填写正确车牌号");
      } else {
        this.$Message.warning("请填写车牌号");
      }
    },
    //取消保存车牌号
    cancels() {
      this.show = false;
      this.values = "";
    },
    list() {
      let that = this;
      Administration_view({
        fixedId: this.$route.query.fixedId,
        stallId: this.$route.query.stallId,
      }).then((res) => {
        this.spinShow = false;
        that.rentStatuses = res.rentStatus;
        localStorage.setItem("rentStatus", res.rentStatus);
        if (res.plateNo != null && res.plateNo != "") {
          this.number = res.plateNo.length;
        }
        that.data = res;
        if (res.createTime == null) {
          that.data.createTime = "";
        } else {
          that.data.createTime = time.time(res.createTime); //创建时间
        }
        if (res.updateTime == null) {
          that.data.updateTime = "";
        } else {
          that.data.updateTime = time.time(res.updateTime); //更新时间
        }
        if (res.startTime == null) {
          that.data.startTime = "";
        } else {
          that.data.startTime = time.time(res.startTime); //开始时间
          that.starttime = time.time(res.startTime);
          that.start = time.time(res.startTime);
        }
        if (res.endTime == null) {
          that.data.endTime = "";
          localStorage.setItem("endtime", "");
        } else {
          that.data.endTime = time.time(res.endTime); //结束时间
          that.endtime = time.time(res.endTime);
          that.end = time.time(res.endTime);
          localStorage.setItem("endtime", time.time(res.endTime));
          let ss = new Date(res.endTime);
        }
        if (res.rentStatus != "未租") {
          that.company = that.data.company;
          that.user_link = that.data.contacts;
          that.user_modile = that.data.linkPhone;
          that.text = that.data.remark;
          localStorage.setItem("remainDays", that.data.remainDays);
        }
      });
    },
    //保存
    Preservation() {
      let that = this;
      that.loading1 = true;
      if (this.starttime != "") {
        that.starttime = time.time(that.starttime);
        this.starttime = new Date(this.starttime);
        var time1 = this.starttime.getTime();
      }
      if (this.endtime != "") {
        that.endtime = time.time(that.endtime);
        this.endtime = new Date(this.endtime);
        var time2 = this.endtime.valueOf();
      }

      if (this.starttime == "") {
        this.$Message.warning("请选择起始日期");
        this.loading1 = false;
      } else if (this.endtime == "") {
        this.$Message.warning("请选择截止日期");
        this.loading1 = false;
      } else if (time2 <= time1) {
        this.$Message.warning("截止日期不能小于或等于起始日期");
        this.loading1 = false;
      } else if (this.data.plateNo == null || this.data.plateNo.length == 0) {
        this.$Message.warning("请添加授权车牌");
        this.loading1 = false;
      } else {
        that.Preservation_text = "保存中";
        that.bao_text = "保存中";
        if (this.company == null) {
          this.company = "";
        }
        if (this.user_link == null) {
          this.user_link = "";
        }
        if (this.user_modile == null) {
          this.user_modile = "";
        }
        if (this.text == null) {
          this.text = "";
        }
        this.starttime = time.time(this.starttime);
        this.endtime = time.time(this.endtime);
        let plateNo = that.data.plateNo.toString();
        if (this.$route.query.fixedId != "") {
          Administration_update({
            fixedId: that.$route.query.fixedId,
            startTime: that.starttime,
            endTime: that.endtime,
            linkPhone: that.user_modile,
            contacts: that.user_link,
            remark: that.text,
            company: that.company,
            stallIds: this.$route.query.stallId,
            plateNos: plateNo,
          }).then((res) => {
            if (res.success == true) {
              this.$Message.success(res.content);
              this.$router.replace({
                path: "/Administration/CarAdministration",
              });
            } else {
              this.$Message.error(res.content);
            }
            that.Preservation_text = "保存";
            that.bao_text = "确定";
            that.show4 = false;
            that.loading1 = false;
          });
        } else {
          Administration_save({
            fixedId: that.$route.query.fixedId,
            startTime: that.starttime,
            endTime: that.endtime,
            linkPhone: that.user_modile,
            contacts: that.user_link,
            remark: that.text,
            company: that.company,
            stallIds: this.$route.query.stallId,
            plateNos: plateNo,
          }).then((res) => {
            if (res.success == true) {
              this.$Message.success(res.content);
              this.$router.replace({
                path: "/Administration/CarAdministration",
              });
            } else {
              this.$Message.error(res.content);
            }
            that.Preservation_text = "保存";
            that.bao_text = "确定";
            that.show4 = false;
            that.loading1 = false;
          });
        }
      }
    },
    //取消
    cancel() {
      this.show2 = true;
    },
    //删除
    deletes() {
      this.show3 = true;
    },
    //保存日期
    success_time() {
      let that = this;
      that.show4 = false;
      if (this.starttime != "") {
        that.starttime = time.time(that.starttime);
        this.starttime = new Date(this.starttime);
        var time1 = this.starttime.getTime();
      }
      if (this.endtime != "") {
        that.endtime = time.time(that.endtime);
        this.endtime = new Date(this.endtime);
        var time2 = this.endtime.valueOf();
      }
      this.starttime = time.time(this.starttime);
      this.endtime = time.time(this.endtime);
    },
    //续租选择框
    Renewals(data) {
      let that = this;
      if (data != undefined) {
        this.rentStatuses = "剩余";
        if (data == 0.5) {
          this.year = "半";
        } else {
          this.year = data;
        }
        if (this.data.rentStatus != "未租") {
          if (data == 0.5) {
            if (this.end.indexOf("-") == -1) {
              var time1 = time.time(this.end).split("-");
            } else {
              var time1 = this.end.split("-");
            }
            if (Number(time1[1]) + 6 > 12) {
              this.times =
                Number(time1[0]) +
                1 +
                "年" +
                (Number(time1[1]) - 6) +
                "月" +
                (Number(time1[2]) == 1
                  ? Number(time1[2])
                  : Number(time1[2]) - 1) +
                "日";
              this.endtime =
                Number(time1[0]) +
                1 +
                "-" +
                (Number(time1[1]) - 6) +
                "-" +
                (Number(time1[2]) == 1
                  ? Number(time1[2])
                  : Number(time1[2]) - 1);
              this.starttime = this.start;
            } else if (Number(time1[1]) + 6 <= 12) {
              this.times =
                time1[0] +
                "年" +
                (Number(time1[1]) + 6) +
                "月" +
                time1[2] +
                "日";
              this.endtime =
                time1[0] + "-" + (Number(time1[1]) + 6) + "-" + time1[2];
              this.starttime = this.start;
            }
          } else {
            if (this.end.indexOf("-") == -1) {
              var time1 = time.time(this.end).split("-");
            } else {
              var time1 = this.end.split("-");
            }
            this.times =
              Number(time1[0]) +
              data +
              "年" +
              time1[1] +
              "月" +
              (Number(time1[2]) == 1
                ? Number(time1[2])
                : Number(time1[2]) - 1) +
              "日";
            this.endtime =
              Number(time1[0]) +
              data +
              "-" +
              time1[1] +
              "-" +
              (Number(time1[2]) == 1 ? Number(time1[2]) : Number(time1[2]) - 1);
            this.starttime = this.start;
          }
        } else {
          if (that.starttime == "" || that.starttime == null) {
            that.start = time.time(new Date());
            that.starttime = that.start;
          } else {
            that.starttime = that.starttime;
          }
          if (data == 0.5) {
            if (this.starttime.indexOf("-") == -1) {
              var time1 = time.time(this.starttime).split("-");
            } else {
              var time1 = this.starttime.split("-");
            }
            if (Number(time1[1]) + 6 > 12) {
              this.times =
                Number(time1[0]) +
                1 +
                "年" +
                (Number(time1[1]) - 6) +
                "月" +
                (Number(time1[2]) == 1
                  ? Number(time1[2])
                  : Number(time1[2]) - 1) +
                "日";
              this.endtime =
                Number(time1[0]) +
                1 +
                "-" +
                (Number(time1[1]) - 6) +
                "-" +
                (Number(time1[2]) == 1
                  ? Number(time1[2])
                  : Number(time1[2]) - 1);
              this.starttime = this.starttime;
            } else if (Number(time1[1]) + 6 <= 12) {
              this.times =
                time1[0] +
                "年" +
                (Number(time1[1]) + 6) +
                "月" +
                (Number(time1[2]) == 1
                  ? Number(time1[2])
                  : Number(time1[2]) - 1) +
                "日";
              this.endtime =
                time1[0] +
                "-" +
                (Number(time1[1]) + 6) +
                "-" +
                (Number(time1[2]) == 1
                  ? Number(time1[2])
                  : Number(time1[2]) - 1);
              this.starttime = this.starttime;
            }
          } else {
            if (this.starttime.indexOf("-") == -1) {
              var time1 = time.time(this.starttime).split("-");
            } else {
              var time1 = this.starttime.split("-");
            }
            this.times =
              Number(time1[0]) +
              data +
              "年" +
              time1[1] +
              "月" +
              (Number(time1[2]) == 1
                ? Number(time1[2])
                : Number(time1[2]) - 1) +
              "日";
            this.endtime =
              Number(time1[0]) +
              data +
              "-" +
              time1[1] +
              "-" +
              (Number(time1[2]) == 1 ? Number(time1[2]) : Number(time1[2]) - 1);
            this.starttime = this.starttime;
          }
        }
        let date1 = new Date();
        let date2 = this.endtime;
        function DateMinus(date1, date2) {
          //date1:小日期   date2:大日期
          var sdate = new Date(date1);
          var now = new Date(date2);
          var days = now.getTime() - sdate.getTime();
          var day = parseInt(days / (1000 * 60 * 60 * 24));
          return day;
        }
        this.data.remainDays = DateMinus(date1, date2);
        this.Renewales = data;
        this.show4 = true;
      }
    },
    //起始日期
    time1(e) {
      this.starttime = e;
      // if(e == ''){
      //   this.data.remainDays = ''
      // }
    },
    //截止日期
    time2(e) {
      this.rentStatuses = "剩余";
      this.Renewales = "";
      this.endtime = e;
      if (e != "") {
        let currentDate = new Date();
        let choiceDate = new Date(e + " 23:59:59");
        if (currentDate > choiceDate) {
          this.data.remainDays = 0;
        } else {
          var times = choiceDate.getTime() - currentDate.getTime();
          this.data.remainDays = parseInt(times / (1000 * 60 * 60 * 24)) + 1;
        }
      } else {
        this.data.remainDays = "";
      }
    },
    //添加车牌
    add() {
      if (this.data.plateNo != null && this.data.plateNo != "") {
        this.number = this.data.plateNo.length;
        if (this.data.plateNo.length >= 2) {
          this.show1 = true;
        } else {
          this.show = true;
        }
      } else {
        this.show = true;
      }
    },
    //车牌超出规定数量
    success() {
      this.show1 = false;
      this.show = true;
    },
    //取消跳转添加车牌号
    canceles() {
      this.show1 = false;
    },
    success2() {
      this.$router.go(-1);
    },
    canceles2() {
      this.show2 = false;
    },
    success3() {
      let that = this;
      that.success3_text = "清除中";
      that.loading2 = true;
      Administration_delete({
        fixedId: this.$route.query.fixedId,
        stallId: this.$route.query.stallId,
      }).then((res) => {
        this.show3 = false;
        if (res.success == true) {
          this.$Message.success(res.content);
          this.$router.replace({
            path: "/Administration/CarAdministration",
          });
        } else {
          this.$Message.error(res.content);
        }
        that.success3_text = "清除";
        that.loading2 = false;
      });
    },
    canceles3() {
      this.show3 = false;
    },
    canceles4() {
      this.show4 = false;
      this.endtime = localStorage.getItem("endtime");
      if (this.data.rentStatus != "未租") {
        this.starttime = this.start;
        this.data.remainDays = localStorage.getItem("remainDays");
      } else {
        this.starttime = "";
      }
      this.Renewales = " ";
    },
  },
};
</script>
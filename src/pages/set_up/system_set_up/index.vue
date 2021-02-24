<style scoped>
.box {
  width: 99%;
  height: 93vh;
  background: #e3e8ee;
  box-sizing: border-box;
  font-size: 0.9vw;
}
.title {
  width: 99%;
  min-width: 580px;
  height: 15%;
  margin: 0 auto;
  background: white;
  box-sizing: border-box;
  padding: 0 2%;
}
p {
  height: 50%;
  display: flex;
  align-items: center;
}
.p1 {
  font-size: 0.9vw;
}
.p2 {
  font-size: 0.9vw;
  font-weight: bold;
}
.center {
  width: 99%;
  min-width: 580px;
  height: 30%;
  margin: 0 auto;
  background: white;
  box-sizing: border-box;
  padding: 2% 4%;
  margin-top: 0.5%;
}
.center_input1 {
  height: 48%;
  display: flex;
  align-items: center;
}
label {
  font-size: 0.9vw;
  font-weight: bold;
  cursor: pointer;
}
#input1,
#input2 {
  width: 25%;
  height: 100%;
  text-indent: 5px;
  outline: none;
  /* border: 1px solid; */
  display: flex;
  align-items: center;
}
::-webkit-input-placeholder {
  color: rgba(21, 30, 38, 0.35);
}
.bottom {
  width: 99%;
  min-width: 580px;
  height: 6%;
  margin: 0 auto;
  margin-top: 3%;
  /* border: 1px solid red; */
  display: flex;
  justify-content: flex-end;
}
.btns {
  /* border: 1px solid green; */
  width: 40%;
  display: flex;
  justify-content: space-between;
}
.btn1,
.btn2 {
  width: 45%;
  font-size: 0.9vw;
  border-radius: 10px;
  border: none;
  outline: none;
  color: white;
  background: #f66913;
  cursor: pointer;
}
.btn2 {
  background: #545c6a;
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
  /* border:1px solid; */
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
  font-size: 0.9vw;
}
.canceles {
  background: #545c6a;
  cursor: pointer;
}
</style>
<template>
  <div class="box">
    <div class="title">
      <p class="p1">系统设置</p>
      <hr style="border:2px solid #e8eaec" />
      <p class="p2">提示日期设置</p>
    </div>
    <div class="center" v-if="!spinShow">
      <div class="center_input1">
        <label for="input1">到期警告天数：</label>
        <Input id="input1" type="text" v-model="warning" placeholder="请输入..." />
        <span style="margin-left:4%;">(红字显示，默认为7天)</span>
      </div>
      <div class="center_input1">
        <label for="input2">到期提示天数：</label>
        <Input id="input2" type="text" v-model="tips" placeholder="请输入..." />
        <span style="margin-left:4%;">(橙字显示，默认为30天)</span>
      </div>
    </div>
    <div class="bottom" v-if="!spinShow">
      <div class="btns">
        <button class="btn1" @click="success">{{data}}</button>
        <button class="btn2" @click="cancel">取消</button>
      </div>
    </div>
    <div class="modules" v-if="show1">
      <div class="contentes">
        <div class="content_top">确认提交系统设置修改？</div>
        <div class="content_bottom">
          <Button class="success" @click="success1" :loading="loading1">确定</Button>
          <button class="canceles" @click="canceles1">取消</button>
        </div>
      </div>
    </div>
    <Spin size="large" fix v-if="spinShow"></Spin>
  </div>
</template>

<script>
import { setup_find_by_id, setup_updateDay } from "@/api/set_up";
import { mapState } from "vuex";
// import axios from "@/libs/api.request";
export default {
  data() {
    return {
      spinShow: true,
      show1: false,
      loading1: false,
      data: "提交",
      warning: "", //警告
      tips: "" //提示
    };
  },
  computed: {
    ...mapState("admin/user", ["info"])
  },
  created() {
    this.list();
  },
  methods: {
    list() {
      console.log(this.info.preId);
      let preId = this.info.preId;
      setup_find_by_id({
        id: preId
      }).then(res => {
        console.log(res);
        if (res.warningDays && res.warningDays != null) {
          this.warning = res.warningDays;
          localStorage.setItem("warningDays", res.warningDays);
        } else {
          this.warning = 7;
        }
        if (res.remindDays && res.remindDays != null) {
          this.tips = res.remindDays;
          localStorage.setItem("remindDays", res.remindDays);
        } else {
          this.tips = 30;
        }
        this.spinShow = false;
      });
    },
    success1() {
      console.log(/^[0-9]+$/.test(this.warning));
      // console.log(this.tips);
      this.loading1 = true;
      if (this.warning == "") {
        this.show1 = false;
        this.$Message.error("请填写到期警告天数");
        return;
      } else if (!/^[0-9]+$/.test(this.warning)) {
        this.show1 = false;
        this.$Message.error("请填写正确的到期警告天数");
        return;
      } else if (this.tips == "") {
        this.show1 = false;
        this.$Message.error("请填写到期提示天数");
        return;
      } else if (!/^[0-9]+$/.test(this.tips)) {
        this.show1 = false;
        this.$Message.error("请填写正确的到期提示天数");
        return;
      }
      let preId = this.info.preId;
      setup_updateDay({
        warningDays: this.warning,
        remindDays: this.tips,
        id: preId
      }).then(res => {
        console.log(res);
        if (res.success == true) {
          this.list();
          this.$Notice.success({
            title: "系统提示",
            desc: res.content
          });
        } else {
          this.$Notice.error({
            title: "系统提示",
            desc: res.content
          });
        }
        this.show1 = false;
        this.loading1 = false;
      });
    },
    canceles1() {
      this.show1 = false;
    },
    success() {
      this.show1 = true;
    },
    cancel() {
      console.log("取消");
      this.warning = localStorage.getItem("warningDays");
      this.tips = localStorage.getItem("remindDays");
    }
  }
};
</script>
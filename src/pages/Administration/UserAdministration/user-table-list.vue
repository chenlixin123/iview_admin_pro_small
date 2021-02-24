<style lang="less" scoped>
.ellipsis {
  width: 100%;
  height: 30px;
  text-align: center;
  line-height: 30px;
  border: 1px solid #dcdee2;
  font-size: 0.9vw;
}
.close {
  width: 80%;
  height: 100%;
  background: #afb7c9;
  border-radius: 5px;
  border: none;
  outline: none;
  color: white;
  font-size: 0.9vw;
}
.close:hover {
  width: 80%;
  background: #afb7c9;
  color: white;
  cursor: pointer;
}
.user_modal {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1000;
}
.user_content {
  width: 40%;
  min-width: 350px;
  min-height: 100px;
  background: white;
  position: absolute;
  right: 30%;
  top: 20%;
  border-radius: 5px;
  box-sizing: border-box;
  padding: 1vw 2vw;
}
.user_title {
  width: 100%;
  font-size: 1vw;
  /* border: 1px solid red; */
}
.user_text {
  width: 100%;
  height: 90%;
  /* border: 1px solid; */
}
.user_input1 {
  width: 100%;
  height: 20%;
  padding: 0 1vw;
  margin-top: 1vw;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  /* border: 1px solid red; */
}
.user_input2 {
  width: 100%;
  height: 20%;
  padding: 0 1vw;
  margin-top: 1vw;
  display: flex;
  justify-content: flex-start;
  align-items: top;
  /* border: 1px solid red; */
}
.user_label {
  font-weight: bold;
  min-width: 70px;
}
.user_btn {
  width: 70%;
  margin: 0 auto;
  margin-top: 1vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.user_btn1,
.user_btn2 {
  width: 40%;
  height: 2.5vw;
  padding: 0.5vw 0;
  border-radius: 5px;
  outline: none;
  border: none;
  color: white;
  font-size: 0.9vw;
}
.user_btn1 {
  background: #f66913;
}
.user_btn1:hover {
  background: #f66913;
  color: white;
}
.user_btn2 {
  background: #545c6a;
}
.user_btn2:hover {
  background: #545c6a;
  color: white;
}
.add {
  padding-left: 10px;
  padding-right: 10px;
  border: 1px dashed #657180;
  color: #657180;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  box-sizing: border-box;
  font-weight: 200;
  width: 18%;
  min-width: 70px;
  margin-left: 5px;
}
.empower_textrights {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.contents {
  width: 40%;
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
</style>
<template>
  <div class="i-table-no-border">
    <Button type="primary" @click="add_user">增加用户</Button>
    <Button type="primary" @click="authorization" class="ivu-ml-16"
      >批量导入授权</Button
    >
    <Button type="info" @click="out" :loading="btn_loading" class="ivu-ml-16"
      >导出</Button
    >
    <Table
      ref="table"
      :columns="columns"
      :data="list"
      :loading="loading"
      class="ivu-mt"
    >
      <template slot-scope="{ row }" slot="stallName">
        <div>{{ row.stallName }}</div>
      </template>
    </Table>
    <div class="ivu-mt ivu-text-center">
      <!-- <Page :total="limitData.length" :current.sync="current" /> -->
      <Page :total="totals" show-total :current="current" @on-change="jump" />
    </div>
    <Modal v-model="modal10" :closable="false">
      <p class="ellipsis" v-for="(item, index) in module_ellipsis" :key="index">
        {{ item }}
      </p>
      <div slot="footer" style="width: 100%; height: 35px; textalign: center">
        <button class="close" @click="del">关闭</button>
      </div>
    </Modal>

    <div class="user_modal" v-if="user_show">
      <div class="user_content" v-if="!user_show1">
        <div class="user_title">用户信息</div>
        <div class="user_text">
          <div class="user_input1">
            <label for style="color: white">*</label>
            <label for class="user_label">用户姓名：</label>
            <i-input
              v-model="user_name"
              placeholder="请输入用户姓名"
              style="width: 200px"
            ></i-input>
          </div>
          <div class="user_input1">
            <label for style="color: red">*</label>
            <label for class="user_label">手机号码：</label>
            <i-input
              v-model="user_mobile"
              :maxlength="11"
              placeholder="请输入手机号码"
              style="width: 200px"
            ></i-input>
          </div>
          <div class="user_input1">
            <label for style="color: red">*</label>
            <label for class="user_label">车牌号码：</label>
            <div class="empower_textrights">
              <Tag
                closable
                @on-close="handleClose(item)"
                v-for="(item, index) in user_plateNo"
                :key="index"
                style="
                  font-size: 0.8vw;
                  padding: 0px 8px;
                  color: #999;
                  height: 100%;
                  line-height: 1.5vw;
                "
                >{{ item }}</Tag
              >
            </div>
            <div class="add" @click="add">添加车牌</div>
          </div>
          <div class="user_input2">
            <label for style="color: white">*</label>
            <label for class="user_label">备注：</label>
            <textarea
              v-model="text"
              name
              id
              cols="30"
              rows="4"
              style="
                outline: none;
                border-radius: 5px;
                background: #f5f7f9;
                border: 1px solid #e3e8ee;
                padding-left: 5px;
              "
              placeholder="请输入少于120字"
              maxlength="120"
            ></textarea>
          </div>
          <div class="user_btn">
            <Button class="user_btn1" :loading="user_loading" @click="user_btn1"
              >确定</Button
            >
            <Button class="user_btn2" @click="user_btn2">取消</Button>
          </div>
        </div>
      </div>
      <div class="contents" v-if="user_show1">
        <div class="tops">
          <i-select v-model="model1" style="width: 50px">
            <i-option
              v-for="(item, index) in carPlete"
              :key="index"
              :value="item"
              style="width: 50px; height: 100%"
              >{{ item }}</i-option
            >
          </i-select>
          <Input
            v-model="values"
            @input="ss(values)"
            placeholder="请输入剩余车牌号"
            style="width: 60%; margin-left: 8px; padding-left: 5px"
          />
        </div>
        <div class="bottoms">
          <button class="save" @click="save">保存车牌号</button>
          <button class="cancels" @click="cancels">取消</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import random from "@/libs/random_str";
import {
  Administration_user_list,
  Administration_user_open_close,
  Administration_user_save,
  Administration_user_batchSave,
} from "@/api/Administration";
import time from "@/api/time";

export default {
  data() {
    return {
      user_name: "", //添加用户 用户姓名
      user_mobile: "", //添加用户 手机号码
      user_plateNo: "", //添加用户 车牌号码
      model1: "京",
      values: "",
      user_show: false,
      user_show1: false,
      text: "", //添加用户 备注
      user_loading: false, //按钮loading
      btn_loading: false,
      totals: 10,
      data: "",
      module_ellipsis: [],
      modal10: false,
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
      columns: [
        // {
        //   // type: "selection",
        //   width: 60,
        //   align: "center"
        // },
        {
          title: "用户名",
          key: "nickname",
          align: "center",
          minWidth: 120,
          // sortable: "custom"
        },
        {
          title: "手机号",
          key: "username",
          align: "center",
          minWidth: 130,
          // sortable: "custom"
        },
        {
          title: "绑定车牌",
          //   sortable: 'custom',
          align: "left",
          minWidth: 210,
          key: "plates",
          render: (h, params) => {
            // console.log(params.row);
            let clist = params.row.plates;
            const list = [];
            let sindex = 0;
            if (clist && clist !== null) {
              clist = clist.split(",");
              // console.log(clist);
              clist.forEach((value, index) => {
                // console.log(index);
                if (index <= 1) {
                  list[index] = h(
                    "div",
                    {
                      style: {
                        width: "80px",
                        display: "inline",
                        textAlign: "center",
                        border: "1px solid #999",
                        paddingLeft: "5px",
                        paddingRight: "5px",
                        borderRadius: "5px",
                        margin: "0 auto",
                        marginLeft: "5px",
                        color: "#999",
                      },
                      domProps: {
                        title: params.row.plates,
                      },
                    },
                    value
                  );
                } else if (index == 2) {
                  list[index] = h("span", [
                    h(
                      "span",
                      {
                        style: {
                          fontSize: "20px",
                          cursor: "pointer",
                          display: "inline",
                        },
                        on: {
                          click: () => {
                            this.showEllipsis(params.row.plates);
                          },
                        },
                      },
                      "..."
                    ),
                    h(
                      "div",
                      {
                        style: {
                          fontSize: "10px",
                          cursor: "pointer",
                          display: "inline",
                          // border: "1px solid red",
                          marginBottom: "20px",
                        },
                        on: {
                          click: () => {
                            this.showEllipsis(params.row.plates);
                          },
                        },
                      },
                      clist.length
                    ),
                  ]);
                }
              });
            }
            return list;
          },
        },
        {
          title: "楼层",
          key: "floor",
          minWidth: 80,
          align: "center",
        },
        {
          title: "分区",
          key: "areaName",
          minWidth: 80,
          align: "center",
        },
        {
          title: "车位号",
          key: "stallName",
          slot: "stallName",
          align: "center",
          minWidth: 100,
          // sortable: "custom"
        },
        {
          title: "租用公司",
          key: "company",
          ellipsis: "true",
          minWidth: 200,
          align: "center",
        },
        {
          title: "到期日",
          key: "endTime",
          minWidth: 110,
          align: "center",
          render: (h, params) => {
            let expriseDate = params.row.endTime;
            let dt;
            if (expriseDate && expriseDate !== null) {
              dt = time.time(params.row.endTime);
            }
            if (params.row.type != 0) {
              return h("span", dt);
            }
          },
        },
        {
          title: "剩余时间",
          align: "center",
          //   sortable: 'custom',
          key: "remainDays",
          minWidth: 100,
          render: (h, params) => {
            return h(
              "span",
              {
                style: {
                  color:
                    params.row.colorState == 1
                      ? "red"
                      : params.row.colorState == 2
                      ? "#f66913"
                      : "black",
                },
              },
              params.row.remainDays
            );
          },
        },
        {
          title: "操作",
          key: "id",
          minWidth: 100,
          align: "center",
          render: (h, params) => {
            let parking = params.row;
            let menu = null;
            // console.log(parking);
            menu = h("div", [
              h("i-switch", {
                props: {
                  type: "warning",
                  size: "large",
                  disabled: params.row.fixedId === null,
                  value: params.row.pick === 1, // 控制开关的打开或关闭状态，官网文档属性是value
                },
                style: {
                  marginRight: "10px",
                },
                scopedSlots: {
                  open: () => h("span", "正常"),
                  close: () => h("span", "禁用"),
                },
                on: {
                  "on-change": (state) => {
                    let params = {
                      fixedId: parking.fixedId,
                      userId: parking.userId,
                      mobile: parking.username,
                      plateNos: parking.plates,
                    };
                    if (state) {
                      this.enableParking(params);
                    } else {
                      this.disabledParking(params);
                    }
                  },
                },
              }),
            ]);
            return menu;
          },
        },
      ],
      loading: false,
      list: [],
      selectedData: [],
      current: 1,
      size: 10,
      sortType: "normal", // 当前排序类型，可选值为：normal（默认） || asc（升序）|| desc（降序）,
      sortColumns: "",
      filterType: undefined,
      showCreate: false,
      createData: {
        desc: "",
      },
      createRules: {
        desc: [{ required: true, message: "请输入描述", trigger: "blur" }],
      },
      creating: true,
      updateIndex: -1,
      datas: {
        start: 0,
        pageSize: 10,
        filterJson: "",
      },
    };
  },
  created() {
    this.list1();
  },
  methods: {
    list1() {
      this.current = 1;
      let data = this.datas;
      let start = data.start;
      let pageSize = data.pageSize;
      let filterJson = data.filterJson;
      this.loading = true;
      Administration_user_list({
        start,
        pageSize,
        filterJson,
      }).then((res) => {
        console.log(res);
        this.list = res.list;
        this.totals = res.total;
        this.loading = false;
      });
    },
    getData(value) {
      console.log(value);
      this.data = value;
      let start = value.start;
      let pageSize = value.pageSize;
      let filterJson = value.filterJson;
      this.current = 1;
      this.loading = true;
      Administration_user_list({
        start,
        pageSize,
        filterJson,
      }).then((res) => {
        console.log(res);
        this.totals = res.total;
        this.list = res.list;
        this.loading = false;
      });
    },
    jump(value) {
      // console.log(this.data);
      this.loading = true;
      let data = "";
      if (this.data) {
        data = this.data;
      } else {
        data = this.datas;
      }
      console.log(data);
      let start = (value - 1) * data.pageSize;
      let pageSize = data.pageSize;
      let filterJson = data.filterJson;
      Administration_user_list({
        start,
        pageSize,
        filterJson,
      }).then((res) => {
        // console.log(res);
        this.totals = res.total;
        this.current = value;
        this.list = res.list;
        this.loading = false;
      });
    },
    //显示省略车牌号
    showEllipsis(plates) {
      // console.log(plates);
      this.module_ellipsis = plates.split(",");
      // console.log(this.module_ellipsis);
      this.modal10 = true;
    },
    del() {
      this.modal10 = false;
    },
    //导出
    out() {
      let that = this;
      that.btn_loading = true;
      let start = 0;
      let pageSize = this.totals;
      let filterJson = "";
      Administration_user_list({
        start,
        pageSize,
        filterJson,
      }).then((res) => {
        // console.log(res);
        that.spinShow = false;
        if (res.list.length == 0) {
          this.$Notice.error({
            title: "系统提示",
            desc: "导出数据不能为空",
          });
        } else {
          let datas = res.list.map((res) => {
            // console.log(res);
            if (res.endTime && res.endTime != null) {
              res.endTime = time.time(res.endTime);
              // console.log(url.time(res.endTime));
            }
            return res;
          });
          let columns = this.columns.filter(function (col, index) {
            return index < 9;
          });
          let plaes = columns.filter((item, index, arry) => {
            return index == 2;
          });
          let columns1 = columns.filter(function (col, index) {
            return index < 2;
          });
          let columns2 = columns.filter(function (col, index) {
            return index > 2;
          });
          let columns3 = columns1.concat(columns2);
          let columns4 = columns3.concat(plaes);
          // console.log(columns4);
          // console.log(datas);
          this.$refs.table.exportCsv({
            filename: "用户管理",
            columns: columns4,
            original: false,
            data: datas,
          });
        }
        that.btn_loading = false;
      });
    },
    //跳转批量导入授权页面
    authorization() {
      // console.log("跳转批量导入授权页面");
      this.$router.push({
        path: "/Administration/UserAdministration/UserAdministration_excel",
      });
    },
    //启用
    enableParking(data) {
      console.log(data);
      Administration_user_open_close({
        fixedId: data.fixedId,
        userId: data.userId,
        mobile: data.mobile,
        plateNos: data.plateNos,
        state: 1,
      }).then((res) => {
        console.log(res);
        if (res.success == true) {
          this.$Notice.success({
            title: "系统提示",
            desc: res.content,
          });
        } else {
          this.$Notice.error({
            title: "系统提示",
            desc: res.content,
          });
        }
      });
    },
    //禁用
    disabledParking(data) {
      console.log(data);
      Administration_user_open_close({
        fixedId: data.fixedId,
        userId: data.userId,
        mobile: data.mobile,
        plateNos: data.plateNos,
        state: 0,
      }).then((res) => {
        console.log(res);
        if (res.success == true) {
          this.$Notice.success({
            title: "系统提示",
            desc: res.content,
          });
        } else {
          this.$Notice.error({
            title: "系统提示",
            desc: res.content,
          });
        }
      });
    },
    //增加用户
    add_user() {
      console.log("增加用户");
      this.user_show = true;
    },
    //添加车牌
    add() {
      console.log("添加车牌");
      this.user_show1 = true;
    },
    //删除车牌号
    handleClose(name) {
      console.log(name);
      console.log(this.data.plateNo);
      this.user_plateNo.map((item, index, arry) => {
        console.log(item, index, arry);
        if (item == name) {
          arry.splice(index, 1);
        }
      });
      console.log(this.user_plateNo);
    },
    //保存车牌号
    save() {
      console.log("保存车牌号");
      let str = /^([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[ABCDEFGHJK])|([ABCDEFGHJK]([A-HJ-NP-Z0-9])[0-9]{4})))|([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1})$/;
      let car = this.model1 + this.values;
      console.log(car);
      let sv = str.test(car);
      console.log(sv);
      console.log(this.model1);
      console.log(this.values);
      if (sv == true && this.model1 != "" && this.values != "") {
        if (this.user_plateNo == null || this.user_plateNo == "") {
          console.log("11111111111111");
          this.user_plateNo = [];
          this.user_plateNo.push(car);
          this.user_show1 = false;
          this.values = "";
        } else {
          console.log("2222222222222");
          this.svn = false;
          this.user_plateNo.map((res) => {
            if (res == car) {
              this.$Message.warning("已有该车牌号，请勿重复添加");
              this.svn = true;
            }
          });
          if (this.svn != true) {
            console.log("3333333333");
            this.user_plateNo.push(car);
            this.user_show1 = false;
            this.values = "";
          }
        }
      } else if (sv == false && this.model1 != "" && this.values != "") {
        this.$Message.warning("请填写正确车牌号");
      } else {
        this.$Message.warning("请填写车牌号");
      }
      console.log(sv);
    },
    //取消保存车牌号
    cancels() {
      console.log("取消保存车牌号");
      this.user_show1 = false;
      this.values = "";
    },
    //车牌号输入框
    ss(obj) {
      // console.log(obj)
      this.values = obj.toUpperCase();
    },
    //确定添加
    user_btn1() {
      this.user_loading = true;
      console.log(this.user_name);
      console.log(this.user_mobile);
      console.log(this.user_plateNo);
      console.log(this.text);
      var telStr = /^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/;
      console.log(telStr.test(this.user_mobile));
      if (this.user_mobile == "") {
        this.$Message.warning("请填写手机号码");
        this.user_loading = false;
        return;
      } else if (!telStr.test(this.user_mobile)) {
        this.$Message.warning("请填写正确的手机号码");
        this.user_loading = false;
        return;
      } else if (this.user_plateNo.length == 0) {
        this.$Message.warning("请填写车牌号码");
        this.user_loading = false;
        return;
      }
      let user_plateNo = this.user_plateNo.join(",");
      Administration_user_save({
        company: "",
        stallName: "",
        username: this.user_name,
        mobile: this.user_mobile,
        plateNo: user_plateNo,
        remark: this.text,
      }).then((res) => {
        console.log(res);
        if (res.success == true) {
          this.$Notice.success({
            title: "系统提示",
            desc: res.content,
          });
          this.totals = 0;
          this.list1();
        } else {
          this.$Notice.error({
            title: "系统提示",
            desc: res.content,
          });
        }
        this.user_mobile = "";
        this.user_name = "";
        this.user_plateNo = [];
        user_plateNo = "";
        this.text = "";
        this.user_loading = false;
        this.user_show = false;
      });
    },
    //取消添加
    user_btn2() {
      this.user_show = false;
    },
  },
};
</script>

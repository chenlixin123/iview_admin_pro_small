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
</style>
<template>
  <div class="i-table-no-border">
    <Button type="primary" @click="authorization">批量导入授权</Button>
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
      <template slot-scope="{ row }" slot="type">
        <div v-if="row.type === 0">时租</div>
        <div v-else>固定</div>
      </template>
      <template slot-scope="{ row }" slot="rentStatus">
        <Badge v-if="row.rentStatus === 1" status="success" text="已租" />
        <Badge v-else-if="row.rentStatus === 2" status="default" text="未租" />
        <Badge v-else-if="row.rentStatus === 3" status="error" text="过期" />
        <Badge v-else status="success" text="禁用" />
      </template>
    </Table>
    <div class="ivu-mt ivu-text-center">
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
  </div>
</template>
<script>
import random from "@/libs/random_str";
import {
  Administration_rent_list,
  Administration_open,
  Administration_close,
} from "@/api/Administration";
import time from "@/api/time";

export default {
  data() {
    return {
      btn_loading: false,
      totals: 10,
      data: "",
      module_ellipsis: [],
      modal10: false,
      columns: [
        // {
        //   // type: "selection",
        //   width: 60,
        //   align: "center"
        // },
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
        },
        {
          title: "属性",
          key: "type",
          slot: "type",
          minWidth: 80,
          align: "center",
        },
        {
          title: "出租状态",
          key: "rentStatus",
          slot: "rentStatus",
          minWidth: 100,
          align: "center",
        },
        {
          title: "租用公司",
          key: "company",
          minWidth: 200,
          align: "center",
        },
        {
          title: "授权车牌",
          align: "left",
          key: "plateNos",
          minWidth: 235,
          render: (h, params) => {
            let clist = params.row.plateNos;
            const list = [];
            let sindex = 0;
            if (clist && clist !== null) {
              clist = clist.split(",");
              clist.forEach((value, index) => {
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
                        title: params.row.plateNos,
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
                            this.showEllipsis(params.row.stallId);
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
                            this.showEllipsis(params.row.stallId);
                          },
                        },
                      },
                      clist.length
                    ),
                  ]);
                }
              });
            }
            if (params.row.type != 0) {
              return list;
            }
          },
        },
        {
          title: "用户数",
          key: "userNumber",
          minWidth: 80,
          align: "center",
          render: (h, params) => {
            let expriseDate = params.row.userNumber;
            if (params.row.type != 0) {
              return h("span", expriseDate);
            }
          },
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
          key: "remainDays",
          minWidth: 100,
          align: "center",
        },
        {
          title: "操作",
          key: "id",
          minWidth: 190,
          align: "center",
          render: (h, params) => {
            let parking = params.row;
            let menu = null;
            // if (params.row.fixedId === null) {

            // } else {
            menu = h("div", [
              h("i-switch", {
                props: {
                  type: "warning",
                  size: "large",
                  disabled:
                    params.row.fixedId === null || params.row.rentStatus == 3,
                  value:
                    params.row.fixedState === 1 && params.row.rentStatus != 3, // 控制开关的打开或关闭状态，官网文档属性是value
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
                      stallId: parking.stallId,
                    };
                    if (state) {
                      this.enableParking(params);
                    } else {
                      this.disabledParking(params);
                    }
                  },
                },
              }),
              h(
                "span",
                {
                  props: {
                    // type: 'md-eye',
                    size: 26,
                    color: "#19be6b",
                  },
                  style: {
                    marginRight: "5px",
                    cursor: "pointer",
                  },
                  on: {
                    click: () => {
                      this.toViewRental(params.row);
                    },
                  },
                },
                "详情"
              ),
              h(
                "span",
                {
                  style: {
                    // type: 'md-trash',
                    size: 26,
                    // color: '#ed4014',
                    cursor: "pointer",
                  },
                  on: {
                    click: () => {
                      this.edit(params.row.fixedId, params.row.stallId);
                    },
                  },
                },
                "编辑"
              ),
            ]);
            // }
            if (params.row.type != 0) {
              return menu;
            }
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
      Administration_rent_list({
        start,
        pageSize,
        filterJson,
      }).then((res) => {
        this.list = res.list;
        this.totals = res.total;
        this.loading = false;
      });
    },
    getData(value) {
      this.data = value;
      let start = value.start;
      let pageSize = value.pageSize;
      let filterJson = value.filterJson;
      this.current = 1;
      this.loading = true;
      Administration_rent_list({
        start,
        pageSize,
        filterJson,
      }).then((res) => {
        this.totals = res.total;
        this.list = res.list;
        this.loading = false;
      });
    },
    jump(value) {
      this.loading = true;
      let data = "";
      if (this.data) {
        data = this.data;
      } else {
        data = this.datas;
      }

      let start = (value - 1) * data.pageSize;
      let pageSize = data.pageSize;
      let filterJson = data.filterJson;
      Administration_rent_list({
        start,
        pageSize,
        filterJson,
      }).then((res) => {
        this.totals = res.total;
        this.current = value;
        this.list = res.list;
        this.loading = false;
      });
    },
    //显示省略车牌号
    showEllipsis(stallId) {
      this.list.map((res) => {
        if (res.stallId == stallId) {
          if (res.plateNos && res.plateNos != null) {
            this.module_ellipsis = res.plateNos.split(",");

            this.modal10 = true;
          }
        }
      });
    },
    del() {
      this.modal10 = false;
    },
    // 编辑数据
    handleUpdate(index) {
      this.updateIndex = index;
      const item = this.list[index];
      this.createData.desc = item.desc;
      this.showCreate = true;
    },
    //导出
    out() {
      let that = this;
      that.btn_loading = true;
      let start = 0;
      let pageSize = this.totals;
      let filterJson = "";
      Administration_rent_list({
        start,
        pageSize,
        filterJson,
      }).then((res) => {
        that.spinShow = false;
        if (res.list.length == 0) {
          this.$Notice.error({
            title: "系统提示",
            desc: "导出数据不能为空",
          });
        } else {
          let datas = res.list.map((res) => {
            if (res.endTime && res.endTime != null) {
              res.endTime = time.time(res.endTime);
            }
            res.type = res.type == 0 ? "时租" : "固定";

            res.rentStatus =
              res.rentStatus == 1
                ? "已租"
                : res.rentStatus == 2
                ? "未租"
                : res.rentStatus == 3
                ? "过期"
                : "禁用";
            return res;
          });
          let columns = this.columns.filter(function (col, index) {
            return index < 10;
          });
          let plaes = columns.filter((item, index, arry) => {
            return index == 6;
          });
          let columns1 = columns.filter(function (col, index) {
            return index < 6;
          });
          let columns2 = columns.filter(function (col, index) {
            return index > 6;
          });
          let columns3 = columns1.concat(columns2);
          let columns4 = columns3.concat(plaes);
          this.$refs.table.exportCsv({
            filename: "车位管理",
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
      this.$router.push({
        path: "/Administration/CarAdministration/CarAdministration_excel",
      });
    },
    //启用
    enableParking(id) {
      let fixedId = id.fixedId;
      let stallId = id.stallId;
      Administration_open({
        fixedId,
        stallId,
      }).then((res) => {
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
    disabledParking(id) {
      let fixedId = id.fixedId;
      let stallId = id.stallId;
      Administration_close({
        fixedId,
        stallId,
      }).then((res) => {
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
    //详情
    toViewRental(id) {
      let fixedId = id.fixedId;
      let stallId = id.stallId;

      this.$router.push({
        path: "/Administration/CarAdministration/CarAdministrations",
        query: {
          fixedId: fixedId,
          stallId: stallId,
        },
      });
    },
    //编辑
    edit(fixedId, stallId) {
      this.$router.push({
        path: "/Administration/CarAdministration/CarAdministration_edit",
        query: {
          fixedId: fixedId,
          stallId: stallId,
        },
      });
    },
  },
};
</script>

<style lang="less" scoped>
</style>
<template>
  <div class="i-table-no-border">
    <Button type="info" @click="out" :loading="btn_loading">导出</Button>
    <Table ref="table" :columns="columns" :data="list" :loading="loading" class="ivu-mt">
      <template slot-scope="{ row }" slot="stallName">
        <div>{{ row.stallName }}</div>
      </template>
    </Table>
    <div class="ivu-mt ivu-text-center">
      <Page :total="totals" show-total :current="current" @on-change="jump" />
    </div>
  </div>
</template>
<script>
import random from "@/libs/random_str";
import {
  Administration_stall_status_list,
  Administration_user_open_close,
  Administration_user_save,
  Administration_user_batchSave
} from "@/api/Administration";
import time from "@/api/time";

export default {
  data() {
    return {
      btn_loading: false,
      totals: 10,
      data: "",
      module_ellipsis: [],
      columns: [
        {
          title: "楼层",
          align: "center",
          //   sortable: 'custom',
          key: "floor",
          minWidth: 100
        },
        {
          title: "分区",
          align: "center",
          //   sortable: 'custom',
          key: "areaName",
          minWidth: 100
        },
        {
          title: "车位号",
          align: "center",
          //   sortable: 'custom',
          key: "stallName",
          minWidth: 110
        },
        {
          title: "属性",
          align: "center",
          //   sortable: 'custom',
          key: "type",
          minWidth: 80,
          render: (h, params) => {
            let type = params.row.type;
            return h("div", type == 2 ? "固定" : type == 0 ? "时租" : "");
          }
        },
        {
          title: "出租状态",
          //   sortable: 'custom',
          key: "rentStatus",
          align: "center",
          minWidth: 120,
          render: (h, params) => {
            // console.log(params.row);
            let rentStatus = params.row.rentStatus;
            return h(
              "span",
              rentStatus == 1
                ? "已租"
                : rentStatus == 2
                ? "未租"
                : rentStatus == 3
                ? "过期"
                : rentStatus == 4
                ? "禁用"
                : ""
            );
          }
        },
        {
          title: "租用公司",
          align: "center",
          //   sortable: 'custom',
          key: "company",
          ellipsis: "true",
          minWidth: 150
        },

        {
          title: "授权车牌数",
          align: "center",
          //   sortable: 'custom',
          key: "plateNumber",
          minWidth: 130
        },
        {
          title: "用户数",
          align: "center",
          //   sortable: 'custom',
          key: "userNumber",
          minWidth: 90
        },
        {
          title: "车位状态",
          //   sortable: 'custom',
          key: "parkingState",
          align: "center",
          minWidth: 120,
          render: (h, params) => {
            let parkingState = params.row.parkingState;
            return h(
              "span",
              parkingState == 0 ? "无车" : parkingState == 1 ? "有车" : ""
            );
          }
        },
        {
          title: "车位锁状态",
          //   sortable: 'custom',
          key: "lockState",
          align: "center",
          minWidth: 130,
          render: (h, params) => {
            let lockState = params.row.lockState;
            return h(
              "span",
              lockState == 0
                ? "平躺"
                : lockState == 1
                ? "竖起"
                : lockState == 2
                ? "故障"
                : ""
            );
          }
        },
        {
          title: "车位锁电量",
          //   sortable: 'custom',
          key: "electricity",
          align: "center",
          minWidth: 130,
          render: (h, params) => {
            let electricity = params.row.electricity;
            return h(
              "span",
              electricity == 1
                ? "高"
                : electricity == 2
                ? "中"
                : electricity == 3
                ? "低"
                : electricity == 4
                ? "更换"
                : ""
            );
          }
        },
        {
          title: "使用方式",
          //   sortable: 'custom',
          key: "usage",
          align: "center",
          minWidth: 120,
          render: (h, params) => {
            let usage = params.row.usage;
            return h(
              "span",
              usage == 1
                ? "用户"
                : usage == 2
                ? "授权"
                : usage == 3
                ? "管理员"
                : usage == 4
                ? "直停"
                : usage == 5
                ? "直离"
                : ""
            );
          }
        },
        {
          title: "使用账户",
          align: "center",
          //   sortable: 'custom',
          key: "account",
          minWidth: 115
        },
        {
          title: "上次使用",
          //   sortable: 'custom',
          key: "lastUseTime",
          align: "center",
          minWidth: 160,
          render: (h, params) => {
            let lastUseTime = params.row.lastUseTime;
            let dt;
            if (lastUseTime && lastUseTime !== null) {
              dt = time.TTS(params.row.lastUseTime);
            }
            return h("span", dt);
          }
        }
      ],
      loading: false,
      list: [],
      current: 1,
      size: 10,
      datas: {
        start: 0,
        pageSize: 10,
        filterJson: ""
      }
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
      Administration_stall_status_list({
        start,
        pageSize,
        filterJson
      }).then(res => {
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
      Administration_stall_status_list({
        start,
        pageSize,
        filterJson
      }).then(res => {
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
      Administration_stall_status_list({
        start,
        pageSize,
        filterJson
      }).then(res => {
        // console.log(res);
        this.totals = res.total;
        this.current = value;
        this.list = res.list;
        this.loading = false;
      });
    },
    //导出
    out() {
      let that = this;
      that.btn_loading = true;
      let start = 0;
      let pageSize = this.totals;
      let filterJson = "";
      Administration_stall_status_list({
        start,
        pageSize,
        filterJson
      }).then(res => {
        // console.log(res);
        that.spinShow = false;
        if (res.list.length == 0) {
          this.$Notice.error({
            title: "系统提示",
            desc: "导出数据不能为空"
          });
        } else {
          let datas = res.list.map(res => {
            // console.log(res);
            res.type = res.type == 2 ? "固定" : res.type == 0 ? "时租" : "";
            res.rentStatus =
              res.rentStatus == 1
                ? "已租"
                : res.rentStatus == 2
                ? "未租"
                : res.rentStatus == 3
                ? "过期"
                : res.rentStatus == 4
                ? "禁用"
                : "";

            res.parkingState =
              res.parkingState == 0
                ? "无车"
                : res.parkingState == 1
                ? "有车"
                : "";

            res.lockState =
              res.lockState == 0
                ? "平躺"
                : res.lockState == 1
                ? "竖起"
                : res.lockState == 2
                ? "故障"
                : "";

            res.electricity =
              res.electricity == 1
                ? "高"
                : res.electricity == 2
                ? "中"
                : res.electricity == 3
                ? "低"
                : res.electricity == 4
                ? "更换"
                : "";

            res.usage =
              res.usage == 1
                ? "用户"
                : res.usage == 2
                ? "管理员"
                : res.usage == 3
                ? "直停"
                : res.usage == 4
                ? "直离"
                : res.usage == 5
                ? "授权"
                : "";

            if (res.lastUseTime && res.lastUseTime != null) {
              res.lastUseTime = time.time(res.lastUseTime);
            }

            return res;
          });
          let columns = this.columns;
          console.log(columns);
          console.log(datas);
          this.$refs.table.exportCsv({
            filename: "车位状态",
            columns: columns,
            original: false,
            data: datas
          });
        }
        that.btn_loading = false;
      });
    }
  }
};
</script>

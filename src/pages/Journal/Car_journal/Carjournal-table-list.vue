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
import { Journal_car_list } from "@/api/Journal";
import time from "@/api/time";
import { mapState } from "vuex";

export default {
  data() {
    return {
      btn_loading: false,
      totals: 10,
      data: "",
      module_ellipsis: [],
      columns: [
        {
          title: "时间",
          //   sortable: 'custom',
          key: "createTime",
          align: "center",
          minWidth: 150,
          render: (h, params) => {
            let expriseDate = params.row.createTime;
            let dt;
            if (expriseDate && expriseDate !== null) {
              dt = time.TT(params.row.createTime);
            }
            return h("span", dt);
          }
        },
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
          key: "type",
          minWidth: 60,
          render: (h, params) => {
            // console.log(params.row.type);
            let state = params.row.type;
            return h("label", state === 0 ? "时租" : "固定");
          }
        },
        {
          title: "出租状态",
          align: "center",
          key: "rentStatus",
          minWidth: 90,
          render: (h, params) => {
            // console.log(params.row.rentStatus)
            let state = params.row.rentStatus;
            return h(
              "label",
              {
                // style: {
                //   color: (state === 2 ? '#ed4014' : '#19be6b')
                // }
              },
              state == 1
                ? "已租"
                : state == 2
                ? "未租"
                : state == 3
                ? "过期"
                : "禁用"
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
          title: "属性",
          align: "center",
          key: "operateAattitude",
          minWidth: 100,
          render: (h, params) => {
            // console.log(params.row.operateAattitude)
            let state = params.row.operateAattitude;
            return h(
              "label",

              state == 1
                ? "车位状态"
                : state == 2
                ? "车位锁状态"
                : state == 3
                ? "车位锁电量"
                : ""
            );
          }
        },
        {
          title: "动作",
          align: "center",
          key: "operateAction",
          minWidth: 60,
          render: (h, params) => {
            // console.log(params.row.operateAction)
            let state = params.row.operateAction;
            return h(
              "label",
              state == 0
                ? "离开"
                : state == 1
                ? "停车"
                : state == 2
                ? "升锁"
                : state == 3
                ? "降锁"
                : state == 4
                ? "故障"
                : state == 5
                ? "高电"
                : state == 6
                ? "中电"
                : state == 7
                ? "低电"
                : state == 8
                ? "换电"
                : ""
            );
          }
        },
        {
          title: "方式",
          align: "center",
          key: "userType",
          minWidth: 60,
          render: (h, params) => {
            // console.log(params.row.userType)
            let state = params.row.userType;
            return h(
              "label",
              {
                // style: {
                //   color: (state === 2 ? '#ed4014' : '#19be6b')
                // }
              },
              state === 1
                ? "用户"
                : state === 2
                ? "授权"
                : state === 3
                ? "管理员"
                : state === 4
                ? "系统"
                : ""
            );
          }
        },
        {
          title: "操作人",
          align: "center",
          //   sortable: 'custom',
          key: "username",
          minWidth: 110
        }
      ],
      loading: false,
      list: [],
      current: 1,
      size: 10,
      datas: {
        start: 0,
        pageSize: 10,
        filterJson: {
          filters: []
        }
      }
    };
  },
  created() {
    this.list1();
  },
  computed: {
    ...mapState("admin/user", ["info"])
  },
  methods: {
    list1() {
      let preid = { property: "preId", value: this.info.preId };
      this.datas.filterJson.filters.push(preid);
      this.current = 1;
      let data = this.datas;
      let start = data.start;
      let pageSize = data.pageSize;
      let filterJson = data.filterJson;
      this.loading = true;
      Journal_car_list({
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
      // console.log(value);
      this.data = value;
      let start = value.start;
      let pageSize = value.pageSize;
      let filterJson = value.filterJson;
      this.current = 1;
      this.loading = true;
      Journal_car_list({
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
      let data = "";
      if (this.data) {
        data = this.data;
      } else {
        data = this.datas;
      }
      this.loading = true;
      console.log(data);
      let start = (value - 1) * data.pageSize;
      let pageSize = data.pageSize;
      let filterJson = data.filterJson;
      Journal_car_list({
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
      let filterJson = {
        filters: []
      };
      let preid = { property: "preId", value: this.info.preId };
      filterJson.filters.push(preid);
      Journal_car_list({
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
            // 时间
            if (res.createTime && res.createTime != null) {
              res.createTime = time.TT(res.createTime);
            }
            // 属性
            res.type = res.type == 0 ? "时租" : "固定";
            // 出租状态
            res.rentStatus =
              res.rentStatus == 1
                ? "已租"
                : res.rentStatus == 2
                ? "未租"
                : res.rentStatus == 3
                ? "过期"
                : "禁用";
            // 属性
            res.operateAattitude =
              res.operateAattitude == 1
                ? "车位状态"
                : res.operateAattitude == 2
                ? "车位锁状态"
                : res.operateAattitude == 3
                ? "车位锁电量"
                : "";
            //  动作
            res.operateAction =
              res.operateAction == 0
                ? "离开"
                : res.operateAction == 1
                ? "停车"
                : res.operateAction == 2
                ? "升锁"
                : res.operateAction == 3
                ? "降锁"
                : res.operateAction == 4
                ? "故障"
                : res.operateAction == 5
                ? "高电"
                : res.operateAction == 6
                ? "中电"
                : res.operateAction == 7
                ? "低电"
                : res.operateAction == 8
                ? "换电"
                : "";
            //方式
            res.userType =
              res.userType == 1
                ? "用户"
                : res.userType === 2
                ? "授权"
                : res.userType === 3
                ? "管理员"
                : res.userType === 4
                ? "系统"
                : "";

            return res;
          });
          let columns = this.columns;
          // console.log(columns);
          // console.log(datas);
          this.$refs.table.exportCsv({
            filename: "车位日志",
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

<style lang="less" scoped>
</style>
<template>
  <div class="i-table-no-border">
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
import { Journal_system_list } from "@/api/Journal";
import time from "@/api/time";
import { mapState } from "vuex";

export default {
  data() {
    return {
      totals: 10,
      data: "",
      module_ellipsis: [],
      columns: [
        {
          title: "操作时间",
          align: "center",
          //   sortable: 'custom',
          key: "createTime",
          minWidth: 150,
          render: (h, params) => {
            let data = time.TT(params.row.createTime);
            return h("span", data);
          }
        },
        {
          title: "操作人",
          align: "center",
          //   sortable: 'custom',
          key: "createBy",
          minWidth: 70
        },
        {
          title: "操作对象",
          align: "center",
          //   sortable: 'custom',
          key: "operateObj",
          minWidth: 150
        },
        {
          title: "操作类别",
          align: "center",
          minWidth: 90,
          render: (h, params) => {
            let state = params.row.operateCategory;
            return h(
              "label",
              {
                // style: {
                //   color: (state === 2 ? '#ed4014' : '#19be6b')
                // }
              },
              state
            );
          }
        },
        {
          title: "操作方式",
          align: "center",
          minWidth: 90,
          render: (h, params) => {
            // console.log(params.row.operateType);
            let state = params.row.operateType;
            return h(
              "label",
              {
                // style: {
                //   color: (state === 2 ? '#ed4014' : '#19be6b')
                // }
              },
              state == 1
                ? "新增"
                : state == 2
                ? "更新"
                : state == 3
                ? "关闭"
                : state == 4
                ? "开启"
                : state == 5
                ? "清空"
                : state == 6
                ? "通过"
                : state == 7
                ? "取消"
                : ""
            );
          }
        },
        {
          title: "属性",
          align: "center",
          minWidth: 100,
          render: (h, params) => {
            // console.log(params.row.changeProperty);
            let state = params.row.changeProperty;
            return h(
              "label",
              {
                // style: {
                //   color: (state === 2 ? '#ed4014' : '#19be6b')
                // }
              },
              state
            );
          }
        },
        {
          title: "操作内容",
          align: "left",
          //   sortable: 'custom',
          key: "postChange",
          minWidth: 150
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
  computed: {
    ...mapState("admin/user", ["info"])
  },
  created() {
    this.list1();
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
      Journal_system_list({
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
      Journal_system_list({
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
      Journal_system_list({
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
    }
  }
};
</script>

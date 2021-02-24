<style lang="less" scoped>
.form-detail {
  margin: 24px;
  .i-layout-page-header {
    margin-top: 0px;
    margin-left: 0px;
    margin-right: 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 24px;
    background: white;
  }
  .plateNo {
    border: 1px solid;
    color: #9ea7b4;
    border-radius: 5px;
    margin-right: 4px;
    padding: 0px 5px;
    font-weight: bold;
  }
  .btn {
    position: absolute;
    right: 24px;
    bottom: 0;
  }
}
</style>
<template>
  <div class="form-detail">
    <div class="i-layout-page-header">
      <PageHeader title="车位详情" hidden-breadcrumb />
      <Button type="primary" @click="back">返回</Button>
    </div>
    <Card title="车位基本信息" :bordered="false" dis-hover class="ivu-mt">
      <DescriptionList>
        <Description term="车场名称：">{{data.preName}}</Description>
        <Description term="楼层信息：">{{data.floor}}</Description>
        <Description term="分区：">{{data.areaName}}</Description>
        <Description term="车位号：">{{data.stallName}}</Description>
        <Description term="属性：">{{data.type}}</Description>
        <Description term="出租状态：">{{data.rentStatus}}</Description>
      </DescriptionList>
    </Card>
    <Card title="车位授权信息" :bordered="false" dis-hover class="ivu-mt">
      <DescriptionList>
        <Description
          term="租期："
        >{{data.startTime}}-{{data.endTime}}&nbsp;{{data.rentStatus == '过期' ? '过期' : '剩余'}}&nbsp;{{data.remainDays}} 天</Description>
        <Description term="租用公司：">{{data.company}}</Description>
        <Description term="联系人：">{{data.contacts}}</Description>
        <Description term="联系电话：">{{data.linkPhone}}</Description>
        <Description term="授权车牌：">
          <span class="plateNo" v-for="(item,index) in data.plateNo" :key="index">{{item}}</span>
        </Description>
        <Description term="备注：">{{data.remark}}</Description>
        <Button type="primary" class="btn" @click="edit">编辑</Button>
      </DescriptionList>
    </Card>
    <Card title="车位授权信息变更记录" :bordered="false" dis-hover class="ivu-mt">
      <Table ref="table" :columns="columns" :data="list" :loading="loading" class="ivu-mt"></Table>
      <div class="ivu-mt ivu-text-center">
        <!-- <Page :total="limitData.length" :current.sync="current" /> -->
        <Page :total="totals" :page-size="pageSize" :current="starts" show-total @on-change="jump" />
      </div>
    </Card>
  </div>
</template>
<script>
import { mapState } from "vuex";
import {
  Administration_view,
  Administration_change
} from "@/api/Administration";
import time from "@/api/time";

export default {
  name: "form-detail",
  data() {
    return {
      data: "",
      totals: 10,
      start: 0,
      starts: 1,
      pageSize: 5,
      filterJson: {
        filters: []
      },
      columns: [
        {
          title: "操作时间",
          align: "center",
          minWidth: 130,
          render: (h, params) => {
            // console.log(params.row)
            let state = params.row.createTime;
            return h(
              "label",
              {
                // style: {
                //   color: (state === 2 ? '#ed4014' : '#19be6b')
                // }
              },
              (state = time.TT(params.row.createTime))
            );
          }
        },
        {
          title: "操作人",
          align: "center",
          //   sortable: 'custom',
          key: "createBy"
        },
        {
          title: "操作类型",
          align: "center",
          //   sortable: 'custom',
          render: (h, params) => {
            // console.log(params.row);
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
          render: (h, params) => {
            // console.log(params.row)
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
          //   sortable: 'custom',
          key: "changeProperty"
        },
        {
          title: "信息变更",
          align: "center",
          minWidth: 130,
          render: (h, params) => {
            // console.log(params.row.postChange);
            let state = params.row.postChange;
            return h(
              "label",
              {
                // style: {
                //   color: (state === 2 ? '#ed4014' : '#19be6b')
                // }
              },
              (state = params.row.postChange)
            );
          }
        }
      ],
      list: [],
      loading: false
    };
  },
  created() {
    console.log(this.$route.query);
    this.lists();
    this.changelist();
  },
  computed: {},
  methods: {
    lists() {
      let that = this;
      Administration_view({
        fixedId:
          this.$route.query.fixedId == null ? "" : this.$route.query.fixedId,
        stallId: this.$route.query.stallId
      }).then(res => {
        that.data = res;
        // console.log(that.data);
        if (res.createTime == null) {
          that.data.createTime = "";
        } else {
          that.data.createTime = time.time(res.createTime); //创建时间
        }
        // console.log(that.data.createTime);
        if (res.updateTime == null) {
          that.data.updateTime = "";
        } else {
          that.data.updateTime = time.time(res.updateTime); //更新时间
        }
        if (res.startTime == null) {
          that.data.startTime = "";
        } else {
          that.data.startTime = time.times(res.startTime); //开始时间
        }
        if (res.endTime == null) {
          that.data.endTime = "";
        } else {
          that.data.endTime = time.times(res.endTime); //结束时间
        }
      });
    },
    changelist() {
      // console.log("555555555555555555");
      let that = this;
      this.filterJson.filters = [];
      let data = {
        property: "stallId",
        value: that.$route.query.stallId
      };
      that.filterJson.filters.push(data);
      // console.log(that.filterJson);
      Administration_change({
        start: that.start,
        pageSize: that.pageSize,
        filterJson: that.filterJson
      }).then(res => {
        console.log(res);
        if (res.list.length == 0) {
        } else {
          that.list = res.list;
          this.totals = res.total;
          // console.log("22222222222");
        }
      });
    },
    jump(page) {
      console.log(page);
      this.starts = page;
      let that = this;
      this.filterJson.filters = [];
      let data = {
        property: "stallId",
        value: that.$route.query.stallId
      };
      that.filterJson.filters.push(data);
      // console.log(that.filterJson);
      Administration_change({
        start: (that.starts - 1) * that.pageSize,
        pageSize: that.pageSize,
        filterJson: that.filterJson
      }).then(res => {
        console.log(res);
        if (res.list.length == 0) {
        } else {
          that.list = res.list;
          this.totals = res.total;
          // console.log("22222222222");
        }
      });
    },
    //返回
    back() {
      this.$router.go(-1);
    },
    //编辑
    edit() {
      // console.log(this.$router)
      let that = this;
      this.$router.push({
        path: "/Administration/CarAdministration/CarAdministration_edit",
        query: {
          fixedId: that.$route.query.fixedId,
          stallId: that.$route.query.stallId
        }
      });
    }
  }
};
</script>
<style lang="less">
.form-detail {
  .ivu-form-item {
    margin-bottom: 12px;
  }
}
</style>

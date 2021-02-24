<template>
  <Form
    ref="form"
    :model="data"
    :rules="rules"
    :label-width="labelWidth"
    :label-position="labelPosition"
  >
    <Row :gutter="24" type="flex" justify="end">
      <Col v-bind="grid">
        <FormItem label="楼层：" prop="floor" label-for="floor">
          <Select v-model="data.floor" placeholder="请选择" element-id="floor" clearable>
            <Option
              v-for="(item,index) in floors"
              :key="index"
              :value="item.id"
            >{{ item.floorName }}</Option>
          </Select>
        </FormItem>
      </Col>
      <Col v-bind="grid">
        <FormItem label="车位号：" prop="carmodule" label-for="carmodule">
          <Select
            v-model="data.carmodule"
            placeholder="请选择"
            element-id="carmodule"
            clearable
            filterable
          >
            <Option
              v-for="(item,index) in carmodules"
              :key="index"
              :value="item.stallName"
            >{{ item.stallName }}</Option>
          </Select>
        </FormItem>
      </Col>
      <template v-if="collapse">
        <Col v-bind="grid">
          <FormItem label="属性：" prop="operateAttitude" label-for="operateAttitude">
            <Select
              v-model="data.operateAttitude"
              placeholder="请选择"
              element-id="operateAttitude"
              clearable
            >
              <Option :value="1">车位状态</Option>
              <Option :value="2">车位锁状态</Option>
              <Option :value="3">车位锁电量</Option>
            </Select>
          </FormItem>
        </Col>
        <Col v-bind="grid">
          <FormItem label="租用公司：" prop="company" label-for="company">
            <Input
              v-width="'100%'"
              v-model="data.company"
              placeholder="请输入公司名称"
              element-id="company"
            />
          </FormItem>
        </Col>
        <Col v-bind="grid">
          <FormItem label="动作：" prop="operateAction" label-for="operateAction">
            <Select
              v-model="data.operateAction"
              placeholder="请选择"
              element-id="operateAction"
              clearable
            >
              <Option
                v-for="(item,index) in operateActions"
                :key="index"
                :value="item.value"
              >{{ item.label }}</Option>
            </Select>
          </FormItem>
        </Col>
        <Col v-bind="grid">
          <FormItem label="方式：" prop="userType" label-for="userType">
            <Select v-model="data.userType" placeholder="请选择" element-id="userType" clearable>
              <Option :value="1">用户</Option>
              <Option :value="2">授权</Option>
              <Option :value="3">管理员</Option>
              <Option :value="4">系统</Option>
            </Select>
          </FormItem>
        </Col>
        <Col v-bind="grid">
          <FormItem label="操作人：" prop="username" label-for="username">
            <Input
              v-width="'100%'"
              v-model="data.username"
              placeholder="请输入账号名"
              element-id="username"
            />
          </FormItem>
        </Col>
        <Col v-bind="grid">
          <FormItem label="时间段：" prop="usage" label-for="usage">
            <DatePicker
              type="daterange"
              format="yyyy-MM-dd"
              v-model="timeslot"
              placeholder="请选择要查询的时间"
              :options="options1"
              style="width:100%"
            ></DatePicker>
          </FormItem>
        </Col>
      </template>
      <Col v-bind="grid" class="ivu-text-right">
        <FormItem>
          <Button type="primary" @click="handleSubmit">查询</Button>
          <Button class="ivu-ml-8" @click="handleReset">重置</Button>
          <a v-font="14" class="ivu-ml-8" @click="collapse = !collapse">
            <template v-if="!collapse">
              展开
              <Icon type="ios-arrow-down" />
            </template>
            <template v-else>
              收起
              <Icon type="ios-arrow-up" />
            </template>
          </a>
        </FormItem>
      </Col>
    </Row>
  </Form>
</template>
<style lang="less" scoped>
.box {
  display: flex;
  justify-content: space-between;
  justify-content: end;
}
</style>
<script>
import { mapState } from "vuex";
import { Administration_floor } from "@/api/Administration";
import time from "@/api/time";

export default {
  data() {
    return {
      timeslot: "",
      options1: {
        disabledDate(date) {
          return date && date.valueOf() > Date.now();
        }
      },
      operateActions: [
        {
          value: "0",
          label: "离开"
        },
        {
          value: "1",
          label: "停车"
        },
        {
          value: "2",
          label: "升锁"
        },
        {
          value: "3",
          label: "降锁"
        },
        {
          value: "4",
          label: "故障"
        },
        {
          value: "5",
          label: "高电"
        },
        {
          value: "6",
          label: "中电"
        },
        {
          value: "7",
          label: "低电"
        },
        {
          value: "8",
          label: "换电"
        }
      ],
      floors: "",
      carmodules: "",
      carmodules1: "",
      grid: {
        xl: 8,
        lg: 6,
        md: 12,
        sm: 24,
        xs: 24
      },
      data: {},
      collapse: false,
      condition: {
        start: 0,
        pageSize: 10,
        filterJson: {
          filters: []
        }
      },
      rules: {}
    };
  },
  computed: {
    ...mapState("admin/layout", ["isMobile"]),
    ...mapState("admin/user", ["info"]),

    labelWidth() {
      return this.isMobile ? undefined : 100;
    },
    labelPosition() {
      return this.isMobile ? "top" : "right";
    }
  },
  watch: {
    timeslot(val, oldval) {
      if (val[0] == "") {
        this.data.startDate = "";
        this.data.endDate = "";
      } else {
        this.data.startDate = time.time(val[0]);
        this.data.endDate = time.time(val[1]) + " " + "23:59:59";
      }
    },
    "data.floor"(val, oldVal) {
      //普通的watch监听
      console.log("5555555555555555555");
      this.floors.map(res => {
        if (val == res.floorName) {
          this.carmodules = res.stallSelect;
        } else if (val == undefined) {
          this.carmodules = this.carmodules1;
        }
        this.carmodule = "";
      });
    }
  },
  created() {
    this.floor();
  },
  methods: {
    //楼层车位联动接口
    floor() {
      let preId = this.info.preId;
      Administration_floor({
        preId
      }).then(res => {
        console.log(res);
        this.floors = res;
        res.map(res => {
          if (this.carmodules.length == 0) {
            this.carmodules = res.stallSelect;
          } else {
            this.carmodules = this.carmodules.concat(res.stallSelect);
            this.carmodules1 = this.carmodules.concat(res.stallSelect);
          }
        });
      });
    },
    //搜索
    handleSubmit() {
      let that = this;
      // console.log(this.data);
      this.condition.filterJson.filters = [];
      let datas = { property: "preId", value: this.info.preId };
      this.condition.filterJson.filters.push(datas);
      if (this.data.floor != undefined && this.data.floor != "") {
        let data = { property: "floor", value: this.data.floor };
        this.condition.filterJson.filters.push(data);
      }
      if (this.data.carmodule != undefined && this.data.carmodule != "") {
        let data = { property: "stallName", value: this.data.carmodule };
        this.condition.filterJson.filters.push(data);
      }
      if (
        this.data.operateAttitude != undefined &&
        this.data.operateAttitude != ""
      ) {
        let data = {
          property: "operateAttitude",
          value: this.data.operateAttitude
        };
        this.condition.filterJson.filters.push(data);
      }

      if (this.data.company != undefined && this.data.company != "") {
        let data = { property: "company", value: this.data.company };
        this.condition.filterJson.filters.push(data);
      }
      if (
        this.data.operateAction != undefined &&
        this.data.operateAction != ""
      ) {
        let data = {
          property: "operateAction",
          value: this.data.operateAction
        };
        this.condition.filterJson.filters.push(data);
      }

      if (this.data.userType != undefined && this.data.userType != "") {
        let data = { property: "userType", value: this.data.userType };
        this.condition.filterJson.filters.push(data);
      }

      if (this.data.username != undefined && this.data.username != "") {
        let data = { property: "username", value: this.data.username };
        this.condition.filterJson.filters.push(data);
      }
      if (this.data.startDate != undefined && this.data.startDate != "") {
        let data = { property: "startDate", value: this.data.startDate };
        this.condition.filterJson.filters.push(data);
      }
      if (this.data.endDate != undefined && this.data.endDate != "") {
        let data = { property: "endDate", value: this.data.endDate };
        this.condition.filterJson.filters.push(data);
      }
      console.log(this.condition);
      this.$emit("on-submit", this.condition);
    },
    //重置
    handleReset() {
      this.$refs.form.resetFields();
      this.data = {};
      let data = {
        start: 0,
        pageSize: 10,
        filterJson: {
          filters: []
        }
      };
      let datas = { property: "preId", value: this.info.preId };
      data.filterJson.filters.push(datas);
      this.$emit("on-reset", data);
    }
  }
};
</script>

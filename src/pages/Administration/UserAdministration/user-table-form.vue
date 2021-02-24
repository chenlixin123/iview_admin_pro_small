<template>
  <Form
    ref="form"
    :model="data"
    :rules="rules"
    :label-width="labelWidth"
    :label-position="labelPosition"
  >
    <Row :gutter="24" type="flex" justify="space-between">
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
          <FormItem label="到期时间：" prop="expireDate" label-for="expireDate">
            <Select v-model="data.expireDate" placeholder="请选择" element-id="expireDate" clearable>
              <Option :value="1">7天内</Option>
              <Option :value="2">30天内</Option>
              <Option :value="3">已过期</Option>
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
          <FormItem label="用户名：" prop="username" label-for="username">
            <Input
              v-width="'100%'"
              v-model="data.username"
              placeholder="请输入用户名"
              element-id="username"
            />
          </FormItem>
        </Col>
        <Col v-bind="grid">
          <FormItem label="手机号：" prop="mobile" label-for="mobile">
            <Input v-width="'100%'" v-model="data.mobile" placeholder="请输入手机号" element-id="mobile" />
          </FormItem>
        </Col>
        <Col v-bind="grid">
          <FormItem label="车牌号：" prop="plateNos" label-for="plateNos">
            <Input
              v-width="'100%'"
              v-model="data.plateNos"
              placeholder="请输入车牌号"
              element-id="plateNos"
            />
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
  justify-content: space-around;
}
</style>
<script>
import { mapState } from "vuex";
import { Administration_floor } from "@/api/Administration";

export default {
  data() {
    return {
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
      console.log(this.data);
      // this.data = "";
      this.condition.filterJson.filters = [];

      if (this.data.floor != undefined && this.data.floor != "") {
        let data = { property: "floor", value: this.data.floor };
        this.condition.filterJson.filters.push(data);
      }
      if (this.data.carmodule != undefined && this.data.carmodule != "") {
        let data = { property: "stallName", value: this.data.carmodule };
        this.condition.filterJson.filters.push(data);
      }
      if (this.data.expireDate != undefined && this.data.expireDate != "") {
        let data = { property: "expireDate", value: this.data.expireDate };
        this.condition.filterJson.filters.push(data);
      }
      if (this.data.company != undefined && this.data.company != "") {
        let data = { property: "company", value: this.data.company };
        this.condition.filterJson.filters.push(data);
      }
      if (this.data.username != undefined && this.data.username != "") {
        let data = { property: "nickname", value: this.data.username };
        this.condition.filterJson.filters.push(data);
      }
      if (this.data.mobile != undefined && this.data.mobile != "") {
        let data = { property: "mobile", value: this.data.mobile };
        this.condition.filterJson.filters.push(data);
      }
      if (this.data.plateNos != undefined && this.data.plateNos != "") {
        let data = { property: "plates", value: this.data.plateNos };
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
        filterJson: ""
      };
      this.$emit("on-reset", data);
    }
  }
};
</script>

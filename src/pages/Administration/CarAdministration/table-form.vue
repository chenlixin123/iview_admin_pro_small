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
          <Select
            v-model="data.floor"
            placeholder="请选择"
            element-id="floor"
            clearable
          >
            <Option
              v-for="(item, index) in floors"
              :key="index"
              :value="item.id"
              >{{ item.floorName }}</Option
            >
          </Select>
        </FormItem>
      </Col>
      <Col v-bind="grid">
        <FormItem label="车位号：" prop="stallName" label-for="stallName">
          <Select
            v-model="data.stallName"
            placeholder="请选择"
            element-id="stallName"
            clearable
            filterable
          >
            <Option
              v-for="(item, index) in carmodules"
              :key="index"
              :value="item.stallName"
              >{{ item.stallName }}</Option
            >
          </Select>
        </FormItem>
      </Col>
      <template v-if="collapse">
        <Col v-bind="grid">
          <FormItem label="到期时间：" prop="expireDate" label-for="expireDate">
            <Select
              v-model="data.expireDate"
              placeholder="请选择"
              element-id="expireDate"
              clearable
            >
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
          <FormItem label="车位属性：" prop="type" label-for="type">
            <Select
              v-model="data.type"
              placeholder="请选择"
              element-id="type"
              clearable
            >
              <Option :value="2">固定</Option>
              <Option :value="0">时租</Option>
            </Select>
          </FormItem>
        </Col>
        <Col v-bind="grid">
          <FormItem label="出租状态：" prop="rentStatus" label-for="rentStatus">
            <Select
              v-model="data.rentStatus"
              placeholder="请选择"
              element-id="rentStatus"
              clearable
            >
              <Option :value="1">已租</Option>
              <Option :value="2">未租</Option>
              <Option :value="3">过期</Option>
              <Option :value="4">禁用</Option>
            </Select>
          </FormItem>
        </Col>
        <Col v-bind="grid">
          <FormItem label="车牌号：" prop="plateNo" label-for="plateNo">
            <Input
              v-width="'100%'"
              v-model="data.plateNo"
              placeholder="请输入车牌号"
              element-id="plateNo"
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
        xs: 24,
      },
      data: {},
      collapse: false,
      condition: {
        start: 0,
        pageSize: 10,
        filterJson: {
          filters: [],
        },
      },
      rules: {},
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
    },
  },
  watch: {
    "data.floor"(val, oldVal) {
      //普通的watch监听
      console.log("5555555555555555555");
      this.floors.map((res) => {
        if (val == res.floorName) {
          this.carmodules = res.stallSelect;
        } else if (val == undefined) {
          this.carmodules = this.carmodules1;
        }
        this.carmodule = "";
      });
    },
  },
  created() {
    this.floor();
  },
  methods: {
    //楼层车位联动接口
    floor() {
      let preId = this.info.preId;
      Administration_floor({
        preId,
      }).then((res) => {
        console.log(res);
        this.floors = res;
        res.map((res) => {
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
      if (this.data.stallName != undefined && this.data.stallName != "") {
        let data = { property: "stallName", value: this.data.stallName };
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
      if (this.data.type != undefined && this.data.type != "") {
        let data = { property: "type", value: this.data.type };
        this.condition.filterJson.filters.push(data);
      }
      if (this.data.rentStatus != undefined && this.data.rentStatus != "") {
        let data = { property: "rentStatus", value: this.data.rentStatus };
        this.condition.filterJson.filters.push(data);
      }
      if (this.data.plateNo != undefined && this.data.plateNo != "") {
        let data = { property: "plateNo", value: this.data.plateNo };
        this.condition.filterJson.filters.push(data);
      }
      // console.log(this.condition);
      this.$emit("on-submit", this.condition);
    },
    //重置
    handleReset() {
      this.$refs.form.resetFields();
      this.data = {};
      let data = {
        start: 0,
        pageSize: 10,
        filterJson: "",
      };
      this.$emit("on-reset", data);
    },
  },
};
</script>

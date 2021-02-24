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
          <FormItem label="出租状态：" prop="rentStatus" label-for="rentStatus">
            <Select v-model="data.rentStatus" placeholder="请选择" element-id="rentStatus" clearable>
              <Option :value="1">已租</Option>
              <Option :value="2">未租</Option>
              <Option :value="3">过期</Option>
              <Option :value="4">禁用</Option>
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
          <FormItem label="车位锁状态：" prop="lockState" label-for="lockState">
            <Select v-model="data.lockState" placeholder="请选择" element-id="lockState" clearable>
              <Option
                v-for="(item,index) in car_locks"
                :key="index"
                :value="item.value"
              >{{ item.label }}</Option>
            </Select>
          </FormItem>
        </Col>
        <Col v-bind="grid">
          <FormItem label="电量：" prop="electricity" label-for="electricity">
            <Select v-model="data.electricity" placeholder="请选择" element-id="electricity" clearable>
              <Option :value="1">高</Option>
              <Option :value="2">中</Option>
              <Option :value="3">低</Option>
              <Option :value="4">更换</Option>
            </Select>
          </FormItem>
        </Col>
        <Col v-bind="grid">
          <FormItem label="使用账户：" prop="account" label-for="account">
            <Input
              v-width="'100%'"
              v-model="data.account"
              placeholder="请输入账户"
              element-id="account"
            />
          </FormItem>
        </Col>
        <Col v-bind="grid">
          <FormItem label="使用方式：" prop="usage" label-for="usage">
            <Select v-model="data.usage" placeholder="请选择" element-id="usage" clearable>
              <Option :value="1">用户</Option>
              <Option :value="2">授权</Option>
              <Option :value="3">管理员</Option>
              <Option :value="4">直停</Option>
              <Option :value="5">直离</Option>
            </Select>
          </FormItem>
        </Col>
        <Col v-bind="grid">
          <FormItem label="车位状态：" prop="parkingState" label-for="parkingState">
            <Select
              v-model="data.parkingState"
              placeholder="请选择"
              element-id="parkingState"
              clearable
            >
              <Option
                v-for="(item,index) in status"
                :key="index"
                :value="item.value"
              >{{ item.label }}</Option>
            </Select>
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

export default {
  data() {
    return {
      car_locks: [
        {
          value: "1",
          label: "竖起"
        },
        {
          value: "0",
          label: "平躺"
        },
        {
          value: "3",
          label: "故障"
        }
      ],
      status: [
        {
          value: "1",
          label: "有车"
        },
        {
          value: "0",
          label: "无车"
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
      if (this.data.rentStatus != undefined && this.data.rentStatus != "") {
        let data = { property: "rentStatus", value: this.data.rentStatus };
        this.condition.filterJson.filters.push(data);
      }
      if (this.data.company != undefined && this.data.company != "") {
        let data = { property: "company", value: this.data.company };
        this.condition.filterJson.filters.push(data);
      }
      if (this.data.lockState != undefined && this.data.lockState != "") {
        let data = { property: "lockState", value: this.data.lockState };
        this.condition.filterJson.filters.push(data);
      }
      if (this.data.electricity != undefined && this.data.electricity != "") {
        let data = { property: "electricity", value: this.data.electricity };
        this.condition.filterJson.filters.push(data);
      }
      if (this.data.account != undefined && this.data.account != "") {
        let data = { property: "account", value: this.data.account };
        this.condition.filterJson.filters.push(data);
      }
      if (this.data.usage != undefined && this.data.usage != "") {
        let data = { property: "usage", value: this.data.usage };
        this.condition.filterJson.filters.push(data);
      }
      if (this.data.parkingState != undefined && this.data.parkingState != "") {
        let data = { property: "parkingState", value: this.data.parkingState };
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

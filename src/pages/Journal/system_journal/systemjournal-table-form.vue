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
        <FormItem label="操作类别：" prop="operateCategory" label-for="operateCategory">
          <Select
            v-model="data.operateCategory"
            placeholder="请选择"
            element-id="operateCategory"
            clearable
          >
            <Option
              v-for="(item,index) in operateCategorys"
              :key="index"
              :value="item.value"
            >{{ item.label }}</Option>
          </Select>
        </FormItem>
      </Col>
      <Col v-bind="grid">
        <FormItem label="操作人：" prop="createBy" label-for="createBy">
          <Input
            v-width="'100%'"
            v-model="data.createBy"
            placeholder="请输入账号名"
            element-id="createBy"
          />
        </FormItem>
      </Col>
      <template v-if="collapse">
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
      operateCategorys: [
        {
          value: "系统登录",
          label: "系统登录"
        },

        {
          value: "系统退出",
          label: "系统退出"
        },
        {
          value: "车位授权",
          label: "车位授权"
        },
        {
          value: "用户授权",
          label: "用户授权"
        }
      ],
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
      carmodules: "",
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
        res.map(res => {
          console.log(res);
          if (this.carmodules.length == 0) {
            this.carmodules = res.stallSelect;
          } else {
            this.carmodules = this.carmodules.concat(res.stallSelect);
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
      let datas = { property: "preId", value: this.info.preId };
      this.condition.filterJson.filters.push(datas);
      //操作类别
      if (
        this.data.operateCategory != undefined &&
        this.data.operateCategory != ""
      ) {
        let data = {
          property: "operateCategory",
          value: this.data.operateCategory
        };
        this.condition.filterJson.filters.push(data);
      }
      //操作人
      if (this.data.createBy != undefined && this.data.createBy != "") {
        let data = { property: "createBy", value: this.data.createBy };
        this.condition.filterJson.filters.push(data);
      }
      //车牌号
      if (this.data.plateNo != undefined && this.data.plateNo != "") {
        let data = { property: "plateNo", value: this.data.plateNo };
        this.condition.filterJson.filters.push(data);
      }
      //车位号
      if (this.data.carmodule != undefined && this.data.carmodule != "") {
        let data = { property: "stallName", value: this.data.carmodule };
        this.condition.filterJson.filters.push(data);
      }
      //租用公司
      if (this.data.company != undefined && this.data.company != "") {
        let data = { property: "company", value: this.data.company };
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

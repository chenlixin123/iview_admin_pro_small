<template>
  <div class="box">
    <!-- <button @click="clicks">666666</button>
    <div>{{number}}</div>-->
    <Card :bordered="false" dis-hover class="ivu-mt">
      <table-form @on-submit="getData" @on-reset="getData" />
      <table-list ref="table" />
    </Card>
  </div>
</template>
<style lang="less" scoped>
.box {
  margin: 24px;
}
</style>
<script>
import tableForm from "./table-form";
import tableList from "./table-list";

export default {
  name: "list-table-list",
  components: { tableForm, tableList },
  data() {
    return {
      value: new Date(),
      number: 0
    };
  },
  created() {
    const today = this.$Date().format("YYYY-MM-DD HH:mm:ss");
    console.log(today);
  },
  methods: {
    clicks() {
      // for (let i = 1; i < 100000; i++) {
      // console.log(i);
      let nn = 1000;
      this.number = 0;
      var dd = setInterval(() => {
        this.number = this.number + 1;
        if (this.number == nn - 5) {
          clearInterval(dd);
          var ss = setInterval(() => {
            this.number = this.number + 1;
            if (this.number == nn) {
              clearInterval(ss);
            }
          }, 200);
        }
      }, 10); // }
    },
    getData(value) {
      // console.log(value);
      this.$refs.table.getData(value);
    }
  },
  mounted() {
    this.getData();
  }
};
</script>

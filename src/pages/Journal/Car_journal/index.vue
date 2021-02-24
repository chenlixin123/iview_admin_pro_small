<template>
  <div class="box">
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
import tableForm from "./Carjournal-table-form";
import tableList from "./Carjournal-table-list";

export default {
  name: "list-table-list",
  components: { tableForm, tableList },
  data() {
    return {};
  },
  methods: {
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

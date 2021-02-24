<style lang="less" scoped>
.ivu-text-center {
  font-size: 20px;
  position: absolute;
  top: 0;
  left: 40%;
}
</style>
<template>
  <div>
    <div class="ivu-text-center">{{ info.realname }}数字停车管理系统</div>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: "iHeaderTitle",
  computed: {
    ...mapState("admin/user", ["info"]),
  },
};
</script>

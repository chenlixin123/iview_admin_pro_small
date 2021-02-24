<style lang="less" scoped>
.page-account {
  display: flex;
  justify-content: space-between;
  height: 100vh;
}
.page-accounts {
  width: 62%;
  height: 100vh;
  background-image: url("../../../assets/images/beijingtu@3x.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center;
}
.username {
  margin-bottom: 60px;
}
.password {
  margin-bottom: 60px;
}
.login .ivu-button {
  border-radius: 10px;
}
</style>
<template>
  <div class="page-account">
    <div class="page-accounts"></div>
    <div class="page-account-container">
      <div class="page-account-top">
        <div class="page-account-top-logo">
          <img src="@/assets/images/links.png" alt="logo" />
        </div>
      </div>
      <Login @on-submit="handleSubmit" class="login">
        <UserName name="username" enter-to-submit class="username" />
        <Password name="password" enter-to-submit class="password" />
        <Submit class="ivu-button">登录</Submit>
      </Login>
    </div>
  </div>
</template>
<script>
import iCopyright from "@/components/copyright";
import { mapActions } from "vuex";
import mixins from "../mixins";

export default {
  mixins: [mixins],
  components: { iCopyright },
  data() {
    return {
      autoLogin: true
    };
  },
  methods: {
    ...mapActions("admin/account", ["login"]),
    /**
     * @description 登录
     * 表单校验已有 iView Pro 自动完成，如有需要修改，请阅读 iView Pro 文档
     */
    handleSubmit(valid, values) {
      if (valid) {
        const { username, password } = values;
        this.login({
          username,
          password
        }).then(() => {
          // 重定向对象不存在则返回顶层路径
          this.$router.replace(this.$route.query.redirect || "/");
        });
      }
    }
  }
};
</script>

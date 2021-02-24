<style lang="less" scoped>
.span {
  // border: 1px solid white;
  display: inline-block;
  position: relative;
}
.img_head {
  width: 25px;
  position: absolute;
  left: -16px;
  bottom: -8px;
  // border: 1px solid red;
}
.lab {
  display: inline-block;
  width: 18%;
  // border: 1px solid red;
}
.module_lab {
  width: 100%;
  height: 35px;
  padding-left: 3%;
  margin-top: 15px;
  margin-bottom: 10px;
}
.input {
  width: 82%;
  height: 100%;
  border-radius: 5px;
  outline: none;
  // padding-left: 15px;
  font-size: 13px;
}
</style>
<template>
  <span class="i-layout-header-trigger i-layout-header-trigger-min">
    <Dropdown
      :trigger="isMobile ? 'click' : 'hover'"
      class="i-layout-header-user"
      :class="{ 'i-layout-header-user-mobile': isMobile }"
      @on-click="handleClick"
    >
      <span class="span">
        <img class="img_head" size="small" src="../../../assets/images/touxiang@3x.png" />
      </span>
      <span class="i-layout-header-user-name" v-if="!isMobile">{{ info.username }}</span>
      <DropdownMenu slot="list">
        <!-- <i-link to="/setting/user">
          <DropdownItem>
            <Icon type="ios-contact-outline" />
            <span>{{ $t('basicLayout.user.center') }}</span>
          </DropdownItem>
        </i-link>-->
        <DropdownItem divided name="update">
          <Icon type="ios-create-outline" />
          <span>修改密码</span>
        </DropdownItem>
        <DropdownItem divided name="logout">
          <Icon type="ios-log-out" />
          <span>{{ $t('basicLayout.user.logOut') }}</span>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
    <Modal
      v-model="modal1"
      loading
      :closable="false"
      style="margin-top:100px;"
      @on-ok="ok"
      @on-cancel="cancel"
    >
      <div class="module_lab">
        <label class="lab">旧密码：</label>
        <Input class="input" type="password" placeholder="请输入旧密码" v-model="input1" />
      </div>
      <div class="module_lab">
        <label class="lab">新密码：</label>
        <Input class="input" type="password" placeholder="请输入新密码" v-model="input2" />
      </div>
      <div class="module_lab">
        <label class="lab">确认密码：</label>
        <Input class="input" type="password" placeholder="请输入确认密码" v-model="input3" />
      </div>
    </Modal>
  </span>
</template>
<script>
import { mapState, mapActions } from "vuex";
import { AccountUpdate } from "@/api/account";

export default {
  name: "iHeaderUser",
  data() {
    return {
      modal1: false,
      input1: "",
      input2: "",
      input3: "",
      modify: true,
      loading1: false
    };
  },
  computed: {
    ...mapState("admin/user", ["info"]),
    ...mapState("admin/layout", ["isMobile", "logoutConfirm"])
  },
  methods: {
    ...mapActions("admin/account", ["logout"]),
    handleClick(name) {
      if (name === "logout") {
        this.logout({
          confirm: this.logoutConfirm,
          vm: this
        });
      } else {
        this.modal1 = true;
      }
    },
    ok() {
      console.log(this.input1);
      if (this.modify == true) {
        this.modify = false;
        if (this.input2 != this.input3) {
          this.$Message.warning("新密码与确认密码不一致");
          this.modal1 = false;
          this.input1 = "";
          this.input2 = "";
          this.input3 = "";
          setTimeout(res => {
            this.modify = true;
          }, 1000);
          return;
        }
        AccountUpdate({
          oldPassword: this.input1,
          password: this.input3
        })
          .then(res => {
            console.log(res);
            if (res.update == true) {
              this.$Message.warning("密码修改成功");
              this.modal1 = false;
              // sessionStorage.setItem("logout", 1);
              this.$router.replace("/login");
              // sessionStorage.setItem("token", "");
            } else {
              this.modal1 = false;
              this.$Notice.error({
                title: res.message,
                desc: ""
              });
            }
            setTimeout(res => {
              this.modify = true;
            }, 1000);
            this.input1 = "";
            this.input2 = "";
            this.input3 = "";
          })
          .catch(err => {
            console.log(err);
          });
      }
    },
    cancel() {
      this.input1 = "";
      this.input2 = "";
      this.input3 = "";
    }
  }
};
</script>

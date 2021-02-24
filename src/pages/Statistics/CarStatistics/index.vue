<style lang="less" scoped>
.box {
  width: 100%;
  height: 93vh;
}
.icon {
  width: 50px;
  height: 50px;
}
.btn {
  width: 55px;
  height: 53px;
  position: absolute;
  top: 10vh;
  right: 3vw;
  border: 1px solid red;
}
.btn {
  width: 55px;
  height: 53px;
  position: absolute;
  top: 10vh;
  right: 3vw;
  cursor: pointer;
  border-radius: 50px;
  border: none;
  outline: none;
  font-weight: bold;
  font-size: 2vw;
  line-height: 1.8vw;
  background: rgba(255, 255, 255, 0.2);
  opacity: 0;
}
.btn:hover {
  color: white;
  opacity: 1;
}
.btn1 {
  width: 3.3vw;
  height: 3vw;
  position: absolute;
  top: 1.9vw;
  right: 2.5vw;
  cursor: pointer;
  border-radius: 50px;
  border: none;
  outline: none;
  font-size: 2.3vw;
  line-height: 2.3vw;
  opacity: 0;
  font-weight: 1800;
  background: rgba(255, 255, 255, 0.2);
}
.btn1:hover {
  color: white;
  opacity: 1;
}
#ifr {
  // margin-left: 256px;
  // margin-top: 64px;
}
</style>
<template>
  <div class="box" id="target">
    <button :class="show == true ? 'btn' : 'btn1'" @click="toggleFullscreen">
      <Icon :type="show == true ? 'ios-expand' : 'ios-contract'" />
    </button>
    <!-- <iframe id="ifr" :src="url" width="100%" height="100%" frameborder="0"></iframe> -->
    <i-frame :src="url" id="ifr" width="100%" height="100%" />
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import screenfull from "screenfull";

export default {
  name: "iHeaderFullscreen",
  data() {
    return {
      url: "",
      show: true
    };
  },
  created() {
    this.url =
      "https://datav.aliyuncs.com/share/62794636b5f77b40d549132af3af3fbe?timestamp=" +
      new Date().getTime(); //线上
  },
  mounted() {
    window.onresize = () => {
      // 全屏下监控是否按键了ESC
      if (!this.checkFull()) {
        // 全屏下按键esc后要执行的动作
        this.show = true;
        this.$root.event.$emit("show", true);
      }
    };
  },
  computed: {
    ...mapState("admin/layout", ["isFullscreen"])
  },
  methods: {
    checkFull() {
      var isFull =
        window.fullScreen ||
        document.webkitIsFullScreen ||
        document.msFullscreenEnabled;
      if (isFull === undefined) {
        isFull = false;
      }
      return isFull;
    },
    // ...mapActions("admin/layout", ["toggleFullscreen"]),
    toggleFullscreen() {
      const el = document.getElementById("target");
      if (screenfull.enabled) {
        screenfull.toggle(el);
      }
      if (this.show == true) {
        this.show = false;
      } else {
        this.show = true;
      }
    }
  }
};
</script>

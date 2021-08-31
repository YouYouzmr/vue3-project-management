<template>
  <div class="layout" :class="[deviceClass, withoutAnimation]">
    <navbar />
    <div class="layout-content">
      <el-scrollbar height="100vh">
        <menu-bar />
        <main>
          <!-- <bread-crumb></bread-crumb> -->
          <router-view v-slot="{ Component }">
            <transition name="fade">
              <component :is="Component"/>
            </transition>
          </router-view>
        </main>
        <!-- <footer-bar></footer-bar> -->
      </el-scrollbar>
    </div>
  </div>
</template>

<script>
import { menuBar, navbar } from "./components/index.js"
import resizeHandler from "./components/mixin/resizeHandler"
import { mapState } from "vuex";

export default {
  components: {
    menuBar,
    navbar,
  },
  mixins: [resizeHandler], 
  computed: {
    ...mapState(["sidebar"]),
    deviceClass() {
      return this.sidebar.device === "mobile"? "mobile" : ""
    },
    withoutAnimation() {
      return this.sidebar.withoutAnimation? 'withoutAnimation' : ""
    }
  },
  data() {
      return {
      }
  },
};
</script>

<style lang="scss" scoped>
.fade-enter-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
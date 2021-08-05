<template>
  <aside :class="[collapseClass]" class="menu">
    <div class="logo">头部名称</div>
    <el-menu
      :collapse="isCollapse"
      :uniqueOpened="true"
      :default-active="active"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#001529"
      text-color="hsla(0,0%,100%,.65)"
      active-text-color="#fff"
    >
      <el-submenu v-for="val in routes" :key="val.path" :index="val.path">
        <template #title>
          <i :class="val.meta.icon"></i>
          <span>{{val.meta.name}}</span>
        </template>
        <el-menu-item-group v-if="val.children">
          <el-menu-item v-for="item in val.children" :key="item.path" :index="`${val.path}/${item.path}`">
            <router-link :to="`${val.path}/${item.path}`">{{item.meta.name}}</router-link>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </aside>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["sidebar"]),
    isCollapse() {
      return this.sidebar.isCollapse;
    },
    collapseClass() {
      return !this.sidebar.isCollapse ? "menu-unfold" : "menu-fold";
    },
    active() {
      return this.$route.path
    }
  },
  data() {
    return {
      routes: []
    };
  },
  mounted () {
    this.getRoutes()
  },
  methods: {
    getRoutes() {
      this.routes = this.$router.options.routes.filter(val => val.path!=='/')
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style lang="scss" scoped>
.menu {
  position: relative;
  width: 180px;
  height: 100vh;
  left: 0;
  top: 0;
  bottom: 0;
  text-align: left;
  overflow: hidden;
  background-color: #001529;
  transition: width 0.2s;

  &.menu-fold {
    width: 63px;
  }

  .logo {
    background-color: #002140;
    height: 64px;
    line-height: 64px;
    padding-left: 20px;
    color: #fff;
    font-size: 20px;
    font-weight: 600px;
    overflow: hidden;
    transition: all 0.2s;
  }

  .el-menu-vertical-demo {
    border-right: none;
  }
}

@media screen and (max-width: 768px) {
  .menu {
    width: none;
  }
}
</style>
<template>
  <div :class="[collapseClass]" class="menu">
    <div class="logo">头部名称</div>
    <el-menu
      :collapse="isCollapse"
      :uniqueOpened="true"
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#001529"
      text-color="hsla(0,0%,100%,.65)"
      active-text-color="#fff"
    >
      <el-submenu index="1">
        <template #title>
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <template #title>分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template #title>选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <template #title>导航二</template>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <template #title>导航三</template>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <template #title>导航四</template>
      </el-menu-item>
      <el-submenu index="5">
        <template #title>
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <template #title>分组一</template>
          <el-menu-item index="5-1">选项1</el-menu-item>
          <el-menu-item index="5-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="5-3">选项3</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["sidebar"]),
    isCollapse() {
      console.log("isCollapse: ", this.sidebar.isCollapse);
      return this.sidebar.isCollapse;
    },
    collapseClass() {
      console.log("isCollapse: ", this.sidebar.isCollapse);
      return !this.sidebar.isCollapse ? "menu-unfold" : "menu-fold";
    },
  },
  data() {
    return {};
  },
  methods: {
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
  transition: all 0.2s;

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
    transition: all 0.3s;
  }

  .el-menu-vertical-demo {
    border-right: none;
  }
}
</style>
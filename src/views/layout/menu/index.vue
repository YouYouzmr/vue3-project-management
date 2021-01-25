<template>
  <div class="left-menu">
    <div class="menu-title">工作台</div>
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
    >
      <el-submenu :key="val" index="1">
        <template v-slot:title>
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <template v-slot:title>
            <span>分组一</span>
          </template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <template v-slot:title>
            <span>分组二</span>
          </template>
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template v-slot:title>
            <span>选项4</span>
          </template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <template v-slot:title>
          <span>导航二</span>
        </template>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <template v-slot:title>
          <span>导航三</span>
        </template>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <template v-slot:title>
          <span>导航四</span>
        </template>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "menu",
  setup() {
    let isCollapse = ref(false);

    function handleOpen(key, keyPath) {
      console.log(key, keyPath);
    }

    function handleClose(key, keyPath) {
      console.log(key, keyPath);
    }

    return {
      isCollapse,
      handleOpen,
      handleClose,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
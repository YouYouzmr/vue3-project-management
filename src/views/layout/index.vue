<template>
  <menu-com></menu-com>
  <div class="container">
    <navbar></navbar>
    <div class="content">
      <transition>
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
import menuCom from "./menu/index";
import navbar from "./navbar/index";

export default {
  setup() {
    return {};
  },
  components: {
    menuCom,
    navbar,
  },
  mounted() {
    console.log(menuCom);
  },
};
</script>

<style lang="scss" scoped>
</style>
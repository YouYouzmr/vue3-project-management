<template>
  <div class="mask-box" :class="[collapseClass]" @click="handleClickMask"></div>
  <el-scrollbar height="100vh">
    <aside :class="[collapseClass]" class="navbar">
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
            <svg-icon fill="hsla(0,0%,100%,.65)" class="iconName" :iconName="val.meta.icon"></svg-icon>
            <span>{{val.meta.name}}</span>
          </template>
          <!-- <el-menu-item-group v-if="val.children"> -->
          <template v-if="val.children">
            <el-menu-item v-for="item in val.children" :key="item.path" :index="`${val.path}/${item.path}`">
              <router-link :to="`${val.path}/${item.path}`" v-slot="{navigate}">
                <span @click="navigate" @keypress.enter="navigate" role="link">{{item.meta.name}}</span>
              </router-link>
            </el-menu-item>
          </template>
          <!-- </el-menu-item-group> -->
        </el-submenu>
      </el-menu>
    </aside>
  </el-scrollbar>
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
      return !this.sidebar.isCollapse ? "navbar-unfold" : "navbar-fold";
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
    handleOpen() {
    },
    handleClose() {
    },
    handleClickMask() {
      this.$store.dispatch('toggleSidebar', { withoutAnimation: false })
    }
  },
};
</script>

<style lang="scss" scoped>
.iconName { 
  width: 1.2em;
  height: 1.2em;
  margin-right: 5px;
}
</style>
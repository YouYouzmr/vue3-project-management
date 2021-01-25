<template>
  <div class="navbar">
    
    <!-- 面包屑导航 -->
    <breadcrumb/>
    <!-- 右侧信息个人信息，或者操作 -->
    <div class="fr">
      张三
    </div>
  </div>
</template>

<script>
import breadcrumb from "@/components/Breadcrumb/index"
export default {
  setup() {
    return {};
  },
  components: {
    breadcrumb,
  },
};
</script>

<style lang="scss" scoped>
</style>
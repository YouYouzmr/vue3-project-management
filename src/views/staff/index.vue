<template>
  <div>
    <el-form size="small" inline>
      <el-form-item>
        <el-input placeholder="输入名字或工号"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">搜索</el-button>
      </el-form-item>
    </el-form>
    <table-list></table-list>
  </div>
</template>

<script>
import tableList from "@/components/table/index";
export default {
  data() {
    return {
    };
  },
  components: {
    tableList,
  },
};
</script>

<style lang="scss" scoped>
</style>
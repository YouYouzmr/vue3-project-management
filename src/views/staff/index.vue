<template>
  <div>
    <el-form v-model="form" size="small" inline>
      <el-form-item>
        <el-input v-model="form.searchInfo" placeholder="输入名字或工号"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">搜索</el-button>
      </el-form-item>
    </el-form>
    <table-list :headerData="headerData" :tableData="tableData"></table-list>
  </div>
</template>

<script>
import tableList from "@/components/table/index";
export default {
  data() {
    return {
      form: {
        searchInfo: null
      },
      headerData: [{
          prop: "id",
          label: "id",
        },
        {
          prop: "name",
          label: "姓名",
        },
        {
          prop: "workNum",
          label: "工号",
        },
        {
          prop: "position",
          label: "岗位",
        },
        {
          prop: "entryDate",
          label: "入职日期",
        },
        {
          prop: "email",
          label: "邮箱",
        },
        {
          prop: "phone",
          label: "手机号",
        },
        {
          prop: "departName",
          label: "部门",
        },
        {
          prop: "operate",
          label: "操作",
        },
      ]
    }
  },
  components: {
    tableList,
  },
  methods: {
    serach() {
      
    }
  },
};
</script>

<style lang="scss" scoped>
</style>
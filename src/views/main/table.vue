<template>
  <div>
    <table-list :tableData="tableData" :headerData="headerData">
      <template v-slot:operate>
        <el-button @click="seeDetail" type="primary" size="mini">详情</el-button>
        <el-button @click="deleteItem" type="danger" size="mini">删除</el-button>
        <el-button @click="editItem" type="success" size="mini">编辑</el-button>
      </template>
    </table-list>
  </div>
</template>

<script>
import tableList from "@/components/table/index";

export default {
  data() {
    return {
      tableData: [
        {
          id: 1,
          label: "name1",
          value: "value-name1",
          operate: "操作信息1",
        },
        {
          id: 2,
          label: "name2",
          value: "value-name2",
          operate: "操作信息2",
        },
        {
          id: 3,
          label: "name3",
          value: "value-name3",
          operate: "操作信息3",
        },
      ],
      headerData: [
        {
          prop: "id",
          label: "id",
        },
        {
          prop: "label",
          label: "label",
        },
        {
          prop: "value",
          label: "value",
        },
        {
          prop: "operate",
          label: "操作",
        },
      ],
    };
  },
  components: {
    tableList,
  },
  mounted () {
  },
};
</script>

<style lang="scss" scoped>
</style>
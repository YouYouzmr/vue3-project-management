<template>
   <el-table size="small" :data="tableData">
       <table-item v-for="val in headerData" :key="val.id" :prop="val.prop" :label="val.label"></table-item>
   </el-table>
</template>

<script>
import tableItem from "./table-item.vue"
export default {
    props: {
        tableData: {
            type: Array,
            default: function() {
                return []
            }
        },
        headerData: {
            type: Array,
            default: function() {
                return []
            }
        }
    },
    components: {
        tableItem
    },
    mounted () {
        console.log(this.tableData);
    },
}
</script>

<style lang="scss" scoped>

</style>
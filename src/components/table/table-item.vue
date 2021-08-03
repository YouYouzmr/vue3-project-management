<template>
    <el-table-column align="center" v-bind="$attrs">
        <template #default v-if="$attrs.prop=='operate'">
            <el-button @click="seeDetail" type="primary" size="mini">详情</el-button>
            <el-button @click="deleteItem" type="danger" size="mini">删除</el-button>
            <el-button @click="editItem" type="success" size="mini">编辑</el-button>
        </template>
    </el-table-column>
</template>

<script>
export default {
    inheritAttrs: false
}
</script>

<style lang="scss" scoped>

</style>
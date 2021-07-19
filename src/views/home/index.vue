<template>
    <div class="container">
        <table-list :tableData="tableData" :headerData="headerData"></table-list>
    </div>
</template>

<script>
import tableList from "@/components/table"
export default {
    data() {
        return {
            headerData: [
                {
                    prop: "id",
                    label: "id"
                },
                {
                    prop: "label",
                    label: "label"
                },
                {
                    prop: "value",
                    label: "value"
                },
                {
                    prop: "operate",
                    label: '操作'
                }
            ],
            tableData: [
                {
                    id: 1,
                    label: 'name1',
                    value: 'value-name1',
                    operate: '操作信息1'
                },
                {
                    id: 2,
                    label: 'name2',
                    value: 'value-name2',
                    operate: '操作信息2'
                },
                {
                    id: 3,
                    label: 'name3',
                    value: 'value-name3',
                    operate: '操作信息3'
                }
            ]
        }
    },
    components: {
        tableList,
    },
}
</script>

<style lang="scss" scoped>

</style>
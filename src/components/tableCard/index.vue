<template>
    <el-row class="table-card" :gutter="1" type="flex">
        <el-col :span="24">
            <div class="card-title">{{title}}</div>
        </el-col>
        <el-col v-for="val in 6" :xs="12" :sm="12" :md="8" :lg="8" :xl="8">
            <t-card></t-card>
        </el-col>
    </el-row>
</template>

<script>
import tCard from "./tCard.vue"
    export default {
        props: {
            title: {
                type: String,
                default: '标题'
            },
            list: {
                type: Array,
                default: () => []
            }
        },
        components: {
            tCard,
        },
    }
</script>

<style lang="scss" scoped>
.table-card {
    margin-top: 20px;
    border-radius: 2px;

    .card-title {
        padding: 15px;
        background-color: #fff;
        margin-bottom: 1px;
    }
}
</style>
<template>
    <div class="container">
        <!-- 头部首页个人信息 -->
        <user-info></user-info>

        <table-card></table-card>
    </div>
</template>

<script>
import userInfo from "@/components/userInfo/index"
import lineChart from "@/echarts/lineChart"
import tableCard from "@/components/tableCard/index"

export default {
    data() {
        return {
        }
    },
    components: {
        userInfo,
        lineChart,
        tableCard
    },
}
</script>

<style lang="scss" scoped>

</style>
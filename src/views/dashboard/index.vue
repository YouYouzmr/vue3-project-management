<template>
    <div class="container">
        <!-- 头部首页个人信息 -->
        <user-info></user-info>

        <table-card v-for="val in 2" :key="val">
            <template v-slot:title>
                项目名称{{val}}
                <span class="fr baseColor pointer">更多</span>
            </template>
            <template v-slot:default>
                
            </template>
        </table-card>
    </div>
</template>

<script>
import userInfo from "@/components/userInfo/index"
import tableCard from "@/components/tableCard/index"

export default {
    data() {
        return {
        }
    },
    components: {
        userInfo,
        tableCard
    },
}
</script>

<style lang="scss" scoped>

</style>
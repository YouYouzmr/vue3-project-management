<template>
    <div class="breadcrumb-box">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <transition-group>
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>{{$router.currentRoute.value.meta.name}}</el-breadcrumb-item>
            </transition-group>
        </el-breadcrumb>
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    mounted () {
    },
}
</script>

<style lang="scss" scoped>
.breadcrumb-box {
    padding: 10px;
    background-color: #fff;
    margin-bottom: 1px;
}
</style>
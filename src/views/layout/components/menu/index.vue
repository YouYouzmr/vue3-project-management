<template>
    <div class="menu">
        <i class="fold-i el-hover" @click="handleToggleColse" :class="[foldClass]"></i>
        <div class="fr">
            <el-dropdown class="el-hover">
            <i class="el-icon-bell"></i>
            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item>新增任务10个</el-dropdown-item>
                </el-dropdown-menu>
            </template>
            </el-dropdown>
            
            <el-dropdown class="el-hover">
            <i class="el-icon-setting"></i>
            <template #dropdown>
                <el-dropdown-menu>
                <el-dropdown-item>主题设置</el-dropdown-item>
                </el-dropdown-menu>
            </template>
            </el-dropdown>
            
            <el-dropdown class="el-hover">
                <div class="avatar-box">
                    <img :src="imgUrl" alt="头像"/>
                    <div class="userName">登录人名字</div>
                </div>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item>注销</el-dropdown-item>
                        <el-dropdown-item>个人详情</el-dropdown-item>
                        <el-dropdown-item>信息配置</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    data() {
        return {
            imgUrl: require('@/assets/avatar.jpg')
        }
    },
    computed: {
        ...mapState(['sidebar']),
        foldClass() {
            return this.sidebar.isCollapse? 'el-icon-s-unfold' : 'el-icon-s-fold'
        }
    },
    methods: {
        handleToggleColse() {
            this.$store.dispatch('toggleSidebar')
        }
    },
}
</script>

<style lang="scss" scoped>
</style>
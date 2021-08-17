<template>
    <div class="menu">
        <i class="fold-i el-hover" @click="handleToggleColse" :class="[foldClass]"></i>
        <div class="fr">
            <el-dropdown>
            <i class="el-icon-bell el-hover"></i>
            <template #dropdown>
                <el-dropdown-menu>
                <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
                <el-dropdown-item icon="el-icon-circle-plus">狮子头</el-dropdown-item>
                <el-dropdown-item icon="el-icon-circle-plus-outline">螺蛳粉</el-dropdown-item>
                <el-dropdown-item icon="el-icon-check">双皮奶</el-dropdown-item>
                <el-dropdown-item icon="el-icon-circle-check">蚵仔煎</el-dropdown-item>
                </el-dropdown-menu>
            </template>
            </el-dropdown>
            
            <el-dropdown>
            <i class="el-hover el-icon-setting"></i>
            <template #dropdown>
                <el-dropdown-menu>
                <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
                <el-dropdown-item icon="el-icon-circle-plus">狮子头</el-dropdown-item>
                <el-dropdown-item icon="el-icon-circle-plus-outline">螺蛳粉</el-dropdown-item>
                <el-dropdown-item icon="el-icon-check">双皮奶</el-dropdown-item>
                <el-dropdown-item icon="el-icon-circle-check">蚵仔煎</el-dropdown-item>
                </el-dropdown-menu>
            </template>
            </el-dropdown>
            
            <el-dropdown>
                <div class="el-hover">
                    <img :src="imgUrl" alt="头像"/>
                    登录人名字
                </div>
                <template #dropdown>
                    <el-dropdown-menu>
                    <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
                    <el-dropdown-item icon="el-icon-circle-plus">狮子头</el-dropdown-item>
                    <el-dropdown-item icon="el-icon-circle-plus-outline">螺蛳粉</el-dropdown-item>
                    <el-dropdown-item icon="el-icon-check">双皮奶</el-dropdown-item>
                    <el-dropdown-item icon="el-icon-circle-check">蚵仔煎</el-dropdown-item>
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
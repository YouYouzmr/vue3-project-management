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
                        <el-dropdown-item @click="jump(val.url)" v-for="val in toolList" :key="val.id">{{val.name}}</el-dropdown-item>
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
                        <el-dropdown-item @click="localJump('/')">注销</el-dropdown-item>
                        <el-dropdown-item @click="localJump('/staff/detail')">个人详情</el-dropdown-item>
                        <el-dropdown-item @click="localJump('/staff/config')">信息配置</el-dropdown-item>
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
            imgUrl: require('@/assets/avatar.jpg'),
            toolList: [
                {
                    id: '3',
                    name: "vue3",
                    url: "https://v3.vuejs.org"
                },
                {
                    id: '4',
                    name: "vueRouter-next",
                    url: "https://next.router.vuejs.org/zh/"
                },
                {
                    id: '5',
                    name: "vuex-next",
                    url: "https://next.vuex.vuejs.org/zh/index.html"
                },
                {
                    id: '6',
                    name: "vuecli-next",
                    url: "https://cli.vuejs.org/zh"
                },
                {
                    id: '7',
                    name: "element-plus",
                    url: "https://element-plus.gitee.io/#/zh-CN"
                },
                {
                    id: '1',
                    name: "iconfont",
                    url: "https://www.iconfont.cn/"
                },
                {
                    id: '2',
                    name: "钉钉开发文档",
                    url: "https://developers.dingtalk.com/document/app/jsapi-overview"
                }
            ]
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
        },
        jump(url) {
            window.open(url, 'blank')
        },
        localJump(url) {
            this.$router.push({path: url})
        }
    },
}
</script>

<style lang="scss" scoped>
</style>
<template>
    <div class="navbar">
        <i class="fold-i el-hover" @click="handleToggleColse" :class="[foldClass]"></i>
        <div class="fr">
            <i class="el-icon-bell el-hover"></i>
            <i class="el-hover el-icon-setting"></i>
            <div class="el-hover">
                <img :src="imgUrl" alt="头像"/>
                登录人名字
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    data() {
        return {
            imgUrl: require('@/assets/logo.png')
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
.el-hover:hover {
    background-color: #e6f7ff;
}
.navbar {
    height: 64px;
    line-height: 64px;
    background-color: #fff; 
    -webkit-box-shadow: 0 1px 4px rgba(0,21,41,.08);
    box-shadow: 0 1px 4px rgba(0,21,41,.08);
    font-size: 20px;

    i {
        line-height: 64px;
    }

    .fold-i {
        font-size: 25px;
        padding: 0 24px;
        color: #001529;
    }

    .fr {
        display: flex;
        line-height: 64px;

        i {
            padding: 0 10px;
        }

        div {
            display: flex;
            padding: 0 10px;
            font-size: 14px;
            align-items: center;

            img{
                width: 25px;
                height: 25px;
                border-radius: 100%;
                border: 1px solid #999;
                margin-right: 5px;
            }
        }
    }
}
</style>
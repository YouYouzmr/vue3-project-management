<template>
    <div>
        <el-row :gutter="10">
            <el-col v-for="val in list" :key="val" :span="4">
                <div class="base-box">
                    <svg-icon fill="#666" class="" :iconName="val"></svg-icon>
                    <div class="iconName">{{val}}</div>
                </div>
            </el-col>
        </el-row>
        <div>用法： {{str}}</div>
    </div>
</template>

<script>
import SvgIcon from "@/components/SvgIcon/index.vue"

export default {
    data() {
        return {
            list: [],
            str: '<svg-icon :fill="color" :class="class" :iconName="iconName"></svg-icon>'
        }
    },
    components: {
        SvgIcon
    },
    mounted () {
        const files = require.context("@/icons/svg", false, /.svg$/).keys();
        this.list = files.map(val => {
            return val.slice(2, -4)
        })
    },
}
</script>

<style lang="scss" scoped>
.base-box {
    text-align: center;
    .svg-icon {
        width: 36px;
        height: 36px;
        margin-bottom: 15px;
    }

    .iconName {
        color: #999;
    }
}
</style>
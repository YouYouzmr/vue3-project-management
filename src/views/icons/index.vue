<template>
    <div>
        <el-row :gutter="10">
            <el-col v-for="val in list" :key="val" :span="6">
                <div class="base-box">
                    <svg-icon fill="gray" class="" :iconName="val"></svg-icon>
                    <div>{{val}}</div>
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
        width: 30%;
        height: auto;
    }
}
</style>
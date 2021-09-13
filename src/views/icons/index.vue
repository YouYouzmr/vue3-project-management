<template>
    <div>
        <el-row :gutter="10">
            <el-col v-for="val in list" :key="val" :span="4">
                <div class="base-box">
                    <svg-icon
                        :iconName="val"></svg-icon>
                    <div class="iconName">{{val}}</div>
                </div>
            </el-col>
        </el-row>
        <div>用法： {{str}}</div>
        <dl>
            <dl>修改svg-icon图标颜色：</dl>
            <dd>
                <div class="code">
                    {{str}} <br/>
                    {{styleStr}}
                </div>            
            </dd>
        </dl>
    </div>
</template>

<script>
import SvgIcon from "@/components/SvgIcon/index.vue"

export default {
    data() {
        return {
            list: [],
            color: "#999",
            str: '<svg-icon :fill="color" :class="class" :iconName="iconName"></svg-icon>',
            styleStr: `.parent {
                fill: red
            }`
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
    methods:{
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
        fill: #666;
    }
    .svg-icon:hover {
        fill: rgb(56, 173, 255);
    }

    .iconName {
        color: #999;
    }
}
</style>
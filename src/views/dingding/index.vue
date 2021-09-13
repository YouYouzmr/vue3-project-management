<template>
    <div>
        <div class="base-box">
            <div>
                <el-link type="primary"  href="https://developers.dingtalk.com/document/app/read-before-development">钉钉开发文档</el-link>
            </div>
           <h3>1、免登Login</h3>
            <div class="code">
                this.$store.dispach("loginHandler")
            </div>

            <h3>2、选择通讯录</h3>
            <div class="code">
                <div>// 选择单人</div>
                <div> let res = this.$checkUser({multiple: false, number: 1})</div>
                <div>// 选择多人</div>
                <div>let res = this.$checkUser({multiple: true, number: 100})</div>
            </div>
            <el-table :data="checkUserData">
                <el-table-column label="参数" prop="key"></el-table-column>
                <el-table-column label="说明" prop="des"></el-table-column>
                <el-table-column label="类型" prop="type"></el-table-column>
                <el-table-column label="默认值" prop="default"></el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
export default {
    setup () {
        let checkUserData = [
            {
                key: "multiple",
                des: "是否多选",
                type: "boolean",
                default: "false"
            },
            {
                key: "number",
                des: "最多可选多少人",
                type: "number",
                default: "1"
            },
        ]

        return { checkUserData }
    },
    
}
</script>

<style lang="scss" scoped>
h3 {
    padding: 10px 0;
}
</style>
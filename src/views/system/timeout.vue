<template>
    <div class="container">
        <el-form size="small" v-model="form" inline>
            <el-form-item>
                <el-input placeholder="名称" v-model.trim="form.searchInfo"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary">查询</el-button>
            </el-form-item>
            <el-form-item>
                <el-button type="success">新增</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                form: {
                    searchInfo: null
                }
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>
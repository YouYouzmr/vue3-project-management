<template>
    <el-form label-width="80px" ref="ruleForm" v-model="form" :rule="ruleForm" size="medium">
        <el-form-item prop="nickname" required label="昵称">
            <el-input placeholder="请输入" v-model.trim="form.nickname"></el-input>
        </el-form-item>
        <el-form-item prop="age" required label="年龄">
            <el-input placeholder="请输入" v-model.number="form.age"></el-input>
        </el-form-item>
        <el-form-item prop="phone" required label="手机号">
            <el-input placeholder="请输入" v-model.trim="form.phone"></el-input>
        </el-form-item>
        <el-form-item prop="email" required label="邮箱">
            <el-input placeholder="请输入" v-model.trim="form.email"></el-input>
        </el-form-item>
        <el-form-item prop="remark" label="个人简介">
            <el-input v-model="form.remark" rows="4" placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submit('ruleForm')">提 交</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
    export default {
        name: 'selfInfoForm',
        data() {
            return {
                form: {
                    nickname: null,
                    age: null,
                    phone: null,
                    email: null,
                    remark: null
                },
                ruleForm: {
                    nickname: [
                        {required: true, message: '请输入昵称', trigger: 'blur'}
                    ],
                    age: [
                        {required: true, message: '请输入年龄', trigger: ['blur', 'change']},
                        {type: 'number', message: '年龄必须为数字值'}
                    ],
                    phone: [
                        {required: true, message: '请输入手机号', trigger: 'blur'}
                    ],
                    email: [
                        {required: true, message: '请输入邮箱', trigger: 'blur'}
                    ],
                }
            }
        },
        methods: {
            submit(formName) {
                console.log()
                this.$refs[formName].validate((valid) => {
                    if(valid) {
                        console.log('sumit')
                    } else {
                        return false
                    }
                })
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>
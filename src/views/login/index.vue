<template>
    <div>
        <div class="login">
            <div class="loginTitle">企业管理平台</div>
            <el-form :model="form" status-icon :rules="rules" ref="ruleForm">
                <el-form-item prop="pass">
                    <el-input type="text" placeholder="请输入用户名" v-model.trim="form.loginName" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item prop="checkPass">
                    <el-input type="password" placeholder="请输入密码" v-model="form.loginPassword" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-checkbox class="fl" v-model="form.autoLogin">自动登录</el-checkbox>
                    <!-- <el-link class="fr" type="primary">忘记密码</el-link> -->
                </el-form-item>
                <el-form-item>
                    <el-button class="btn" type="primary" @click="submit">提交</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
export default {
    setup () {
        let form = {
                loginName: null,
                loginPassword: null,
                autoLogin: true
            }
        let rules ={

            }
        return {
            form, rules
        }
    },
    methods: {
        submit() {
            this.$router.push({path: '/dashboard/index'})
        }
    },
}
</script>

<style lang="scss" scoped>
@import '@/styles/login.scss'
</style>
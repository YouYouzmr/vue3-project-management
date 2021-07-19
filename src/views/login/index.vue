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
                    <el-button class="btn" type="primary" @click="submit('form')">提交</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
export default {
    setup () {
    },
    data() {
        return {
            form: {
                loginName: null,
                loginPassword: null,
                autoLogin: true
            }
        }
    },
    methods: {
        submit() {
            
        }
    },
}
</script>

<style lang="scss" scoped>
.login {
    width: 40vw;
    min-width: 450px;
    margin: 20vh auto 0;
    padding: 20px 25px;
    box-shadow: 0 0px 5px 2px #999;
    border-radius: 3px;

    .loginTitle {
        text-align: center;
        font-weight: 600px;
        font-size: 30px;
        margin-bottom: 30px;
        color: #505050;
    }

    .btn {
        width: 100%;
    }
}
</style>
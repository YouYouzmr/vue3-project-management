<template>
    <div class="container">
        <el-row :gutter="20">
            <el-col :xs="24" :sm="24" :md="6" :lg="5" :xl="5">
                <div class="base-box">
                    <user-avatar class="avatar-block"></user-avatar>
                </div>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="19" :xl="19">
                <div class="base-box"></div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import userAvatar from "@/components/userInfo/userAvatar"
export default {
    components: {
        userAvatar
    },
}
</script>

<style lang="scss" scoped>

</style>
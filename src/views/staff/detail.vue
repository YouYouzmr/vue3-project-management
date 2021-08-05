<template>
    <div class="container">
        <el-row type="flex" :gutter="20">
            <el-col class="detail-container-left" :xs="24" :sm="8" :md="6" :lg="5" :xl="5">
                <div class="base-box">
                    <user-avatar class="flex-box"></user-avatar>
                </div>
            </el-col>
            <el-col class="defail-container-right" :xs="24" :sm="16" :md="18" :lg="19" :xl="19">
                <div class="base-box">
                    <el-tabs v-model="activeName" @tab-click="handleClick">
                        <el-tab-pane label="个人成长" name="second">个人成长</el-tab-pane>
                        <el-tab-pane label="项目经历" name="third">项目经历</el-tab-pane>
                    </el-tabs>
                </div>
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
// .detail-container-left {
//     width: 300px;
//     max-width: 300px;
//     flex: 0 0 300px;
// }

// .defail-container-right {
//     flex: 1;
// }

// @media only screen and (max-width: 1200px) {
// }
</style>
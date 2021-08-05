<template>
    <div class="page-layout">
        <page-header>
            <page-header-content>
                <template #default>
                  <user-avatar class="flex-box"></user-avatar>
                </template>
                <template #extra>
                  <statistic-box></statistic-box>
                </template>
            </page-header-content>
        </page-header>
    </div>
</template>

<script>
import pageHeader from "@/components/pageLayout/pageHeader"
import pageHeaderContent from "@/components/pageLayout/pageHeaderContent"
import userAvatar from "@/components/userInfo/userAvatar"
import statisticBox from "@/components/statistic/index"


export default {
    components: {
        pageHeader,
        pageHeaderContent,
        userAvatar,
        statisticBox
    },
}
</script>

<style lang="scss" scoped>
.page-layout {
  background-color: #fff;
  margin: -14px -15px 0;
}
</style>
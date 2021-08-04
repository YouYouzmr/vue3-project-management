<template>
    <div class="page-layout">
        <page-header>
            <page-title>
                标题
                <template #extra>
                <el-button size="small" type="primary">按钮</el-button>
                </template>
            </page-title>
            <page-header-content>
                <template #default>

                </template>
            </page-header-content>
        </page-header>
    </div>
</template>

<script>
import pageHeader from "@/components/pageLayout/pageHeader"
import pageTitle from "@/components/pageLayout/pageTitle"
import pageHeaderContent from "@/components/pageLayout/pageHeaderContent"


export default {
    components: {
        pageHeader,
        pageTitle,
        pageHeaderContent
    },
}
</script>

<style lang="scss" scoped>
.page-layout {
  background-color: #fff;
  margin: -14px -15px 0;
}
</style>
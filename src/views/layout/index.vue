<template>
    <div class="layout">
        <navbar/>
        <div class="layout-content">
            <menu-bar/>
            <section>
                <bread-crumb></bread-crumb>
                <transition>
                    <router-view></router-view>
                </transition>
            </section>
        </div>
    </div>
</template>

<script>
import menuBar from "./menu/index"
import navbar from "./navbar/index"
import breadCrumb from "@/components/breadCrumb"

export default {
    components: {
        menuBar,
        navbar,
        breadCrumb
    },
    computed: {
    },
}
</script>

<style lang="scss" scoped>
.layout {
    display: flex;
    flex-direction: row;
    min-height: 100vh;
    flex: auto;
    background-color: #f0f2f5;

    .layout-content {
        min-height: 100vh;
        overflow-x: hidden;
        display: flex;
        flex-direction: column;
        flex: 1;
    }

    section {
        padding: 15px;
    }
}
</style>
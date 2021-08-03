<template>
    <div class="layout">
        <navbar/>
        <div class="layout-content">
            <menu-bar/>
            <main>
                <!-- <bread-crumb></bread-crumb> -->
                <transition>
                    <router-view></router-view>
                </transition>
            </main>
            <footer-bar></footer-bar>
        </div>
    </div>
</template>

<script>
import menuBar from "./menu/index"
import navbar from "./navbar/index"
// import breadCrumb from "@/components/breadCrumb"
import footerBar from "./footer/index"

export default {
    components: {
        menuBar,
        navbar,
        // breadCrumb,
        footerBar
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
        max-height: 100vh;
        overflow-x: hidden;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        flex: 1;
    }

    main {
        padding: 15px;
        min-height: 100vh;
    }
}
</style>
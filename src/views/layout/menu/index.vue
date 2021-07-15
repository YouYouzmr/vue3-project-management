<template>
    <div class="navbar">
        <i class="fold-i" @click="handleToggleColse" :class="[foldClass]"></i>
        <div class="fr">
            <i class="el-icon-bell"></i>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    data() {
        return {

        }
    },
    computed: {
        ...mapState(['sidebar']),
        foldClass() {
            return this.sidebar.isCollapse? 'el-icon-s-unfold' : 'el-icon-s-fold'
        }
    },
    methods: {
        handleToggleColse() {
            this.$store.dispatch('toggleSidebar')
        }
    },
}
</script>

<style lang="scss" scoped>
.navbar {
    height: 64px;
    line-height: 64px;
    background-color: #fff; 
    -webkit-box-shadow: 0 1px 4px rgba(0,21,41,.08);
    box-shadow: 0 1px 4px rgba(0,21,41,.08);
    font-size: 20px;

    i {
        line-height: 64px;

        &:hover {
            background-color: #e6f7ff;
        }
    }

    .fold-i {
        font-size: 25px;
        padding: 0 24px;
        color: #001529;
    }

    .fr {
        i {
            padding: 0 10px;
        }
    }
}
</style>
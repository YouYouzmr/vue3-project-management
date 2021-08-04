<template>
    <div class="page-header-content">
        <div class="page-header-main">
            <slot name="default"></slot>
        </div>
        <div class="page-header-extra">
            <slot name="extra"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.page-header-content {
    display: flex; 
    width: 100%;
    .page-header-main {
        flex: auto;
        width: 100%;
    }
}
@media screen and (max-width: 768px) {
    .page-header-content {
        display: block;
    }

    .page-header-main {
        margin-bottom: 10px;
    }
}
</style>
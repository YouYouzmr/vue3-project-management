<template>
    <div class="page-header-title">
        <div>
            {{title}}
            <slot name="default"></slot>
        </div>
        <div>
            <slot name="extra"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            title: {
                type: String,
                default: ""
            },
        },
    }
</script>

<style lang="scss" scoped>
.page-header-title {
    font-weight: 600px;
    font-size: 26px;
    display: flex;
    justify-content: space-between;
}
</style>
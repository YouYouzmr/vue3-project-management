<template>
    <table-card>
        <template v-slot:title>
            项目名称
            <span class="fr baseColor pointer">更多</span>
        </template>
        <template v-slot:default></template>
    </table-card>
</template>

<script>
import tableCard from "@/components/tableCard/index"
export default {
    components: {
        tableCard,
    }
}
</script>

<style lang="scss" scoped>

</style>
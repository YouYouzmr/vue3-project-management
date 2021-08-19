<template>
    <svg :class="[className]" :fill="fill" aria-hidden="true">
        <use :xlink:href="icon"/>
    </svg>
</template>

<script>
import { computed } from "vue"

export default {
    props: {
        class: {
            type: String,
            default: ""
        },
        iconName: {
            type: String,
            default: "",
        },
        fill: {
            type: String,
            default: ""
        }
    },
    name: "SvgIcon",
    setup (props) {
        const className = computed(() => {
            if(props.class) {
                return `svg-icon ${props.class}`
            } else {
                return "svg-icon"
            }
        })

        const icon = computed(() => {
            return `#icon-${props.iconName}`
        })

        return {className, icon}
    }
}
</script>

<style lang="scss" scoped>
.svg-icon {
    overflow: hidden;
}
</style>
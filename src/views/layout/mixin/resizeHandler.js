import store from "@/store"

const { body } = document
const WIDTH = 1024

const resizeHandler = {
    watch: {
        $route() {
            if(this.sidebar.device === "mobile" && !this.sidebar.isCollapse) {
                store.dispatch("toggleSidebar")
            }
        }
    },
    beforeMount() {
        window.addEventListener('resize', this.resizeHandler)
    },
    mounted() {
        const isMobile = this.isMobile()
        if(isMobile) {
            store.dispatch("toggleDevice", "mobile")
            store.dispatch("CloseSideBar", { withoutAnimation: true })
        }
    },
    methods: {
        isMobile() {
            const rect = body.getBoundingClientRect()
            return rect.width < WIDTH
        },
        resizeHandler() {
            const isMobile = this.isMobile()
            store.dispatch("toggleDevice", isMobile? "mobile" : "PC")

            if(isMobile) {
                store.dispatch("CloseSideBar", { withoutAnimation: true })
            }
        }
    },
}

export default resizeHandler
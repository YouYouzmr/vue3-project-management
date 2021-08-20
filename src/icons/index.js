import SvgIcon from "@/components/SvgIcon/index";

const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context("@/icons/svg", false, /\.svg$/)
requireAll(req)

export default {
    install(app) {
        app.component('svg-icon', SvgIcon)
    }
}
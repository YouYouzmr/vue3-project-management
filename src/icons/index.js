import SvgIcon from "@/components/SvgIcon/index";

const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context("@/icons/svg", false, /\.svg$/)
const result = requireAll(req)

console.log(result)

export default {
    install(app) {
        app.component('svg-icon', SvgIcon)
    }
}
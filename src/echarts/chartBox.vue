<template>
  <div style="width: 100%; height: 300px" ref="chartBox"></div>
</template>

<script>
export default {
  props: {
    option: {
      type: Object,
      default: () => {
        return {};
      },
    }
  },
  data() {
    return {
    };
  },
  mounted() {
    this.echartInit();
  },
  methods: {
    echartInit() {
      let chartDom = this.$refs.chartBox;
      let myChart = this.$echarts.init(chartDom);
      myChart.setOption(this.option);
      window.addEventListener("resize", () => {
        myChart.resize();
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
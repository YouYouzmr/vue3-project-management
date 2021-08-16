<template>
  <div>
    <el-row :gutter="20">
      <el-col
        v-for="val in 3"
        :key="val"
        :xs="12"
        :sm="12"
        :md="8"
        :lg="8"
        :xl="6"
      >
        <div class="base-box">
          <chart-box :option="pieOption"></chart-box>
        </div>
      </el-col>
      <el-col
        v-for="val in 3"
        :key="val"
        :xs="12"
        :sm="12"
        :md="8"
        :lg="8"
        :xl="6"
      >
        <div class="base-box">
          <chart-box :option="lineOption"></chart-box>
        </div>
      </el-col>
    </el-row>
    <div class="base-box">
      <chart-box :option="radarOption"></chart-box>
    </div>
  </div>
</template>

<script>
import chartBox from "@/echarts/chartBox.vue";
export default {
  data() {
    return {
      lineOption: {
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: "line",
            smooth: true,
          },
        ],
      },
      pieOption: {
        title: {
          text: "某站点用户访问来源",
          subtext: "纯属虚构",
          left: "center",
        },
        tooltip: {
          trigger: "item",
        },
        legend: {
          orient: "vertical",
          left: "left",
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "50%",
            data: [
              { value: 1048, name: "搜索引擎" },
              { value: 735, name: "直接访问" },
              { value: 580, name: "邮件营销" },
              { value: 484, name: "联盟广告" },
              { value: 300, name: "视频广告" },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      },
      radarOption: {
        title: {
          text: "基础雷达图",
        },
        legend: {
          data: ["预算分配（Allocated Budget）", "实际开销（Actual Spending）"],
        },
        radar: {
          indicator: [
            { name: "销售（Sales）", max: 6500 },
            { name: "管理（Administration）", max: 16000 },
            { name: "信息技术（Information Technology）", max: 30000 },
            { name: "客服（Customer Support）", max: 38000 },
            { name: "研发（Development）", max: 52000 },
            { name: "市场（Marketing）", max: 25000 },
          ],
        },
        series: [
          {
            name: "预算 vs 开销（Budget vs spending）",
            type: "radar",
            data: [
              {
                value: [4200, 3000, 20000, 35000, 50000, 18000],
                name: "预算分配（Allocated Budget）",
              },
              {
                value: [5000, 14000, 28000, 26000, 42000, 21000],
                name: "实际开销（Actual Spending）",
              },
            ],
          },
        ],
      },
    };
  },
  components: {
    chartBox,
  },
};
</script>

<style lang="scss" scoped>
</style>
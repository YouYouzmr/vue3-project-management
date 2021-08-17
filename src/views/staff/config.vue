<template>
  <div class="container">
    <div class="base-box">
        <el-tabs 
            v-model="activeName" 
            style="min-height: 80vh" 
            stretch
            :tab-position="tabPosition">
            <el-tab-pane v-for="val in tabList" :label="val.label" :key="val.label" :name="val.name">
              <div class="tab-content">
                <div class="title">{{val.label}}</div>
                <selfInfoForm />
              </div>
            </el-tab-pane>
        </el-tabs>
    </div>
  </div>
</template>

<script>
import selfInfoForm from "./components/selfInfoForm"
export default {
  data() {
    return {
      tabList: [
        {
          id: 1,
          name: 'selfInfo',
          label: "个人信息",
          component: 'selfInfoForm'
        },
        // {
        //   id: 2,
        //   name: 'safeInfo',
        //   label: "安全设置",
        //   component: 'safeInfoForm'
        // },
        // {
        //   id: 3,
        //   name: 'noticeInfo',
        //   label: "消息通知",
        //   component: 'noticeMessageForm'
        // }
      ],
      currentCom: 'selfInfoForm',
      activeName: "selfInfo"
    }
  },
  computed: {
    tabPosition() {
      return 'left'
    }
  },
  components: {
    selfInfoForm
  },
  mounted () {
  },
  methods: {
    serach() {
      
    }
  },
};
</script>

<style lang="scss" scoped>
.tab-content {
  padding: 0 20px;

  .title {
    font-weight: 600;
    line-height: 40px;
  }
}
</style>
<template>
  <div class="userInfo">
    <div class="page-header">
      <div class="page-header-title">管理平台</div>
      <div class="page-header-content">
        <div class="page-header-content-left">
          <div class="avatar">
            <img :src="imgUrl" alt="" />
          </div>
          <div class="page-header-content-workplace">
            <div class="page-header-content-workplace-title">哈哈哈, 下午好</div>
            <div class="grayColor">前端开发</div>
          </div>
        </div>
        <el-row class="page-header-content-right">
          <el-col :span="12">
            <p class="grayColor">项目数</p>
            <div class="init-number">56</div>
          </el-col>
          <el-col :span="12">
            <p class="grayColor">项目数</p>
            <div class="init-number">56</div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgUrl: require("@/assets/avatar.jpg"),
    };
  },
};
</script>

<style lang="scss" scoped>
.userInfo {
  background-color: #fff;
  margin: -14px -15px 0;

  .page-header {
    padding: 15px;

    .page-header-title {
      font-weight: 600px;
      font-size: 26px;
    }

    .page-header-content {
      display: flex;
      flex: 1 0;
      margin-top: 15px;

      .page-header-content-left {
        flex: 1;
        display: flex;

        .avatar {
          width: 74px;
          height: 74px;
          img {
              width: 100%;
              height: 100%;
            border-radius: 100%;
          }
        }

        .page-header-content-workplace {
          flex: 1;
          margin: 0 20px;
          .page-header-content-workplace-title {
            font-size: 1.2em;
            margin: 10px 0px;
          }
        }
      }

      .page-header-content-right {
        width: 160px;
        text-align: center;

        p {
            margin-bottom: 10px;
            margin-top: 10px;
        }

        .init-number{
            font-size: 1.2em;
        }
      }
    }
  }
}
</style>
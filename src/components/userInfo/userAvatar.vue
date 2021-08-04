<template>
  <div class="avatar-box">
    <div class="avatar">
      <img :src="imgUrl" alt="" />
    </div>
    <div class="base-info">
      <div class="base-info-title">哈哈哈</div>
      <div class="grayColor">前端开发</div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            imgUrl: require("@/assets/avatar.jpg"),
        }
    },
};
</script>

<style lang="scss" scoped>
.avatar-box {
  .avatar {
    text-align: center;

    img {
      width: 74px;
      height: 100%;
      border-radius: 100%;
    }
  }

  .base-info {
    flex: 1;
    text-align: center;

    .base-info-title {
      font-size: 1.2em;
      margin: 5px 0
    }
  }
}

.flex-box {
  .avatar {
    width: 74px;
  }

  .base-info {
    margin-left: 15px;
    text-align: left;

    .base-info-title {
      margin-top: 10px;
      margin-bottom: 10px;
    }
  }
}
</style>
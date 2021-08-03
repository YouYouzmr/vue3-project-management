<template>
  <div class="t-card">
    <div class="card-title">项目名称</div>
    <div class="grayColor">项目描述</div>
    <div class="grayColor small">
        张无忌
        <span class="fr">几秒前</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.t-card {
  background-color: #fff;
  padding: 10px 15px;
  margin-bottom: 1px;

  &>div {
    margin-bottom: 5px;

    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
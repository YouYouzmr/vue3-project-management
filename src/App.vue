<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  computed: {
    key() {
      return new Date().getTime()
    }
  },
}
</script>

<style>

</style>

<template>
  <el-container>
    <el-main>
      <MainRight></MainRight>
    </el-main>
  </el-container>
</template>

<script>
  import MainRight from '../../../components/Daily/Log/LogAuditMain'

  export default {
    name: "Three",
    data() {
      return {
      }
    },
    components: {
      MainRight
    },
  }
</script>

<style scoped>
</style>

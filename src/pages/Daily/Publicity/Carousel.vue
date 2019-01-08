<template>
  <el-container>
    <el-main>
      <MainRight></MainRight>
    </el-main>
  </el-container>
</template>

<script>
  import MainRight from '../../../components/Daily/Publicity/EssayCarouselMain'

  export default {
    name: "Three",
    data() {
      return {
        rightTitle:'日志列表',
      }
    },
    components: {
      MainRight
    },
  }
</script>

<style scoped>
</style>

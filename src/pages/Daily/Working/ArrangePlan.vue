<template>
  <el-container>
    <el-main>
      <Main></Main>
    </el-main>
  </el-container>
</template>

<script>
  import Main from '../../../components/Daily/Working/ArrangePlanMain'

  export default {
    props: {
      rightTitle: String
    },
    components: {
      Main
    },
    data() {
      return {

      }
    },
    methods: {}
  }
</script>
<style scoped>

</style>
